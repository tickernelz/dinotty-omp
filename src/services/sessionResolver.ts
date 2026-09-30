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

const EMPTY_PANE: PaneSession = {
  cwd: '',
  sessionFile: '',
  isRunning: false,
  state: 'inactive',
  summary: null
};

export interface PaneSessionRequest {
  paneId: string;
  cwd: string;
}

function isSessionMetrics(value: unknown): value is SessionMetrics {
  if (!value || typeof value !== 'object') return false;
  if (!('model' in value) || typeof value.model !== 'string') return false;
  if (!('provider' in value) || typeof value.provider !== 'string') return false;
  if (!('thinkingLevel' in value) || typeof value.thinkingLevel !== 'string') return false;
  if (!('status' in value) || !['idle', 'thinking', 'running_tool', 'error'].includes(String(value.status))) return false;
  if (!('totalTokens' in value) || typeof value.totalTokens !== 'number' || !Number.isSafeInteger(value.totalTokens) || value.totalTokens < 0) return false;
  if (!('turns' in value) || typeof value.turns !== 'number' || !Number.isSafeInteger(value.turns) || value.turns < 0) return false;
  if (!('totalCost' in value) || typeof value.totalCost !== 'number' || !Number.isFinite(value.totalCost) || value.totalCost < 0) return false;
  return true;
}

export async function readPaneSession(
  ctx: PluginContext,
  request?: PaneSessionRequest
): Promise<PaneSession> {
  const paneId = request?.paneId ?? ctx.terminal.activePaneId() ?? '';
  const cwd = request?.cwd ?? ctx.terminal.activeCwd() ?? '';
  try {
    const result = await ctx.exec.run(['pane', paneId, cwd]);
    if (result.code !== 0 || !result.stdout.trim()) return EMPTY_PANE;
    const parsed: unknown = JSON.parse(result.stdout.trim());
    if (!parsed || typeof parsed !== 'object') return EMPTY_PANE;
    if (!('cwd' in parsed) || typeof parsed.cwd !== 'string') return EMPTY_PANE;
    if (!('sessionFile' in parsed) || typeof parsed.sessionFile !== 'string') return EMPTY_PANE;
    if (!('isRunning' in parsed) || typeof parsed.isRunning !== 'boolean') return EMPTY_PANE;
    if (!('state' in parsed) || (parsed.state !== 'inactive' && parsed.state !== 'starting' && parsed.state !== 'running')) return EMPTY_PANE;
    if ((parsed.state === 'inactive') !== !parsed.isRunning) return EMPTY_PANE;
    if (!('summary' in parsed) || (parsed.summary !== null && !isSessionMetrics(parsed.summary))) return EMPTY_PANE;
    return {
      cwd: parsed.cwd,
      sessionFile: parsed.sessionFile,
      isRunning: parsed.isRunning,
      state: parsed.state,
      summary: parsed.summary
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

export interface SessionListItem {
  path: string;
  name: string;
  modified: number;
  displayName: string;
  workspace: string;
  ageLabel: string;
}

export function ageLabel(modified: number, now = Date.now()): string {
  if (!modified) return 'unknown';
  const delta = now - modified;
  const minutes = Math.round(delta / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

export async function listSessionFiles(
  ctx: PluginContext,
  sessionsRoot: string,
  workspaceSlug?: string
): Promise<SessionListItem[]> {
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

  const now = Date.now();
  const files: SessionListItem[] = [];
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
        files.push({
          path: full,
          name: entry.name,
          modified,
          displayName: sessionDisplayName(full),
          workspace: workspaceLabel(full),
          ageLabel: ageLabel(modified, now)
        });
      }
    } catch {}
  }

  files.sort((a, b) => b.modified - a.modified || b.name.localeCompare(a.name));
  return files;
}
