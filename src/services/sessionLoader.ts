import type { PluginContext } from '../types/dinotty';
import { SessionParser, type TurnMessageItem, type SessionStats, type ToolCallItem } from './sessionParser';

export interface SessionChunk {
  start: number;
  end: number;
  size: number;
  eof: boolean;
  content: string;
  sessionId: string;
  cwd: string;
}

export interface LoadedSession extends SessionStats {
  filePath: string;
  messages: TurnMessageItem[];
  droppedHead: boolean;
  startOffset: number;
  loadedBytes: number;
  fileSize: number;
  metricsExact: boolean;
}

export interface LoadSessionOptions {
  tailBytes?: number;
  historyBytes?: number;
  before?: LoadedSession;
}

const DEFAULT_TAIL_BYTES = 2 * 1024 * 1024;
const DEFAULT_HISTORY_BYTES = 6 * 1024 * 1024;
const CHUNK_BYTES = 1024 * 1024;
const KEEP_MESSAGES = 1500;
const CACHE_LIMIT = 6;

const cache = new Map<string, { mtime: number; size: number; data: LoadedSession }>();

function cacheKey(filePath: string, tailBytes: number, historyBytes: number, beforeOffset = 0): string {
  return `${filePath}\u0000${tailBytes}\u0000${historyBytes}\u0000${beforeOffset}`;
}

async function readChunk(
  ctx: PluginContext,
  filePath: string,
  start: number,
  maxBytes: number
): Promise<SessionChunk | null> {
  try {
    const result = await ctx.exec.run(['chunk', filePath, String(start), String(maxBytes)]);
    if (result.code !== 0 || !result.stdout.trim()) return null;
    const parsed = JSON.parse(result.stdout.trim()) as Partial<SessionChunk> & { error?: string };
    if (parsed.error || typeof parsed !== 'object' || parsed === null) return null;
    if (
      typeof parsed.start !== 'number' ||
      typeof parsed.end !== 'number' ||
      typeof parsed.size !== 'number' ||
      typeof parsed.eof !== 'boolean' ||
      typeof parsed.content !== 'string'
    ) return null;
    return parsed as SessionChunk;
  } catch {
    return null;
  }
}

async function readExactMetrics(ctx: PluginContext, filePath: string): Promise<SessionStats | null> {
  const result = await ctx.exec.run(['file-metrics', filePath]).catch(() => null);
  if (!result || result.code !== 0 || !result.stdout.trim()) return null;
  try {
    const parsed = JSON.parse(result.stdout.trim()) as Partial<SessionStats> & { error?: string };
    if (parsed.error || typeof parsed !== 'object' || parsed === null) return null;
    return {
      sessionId: '',
      cwd: '',
      model: typeof parsed.model === 'string' ? parsed.model : 'unknown',
      provider: typeof parsed.provider === 'string' ? parsed.provider : 'unknown',
      totalTokens: typeof parsed.totalTokens === 'number' ? parsed.totalTokens : 0,
      totalCost: typeof parsed.totalCost === 'number' ? parsed.totalCost : 0,
      updatedAt: 0,
      turns: typeof parsed.turns === 'number' ? parsed.turns : 0
    };
  } catch {
    return null;
  }
}

function snapshot(
  parser: SessionParser,
  filePath: string,
  fileSize: number,
  startOffset: number,
  loadedBytes: number
): LoadedSession {
  return {
    ...parser.stats(),
    filePath,
    messages: parser.messages.slice(),
    droppedHead: startOffset > 0 || parser.droppedHead,
    startOffset,
    loadedBytes,
    fileSize,
    metricsExact: false
  };
}

function cloneMessages(messages: TurnMessageItem[]): TurnMessageItem[] {
  return messages.map((message) => ({
    ...message,
    toolCalls: message.toolCalls?.map((call) => ({ ...call }))
  }));
}

function associateToolResults(messages: TurnMessageItem[]): TurnMessageItem[] {
  const calls = new Map<string, { call: ToolCallItem; message: TurnMessageItem }>();
  const result: TurnMessageItem[] = [];
  for (const message of messages) {
    for (const call of message.toolCalls || []) calls.set(call.id, { call, message });
    if (message.role === 'toolResult' && message.toolCallId) {
      const target = calls.get(message.toolCallId);
      if (target) {
        target.call.result = message.text;
        target.call.isError = Boolean(message.isError);
        target.message.searchText = '';
        continue;
      }
    }
    result.push(message);
  }
  return result;
}

