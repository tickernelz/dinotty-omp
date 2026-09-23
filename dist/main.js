const i = window.__DINOTTY_VUE__;
if (!i)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const S = i.ref;
i.reactive;
const A = i.computed;
i.watch;
const Ct = i.onMounted;
i.onUnmounted;
const Et = i.onBeforeUnmount;
i.nextTick;
i.h;
const vt = i.defineComponent;
i.getCurrentInstance;
const g = i.toDisplayString, F = i.normalizeClass;
i.normalizeStyle;
const h = i.openBlock, v = i.createElementBlock, t = i.createElementVNode, Ht = i.createBlock, w = i.createVNode, H = i.createCommentVNode, B = i.createTextVNode;
i.withCtx;
const U = i.withDirectives, J = i.withModifiers;
i.withKeys;
const ht = i.vModelText, Pt = i.vModelSelect, Rt = i.vModelCheckbox;
i.vModelRadio;
const rt = i.vShow, Ft = i.mergeProps, V = i.renderList;
i.renderSlot;
i.resolveComponent;
i.resolveDirective;
const Vt = i.resolveDynamicComponent;
i.resolveTransitionHooks;
i.setBlockTracking;
i.useSlots;
i.useAttrs;
i.isRef;
i.unref;
i.toRef;
i.toRefs;
i.customRef;
i.triggerRef;
i.shallowRef;
i.shallowReactive;
i.readonly;
i.proxyRefs;
i.markRaw;
i.toRaw;
i.effectScope;
i.EffectScope;
i.watchEffect;
i.watchPostEffect;
i.watchSyncEffect;
i.Teleport;
i.Suspense;
i.KeepAlive;
i.Transition;
i.TransitionGroup;
const N = i.Fragment;
i.Static;
i.Text;
i.Comment;
const kt = {
  bot: [
    { tag: "path", attrs: { d: "M12 8V4H8" } },
    { tag: "rect", attrs: { width: "16", height: "12", x: "4", y: "8", rx: "2" } },
    { tag: "path", attrs: { d: "M2 14h2" } },
    { tag: "path", attrs: { d: "M20 14h2" } },
    { tag: "path", attrs: { d: "M15 13v2" } },
    { tag: "path", attrs: { d: "M9 13v2" } }
  ],
  terminal: [
    { tag: "polyline", attrs: { points: "4 17 10 11 4 5" } },
    { tag: "line", attrs: { x1: "12", x2: "20", y1: "19", y2: "19" } }
  ],
  layers: [
    { tag: "path", attrs: { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" } },
    { tag: "path", attrs: { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" } },
    { tag: "path", attrs: { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" } }
  ],
  "split-horizontal": [
    { tag: "rect", attrs: { width: "18", height: "18", x: "3", y: "3", rx: "2" } },
    { tag: "path", attrs: { d: "M3 12h18" } }
  ],
  "split-vertical": [
    { tag: "rect", attrs: { width: "18", height: "18", x: "3", y: "3", rx: "2" } },
    { tag: "path", attrs: { d: "M12 3v18" } }
  ],
  copy: [
    { tag: "rect", attrs: { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" } },
    { tag: "path", attrs: { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" } }
  ],
  check: [
    { tag: "path", attrs: { d: "M20 6 9 17l-5-5" } }
  ],
  x: [
    { tag: "path", attrs: { d: "M18 6 6 18" } },
    { tag: "path", attrs: { d: "m6 6 12 12" } }
  ],
  "chevron-down": [
    { tag: "path", attrs: { d: "m6 9 6 6 6-6" } }
  ],
  "chevron-right": [
    { tag: "path", attrs: { d: "m9 18 6-6-6-6" } }
  ],
  "chevron-up": [
    { tag: "path", attrs: { d: "m18 15-6-6-6 6" } }
  ],
  search: [
    { tag: "circle", attrs: { cx: "11", cy: "11", r: "8" } },
    { tag: "path", attrs: { d: "m21 21-4.3-4.3" } }
  ],
  book: [
    { tag: "path", attrs: { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" } },
    { tag: "path", attrs: { d: "M6 6h10" } },
    { tag: "path", attrs: { d: "M6 10h10" } }
  ],
  zap: [
    { tag: "path", attrs: { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" } }
  ],
  history: [
    { tag: "path", attrs: { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" } },
    { tag: "path", attrs: { d: "M3 3v5h5" } },
    { tag: "path", attrs: { d: "M12 7v5l4 2" } }
  ],
  play: [
    { tag: "polygon", attrs: { points: "6 3 20 12 6 21 6 3" } }
  ],
  "external-link": [
    { tag: "path", attrs: { d: "M15 3h6v6" } },
    { tag: "path", attrs: { d: "M10 14 21 3" } },
    { tag: "path", attrs: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" } }
  ],
  refresh: [
    { tag: "path", attrs: { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" } },
    { tag: "path", attrs: { d: "M3 3v5h5" } },
    { tag: "path", attrs: { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" } },
    { tag: "path", attrs: { d: "M16 16h5v5" } }
  ],
  cpu: [
    { tag: "rect", attrs: { width: "16", height: "16", x: "4", y: "4", rx: "2" } },
    { tag: "rect", attrs: { width: "6", height: "6", x: "9", y: "9", rx: "1" } },
    { tag: "path", attrs: { d: "M15 2v2" } },
    { tag: "path", attrs: { d: "M15 20v2" } },
    { tag: "path", attrs: { d: "M2 15h2" } },
    { tag: "path", attrs: { d: "M2 9h2" } },
    { tag: "path", attrs: { d: "M20 15h2" } },
    { tag: "path", attrs: { d: "M20 9h2" } },
    { tag: "path", attrs: { d: "M9 2v2" } },
    { tag: "path", attrs: { d: "M9 20v2" } }
  ],
  "message-square": [
    { tag: "path", attrs: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" } }
  ],
  "file-text": [
    { tag: "path", attrs: { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" } },
    { tag: "path", attrs: { d: "M14 2v4a2 2 0 0 0 2 2h4" } },
    { tag: "path", attrs: { d: "M10 9H8" } },
    { tag: "path", attrs: { d: "M16 13H8" } },
    { tag: "path", attrs: { d: "M16 17H8" } }
  ],
  folder: [
    { tag: "path", attrs: { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" } }
  ],
  info: [
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "10" } },
    { tag: "path", attrs: { d: "M12 16v-4" } },
    { tag: "path", attrs: { d: "M12 8h.01" } }
  ],
  "alert-triangle": [
    { tag: "path", attrs: { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" } },
    { tag: "path", attrs: { d: "M12 9v4" } },
    { tag: "path", attrs: { d: "M12 17h.01" } }
  ],
  "grip-vertical": [
    { tag: "circle", attrs: { cx: "9", cy: "12", r: "1" } },
    { tag: "circle", attrs: { cx: "9", cy: "5", r: "1" } },
    { tag: "circle", attrs: { cx: "9", cy: "19", r: "1" } },
    { tag: "circle", attrs: { cx: "15", cy: "12", r: "1" } },
    { tag: "circle", attrs: { cx: "15", cy: "5", r: "1" } },
    { tag: "circle", attrs: { cx: "15", cy: "19", r: "1" } }
  ],
  filter: [
    { tag: "polygon", attrs: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" } }
  ],
  activity: [
    { tag: "path", attrs: { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" } }
  ],
  wallet: [
    { tag: "path", attrs: { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" } },
    { tag: "path", attrs: { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" } }
  ],
  code: [
    { tag: "polyline", attrs: { points: "16 18 22 12 16 6" } },
    { tag: "polyline", attrs: { points: "8 6 2 12 8 18" } }
  ]
}, Ut = ["width", "height"], jt = /* @__PURE__ */ vt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(e) {
    const s = e, n = A(() => s.size), a = A(() => s.class), c = A(() => kt[s.name] || kt.info);
    return (d, u) => (h(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.value,
      height: n.value,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: F(["omp-svg-icon", a.value]),
      "aria-hidden": "true"
    }, [
      (h(!0), v(N, null, V(c.value, (p, r) => (h(), Ht(Vt(p.tag), Ft({ key: r }, { ref_for: !0 }, p.attrs), null, 16))), 128))
    ], 10, Ut));
  }
}), gt = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [a, c] of s)
    n[a] = c;
  return n;
}, b = /* @__PURE__ */ gt(jt, [["__scopeId", "data-v-35ecedfe"]]), wt = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, Y = /* @__PURE__ */ new Map(), Bt = 12;
async function _t(e) {
  const s = e.terminal.activePaneId() || "", n = e.terminal.activeCwd() || "";
  try {
    const a = await e.exec.run(["pane", s, n]);
    if (a.code !== 0 || !a.stdout.trim()) return wt;
    const c = JSON.parse(a.stdout.trim());
    return {
      cwd: c.cwd || "",
      sessionFile: c.sessionFile || "",
      isRunning: !!c.isRunning,
      state: c.state || (c.isRunning ? "running" : "inactive"),
      summary: c.summary || null
    };
  } catch {
    return wt;
  }
}
function Wt(e) {
  const s = e.replace(/\\/g, "/").split("/").pop() || e, n = s.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return n ? `${n[1]} ${n[2]}:${n[3]}:${n[4]}` : s.replace(/\.jsonl$/, "");
}
function Jt(e) {
  const s = e.replace(/\\/g, "/").split("/"), n = s[s.length - 2] || "";
  return n ? n.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
async function Yt(e, s, n) {
  const a = s.includes("\\") ? "\\" : "/", c = [];
  if (n)
    c.push([s, n].join(a));
  else
    try {
      const u = await e.workspace.readDir(s);
      for (const p of u.entries)
        p.is_dir && p.name.startsWith("-") && c.push([s, p.name].join(a));
    } catch {
      return [];
    }
  const d = [];
  for (const u of c)
    try {
      const p = await e.workspace.readDir(u);
      for (const r of p.entries) {
        if (r.is_dir || !r.name.endsWith(".jsonl") || r.name.startsWith("__") || !/^\d{4}-\d{2}-\d{2}T/.test(r.name)) continue;
        const P = [u, r.name].join(a);
        let M = 0;
        try {
          M = (await e.workspace.stat(P)).modified || 0;
        } catch {
        }
        d.push({ path: P, name: r.name, modified: M });
      }
    } catch {
    }
  return d.sort((u, p) => p.modified - u.modified || p.name.localeCompare(u.name)), d;
}
function Zt(e, s, n) {
  const a = [], c = /* @__PURE__ */ new Map();
  let d = "", u = "", p = "unknown", r = "unknown", P = 0, M = 0, L = 0;
  for (const E of e.split(`
`)) {
    const O = E.trim();
    if (!O) continue;
    let y;
    try {
      y = JSON.parse(O);
    } catch {
      continue;
    }
    const R = typeof y.timestamp == "number" ? y.timestamp : Date.parse(y.timestamp || "");
    if (!Number.isNaN(R) && R && (L = R), y.type === "session") {
      d = y.id || d, u = y.cwd || u;
      continue;
    }
    if (y.type === "model_change") {
      y.model && (p = String(y.model)), y.provider && (r = String(y.provider));
      continue;
    }
    if (y.type === "custom" && y.customType === "tool_execution_start") {
      const $ = y.data?.toolCallId;
      $ && !c.has($) && c.set($, { id: $, name: y.data?.toolName || "tool", arguments: {}, intent: y.data?.intent });
      continue;
    }
    if (y.type !== "message") continue;
    const k = y.message || {};
    k.model && (p = String(k.model)), k.provider && (r = String(k.provider)), typeof k.usage?.totalTokens == "number" && (P = k.usage.totalTokens), typeof k.usage?.cost?.total == "number" && (M += k.usage.cost.total);
    const z = k.timestamp || L || Date.now();
    if (k.role === "assistant") {
      let $ = "", I = "";
      const x = [];
      if (Array.isArray(k.content)) {
        for (const D of k.content)
          if (D?.type === "text") $ += `${D.text || ""}
`;
          else if (D?.type === "thinking") I += `${D.thinking || D.text || ""}
`;
          else if (D?.type === "toolCall") {
            const j = {
              id: D.id || `call-${a.length}-${x.length}`,
              name: D.name || "tool",
              arguments: D.arguments ?? {},
              intent: D.intent
            };
            x.push(j), c.set(j.id, j);
          }
      }
      a.push({
        id: y.id || `msg-${a.length}`,
        role: "assistant",
        text: $.trim(),
        images: [],
        timestamp: z,
        cost: k.usage?.cost?.total,
        totalTokens: k.usage?.totalTokens,
        thinking: I.trim() || void 0,
        toolCalls: x.length ? x : void 0
      });
      continue;
    }
    if (k.role === "user") {
      let $ = "";
      const I = [];
      if (Array.isArray(k.content))
        for (const x of k.content)
          x?.type === "text" ? $ += `${x.text || ""}
` : x?.type === "image" && (x.url ? I.push(x.url) : x.data && I.push(`data:${x.mediaType || "image/png"};base64,${x.data}`));
      else typeof k.content == "string" && ($ = k.content);
      a.push({
        id: y.id || `msg-${a.length}`,
        role: "user",
        text: $.trim(),
        images: I,
        timestamp: z
      });
      continue;
    }
    if (k.role === "toolResult") {
      let $ = "";
      if (Array.isArray(k.content))
        for (const x of k.content)
          x?.type === "text" && ($ += `${x.text || ""}
`);
      else typeof k.content == "string" && ($ = k.content);
      const I = k.toolCallId ? c.get(k.toolCallId) : void 0;
      I ? (I.result = $.trim(), I.isError = !!k.isError, c.delete(k.toolCallId)) : a.push({
        id: y.id || `msg-${a.length}`,
        role: "toolResult",
        text: $.trim(),
        images: [],
        timestamp: z
      });
    }
  }
  return {
    filePath: s,
    sessionId: d,
    cwd: u,
    model: p,
    provider: r,
    totalTokens: P,
    totalCost: M,
    updatedAt: L,
    truncated: n,
    messages: a
  };
}
async function Kt(e, s) {
  try {
    const n = await e.workspace.stat(s), a = Y.get(s);
    if (a && a.mtime === (n.modified || 0) && a.size === n.size)
      return a.data;
    const c = await e.workspace.readFile(s);
    if (!c.content) return null;
    const d = Zt(c.content, s, !!c.truncated);
    if (Y.set(s, { mtime: n.modified || 0, size: n.size, data: d }), Y.size > Bt) {
      const u = Y.keys().next().value;
      u && Y.delete(u);
    }
    return d;
  } catch {
    return null;
  }
}
function Qt() {
  Y.clear();
}
let G = null, Z = null;
function qt(e) {
  return /^[A-Za-z]:[\\/]/.test(e) || e.includes("\\");
}
function K(e, ...s) {
  const n = qt(e) ? "\\" : "/";
  return [e.replace(/[\\/]+$/, ""), ...s].join(n);
}
async function Q(e) {
  if (G) return G;
  if (Z) return Z;
  Z = (async () => {
    try {
      const n = await e.exec.run(["doctor"]);
      if (n.code === 0 && n.stdout.trim())
        return G = JSON.parse(n.stdout.trim()), G;
    } catch {
    }
    return null;
  })();
  const s = await Z;
  return Z = null, s;
}
function Gt() {
  G = null, Z = null;
}
const Xt = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let X = [], ft = 0;
const te = 6e4;
function ee(e, s) {
  const n = `${e} ${s}`.toLowerCase();
  for (const a of Xt)
    if (a.match.test(n)) return a.category;
  return "general";
}
function se(e) {
  const s = e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!s) return { name: "", description: "", body: e };
  let n = "", a = "";
  for (const c of s[1].split(/\r?\n/)) {
    const d = c.match(/^name:\s*(.+)$/);
    d && (n = d[1].trim().replace(/^['"]|['"]$/g, ""));
    const u = c.match(/^description:\s*(.+)$/);
    u && (a = u[1].trim().replace(/^['"]|['"]$/g, ""));
  }
  return { name: n, description: a, body: s[2] };
}
async function ne(e) {
  const s = await Q(e), n = [];
  return s?.ompHome ? (n.push({ label: "managed", path: K(s.ompHome, "managed-skills") }), n.push({ label: "project", path: K(s.ompHome, "skills") })) : (n.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), n.push({ label: "project", path: "~/.omp/agent/skills" })), s?.home ? n.push({ label: "user", path: K(s.home, ".agents", "skills") }) : n.push({ label: "user", path: "~/.agents/skills" }), n;
}
async function xt(e, s = !1) {
  const n = Date.now();
  if (!s && X.length && n - ft < te) return X;
  const a = await ne(e), c = a[0]?.path.includes("\\") ? "\\" : "/", d = /* @__PURE__ */ new Map();
  for (const u of a) {
    let p;
    try {
      p = await e.workspace.readDir(u.path);
    } catch {
      continue;
    }
    for (const r of p.entries) {
      if (!r.is_dir) continue;
      const P = [u.path, r.name, "SKILL.md"].join(c);
      try {
        const M = await e.workspace.readFile(P);
        if (!M.content) continue;
        const { name: L, description: E, body: O } = se(M.content), y = L || r.name;
        if (d.has(y)) continue;
        d.set(y, {
          id: y,
          name: y,
          description: E || "No description provided.",
          category: ee(y, E),
          source: u.label,
          filePath: P,
          body: O
        });
      } catch {
      }
    }
  }
  return X = [...d.values()].sort((u, p) => u.name.localeCompare(p.name)), ft = n, X;
}
function ae(e, s, n = "all") {
  const c = s.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return e.filter((d) => {
    if (n !== "all" && d.category !== n) return !1;
    if (!c.length) return !0;
    const u = `${d.name} ${d.description}`.toLowerCase();
    return c.every((p) => u.includes(p));
  });
}
function Tt(e, s) {
  const n = e.terminal.activePaneId();
  return n ? (e.terminal.send(n, `/skill ${s}
`), e.ui.notify(`Injected skill ${s}`, "info"), !0) : (e.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function oe() {
  X = [], ft = 0;
}
function bt(e, s) {
  const a = e.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean), u = `omp-${(a[a.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 32) || "workspace"}`;
  return s ? `${u}-${s}` : u;
}
function zt(e) {
  return !e || e.isDefault || e.id === st ? [] : [`--config=${e.configPath}`];
}
function tt(e) {
  return `'${e.replace(/'/g, "'\\''")}'`;
}
async function et(e, s = {}) {
  const n = await Q(e), a = s.cwd || e.terminal.activeCwd() || n?.home || ".", c = s.target || "new-tab", d = zt(s.preset), u = s.preset && !s.preset.isDefault ? s.preset.id : "default", p = !!n?.tmux && n?.platform !== "win32", r = ["omp", ...d].map(tt).join(" "), P = `${r}; exec "$SHELL"`;
  if (c === "new-tab") {
    const y = Math.random().toString(36).slice(2, 10), R = bt(a, y), k = p ? ["tmux", "new-session", "-s", R, "-c", a, "sh", "-c", P] : ["omp", ...d], z = await e.terminal.createTerminalTab({
      cwd: a,
      argv: k,
      title: `OMP: ${u}`
    });
    return e.ui.notify(
      p ? `OMP started in tmux session ${R}` : `OMP started with profile ${u}`,
      "info"
    ), z;
  }
  const M = await e.terminal.splitTerminalPane({
    direction: c === "split-h" ? "horizontal" : "vertical",
    cwd: a
  });
  if (!M)
    return e.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const L = M.replace(/[^a-zA-Z0-9_-]+/g, "").slice(0, 8) || Math.random().toString(36).slice(2, 10), E = bt(a, L), O = p ? `tmux new-session -s ${tt(E)} -c ${tt(a)} sh -c ${tt(P)}` : r;
  return e.terminal.send(M, `${O}
`), e.ui.notify(`OMP started in a split pane with profile ${u}`, "info"), M;
}
async function ie(e, s) {
  const n = e.terminal.activePaneId();
  if (!n)
    return e.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const c = ["omp", ...zt(s)].map(tt).join(" ");
  return e.terminal.send(n, `${c}
`), e.ui.notify(
    `Launching OMP with profile ${s && !s.isDefault ? s.id : "default"}`,
    "info"
  ), !0;
}
async function It(e) {
  const s = await Q(e);
  if (s && !s.tmux) {
    e.ui.notify("Copy-mode needs tmux, which was not found on this host", "warn");
    return;
  }
  const n = e.terminal.activePaneId();
  if (!n) {
    e.ui.notify("No active terminal pane", "warn");
    return;
  }
  e.terminal.send(n, "["), e.ui.notify("Tmux copy-mode active. Scroll freely, press q to exit.", "info");
}
const st = "default";
async function ct(e) {
  const n = (await Q(e))?.ompHome || "~/.omp/agent", a = [
    {
      id: st,
      label: "Default profile",
      fileName: "config.yml",
      configPath: K(n, "config.yml"),
      isDefault: !0
    }
  ];
  try {
    const c = await e.workspace.readDir(n);
    for (const d of c.entries) {
      if (d.is_dir) continue;
      const u = d.name.match(/^config\.(.+)\.ya?ml$/);
      u && a.push({
        id: u[1],
        label: u[1],
        fileName: d.name,
        configPath: K(n, d.name),
        isDefault: !1
      });
    }
  } catch {
  }
  return a.sort((c, d) => c.isDefault !== d.isDefault ? c.isDefault ? -1 : 1 : c.id.localeCompare(d.id)), a;
}
function Mt(e, s, n) {
  return s.map((a) => ({
    label: a.isDefault ? "Default profile" : a.id,
    detail: a.configPath,
    icon: "zap",
    action: () => {
      et(e, { preset: a, target: n });
    }
  }));
}
const le = { class: "omp-app" }, re = { class: "omp-app__bar" }, ce = { class: "omp-app__brand" }, ue = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, pe = ["aria-selected", "onClick"], de = {
  key: 0,
  class: "omp-app__badge"
}, me = { class: "omp-app__bar-actions" }, he = ["value"], fe = { class: "omp-app__body" }, ve = { class: "omp-pane omp-pane--sessions" }, ge = { class: "omp-sessions" }, _e = { class: "omp-sessions__head" }, ye = { class: "omp-field omp-field--search" }, ke = { class: "omp-toggle" }, we = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, be = {
  key: 0,
  class: "omp-hint"
}, Me = {
  key: 1,
  class: "omp-hint"
}, Se = ["aria-selected", "onClick"], $e = { class: "omp-session__title" }, Ce = { class: "omp-session__meta" }, Pe = { class: "omp-transcript" }, xe = { class: "omp-transcript__head" }, Te = { class: "omp-transcript__meta" }, ze = { class: "omp-tag" }, Ie = { class: "omp-tag" }, Le = { class: "omp-tag omp-tag--cost" }, Oe = { class: "omp-tag" }, De = { class: "omp-transcript__tools" }, Ne = { class: "omp-field omp-field--search" }, Ae = {
  key: 0,
  class: "omp-banner"
}, Ee = { class: "omp-turns" }, He = {
  key: 0,
  class: "omp-hint"
}, Re = { class: "omp-turn__head" }, Fe = { class: "omp-turn__role" }, Ve = { class: "omp-turn__time" }, Ue = {
  key: 0,
  class: "omp-fold"
}, je = { class: "omp-code" }, Be = {
  key: 1,
  class: "omp-turn__text"
}, We = {
  key: 2,
  class: "omp-turn__images"
}, Je = ["onClick"], Ye = ["src"], Ze = { class: "omp-fold__name" }, Ke = {
  key: 0,
  class: "omp-fold__intent"
}, Qe = { class: "omp-fold__state" }, qe = { class: "omp-code" }, Ge = { class: "omp-code" }, Xe = {
  key: 1,
  class: "omp-empty"
}, ts = { class: "omp-pane omp-pane--skills" }, es = { class: "omp-skills__head" }, ss = { class: "omp-field omp-field--search omp-field--grow" }, ns = { class: "omp-chips" }, as = ["onClick"], os = { class: "omp-skills__body" }, is = { class: "omp-skills__grid" }, ls = {
  key: 0,
  class: "omp-hint"
}, rs = {
  key: 1,
  class: "omp-hint"
}, cs = ["onClick"], us = { class: "omp-skill__title" }, ps = { class: "omp-skill__desc" }, ds = { class: "omp-skill__tags" }, ms = { class: "omp-chip omp-chip--tiny" }, hs = { class: "omp-chip omp-chip--tiny" }, fs = {
  key: 0,
  class: "omp-skill-detail"
}, vs = { class: "omp-skill-detail__desc" }, gs = { class: "omp-code omp-code--tall" }, _s = { class: "omp-pane omp-pane--profiles" }, ys = { class: "omp-profiles__grid" }, ks = { class: "omp-profile__icon" }, ws = { class: "omp-profile__actions" }, bs = ["onClick"], Ms = ["onClick"], Ss = ["onClick"], $s = {
  type: "button",
  class: "omp-lightbox__close",
  "aria-label": "Close image"
}, Cs = ["src"], Ps = "1.0.0", xs = /* @__PURE__ */ vt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(e) {
    const s = e, n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], a = S("sessions"), c = S(""), d = S([]), u = S(!0), p = S(""), r = S(!0), P = S(""), M = S(null), L = S(""), E = S(null), O = S([]), y = S(!0), R = S(""), k = S("all"), z = S(null), $ = S([]), I = S(st), x = A(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: d.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: O.value.length },
      { id: "profiles", label: "Profiles", icon: "zap", badge: $.value.length }
    ]), D = A(() => {
      const f = p.value.trim().toLowerCase();
      return f ? d.value.filter((l) => l.path.toLowerCase().includes(f)) : d.value;
    }), j = A(() => {
      if (!M.value) return [];
      const f = L.value.trim().toLowerCase();
      return f ? M.value.messages.filter((l) => l.text.toLowerCase().includes(f) || l.thinking?.toLowerCase().includes(f) ? !0 : (l.toolCalls || []).some((o) => o.name.toLowerCase().includes(f))) : M.value.messages;
    }), at = A(() => ae(O.value, R.value, k.value)), ot = A(
      () => $.value.find((f) => f.id === I.value) || null
    );
    function it(f) {
      return Wt(f);
    }
    function W(f) {
      return Jt(f);
    }
    function ut(f) {
      return f ? new Date(f).toLocaleTimeString() : "";
    }
    function pt(f) {
      if (!f) return "";
      const l = Date.now() - f, o = Math.round(l / 6e4);
      if (o < 1) return "just now";
      if (o < 60) return `${o}m ago`;
      const C = Math.round(o / 60);
      return C < 24 ? `${C}h ago` : `${Math.round(C / 24)}d ago`;
    }
    function dt(f) {
      return f === "user" ? "terminal" : f === "assistant" ? "bot" : "code";
    }
    function lt(f) {
      return f === "user" ? "You" : f === "assistant" ? "Agent" : "Tool";
    }
    function _(f) {
      if (typeof f == "string") return f;
      try {
        return JSON.stringify(f, null, 2);
      } catch {
        return String(f);
      }
    }
    async function m() {
      u.value = !0;
      try {
        if (!c.value) {
          const l = await Q(s.api);
          c.value = l?.ompHome ? K(l.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let f;
        if (r.value) {
          const l = await _t(s.api);
          if (l.sessionFile) {
            const o = l.sessionFile.replace(/\\/g, "/").split("/");
            f = o[o.length - 2];
          }
        }
        d.value = await Yt(s.api, c.value, f), d.value.length && !d.value.some((l) => l.path === P.value) && await T(d.value[0].path);
      } finally {
        u.value = !1;
      }
    }
    async function T(f) {
      P.value = f, M.value = await Kt(s.api, f);
    }
    async function yt() {
      y.value = !0;
      try {
        O.value = await xt(s.api, !0), !z.value && O.value.length && (z.value = O.value[0]);
      } finally {
        y.value = !1;
      }
    }
    function Lt(f) {
      Tt(s.api, f);
    }
    async function mt(f, l) {
      await et(s.api, { preset: f, target: l });
    }
    async function Ot() {
      await et(s.api, { preset: ot.value, target: "new-tab" });
    }
    async function Dt() {
      M.value && await et(s.api, {
        preset: ot.value,
        target: "new-tab",
        cwd: M.value.cwd || void 0
      });
    }
    async function Nt() {
      if (!M.value) return;
      const f = M.value.messages.map((l) => `### ${lt(l.role)}

${l.text}
`).join(`
---

`);
      try {
        await navigator.clipboard.writeText(f), s.api.ui.notify("Transcript copied to the clipboard", "info");
      } catch {
        s.api.ui.notify("The browser refused clipboard access", "warn");
      }
    }
    return Ct(async () => {
      $.value = await ct(s.api), await m(), await yt();
    }), (f, l) => (h(), v("div", le, [
      t("header", re, [
        t("div", ce, [
          w(b, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          l[8] || (l[8] = t("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          t("span", { class: "omp-app__version" }, "v" + g(Ps))
        ]),
        t("nav", ue, [
          (h(!0), v(N, null, V(x.value, (o) => (h(), v("button", {
            key: o.id,
            type: "button",
            role: "tab",
            class: F(["omp-app__tab", { "is-active": a.value === o.id }]),
            "aria-selected": a.value === o.id,
            onClick: (C) => a.value = o.id
          }, [
            w(b, {
              name: o.icon,
              size: 14
            }, null, 8, ["name"]),
            t("span", null, g(o.label), 1),
            o.badge ? (h(), v("span", de, g(o.badge), 1)) : H("", !0)
          ], 10, pe))), 128))
        ]),
        t("div", me, [
          U(t("select", {
            "onUpdate:modelValue": l[0] || (l[0] = (o) => I.value = o),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch profile"
          }, [
            (h(!0), v(N, null, V($.value, (o) => (h(), v("option", {
              key: o.id,
              value: o.id
            }, g(o.label), 9, he))), 128))
          ], 512), [
            [Pt, I.value]
          ]),
          t("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: Ot
          }, [
            w(b, {
              name: "play",
              size: 13
            }),
            l[9] || (l[9] = t("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      t("main", fe, [
        U(t("section", ve, [
          t("aside", ge, [
            t("div", _e, [
              t("div", ye, [
                w(b, {
                  name: "search",
                  size: 13
                }),
                U(t("input", {
                  "onUpdate:modelValue": l[1] || (l[1] = (o) => p.value = o),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [ht, p.value]
                ])
              ]),
              t("button", {
                type: "button",
                class: F(["omp-icon-btn", { "is-busy": u.value }]),
                title: "Reload session list",
                onClick: m
              }, [
                w(b, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            t("label", ke, [
              U(t("input", {
                "onUpdate:modelValue": l[2] || (l[2] = (o) => r.value = o),
                type: "checkbox",
                onChange: m
              }, null, 544), [
                [Rt, r.value]
              ]),
              l[10] || (l[10] = t("span", null, "This workspace only", -1))
            ]),
            t("div", we, [
              u.value ? (h(), v("p", be, "Loading sessions...")) : D.value.length ? H("", !0) : (h(), v("p", Me, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (h(!0), v(N, null, V(D.value, (o) => (h(), v("button", {
                key: o.path,
                type: "button",
                role: "option",
                class: F(["omp-session", { "is-active": P.value === o.path }]),
                "aria-selected": P.value === o.path,
                onClick: (C) => T(o.path)
              }, [
                t("span", $e, [
                  w(b, {
                    name: "file-text",
                    size: 12
                  }),
                  B(" " + g(it(o.path)), 1)
                ]),
                t("span", Ce, [
                  t("span", null, g(W(o.path)), 1),
                  t("span", null, g(pt(o.modified)), 1)
                ])
              ], 10, Se))), 128))
            ])
          ]),
          t("div", Pe, [
            M.value ? (h(), v(N, { key: 0 }, [
              t("header", xe, [
                t("div", Te, [
                  t("span", ze, [
                    w(b, {
                      name: "cpu",
                      size: 12
                    }),
                    B(g(M.value.model), 1)
                  ]),
                  t("span", Ie, [
                    w(b, {
                      name: "layers",
                      size: 12
                    }),
                    B(g(M.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  t("span", Le, [
                    w(b, {
                      name: "activity",
                      size: 12
                    }),
                    B(g(M.value.totalCost.toFixed(3)) + " USD", 1)
                  ]),
                  t("span", Oe, [
                    w(b, {
                      name: "message-square",
                      size: 12
                    }),
                    B(g(M.value.messages.length) + " entries", 1)
                  ])
                ]),
                t("div", De, [
                  t("div", Ne, [
                    w(b, {
                      name: "search",
                      size: 12
                    }),
                    U(t("input", {
                      "onUpdate:modelValue": l[3] || (l[3] = (o) => L.value = o),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [ht, L.value]
                    ])
                  ]),
                  t("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: Nt
                  }, [
                    w(b, {
                      name: "copy",
                      size: 12
                    }),
                    l[11] || (l[11] = t("span", null, "Copy", -1))
                  ]),
                  t("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: Dt
                  }, [
                    w(b, {
                      name: "external-link",
                      size: 12
                    }),
                    l[12] || (l[12] = t("span", null, "Open", -1))
                  ])
                ])
              ]),
              M.value.truncated ? (h(), v("p", Ae, " This transcript is larger than the host file preview limit, so only the first part is rendered. Live metrics in the HUD are still exact. ")) : H("", !0),
              t("div", Ee, [
                j.value.length ? H("", !0) : (h(), v("p", He, "No turn matches that filter.")),
                (h(!0), v(N, null, V(j.value, (o) => (h(), v("article", {
                  key: o.id,
                  class: F(["omp-turn", `omp-turn--${o.role}`])
                }, [
                  t("header", Re, [
                    t("span", Fe, [
                      w(b, {
                        name: dt(o.role),
                        size: 13
                      }, null, 8, ["name"]),
                      B(" " + g(lt(o.role)), 1)
                    ]),
                    t("span", Ve, g(ut(o.timestamp)), 1)
                  ]),
                  o.thinking ? (h(), v("details", Ue, [
                    l[13] || (l[13] = t("summary", null, "Reasoning", -1)),
                    t("pre", je, g(o.thinking), 1)
                  ])) : H("", !0),
                  o.text ? (h(), v("pre", Be, g(o.text), 1)) : H("", !0),
                  o.images.length ? (h(), v("div", We, [
                    (h(!0), v(N, null, V(o.images, (C, At) => (h(), v("button", {
                      key: At,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (hn) => E.value = C
                    }, [
                      t("img", {
                        src: C,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, Ye)
                    ], 8, Je))), 128))
                  ])) : H("", !0),
                  (h(!0), v(N, null, V(o.toolCalls || [], (C) => (h(), v("details", {
                    key: C.id,
                    class: F(["omp-fold omp-fold--tool", { "is-error": C.isError }])
                  }, [
                    t("summary", null, [
                      t("span", Ze, g(C.name), 1),
                      C.intent ? (h(), v("span", Ke, g(C.intent), 1)) : H("", !0),
                      t("span", Qe, g(C.isError ? "failed" : "ok"), 1)
                    ]),
                    l[15] || (l[15] = t("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    t("pre", qe, g(_(C.arguments)), 1),
                    C.result ? (h(), v(N, { key: 0 }, [
                      l[14] || (l[14] = t("p", { class: "omp-fold__label" }, "Result", -1)),
                      t("pre", Ge, g(C.result), 1)
                    ], 64)) : H("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (h(), v("div", Xe, [
              w(b, {
                name: "history",
                size: 28
              }),
              l[16] || (l[16] = t("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ], 512), [
          [rt, a.value === "sessions"]
        ]),
        U(t("section", ts, [
          t("div", es, [
            t("div", ss, [
              w(b, {
                name: "search",
                size: 14
              }),
              U(t("input", {
                "onUpdate:modelValue": l[4] || (l[4] = (o) => R.value = o),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [ht, R.value]
              ])
            ]),
            t("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: yt
            }, [
              w(b, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          t("div", ns, [
            (h(), v(N, null, V(n, (o) => t("button", {
              key: o,
              type: "button",
              class: F(["omp-chip", { "is-active": k.value === o }]),
              onClick: (C) => k.value = o
            }, g(o), 11, as)), 64))
          ]),
          t("div", os, [
            t("div", is, [
              y.value ? (h(), v("p", ls, "Indexing skills...")) : at.value.length ? H("", !0) : (h(), v("p", rs, "No skill matches that search.")),
              (h(!0), v(N, null, V(at.value, (o) => (h(), v("button", {
                key: o.id,
                type: "button",
                class: F(["omp-skill", { "is-active": z.value?.id === o.id }]),
                onClick: (C) => z.value = o
              }, [
                t("span", us, [
                  w(b, {
                    name: "book",
                    size: 13
                  }),
                  B(" " + g(o.name), 1)
                ]),
                t("span", ps, g(o.description), 1),
                t("span", ds, [
                  t("span", ms, g(o.category), 1),
                  t("span", hs, g(o.source), 1)
                ])
              ], 10, cs))), 128))
            ]),
            z.value ? (h(), v("aside", fs, [
              t("header", null, [
                t("h3", null, g(z.value.name), 1),
                t("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: l[5] || (l[5] = (o) => Lt(z.value.name))
                }, [
                  w(b, {
                    name: "terminal",
                    size: 12
                  }),
                  l[17] || (l[17] = t("span", null, "Inject", -1))
                ])
              ]),
              t("p", vs, g(z.value.description), 1),
              t("pre", gs, g(z.value.body || "This skill has no body."), 1)
            ])) : H("", !0)
          ])
        ], 512), [
          [rt, a.value === "skills"]
        ]),
        U(t("section", _s, [
          l[21] || (l[21] = t("header", { class: "omp-profiles__head" }, [
            t("h2", null, "Profiles"),
            t("p", null, "Discovered from the OMP agent directory. Launch one into a new tab or a split pane.")
          ], -1)),
          t("div", ys, [
            (h(!0), v(N, null, V($.value, (o) => (h(), v("article", {
              key: o.id,
              class: F(["omp-profile", { "is-default": o.isDefault }])
            }, [
              t("header", null, [
                t("span", ks, [
                  w(b, {
                    name: "zap",
                    size: 16
                  })
                ]),
                t("div", null, [
                  t("h3", null, g(o.label), 1),
                  t("code", null, g(o.fileName), 1)
                ])
              ]),
              t("div", ws, [
                t("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: (C) => mt(o, "new-tab")
                }, [
                  w(b, {
                    name: "play",
                    size: 12
                  }),
                  l[18] || (l[18] = t("span", null, "New tab", -1))
                ], 8, bs),
                t("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (C) => mt(o, "split-v")
                }, [
                  w(b, {
                    name: "split-vertical",
                    size: 12
                  }),
                  l[19] || (l[19] = t("span", null, "Split right", -1))
                ], 8, Ms),
                t("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (C) => mt(o, "split-h")
                }, [
                  w(b, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  l[20] || (l[20] = t("span", null, "Split down", -1))
                ], 8, Ss)
              ])
            ], 2))), 128))
          ])
        ], 512), [
          [rt, a.value === "profiles"]
        ])
      ]),
      E.value ? (h(), v("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: l[7] || (l[7] = (o) => E.value = null)
      }, [
        t("button", $s, [
          w(b, {
            name: "x",
            size: 18
          })
        ]),
        t("img", {
          src: E.value,
          alt: "Attachment preview",
          onClick: l[6] || (l[6] = J(() => {
          }, ["stop"]))
        }, null, 8, Cs)
      ])) : H("", !0)
    ]));
  }
}), Ts = /* @__PURE__ */ gt(xs, [["__scopeId", "data-v-c31ec463"]]), zs = { class: "omp-hud__bar" }, Is = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, Ls = ["title"], Os = {
  key: 0,
  class: "omp-hud__peek"
}, Ds = ["title", "aria-expanded"], Ns = { class: "omp-hud__body" }, As = { class: "omp-hud__row" }, Es = ["title"], Hs = { class: "omp-hud__chip-text" }, Rs = ["title"], Fs = { class: "omp-hud__chip-text" }, Vs = { class: "omp-hud__row" }, Us = ["title"], js = { class: "omp-hud__chip-text" }, Bs = ["title"], Ws = { class: "omp-hud__chip-text" }, Js = { class: "omp-hud__status" }, Ys = { class: "omp-hud__turns" }, Zs = { class: "omp-hud__actions" }, Ks = ["disabled", "title"], Qs = {
  key: 1,
  class: "omp-hud__placeholder"
}, qs = { class: "omp-hud__placeholder-title" }, Gs = { class: "omp-hud__placeholder-note" }, Xs = { class: "omp-hud__placeholder" }, tn = { class: "omp-hud__launch" }, en = ["disabled"], sn = ["value"], nn = ["disabled"], St = "dinotty-omp.preset", $t = "dinotty-omp.presets", an = "dinotty-omp.snapshot.", on = 12e4, ln = 2e3, rn = 12e3, cn = /* @__PURE__ */ vt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(e) {
    const s = e, n = S(!1), a = S(!1), c = S(!0), d = S(!0), u = S([]), p = S(st), r = S(D()), P = S(r.value.state !== "inactive");
    let M = null, L = 0;
    const E = [], O = A(
      () => u.value.find((_) => _.id === p.value) || null
    ), y = A(() => {
      const m = (r.value.summary?.model || "").split("/").pop() || "omp";
      return m.length > 18 ? `${m.slice(0, 17)}...` : m;
    }), R = A(() => {
      const _ = r.value.summary?.totalTokens || 0;
      return _ >= 1e6 ? `${(_ / 1e6).toFixed(1)}M tok` : _ >= 1e3 ? `${Math.round(_ / 1e3)}k tok` : `${_} tok`;
    }), k = A(() => {
      if (r.value.state === "inactive") return "Inactive";
      if (r.value.state === "starting") return "Starting";
      switch (r.value.summary?.status) {
        case "running_tool":
          return "Running a tool";
        case "thinking":
          return "Thinking";
        case "error":
          return "Last tool failed";
        default:
          return "Waiting for you";
      }
    }), z = A(() => r.value.state === "inactive" ? "is-inactive" : r.value.state === "starting" ? "is-starting" : `is-${r.value.summary?.status || "idle"}`), $ = A(() => {
      const _ = r.value.cwd;
      if (!_) return "this pane";
      const m = _.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return m[m.length - 1] || _;
    }), I = A(() => r.value.state === "inactive" ? "Inactive" : r.value.state === "starting" ? "Starting" : `${y.value} · ${r.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function x() {
      return an + (s.api.terminal.activePaneId() || "active");
    }
    function D() {
      const _ = { cwd: "", sessionFile: "", isRunning: !1, state: "inactive", summary: null };
      try {
        const m = localStorage.getItem(x());
        if (!m) return _;
        const T = JSON.parse(m);
        return !T || Date.now() - T.at > on || typeof T.pane?.state != "string" ? _ : T.pane;
      } catch {
        return _;
      }
    }
    function j(_) {
      try {
        localStorage.setItem(x(), JSON.stringify({ at: Date.now(), pane: _ }));
      } catch {
      }
    }
    function at() {
      try {
        const _ = localStorage.getItem($t), m = _ ? JSON.parse(_) : [];
        return Array.isArray(m) ? m : [];
      } catch {
        return [];
      }
    }
    function ot(_) {
      try {
        localStorage.setItem($t, JSON.stringify(_));
      } catch {
      }
    }
    function it() {
      try {
        localStorage.setItem(St, p.value);
      } catch {
      }
    }
    async function W() {
      const _ = await _t(s.api);
      if (P.value = !0, _.state === "inactive" && a.value && Date.now() < L) {
        r.value = { ..._, state: "starting" }, j(r.value);
        return;
      }
      (_.state !== "inactive" || Date.now() >= L) && (a.value = !1), r.value = _, j(_);
    }
    function ut() {
      s.api.open();
    }
    async function pt() {
      await It(s.api);
    }
    async function dt() {
      await et(s.api, { preset: O.value, target: "split-v" });
    }
    async function lt() {
      await ie(s.api, O.value) && (it(), a.value = !0, L = Date.now() + rn, r.value = { ...r.value, state: "starting", summary: null }, window.setTimeout(() => void W(), 600));
    }
    return Ct(async () => {
      try {
        const T = localStorage.getItem(St);
        T && (p.value = T);
      } catch {
      }
      const _ = at();
      _.length && (u.value = _, c.value = !1);
      const m = await Q(s.api);
      d.value = m ? m.tmux : !0, u.value = await ct(s.api), ot(u.value), u.value.some((T) => T.id === p.value) || (p.value = st), c.value = !1, await W(), M = setInterval(() => void W(), ln), typeof s.api.terminal.onDidChangeActivePane == "function" && E.push(s.api.terminal.onDidChangeActivePane(() => void W()));
    }), Et(() => {
      M && clearInterval(M);
      for (const _ of E)
        try {
          _.dispose();
        } catch {
        }
    }), (_, m) => (h(), v("section", {
      class: F(["omp-hud", [`is-${r.value.state}`, { "is-collapsed": n.value, "is-dragging": e.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      t("header", zs, [
        t("div", Is, [
          w(b, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          m[6] || (m[6] = t("span", { class: "omp-hud__name" }, "OMP", -1)),
          t("span", {
            class: F(["omp-hud__beacon", z.value]),
            title: k.value
          }, null, 10, Ls),
          n.value ? (h(), v("span", Os, g(I.value), 1)) : H("", !0)
        ]),
        t("div", {
          class: "omp-hud__tools",
          onPointerdown: m[3] || (m[3] = J(() => {
          }, ["stop"])),
          onMousedown: m[4] || (m[4] = J(() => {
          }, ["stop"]))
        }, [
          t("button", {
            type: "button",
            class: "omp-hud__icon",
            title: n.value ? "Expand panel" : "Collapse panel",
            "aria-expanded": !n.value,
            onPointerdown: m[0] || (m[0] = J(() => {
            }, ["stop"])),
            onMousedown: m[1] || (m[1] = J(() => {
            }, ["stop"])),
            onClick: m[2] || (m[2] = J((T) => n.value = !n.value, ["stop"]))
          }, [
            w(b, {
              name: n.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, Ds)
        ], 32)
      ]),
      U(t("div", Ns, [
        r.value.state === "running" && r.value.summary ? (h(), v(N, { key: 0 }, [
          t("div", As, [
            t("span", {
              class: "omp-hud__chip",
              title: `Model: ${r.value.summary.model}`
            }, [
              w(b, {
                name: "cpu",
                size: 12
              }),
              t("span", Hs, g(y.value), 1)
            ], 8, Es),
            t("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${r.value.summary.thinkingLevel}`
            }, [
              w(b, {
                name: "zap",
                size: 12
              }),
              t("span", Fs, g(r.value.summary.thinkingLevel), 1)
            ], 8, Rs)
          ]),
          t("div", Vs, [
            t("span", {
              class: "omp-hud__chip",
              title: `${r.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              w(b, {
                name: "layers",
                size: 12
              }),
              t("span", js, g(R.value), 1)
            ], 8, Us),
            t("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${r.value.summary.totalCost.toFixed(4)} USD`
            }, [
              w(b, {
                name: "activity",
                size: 12
              }),
              t("span", Ws, g(r.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, Bs)
          ]),
          t("p", Js, [
            t("span", {
              class: F(["omp-hud__status-dot", z.value])
            }, null, 2),
            B(" " + g(k.value) + " ", 1),
            t("span", Ys, g(r.value.summary.turns) + " turns", 1)
          ]),
          t("div", Zs, [
            t("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: ut
            }, [
              w(b, {
                name: "history",
                size: 14
              }),
              m[7] || (m[7] = t("span", null, "Explorer", -1))
            ]),
            t("button", {
              type: "button",
              class: "omp-hud__action",
              disabled: !d.value,
              title: d.value ? "Enter tmux copy-mode to scroll history" : "tmux was not found on this host",
              onClick: pt
            }, [
              w(b, {
                name: "terminal",
                size: 14
              }),
              m[8] || (m[8] = t("span", null, "Scroll", -1))
            ], 8, Ks),
            t("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: dt
            }, [
              w(b, {
                name: "split-vertical",
                size: 14
              }),
              m[9] || (m[9] = t("span", null, "Split", -1))
            ])
          ])
        ], 64)) : r.value.state === "starting" || !P.value ? (h(), v("div", Qs, [
          m[10] || (m[10] = t("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          t("p", qs, g(P.value ? "Starting OMP" : "Reading session"), 1),
          t("p", Gs, "Waiting for the first turn in " + g($.value), 1)
        ])) : (h(), v(N, { key: 2 }, [
          t("div", Xs, [
            w(b, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            m[11] || (m[11] = t("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            m[12] || (m[12] = t("p", { class: "omp-hud__placeholder-note" }, "Pick a profile and start one in this pane.", -1))
          ]),
          t("div", tn, [
            m[13] || (m[13] = t("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Profile", -1)),
            U(t("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": m[5] || (m[5] = (T) => p.value = T),
              class: "omp-hud__select",
              disabled: c.value,
              onChange: it
            }, [
              (h(!0), v(N, null, V(u.value, (T) => (h(), v("option", {
                key: T.id,
                value: T.id
              }, g(T.label), 9, sn))), 128))
            ], 40, en), [
              [Pt, p.value]
            ]),
            t("button", {
              type: "button",
              class: "omp-hud__launch-btn",
              disabled: c.value || a.value,
              title: "Run OMP in the active pane",
              onClick: lt
            }, [
              w(b, {
                name: "play",
                size: 12
              }),
              t("span", null, g(a.value ? "Starting" : "Launch"), 1)
            ], 8, nn)
          ])
        ], 64))
      ], 512), [
        [rt, !n.value]
      ])
    ], 2));
  }
}), un = /* @__PURE__ */ gt(cn, [["__scopeId", "data-v-8ed633ba"]]), pn = 2500;
function dn(e) {
  let s = {
    cwd: "",
    sessionFile: "",
    isRunning: !1,
    state: "inactive",
    summary: null
  }, n = !1;
  async function a() {
    if (!n) {
      n = !0;
      try {
        s = await _t(e);
      } finally {
        n = !1;
      }
    }
  }
  a();
  const c = setInterval(() => void a(), pn);
  let d = null;
  return typeof e.terminal.onDidChangeActivePane == "function" && (d = e.terminal.onDidChangeActivePane(() => void a())), {
    series: {
      id: "dinotty-omp:session",
      label: "OMP session cost",
      scale: "auto",
      statusIcon: "Bot",
      defaultVisible: !0,
      current: () => s.summary ? s.summary.totalCost : null,
      statusText: () => {
        if (s.state === "inactive") return null;
        if (s.state === "starting") return "OMP: starting";
        const p = s.summary;
        if (!p) return "OMP: starting";
        const r = p.model.split("/").pop() || "omp";
        return `OMP ${r.length > 16 ? `${r.slice(0, 15)}...` : r} ${p.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        if (s.state === "inactive")
          return [{ label: "State", value: "No OMP session in this tab" }];
        if (!s.summary)
          return [
            { label: "State", value: "Starting" },
            { label: "Workspace", value: s.cwd || "unknown" }
          ];
        const p = s.summary;
        return [
          { label: "Model", value: p.model },
          { label: "Provider", value: p.provider },
          { label: "Thinking", value: p.thinkingLevel },
          { label: "Status", value: p.status.replace("_", " ") },
          { label: "Context tokens", value: p.totalTokens.toLocaleString() },
          { label: "Assistant turns", value: String(p.turns) },
          { label: "Session cost", value: `${p.totalCost.toFixed(4)} USD` },
          { label: "Workspace", value: s.cwd || "unknown" }
        ];
      }
    },
    dispose() {
      clearInterval(c), d?.dispose();
    }
  };
}
let nt = [];
function q(e) {
  nt.push(() => e.dispose());
}
function fn(e) {
  nt = [], q(
    e.commands.register("omp.open-session-viewer", () => {
      e.open();
    })
  ), q(
    e.commands.register("omp.tmux-copymode", () => {
      It(e);
    })
  ), q(
    e.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a profile in a new tab",
      items: async () => Mt(e, await ct(e), "new-tab")
    })
  ), q(
    e.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a profile in a split pane",
      items: async () => Mt(e, await ct(e), "split-v")
    })
  ), q(
    e.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await xt(e)).map((a) => ({
        label: a.name,
        detail: a.description,
        icon: "book",
        action: () => {
          Tt(e, a.name);
        }
      }))
    })
  );
  const s = dn(e);
  return nt.push(() => s.dispose()), {
    component: Ts,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: un,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: "top-right"
      }
    ],
    monitor: { series: [s.series] },
    dispose: mn
  };
}
function mn() {
  for (const e of nt)
    try {
      e();
    } catch {
    }
  nt = [], Qt(), oe(), Gt();
}
export {
  fn as activate,
  mn as deactivate
};
