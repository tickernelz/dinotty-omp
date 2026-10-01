import type { PluginContext, QuickPickItem } from '../types/dinotty';
import { launchOmp } from './tmuxLauncher';

export const DEFAULT_PRESET_ID = 'default';

export interface PresetItem {
  id: string;
  label: string;
  modelRoles: Record<string, string>;
  defaultThinkingLevel: string;
  isDefault: boolean;
}

function parsePreset(value: unknown): PresetItem | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  if (!('id' in value) || typeof value.id !== 'string') return null;
  if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(value.id)) return null;
  if (!('modelRoles' in value) || !value.modelRoles || typeof value.modelRoles !== 'object' || Array.isArray(value.modelRoles)) return null;
  if (!('defaultThinkingLevel' in value) || typeof value.defaultThinkingLevel !== 'string') return null;

  const modelRoles: Record<string, string> = {};
  for (const [role, model] of Object.entries(value.modelRoles)) {
    if (typeof model !== 'string') return null;
    modelRoles[role] = model;
  }

  return {
    id: value.id,
    label: value.id,
    modelRoles,
    defaultThinkingLevel: value.defaultThinkingLevel,
    isDefault: value.id === DEFAULT_PRESET_ID
  };
}

export async function discoverPresets(ctx: PluginContext): Promise<PresetItem[]> {
  try {
    const result = await ctx.exec.run(['model-presets']);
    if (result.code !== 0 || !result.stdout.trim()) return [];
    const parsed: unknown = JSON.parse(result.stdout.trim());
    if (!Array.isArray(parsed)) return [];
    const presets: PresetItem[] = [];
    for (const item of parsed) {
      const preset = parsePreset(item);
      if (preset) presets.push(preset);
    }
    return presets.sort((a, b) => {
      if (a.isDefault !== b.isDefault) return a.isDefault ? -1 : 1;
      return a.id.localeCompare(b.id);
    });
  } catch {
    return [];
  }
}

export function buildPresetQuickPickItems(
  ctx: PluginContext,
  presets: PresetItem[],
  target: 'new-tab' | 'split-h' | 'split-v'
): QuickPickItem[] {
  return presets.map((preset) => ({
    label: preset.label,
    detail: `${Object.keys(preset.modelRoles).length} model roles · thinking ${preset.defaultThinkingLevel}`,
    icon: 'zap',
    action: () => {
      void launchOmp(ctx, { preset, target });
    }
  }));
}