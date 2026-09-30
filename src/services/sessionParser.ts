export interface SessionRecord {
  type?: string;
  id?: string;
  cwd?: string;
  timestamp?: number | string;
  model?: string;
  provider?: string;
  customType?: string;
  data?: { toolCallId?: string; toolName?: string; intent?: string };
  message?: {
    role?: string;
    model?: string;
    provider?: string;
    timestamp?: number;
    toolCallId?: string;
    isError?: boolean;
    content?: unknown;
    usage?: { totalTokens?: number; cost?: { total?: number } };
  };
}

export interface ContentPart {
  type?: string;
  text?: string;
  thinking?: string;
  id?: string;
  name?: string;
  intent?: string;
  arguments?: Record<string, unknown> | string;
  url?: string;
  data?: string;
  mediaType?: string;
}

export interface ToolCallItem {
  id: string;
  name: string;
  arguments: Record<string, unknown> | string;
  argumentsLabel: string;
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
  timeLabel: string;
  cost?: number;
  totalTokens?: number;
  thinking?: string;
  toolCalls?: ToolCallItem[];
  toolCallId?: string;
  isError?: boolean;
  searchText: string;
}

export interface SessionStats {
  sessionId: string;
  cwd: string;
  model: string;
  provider: string;
  totalTokens: number;
  totalCost: number;
  updatedAt: number;
  turns: number;
}

export interface SessionParserOptions {
  keepMessages?: number;
  countUsage?: boolean;
}

export class SessionParser {
  readonly messages: TurnMessageItem[] = [];
  sessionId = '';
  cwd = '';
  model = 'unknown';
  provider = 'unknown';
  totalTokens = 0;
  totalCost = 0;
  updatedAt = 0;
  turns = 0;
  droppedHead = false;

  private pending = new Map<string, ToolCallItem>();
  private tail = '';
  private readonly keepMessages: number;
  private readonly countUsage: boolean;

  constructor(options: SessionParserOptions = {}) {
    this.keepMessages = options.keepMessages ?? 1500;
    this.countUsage = options.countUsage ?? true;
  }

  push(raw: string, eof: boolean): void {
    if (!raw && !eof && !this.tail) return;
    const text = this.tail + raw;
    const cut = text.lastIndexOf('\n');
    if (cut < 0) {
      this.tail = eof ? '' : text;
      if (eof && text.trim()) this.applyLine(text.trim());
      return;
    }
    const complete = text.slice(0, cut);
    this.tail = text.slice(cut + 1);
    for (const line of complete.split('\n')) {
      const trimmed = line.trim();
      if (trimmed) this.applyLine(trimmed);
    }
    if (eof && this.tail.trim()) {
      this.applyLine(this.tail.trim());
      this.tail = '';
    } else if (eof) {
      this.tail = '';
    }
  }


  stats(): SessionStats {
    return {
      sessionId: this.sessionId,
      cwd: this.cwd,
      model: this.model,
      provider: this.provider,
      totalTokens: this.totalTokens,
      totalCost: this.totalCost,
      updatedAt: this.updatedAt,
      turns: this.turns
    };
  }

  private trim(): void {
    if (this.messages.length <= this.keepMessages) return;
    this.messages.splice(0, this.messages.length - this.keepMessages);
    this.droppedHead = true;
  }

