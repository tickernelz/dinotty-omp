import type { PluginContext } from '../types/dinotty';

export interface HostInfo {
  platform: string;
  node: string;
  home: string;
  ompHome: string;
  ompHomeExists: boolean;
  tmux: boolean;
  liveClients: number;
}

let cached: HostInfo | null = null;
let inFlight: Promise<HostInfo | null> | null = null;

export function isWindowsPath(value: string): boolean {
  return /^[A-Za-z]:[\\/]/.test(value) || value.includes('\\');
}

export function joinHostPath(base: string, ...parts: string[]): string {
  const separator = isWindowsPath(base) ? '\\' : '/';
  const trimmed = base.replace(/[\\/]+$/, '');
  return [trimmed, ...parts].join(separator);
}

export async function getHostInfo(ctx: PluginContext): Promise<HostInfo | null> {
  if (cached) return cached;
  if (inFlight) return inFlight;

  inFlight = (async () => {
    try {
      const result = await ctx.exec.run(['doctor']);
      if (result.code === 0 && result.stdout.trim()) {
        cached = JSON.parse(result.stdout.trim()) as HostInfo;
        return cached;
      }
    } catch {}
    return null;
  })();

  const value = await inFlight;
  inFlight = null;
  return value;
}

export function resetHostInfo(): void {
  cached = null;
  inFlight = null;
}
