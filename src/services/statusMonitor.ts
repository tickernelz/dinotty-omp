import type { MonitorSeries, MonitorSeriesDetailRow, PluginContext, Disposable } from '../types/dinotty';
import { readPaneSession, type PaneSession } from './sessionResolver';

const POLL_INTERVAL_MS = 2500;

export interface MonitorHandle {
  series: MonitorSeries;
  dispose(): void;
}

export function createOmpMonitor(ctx: PluginContext): MonitorHandle {
  let snapshot: PaneSession = {
    cwd: '',
    sessionFile: '',
    isRunning: false,
    state: 'inactive',
    summary: null
  };

  let inFlight = false;

  async function poll(): Promise<void> {
    if (inFlight) return;
    inFlight = true;
    try {
      snapshot = await readPaneSession(ctx);
    } finally {
      inFlight = false;
    }
  }

  void poll();
  const timer = setInterval(() => void poll(), POLL_INTERVAL_MS);

  let paneListener: Disposable | null = null;
  if (typeof ctx.terminal.onDidChangeActivePane === 'function') {
    paneListener = ctx.terminal.onDidChangeActivePane(() => void poll());
  }

  const series: MonitorSeries = {
    id: 'dinotty-omp:session',
    label: 'OMP session cost',
    scale: 'auto',
    statusIcon: 'Bot',
    defaultVisible: true,
    current: () => (snapshot.summary ? snapshot.summary.totalCost : null),
    statusText: () => {
      if (snapshot.state === 'inactive') return null;
      if (snapshot.state === 'starting') return 'OMP: starting';
      const summary = snapshot.summary;
      if (!summary) return 'OMP: starting';
      const model = summary.model.split('/').pop() || 'omp';
      const shortModel = model.length > 16 ? `${model.slice(0, 15)}...` : model;
      return `OMP ${shortModel} ${summary.totalCost.toFixed(2)} USD`;
    },
    detail: (): MonitorSeriesDetailRow[] => {
      if (snapshot.state === 'inactive') {
        return [{ label: 'State', value: 'No OMP session in this tab' }];
      }
      if (!snapshot.summary) {
        return [
          { label: 'State', value: 'Starting' },
          { label: 'Workspace', value: snapshot.cwd || 'unknown' }
        ];
      }
      const summary = snapshot.summary;
      return [
        { label: 'Model', value: summary.model },
        { label: 'Provider', value: summary.provider },
        { label: 'Thinking', value: summary.thinkingLevel },
        { label: 'Status', value: summary.status.replace('_', ' ') },
        { label: 'Context tokens', value: summary.totalTokens.toLocaleString() },
        { label: 'Assistant turns', value: String(summary.turns) },
        { label: 'Session cost', value: `${summary.totalCost.toFixed(4)} USD` },
        { label: 'Workspace', value: snapshot.cwd || 'unknown' }
      ];
    }
  };

  return {
    series,
    dispose() {
      clearInterval(timer);
      paneListener?.dispose();
    }
  };
}
