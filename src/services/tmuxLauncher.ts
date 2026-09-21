import type { PluginContext } from '../types/dinotty';

export interface LaunchOmpOptions {
  preset?: string;
  target?: 'new-tab' | 'split-h' | 'split-v';
  cwd?: string;
  autoEnterCopyMode?: boolean;
}

export function isWindowsPlatform(): boolean {
  if (typeof navigator !== 'undefined') {
    const ua = navigator.userAgent || '';
    const platform = (navigator as unknown as { platform?: string }).platform || '';
    return /Win/i.test(platform) || /Windows/i.test(ua);
  }
  return false;
}

export function sanitizeSessionName(rawCwd: string): string {
  if (!rawCwd) return 'omp-main';
  const clean = rawCwd.replace(/[\\/]+$/, '');
  const parts = clean.split(/[\\/]/).filter(Boolean);
  const leaf = parts[parts.length - 1] || 'main';
  return `omp-${leaf.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
}

export function resolveConfigFlag(preset?: string): string {
  if (!preset || preset === 'default') {
    return '';
  }
  return `--config=~/.omp/agent/config.${preset}.yml`;
}

export async function launchOmp(
  ctx: PluginContext,
  opts: LaunchOmpOptions = {}
): Promise<string | null> {
  const activeCwd = opts.cwd || ctx.terminal.activeCwd() || '.';
  const sessionName = sanitizeSessionName(activeCwd);
  const configFlag = resolveConfigFlag(opts.preset);
  const target = opts.target || 'new-tab';
  const isWin = isWindowsPlatform();

  if (isWin) {
    const ompArgs = configFlag ? [configFlag] : [];
    if (target === 'new-tab') {
      const paneId = await ctx.terminal.createTerminalTab({
        cwd: activeCwd,
        argv: ['omp', ...ompArgs],
        title: `OMP: ${opts.preset || 'default'}`
      });
      ctx.ui.notify(`OMP launched in new tab`, 'info');
      return paneId;
    }

    const direction = target === 'split-h' ? 'horizontal' : 'vertical';
    const newPaneId = await ctx.terminal.splitTerminalPane({
      direction,
      cwd: activeCwd
    });

    if (newPaneId) {
      const cmd = configFlag ? `omp ${configFlag}` : 'omp';
      ctx.terminal.send(newPaneId, `${cmd}\r\n`);
      ctx.ui.notify(`OMP split pane created`, 'info');
      return newPaneId;
    }
    return null;
  }

  const shellCmd = configFlag ? `omp ${configFlag}; exec zsh` : 'omp; exec zsh';

  if (target === 'new-tab') {
    const paneId = await ctx.terminal.createTerminalTab({
      cwd: activeCwd,
      argv: [
        'tmux',
        'new-session',
        '-A',
        '-s',
        sessionName,
        '-c',
        activeCwd,
        'bash',
        '-c',
        shellCmd
      ],
      title: `OMP: ${opts.preset || 'default'}`
    });
    ctx.ui.notify(`OMP session launched in tmux [${sessionName}]`, 'info');
    return paneId;
  }

  const direction = target === 'split-h' ? 'horizontal' : 'vertical';
  const newPaneId = await ctx.terminal.splitTerminalPane({
    direction,
    cwd: activeCwd
  });

  if (newPaneId) {
    const launchCommand = `tmux new-session -A -s "${sessionName}" -c "${activeCwd}" bash -c ${JSON.stringify(shellCmd)}`;
    ctx.terminal.send(newPaneId, `${launchCommand}\n`);
    ctx.ui.notify(`OMP split pane created [${sessionName}]`, 'info');
    return newPaneId;
  }

  return null;
}

export function toggleCopyMode(ctx: PluginContext): void {
  const activePane = ctx.terminal.activePaneId();
  if (!activePane) {
    ctx.ui.notify('No active terminal pane found', 'warn');
    return;
  }
  ctx.terminal.send(activePane, '\x02[');
  ctx.ui.notify('Tmux copy-mode enabled (q to exit)', 'info');
}
