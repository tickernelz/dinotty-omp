import type { PluginContext, QuickPickItem } from '../types/dinotty';
import { launchOmp } from './tmuxLauncher';

export interface PresetItem {
  id: string;
  name: string;
  configPath: string;
  isDefault: boolean;
  modelRoleSummary?: string;
}

export async function discoverPresets(workspace: PluginContext['workspace']): Promise<PresetItem[]> {
  const presets: PresetItem[] = [
    {
      id: 'default',
      name: 'Default Config (config.yml)',
      configPath: '/home/zhafron/.omp/agent/config.yml',
      isDefault: true,
      modelRoleSummary: 'Standard model roles'
    }
  ];

  try {
    const list = await workspace.readDir('~/.omp/agent');
    for (const entry of list.entries) {
      if (entry.is_dir) continue;
      const match = entry.name.match(/^config\.(.+)\.ya?ml$/);
      if (match) {
        const id = match[1];
        presets.push({
          id,
          name: `Profile: ${id}`,
          configPath: `/home/zhafron/.omp/agent/${entry.name}`,
          isDefault: false
        });
      }
    }
  } catch {}

  presets.sort((a, b) => {
    if (a.isDefault) return -1;
    if (b.isDefault) return 1;
    return a.id.localeCompare(b.id);
  });

  return presets;
}

export function buildPresetQuickPickItems(
  ctx: PluginContext,
  presets: PresetItem[],
  target: 'new-tab' | 'split-h' | 'split-v' = 'new-tab'
): QuickPickItem[] {
  return presets.map((p) => ({
    label: p.isDefault ? 'Default OMP Session' : p.id,
    detail: p.configPath,
    icon: 'zap',
    action: () => {
      void launchOmp(ctx, { preset: p.id, target });
    }
  }));
}
