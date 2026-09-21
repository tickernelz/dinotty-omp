import type { PluginContext } from '../types/dinotty';

export type AgentStatus = 'idle' | 'thinking' | 'running_tool' | 'error';
export type PaneState = 'inactive' | 'starting' | 'running';

export interface SessionMetrics {
  model: string;
  provider: string;
  thinkingLevel: string;
  totalTokens: number;
  totalCost: number;
  turns: number;
  status: AgentStatus;
}

export interface PaneSession {
  cwd: string;
  sessionFile: string;
  isRunning: boolean;
  state: PaneState;
  summary: SessionMetrics | null;
}

export interface ToolCallItem {
  id: string;
  name: string;
  arguments: Record<string, unknown> | string;
  intent?: string;
  result?: string;
  isError?: boolean;
}

export interface TurnMessageItem {
  id: string;
  role: 'user' | 'assistant' | 'toolResult';
  text: string;
  images: string[];
  timestamp: number;
  cost?: number;
  totalTokens?: number;
  thinking?: string;
  toolCalls?: ToolCallItem[];
}

export interface ParsedSession {
  filePath: string;
  sessionId: string;
  cwd: string;
  model: string;
  provider: string;
  totalTokens: number;
  totalCost: number;
  updatedAt: number;
  truncated: boolean;
  messages: TurnMessageItem[];
}

const EMPTY_PANE: PaneSession = {
  cwd: '',
  sessionFile: '',
  isRunning: false,
  state: 'inactive',
  summary: null
};

const sessionCache = new Map<string, { mtime: number; size: number; data: ParsedSession }>();
const SESSION_CACHE_LIMIT = 12;

export async function readPaneSession(ctx: PluginContext): Promise<PaneSession> {
  const paneId = ctx.terminal.activePaneId() || '';
  const cwdHint = ctx.terminal.activeCwd() || '';

  try {
    const result = await ctx.exec.run(['pane', paneId, cwdHint]);
    if (result.code !== 0 || !result.stdout.trim()) return EMPTY_PANE;
    const parsed = JSON.parse(result.stdout.trim()) as Partial<PaneSession>;
    return {
      cwd: parsed.cwd || '',
      sessionFile: parsed.sessionFile || '',
      isRunning: Boolean(parsed.isRunning),
      state: parsed.state || (parsed.isRunning ? 'running' : 'inactive'),
      summary: parsed.summary || null
    };
  } catch {
    return EMPTY_PANE;
  }
}

export function sessionDisplayName(filePath: string): string {
  const base = filePath.replace(/\\/g, '/').split('/').pop() || filePath;
  const match = base.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  if (!match) return base.replace(/\.jsonl$/, '');
  return `${match[1]} ${match[2]}:${match[3]}:${match[4]}`;
}

export function workspaceLabel(filePath: string): string {
  const parts = filePath.replace(/\\/g, '/').split('/');
  const slug = parts[parts.length - 2] || '';
  if (!slug) return 'workspace';
  return slug.replace(/^-/, '').replace(/-/g, '/') || 'home';
}

export async function listSessionFiles(
  ctx: PluginContext,
  sessionsRoot: string,
  workspaceSlug?: string
): Promise<Array<{ path: string; name: string; modified: number }>> {
  const separator = sessionsRoot.includes('\\') ? '\\' : '/';
  const directories: string[] = [];

  if (workspaceSlug) {
    directories.push([sessionsRoot, workspaceSlug].join(separator));
  } else {
    try {
      const rootListing = await ctx.workspace.readDir(sessionsRoot);
      for (const entry of rootListing.entries) {
        if (entry.is_dir && entry.name.startsWith('-')) {
          directories.push([sessionsRoot, entry.name].join(separator));
        }
      }
    } catch {
      return [];
    }
  }

  const files: Array<{ path: string; name: string; modified: number }> = [];
  for (const directory of directories) {
    try {
      const listing = await ctx.workspace.readDir(directory);
      for (const entry of listing.entries) {
        if (entry.is_dir) continue;
        if (!entry.name.endsWith('.jsonl')) continue;
        if (entry.name.startsWith('__')) continue;
        if (!/^\d{4}-\d{2}-\d{2}T/.test(entry.name)) continue;
        const full = [directory, entry.name].join(separator);
        let modified = 0;
        try {
          modified = (await ctx.workspace.stat(full)).modified || 0;
        } catch {}
        files.push({ path: full, name: entry.name, modified });
      }
    } catch {}
  }

  files.sort((a, b) => b.modified - a.modified || b.name.localeCompare(a.name));
  return files;
}

