import type { MonitorSeries, MonitorSeriesDetailRow, PluginContext } from '../types/dinotty';
import { peekPaneSession, subscribePaneSession } from './paneSession';

export interface MonitorHandle {
  series: MonitorSeries;
  dispose(): void;
}

export function createOmpMonitor(ctx: PluginContext): MonitorHandle {
  const subscription = subscribePaneSession(ctx, {});

  const series: MonitorSeries = {
    id: 'dinotty-omp:session',
    label: 'OMP session cost',
    scale: 'auto',
    statusIcon: 'Bot',
    defaultVisible: true,
    current: () => {
      const summary = peekPaneSession().summary;
      return summary ? summary.totalCost : null;
    },
    statusText: () => {
      const snapshot = peekPaneSession();
      if (snapshot.state === 'inactive') return null;
      const summary = snapshot.summary;
      if (snapshot.state === 'starting' || !summary) return 'OMP: starting';
      const model = summary.model.split('/').pop() || 'omp';
      const shortModel = model.length > 16 ? `${model.slice(0, 15)}...` : model;
      return `OMP ${shortModel} ${summary.totalCost.toFixed(2)} USD`;
    },
    detail: (): MonitorSeriesDetailRow[] => {
      const snapshot = peekPaneSession();
      if (snapshot.state === 'inactive') {
        return [{ label: 'State', value: 'No OMP session in this tab' }];
      }
      const summary = snapshot.summary;
      if (!summary) {
        return [
          { label: 'State', value: 'Starting' },
          { label: 'Workspace', value: snapshot.cwd || 'unknown' }
        ];
      }
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
    dispose(): void {
      subscription.dispose();
    }
  };
}