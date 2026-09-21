import type { PluginContext } from '../types/dinotty';
import { getHostInfo, joinHostPath } from './hostInfo';

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  category: string;
  source: string;
  filePath: string;
  body: string;
}

const CATEGORY_RULES: Array<{ category: string; match: RegExp }> = [
  { category: 'verification', match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: 'diagnostics', match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: 'delivery', match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: 'authoring', match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];

let cache: SkillItem[] = [];
let cachedAt = 0;
const CACHE_TTL_MS = 60_000;

function classify(name: string, description: string): string {
  const haystack = `${name} ${description}`.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.match.test(haystack)) return rule.category;
  }
  return 'general';
}

function parseFrontmatter(content: string): { name: string; description: string; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { name: '', description: '', body: content };

  let name = '';
  let description = '';
  for (const line of match[1].split(/\r?\n/)) {
    const nameMatch = line.match(/^name:\s*(.+)$/);
    if (nameMatch) name = nameMatch[1].trim().replace(/^['"]|['"]$/g, '');
    const descriptionMatch = line.match(/^description:\s*(.+)$/);
    if (descriptionMatch) description = descriptionMatch[1].trim().replace(/^['"]|['"]$/g, '');
  }

  return { name, description, body: match[2] };
}

async function skillRoots(ctx: PluginContext): Promise<Array<{ label: string; path: string }>> {
  const host = await getHostInfo(ctx);
  const roots: Array<{ label: string; path: string }> = [];

  if (host?.ompHome) {
    roots.push({ label: 'managed', path: joinHostPath(host.ompHome, 'managed-skills') });
    roots.push({ label: 'project', path: joinHostPath(host.ompHome, 'skills') });
  } else {
    roots.push({ label: 'managed', path: '~/.omp/agent/managed-skills' });
    roots.push({ label: 'project', path: '~/.omp/agent/skills' });
  }

  if (host?.home) {
    roots.push({ label: 'user', path: joinHostPath(host.home, '.agents', 'skills') });
  } else {
    roots.push({ label: 'user', path: '~/.agents/skills' });
  }

  return roots;
}

export async function loadAllSkills(ctx: PluginContext, force = false): Promise<SkillItem[]> {
  const now = Date.now();
  if (!force && cache.length && now - cachedAt < CACHE_TTL_MS) return cache;

  const roots = await skillRoots(ctx);
  const separator = roots[0]?.path.includes('\\') ? '\\' : '/';
  const collected = new Map<string, SkillItem>();

  for (const root of roots) {
    let listing;
    try {
      listing = await ctx.workspace.readDir(root.path);
    } catch {
      continue;
    }

    for (const entry of listing.entries) {
      if (!entry.is_dir) continue;
      const skillFile = [root.path, entry.name, 'SKILL.md'].join(separator);
      try {
        const file = await ctx.workspace.readFile(skillFile);
        if (!file.content) continue;
        const { name, description, body } = parseFrontmatter(file.content);
        const resolvedName = name || entry.name;
        if (collected.has(resolvedName)) continue;
        collected.set(resolvedName, {
          id: resolvedName,
          name: resolvedName,
          description: description || 'No description provided.',
          category: classify(resolvedName, description),
          source: root.label,
          filePath: skillFile,
          body
        });
      } catch {}
    }
  }

  cache = [...collected.values()].sort((a, b) => a.name.localeCompare(b.name));
  cachedAt = now;
  return cache;
}

export function filterSkills(skills: SkillItem[], query: string, category = 'all'): SkillItem[] {
  const needle = query.trim().toLowerCase();
  const terms = needle.split(/\s+/).filter(Boolean);

  return skills.filter((skill) => {
    if (category !== 'all' && skill.category !== category) return false;
    if (!terms.length) return true;
    const haystack = `${skill.name} ${skill.description}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

export function injectSkill(ctx: PluginContext, skillName: string): boolean {
  const paneId = ctx.terminal.activePaneId();
  if (!paneId) {
    ctx.ui.notify('No active terminal pane to inject into', 'warn');
    return false;
  }
  ctx.terminal.send(paneId, `/skill ${skillName}\n`);
  ctx.ui.notify(`Injected skill ${skillName}`, 'info');
  return true;
}

export function clearSkillCache(): void {
  cache = [];
  cachedAt = 0;
}
