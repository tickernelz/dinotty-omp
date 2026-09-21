const i = window.__DINOTTY_VUE__;
if (!i)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const C = i.ref;
i.reactive;
const A = i.computed;
i.watch;
const wt = i.onMounted;
i.onUnmounted;
const At = i.onBeforeUnmount;
i.nextTick;
i.h;
const pt = i.defineComponent;
i.getCurrentInstance;
const g = i.toDisplayString, H = i.normalizeClass;
i.normalizeStyle;
const h = i.openBlock, v = i.createElementBlock, t = i.createElementVNode, Nt = i.createBlock, k = i.createVNode, E = i.createCommentVNode, B = i.createTextVNode;
i.withCtx;
const V = i.withDirectives, W = i.withModifiers;
i.withKeys;
const ct = i.vModelText, bt = i.vModelSelect, Et = i.vModelCheckbox;
i.vModelRadio;
const ot = i.vShow, Ht = i.mergeProps, R = i.renderList;
i.renderSlot;
i.resolveComponent;
i.resolveDirective;
const Rt = i.resolveDynamicComponent;
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
const O = i.Fragment;
i.Static;
i.Text;
i.Comment;
const gt = {
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
}, Ft = ["width", "height"], Vt = /* @__PURE__ */ pt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(e) {
    const s = e, n = A(() => s.size), o = A(() => s.class), c = A(() => gt[s.name] || gt.info);
    return (p, d) => (h(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.value,
      height: n.value,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: H(["omp-svg-icon", o.value]),
      "aria-hidden": "true"
    }, [
      (h(!0), v(O, null, R(c.value, (u, r) => (h(), Nt(Rt(u.tag), Ht({ key: r }, { ref_for: !0 }, u.attrs), null, 16))), 128))
    ], 10, Ft));
  }
}), dt = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [o, c] of s)
    n[o] = c;
  return n;
}, w = /* @__PURE__ */ dt(Vt, [["__scopeId", "data-v-35ecedfe"]]), _t = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, Q = /* @__PURE__ */ new Map(), Ut = 12;
async function mt(e) {
  const s = e.terminal.activePaneId() || "", n = e.terminal.activeCwd() || "";
  try {
    const o = await e.exec.run(["pane", s, n]);
    if (o.code !== 0 || !o.stdout.trim()) return _t;
    const c = JSON.parse(o.stdout.trim());
    return {
      cwd: c.cwd || "",
      sessionFile: c.sessionFile || "",
      isRunning: !!c.isRunning,
      state: c.state || (c.isRunning ? "running" : "inactive"),
      summary: c.summary || null
    };
  } catch {
    return _t;
  }
}
function jt(e) {
  const s = e.replace(/\\/g, "/").split("/").pop() || e, n = s.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return n ? `${n[1]} ${n[2]}:${n[3]}:${n[4]}` : s.replace(/\.jsonl$/, "");
}
function Bt(e) {
  const s = e.replace(/\\/g, "/").split("/"), n = s[s.length - 2] || "";
  return n ? n.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
async function Wt(e, s, n) {
  const o = s.includes("\\") ? "\\" : "/", c = [];
  if (n)
    c.push([s, n].join(o));
  else
    try {
      const d = await e.workspace.readDir(s);
      for (const u of d.entries)
        u.is_dir && u.name.startsWith("-") && c.push([s, u.name].join(o));
    } catch {
      return [];
    }
  const p = [];
  for (const d of c)
    try {
      const u = await e.workspace.readDir(d);
      for (const r of u.entries) {
        if (r.is_dir || !r.name.endsWith(".jsonl") || r.name.startsWith("__") || !/^\d{4}-\d{2}-\d{2}T/.test(r.name)) continue;
        const P = [d, r.name].join(o);
        let b = 0;
        try {
          b = (await e.workspace.stat(P)).modified || 0;
        } catch {
        }
        p.push({ path: P, name: r.name, modified: b });
      }
    } catch {
    }
  return p.sort((d, u) => u.modified - d.modified || u.name.localeCompare(d.name)), p;
}
function Qt(e, s, n) {
  const o = [], c = /* @__PURE__ */ new Map();
  let p = "", d = "", u = "unknown", r = "unknown", P = 0, b = 0, z = 0;
  for (const N of e.split(`
`)) {
    const L = N.trim();
    if (!L) continue;
    let _;
    try {
      _ = JSON.parse(L);
    } catch {
      continue;
    }
    const F = typeof _.timestamp == "number" ? _.timestamp : Date.parse(_.timestamp || "");
    if (!Number.isNaN(F) && F && (z = F), _.type === "session") {
      p = _.id || p, d = _.cwd || d;
      continue;
    }
    if (_.type === "model_change") {
      _.model && (u = String(_.model)), _.provider && (r = String(_.provider));
      continue;
    }
    if (_.type === "custom" && _.customType === "tool_execution_start") {
      const $ = _.data?.toolCallId;
      $ && !c.has($) && c.set($, { id: $, name: _.data?.toolName || "tool", arguments: {}, intent: _.data?.intent });
      continue;
    }
    if (_.type !== "message") continue;
    const y = _.message || {};
    y.model && (u = String(y.model)), y.provider && (r = String(y.provider)), typeof y.usage?.totalTokens == "number" && (P = y.usage.totalTokens), typeof y.usage?.cost?.total == "number" && (b += y.usage.cost.total);
    const I = y.timestamp || z || Date.now();
    if (y.role === "assistant") {
      let $ = "", T = "";
      const S = [];
      if (Array.isArray(y.content)) {
        for (const D of y.content)
          if (D?.type === "text") $ += `${D.text || ""}
`;
          else if (D?.type === "thinking") T += `${D.thinking || D.text || ""}
`;
          else if (D?.type === "toolCall") {
            const U = {
              id: D.id || `call-${o.length}-${S.length}`,
              name: D.name || "tool",
              arguments: D.arguments ?? {},
              intent: D.intent
            };
            S.push(U), c.set(U.id, U);
          }
      }
      o.push({
        id: _.id || `msg-${o.length}`,
        role: "assistant",
        text: $.trim(),
        images: [],
        timestamp: I,
        cost: y.usage?.cost?.total,
        totalTokens: y.usage?.totalTokens,
        thinking: T.trim() || void 0,
        toolCalls: S.length ? S : void 0
      });
      continue;
    }
    if (y.role === "user") {
      let $ = "";
      const T = [];
      if (Array.isArray(y.content))
        for (const S of y.content)
          S?.type === "text" ? $ += `${S.text || ""}
` : S?.type === "image" && (S.url ? T.push(S.url) : S.data && T.push(`data:${S.mediaType || "image/png"};base64,${S.data}`));
      else typeof y.content == "string" && ($ = y.content);
      o.push({
        id: _.id || `msg-${o.length}`,
        role: "user",
        text: $.trim(),
        images: T,
        timestamp: I
      });
      continue;
    }
    if (y.role === "toolResult") {
      let $ = "";
      if (Array.isArray(y.content))
        for (const S of y.content)
          S?.type === "text" && ($ += `${S.text || ""}
`);
      else typeof y.content == "string" && ($ = y.content);
      const T = y.toolCallId ? c.get(y.toolCallId) : void 0;
      T ? (T.result = $.trim(), T.isError = !!y.isError, c.delete(y.toolCallId)) : o.push({
        id: _.id || `msg-${o.length}`,
        role: "toolResult",
        text: $.trim(),
        images: [],
        timestamp: I
      });
    }
  }
  return {
    filePath: s,
    sessionId: p,
    cwd: d,
    model: u,
    provider: r,
    totalTokens: P,
    totalCost: b,
    updatedAt: z,
    truncated: n,
    messages: o
  };
}
async function Zt(e, s) {
  try {
    const n = await e.workspace.stat(s), o = Q.get(s);
    if (o && o.mtime === (n.modified || 0) && o.size === n.size)
      return o.data;
    const c = await e.workspace.readFile(s);
    if (!c.content) return null;
    const p = Qt(c.content, s, !!c.truncated);
    if (Q.set(s, { mtime: n.modified || 0, size: n.size, data: p }), Q.size > Ut) {
      const d = Q.keys().next().value;
      d && Q.delete(d);
    }
    return p;
  } catch {
    return null;
  }
}
function qt() {
  Q.clear();
}
let J = null, Z = null;
function Yt(e) {
  return /^[A-Za-z]:[\\/]/.test(e) || e.includes("\\");
}
function q(e, ...s) {
  const n = Yt(e) ? "\\" : "/";
  return [e.replace(/[\\/]+$/, ""), ...s].join(n);
}
async function Y(e) {
  if (J) return J;
  if (Z) return Z;
  Z = (async () => {
    try {
      const n = await e.exec.run(["doctor"]);
      if (n.code === 0 && n.stdout.trim())
        return J = JSON.parse(n.stdout.trim()), J;
    } catch {
    }
    return null;
  })();
  const s = await Z;
  return Z = null, s;
}
function Gt() {
  J = null, Z = null;
}
const Jt = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let K = [], ut = 0;
const Kt = 6e4;
function Xt(e, s) {
  const n = `${e} ${s}`.toLowerCase();
  for (const o of Jt)
    if (o.match.test(n)) return o.category;
  return "general";
}
function te(e) {
  const s = e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!s) return { name: "", description: "", body: e };
  let n = "", o = "";
  for (const c of s[1].split(/\r?\n/)) {
    const p = c.match(/^name:\s*(.+)$/);
    p && (n = p[1].trim().replace(/^['"]|['"]$/g, ""));
    const d = c.match(/^description:\s*(.+)$/);
    d && (o = d[1].trim().replace(/^['"]|['"]$/g, ""));
  }
  return { name: n, description: o, body: s[2] };
}
async function ee(e) {
  const s = await Y(e), n = [];
  return s?.ompHome ? (n.push({ label: "managed", path: q(s.ompHome, "managed-skills") }), n.push({ label: "project", path: q(s.ompHome, "skills") })) : (n.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), n.push({ label: "project", path: "~/.omp/agent/skills" })), s?.home ? n.push({ label: "user", path: q(s.home, ".agents", "skills") }) : n.push({ label: "user", path: "~/.agents/skills" }), n;
}
async function Mt(e, s = !1) {
  const n = Date.now();
  if (!s && K.length && n - ut < Kt) return K;
  const o = await ee(e), c = o[0]?.path.includes("\\") ? "\\" : "/", p = /* @__PURE__ */ new Map();
  for (const d of o) {
    let u;
    try {
      u = await e.workspace.readDir(d.path);
    } catch {
      continue;
    }
    for (const r of u.entries) {
      if (!r.is_dir) continue;
      const P = [d.path, r.name, "SKILL.md"].join(c);
      try {
        const b = await e.workspace.readFile(P);
        if (!b.content) continue;
        const { name: z, description: N, body: L } = te(b.content), _ = z || r.name;
        if (p.has(_)) continue;
        p.set(_, {
          id: _,
          name: _,
          description: N || "No description provided.",
          category: Xt(_, N),
          source: d.label,
          filePath: P,
          body: L
        });
      } catch {
      }
    }
  }
  return K = [...p.values()].sort((d, u) => d.name.localeCompare(u.name)), ut = n, K;
}
function se(e, s, n = "all") {
  const c = s.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return e.filter((p) => {
    if (n !== "all" && p.category !== n) return !1;
    if (!c.length) return !0;
    const d = `${p.name} ${p.description}`.toLowerCase();
    return c.every((u) => d.includes(u));
  });
}
function $t(e, s) {
  const n = e.terminal.activePaneId();
  return n ? (e.terminal.send(n, `/skill ${s}
`), e.ui.notify(`Injected skill ${s}`, "info"), !0) : (e.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function ne() {
  K = [], ut = 0;
}
function ae(e) {
  const n = e.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
  return `omp-${(n[n.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 40) || "workspace"}`;
}
function Ct(e) {
  return !e || e.isDefault || e.id === et ? [] : [`--config=${e.configPath}`];
}
function X(e) {
  return `'${e.replace(/'/g, "'\\''")}'`;
}
async function tt(e, s = {}) {
  const n = await Y(e), o = s.cwd || e.terminal.activeCwd() || n?.home || ".", c = s.target || "new-tab", p = Ct(s.preset), d = s.preset && !s.preset.isDefault ? s.preset.id : "default", u = !!n?.tmux && n?.platform !== "win32", r = ["omp", ...p].map(X).join(" "), P = ae(o), b = `${r}; exec "$SHELL"`;
  if (c === "new-tab") {
    const L = u ? ["tmux", "new-session", "-A", "-s", P, "-c", o, "sh", "-c", b] : ["omp", ...p], _ = await e.terminal.createTerminalTab({
      cwd: o,
      argv: L,
      title: `OMP: ${d}`
    });
    return e.ui.notify(
      u ? `OMP started in tmux session ${P}` : `OMP started with profile ${d}`,
      "info"
    ), _;
  }
  const z = await e.terminal.splitTerminalPane({
    direction: c === "split-h" ? "horizontal" : "vertical",
    cwd: o
  });
  if (!z)
    return e.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const N = u ? `tmux new-session -A -s ${X(P)} -c ${X(o)} sh -c ${X(b)}` : r;
  return e.terminal.send(z, `${N}
`), e.ui.notify(`OMP started in a split pane with profile ${d}`, "info"), z;
}
async function oe(e, s) {
  const n = e.terminal.activePaneId();
  if (!n)
    return e.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const c = ["omp", ...Ct(s)].map(X).join(" ");
  return e.terminal.send(n, `${c}
`), e.ui.notify(
    `Launching OMP with profile ${s && !s.isDefault ? s.id : "default"}`,
    "info"
  ), !0;
}
async function St(e) {
  const s = await Y(e);
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
const et = "default";
async function it(e) {
  const n = (await Y(e))?.ompHome || "~/.omp/agent", o = [
    {
      id: et,
      label: "Default profile",
      fileName: "config.yml",
      configPath: q(n, "config.yml"),
      isDefault: !0
    }
  ];
  try {
    const c = await e.workspace.readDir(n);
    for (const p of c.entries) {
      if (p.is_dir) continue;
      const d = p.name.match(/^config\.(.+)\.ya?ml$/);
      d && o.push({
        id: d[1],
        label: d[1],
        fileName: p.name,
        configPath: q(n, p.name),
        isDefault: !1
      });
    }
  } catch {
  }
  return o.sort((c, p) => c.isDefault !== p.isDefault ? c.isDefault ? -1 : 1 : c.id.localeCompare(p.id)), o;
}
function yt(e, s, n) {
  return s.map((o) => ({
    label: o.isDefault ? "Default profile" : o.id,
    detail: o.configPath,
    icon: "zap",
    action: () => {
      tt(e, { preset: o, target: n });
    }
  }));
}
const ie = { class: "omp-app" }, le = { class: "omp-app__bar" }, re = { class: "omp-app__brand" }, ce = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, ue = ["aria-selected", "onClick"], pe = {
  key: 0,
  class: "omp-app__badge"
}, de = { class: "omp-app__bar-actions" }, me = ["value"], he = { class: "omp-app__body" }, fe = { class: "omp-pane omp-pane--sessions" }, ve = { class: "omp-sessions" }, ge = { class: "omp-sessions__head" }, _e = { class: "omp-field omp-field--search" }, ye = { class: "omp-toggle" }, ke = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, we = {
  key: 0,
  class: "omp-hint"
}, be = {
  key: 1,
  class: "omp-hint"
}, Me = ["aria-selected", "onClick"], $e = { class: "omp-session__title" }, Ce = { class: "omp-session__meta" }, Se = { class: "omp-transcript" }, xe = { class: "omp-transcript__head" }, Pe = { class: "omp-transcript__meta" }, Te = { class: "omp-tag" }, ze = { class: "omp-tag" }, Le = { class: "omp-tag omp-tag--cost" }, Ie = { class: "omp-tag" }, De = { class: "omp-transcript__tools" }, Oe = { class: "omp-field omp-field--search" }, Ae = {
  key: 0,
  class: "omp-banner"
}, Ne = { class: "omp-turns" }, Ee = {
  key: 0,
  class: "omp-hint"
}, He = { class: "omp-turn__head" }, Re = { class: "omp-turn__role" }, Fe = { class: "omp-turn__time" }, Ve = {
  key: 0,
  class: "omp-fold"
}, Ue = { class: "omp-code" }, je = {
  key: 1,
  class: "omp-turn__text"
}, Be = {
  key: 2,
  class: "omp-turn__images"
}, We = ["onClick"], Qe = ["src"], Ze = { class: "omp-fold__name" }, qe = {
  key: 0,
  class: "omp-fold__intent"
}, Ye = { class: "omp-fold__state" }, Ge = { class: "omp-code" }, Je = { class: "omp-code" }, Ke = {
  key: 1,
  class: "omp-empty"
}, Xe = { class: "omp-pane omp-pane--skills" }, ts = { class: "omp-skills__head" }, es = { class: "omp-field omp-field--search omp-field--grow" }, ss = { class: "omp-chips" }, ns = ["onClick"], as = { class: "omp-skills__body" }, os = { class: "omp-skills__grid" }, is = {
  key: 0,
  class: "omp-hint"
}, ls = {
  key: 1,
  class: "omp-hint"
}, rs = ["onClick"], cs = { class: "omp-skill__title" }, us = { class: "omp-skill__desc" }, ps = { class: "omp-skill__tags" }, ds = { class: "omp-chip omp-chip--tiny" }, ms = { class: "omp-chip omp-chip--tiny" }, hs = {
  key: 0,
  class: "omp-skill-detail"
}, fs = { class: "omp-skill-detail__desc" }, vs = { class: "omp-code omp-code--tall" }, gs = { class: "omp-pane omp-pane--profiles" }, _s = { class: "omp-profiles__grid" }, ys = { class: "omp-profile__icon" }, ks = { class: "omp-profile__actions" }, ws = ["onClick"], bs = ["onClick"], Ms = ["onClick"], $s = {
  type: "button",
  class: "omp-lightbox__close",
  "aria-label": "Close image"
}, Cs = ["src"], Ss = "1.0.0", xs = /* @__PURE__ */ pt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(e) {
    const s = e, n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], o = C("sessions"), c = C(""), p = C([]), d = C(!0), u = C(""), r = C(!0), P = C(""), b = C(null), z = C(""), N = C(null), L = C([]), _ = C(!0), F = C(""), y = C("all"), I = C(null), $ = C([]), T = C(et), S = A(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: p.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: L.value.length },
      { id: "profiles", label: "Profiles", icon: "zap", badge: $.value.length }
    ]), D = A(() => {
      const f = u.value.trim().toLowerCase();
      return f ? p.value.filter((l) => l.path.toLowerCase().includes(f)) : p.value;
    }), U = A(() => {
      if (!b.value) return [];
      const f = z.value.trim().toLowerCase();
      return f ? b.value.messages.filter((l) => l.text.toLowerCase().includes(f) || l.thinking?.toLowerCase().includes(f) ? !0 : (l.toolCalls || []).some((a) => a.name.toLowerCase().includes(f))) : b.value.messages;
    }), nt = A(() => se(L.value, F.value, y.value)), at = A(
      () => $.value.find((f) => f.id === T.value) || null
    );
    function M(f) {
      return jt(f);
    }
    function m(f) {
      return Bt(f);
    }
    function j(f) {
      return f ? new Date(f).toLocaleTimeString() : "";
    }
    function xt(f) {
      if (!f) return "";
      const l = Date.now() - f, a = Math.round(l / 6e4);
      if (a < 1) return "just now";
      if (a < 60) return `${a}m ago`;
      const x = Math.round(a / 60);
      return x < 24 ? `${x}h ago` : `${Math.round(x / 24)}d ago`;
    }
    function Pt(f) {
      return f === "user" ? "terminal" : f === "assistant" ? "bot" : "code";
    }
    function ht(f) {
      return f === "user" ? "You" : f === "assistant" ? "Agent" : "Tool";
    }
    function Tt(f) {
      if (typeof f == "string") return f;
      try {
        return JSON.stringify(f, null, 2);
      } catch {
        return String(f);
      }
    }
    async function lt() {
      d.value = !0;
      try {
        if (!c.value) {
          const l = await Y(s.api);
          c.value = l?.ompHome ? q(l.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let f;
        if (r.value) {
          const l = await mt(s.api);
          if (l.sessionFile) {
            const a = l.sessionFile.replace(/\\/g, "/").split("/");
            f = a[a.length - 2];
          }
        }
        p.value = await Wt(s.api, c.value, f), p.value.length && !p.value.some((l) => l.path === P.value) && await ft(p.value[0].path);
      } finally {
        d.value = !1;
      }
    }
    async function ft(f) {
      P.value = f, b.value = await Zt(s.api, f);
    }
    async function vt() {
      _.value = !0;
      try {
        L.value = await Mt(s.api, !0), !I.value && L.value.length && (I.value = L.value[0]);
      } finally {
        _.value = !1;
      }
    }
    function zt(f) {
      $t(s.api, f);
    }
    async function rt(f, l) {
      await tt(s.api, { preset: f, target: l });
    }
    async function Lt() {
      await tt(s.api, { preset: at.value, target: "new-tab" });
    }
    async function It() {
      b.value && await tt(s.api, {
        preset: at.value,
        target: "new-tab",
        cwd: b.value.cwd || void 0
      });
    }
    async function Dt() {
      if (!b.value) return;
      const f = b.value.messages.map((l) => `### ${ht(l.role)}

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
    return wt(async () => {
      $.value = await it(s.api), await lt(), await vt();
    }), (f, l) => (h(), v("div", ie, [
      t("header", le, [
        t("div", re, [
          k(w, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          l[8] || (l[8] = t("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          t("span", { class: "omp-app__version" }, "v" + g(Ss))
        ]),
        t("nav", ce, [
          (h(!0), v(O, null, R(S.value, (a) => (h(), v("button", {
            key: a.id,
            type: "button",
            role: "tab",
            class: H(["omp-app__tab", { "is-active": o.value === a.id }]),
            "aria-selected": o.value === a.id,
            onClick: (x) => o.value = a.id
          }, [
            k(w, {
              name: a.icon,
              size: 14
            }, null, 8, ["name"]),
            t("span", null, g(a.label), 1),
            a.badge ? (h(), v("span", pe, g(a.badge), 1)) : E("", !0)
          ], 10, ue))), 128))
        ]),
        t("div", de, [
          V(t("select", {
            "onUpdate:modelValue": l[0] || (l[0] = (a) => T.value = a),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch profile"
          }, [
            (h(!0), v(O, null, R($.value, (a) => (h(), v("option", {
              key: a.id,
              value: a.id
            }, g(a.label), 9, me))), 128))
          ], 512), [
            [bt, T.value]
          ]),
          t("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: Lt
          }, [
            k(w, {
              name: "play",
              size: 13
            }),
            l[9] || (l[9] = t("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      t("main", he, [
        V(t("section", fe, [
          t("aside", ve, [
            t("div", ge, [
              t("div", _e, [
                k(w, {
                  name: "search",
                  size: 13
                }),
                V(t("input", {
                  "onUpdate:modelValue": l[1] || (l[1] = (a) => u.value = a),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [ct, u.value]
                ])
              ]),
              t("button", {
                type: "button",
                class: H(["omp-icon-btn", { "is-busy": d.value }]),
                title: "Reload session list",
                onClick: lt
              }, [
                k(w, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            t("label", ye, [
              V(t("input", {
                "onUpdate:modelValue": l[2] || (l[2] = (a) => r.value = a),
                type: "checkbox",
                onChange: lt
              }, null, 544), [
                [Et, r.value]
              ]),
              l[10] || (l[10] = t("span", null, "This workspace only", -1))
            ]),
            t("div", ke, [
              d.value ? (h(), v("p", we, "Loading sessions...")) : D.value.length ? E("", !0) : (h(), v("p", be, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (h(!0), v(O, null, R(D.value, (a) => (h(), v("button", {
                key: a.path,
                type: "button",
                role: "option",
                class: H(["omp-session", { "is-active": P.value === a.path }]),
                "aria-selected": P.value === a.path,
                onClick: (x) => ft(a.path)
              }, [
                t("span", $e, [
                  k(w, {
                    name: "file-text",
                    size: 12
                  }),
                  B(" " + g(M(a.path)), 1)
                ]),
                t("span", Ce, [
                  t("span", null, g(m(a.path)), 1),
                  t("span", null, g(xt(a.modified)), 1)
                ])
              ], 10, Me))), 128))
            ])
          ]),
          t("div", Se, [
            b.value ? (h(), v(O, { key: 0 }, [
              t("header", xe, [
                t("div", Pe, [
                  t("span", Te, [
                    k(w, {
                      name: "cpu",
                      size: 12
                    }),
                    B(g(b.value.model), 1)
                  ]),
                  t("span", ze, [
                    k(w, {
                      name: "layers",
                      size: 12
                    }),
                    B(g(b.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  t("span", Le, [
                    k(w, {
                      name: "activity",
                      size: 12
                    }),
                    B(g(b.value.totalCost.toFixed(3)) + " USD", 1)
                  ]),
                  t("span", Ie, [
                    k(w, {
                      name: "message-square",
                      size: 12
                    }),
                    B(g(b.value.messages.length) + " entries", 1)
                  ])
                ]),
                t("div", De, [
                  t("div", Oe, [
                    k(w, {
                      name: "search",
                      size: 12
                    }),
                    V(t("input", {
                      "onUpdate:modelValue": l[3] || (l[3] = (a) => z.value = a),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [ct, z.value]
                    ])
                  ]),
                  t("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: Dt
                  }, [
                    k(w, {
                      name: "copy",
                      size: 12
                    }),
                    l[11] || (l[11] = t("span", null, "Copy", -1))
                  ]),
                  t("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: It
                  }, [
                    k(w, {
                      name: "external-link",
                      size: 12
                    }),
                    l[12] || (l[12] = t("span", null, "Open", -1))
                  ])
                ])
              ]),
              b.value.truncated ? (h(), v("p", Ae, " This transcript is larger than the host file preview limit, so only the first part is rendered. Live metrics in the HUD are still exact. ")) : E("", !0),
              t("div", Ne, [
                U.value.length ? E("", !0) : (h(), v("p", Ee, "No turn matches that filter.")),
                (h(!0), v(O, null, R(U.value, (a) => (h(), v("article", {
                  key: a.id,
                  class: H(["omp-turn", `omp-turn--${a.role}`])
                }, [
                  t("header", He, [
                    t("span", Re, [
                      k(w, {
                        name: Pt(a.role),
                        size: 13
                      }, null, 8, ["name"]),
                      B(" " + g(ht(a.role)), 1)
                    ]),
                    t("span", Fe, g(j(a.timestamp)), 1)
                  ]),
                  a.thinking ? (h(), v("details", Ve, [
                    l[13] || (l[13] = t("summary", null, "Reasoning", -1)),
                    t("pre", Ue, g(a.thinking), 1)
                  ])) : E("", !0),
                  a.text ? (h(), v("pre", je, g(a.text), 1)) : E("", !0),
                  a.images.length ? (h(), v("div", Be, [
                    (h(!0), v(O, null, R(a.images, (x, Ot) => (h(), v("button", {
                      key: Ot,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (un) => N.value = x
                    }, [
                      t("img", {
                        src: x,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, Qe)
                    ], 8, We))), 128))
                  ])) : E("", !0),
                  (h(!0), v(O, null, R(a.toolCalls || [], (x) => (h(), v("details", {
                    key: x.id,
                    class: H(["omp-fold omp-fold--tool", { "is-error": x.isError }])
                  }, [
                    t("summary", null, [
                      t("span", Ze, g(x.name), 1),
                      x.intent ? (h(), v("span", qe, g(x.intent), 1)) : E("", !0),
                      t("span", Ye, g(x.isError ? "failed" : "ok"), 1)
                    ]),
                    l[15] || (l[15] = t("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    t("pre", Ge, g(Tt(x.arguments)), 1),
                    x.result ? (h(), v(O, { key: 0 }, [
                      l[14] || (l[14] = t("p", { class: "omp-fold__label" }, "Result", -1)),
                      t("pre", Je, g(x.result), 1)
                    ], 64)) : E("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (h(), v("div", Ke, [
              k(w, {
                name: "history",
                size: 28
              }),
              l[16] || (l[16] = t("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ], 512), [
          [ot, o.value === "sessions"]
        ]),
        V(t("section", Xe, [
          t("div", ts, [
            t("div", es, [
              k(w, {
                name: "search",
                size: 14
              }),
              V(t("input", {
                "onUpdate:modelValue": l[4] || (l[4] = (a) => F.value = a),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [ct, F.value]
              ])
            ]),
            t("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: vt
            }, [
              k(w, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          t("div", ss, [
            (h(), v(O, null, R(n, (a) => t("button", {
              key: a,
              type: "button",
              class: H(["omp-chip", { "is-active": y.value === a }]),
              onClick: (x) => y.value = a
            }, g(a), 11, ns)), 64))
          ]),
          t("div", as, [
            t("div", os, [
              _.value ? (h(), v("p", is, "Indexing skills...")) : nt.value.length ? E("", !0) : (h(), v("p", ls, "No skill matches that search.")),
              (h(!0), v(O, null, R(nt.value, (a) => (h(), v("button", {
                key: a.id,
                type: "button",
                class: H(["omp-skill", { "is-active": I.value?.id === a.id }]),
                onClick: (x) => I.value = a
              }, [
                t("span", cs, [
                  k(w, {
                    name: "book",
                    size: 13
                  }),
                  B(" " + g(a.name), 1)
                ]),
                t("span", us, g(a.description), 1),
                t("span", ps, [
                  t("span", ds, g(a.category), 1),
                  t("span", ms, g(a.source), 1)
                ])
              ], 10, rs))), 128))
            ]),
            I.value ? (h(), v("aside", hs, [
              t("header", null, [
                t("h3", null, g(I.value.name), 1),
                t("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: l[5] || (l[5] = (a) => zt(I.value.name))
                }, [
                  k(w, {
                    name: "terminal",
                    size: 12
                  }),
                  l[17] || (l[17] = t("span", null, "Inject", -1))
                ])
              ]),
              t("p", fs, g(I.value.description), 1),
              t("pre", vs, g(I.value.body || "This skill has no body."), 1)
            ])) : E("", !0)
          ])
        ], 512), [
          [ot, o.value === "skills"]
        ]),
        V(t("section", gs, [
          l[21] || (l[21] = t("header", { class: "omp-profiles__head" }, [
            t("h2", null, "Profiles"),
            t("p", null, "Discovered from the OMP agent directory. Launch one into a new tab or a split pane.")
          ], -1)),
          t("div", _s, [
            (h(!0), v(O, null, R($.value, (a) => (h(), v("article", {
              key: a.id,
              class: H(["omp-profile", { "is-default": a.isDefault }])
            }, [
              t("header", null, [
                t("span", ys, [
                  k(w, {
                    name: "zap",
                    size: 16
                  })
                ]),
                t("div", null, [
                  t("h3", null, g(a.label), 1),
                  t("code", null, g(a.fileName), 1)
                ])
              ]),
              t("div", ks, [
                t("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: (x) => rt(a, "new-tab")
                }, [
                  k(w, {
                    name: "play",
                    size: 12
                  }),
                  l[18] || (l[18] = t("span", null, "New tab", -1))
                ], 8, ws),
                t("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (x) => rt(a, "split-v")
                }, [
                  k(w, {
                    name: "split-vertical",
                    size: 12
                  }),
                  l[19] || (l[19] = t("span", null, "Split right", -1))
                ], 8, bs),
                t("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (x) => rt(a, "split-h")
                }, [
                  k(w, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  l[20] || (l[20] = t("span", null, "Split down", -1))
                ], 8, Ms)
              ])
            ], 2))), 128))
          ])
        ], 512), [
          [ot, o.value === "profiles"]
        ])
      ]),
      N.value ? (h(), v("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: l[7] || (l[7] = (a) => N.value = null)
      }, [
        t("button", $s, [
          k(w, {
            name: "x",
            size: 18
          })
        ]),
        t("img", {
          src: N.value,
          alt: "Attachment preview",
          onClick: l[6] || (l[6] = W(() => {
          }, ["stop"]))
        }, null, 8, Cs)
      ])) : E("", !0)
    ]));
  }
}), Ps = /* @__PURE__ */ dt(xs, [["__scopeId", "data-v-c31ec463"]]), Ts = { class: "omp-hud__bar" }, zs = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, Ls = ["title"], Is = {
  key: 0,
  class: "omp-hud__peek"
}, Ds = ["title", "aria-expanded"], Os = { class: "omp-hud__body" }, As = { class: "omp-hud__row" }, Ns = ["title"], Es = { class: "omp-hud__chip-text" }, Hs = ["title"], Rs = { class: "omp-hud__chip-text" }, Fs = { class: "omp-hud__row" }, Vs = ["title"], Us = { class: "omp-hud__chip-text" }, js = ["title"], Bs = { class: "omp-hud__chip-text" }, Ws = { class: "omp-hud__status" }, Qs = { class: "omp-hud__turns" }, Zs = { class: "omp-hud__actions" }, qs = ["disabled", "title"], Ys = {
  key: 1,
  class: "omp-hud__placeholder"
}, Gs = { class: "omp-hud__placeholder-note" }, Js = { class: "omp-hud__placeholder" }, Ks = { class: "omp-hud__launch" }, Xs = ["disabled"], tn = ["value"], en = ["disabled"], kt = "dinotty-omp.preset", sn = 2e3, nn = 12e3, an = /* @__PURE__ */ pt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(e) {
    const s = e, n = C(!1), o = C(!1), c = C(!0), p = C(!0), d = C([]), u = C(et), r = C({
      cwd: "",
      sessionFile: "",
      isRunning: !1,
      state: "inactive",
      summary: null
    });
    let P = null, b = 0;
    const z = [], N = A(
      () => d.value.find((M) => M.id === u.value) || null
    ), L = A(() => {
      const m = (r.value.summary?.model || "").split("/").pop() || "omp";
      return m.length > 18 ? `${m.slice(0, 17)}...` : m;
    }), _ = A(() => {
      const M = r.value.summary?.totalTokens || 0;
      return M >= 1e6 ? `${(M / 1e6).toFixed(1)}M tok` : M >= 1e3 ? `${Math.round(M / 1e3)}k tok` : `${M} tok`;
    }), F = A(() => {
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
    }), y = A(() => r.value.state === "inactive" ? "is-inactive" : r.value.state === "starting" ? "is-starting" : `is-${r.value.summary?.status || "idle"}`), I = A(() => {
      const M = r.value.cwd;
      if (!M) return "this pane";
      const m = M.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return m[m.length - 1] || M;
    }), $ = A(() => r.value.state === "inactive" ? "Inactive" : r.value.state === "starting" ? "Starting" : `${L.value} · ${r.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function T() {
      try {
        localStorage.setItem(kt, u.value);
      } catch {
      }
    }
    async function S() {
      const M = await mt(s.api);
      if (M.state === "inactive" && o.value && Date.now() < b) {
        r.value = { ...M, state: "starting" };
        return;
      }
      (M.state !== "inactive" || Date.now() >= b) && (o.value = !1), r.value = M;
    }
    function D() {
      s.api.open();
    }
    async function U() {
      await St(s.api);
    }
    async function nt() {
      await tt(s.api, { preset: N.value, target: "split-v" });
    }
    async function at() {
      await oe(s.api, N.value) && (T(), o.value = !0, b = Date.now() + nn, r.value = { ...r.value, state: "starting", summary: null }, window.setTimeout(() => void S(), 600));
    }
    return wt(async () => {
      try {
        const m = localStorage.getItem(kt);
        m && (u.value = m);
      } catch {
      }
      const M = await Y(s.api);
      p.value = M ? M.tmux : !0, d.value = await it(s.api), d.value.some((m) => m.id === u.value) || (u.value = et), c.value = !1, await S(), P = setInterval(() => void S(), sn), typeof s.api.terminal.onDidChangeActivePane == "function" && z.push(s.api.terminal.onDidChangeActivePane(() => void S()));
    }), At(() => {
      P && clearInterval(P);
      for (const M of z)
        try {
          M.dispose();
        } catch {
        }
    }), (M, m) => (h(), v("section", {
      class: H(["omp-hud", [`is-${r.value.state}`, { "is-collapsed": n.value, "is-dragging": e.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      t("header", Ts, [
        t("div", zs, [
          k(w, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          m[6] || (m[6] = t("span", { class: "omp-hud__name" }, "OMP", -1)),
          t("span", {
            class: H(["omp-hud__beacon", y.value]),
            title: F.value
          }, null, 10, Ls),
          n.value ? (h(), v("span", Is, g($.value), 1)) : E("", !0)
        ]),
        t("div", {
          class: "omp-hud__tools",
          onPointerdown: m[3] || (m[3] = W(() => {
          }, ["stop"])),
          onMousedown: m[4] || (m[4] = W(() => {
          }, ["stop"]))
        }, [
          t("button", {
            type: "button",
            class: "omp-hud__icon",
            title: n.value ? "Expand panel" : "Collapse panel",
            "aria-expanded": !n.value,
            onPointerdown: m[0] || (m[0] = W(() => {
            }, ["stop"])),
            onMousedown: m[1] || (m[1] = W(() => {
            }, ["stop"])),
            onClick: m[2] || (m[2] = W((j) => n.value = !n.value, ["stop"]))
          }, [
            k(w, {
              name: n.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, Ds)
        ], 32)
      ]),
      V(t("div", Os, [
        r.value.state === "running" && r.value.summary ? (h(), v(O, { key: 0 }, [
          t("div", As, [
            t("span", {
              class: "omp-hud__chip",
              title: `Model: ${r.value.summary.model}`
            }, [
              k(w, {
                name: "cpu",
                size: 12
              }),
              t("span", Es, g(L.value), 1)
            ], 8, Ns),
            t("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${r.value.summary.thinkingLevel}`
            }, [
              k(w, {
                name: "zap",
                size: 12
              }),
              t("span", Rs, g(r.value.summary.thinkingLevel), 1)
            ], 8, Hs)
          ]),
          t("div", Fs, [
            t("span", {
              class: "omp-hud__chip",
              title: `${r.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              k(w, {
                name: "layers",
                size: 12
              }),
              t("span", Us, g(_.value), 1)
            ], 8, Vs),
            t("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${r.value.summary.totalCost.toFixed(4)} USD`
            }, [
              k(w, {
                name: "activity",
                size: 12
              }),
              t("span", Bs, g(r.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, js)
          ]),
          t("p", Ws, [
            t("span", {
              class: H(["omp-hud__status-dot", y.value])
            }, null, 2),
            B(" " + g(F.value) + " ", 1),
            t("span", Qs, g(r.value.summary.turns) + " turns", 1)
          ]),
          t("div", Zs, [
            t("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: D
            }, [
              k(w, {
                name: "history",
                size: 14
              }),
              m[7] || (m[7] = t("span", null, "Explorer", -1))
            ]),
            t("button", {
              type: "button",
              class: "omp-hud__action",
              disabled: !p.value,
              title: p.value ? "Enter tmux copy-mode to scroll history" : "tmux was not found on this host",
              onClick: U
            }, [
              k(w, {
                name: "terminal",
                size: 14
              }),
              m[8] || (m[8] = t("span", null, "Scroll", -1))
            ], 8, qs),
            t("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: nt
            }, [
              k(w, {
                name: "split-vertical",
                size: 14
              }),
              m[9] || (m[9] = t("span", null, "Split", -1))
            ])
          ])
        ], 64)) : r.value.state === "starting" ? (h(), v("div", Ys, [
          m[10] || (m[10] = t("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          m[11] || (m[11] = t("p", { class: "omp-hud__placeholder-title" }, "Starting OMP", -1)),
          t("p", Gs, "Waiting for the first turn in " + g(I.value), 1)
        ])) : (h(), v(O, { key: 2 }, [
          t("div", Js, [
            k(w, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            m[12] || (m[12] = t("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            m[13] || (m[13] = t("p", { class: "omp-hud__placeholder-note" }, "Pick a profile and start one in this pane.", -1))
          ]),
          t("div", Ks, [
            m[14] || (m[14] = t("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Profile", -1)),
            V(t("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": m[5] || (m[5] = (j) => u.value = j),
              class: "omp-hud__select",
              disabled: c.value,
              onChange: T
            }, [
              (h(!0), v(O, null, R(d.value, (j) => (h(), v("option", {
                key: j.id,
                value: j.id
              }, g(j.label), 9, tn))), 128))
            ], 40, Xs), [
              [bt, u.value]
            ]),
            t("button", {
              type: "button",
              class: "omp-hud__launch-btn",
              disabled: c.value || o.value,
              title: "Run OMP in the active pane",
              onClick: at
            }, [
              k(w, {
                name: "play",
                size: 12
              }),
              t("span", null, g(o.value ? "Starting" : "Launch"), 1)
            ], 8, en)
          ])
        ], 64))
      ], 512), [
        [ot, !n.value]
      ])
    ], 2));
  }
}), on = /* @__PURE__ */ dt(an, [["__scopeId", "data-v-71e01b7d"]]), ln = 2500;
function rn(e) {
  let s = {
    cwd: "",
    sessionFile: "",
    isRunning: !1,
    state: "inactive",
    summary: null
  }, n = !1;
  async function o() {
    if (!n) {
      n = !0;
      try {
        s = await mt(e);
      } finally {
        n = !1;
      }
    }
  }
  o();
  const c = setInterval(() => void o(), ln);
  let p = null;
  return typeof e.terminal.onDidChangeActivePane == "function" && (p = e.terminal.onDidChangeActivePane(() => void o())), {
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
        const u = s.summary;
        if (!u) return "OMP: starting";
        const r = u.model.split("/").pop() || "omp";
        return `OMP ${r.length > 16 ? `${r.slice(0, 15)}...` : r} ${u.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        if (s.state === "inactive")
          return [{ label: "State", value: "No OMP session in this tab" }];
        if (!s.summary)
          return [
            { label: "State", value: "Starting" },
            { label: "Workspace", value: s.cwd || "unknown" }
          ];
        const u = s.summary;
        return [
          { label: "Model", value: u.model },
          { label: "Provider", value: u.provider },
          { label: "Thinking", value: u.thinkingLevel },
          { label: "Status", value: u.status.replace("_", " ") },
          { label: "Context tokens", value: u.totalTokens.toLocaleString() },
          { label: "Assistant turns", value: String(u.turns) },
          { label: "Session cost", value: `${u.totalCost.toFixed(4)} USD` },
          { label: "Workspace", value: s.cwd || "unknown" }
        ];
      }
    },
    dispose() {
      clearInterval(c), p?.dispose();
    }
  };
}
let st = [];
function G(e) {
  st.push(() => e.dispose());
}
function pn(e) {
  st = [], G(
    e.commands.register("omp.open-session-viewer", () => {
      e.open();
    })
  ), G(
    e.commands.register("omp.tmux-copymode", () => {
      St(e);
    })
  ), G(
    e.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a profile in a new tab",
      items: async () => yt(e, await it(e), "new-tab")
    })
  ), G(
    e.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a profile in a split pane",
      items: async () => yt(e, await it(e), "split-v")
    })
  ), G(
    e.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await Mt(e)).map((o) => ({
        label: o.name,
        detail: o.description,
        icon: "book",
        action: () => {
          $t(e, o.name);
        }
      }))
    })
  );
  const s = rn(e);
  return st.push(() => s.dispose()), {
    component: Ps,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: on,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: "top-right"
      }
    ],
    monitor: { series: [s.series] },
    dispose: cn
  };
}
function cn() {
  for (const e of st)
    try {
      e();
    } catch {
    }
  st = [], qt(), ne(), Gt();
}
export {
  pn as activate,
  cn as deactivate
};