  private applyLine(trimmed: string): void {
    let record: SessionRecord;
    try {
      record = JSON.parse(trimmed) as SessionRecord;
    } catch {
      return;
    }
    if (!record || typeof record !== 'object' || Array.isArray(record)) return;
    const stamp =
      typeof record.timestamp === 'number'
        ? record.timestamp
        : typeof record.timestamp === 'string'
          ? Date.parse(record.timestamp)
          : Number.NaN;

    if (record.type === 'session') {
      this.sessionId = record.id || this.sessionId;
      this.cwd = record.cwd || this.cwd;
      return;
    }

    if (record.type === 'model_change') {
      if (record.model) this.model = String(record.model);
      if (record.provider) this.provider = String(record.provider);
      return;
    }

    if (record.type === 'custom' && record.customType === 'tool_execution_start') {
      const id = record.data?.toolCallId;
      if (id && !this.pending.has(id)) {
        this.pending.set(id, {
          id,
          name: record.data?.toolName || 'tool',
          arguments: {},
          argumentsLabel: '',
          intent: record.data?.intent
        });
      }
      return;
    }

    if (record.type !== 'message') return;
    const message = record.message;
    if (!message || typeof message !== 'object' || Array.isArray(message)) return;
    if (message.model) this.model = String(message.model);
    if (message.provider) this.provider = String(message.provider);
    if (this.countUsage) {
      if (typeof message.usage?.totalTokens === 'number') this.totalTokens = message.usage.totalTokens;
      if (typeof message.usage?.cost?.total === 'number') this.totalCost += message.usage.cost.total;
    }

    const timestamp = message.timestamp || this.updatedAt || Date.now();

    if (message.role === 'assistant') {
      this.turns += 1;
      let text = '';
      let thinking = '';
      const calls: ToolCallItem[] = [];

      const content = message.content;
      if (Array.isArray(content)) {
        for (const raw of content) {
          const part = raw as ContentPart;
          if (part?.type === 'text') text += `${part.text || ''}\n`;
          else if (part?.type === 'thinking') thinking += `${part.thinking || part.text || ''}\n`;
          else if (part?.type === 'toolCall') {
            const args = part.arguments ?? {};
            const call: ToolCallItem = {
              id: part.id || `call-${this.messages.length}-${calls.length}`,
              name: part.name || 'tool',
              arguments: args,
              argumentsLabel: formatToolArguments(args),
              intent: part.intent
            };
            calls.push(call);
            this.pending.set(call.id, call);
          }
        }
      }

      this.messages.push({
        id: record.id || `msg-${timestamp}-${this.messages.length}`,
        role: 'assistant',
        text: text.trim(),
        images: [],
        timestamp,
        timeLabel: clockLabel(timestamp),
        cost: message.usage?.cost?.total,
        totalTokens: message.usage?.totalTokens,
        thinking: thinking.trim() || undefined,
        toolCalls: calls.length ? calls : undefined,
        searchText: ''
      });
      this.trim();
      return;
    }

    if (message.role === 'user') {
      let text = '';
      const images: string[] = [];
      const content = message.content;
      if (Array.isArray(content)) {
        for (const raw of content) {
          const part = raw as ContentPart;
          if (part?.type === 'text') text += `${part.text || ''}\n`;
          else if (part?.type === 'image') {
            if (part.url) images.push(part.url);
            else if (part.data) images.push(`data:${part.mediaType || 'image/png'};base64,${part.data}`);
          }
        }
      } else if (typeof content === 'string') {
        text = content;
      }

      this.messages.push({
        id: record.id || `msg-${timestamp}-${this.messages.length}`,
        role: 'user',
        text: text.trim(),
        images,
        timestamp,
        timeLabel: clockLabel(timestamp),
        searchText: ''
      });
      this.trim();
      return;
    }

    if (message.role === 'toolResult') {
      let text = '';
      const content = message.content;
      if (Array.isArray(content)) {
        for (const raw of content) {
          const part = raw as ContentPart;
          if (part?.type === 'text') text += `${part.text || ''}\n`;
        }
      } else if (typeof content === 'string') {
        text = content;
      }

      const callId = message.toolCallId;
      const call = callId ? this.pending.get(callId) : undefined;
      if (call && callId) {
        call.result = text.trim();
        call.isError = Boolean(message.isError);
        this.pending.delete(callId);
        for (const item of this.messages) {
          if (item.toolCalls?.includes(call)) item.searchText = '';
        }
      } else {
        this.messages.push({
          id: record.id || `msg-${timestamp}-${this.messages.length}`,
          role: 'toolResult',
          text: text.trim(),
          images: [],
          timestamp,
          timeLabel: clockLabel(timestamp),
          toolCallId: callId,
          isError: Boolean(message.isError),
          searchText: ''
        });
        this.trim();
      }
    }
  }
}

export function clockLabel(value: number): string {
  if (!value) return '';
  const date = new Date(value);
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

export function formatToolArguments(value: Record<string, unknown> | string): string {
  if (typeof value === 'string') return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export function searchableText(message: TurnMessageItem): string {
  const parts = [message.text];
  if (message.thinking) parts.push(message.thinking);
  if (message.toolCalls) {
    for (const call of message.toolCalls) {
      parts.push(call.name);
      if (call.intent) parts.push(call.intent);
      if (call.result) parts.push(call.result);
    }
  }
  message.searchText = parts.join(' ').toLowerCase();
  return message.searchText;
}