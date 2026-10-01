const p = window.__DINOTTY_VUE__;
if (!p)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const C = p.ref;
p.reactive;
const I = p.computed;
p.watch;
const ce = p.onMounted;
p.onUnmounted;
const Te = p.onBeforeUnmount;
p.nextTick;
p.h;
const Wt = p.defineComponent;
p.getCurrentInstance;
const g = p.toDisplayString, A = p.normalizeClass;
p.normalizeStyle;
const f = p.openBlock, v = p.createElementBlock, a = p.createElementVNode, xe = p.createBlock, k = p.createVNode, P = p.createCommentVNode, G = p.createTextVNode;
p.withCtx;
const X = p.withDirectives, nt = p.withModifiers;
p.withKeys;
const Ft = p.vModelText, ue = p.vModelSelect, Pe = p.vModelCheckbox;
p.vModelRadio;
const Ie = p.vShow, Ee = p.mergeProps, D = p.renderList;
p.renderSlot;
p.resolveComponent;
p.resolveDirective;
const Le = p.resolveDynamicComponent;
p.resolveTransitionHooks;
p.setBlockTracking;
p.useSlots;
p.useAttrs;
p.isRef;
const ze = p.unref;
p.toRef;
p.toRefs;
p.customRef;
p.triggerRef;
p.shallowRef;
p.shallowReactive;
p.readonly;
p.proxyRefs;
p.markRaw;
p.toRaw;
p.effectScope;
p.EffectScope;
p.watchEffect;
p.watchPostEffect;
p.watchSyncEffect;
p.Teleport;
p.Suspense;
p.KeepAlive;
p.Transition;
p.TransitionGroup;
const E = p.Fragment;
p.Static;
p.Text;
p.Comment;
const Qt = {
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
}, Ae = ["width", "height"], Oe = /* @__PURE__ */ Wt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(t) {
    const e = t, s = I(() => e.size), n = I(() => e.class), o = I(() => Qt[e.name] || Qt.info);
    return (i, r) => (f(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: s.value,
      height: s.value,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: A(["omp-svg-icon", n.value]),
      "aria-hidden": "true"
    }, [
      (f(!0), v(E, null, D(o.value, (u, y) => (f(), xe(Le(u.tag), Ee({ key: y }, { ref_for: !0 }, u.attrs), null, 16))), 128))
    ], 10, Ae));
  }
}), Yt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, o] of e)
    s[n] = o;
  return s;
}, M = /* @__PURE__ */ Yt(Oe, [["__scopeId", "data-v-35ecedfe"]]), V = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
};
function Ne(t) {
  return !(!t || typeof t != "object" || !("model" in t) || typeof t.model != "string" || !("provider" in t) || typeof t.provider != "string" || !("thinkingLevel" in t) || typeof t.thinkingLevel != "string" || !("status" in t) || !["idle", "thinking", "running_tool", "error"].includes(String(t.status)) || !("totalTokens" in t) || typeof t.totalTokens != "number" || !Number.isSafeInteger(t.totalTokens) || t.totalTokens < 0 || !("turns" in t) || typeof t.turns != "number" || !Number.isSafeInteger(t.turns) || t.turns < 0 || !("totalCost" in t) || typeof t.totalCost != "number" || !Number.isFinite(t.totalCost) || t.totalCost < 0);
}
async function De(t, e) {
  const s = e?.paneId ?? t.terminal.activePaneId() ?? "", n = e?.cwd ?? t.terminal.activeCwd() ?? "";
  try {
    const o = await t.exec.run(["pane", s, n]);
    if (o.code !== 0 || !o.stdout.trim()) return V;
    const i = JSON.parse(o.stdout.trim());
    return !i || typeof i != "object" || !("cwd" in i) || typeof i.cwd != "string" || !("sessionFile" in i) || typeof i.sessionFile != "string" || !("isRunning" in i) || typeof i.isRunning != "boolean" || !("state" in i) || i.state !== "inactive" && i.state !== "starting" && i.state !== "running" || i.state === "inactive" != !i.isRunning || !("summary" in i) || i.summary !== null && !Ne(i.summary) ? V : {
      cwd: i.cwd,
      sessionFile: i.sessionFile,
      isRunning: i.isRunning,
      state: i.state,
      summary: i.summary
    };
  } catch {
    return V;
  }
}
function Re(t) {
  const e = t.replace(/\\/g, "/").split("/").pop() || t, s = e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return s ? `${s[1]} ${s[2]}:${s[3]}:${s[4]}` : e.replace(/\.jsonl$/, "");
}
function Fe(t) {
  const e = t.replace(/\\/g, "/").split("/"), s = e[e.length - 2] || "";
  return s ? s.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
function He(t, e = Date.now()) {
  if (!t) return "unknown";
  const s = e - t, n = Math.round(s / 6e4);
  if (n < 1) return "just now";
  if (n < 60) return `${n}m ago`;
  const o = Math.round(n / 60);
  return o < 24 ? `${o}h ago` : `${Math.round(o / 24)}d ago`;
}
async function Be(t, e, s) {
  const n = e.includes("\\") ? "\\" : "/", o = [];
  if (s)
    o.push([e, s].join(n));
  else
    try {
      const u = await t.workspace.readDir(e);
      for (const y of u.entries)
        y.is_dir && y.name.startsWith("-") && o.push([e, y.name].join(n));
    } catch {
      return [];
    }
  const i = Date.now(), r = [];
  for (const u of o)
    try {
      const y = await t.workspace.readDir(u);
      for (const c of y.entries) {
        if (c.is_dir || !c.name.endsWith(".jsonl") || c.name.startsWith("__") || !/^\d{4}-\d{2}-\d{2}T/.test(c.name)) continue;
        const h = [u, c.name].join(n);
        let m = 0;
        try {
          m = (await t.workspace.stat(h)).modified || 0;
        } catch {
        }
        r.push({
          path: h,
          name: c.name,
          modified: m,
          displayName: Re(h),
          workspace: Fe(h),
          ageLabel: He(m, i)
        });
      }
    } catch {
    }
  return r.sort((u, y) => y.modified - u.modified || y.name.localeCompare(u.name)), r;
}
class Ue {
  messages = [];
  sessionId = "";
  cwd = "";
  model = "unknown";
  provider = "unknown";
  totalTokens = 0;
  totalCost = 0;
  updatedAt = 0;
  turns = 0;
  droppedHead = !1;
  pending = /* @__PURE__ */ new Map();
  tail = "";
  keepMessages;
  countUsage;
  constructor(e = {}) {
    this.keepMessages = e.keepMessages ?? 1500, this.countUsage = e.countUsage ?? !0;
  }
  push(e, s) {
    if (!e && !s && !this.tail) return;
    const n = this.tail + e, o = n.lastIndexOf(`
`);
    if (o < 0) {
      this.tail = s ? "" : n, s && n.trim() && this.applyLine(n.trim());
      return;
    }
    const i = n.slice(0, o);
    this.tail = n.slice(o + 1);
    for (const r of i.split(`
`)) {
      const u = r.trim();
      u && this.applyLine(u);
    }
    s && this.tail.trim() ? (this.applyLine(this.tail.trim()), this.tail = "") : s && (this.tail = "");
  }
  stats() {
    return {
      sessionId: this.sessionId,
      cwd: this.cwd,
      model: this.model,
      provider: this.provider,
      totalTokens: this.totalTokens,
      totalCost: this.totalCost,
      updatedAt: this.updatedAt,
      turns: this.turns
    };
  }
  trim() {
    this.messages.length <= this.keepMessages || (this.messages.splice(0, this.messages.length - this.keepMessages), this.droppedHead = !0);
  }
  applyLine(e) {
    let s;
    try {
      s = JSON.parse(e);
    } catch {
      return;
    }
    if (!s || typeof s != "object" || Array.isArray(s)) return;
    if (typeof s.timestamp == "number" ? s.timestamp : typeof s.timestamp == "string" ? Date.parse(s.timestamp) : Number.NaN, s.type === "session") {
      this.sessionId = s.id || this.sessionId, this.cwd = s.cwd || this.cwd;
      return;
    }
    if (s.type === "model_change") {
      s.model && (this.model = String(s.model)), s.provider && (this.provider = String(s.provider));
      return;
    }
    if (s.type === "custom" && s.customType === "tool_execution_start") {
      const i = s.data?.toolCallId;
      i && !this.pending.has(i) && this.pending.set(i, {
        id: i,
        name: s.data?.toolName || "tool",
        arguments: {},
        argumentsLabel: "",
        intent: s.data?.intent
      });
      return;
    }
    if (s.type !== "message") return;
    const n = s.message;
    if (!n || typeof n != "object" || Array.isArray(n)) return;
    n.model && (this.model = String(n.model)), n.provider && (this.provider = String(n.provider)), this.countUsage && (typeof n.usage?.totalTokens == "number" && (this.totalTokens = n.usage.totalTokens), typeof n.usage?.cost?.total == "number" && (this.totalCost += n.usage.cost.total));
    const o = n.timestamp || this.updatedAt || Date.now();
    if (n.role === "assistant") {
      this.turns += 1;
      let i = "", r = "";
      const u = [], y = n.content;
      if (Array.isArray(y))
        for (const c of y) {
          const h = c;
          if (h?.type === "text") i += `${h.text || ""}
`;
          else if (h?.type === "thinking") r += `${h.thinking || h.text || ""}
`;
          else if (h?.type === "toolCall") {
            const m = h.arguments ?? {}, w = {
              id: h.id || `call-${this.messages.length}-${u.length}`,
              name: h.name || "tool",
              arguments: m,
              argumentsLabel: Ve(m),
              intent: h.intent
            };
            u.push(w), this.pending.set(w.id, w);
          }
        }
      this.messages.push({
        id: s.id || `msg-${o}-${this.messages.length}`,
        role: "assistant",
        text: i.trim(),
        images: [],
        timestamp: o,
        timeLabel: Ht(o),
        cost: n.usage?.cost?.total,
        totalTokens: n.usage?.totalTokens,
        thinking: r.trim() || void 0,
        toolCalls: u.length ? u : void 0,
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "user") {
      let i = "";
      const r = [], u = n.content;
      if (Array.isArray(u))
        for (const y of u) {
          const c = y;
          c?.type === "text" ? i += `${c.text || ""}
` : c?.type === "image" && (c.url ? r.push(c.url) : c.data && r.push(`data:${c.mediaType || "image/png"};base64,${c.data}`));
        }
      else typeof u == "string" && (i = u);
      this.messages.push({
        id: s.id || `msg-${o}-${this.messages.length}`,
        role: "user",
        text: i.trim(),
        images: r,
        timestamp: o,
        timeLabel: Ht(o),
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "toolResult") {
      let i = "";
      const r = n.content;
      if (Array.isArray(r))
        for (const c of r) {
          const h = c;
          h?.type === "text" && (i += `${h.text || ""}
`);
        }
      else typeof r == "string" && (i = r);
      const u = n.toolCallId, y = u ? this.pending.get(u) : void 0;
      if (y && u) {
        y.result = i.trim(), y.isError = !!n.isError, this.pending.delete(u);
        for (const c of this.messages)
          c.toolCalls?.includes(y) && (c.searchText = "");
      } else
        this.messages.push({
          id: s.id || `msg-${o}-${this.messages.length}`,
          role: "toolResult",
          text: i.trim(),
          images: [],
          timestamp: o,
          timeLabel: Ht(o),
          toolCallId: u,
          isError: !!n.isError,
          searchText: ""
        }), this.trim();
    }
  }
}
function Ht(t) {
  if (!t) return "";
  const e = new Date(t);
  return `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
}
function Ve(t) {
  if (typeof t == "string") return t;
  try {
    return JSON.stringify(t, null, 2);
  } catch {
    return String(t);
  }
}
function je(t) {
  const e = [t.text];
  if (t.thinking && e.push(t.thinking), t.toolCalls)
    for (const s of t.toolCalls)
      e.push(s.name), s.intent && e.push(s.intent), s.result && e.push(s.result);
  return t.searchText = e.join(" ").toLowerCase(), t.searchText;
}
const We = 2 * 1024 * 1024, Ye = 6 * 1024 * 1024, Ge = 1024 * 1024, Je = 6, j = /* @__PURE__ */ new Map();
function qe(t, e, s, n = 0) {
  return `${t}\0${e}\0${s}\0${n}`;
}
async function Ke(t, e, s, n) {
  try {
    const o = await t.exec.run(["chunk", e, String(s), String(n)]);
    if (o.code !== 0 || !o.stdout.trim()) return null;
    const i = JSON.parse(o.stdout.trim());
    return i.error || typeof i != "object" || i === null || typeof i.start != "number" || typeof i.end != "number" || typeof i.size != "number" || typeof i.eof != "boolean" || typeof i.content != "string" ? null : i;
  } catch {
    return null;
  }
}
async function Ze(t, e) {
  const s = await t.exec.run(["file-metrics", e]).catch(() => null);
  if (!s || s.code !== 0 || !s.stdout.trim()) return null;
  try {
    const n = JSON.parse(s.stdout.trim());
    return n.error || typeof n != "object" || n === null ? null : {
      sessionId: "",
      cwd: "",
      model: typeof n.model == "string" ? n.model : "unknown",
      provider: typeof n.provider == "string" ? n.provider : "unknown",
      totalTokens: typeof n.totalTokens == "number" ? n.totalTokens : 0,
      totalCost: typeof n.totalCost == "number" ? n.totalCost : 0,
      updatedAt: 0,
      turns: typeof n.turns == "number" ? n.turns : 0
    };
  } catch {
    return null;
  }
}
function Qe(t, e, s, n, o) {
  return {
    ...t.stats(),
    filePath: e,
    messages: t.messages.slice(),
    droppedHead: n > 0 || t.droppedHead,
    startOffset: n,
    loadedBytes: o,
    fileSize: s,
    metricsExact: !1
  };
}
function Xt(t) {
  return t.map((e) => ({
    ...e,
    toolCalls: e.toolCalls?.map((s) => ({ ...s }))
  }));
}
function Xe(t) {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const n of t) {
    for (const o of n.toolCalls || []) e.set(o.id, { call: o, message: n });
    if (n.role === "toolResult" && n.toolCallId) {
      const o = e.get(n.toolCallId);
      if (o) {
        o.call.result = n.text, o.call.isError = !!n.isError, o.message.searchText = "";
        continue;
      }
    }
    s.push(n);
  }
  return s;
}
function ts(t, e, s, n) {
  let o = null;
  for (const i of j.values())
    i.data.filePath === t && i.size === e && i.mtime === s && i.data.startOffset > 0 && i.data.loadedBytes < n && (!o || i.data.loadedBytes > o.loadedBytes) && (o = i.data);
  return o;
}
async function es(t, e, s, n, o) {
  const i = new Ue({ keepMessages: Number.MAX_SAFE_INTEGER });
  let r = s, u = null, y = s, c = 0;
  for (; ; ) {
    const h = await Ke(t, e, r, Ge);
    if (!h) return null;
    u ??= h, c === 0 && (y = h.start);
    let m = h.content, w = h.end;
    if (o !== void 0 && h.start >= o) break;
    if (o !== void 0 && w > o) {
      const x = new TextEncoder().encode(m);
      m = new TextDecoder().decode(x.subarray(0, Math.max(0, o - h.start))), w = o;
    }
    const $ = new TextEncoder().encode(m).byteLength;
    if (!$ && w <= r) return null;
    if (i.push(m, h.eof || o !== void 0 && w >= o), c += $, w <= r || h.eof || o !== void 0 && w >= o || c >= n) break;
    r = h.end;
  }
  return { parser: i, metadata: u, startOffset: y, loadedBytes: c };
}
function ss(t, e) {
  return e && (t.model = e.model, t.provider = e.provider, t.totalTokens = e.totalTokens, t.totalCost = e.totalCost, t.turns = e.turns, t.metricsExact = !0), t;
}
async function te(t, e, s = {}) {
  const n = await t.workspace.stat(e).catch(() => null);
  if (!n || n.is_dir) return null;
  const o = Math.max(1, s.tailBytes ?? We), i = Math.max(1, s.historyBytes ?? Ye), r = s.before ?? ts(e, n.size, n.modified || 0, o), u = qe(e, o, i, r?.startOffset || 0), y = j.get(u);
  if (y && y.mtime === (n.modified || 0) && y.size === n.size)
    return j.delete(u), j.set(u, y), y.data;
  const c = r ? Math.min(r.startOffset, n.size) : void 0, h = c === void 0 ? Math.max(0, n.size - o) : Math.max(0, c - i), m = await es(t, e, h, i, c);
  if (!m) return null;
  let w;
  if (r) {
    const $ = Xe([...Xt(m.parser.messages), ...Xt(r.messages)]);
    w = {
      ...r,
      messages: $,
      droppedHead: m.startOffset > 0 || m.parser.droppedHead || r.droppedHead,
      startOffset: m.startOffset,
      loadedBytes: m.loadedBytes + r.loadedBytes,
      fileSize: n.size,
      metricsExact: !1
    }, !w.sessionId && m.parser.sessionId && (w.sessionId = m.parser.sessionId), !w.cwd && m.parser.cwd && (w.cwd = m.parser.cwd);
  } else
    w = Qe(m.parser, e, n.size, m.startOffset, m.loadedBytes), !w.sessionId && m.metadata?.sessionId && (w.sessionId = m.metadata.sessionId), !w.cwd && m.metadata?.cwd && (w.cwd = m.metadata.cwd);
  for (ss(w, await Ze(t, e)), j.set(u, { mtime: n.modified || 0, size: n.size, data: w }); j.size > Je; ) j.delete(j.keys().next().value);
  return w;
}
function ns() {
  j.clear();
}
const Gt = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, as = 3e4, os = 3e3, Jt = 600, L = /* @__PURE__ */ new Set();
let O = null, R = Gt, yt = "", _t = null, Et = null, ot = null, Bt = null, Ut = "", Tt = 0, J = 0, W = null, xt = -1, Pt = "", et = !1, q = !1, it = null, bt = 0, tt = -1 / 0, Lt = "";
function de(t) {
  const e = t.summary;
  return [
    t.cwd,
    t.sessionFile,
    t.state,
    t.isRunning ? "1" : "0",
    e ? e.model : "",
    e ? e.provider : "",
    e ? e.thinkingLevel : "",
    e ? e.status : "",
    e ? e.totalTokens : "",
    e ? e.turns : "",
    e ? e.totalCost : ""
  ].join("\0");
}
function qt() {
  if (typeof document < "u" && document.hidden) return !1;
  for (const t of L)
    if (!t.subscriber.visible || t.subscriber.visible()) return !0;
  return !1;
}
function pe() {
  for (const t of L)
    if (!t.disposed)
      try {
        t.subscriber.listener?.(R);
      } catch {
      }
}
function Ot() {
  _t !== null && (clearTimeout(_t), _t = null);
}
function is() {
  it !== null && (clearTimeout(it), it = null);
}
function Kt() {
  Tt += 1, Bt?.dispose(), Bt = null, Ut = "";
}
function ee() {
  if (Ot(), !O || L.size === 0 || W) return;
  const t = Date.now(), e = R.state === "starting" ? os : R.sessionFile ? as : bt > t ? 1e3 : 0;
  if (!et && e === 0) return;
  const s = et ? q ? 0 : Math.max(0, tt + Jt - t) : Math.max(0, tt + e - t);
  qt() && (_t = setTimeout(() => {
    _t = null, K(q);
  }, s));
}
function rs() {
  const t = O;
  if (!t || L.size === 0) return;
  const e = R.sessionFile, s = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")), n = s > 0 ? e.slice(0, s) : "";
  if (n === Ut || (Kt(), !n || typeof t.workspace.watch != "function")) return;
  Ut = n;
  const o = Tt, i = (r) => r.replace(/\\/g, "/");
  try {
    const r = t.workspace.watch(n, (u) => {
      O !== t || L.size === 0 || o !== Tt || u.type === "file_event" && (u.path && i(u.path) !== i(R.sessionFile) || (et = !0, W && (q = !0, it === null && qt() && (it = setTimeout(() => {
        it = null, K(!0);
      }, Jt))), K(!1)));
    });
    Promise.resolve(r).then((u) => {
      if (O !== t || L.size === 0 || o !== Tt) {
        u?.dispose();
        return;
      }
      Bt = u;
    }).catch(() => {
    });
  } catch {
  }
}
function zt(t) {
  const e = O;
  if (!e || L.size === 0 || t === yt) return;
  J += 1, yt = t, bt = Date.now() + 6e3, R = {
    ...Gt,
    cwd: e.terminal.activeCwd() || "",
    isRunning: !0,
    state: "starting"
  }, Lt = de(R), tt = -1 / 0, Kt(), et = !0, q = !0, pe();
  const s = J;
  if ((e.terminal.activePaneId() || "") === t) {
    K(!0);
    return;
  }
  queueMicrotask(() => {
    if (O !== e || L.size === 0 || s !== J) return;
    const o = e.terminal.activePaneId() || t;
    if (o !== yt) {
      zt(o);
      return;
    }
    K(!0);
  });
}
function K(t = !1) {
  const e = O;
  if (!e || L.size === 0) return Promise.resolve();
  const s = e.terminal.activePaneId() || "";
  if (s !== yt)
    return zt(s), W || Promise.resolve();
  if (et = !0, q ||= t, W && xt === J && Pt === s) return W;
  if (!qt() || !q && Date.now() - tt < Jt)
    return ee(), Promise.resolve();
  Ot();
  const n = { paneId: s, cwd: e.terminal.activeCwd() || "" }, o = J;
  et = !1, q = !1;
  const i = De(e, n).then((r) => {
    if (O !== e || L.size === 0 || o !== J) return;
    const u = e.terminal.activePaneId() || "";
    if (u !== n.paneId) {
      zt(u);
      return;
    }
    tt = Date.now();
    const y = r.state === "inactive" && Date.now() < bt ? { ...r, cwd: r.cwd || n.cwd, isRunning: !0, state: "starting", summary: null } : r;
    y.state !== "inactive" && (bt = 0);
    const c = de(y);
    R = y, rs(), c !== Lt && (Lt = c, pe());
  }).catch(() => {
    O === e && o === J && (tt = Date.now());
  }).finally(() => {
    W === i && (W = null, xt = -1, Pt = "", ee());
  });
  return W = i, xt = o, Pt = n.paneId, Promise.resolve();
}
function me() {
  J += 1, Ot(), is(), Et?.dispose(), Et = null, Kt(), ot && typeof document < "u" && document.removeEventListener("visibilitychange", ot), ot = null, O = null, W = null, xt = -1, Pt = "", et = !1, q = !1, bt = 0, R = Gt, yt = "", Lt = "", tt = -1 / 0;
}
function he(t, e) {
  O = t;
  const s = { subscriber: e, disposed: !1 };
  return L.add(s), !Et && typeof t.terminal.onDidChangeActivePane == "function" && (Et = t.terminal.onDidChangeActivePane((n) => {
    O !== t || L.size === 0 || zt(n || t.terminal.activePaneId() || "");
  })), typeof document < "u" && !ot && (ot = () => {
    document.hidden ? Ot() : K(!0);
  }, document.addEventListener("visibilitychange", ot)), e.listener?.(R), K(!0), {
    dispose() {
      s.disposed || (s.disposed = !0, L.delete(s), L.size === 0 && me());
    }
  };
}
function It() {
  return R;
}
function ls() {
  L.clear(), me();
}
let ft = null, at = null;
function cs(t) {
  return /^[A-Za-z]:[\\/]/.test(t) || t.includes("\\");
}
function rt(t, ...e) {
  const s = cs(t) ? "\\" : "/";
  return [t.replace(/[\\/]+$/, ""), ...e].join(s);
}
async function lt(t) {
  if (ft) return ft;
  if (at) return at;
  at = (async () => {
    try {
      const s = await t.exec.run(["doctor"]);
      if (s.code === 0 && s.stdout.trim())
        return ft = JSON.parse(s.stdout.trim()), ft;
    } catch {
    }
    return null;
  })();
  const e = await at;
  return at = null, e;
}
function us() {
  ft = null, at = null;
}
const ds = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let gt = [], Vt = 0;
const ps = 6e4;
function ms(t, e) {
  const s = `${t} ${e}`.toLowerCase();
  for (const n of ds)
    if (n.match.test(s)) return n.category;
  return "general";
}
function hs(t) {
  const e = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!e) return { name: "", description: "", body: t };
  let s = "", n = "";
  for (const o of e[1].split(/\r?\n/)) {
    const i = o.match(/^name:\s*(.+)$/);
    i && (s = i[1].trim().replace(/^['"]|['"]$/g, ""));
    const r = o.match(/^description:\s*(.+)$/);
    r && (n = r[1].trim().replace(/^['"]|['"]$/g, ""));
  }
  return { name: s, description: n, body: e[2] };
}
async function fs(t) {
  const e = await lt(t), s = [];
  return e?.ompHome ? (s.push({ label: "managed", path: rt(e.ompHome, "managed-skills") }), s.push({ label: "project", path: rt(e.ompHome, "skills") })) : (s.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), s.push({ label: "project", path: "~/.omp/agent/skills" })), e?.home ? s.push({ label: "user", path: rt(e.home, ".agents", "skills") }) : s.push({ label: "user", path: "~/.agents/skills" }), s;
}
async function jt(t, e = !1) {
  const s = Date.now();
  if (!e && gt.length && s - Vt < ps) return gt;
  const n = await fs(t), o = n[0]?.path.includes("\\") ? "\\" : "/", i = /* @__PURE__ */ new Map();
  for (const r of n) {
    let u;
    try {
      u = await t.workspace.readDir(r.path);
    } catch {
      continue;
    }
    for (const y of u.entries) {
      if (!y.is_dir) continue;
      const c = [r.path, y.name, "SKILL.md"].join(o);
      try {
        const h = await t.workspace.readFile(c);
        if (!h.content) continue;
        const { name: m, description: w, body: $ } = hs(h.content), x = m || y.name;
        if (i.has(x)) continue;
        i.set(x, {
          id: x,
          name: x,
          description: w || "No description provided.",
          category: ms(x, w),
          source: r.label,
          filePath: c,
          body: $
        });
      } catch {
      }
    }
  }
  return gt = [...i.values()].sort((r, u) => r.name.localeCompare(u.name)), Vt = s, gt;
}
function gs(t, e, s = "all") {
  const o = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return t.filter((i) => {
    if (s !== "all" && i.category !== s) return !1;
    if (!o.length) return !0;
    const r = `${i.name} ${i.description}`.toLowerCase();
    return o.every((u) => r.includes(u));
  });
}
function fe(t, e) {
  const s = t.terminal.activePaneId();
  return s ? (t.terminal.send(s, `/skill ${e}
`), t.ui.notify(`Injected skill ${e}`, "info"), !0) : (t.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function vs() {
  gt = [], Vt = 0;
}
function se(t, e) {
  const n = t.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean), r = `omp-${(n[n.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 32) || "workspace"}`;
  return e ? `${r}-${e}` : r;
}
function ge(t) {
  return !t || t.isDefault || t.id === kt ? [] : [`--config=${t.configPath}`];
}
function vt(t) {
  return `'${t.replace(/'/g, "'\\''")}'`;
}
async function wt(t, e = {}) {
  const s = await lt(t), n = e.cwd || t.terminal.activeCwd() || s?.home || ".", o = e.target || "new-tab", i = ge(e.preset), r = e.preset && !e.preset.isDefault ? e.preset.id : "default", u = !!s?.tmux && s?.platform !== "win32", y = ["omp", ...i].map(vt).join(" "), c = `${y}; exec "$SHELL"`;
  if (o === "new-tab") {
    const x = Math.random().toString(36).slice(2, 10), U = se(n, x), F = u ? ["tmux", "new-session", "-s", U, "-c", n, "sh", "-c", c] : ["omp", ...i], H = await t.terminal.createTerminalTab({
      cwd: n,
      argv: F,
      title: `OMP: ${r}`
    });
    return t.ui.notify(
      u ? `OMP started in tmux session ${U}` : `OMP started with profile ${r}`,
      "info"
    ), H;
  }
  const h = await t.terminal.splitTerminalPane({
    direction: o === "split-h" ? "horizontal" : "vertical",
    cwd: n
  });
  if (!h)
    return t.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const m = h.replace(/[^a-zA-Z0-9_-]+/g, "").slice(0, 8) || Math.random().toString(36).slice(2, 10), w = se(n, m), $ = u ? `tmux new-session -s ${vt(w)} -c ${vt(n)} sh -c ${vt(c)}` : y;
  return t.terminal.send(h, `${$}
`), t.ui.notify(`OMP started in a split pane with profile ${r}`, "info"), h;
}
async function ys(t, e) {
  const s = t.terminal.activePaneId();
  if (!s)
    return t.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const o = ["omp", ...ge(e)].map(vt).join(" ");
  return t.terminal.send(s, `${o}
`), t.ui.notify(
    `Launching OMP with profile ${e && !e.isDefault ? e.id : "default"}`,
    "info"
  ), !0;
}
async function ve(t) {
  const e = await lt(t);
  if (e && !e.tmux) {
    t.ui.notify("Copy-mode needs tmux, which was not found on this host", "warn");
    return;
  }
  const s = t.terminal.activePaneId();
  if (!s) {
    t.ui.notify("No active terminal pane", "warn");
    return;
  }
  t.terminal.send(s, "["), t.ui.notify("Tmux copy-mode active. Scroll freely, press q to exit.", "info");
}
const kt = "default";
async function At(t) {
  const s = (await lt(t))?.ompHome || "~/.omp/agent", n = [
    {
      id: kt,
      label: "Default profile",
      fileName: "config.yml",
      configPath: rt(s, "config.yml"),
      isDefault: !0
    }
  ];
  try {
    const o = await t.workspace.readDir(s);
    for (const i of o.entries) {
      if (i.is_dir) continue;
      const r = i.name.match(/^config\.(.+)\.ya?ml$/);
      r && n.push({
        id: r[1],
        label: r[1],
        fileName: i.name,
        configPath: rt(s, i.name),
        isDefault: !1
      });
    }
  } catch {
  }
  return n.sort((o, i) => o.isDefault !== i.isDefault ? o.isDefault ? -1 : 1 : o.id.localeCompare(i.id)), n;
}
function ne(t, e, s) {
  return e.map((n) => ({
    label: n.isDefault ? "Default profile" : n.id,
    detail: n.configPath,
    icon: "zap",
    action: () => {
      wt(t, { preset: n, target: s });
    }
  }));
}
const _s = { class: "omp-app" }, ws = { class: "omp-app__bar" }, bs = { class: "omp-app__brand" }, ks = { class: "omp-app__version" }, Ms = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, Ss = ["aria-selected", "onClick"], Cs = {
  key: 0,
  class: "omp-app__badge"
}, $s = { class: "omp-app__bar-actions" }, Ts = ["value"], xs = { class: "omp-app__body" }, Ps = {
  key: 0,
  class: "omp-pane omp-pane--sessions"
}, Is = { class: "omp-sessions" }, Es = { class: "omp-sessions__head" }, Ls = { class: "omp-field omp-field--search" }, zs = { class: "omp-toggle" }, As = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, Os = {
  key: 0,
  class: "omp-hint"
}, Ns = {
  key: 1,
  class: "omp-hint"
}, Ds = ["aria-selected", "onClick"], Rs = { class: "omp-session__title" }, Fs = { class: "omp-session__meta" }, Hs = { class: "omp-transcript" }, Bs = { class: "omp-transcript__head" }, Us = { class: "omp-transcript__meta" }, Vs = { class: "omp-tag" }, js = { class: "omp-tag" }, Ws = { class: "omp-tag omp-tag--cost" }, Ys = { class: "omp-tag" }, Gs = { class: "omp-transcript__tools" }, Js = { class: "omp-field omp-field--search" }, qs = {
  key: 0,
  class: "omp-banner omp-banner--action"
}, Ks = ["disabled"], Zs = { class: "omp-turns" }, Qs = {
  key: 0,
  class: "omp-hint"
}, Xs = {
  key: 1,
  class: "omp-hint"
}, tn = { class: "omp-turn__head" }, en = { class: "omp-turn__role" }, sn = { class: "omp-turn__time" }, nn = {
  key: 0,
  class: "omp-fold"
}, an = { class: "omp-code" }, on = {
  key: 1,
  class: "omp-turn__text"
}, rn = {
  key: 2,
  class: "omp-turn__images"
}, ln = ["onClick"], cn = ["src"], un = { class: "omp-fold__name" }, dn = {
  key: 0,
  class: "omp-fold__intent"
}, pn = { class: "omp-fold__state" }, mn = { class: "omp-code" }, hn = { class: "omp-code" }, fn = {
  key: 1,
  class: "omp-empty"
}, gn = {
  key: 1,
  class: "omp-pane omp-pane--skills"
}, vn = { class: "omp-skills__head" }, yn = { class: "omp-field omp-field--search omp-field--grow" }, _n = { class: "omp-chips" }, wn = ["onClick"], bn = { class: "omp-skills__body" }, kn = { class: "omp-skills__grid" }, Mn = {
  key: 0,
  class: "omp-hint"
}, Sn = {
  key: 1,
  class: "omp-hint"
}, Cn = ["onClick"], $n = { class: "omp-skill__title" }, Tn = { class: "omp-skill__desc" }, xn = { class: "omp-skill__tags" }, Pn = { class: "omp-chip omp-chip--tiny" }, In = { class: "omp-chip omp-chip--tiny" }, En = {
  key: 0,
  class: "omp-skill-detail"
}, Ln = { class: "omp-skill-detail__desc" }, zn = { class: "omp-code omp-code--tall" }, An = {
  key: 2,
  class: "omp-pane omp-pane--profiles"
}, On = { class: "omp-profiles__grid" }, Nn = { class: "omp-profile__icon" }, Dn = { class: "omp-profile__actions" }, Rn = ["onClick"], Fn = ["onClick"], Hn = ["onClick"], Bn = ["src"], Un = 6 * 1024 * 1024, $t = 200, Vn = /* @__PURE__ */ Wt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(t) {
    const e = t, s = "1.1.2", n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], o = C("sessions"), i = C(""), r = C([]), u = C(!0), y = C(""), c = C(!0), h = C(""), m = C(null), w = C(!1), $ = C(!1), x = C($t), U = C(""), F = C(null);
    let H = 0;
    const N = C([]), Y = C(!0), ct = C(""), ut = C("all"), z = C(null), Z = C([]), st = C(kt), Nt = I(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: r.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: N.value.length },
      { id: "profiles", label: "Profiles", icon: "zap", badge: Z.value.length }
    ]), St = I(() => {
      const b = y.value.trim().toLowerCase();
      return b ? r.value.filter((d) => d.path.toLowerCase().includes(b)) : r.value;
    }), dt = I(() => {
      if (!m.value) return [];
      const b = U.value.trim().toLowerCase();
      return b ? m.value.messages.filter((d) => je(d).includes(b)) : m.value.messages;
    }), Ct = I(() => {
      const b = dt.value;
      return b.length > x.value ? b.slice(b.length - x.value) : b;
    }), pt = I(() => Math.max(0, dt.value.length - Ct.value.length)), S = I(() => gs(N.value, ct.value, ut.value)), _ = I(
      () => Z.value.find((b) => b.id === st.value) || null
    );
    function B(b) {
      return b === "user" ? "terminal" : b === "assistant" ? "bot" : "code";
    }
    function Q(b) {
      return b === "user" ? "You" : b === "assistant" ? "Agent" : "Tool";
    }
    async function Dt() {
      u.value = !0;
      try {
        if (!i.value) {
          const d = await lt(e.api);
          i.value = d?.ompHome ? rt(d.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let b;
        if (c.value) {
          const d = It().sessionFile;
          if (!d) {
            r.value = [], h.value = "", m.value = null;
            return;
          }
          const l = d.replace(/\\/g, "/").split("/");
          b = l[l.length - 2];
        }
        r.value = await Be(e.api, i.value, b), r.value.length && !r.value.some((d) => d.path === h.value) && await Zt(r.value[0].path);
      } finally {
        u.value = !1;
      }
    }
    async function Zt(b) {
      const d = ++H;
      h.value = b, x.value = $t, w.value = !0;
      try {
        const l = await te(e.api, b);
        d === H && h.value === b && (m.value = l);
      } finally {
        d === H && (w.value = !1);
      }
    }
    async function _e() {
      const b = m.value, d = H;
      if (!(!b || b.startOffset <= 0 || $.value)) {
        $.value = !0;
        try {
          const l = await te(e.api, b.filePath, {
            historyBytes: Un,
            before: b
          });
          d === H && m.value === b && h.value === b.filePath && (m.value = l);
        } finally {
          d === H && ($.value = !1);
        }
      }
    }
    async function we() {
      Y.value = !0;
      try {
        N.value = await jt(e.api), !z.value && N.value.length && (z.value = N.value[0]);
      } finally {
        Y.value = !1;
      }
    }
    async function be() {
      Y.value = !0;
      try {
        N.value = await jt(e.api, !0), !z.value && N.value.length && (z.value = N.value[0]);
      } finally {
        Y.value = !1;
      }
    }
    function ke(b) {
      fe(e.api, b);
    }
    async function Rt(b, d) {
      await wt(e.api, { preset: b, target: d });
    }
    async function Me() {
      await wt(e.api, { preset: _.value, target: "new-tab" });
    }
    async function Se() {
      m.value && await wt(e.api, {
        preset: _.value,
        target: "new-tab",
        cwd: m.value.cwd || void 0
      });
    }
    async function Ce() {
      if (!m.value) return;
      const b = m.value.messages.map((d) => `### ${Q(d.role)}

${d.text}
`).join(`
---

`);
      try {
        await navigator.clipboard.writeText(b), e.api.ui.notify("Transcript copied to the clipboard", "info");
      } catch {
        e.api.ui.notify("The browser refused clipboard access", "warn");
      }
    }
    return ce(async () => {
      await Promise.all([
        At(e.api).then((b) => {
          Z.value = b;
        }),
        Dt(),
        we()
      ]);
    }), (b, d) => (f(), v("div", _s, [
      a("header", ws, [
        a("div", bs, [
          k(M, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          d[10] || (d[10] = a("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          a("span", ks, "v" + g(ze(s)), 1)
        ]),
        a("nav", Ms, [
          (f(!0), v(E, null, D(Nt.value, (l) => (f(), v("button", {
            key: l.id,
            type: "button",
            role: "tab",
            class: A(["omp-app__tab", { "is-active": o.value === l.id }]),
            "aria-selected": o.value === l.id,
            onClick: (T) => o.value = l.id
          }, [
            k(M, {
              name: l.icon,
              size: 14
            }, null, 8, ["name"]),
            a("span", null, g(l.label), 1),
            l.badge ? (f(), v("span", Cs, g(l.badge), 1)) : P("", !0)
          ], 10, Ss))), 128))
        ]),
        a("div", $s, [
          X(a("select", {
            "onUpdate:modelValue": d[0] || (d[0] = (l) => st.value = l),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch profile"
          }, [
            (f(!0), v(E, null, D(Z.value, (l) => (f(), v("option", {
              key: l.id,
              value: l.id
            }, g(l.label), 9, Ts))), 128))
          ], 512), [
            [ue, st.value]
          ]),
          a("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: Me
          }, [
            k(M, {
              name: "play",
              size: 13
            }),
            d[11] || (d[11] = a("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      a("main", xs, [
        o.value === "sessions" ? (f(), v("section", Ps, [
          a("aside", Is, [
            a("div", Es, [
              a("div", Ls, [
                k(M, {
                  name: "search",
                  size: 13
                }),
                X(a("input", {
                  "onUpdate:modelValue": d[1] || (d[1] = (l) => y.value = l),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [Ft, y.value]
                ])
              ]),
              a("button", {
                type: "button",
                class: A(["omp-icon-btn", { "is-busy": u.value }]),
                title: "Reload session list",
                onClick: Dt
              }, [
                k(M, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            a("label", zs, [
              X(a("input", {
                "onUpdate:modelValue": d[2] || (d[2] = (l) => c.value = l),
                type: "checkbox",
                onChange: Dt
              }, null, 544), [
                [Pe, c.value]
              ]),
              d[12] || (d[12] = a("span", null, "This workspace only", -1))
            ]),
            a("div", As, [
              u.value ? (f(), v("p", Os, "Loading sessions...")) : St.value.length ? P("", !0) : (f(), v("p", Ns, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (f(!0), v(E, null, D(St.value, (l) => (f(), v("button", {
                key: l.path,
                type: "button",
                role: "option",
                class: A(["omp-session", { "is-active": h.value === l.path }]),
                "aria-selected": h.value === l.path,
                onClick: (T) => Zt(l.path)
              }, [
                a("span", Rs, [
                  k(M, {
                    name: "file-text",
                    size: 12
                  }),
                  G(" " + g(l.displayName), 1)
                ]),
                a("span", Fs, [
                  a("span", null, g(l.workspace), 1),
                  a("span", null, g(l.ageLabel), 1)
                ])
              ], 10, Ds))), 128))
            ])
          ]),
          a("div", Hs, [
            m.value ? (f(), v(E, { key: 0 }, [
              a("header", Bs, [
                a("div", Us, [
                  a("span", Vs, [
                    k(M, {
                      name: "cpu",
                      size: 12
                    }),
                    G(g(m.value.model), 1)
                  ]),
                  a("span", js, [
                    k(M, {
                      name: "layers",
                      size: 12
                    }),
                    G(g(m.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  a("span", Ws, [
                    k(M, {
                      name: "activity",
                      size: 12
                    }),
                    G(g(m.value.totalCost.toFixed(3)) + " USD" + g(m.value.metricsExact ? "" : " loaded"), 1)
                  ]),
                  a("span", Ys, [
                    k(M, {
                      name: "message-square",
                      size: 12
                    }),
                    G(g(m.value.messages.length) + " entries", 1)
                  ])
                ]),
                a("div", Gs, [
                  a("div", Js, [
                    k(M, {
                      name: "search",
                      size: 12
                    }),
                    X(a("input", {
                      "onUpdate:modelValue": d[3] || (d[3] = (l) => U.value = l),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [Ft, U.value]
                    ])
                  ]),
                  a("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: Ce
                  }, [
                    k(M, {
                      name: "copy",
                      size: 12
                    }),
                    d[13] || (d[13] = a("span", null, "Copy", -1))
                  ]),
                  a("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: Se
                  }, [
                    k(M, {
                      name: "external-link",
                      size: 12
                    }),
                    d[14] || (d[14] = a("span", null, "Open", -1))
                  ])
                ])
              ]),
              m.value.droppedHead ? (f(), v("div", qs, [
                a("span", null, " Showing the last " + g((m.value.loadedBytes / 1048576).toFixed(1)) + " MB of " + g((m.value.fileSize / 1048576).toFixed(1)) + " MB (" + g(m.value.turns) + " turns" + g(m.value.metricsExact ? "" : " in loaded window") + "). ", 1),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  disabled: $.value,
                  onClick: _e
                }, [
                  k(M, {
                    name: "history",
                    size: 12
                  }),
                  a("span", null, g($.value ? "Loading" : "Load earlier"), 1)
                ], 8, Ks)
              ])) : P("", !0),
              a("div", Zs, [
                w.value ? (f(), v("p", Qs, "Reading transcript...")) : dt.value.length ? P("", !0) : (f(), v("p", Xs, "No turn matches that filter.")),
                pt.value ? (f(), v("button", {
                  key: 2,
                  type: "button",
                  class: "omp-btn omp-btn--wide",
                  onClick: d[4] || (d[4] = (l) => x.value += $t)
                }, [
                  k(M, {
                    name: "chevron-up",
                    size: 12
                  }),
                  a("span", null, "Show " + g(Math.min(pt.value, $t)) + " earlier turns (" + g(pt.value) + " hidden)", 1)
                ])) : P("", !0),
                (f(!0), v(E, null, D(Ct.value, (l) => (f(), v("article", {
                  key: l.id,
                  class: A(["omp-turn", `omp-turn--${l.role}`])
                }, [
                  a("header", tn, [
                    a("span", en, [
                      k(M, {
                        name: B(l.role),
                        size: 13
                      }, null, 8, ["name"]),
                      G(" " + g(Q(l.role)), 1)
                    ]),
                    a("span", sn, g(l.timeLabel), 1)
                  ]),
                  l.thinking ? (f(), v("details", nn, [
                    d[15] || (d[15] = a("summary", null, "Reasoning", -1)),
                    a("pre", an, g(l.thinking), 1)
                  ])) : P("", !0),
                  l.text ? (f(), v("pre", on, g(l.text), 1)) : P("", !0),
                  l.images.length ? (f(), v("div", rn, [
                    (f(!0), v(E, null, D(l.images, (T, $e) => (f(), v("button", {
                      key: $e,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (za) => F.value = T
                    }, [
                      a("img", {
                        src: T,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, cn)
                    ], 8, ln))), 128))
                  ])) : P("", !0),
                  (f(!0), v(E, null, D(l.toolCalls || [], (T) => (f(), v("details", {
                    key: T.id,
                    class: A(["omp-fold omp-fold--tool", { "is-error": T.isError }])
                  }, [
                    a("summary", null, [
                      a("span", un, g(T.name), 1),
                      T.intent ? (f(), v("span", dn, g(T.intent), 1)) : P("", !0),
                      a("span", pn, g(T.isError ? "failed" : "ok"), 1)
                    ]),
                    d[17] || (d[17] = a("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    a("pre", mn, g(T.argumentsLabel), 1),
                    T.result ? (f(), v(E, { key: 0 }, [
                      d[16] || (d[16] = a("p", { class: "omp-fold__label" }, "Result", -1)),
                      a("pre", hn, g(T.result), 1)
                    ], 64)) : P("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (f(), v("div", fn, [
              k(M, {
                name: "history",
                size: 28
              }),
              d[18] || (d[18] = a("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ])) : P("", !0),
        o.value === "skills" ? (f(), v("section", gn, [
          a("div", vn, [
            a("div", yn, [
              k(M, {
                name: "search",
                size: 14
              }),
              X(a("input", {
                "onUpdate:modelValue": d[5] || (d[5] = (l) => ct.value = l),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [Ft, ct.value]
              ])
            ]),
            a("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: be
            }, [
              k(M, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          a("div", _n, [
            (f(), v(E, null, D(n, (l) => a("button", {
              key: l,
              type: "button",
              class: A(["omp-chip", { "is-active": ut.value === l }]),
              onClick: (T) => ut.value = l
            }, g(l), 11, wn)), 64))
          ]),
          a("div", bn, [
            a("div", kn, [
              Y.value ? (f(), v("p", Mn, "Indexing skills...")) : S.value.length ? P("", !0) : (f(), v("p", Sn, "No skill matches that search.")),
              (f(!0), v(E, null, D(S.value, (l) => (f(), v("button", {
                key: l.id,
                type: "button",
                class: A(["omp-skill", { "is-active": z.value?.id === l.id }]),
                onClick: (T) => z.value = l
              }, [
                a("span", $n, [
                  k(M, {
                    name: "book",
                    size: 13
                  }),
                  G(" " + g(l.name), 1)
                ]),
                a("span", Tn, g(l.description), 1),
                a("span", xn, [
                  a("span", Pn, g(l.category), 1),
                  a("span", In, g(l.source), 1)
                ])
              ], 10, Cn))), 128))
            ]),
            z.value ? (f(), v("aside", En, [
              a("header", null, [
                a("h3", null, g(z.value.name), 1),
                a("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: d[6] || (d[6] = (l) => ke(z.value.name))
                }, [
                  k(M, {
                    name: "terminal",
                    size: 12
                  }),
                  d[19] || (d[19] = a("span", null, "Inject", -1))
                ])
              ]),
              a("p", Ln, g(z.value.description), 1),
              a("pre", zn, g(z.value.body || "This skill has no body."), 1)
            ])) : P("", !0)
          ])
        ])) : P("", !0),
        o.value === "profiles" ? (f(), v("section", An, [
          d[23] || (d[23] = a("header", { class: "omp-profiles__head" }, [
            a("h2", null, "Profiles"),
            a("p", null, "Discovered from the OMP agent directory. Launch one into a new tab or a split pane.")
          ], -1)),
          a("div", On, [
            (f(!0), v(E, null, D(Z.value, (l) => (f(), v("article", {
              key: l.id,
              class: A(["omp-profile", { "is-default": l.isDefault }])
            }, [
              a("header", null, [
                a("span", Nn, [
                  k(M, {
                    name: "zap",
                    size: 16
                  })
                ]),
                a("div", null, [
                  a("h3", null, g(l.label), 1),
                  a("code", null, g(l.fileName), 1)
                ])
              ]),
              a("div", Dn, [
                a("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: (T) => Rt(l, "new-tab")
                }, [
                  k(M, {
                    name: "play",
                    size: 12
                  }),
                  d[20] || (d[20] = a("span", null, "New tab", -1))
                ], 8, Rn),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (T) => Rt(l, "split-v")
                }, [
                  k(M, {
                    name: "split-vertical",
                    size: 12
                  }),
                  d[21] || (d[21] = a("span", null, "Split right", -1))
                ], 8, Fn),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (T) => Rt(l, "split-h")
                }, [
                  k(M, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  d[22] || (d[22] = a("span", null, "Split down", -1))
                ], 8, Hn)
              ])
            ], 2))), 128))
          ])
        ])) : P("", !0)
      ]),
      F.value ? (f(), v("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: d[9] || (d[9] = (l) => F.value = null)
      }, [
        a("button", {
          type: "button",
          class: "omp-lightbox__close",
          "aria-label": "Close image",
          onClick: d[7] || (d[7] = (l) => F.value = null)
        }, [
          k(M, {
            name: "x",
            size: 18
          })
        ]),
        a("img", {
          src: F.value,
          alt: "Attachment preview",
          onClick: d[8] || (d[8] = nt(() => {
          }, ["stop"]))
        }, null, 8, Bn)
      ])) : P("", !0)
    ]));
  }
}), jn = /* @__PURE__ */ Yt(Vn, [["__scopeId", "data-v-1254bca8"]]), Wn = { class: "omp-hud__bar" }, Yn = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, Gn = ["title"], Jn = {
  key: 0,
  class: "omp-hud__peek"
}, qn = ["title", "aria-expanded"], Kn = { class: "omp-hud__body" }, Zn = { class: "omp-hud__row" }, Qn = ["title"], Xn = { class: "omp-hud__chip-text" }, ta = ["title"], ea = { class: "omp-hud__chip-text" }, sa = { class: "omp-hud__row" }, na = ["title"], aa = { class: "omp-hud__chip-text" }, oa = ["title"], ia = { class: "omp-hud__chip-text" }, ra = { class: "omp-hud__status" }, la = { class: "omp-hud__turns" }, ca = { class: "omp-hud__actions" }, ua = ["disabled", "title"], da = {
  key: 1,
  class: "omp-hud__placeholder"
}, pa = { class: "omp-hud__placeholder-title" }, ma = { class: "omp-hud__placeholder-note" }, ha = { class: "omp-hud__placeholder" }, fa = { class: "omp-hud__launch" }, ga = ["disabled"], va = ["value"], ya = ["disabled"], ae = "dinotty-omp.preset", oe = "dinotty-omp.presets", _a = 12e3, wa = /* @__PURE__ */ Wt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(t) {
    const e = t, s = C(!1), n = C(!1), o = C(!0), i = C(!0), r = C([]), u = C(kt), c = C({ cwd: "", sessionFile: "", isRunning: !1, state: "inactive", summary: null }), h = C(!1);
    let m = 0, w, $ = !1;
    const x = [], U = I(
      () => r.value.find((S) => S.id === u.value) || null
    ), F = I(() => {
      const _ = (c.value.summary?.model || "").split("/").pop() || "omp";
      return _.length > 18 ? `${_.slice(0, 17)}...` : _;
    }), H = I(() => {
      const S = c.value.summary?.totalTokens || 0;
      return S >= 1e6 ? `${(S / 1e6).toFixed(1)}M tok` : S >= 1e3 ? `${Math.round(S / 1e3)}k tok` : `${S} tok`;
    }), N = I(() => {
      if (c.value.state === "inactive") return "Inactive";
      if (c.value.state === "starting") return "Starting";
      switch (c.value.summary?.status) {
        case "running_tool":
          return "Running a tool";
        case "thinking":
          return "Thinking";
        case "error":
          return "Last tool failed";
        default:
          return "Waiting for you";
      }
    }), Y = I(() => c.value.state === "inactive" ? "is-inactive" : c.value.state === "starting" ? "is-starting" : `is-${c.value.summary?.status || "idle"}`), ct = I(() => {
      const S = c.value.cwd;
      if (!S) return "this pane";
      const _ = S.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return _[_.length - 1] || S;
    }), ut = I(() => c.value.state === "inactive" ? "Inactive" : c.value.state === "starting" ? "Starting" : `${F.value} · ${c.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function z() {
      try {
        const S = localStorage.getItem(oe), _ = S ? JSON.parse(S) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    function Z(S) {
      try {
        localStorage.setItem(oe, JSON.stringify(S));
      } catch {
      }
    }
    function st() {
      try {
        localStorage.setItem(ae, u.value);
      } catch {
      }
    }
    function Nt(S) {
      if (!$) {
        if (h.value = !0, S.state === "inactive" && n.value && Date.now() < m) {
          c.value = { ...S, state: "starting" };
          return;
        }
        (S.state !== "inactive" || Date.now() >= m) && (n.value = !1), c.value = S;
      }
    }
    function St() {
      e.api.open();
    }
    async function dt() {
      await ve(e.api);
    }
    async function Ct() {
      await wt(e.api, { preset: U.value, target: "split-v" });
    }
    async function pt() {
      !await ys(e.api, U.value) || $ || (st(), n.value = !0, c.value = { ...c.value, state: "starting", summary: null }, m = Date.now() + _a, w !== void 0 && window.clearTimeout(w), w = window.setTimeout(() => {
        w = void 0, $ || K(!0);
      }, 600));
    }
    return ce(async () => {
      try {
        const Q = localStorage.getItem(ae);
        Q && (u.value = Q);
      } catch {
      }
      const S = z();
      S.length && (r.value = S, o.value = !1), x.push(
        he(e.api, {
          listener: Nt,
          visible: () => !s.value
        })
      );
      const _ = await lt(e.api);
      if ($) return;
      i.value = _ ? _.tmux : !0;
      const B = await At(e.api);
      $ || (r.value = B, Z(r.value), r.value.some((Q) => Q.id === u.value) || (u.value = kt), o.value = !1);
    }), Te(() => {
      $ = !0, w !== void 0 && (window.clearTimeout(w), w = void 0);
      for (const S of x)
        try {
          S.dispose();
        } catch {
        }
      x.length = 0;
    }), (S, _) => (f(), v("section", {
      class: A(["omp-hud", [`is-${c.value.state}`, { "is-collapsed": s.value, "is-dragging": t.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      a("header", Wn, [
        a("div", Yn, [
          k(M, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          _[6] || (_[6] = a("span", { class: "omp-hud__name" }, "OMP", -1)),
          a("span", {
            class: A(["omp-hud__beacon", Y.value]),
            title: N.value
          }, null, 10, Gn),
          s.value ? (f(), v("span", Jn, g(ut.value), 1)) : P("", !0)
        ]),
        a("div", {
          class: "omp-hud__tools",
          onPointerdown: _[3] || (_[3] = nt(() => {
          }, ["stop"])),
          onMousedown: _[4] || (_[4] = nt(() => {
          }, ["stop"]))
        }, [
          a("button", {
            type: "button",
            class: "omp-hud__icon",
            title: s.value ? "Expand panel" : "Collapse panel",
            "aria-expanded": !s.value,
            onPointerdown: _[0] || (_[0] = nt(() => {
            }, ["stop"])),
            onMousedown: _[1] || (_[1] = nt(() => {
            }, ["stop"])),
            onClick: _[2] || (_[2] = nt((B) => s.value = !s.value, ["stop"]))
          }, [
            k(M, {
              name: s.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, qn)
        ], 32)
      ]),
      X(a("div", Kn, [
        c.value.state === "running" && c.value.summary ? (f(), v(E, { key: 0 }, [
          a("div", Zn, [
            a("span", {
              class: "omp-hud__chip",
              title: `Model: ${c.value.summary.model}`
            }, [
              k(M, {
                name: "cpu",
                size: 12
              }),
              a("span", Xn, g(F.value), 1)
            ], 8, Qn),
            a("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${c.value.summary.thinkingLevel}`
            }, [
              k(M, {
                name: "zap",
                size: 12
              }),
              a("span", ea, g(c.value.summary.thinkingLevel), 1)
            ], 8, ta)
          ]),
          a("div", sa, [
            a("span", {
              class: "omp-hud__chip",
              title: `${c.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              k(M, {
                name: "layers",
                size: 12
              }),
              a("span", aa, g(H.value), 1)
            ], 8, na),
            a("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${c.value.summary.totalCost.toFixed(4)} USD`
            }, [
              k(M, {
                name: "activity",
                size: 12
              }),
              a("span", ia, g(c.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, oa)
          ]),
          a("p", ra, [
            a("span", {
              class: A(["omp-hud__status-dot", Y.value])
            }, null, 2),
            G(" " + g(N.value) + " ", 1),
            a("span", la, g(c.value.summary.turns) + " turns", 1)
          ]),
          a("div", ca, [
            a("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: St
            }, [
              k(M, {
                name: "history",
                size: 14
              }),
              _[7] || (_[7] = a("span", null, "Explorer", -1))
            ]),
            a("button", {
              type: "button",
              class: "omp-hud__action",
              disabled: !i.value,
              title: i.value ? "Enter tmux copy-mode to scroll history" : "tmux was not found on this host",
              onClick: dt
            }, [
              k(M, {
                name: "terminal",
                size: 14
              }),
              _[8] || (_[8] = a("span", null, "Scroll", -1))
            ], 8, ua),
            a("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: Ct
            }, [
              k(M, {
                name: "split-vertical",
                size: 14
              }),
              _[9] || (_[9] = a("span", null, "Split", -1))
            ])
          ])
        ], 64)) : c.value.state === "starting" || !h.value ? (f(), v("div", da, [
          _[10] || (_[10] = a("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          a("p", pa, g(h.value ? "Starting OMP" : "Reading session"), 1),
          a("p", ma, "Waiting for the first turn in " + g(ct.value), 1)
        ])) : (f(), v(E, { key: 2 }, [
          a("div", ha, [
            k(M, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            _[11] || (_[11] = a("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            _[12] || (_[12] = a("p", { class: "omp-hud__placeholder-note" }, "Pick a profile and start one in this pane.", -1))
          ]),
          a("div", fa, [
            _[13] || (_[13] = a("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Profile", -1)),
            X(a("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": _[5] || (_[5] = (B) => u.value = B),
              class: "omp-hud__select",
              disabled: o.value,
              onChange: st
            }, [
              (f(!0), v(E, null, D(r.value, (B) => (f(), v("option", {
                key: B.id,
                value: B.id
              }, g(B.label), 9, va))), 128))
            ], 40, ga), [
              [ue, u.value]
            ]),
            a("button", {
              type: "button",
              class: "omp-hud__launch-btn",
              disabled: o.value || n.value,
              title: "Run OMP in the active pane",
              onClick: pt
            }, [
              k(M, {
                name: "play",
                size: 12
              }),
              a("span", null, g(n.value ? "Starting" : "Launch"), 1)
            ], 8, ya)
          ])
        ], 64))
      ], 512), [
        [Ie, !s.value]
      ])
    ], 2));
  }
}), ba = /* @__PURE__ */ Yt(wa, [["__scopeId", "data-v-29405565"]]);
function ka(t) {
  const e = he(t, {});
  return {
    series: {
      id: "dinotty-omp:session",
      label: "OMP session cost",
      scale: "auto",
      statusIcon: "Bot",
      defaultVisible: !0,
      current: () => {
        const n = It().summary;
        return n ? n.totalCost : null;
      },
      statusText: () => {
        const n = It();
        if (n.state === "inactive") return null;
        const o = n.summary;
        if (n.state === "starting" || !o) return "OMP: starting";
        const i = o.model.split("/").pop() || "omp";
        return `OMP ${i.length > 16 ? `${i.slice(0, 15)}...` : i} ${o.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        const n = It();
        if (n.state === "inactive")
          return [{ label: "State", value: "No OMP session in this tab" }];
        const o = n.summary;
        return o ? [
          { label: "Model", value: o.model },
          { label: "Provider", value: o.provider },
          { label: "Thinking", value: o.thinkingLevel },
          { label: "Status", value: o.status.replace("_", " ") },
          { label: "Context tokens", value: o.totalTokens.toLocaleString() },
          { label: "Assistant turns", value: String(o.turns) },
          { label: "Session cost", value: `${o.totalCost.toFixed(4)} USD` },
          { label: "Workspace", value: n.cwd || "unknown" }
        ] : [
          { label: "State", value: "Starting" },
          { label: "Workspace", value: n.cwd || "unknown" }
        ];
      }
    },
    dispose() {
      e.dispose();
    }
  };
}
const Ma = 244, mt = 12, Sa = 560;
function Ca() {
  return typeof window > "u" || typeof window.innerWidth != "number" ? 1280 : Number.isFinite(window.innerWidth) && window.innerWidth > 0 ? window.innerWidth : 1280;
}
function $a() {
  const t = Ca();
  return t < Sa ? { x: mt, y: mt } : { x: Math.max(mt, t - Ma - mt), y: mt };
}
const ye = "dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud", ie = "dinotty-omp:overlay-pos-migrated:v1", Ta = 44, xa = 120, re = 244, le = 12;
function Pa() {
  try {
    const t = localStorage.getItem(ye);
    if (!t) return null;
    const e = JSON.parse(t);
    return typeof e?.x != "number" || typeof e?.y != "number" || !Number.isFinite(e.x) || !Number.isFinite(e.y) ? null : { x: e.x, y: e.y };
  } catch {
    return null;
  }
}
function Ia(t, e, s) {
  return t.x < 0 || t.y < 0 || t.x > e || t.y > s ? !0 : t.y >= Ta ? !1 : t.x >= e - re - le && t.x <= e - re + le || t.x > e - xa;
}
function Ea(t) {
  if (typeof window > "u") return;
  const e = window.innerWidth, s = window.innerHeight;
  if (!Number.isFinite(e) || !Number.isFinite(s) || e <= 0 || s <= 0 || e >= 560) return;
  try {
    if (localStorage.getItem(ie)) return;
  } catch {
    return;
  }
  const n = Pa();
  if (!(!n || !Ia(n, e, s)))
    try {
      localStorage.setItem(ye, JSON.stringify(t)), localStorage.setItem(ie, "1");
    } catch {
    }
}
let Mt = [];
function ht(t) {
  Mt.push(() => t.dispose());
}
function Aa(t) {
  Mt = [], ht(
    t.commands.register("omp.open-session-viewer", () => {
      t.open();
    })
  ), ht(
    t.commands.register("omp.tmux-copymode", () => {
      ve(t);
    })
  ), ht(
    t.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a profile in a new tab",
      items: async () => ne(t, await At(t), "new-tab")
    })
  ), ht(
    t.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a profile in a split pane",
      items: async () => ne(t, await At(t), "split-v")
    })
  ), ht(
    t.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await jt(t)).map((o) => ({
        label: o.name,
        detail: o.description,
        icon: "book",
        action: () => {
          fe(t, o.name);
        }
      }))
    })
  );
  const e = ka(t);
  Mt.push(() => e.dispose());
  const s = $a();
  return Ea(s), {
    component: jn,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: ba,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: s
      }
    ],
    monitor: { series: [e.series] },
    dispose: La
  };
}
function La() {
  for (const t of Mt)
    try {
      t();
    } catch {
    }
  Mt = [], ns(), ls(), vs(), us();
}
export {
  Aa as activate,
  La as deactivate
};
