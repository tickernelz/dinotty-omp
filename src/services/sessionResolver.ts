import type { PluginContext } from '../types/dinotty';

export interface TokenUsage {
  input: number;
  output: number;
  cacheRead: number;
  total: number;
}

export interface SessionCost {
  input: number;
  output: number;
  cacheRead: number;
  total: number;
}

export interface ToolCallItem {
  id: string;
  name: string;
  arguments: Record<string, unknown> | string;
  intent?: string;
  result?: string;
  isError?: boolean;
  durationMs?: number;
}

export interface TurnMessageItem {
  id: string;
  role: 'user' | 'assistant' | 'toolResult' | 'system';
  text: string;
  images: string[];
  timestamp: number;
  usage?: TokenUsage;
  cost?: number;
  durationMs?: number;
  thinking?: string;
  thinkingLevel?: string;
  toolCalls?: ToolCallItem[];
}

export interface SessionSummary {
  filePath: string;
  sessionId: string;
  cwd: string;
  updatedAt: number;
  model: string;
  provider: string;
  thinkingLevel: string;
  totalTokens: number;
  totalCost: number;
  turnCount: number;
  status: 'idle' | 'thinking' | 'running_tool' | 'error';
  lastActivityTime: number;
}

export interface ParsedSession extends SessionSummary {
  messages: TurnMessageItem[];
}

const sessionCache = new Map<string, { mtime: number; data: ParsedSession }>();

export function encodeCwdToSessionDir(cwd: string): string {
  if (!cwd) return '-';
  const clean = cwd.replace(/\\/g, '/').replace(/\/+$/, '');
  const rel = clean
    .replace(/^(\/home\/[^/]+|\/Users\/[^/]+|[A-Za-z]:\/Users\/[^/]+|[A-Za-z]:)/i, '')
    .replace(/^\/+/, '');
  if (!rel) return '-';
  return '-' + rel.replace(/[^a-zA-Z0-9_-]/g, '-');
}

export async function resolveActiveSessionInfo(
  ctx: PluginContext
): Promise<{ cwd: string; sessionPath: string } | null> {
  const activePaneId = ctx.terminal.activePaneId() || '';
  try {
    const res = await ctx.exec.run(['pane', activePaneId]);
    if (res.code === 0 && res.stdout.trim()) {
      const parsed = JSON.parse(res.stdout.trim());
      if (!parsed.isRunning || !parsed.sessionFile) {
        return null;
      }
      return {
        cwd: parsed.cwd || '',
        sessionPath: parsed.sessionFile
      };
    }
  } catch {}

  return null;
}

export async function findSessionFiles(
  workspace: PluginContext['workspace'],
  cwd: string
): Promise<string[]> {
  const dirName = encodeCwdToSessionDir(cwd);
  const homeSessions = '~/.omp/agent/sessions';
  const targetDir = `${homeSessions}/${dirName}`;

  try {
    const list = await workspace.readDir(targetDir);
    const jsonlFiles = list.entries
      .filter((e) => !e.is_dir && e.name.endsWith('.jsonl') && !e.name.startsWith('__'))
      .sort((a, b) => b.name.localeCompare(a.name))
      .map((e) => `${targetDir}/${e.name}`);
    if (jsonlFiles.length > 0) {
      return jsonlFiles;
    }
  } catch {}

  try {
    const rootList = await workspace.readDir(homeSessions);
    const subdirs = rootList.entries
      .filter((e) => e.is_dir && e.name.startsWith('-'))
      .map((e) => `${homeSessions}/${e.name}`);

    const allFiles: Array<{ path: string; name: string; mtime: number }> = [];
    for (const sub of subdirs) {
      try {
        const subList = await workspace.readDir(sub);
        for (const e of subList.entries) {
          if (!e.is_dir && e.name.endsWith('.jsonl') && !e.name.startsWith('__')) {
            const filePath = `${sub}/${e.name}`;
            let mtime = 0;
            try {
              const st = await workspace.stat(filePath);
              mtime = st.modified || 0;
            } catch {}
            allFiles.push({ path: filePath, name: e.name, mtime });
          }
        }
      } catch {}
    }

    allFiles.sort((a, b) => b.mtime - a.mtime);
    return allFiles.slice(0, 50).map((f) => f.path);
  } catch {
    return [];
  }
}

