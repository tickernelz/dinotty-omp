import type { PluginContext } from '../types/dinotty';

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  category: string;
  filePath: string;
  body?: string;
}

let cachedSkills: SkillItem[] = [];
let lastSkillsScan = 0;

function parseSkillFrontmatter(content: string): { name: string; description: string; body: string } {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) {
    return { name: '', description: '', body: content };
  }

  const yamlBlock = match[1];
  const body = match[2];
  let name = '';
  let description = '';

  for (const line of yamlBlock.split('\n')) {
    const nameMatch = line.match(/^name:\s*(.+)$/);
    if (nameMatch) name = nameMatch[1].trim().replace(/^['"]|['"]$/g, '');

    const descMatch = line.match(/^description:\s*(.+)$/);
    if (descMatch) description = descMatch[1].trim().replace(/^['"]|['"]$/g, '');
  }

  return { name, description, body };
}

function categorizeSkill(name: string, desc: string): string {
  const text = `${name} ${desc}`.toLowerCase();
  if (text.includes('test') || text.includes('benchmark') || text.includes('gate') || text.includes('verify')) {
    return 'verification';
  }
  if (text.includes('diagnos') || text.includes('audit') || text.includes('triage') || text.includes('trace')) {
    return 'diagnostics';
  }
  if (text.includes('git') || text.includes('mr') || text.includes('ci') || text.includes('deploy') || text.includes('release')) {
    return 'devops';
  }
  if (text.includes('apollo') || text.includes('hmx') || text.includes('dcm') || text.includes('odoo')) {
    return 'workspaces';
  }
  return 'general';
}

export async function loadAllSkills(
  workspace: PluginContext['workspace'],
  force = false
): Promise<SkillItem[]> {
  const now = Date.now();
  if (!force && cachedSkills.length > 0 && now - lastSkillsScan < 60000) {
    return cachedSkills;
  }

  const items: SkillItem[] = [];
  const roots = ['~/.omp/agent/managed-skills', '~/.agents/skills'];

  for (const root of roots) {
    try {
      const list = await workspace.readDir(root);
      for (const entry of list.entries) {
        if (!entry.is_dir) continue;
        const skillName = entry.name;
        const skillPath = `${root}/${skillName}/SKILL.md`;

        try {
          const file = await workspace.readFile(skillPath);
          if (file && file.content) {
            const { name, description, body } = parseSkillFrontmatter(file.content);
            const resolvedName = name || skillName;
            items.push({
              id: resolvedName,
              name: resolvedName,
              description: description || 'No description provided',
              category: categorizeSkill(resolvedName, description),
              filePath: skillPath,
              body
            });
          }
        } catch {}
      }
    } catch {}
  }

  items.sort((a, b) => a.name.localeCompare(b.name));
  cachedSkills = items;
  lastSkillsScan = now;
  return items;
}

export function filterSkills(skills: SkillItem[], query: string, category = 'all'): SkillItem[] {
  const q = query.trim().toLowerCase();
  return skills.filter((s) => {
    if (category !== 'all' && s.category !== category) {
      return false;
    }
    if (!q) return true;
    return s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
  });
}

export function injectSkillIntoActiveTerminal(ctx: PluginContext, skillName: string): boolean {
  const activePane = ctx.terminal.activePaneId();
  if (!activePane) {
    ctx.ui.notify('No active terminal pane found', 'warn');
    return false;
  }

  const cmd = `/skill ${skillName}\n`;
  ctx.terminal.send(activePane, cmd);
  ctx.ui.notify(`Injected skill: ${skillName}`, 'info');
  return true;
}
