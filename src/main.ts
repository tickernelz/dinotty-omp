import type { Disposable, PluginContext, PluginExports } from './types/dinotty';
import MainView from './views/MainView.vue';
import MiniHudOverlay from './overlay/MiniHudOverlay.vue';
import { createOmpMonitor } from './services/statusMonitor';
import { buildPresetQuickPickItems, discoverPresets } from './services/presetService';
import { injectSkill, loadAllSkills, clearSkillCache } from './services/skillService';
import { toggleCopyMode } from './services/tmuxLauncher';
import { clearSessionCache } from './services/sessionResolver';
import { resetHostInfo } from './services/hostInfo';

let teardown: Array<() => void> = [];

function track(disposable: Disposable): void {
  teardown.push(() => disposable.dispose());
}

export function activate(ctx: PluginContext): PluginExports {
  teardown = [];

  track(
    ctx.commands.register('omp.open-session-viewer', () => {
      ctx.open();
    })
  );

  track(
    ctx.commands.register('omp.tmux-copymode', () => {
      void toggleCopyMode(ctx);
    })
  );

  track(
    ctx.commands.registerQuickPick('omp.quick-launch', {
      title: 'OMP: launch a profile in a new tab',
      items: async () => buildPresetQuickPickItems(ctx, await discoverPresets(ctx), 'new-tab')
    })
  );

  track(
    ctx.commands.registerQuickPick('omp.split-launch', {
      title: 'OMP: launch a profile in a split pane',
      items: async () => buildPresetQuickPickItems(ctx, await discoverPresets(ctx), 'split-v')
    })
  );

  track(
    ctx.commands.registerQuickPick('omp.skill-palette', {
      title: 'OMP: search skills and inject one',
      items: async () => {
        const skills = await loadAllSkills(ctx);
        return skills.map((skill) => ({
          label: skill.name,
          detail: skill.description,
          icon: 'book',
          action: () => {
            injectSkill(ctx, skill.name);
          }
        }));
      }
    })
  );

  const monitor = createOmpMonitor(ctx);
  teardown.push(() => monitor.dispose());

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
    monitor: { series: [monitor.series] },
    dispose: deactivate
  };
}

export function deactivate(): void {
  for (const dispose of teardown) {
    try {
      dispose();
    } catch {}
  }
  teardown = [];
  clearSessionCache();
  clearSkillCache();
  resetHostInfo();
}
