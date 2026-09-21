import type { PluginContext, QuickPickItem } from '../types/dinotty';
import { getHostInfo, joinHostPath } from './hostInfo';
import { launchOmp } from './tmuxLauncher';

export const DEFAULT_PRESET_ID = 'default';

export interface PresetItem {
  id: string;
  label: string;
  fileName: string;
  configPath: string;
  isDefault: boolean;
}

export async function discoverPresets(ctx: PluginContext): Promise<PresetItem[]> {
  const host = await getHostInfo(ctx);
  const agentDir = host?.ompHome || '~/.omp/agent';

  const presets: PresetItem[] = [
    {
      id: DEFAULT_PRESET_ID,
      label: 'Default profile',
      fileName: 'config.yml',
      configPath: joinHostPath(agentDir, 'config.yml'),
      isDefault: true
    }
  ];

  try {
    const listing = await ctx.workspace.readDir(agentDir);
    for (const entry of listing.entries) {
      if (entry.is_dir) continue;
      const match = entry.name.match(/^config\.(.+)\.ya?ml$/);
      if (!match) continue;
      presets.push({
        id: match[1],
        label: match[1],
        fileName: entry.name,
        configPath: joinHostPath(agentDir, entry.name),
        isDefault: false
      });
    }
  } catch {}

  presets.sort((a, b) => {
    if (a.isDefault !== b.isDefault) return a.isDefault ? -1 : 1;
    return a.id.localeCompare(b.id);
  });

  return presets;
}

export function buildPresetQuickPickItems(
  ctx: PluginContext,
  presets: PresetItem[],
  target: 'new-tab' | 'split-h' | 'split-v'
): QuickPickItem[] {
  return presets.map((preset) => ({
    label: preset.isDefault ? 'Default profile' : preset.id,
    detail: preset.configPath,
    icon: 'zap',
    action: () => {
      void launchOmp(ctx, { preset, target });
    }
  }));
}
