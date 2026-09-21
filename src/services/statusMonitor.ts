import type { MonitorSeries, MonitorSeriesDetailRow, PluginContext } from '../types/dinotty';
import { resolveActiveSessionInfo, getSession } from './sessionResolver';

export function createOmpMonitorSeries(ctx: PluginContext): MonitorSeries {
  let activeModel = 'gemini-3.8-flash';
  let activeProvider = 'sub2api-agy';
  let totalTokens = 0;
  let totalCost = 0;
  let status = 'idle';
  let activeSessionId = '';
  let activeCwd = '';

  async function poll() {
    try {
      const info = await resolveActiveSessionInfo(ctx);
      if (info && info.sessionPath) {
        activeCwd = info.cwd;
        const parsed = await getSession(ctx.workspace, info.sessionPath);
        if (parsed) {
          activeModel = parsed.model;
          activeProvider = parsed.provider;
          totalTokens = parsed.totalTokens;
          totalCost = parsed.totalCost;
          status = parsed.status;
          activeSessionId = parsed.sessionId;
        }
      }
    } catch {}
  }

  void poll();
  setInterval(poll, 2500);

  if (ctx.terminal.onDidChangeActivePane) {
    ctx.terminal.onDidChangeActivePane(() => {
      void poll();
    });
  }

  return {
    id: 'dinotty-omp:session-monitor',
    label: 'OMP Agent Status',
    statusIcon: 'Zap',
    defaultVisible: true,
    current: () => {
      return totalCost;
    },
    statusText: () => {
      const shortModel = activeModel.split('/').pop() || 'omp';
      const cleanModel = shortModel.length > 14 ? shortModel.slice(0, 13) + '..' : shortModel;
      const formattedCost = totalCost > 0 ? `$${totalCost.toFixed(2)}` : '$0.00';
      return `OMP: ${cleanModel} · ${formattedCost}`;
    },
    detail: (): MonitorSeriesDetailRow[] => {
      return [
        { label: 'Agent Model', value: activeModel },
        { label: 'Provider', value: activeProvider },
        { label: 'Status', value: status },
        { label: 'Total Tokens', value: totalTokens.toLocaleString() },
        { label: 'Session Cost', value: `$${totalCost.toFixed(4)}` },
        { label: 'Workspace', value: activeCwd || 'Default' },
        { label: 'Session ID', value: activeSessionId || 'none' }
      ];
    }
  };
}
