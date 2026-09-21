import type { PluginContext } from '../types/dinotty';

export interface LaunchOmpOptions {
  preset?: string;
  target?: 'new-tab' | 'split-h' | 'split-v';
  cwd?: string;
  autoEnterCopyMode?: boolean;
}

export function sanitizeSessionName(rawCwd: string): string {
  if (!rawCwd) return 'omp-main';
  const parts = rawCwd.split('/').filter(Boolean);
  const leaf = parts[parts.length - 1] || 'main';
  const sanitized = leaf.replace(/[^a-zA-Z0-9_-]/g, '_');
  return `omp-${sanitized}`;
}

export function resolveConfigFlag(preset?: string): string {
  if (!preset || preset === 'default') {
    return '';
  }
  return `--config=/home/zhafron/.omp/agent/config.${preset}.yml`;
}

export async function launchOmp(
  ctx: PluginContext,
  opts: LaunchOmpOptions = {}
): Promise<string | null> {
  const activeCwd = opts.cwd || ctx.terminal.activeCwd() || '/home/zhafron/Projects';
  const sessionName = sanitizeSessionName(activeCwd);
  const configFlag = resolveConfigFlag(opts.preset);
  const shellCmd = configFlag ? `omp ${configFlag}; exec zsh` : 'omp; exec zsh';
  const target = opts.target || 'new-tab';

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
    const launchCommand = `tmux new-session -A -s "${sessionName}" -c "${activeCwd}" "bash -c '${shellCmd}'"`;
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
