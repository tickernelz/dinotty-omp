import type { Disposable, PluginContext, PluginExports } from './types/dinotty';
import MainView from './views/MainView.vue';
import MiniHudOverlay from './overlay/MiniHudOverlay.vue';
import { createOmpMonitorSeries } from './services/statusMonitor';
import { discoverPresets, buildPresetQuickPickItems } from './services/presetService';
import { loadAllSkills, injectSkillIntoActiveTerminal } from './services/skillService';
import { toggleCopyMode } from './services/tmuxLauncher';

let activeDisposables: Disposable[] = [];

export function activate(ctx: PluginContext): PluginExports {
  activeDisposables = [];

  const cmdOpenViewer = ctx.commands.register('omp.open-session-viewer', () => {
    ctx.open();
  });
  activeDisposables.push(cmdOpenViewer);

  const cmdToggleCopy = ctx.commands.register('omp.tmux-copymode', () => {
    toggleCopyMode(ctx);
  });
  activeDisposables.push(cmdToggleCopy);

  const cmdQuickLaunch = ctx.commands.registerQuickPick('omp.quick-launch', {
    title: 'OMP: Launch Preset in New Tab',
    items: async () => {
      const presets = await discoverPresets(ctx.workspace);
      return buildPresetQuickPickItems(ctx, presets, 'new-tab');
    }
  });
  activeDisposables.push(cmdQuickLaunch);

  const cmdSplitLaunch = ctx.commands.registerQuickPick('omp.split-launch', {
    title: 'OMP: Launch Preset in Split Pane',
    items: async () => {
      const presets = await discoverPresets(ctx.workspace);
      return buildPresetQuickPickItems(ctx, presets, 'split-v');
    }
  });
  activeDisposables.push(cmdSplitLaunch);

  const cmdSkillPalette = ctx.commands.registerQuickPick('omp.skill-palette', {
    title: 'OMP: Search & Inject Skill (600+ Skills)',
    items: async () => {
      const skills = await loadAllSkills(ctx.workspace);
      return skills.map((s) => ({
        label: s.name,
        detail: s.description,
        icon: 'book',
        action: () => {
          injectSkillIntoActiveTerminal(ctx, s.name);
        }
      }));
    }
  });
  activeDisposables.push(cmdSkillPalette);

  const monitorSeries = createOmpMonitorSeries(ctx);

  return {
    component: MainView,
    overlay: [
      {
        id: 'dinotty-omp:hud',
        component: MiniHudOverlay,
        dragHandle: 'grip',
        interactive: true,
        defaultPosition: 'top-right'
      }
    ],
    monitor: {
      series: [monitorSeries]
    },
    dispose: () => {
      deactivate();
    }
  };
}

export function deactivate(): void {
  for (const d of activeDisposables) {
    try {
      d.dispose();
    } catch {}
  }
  activeDisposables = [];
}