function cachedBefore(filePath: string, size: number, modified: number, requestedTail: number): LoadedSession | null {
  let best: LoadedSession | null = null;
  for (const entry of cache.values()) {
    if (
      entry.data.filePath === filePath &&
      entry.size === size &&
      entry.mtime === modified &&
      entry.data.startOffset > 0 &&
      entry.data.loadedBytes < requestedTail &&
      (!best || entry.data.loadedBytes > best.loadedBytes)
    ) {
      best = entry.data;
    }
  }
  return best;
}

async function readRange(
  ctx: PluginContext,
  filePath: string,
  requestedStart: number,
  maxBytes: number,
  boundary?: number
): Promise<{ parser: SessionParser; metadata: SessionChunk | null; startOffset: number; loadedBytes: number } | null> {
  const parser = new SessionParser({ keepMessages: Number.MAX_SAFE_INTEGER });
  let offset = requestedStart;
  let metadata: SessionChunk | null = null;
  let startOffset = requestedStart;
  let loadedBytes = 0;
  for (;;) {
    const chunk = await readChunk(ctx, filePath, offset, CHUNK_BYTES);
    if (!chunk) return null;
    metadata ??= chunk;
    if (loadedBytes === 0) startOffset = chunk.start;
    let content = chunk.content;
    let end = chunk.end;
    if (boundary !== undefined && chunk.start >= boundary) break;
    if (boundary !== undefined && end > boundary) {
      const encoded = new TextEncoder().encode(content);
      content = new TextDecoder().decode(encoded.subarray(0, Math.max(0, boundary - chunk.start)));
      end = boundary;
    }
    const byteLength = new TextEncoder().encode(content).byteLength;
    if (!byteLength && end <= offset) return null;
    parser.push(content, chunk.eof || (boundary !== undefined && end >= boundary));
    loadedBytes += byteLength;
    if (end <= offset || chunk.eof || (boundary !== undefined && end >= boundary) || loadedBytes >= maxBytes) break;
    offset = chunk.end;
  }
  return { parser, metadata, startOffset, loadedBytes };
}

function applyExact(data: LoadedSession, exact: SessionStats | null): LoadedSession {
  if (!exact) return data;
  data.model = exact.model;
  data.provider = exact.provider;
  data.totalTokens = exact.totalTokens;
  data.totalCost = exact.totalCost;
  data.turns = exact.turns;
  data.metricsExact = true;
  return data;
}

export async function loadSessionIncremental(
  ctx: PluginContext,
  filePath: string,
  options: LoadSessionOptions = {}
): Promise<LoadedSession | null> {
  const stat = await ctx.workspace.stat(filePath).catch(() => null);
  if (!stat || stat.is_dir) return null;

  const tailBytes = Math.max(1, options.tailBytes ?? DEFAULT_TAIL_BYTES);
  const historyBytes = Math.max(1, options.historyBytes ?? DEFAULT_HISTORY_BYTES);
  const before = options.before ?? cachedBefore(filePath, stat.size, stat.modified || 0, tailBytes);
  const key = cacheKey(filePath, tailBytes, historyBytes, before?.startOffset || 0);

  const cached = cache.get(key);
  if (cached && cached.mtime === (stat.modified || 0) && cached.size === stat.size) {
    cache.delete(key);
    cache.set(key, cached);
    return cached.data;
  }

  const boundary = before ? Math.min(before.startOffset, stat.size) : undefined;
  const start = boundary === undefined ? Math.max(0, stat.size - tailBytes) : Math.max(0, boundary - historyBytes);
  const range = await readRange(ctx, filePath, start, historyBytes, boundary);
  if (!range) return null;

  let data: LoadedSession;
  if (before) {
    const merged = associateToolResults([...cloneMessages(range.parser.messages), ...cloneMessages(before.messages)]);
    data = {
      ...before,
      messages: merged,
      droppedHead: range.startOffset > 0 || range.parser.droppedHead || before.droppedHead,
      startOffset: range.startOffset,
      loadedBytes: range.loadedBytes + before.loadedBytes,
      fileSize: stat.size,
      metricsExact: false
    };
    if (!data.sessionId && range.parser.sessionId) data.sessionId = range.parser.sessionId;
    if (!data.cwd && range.parser.cwd) data.cwd = range.parser.cwd;
  } else {
    data = snapshot(range.parser, filePath, stat.size, range.startOffset, range.loadedBytes);
    if (!data.sessionId && range.metadata?.sessionId) data.sessionId = range.metadata.sessionId;
    if (!data.cwd && range.metadata?.cwd) data.cwd = range.metadata.cwd;
  }

  applyExact(data, await readExactMetrics(ctx, filePath));
  cache.set(key, { mtime: stat.modified || 0, size: stat.size, data });
  while (cache.size > CACHE_LIMIT) cache.delete(cache.keys().next().value as string);
  return data;
}

export function clearSessionCache(): void {
  cache.clear();
}