export function parseSessionContent(
  raw: string,
  filePath: string,
  truncated: boolean
): ParsedSession {
  const messages: TurnMessageItem[] = [];
  const pending = new Map<string, ToolCallItem>();

  let sessionId = '';
  let cwd = '';
  let model = 'unknown';
  let provider = 'unknown';
  let totalTokens = 0;
  let totalCost = 0;
  let updatedAt = 0;

  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    let record: any;
    try {
      record = JSON.parse(trimmed);
    } catch {
      continue;
    }

    const stamp =
      typeof record.timestamp === 'number' ? record.timestamp : Date.parse(record.timestamp || '');
    if (!Number.isNaN(stamp) && stamp) updatedAt = stamp;

    if (record.type === 'session') {
      sessionId = record.id || sessionId;
      cwd = record.cwd || cwd;
      continue;
    }

    if (record.type === 'model_change') {
      if (record.model) model = String(record.model);
      if (record.provider) provider = String(record.provider);
      continue;
    }

    if (record.type === 'custom' && record.customType === 'tool_execution_start') {
      const id = record.data?.toolCallId;
      if (id && !pending.has(id)) {
        pending.set(id, { id, name: record.data?.toolName || 'tool', arguments: {}, intent: record.data?.intent });
      }
      continue;
    }

    if (record.type !== 'message') continue;

    const message = record.message || {};
    if (message.model) model = String(message.model);
    if (message.provider) provider = String(message.provider);
    if (typeof message.usage?.totalTokens === 'number') totalTokens = message.usage.totalTokens;
    if (typeof message.usage?.cost?.total === 'number') totalCost += message.usage.cost.total;

    const timestamp = message.timestamp || updatedAt || Date.now();

    if (message.role === 'assistant') {
      let text = '';
      let thinking = '';
      const calls: ToolCallItem[] = [];

      if (Array.isArray(message.content)) {
        for (const part of message.content) {
          if (part?.type === 'text') text += `${part.text || ''}\n`;
          else if (part?.type === 'thinking') thinking += `${part.thinking || part.text || ''}\n`;
          else if (part?.type === 'toolCall') {
            const call: ToolCallItem = {
              id: part.id || `call-${messages.length}-${calls.length}`,
              name: part.name || 'tool',
              arguments: part.arguments ?? {},
              intent: part.intent
            };
            calls.push(call);
            pending.set(call.id, call);
          }
        }
      }

      messages.push({
        id: record.id || `msg-${messages.length}`,
        role: 'assistant',
        text: text.trim(),
        images: [],
        timestamp,
        cost: message.usage?.cost?.total,
        totalTokens: message.usage?.totalTokens,
        thinking: thinking.trim() || undefined,
        toolCalls: calls.length ? calls : undefined
      });
      continue;
    }

    if (message.role === 'user') {
      let text = '';
      const images: string[] = [];
      if (Array.isArray(message.content)) {
        for (const part of message.content) {
          if (part?.type === 'text') text += `${part.text || ''}\n`;
          else if (part?.type === 'image') {
            if (part.url) images.push(part.url);
            else if (part.data) images.push(`data:${part.mediaType || 'image/png'};base64,${part.data}`);
          }
        }
      } else if (typeof message.content === 'string') {
        text = message.content;
      }

      messages.push({
        id: record.id || `msg-${messages.length}`,
        role: 'user',
        text: text.trim(),
        images,
        timestamp
      });
      continue;
    }

    if (message.role === 'toolResult') {
      let text = '';
      if (Array.isArray(message.content)) {
        for (const part of message.content) {
          if (part?.type === 'text') text += `${part.text || ''}\n`;
        }
      } else if (typeof message.content === 'string') {
        text = message.content;
      }

      const call = message.toolCallId ? pending.get(message.toolCallId) : undefined;
      if (call) {
        call.result = text.trim();
        call.isError = Boolean(message.isError);
        pending.delete(message.toolCallId);
      } else {
        messages.push({
          id: record.id || `msg-${messages.length}`,
          role: 'toolResult',
          text: text.trim(),
          images: [],
          timestamp
        });
      }
    }
  }

  return {
    filePath,
    sessionId,
    cwd,
    model,
    provider,
    totalTokens,
    totalCost,
    updatedAt,
    truncated,
    messages
  };
}

export async function loadSession(
  ctx: PluginContext,
  filePath: string
): Promise<ParsedSession | null> {
  try {
    const stat = await ctx.workspace.stat(filePath);
    const cached = sessionCache.get(filePath);
    if (cached && cached.mtime === (stat.modified || 0) && cached.size === stat.size) {
      return cached.data;
    }

    const file = await ctx.workspace.readFile(filePath);
    if (!file.content) return null;

    const parsed = parseSessionContent(file.content, filePath, Boolean(file.truncated));
    sessionCache.set(filePath, { mtime: stat.modified || 0, size: stat.size, data: parsed });

    if (sessionCache.size > SESSION_CACHE_LIMIT) {
      const oldest = sessionCache.keys().next().value;
      if (oldest) sessionCache.delete(oldest);
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearSessionCache(): void {
  sessionCache.clear();
}