export function parseSessionContent(rawContent: string, filePath: string): ParsedSession {
  const lines = rawContent.split('\n');
  let sessionId = '';
  let cwd = '';
  let activeModel = 'unknown';
  let activeProvider = 'unknown';
  let activeThinkingLevel = 'auto';
  let totalCost = 0;
  let totalTokens = 0;
  let status: SessionSummary['status'] = 'idle';
  let lastTimestamp = Date.now();

  const messages: TurnMessageItem[] = [];
  const pendingToolCalls = new Map<string, ToolCallItem>();

  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      if (obj.timestamp) {
        const parsedTime = typeof obj.timestamp === 'number' ? obj.timestamp : Date.parse(obj.timestamp);
        if (!Number.isNaN(parsedTime)) lastTimestamp = parsedTime;
      }

      if (obj.type === 'session') {
        sessionId = obj.id || sessionId;
        cwd = obj.cwd || cwd;
      } else if (obj.type === 'model_change') {
        if (obj.model) activeModel = String(obj.model);
        if (obj.provider) activeProvider = String(obj.provider);
        if (obj.thinkingLevel) activeThinkingLevel = String(obj.thinkingLevel);
      } else if (obj.type === 'thinking_level_change') {
        if (obj.thinkingLevel) activeThinkingLevel = String(obj.thinkingLevel);
      } else if (obj.type === 'custom' && obj.customType === 'tool_execution_start') {
        status = 'running_tool';
        const data = obj.data || {};
        if (data.toolCallId) {
          pendingToolCalls.set(data.toolCallId, {
            id: data.toolCallId,
            name: data.toolName || 'tool',
            arguments: {},
            intent: data.intent
          });
        }
      } else if (obj.type === 'message') {
        const msg = obj.message || {};
        const role = msg.role;
        const msgUsage = msg.usage;
        if (msg.model) activeModel = String(msg.model);
        if (msg.provider) activeProvider = String(msg.provider);

        if (msgUsage) {
          if (typeof msgUsage.totalTokens === 'number') totalTokens = msgUsage.totalTokens;
          if (msgUsage.cost && typeof msgUsage.cost.total === 'number') {
            totalCost += msgUsage.cost.total;
          }
        }

        if (role === 'assistant') {
          let text = '';
          let thinking = '';
          const calls: ToolCallItem[] = [];

          if (Array.isArray(msg.content)) {
            for (const part of msg.content) {
              if (part.type === 'text') {
                text += (part.text || '') + '\n';
              } else if (part.type === 'thinking') {
                thinking += (part.text || part.thinking || '') + '\n';
              } else if (part.type === 'toolCall') {
                const callItem: ToolCallItem = {
                  id: part.id || `call_${Math.random().toString(36).slice(2, 8)}`,
                  name: part.name || 'tool',
                  arguments: part.arguments || {},
                  intent: part.intent
                };
                calls.push(callItem);
                pendingToolCalls.set(callItem.id, callItem);
                status = 'running_tool';
              }
            }
          }

          if (calls.length === 0) {
            status = 'idle';
          }

          messages.push({
            id: obj.id || `msg_${messages.length}`,
            role: 'assistant',
            text: text.trim(),
            images: [],
            timestamp: msg.timestamp || lastTimestamp,
            usage: msgUsage,
            cost: msgUsage?.cost?.total,
            durationMs: msg.duration,
            thinking: thinking.trim() || undefined,
            thinkingLevel: activeThinkingLevel,
            toolCalls: calls.length > 0 ? calls : undefined
          });
        } else if (role === 'user') {
          let text = '';
          const images: string[] = [];
          if (Array.isArray(msg.content)) {
            for (const part of msg.content) {
              if (part.type === 'text') {
                text += (part.text || '') + '\n';
              } else if (part.type === 'image') {
                if (part.url) images.push(part.url);
                else if (part.data) images.push(`data:${part.mediaType || 'image/png'};base64,${part.data}`);
              }
            }
          } else if (typeof msg.content === 'string') {
            text = msg.content;
          }

          status = 'thinking';
          messages.push({
            id: obj.id || `msg_${messages.length}`,
            role: 'user',
            text: text.trim(),
            images,
            timestamp: msg.timestamp || lastTimestamp
          });
        } else if (role === 'toolResult') {
          const toolCallId = msg.toolCallId;
          let resultText = '';
          if (Array.isArray(msg.content)) {
            for (const part of msg.content) {
              if (part.type === 'text') resultText += (part.text || '') + '\n';
            }
          } else if (typeof msg.content === 'string') {
            resultText = msg.content;
          }

          if (toolCallId && pendingToolCalls.has(toolCallId)) {
            const item = pendingToolCalls.get(toolCallId)!;
            item.result = resultText.trim();
            item.isError = Boolean(msg.isError);
          }

          messages.push({
            id: obj.id || `msg_${messages.length}`,
            role: 'toolResult',
            text: resultText.trim(),
            images: [],
            timestamp: msg.timestamp || lastTimestamp
          });
          status = 'idle';
        }
      } else if (obj.type === 'custom' && obj.customType === 'session_exit') {
        status = 'idle';
      }
    } catch {}
  }

  return {
    filePath,
    sessionId,
    cwd,
    updatedAt: lastTimestamp,
    model: activeModel,
    provider: activeProvider,
    thinkingLevel: activeThinkingLevel,
    totalTokens,
    totalCost,
    turnCount: messages.length,
    status,
    lastActivityTime: lastTimestamp,
    messages
  };
}

export async function getSession(
  workspace: PluginContext['workspace'],
  filePath: string
): Promise<ParsedSession | null> {
  try {
    const stat = await workspace.stat(filePath);
    const mtime = stat.modified || 0;
    const cached = sessionCache.get(filePath);
    if (cached && cached.mtime === mtime) {
      return cached.data;
    }

    const file = await workspace.readFile(filePath);
    if (!file.content) return null;

    const parsed = parseSessionContent(file.content, filePath);
    sessionCache.set(filePath, { mtime, data: parsed });
    if (sessionCache.size > 25) {
      const oldest = sessionCache.keys().next().value;
      if (oldest) sessionCache.delete(oldest);
    }
    return parsed;
  } catch {
    return null;
  }
}
