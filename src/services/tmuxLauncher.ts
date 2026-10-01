import type { PluginContext } from '../types/dinotty';
import { getHostInfo } from './hostInfo';
import { readPaneSession } from './sessionResolver';
import { DEFAULT_PRESET_ID, type PresetItem } from './presetService';

export type LaunchTarget = 'new-tab' | 'split-h' | 'split-v';

export interface LaunchOmpOptions {
  preset?: PresetItem | null;
  target?: LaunchTarget;
  cwd?: string;
}

const PRESET_READY_ATTEMPTS = 20;
const PRESET_READY_DELAY_MS = 500;
const PRESET_SETTLE_DELAY_MS = 750;

export function sanitizeSessionName(rawCwd: string, suffix?: string): string {
  if (!rawCwd) return suffix ? `omp-workspace-${suffix}` : 'omp-workspace';
  const trimmed = rawCwd.replace(/[\\/]+$/, '');
  const segments = trimmed.split(/[\\/]/).filter(Boolean);
  const leaf = segments[segments.length - 1] || 'workspace';
  const safe = leaf.replace(/[^a-zA-Z0-9_-]+/g, '_').slice(0, 32);
  const base = `omp-${safe || 'workspace'}`;
  return suffix ? `${base}-${suffix}` : base;
}

export function buildOmpArgs(_preset?: PresetItem | null): string[] {
  return [];
}

export function buildPresetSwitchCommand(preset?: PresetItem | null): string {
  if (!preset) return '';
  return `/modelpreset switch ${preset.id}\n`;
}

function quoteForShell(value: string): string {
  return `'${value.replace(/'/g, "'\\''")}'`;
}

async function readPaneClientPids(ctx: PluginContext, paneId: string): Promise<number[]> {
  try {
    const result = await ctx.exec.run(['pane-client-pids', paneId]);
    if (result.code !== 0 || !result.stdout.trim()) return [];
    const parsed: unknown = JSON.parse(result.stdout.trim());
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((pid): pid is number => Number.isSafeInteger(pid) && pid > 0);
  } catch {
    return [];
  }
}

function schedulePresetSwitch(
  ctx: PluginContext,
  paneId: string,
  cwd: string,
  preset?: PresetItem | null,
  baselinePids: number[] = []
): void {
  if (!preset) return;
  const baseline = new Set(baselinePids);
  let attempts = 0;
  const check = async (): Promise<void> => {
    if (attempts >= PRESET_READY_ATTEMPTS) {
      ctx.ui.notify(`OMP preset ${preset.id} was not applied before startup timeout`, 'warn');
      return;
    }
    attempts += 1;
    const [pane, pids] = await Promise.all([
      readPaneSession(ctx, { paneId, cwd }),
      readPaneClientPids(ctx, paneId)
    ]);
    const freshClient = pids.some((pid) => !baseline.has(pid));
    const liveStartup = pane.isRunning && (pane.state === 'starting' || pane.state === 'running');
    if (liveStartup && freshClient) {
      const command = buildPresetSwitchCommand(preset);
      if (command) {
        window.setTimeout(() => {
          ctx.terminal.send(paneId, command);
          ctx.ui.notify(`OMP preset ${preset.id} applied`, 'info');
        }, PRESET_SETTLE_DELAY_MS);
      }
      return;
    }
    window.setTimeout(() => void check(), PRESET_READY_DELAY_MS);
  };
  window.setTimeout(() => void check(), PRESET_READY_DELAY_MS);
}

export async function launchOmp(
  ctx: PluginContext,
  options: LaunchOmpOptions = {}
): Promise<string | null> {
  const host = await getHostInfo(ctx);
  const cwd = options.cwd || ctx.terminal.activeCwd() || host?.home || '.';
  const target = options.target || 'new-tab';
  const ompArgs = buildOmpArgs(options.preset);
  const presetLabel = options.preset?.id || DEFAULT_PRESET_ID;
  const useTmux = Boolean(host?.tmux) && host?.platform !== 'win32';

  const directCommand = ['omp', ...ompArgs].map(quoteForShell).join(' ');
  const innerCommand = `${directCommand}; exec "$SHELL"`;

  if (target === 'new-tab') {
    const sessionSuffix = Math.random().toString(36).slice(2, 10);
    const sessionName = sanitizeSessionName(cwd, sessionSuffix);
    const argv = useTmux
      ? ['tmux', 'new-session', '-s', sessionName, '-c', cwd, 'sh', '-c', innerCommand]
      : ['omp', ...ompArgs];

    const paneId = await ctx.terminal.createTerminalTab({
      cwd,
      argv,
      title: `OMP: ${presetLabel}`
    });

    schedulePresetSwitch(ctx, paneId, cwd, options.preset, []);
    ctx.ui.notify(
      useTmux
        ? `OMP started in tmux session ${sessionName}`
        : `OMP started with preset ${presetLabel}`,
      'info'
    );
    return paneId;
  }

  const paneId = await ctx.terminal.splitTerminalPane({
    direction: target === 'split-h' ? 'horizontal' : 'vertical',
    cwd
  });

  if (!paneId) {
    ctx.ui.notify('Split failed: no active terminal tab', 'warn');
    return null;
  }

  const baselinePids = await readPaneClientPids(ctx, paneId);
  const sessionSuffix =
    paneId.replace(/[^a-zA-Z0-9_-]+/g, '').slice(0, 8) ||
    Math.random().toString(36).slice(2, 10);
  const sessionName = sanitizeSessionName(cwd, sessionSuffix);
  const command = useTmux
    ? `tmux new-session -s ${quoteForShell(sessionName)} -c ${quoteForShell(cwd)} sh -c ${quoteForShell(innerCommand)}`
    : directCommand;

  ctx.terminal.send(paneId, `${command}\n`);
  schedulePresetSwitch(ctx, paneId, cwd, options.preset, baselinePids);
  ctx.ui.notify(`OMP started in a split pane with preset ${presetLabel}`, 'info');
  return paneId;
}

export async function launchOmpInActivePane(
  ctx: PluginContext,
  preset?: PresetItem | null
): Promise<boolean> {
  const paneId = ctx.terminal.activePaneId();
  if (!paneId) {
    ctx.ui.notify('No active terminal pane to launch into', 'warn');
    return false;
  }

  const cwd = ctx.terminal.activeCwd() || '';
  const baselinePids = await readPaneClientPids(ctx, paneId);
  const command = ['omp', ...buildOmpArgs(preset)].map(quoteForShell).join(' ');
  ctx.terminal.send(paneId, `${command}\n`);
  schedulePresetSwitch(ctx, paneId, cwd, preset, baselinePids);
  ctx.ui.notify(`Launching OMP with preset ${preset?.id || DEFAULT_PRESET_ID}`, 'info');
  return true;
}

export async function toggleCopyMode(ctx: PluginContext): Promise<void> {
  const host = await getHostInfo(ctx);
  if (host && !host.tmux) {
    ctx.ui.notify('Copy-mode needs tmux, which was not found on this host', 'warn');
    return;
  }

  const paneId = ctx.terminal.activePaneId();
  if (!paneId) {
    ctx.ui.notify('No active terminal pane', 'warn');
    return;
  }

  ctx.terminal.send(paneId, '\u0002[');
  ctx.ui.notify('Tmux copy-mode active. Scroll freely, press q to exit.', 'info');
}