const p = window.__DINOTTY_VUE__;
if (!p)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const T = p.ref;
p.reactive;
const I = p.computed;
p.watch;
const ue = p.onMounted;
p.onUnmounted;
const xe = p.onBeforeUnmount;
p.nextTick;
p.h;
const Wt = p.defineComponent;
p.getCurrentInstance;
const f = p.toDisplayString, z = p.normalizeClass;
p.normalizeStyle;
const g = p.openBlock, v = p.createElementBlock, o = p.createElementVNode, Ie = p.createBlock, k = p.createVNode, x = p.createCommentVNode, j = p.createTextVNode;
p.withCtx;
const X = p.withDirectives, nt = p.withModifiers;
p.withKeys;
const Dt = p.vModelText, de = p.vModelSelect, Ee = p.vModelCheckbox;
p.vModelRadio;
const Le = p.vShow, Ae = p.mergeProps, D = p.renderList;
p.renderSlot;
p.resolveComponent;
p.resolveDirective;
const ze = p.resolveDynamicComponent;
p.resolveTransitionHooks;
p.setBlockTracking;
p.useSlots;
p.useAttrs;
p.isRef;
const Oe = p.unref;
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
}, Re = ["width", "height"], Ne = /* @__PURE__ */ Wt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(t) {
    const e = t, s = I(() => e.size), n = I(() => e.class), a = I(() => Qt[e.name] || Qt.info);
    return (i, r) => (g(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: s.value,
      height: s.value,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: z(["omp-svg-icon", n.value]),
      "aria-hidden": "true"
    }, [
      (g(!0), v(E, null, D(a.value, (c, y) => (g(), Ie(ze(c.tag), Ae({ key: y }, { ref_for: !0 }, c.attrs), null, 16))), 128))
    ], 10, Re));
  }
}), Yt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, a] of e)
    s[n] = a;
  return s;
}, S = /* @__PURE__ */ Yt(Ne, [["__scopeId", "data-v-35ecedfe"]]), V = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
};
function De(t) {
  return !(!t || typeof t != "object" || !("model" in t) || typeof t.model != "string" || !("provider" in t) || typeof t.provider != "string" || !("thinkingLevel" in t) || typeof t.thinkingLevel != "string" || !("status" in t) || !["idle", "thinking", "running_tool", "error"].includes(String(t.status)) || !("totalTokens" in t) || typeof t.totalTokens != "number" || !Number.isSafeInteger(t.totalTokens) || t.totalTokens < 0 || !("turns" in t) || typeof t.turns != "number" || !Number.isSafeInteger(t.turns) || t.turns < 0 || !("totalCost" in t) || typeof t.totalCost != "number" || !Number.isFinite(t.totalCost) || t.totalCost < 0);
}
async function pe(t, e) {
  const s = e?.paneId ?? t.terminal.activePaneId() ?? "", n = e?.cwd ?? t.terminal.activeCwd() ?? "";
  try {
    const a = await t.exec.run(["pane", s, n]);
    if (a.code !== 0 || !a.stdout.trim()) return V;
    const i = JSON.parse(a.stdout.trim());
    return !i || typeof i != "object" || !("cwd" in i) || typeof i.cwd != "string" || !("sessionFile" in i) || typeof i.sessionFile != "string" || !("isRunning" in i) || typeof i.isRunning != "boolean" || !("state" in i) || i.state !== "inactive" && i.state !== "starting" && i.state !== "running" || i.state === "inactive" != !i.isRunning || !("summary" in i) || i.summary !== null && !De(i.summary) ? V : {
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
function Fe(t) {
  const e = t.replace(/\\/g, "/").split("/").pop() || t, s = e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return s ? `${s[1]} ${s[2]}:${s[3]}:${s[4]}` : e.replace(/\.jsonl$/, "");
}
function He(t) {
  const e = t.replace(/\\/g, "/").split("/"), s = e[e.length - 2] || "";
  return s ? s.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
function Be(t, e = Date.now()) {
  if (!t) return "unknown";
  const s = e - t, n = Math.round(s / 6e4);
  if (n < 1) return "just now";
  if (n < 60) return `${n}m ago`;
  const a = Math.round(n / 60);
  return a < 24 ? `${a}h ago` : `${Math.round(a / 24)}d ago`;
}
async function je(t, e, s) {
  const n = e.includes("\\") ? "\\" : "/", a = [];
  if (s)
    a.push([e, s].join(n));
  else
    try {
      const c = await t.workspace.readDir(e);
      for (const y of c.entries)
        y.is_dir && y.name.startsWith("-") && a.push([e, y.name].join(n));
    } catch {
      return [];
    }
  const i = Date.now(), r = [];
  for (const c of a)
    try {
      const y = await t.workspace.readDir(c);
      for (const d of y.entries) {
        if (d.is_dir || !d.name.endsWith(".jsonl") || d.name.startsWith("__") || !/^\d{4}-\d{2}-\d{2}T/.test(d.name)) continue;
        const h = [c, d.name].join(n);
        let m = 0;
        try {
          m = (await t.workspace.stat(h)).modified || 0;
        } catch {
        }
        r.push({
          path: h,
          name: d.name,
          modified: m,
          displayName: Fe(h),
          workspace: He(h),
          ageLabel: Be(m, i)
        });
      }
    } catch {
    }
  return r.sort((c, y) => y.modified - c.modified || y.name.localeCompare(c.name)), r;
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
    const n = this.tail + e, a = n.lastIndexOf(`
`);
    if (a < 0) {
      this.tail = s ? "" : n, s && n.trim() && this.applyLine(n.trim());
      return;
    }
    const i = n.slice(0, a);
    this.tail = n.slice(a + 1);
    for (const r of i.split(`
`)) {
      const c = r.trim();
      c && this.applyLine(c);
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
    const a = n.timestamp || this.updatedAt || Date.now();
    if (n.role === "assistant") {
      this.turns += 1;
      let i = "", r = "";
      const c = [], y = n.content;
      if (Array.isArray(y))
        for (const d of y) {
          const h = d;
          if (h?.type === "text") i += `${h.text || ""}
`;
          else if (h?.type === "thinking") r += `${h.thinking || h.text || ""}
`;
          else if (h?.type === "toolCall") {
            const m = h.arguments ?? {}, w = {
              id: h.id || `call-${this.messages.length}-${c.length}`,
              name: h.name || "tool",
              arguments: m,
              argumentsLabel: Ve(m),
              intent: h.intent
            };
            c.push(w), this.pending.set(w.id, w);
          }
        }
      this.messages.push({
        id: s.id || `msg-${a}-${this.messages.length}`,
        role: "assistant",
        text: i.trim(),
        images: [],
        timestamp: a,
        timeLabel: Ft(a),
        cost: n.usage?.cost?.total,
        totalTokens: n.usage?.totalTokens,
        thinking: r.trim() || void 0,
        toolCalls: c.length ? c : void 0,
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "user") {
      let i = "";
      const r = [], c = n.content;
      if (Array.isArray(c))
        for (const y of c) {
          const d = y;
          d?.type === "text" ? i += `${d.text || ""}
` : d?.type === "image" && (d.url ? r.push(d.url) : d.data && r.push(`data:${d.mediaType || "image/png"};base64,${d.data}`));
        }
      else typeof c == "string" && (i = c);
      this.messages.push({
        id: s.id || `msg-${a}-${this.messages.length}`,
        role: "user",
        text: i.trim(),
        images: r,
        timestamp: a,
        timeLabel: Ft(a),
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "toolResult") {
      let i = "";
      const r = n.content;
      if (Array.isArray(r))
        for (const d of r) {
          const h = d;
          h?.type === "text" && (i += `${h.text || ""}
`);
        }
      else typeof r == "string" && (i = r);
      const c = n.toolCallId, y = c ? this.pending.get(c) : void 0;
      if (y && c) {
        y.result = i.trim(), y.isError = !!n.isError, this.pending.delete(c);
        for (const d of this.messages)
          d.toolCalls?.includes(y) && (d.searchText = "");
      } else
        this.messages.push({
          id: s.id || `msg-${a}-${this.messages.length}`,
          role: "toolResult",
          text: i.trim(),
          images: [],
          timestamp: a,
          timeLabel: Ft(a),
          toolCallId: c,
          isError: !!n.isError,
          searchText: ""
        }), this.trim();
    }
  }
}
function Ft(t) {
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
function We(t) {
  const e = [t.text];
  if (t.thinking && e.push(t.thinking), t.toolCalls)
    for (const s of t.toolCalls)
      e.push(s.name), s.intent && e.push(s.intent), s.result && e.push(s.result);
  return t.searchText = e.join(" ").toLowerCase(), t.searchText;
}
const Ye = 2 * 1024 * 1024, Ge = 6 * 1024 * 1024, Je = 1024 * 1024, Ze = 6, W = /* @__PURE__ */ new Map();
function qe(t, e, s, n = 0) {
  return `${t}\0${e}\0${s}\0${n}`;
}
async function Ke(t, e, s, n) {
  try {
    const a = await t.exec.run(["chunk", e, String(s), String(n)]);
    if (a.code !== 0 || !a.stdout.trim()) return null;
    const i = JSON.parse(a.stdout.trim());
    return i.error || typeof i != "object" || i === null || typeof i.start != "number" || typeof i.end != "number" || typeof i.size != "number" || typeof i.eof != "boolean" || typeof i.content != "string" ? null : i;
  } catch {
    return null;
  }
}
async function Qe(t, e) {
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
function Xe(t, e, s, n, a) {
  return {
    ...t.stats(),
    filePath: e,
    messages: t.messages.slice(),
    droppedHead: n > 0 || t.droppedHead,
    startOffset: n,
    loadedBytes: a,
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
function ts(t) {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const n of t) {
    for (const a of n.toolCalls || []) e.set(a.id, { call: a, message: n });
    if (n.role === "toolResult" && n.toolCallId) {
      const a = e.get(n.toolCallId);
      if (a) {
        a.call.result = n.text, a.call.isError = !!n.isError, a.message.searchText = "";
        continue;
      }
    }
    s.push(n);
  }
  return s;
}
function es(t, e, s, n) {
  let a = null;
  for (const i of W.values())
    i.data.filePath === t && i.size === e && i.mtime === s && i.data.startOffset > 0 && i.data.loadedBytes < n && (!a || i.data.loadedBytes > a.loadedBytes) && (a = i.data);
  return a;
}
async function ss(t, e, s, n, a) {
  const i = new Ue({ keepMessages: Number.MAX_SAFE_INTEGER });
  let r = s, c = null, y = s, d = 0;
  for (; ; ) {
    const h = await Ke(t, e, r, Je);
    if (!h) return null;
    c ??= h, d === 0 && (y = h.start);
    let m = h.content, w = h.end;
    if (a !== void 0 && h.start >= a) break;
    if (a !== void 0 && w > a) {
      const P = new TextEncoder().encode(m);
      m = new TextDecoder().decode(P.subarray(0, Math.max(0, a - h.start))), w = a;
    }
    const C = new TextEncoder().encode(m).byteLength;
    if (!C && w <= r) return null;
    if (i.push(m, h.eof || a !== void 0 && w >= a), d += C, w <= r || h.eof || a !== void 0 && w >= a || d >= n) break;
    r = h.end;
  }
  return { parser: i, metadata: c, startOffset: y, loadedBytes: d };
}
function ns(t, e) {
  return e && (t.model = e.model, t.provider = e.provider, t.totalTokens = e.totalTokens, t.totalCost = e.totalCost, t.turns = e.turns, t.metricsExact = !0), t;
}
async function te(t, e, s = {}) {
  const n = await t.workspace.stat(e).catch(() => null);
  if (!n || n.is_dir) return null;
  const a = Math.max(1, s.tailBytes ?? Ye), i = Math.max(1, s.historyBytes ?? Ge), r = s.before ?? es(e, n.size, n.modified || 0, a), c = qe(e, a, i, r?.startOffset || 0), y = W.get(c);
  if (y && y.mtime === (n.modified || 0) && y.size === n.size)
    return W.delete(c), W.set(c, y), y.data;
  const d = r ? Math.min(r.startOffset, n.size) : void 0, h = d === void 0 ? Math.max(0, n.size - a) : Math.max(0, d - i), m = await ss(t, e, h, i, d);
  if (!m) return null;
  let w;
  if (r) {
    const C = ts([...Xt(m.parser.messages), ...Xt(r.messages)]);
    w = {
      ...r,
      messages: C,
      droppedHead: m.startOffset > 0 || m.parser.droppedHead || r.droppedHead,
      startOffset: m.startOffset,
      loadedBytes: m.loadedBytes + r.loadedBytes,
      fileSize: n.size,
      metricsExact: !1
    }, !w.sessionId && m.parser.sessionId && (w.sessionId = m.parser.sessionId), !w.cwd && m.parser.cwd && (w.cwd = m.parser.cwd);
  } else
    w = Xe(m.parser, e, n.size, m.startOffset, m.loadedBytes), !w.sessionId && m.metadata?.sessionId && (w.sessionId = m.metadata.sessionId), !w.cwd && m.metadata?.cwd && (w.cwd = m.metadata.cwd);
  for (ns(w, await Qe(t, e)), W.set(c, { mtime: n.modified || 0, size: n.size, data: w }); W.size > Ze; ) W.delete(W.keys().next().value);
  return w;
}
function os() {
  W.clear();
}
const Gt = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, as = 3e4, is = 3e3, Jt = 600, L = /* @__PURE__ */ new Set();
let O = null, F = Gt, vt = "", yt = null, It = null, at = null, Ht = null, Bt = "", Tt = 0, J = 0, Y = null, Ct = -1, $t = "", et = !1, Z = !1, it = null, tt = -1 / 0, Et = "";
function me(t) {
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
function Zt() {
  if (typeof document < "u" && document.hidden) return !1;
  for (const t of L)
    if (!t.subscriber.visible || t.subscriber.visible()) return !0;
  return !1;
}
function he() {
  for (const t of L)
    if (!t.disposed)
      try {
        t.subscriber.listener?.(F);
      } catch {
      }
}
function zt() {
  yt !== null && (clearTimeout(yt), yt = null);
}
function rs() {
  it !== null && (clearTimeout(it), it = null);
}
function qt() {
  Tt += 1, Ht?.dispose(), Ht = null, Bt = "";
}
function ee() {
  if (zt(), !O || L.size === 0 || Y) return;
  const t = Date.now(), e = F.state === "starting" ? is : F.sessionFile ? as : 0;
  if (!et && e === 0) return;
  const s = et ? Z ? 0 : Math.max(0, tt + Jt - t) : Math.max(0, tt + e - t);
  Zt() && (yt = setTimeout(() => {
    yt = null, q(Z);
  }, s));
}
function ls() {
  const t = O;
  if (!t || L.size === 0) return;
  const e = F.sessionFile, s = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")), n = s > 0 ? e.slice(0, s) : "";
  if (n === Bt || (qt(), !n || typeof t.workspace.watch != "function")) return;
  Bt = n;
  const a = Tt, i = (r) => r.replace(/\\/g, "/");
  try {
    const r = t.workspace.watch(n, (c) => {
      O !== t || L.size === 0 || a !== Tt || c.type === "file_event" && (c.path && i(c.path) !== i(F.sessionFile) || (et = !0, Y && (Z = !0, it === null && Zt() && (it = setTimeout(() => {
        it = null, q(!0);
      }, Jt))), q(!1)));
    });
    Promise.resolve(r).then((c) => {
      if (O !== t || L.size === 0 || a !== Tt) {
        c?.dispose();
        return;
      }
      Ht = c;
    }).catch(() => {
    });
  } catch {
  }
}
function Lt(t) {
  const e = O;
  if (!e || L.size === 0 || t === vt) return;
  J += 1, vt = t, F = {
    ...Gt,
    cwd: e.terminal.activeCwd() || "",
    isRunning: !0,
    state: "starting"
  }, Et = me(F), tt = -1 / 0, qt(), et = !0, Z = !0, he();
  const s = J;
  if ((e.terminal.activePaneId() || "") === t) {
    q(!0);
    return;
  }
  queueMicrotask(() => {
    if (O !== e || L.size === 0 || s !== J) return;
    const a = e.terminal.activePaneId() || t;
    if (a !== vt) {
      Lt(a);
      return;
    }
    q(!0);
  });
}
function q(t = !1) {
  const e = O;
  if (!e || L.size === 0) return Promise.resolve();
  const s = e.terminal.activePaneId() || "";
  if (s !== vt)
    return Lt(s), Y || Promise.resolve();
  if (et = !0, Z ||= t, Y && Ct === J && $t === s) return Y;
  if (!Zt() || !Z && Date.now() - tt < Jt)
    return ee(), Promise.resolve();
  zt();
  const n = { paneId: s, cwd: e.terminal.activeCwd() || "" }, a = J;
  et = !1, Z = !1;
  const i = pe(e, n).then((r) => {
    if (O !== e || L.size === 0 || a !== J) return;
    const c = e.terminal.activePaneId() || "";
    if (c !== n.paneId) {
      Lt(c);
      return;
    }
    tt = Date.now();
    const y = me(r);
    F = r, ls(), y !== Et && (Et = y, he());
  }).catch(() => {
    O === e && a === J && (tt = Date.now());
  }).finally(() => {
    Y === i && (Y = null, Ct = -1, $t = "", ee());
  });
  return Y = i, Ct = a, $t = n.paneId, Promise.resolve();
}
function fe() {
  J += 1, zt(), rs(), It?.dispose(), It = null, qt(), at && typeof document < "u" && document.removeEventListener("visibilitychange", at), at = null, O = null, Y = null, Ct = -1, $t = "", et = !1, Z = !1, F = Gt, vt = "", Et = "", tt = -1 / 0;
}
function ge(t, e) {
  O = t;
  const s = { subscriber: e, disposed: !1 };
  return L.add(s), !It && typeof t.terminal.onDidChangeActivePane == "function" && (It = t.terminal.onDidChangeActivePane((n) => {
    O !== t || L.size === 0 || Lt(n || t.terminal.activePaneId() || "");
  })), typeof document < "u" && !at && (at = () => {
    document.hidden ? zt() : q(!0);
  }, document.addEventListener("visibilitychange", at)), e.listener?.(F), q(!0), {
    dispose() {
      s.disposed || (s.disposed = !0, L.delete(s), L.size === 0 && fe());
    }
  };
}
function Pt() {
  return F;
}
function cs() {
  L.clear(), fe();
}
let ht = null, ot = null;
function us(t) {
  return /^[A-Za-z]:[\\/]/.test(t) || t.includes("\\");
}
function xt(t, ...e) {
  const s = us(t) ? "\\" : "/";
  return [t.replace(/[\\/]+$/, ""), ...e].join(s);
}
async function bt(t) {
  if (ht) return ht;
  if (ot) return ot;
  ot = (async () => {
    try {
      const s = await t.exec.run(["doctor"]);
      if (s.code === 0 && s.stdout.trim())
        return ht = JSON.parse(s.stdout.trim()), ht;
    } catch {
    }
    return null;
  })();
  const e = await ot;
  return ot = null, e;
}
function ds() {
  ht = null, ot = null;
}
const ps = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let ft = [], jt = 0;
const ms = 6e4;
function hs(t, e) {
  const s = `${t} ${e}`.toLowerCase();
  for (const n of ps)
    if (n.match.test(s)) return n.category;
  return "general";
}
function fs(t) {
  const e = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!e) return { name: "", description: "", body: t };
  let s = "", n = "";
  for (const a of e[1].split(/\r?\n/)) {
    const i = a.match(/^name:\s*(.+)$/);
    i && (s = i[1].trim().replace(/^['"]|['"]$/g, ""));
    const r = a.match(/^description:\s*(.+)$/);
    r && (n = r[1].trim().replace(/^['"]|['"]$/g, ""));
  }
  return { name: s, description: n, body: e[2] };
}
async function gs(t) {
  const e = await bt(t), s = [];
  return e?.ompHome ? (s.push({ label: "managed", path: xt(e.ompHome, "managed-skills") }), s.push({ label: "project", path: xt(e.ompHome, "skills") })) : (s.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), s.push({ label: "project", path: "~/.omp/agent/skills" })), e?.home ? s.push({ label: "user", path: xt(e.home, ".agents", "skills") }) : s.push({ label: "user", path: "~/.agents/skills" }), s;
}
async function Ut(t, e = !1) {
  const s = Date.now();
  if (!e && ft.length && s - jt < ms) return ft;
  const n = await gs(t), a = n[0]?.path.includes("\\") ? "\\" : "/", i = /* @__PURE__ */ new Map();
  for (const r of n) {
    let c;
    try {
      c = await t.workspace.readDir(r.path);
    } catch {
      continue;
    }
    for (const y of c.entries) {
      if (!y.is_dir) continue;
      const d = [r.path, y.name, "SKILL.md"].join(a);
      try {
        const h = await t.workspace.readFile(d);
        if (!h.content) continue;
        const { name: m, description: w, body: C } = fs(h.content), P = m || y.name;
        if (i.has(P)) continue;
        i.set(P, {
          id: P,
          name: P,
          description: w || "No description provided.",
          category: hs(P, w),
          source: r.label,
          filePath: d,
          body: C
        });
      } catch {
      }
    }
  }
  return ft = [...i.values()].sort((r, c) => r.name.localeCompare(c.name)), jt = s, ft;
}
function vs(t, e, s = "all") {
  const a = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return t.filter((i) => {
    if (s !== "all" && i.category !== s) return !1;
    if (!a.length) return !0;
    const r = `${i.name} ${i.description}`.toLowerCase();
    return a.every((c) => r.includes(c));
  });
}
function ve(t, e) {
  const s = t.terminal.activePaneId();
  return s ? (t.terminal.send(s, `/skill ${e}
`), t.ui.notify(`Injected skill ${e}`, "info"), !0) : (t.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function ys() {
  ft = [], jt = 0;
}
const _s = 20, se = 500, ws = 750;
function ne(t, e) {
  const n = t.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean), r = `omp-${(n[n.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 32) || "workspace"}`;
  return e ? `${r}-${e}` : r;
}
function ye(t) {
  return [];
}
function bs(t) {
  return t ? `/modelpreset switch ${t.id}
` : "";
}
function gt(t) {
  return `'${t.replace(/'/g, "'\\''")}'`;
}
function Vt(t, e, s, n) {
  if (!n) return;
  let a = 0;
  const i = async () => {
    if (a >= _s) {
      t.ui.notify(`OMP preset ${n.id} was not applied before startup timeout`, "warn");
      return;
    }
    a += 1;
    const r = await pe(t, { paneId: e, cwd: s });
    if (r.isRunning && (r.state === "starting" || r.state === "running")) {
      const c = bs(n);
      c && window.setTimeout(() => {
        t.terminal.send(e, c), t.ui.notify(`OMP preset ${n.id} applied`, "info");
      }, ws);
      return;
    }
    window.setTimeout(() => void i(), se);
  };
  window.setTimeout(() => void i(), se);
}
async function _t(t, e = {}) {
  const s = await bt(t), n = e.cwd || t.terminal.activeCwd() || s?.home || ".", a = e.target || "new-tab", i = ye(e.preset), r = e.preset?.id || rt, c = !!s?.tmux && s?.platform !== "win32", y = ["omp", ...i].map(gt).join(" "), d = `${y}; exec "$SHELL"`;
  if (a === "new-tab") {
    const P = Math.random().toString(36).slice(2, 10), U = ne(n, P), H = c ? ["tmux", "new-session", "-s", U, "-c", n, "sh", "-c", d] : ["omp", ...i], R = await t.terminal.createTerminalTab({
      cwd: n,
      argv: H,
      title: `OMP: ${r}`
    });
    return Vt(t, R, n, e.preset), t.ui.notify(
      c ? `OMP started in tmux session ${U}` : `OMP started with preset ${r}`,
      "info"
    ), R;
  }
  const h = await t.terminal.splitTerminalPane({
    direction: a === "split-h" ? "horizontal" : "vertical",
    cwd: n
  });
  if (!h)
    return t.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const m = h.replace(/[^a-zA-Z0-9_-]+/g, "").slice(0, 8) || Math.random().toString(36).slice(2, 10), w = ne(n, m), C = c ? `tmux new-session -s ${gt(w)} -c ${gt(n)} sh -c ${gt(d)}` : y;
  return t.terminal.send(h, `${C}
`), Vt(t, h, n, e.preset), t.ui.notify(`OMP started in a split pane with preset ${r}`, "info"), h;
}
async function ks(t, e) {
  const s = t.terminal.activePaneId();
  if (!s)
    return t.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const n = t.terminal.activeCwd() || "", a = ["omp", ...ye()].map(gt).join(" ");
  return t.terminal.send(s, `${a}
`), Vt(t, s, n, e), t.ui.notify(`Launching OMP with preset ${e?.id || rt}`, "info"), !0;
}
async function _e(t) {
  const e = await bt(t);
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
const rt = "default";
function Ss(t) {
  if (!t || typeof t != "object" || Array.isArray(t) || !("id" in t) || typeof t.id != "string" || !/^[A-Za-z][A-Za-z0-9_-]*$/.test(t.id) || !("modelRoles" in t) || !t.modelRoles || typeof t.modelRoles != "object" || Array.isArray(t.modelRoles) || !("defaultThinkingLevel" in t) || typeof t.defaultThinkingLevel != "string") return null;
  const e = {};
  for (const [s, n] of Object.entries(t.modelRoles)) {
    if (typeof n != "string") return null;
    e[s] = n;
  }
  return {
    id: t.id,
    label: t.id,
    modelRoles: e,
    defaultThinkingLevel: t.defaultThinkingLevel,
    isDefault: t.id === rt
  };
}
async function At(t) {
  try {
    const e = await t.exec.run(["model-presets"]);
    if (e.code !== 0 || !e.stdout.trim()) return [];
    const s = JSON.parse(e.stdout.trim());
    if (!Array.isArray(s)) return [];
    const n = [];
    for (const a of s) {
      const i = Ss(a);
      i && n.push(i);
    }
    return n.sort((a, i) => a.isDefault !== i.isDefault ? a.isDefault ? -1 : 1 : a.id.localeCompare(i.id));
  } catch {
    return [];
  }
}
function oe(t, e, s) {
  return e.map((n) => ({
    label: n.label,
    detail: `${Object.keys(n.modelRoles).length} model roles · thinking ${n.defaultThinkingLevel}`,
    icon: "zap",
    action: () => {
      _t(t, { preset: n, target: s });
    }
  }));
}
const Ms = { class: "omp-app" }, Ts = { class: "omp-app__bar" }, Cs = { class: "omp-app__brand" }, $s = { class: "omp-app__version" }, Ps = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, xs = ["aria-selected", "onClick"], Is = {
  key: 0,
  class: "omp-app__badge"
}, Es = { class: "omp-app__bar-actions" }, Ls = ["value"], As = { class: "omp-app__body" }, zs = {
  key: 0,
  class: "omp-pane omp-pane--sessions"
}, Os = { class: "omp-sessions" }, Rs = { class: "omp-sessions__head" }, Ns = { class: "omp-field omp-field--search" }, Ds = { class: "omp-toggle" }, Fs = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, Hs = {
  key: 0,
  class: "omp-hint"
}, Bs = {
  key: 1,
  class: "omp-hint"
}, js = ["aria-selected", "onClick"], Us = { class: "omp-session__title" }, Vs = { class: "omp-session__meta" }, Ws = { class: "omp-transcript" }, Ys = { class: "omp-transcript__head" }, Gs = { class: "omp-transcript__meta" }, Js = { class: "omp-tag" }, Zs = { class: "omp-tag" }, qs = { class: "omp-tag omp-tag--cost" }, Ks = { class: "omp-tag" }, Qs = { class: "omp-transcript__tools" }, Xs = { class: "omp-field omp-field--search" }, tn = {
  key: 0,
  class: "omp-banner omp-banner--action"
}, en = ["disabled"], sn = { class: "omp-turns" }, nn = {
  key: 0,
  class: "omp-hint"
}, on = {
  key: 1,
  class: "omp-hint"
}, an = { class: "omp-turn__head" }, rn = { class: "omp-turn__role" }, ln = { class: "omp-turn__time" }, cn = {
  key: 0,
  class: "omp-fold"
}, un = { class: "omp-code" }, dn = {
  key: 1,
  class: "omp-turn__text"
}, pn = {
  key: 2,
  class: "omp-turn__images"
}, mn = ["onClick"], hn = ["src"], fn = { class: "omp-fold__name" }, gn = {
  key: 0,
  class: "omp-fold__intent"
}, vn = { class: "omp-fold__state" }, yn = { class: "omp-code" }, _n = { class: "omp-code" }, wn = {
  key: 1,
  class: "omp-empty"
}, bn = {
  key: 1,
  class: "omp-pane omp-pane--skills"
}, kn = { class: "omp-skills__head" }, Sn = { class: "omp-field omp-field--search omp-field--grow" }, Mn = { class: "omp-chips" }, Tn = ["onClick"], Cn = { class: "omp-skills__body" }, $n = { class: "omp-skills__grid" }, Pn = {
  key: 0,
  class: "omp-hint"
}, xn = {
  key: 1,
  class: "omp-hint"
}, In = ["onClick"], En = { class: "omp-skill__title" }, Ln = { class: "omp-skill__desc" }, An = { class: "omp-skill__tags" }, zn = { class: "omp-chip omp-chip--tiny" }, On = { class: "omp-chip omp-chip--tiny" }, Rn = {
  key: 0,
  class: "omp-skill-detail"
}, Nn = { class: "omp-skill-detail__desc" }, Dn = { class: "omp-code omp-code--tall" }, Fn = {
  key: 2,
  class: "omp-pane omp-pane--profiles"
}, Hn = { class: "omp-profiles__grid" }, Bn = { class: "omp-profile__icon" }, jn = { class: "omp-profile__actions" }, Un = ["onClick"], Vn = ["onClick"], Wn = ["onClick"], Yn = ["src"], Gn = 6 * 1024 * 1024, Mt = 200, Jn = /* @__PURE__ */ Wt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(t) {
    const e = t, s = "1.1.2", n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], a = T("sessions"), i = T(""), r = T([]), c = T(!0), y = T(""), d = T(!0), h = T(""), m = T(null), w = T(!1), C = T(!1), P = T(Mt), U = T(""), H = T(null);
    let R = 0;
    const N = T([]), G = T(!0), lt = T(""), ct = T("all"), A = T(null), K = T([]), st = T(rt), Ot = I(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: r.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: N.value.length },
      { id: "profiles", label: "Model presets", icon: "zap", badge: K.value.length }
    ]), kt = I(() => {
      const b = y.value.trim().toLowerCase();
      return b ? r.value.filter((u) => u.path.toLowerCase().includes(b)) : r.value;
    }), ut = I(() => {
      if (!m.value) return [];
      const b = U.value.trim().toLowerCase();
      return b ? m.value.messages.filter((u) => We(u).includes(b)) : m.value.messages;
    }), St = I(() => {
      const b = ut.value;
      return b.length > P.value ? b.slice(b.length - P.value) : b;
    }), dt = I(() => Math.max(0, ut.value.length - St.value.length)), M = I(() => vs(N.value, lt.value, ct.value)), _ = I(
      () => K.value.find((b) => b.id === st.value) || null
    );
    function B(b) {
      return b === "user" ? "terminal" : b === "assistant" ? "bot" : "code";
    }
    function Q(b) {
      return b === "user" ? "You" : b === "assistant" ? "Agent" : "Tool";
    }
    async function Rt() {
      c.value = !0;
      try {
        if (!i.value) {
          const u = await bt(e.api);
          i.value = u?.ompHome ? xt(u.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let b;
        if (d.value) {
          const u = Pt().sessionFile;
          if (!u) {
            r.value = [], h.value = "", m.value = null;
            return;
          }
          const l = u.replace(/\\/g, "/").split("/");
          b = l[l.length - 2];
        }
        r.value = await je(e.api, i.value, b), r.value.length && !r.value.some((u) => u.path === h.value) && await Kt(r.value[0].path);
      } finally {
        c.value = !1;
      }
    }
    async function Kt(b) {
      const u = ++R;
      h.value = b, P.value = Mt, w.value = !0;
      try {
        const l = await te(e.api, b);
        u === R && h.value === b && (m.value = l);
      } finally {
        u === R && (w.value = !1);
      }
    }
    async function be() {
      const b = m.value, u = R;
      if (!(!b || b.startOffset <= 0 || C.value)) {
        C.value = !0;
        try {
          const l = await te(e.api, b.filePath, {
            historyBytes: Gn,
            before: b
          });
          u === R && m.value === b && h.value === b.filePath && (m.value = l);
        } finally {
          u === R && (C.value = !1);
        }
      }
    }
    async function ke() {
      G.value = !0;
      try {
        N.value = await Ut(e.api), !A.value && N.value.length && (A.value = N.value[0]);
      } finally {
        G.value = !1;
      }
    }
    async function Se() {
      G.value = !0;
      try {
        N.value = await Ut(e.api, !0), !A.value && N.value.length && (A.value = N.value[0]);
      } finally {
        G.value = !1;
      }
    }
    function Me(b) {
      ve(e.api, b);
    }
    async function Nt(b, u) {
      await _t(e.api, { preset: b, target: u });
    }
    async function Te() {
      await _t(e.api, { preset: _.value, target: "new-tab" });
    }
    async function Ce() {
      m.value && await _t(e.api, {
        preset: _.value,
        target: "new-tab",
        cwd: m.value.cwd || void 0
      });
    }
    async function $e() {
      if (!m.value) return;
      const b = m.value.messages.map((u) => `### ${Q(u.role)}

${u.text}
`).join(`
---

`);
      try {
        await navigator.clipboard.writeText(b), e.api.ui.notify("Transcript copied to the clipboard", "info");
      } catch {
        e.api.ui.notify("The browser refused clipboard access", "warn");
      }
    }
    return ue(async () => {
      await Promise.all([
        At(e.api).then((b) => {
          K.value = b;
        }),
        Rt(),
        ke()
      ]);
    }), (b, u) => (g(), v("div", Ms, [
      o("header", Ts, [
        o("div", Cs, [
          k(S, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          u[10] || (u[10] = o("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          o("span", $s, "v" + f(Oe(s)), 1)
        ]),
        o("nav", Ps, [
          (g(!0), v(E, null, D(Ot.value, (l) => (g(), v("button", {
            key: l.id,
            type: "button",
            role: "tab",
            class: z(["omp-app__tab", { "is-active": a.value === l.id }]),
            "aria-selected": a.value === l.id,
            onClick: ($) => a.value = l.id
          }, [
            k(S, {
              name: l.icon,
              size: 14
            }, null, 8, ["name"]),
            o("span", null, f(l.label), 1),
            l.badge ? (g(), v("span", Is, f(l.badge), 1)) : x("", !0)
          ], 10, xs))), 128))
        ]),
        o("div", Es, [
          X(o("select", {
            "onUpdate:modelValue": u[0] || (u[0] = (l) => st.value = l),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch model preset"
          }, [
            (g(!0), v(E, null, D(K.value, (l) => (g(), v("option", {
              key: l.id,
              value: l.id
            }, f(l.label), 9, Ls))), 128))
          ], 512), [
            [de, st.value]
          ]),
          o("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: Te
          }, [
            k(S, {
              name: "play",
              size: 13
            }),
            u[11] || (u[11] = o("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      o("main", As, [
        a.value === "sessions" ? (g(), v("section", zs, [
          o("aside", Os, [
            o("div", Rs, [
              o("div", Ns, [
                k(S, {
                  name: "search",
                  size: 13
                }),
                X(o("input", {
                  "onUpdate:modelValue": u[1] || (u[1] = (l) => y.value = l),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [Dt, y.value]
                ])
              ]),
              o("button", {
                type: "button",
                class: z(["omp-icon-btn", { "is-busy": c.value }]),
                title: "Reload session list",
                onClick: Rt
              }, [
                k(S, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            o("label", Ds, [
              X(o("input", {
                "onUpdate:modelValue": u[2] || (u[2] = (l) => d.value = l),
                type: "checkbox",
                onChange: Rt
              }, null, 544), [
                [Ee, d.value]
              ]),
              u[12] || (u[12] = o("span", null, "This workspace only", -1))
            ]),
            o("div", Fs, [
              c.value ? (g(), v("p", Hs, "Loading sessions...")) : kt.value.length ? x("", !0) : (g(), v("p", Bs, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (g(!0), v(E, null, D(kt.value, (l) => (g(), v("button", {
                key: l.path,
                type: "button",
                role: "option",
                class: z(["omp-session", { "is-active": h.value === l.path }]),
                "aria-selected": h.value === l.path,
                onClick: ($) => Kt(l.path)
              }, [
                o("span", Us, [
                  k(S, {
                    name: "file-text",
                    size: 12
                  }),
                  j(" " + f(l.displayName), 1)
                ]),
                o("span", Vs, [
                  o("span", null, f(l.workspace), 1),
                  o("span", null, f(l.ageLabel), 1)
                ])
              ], 10, js))), 128))
            ])
          ]),
          o("div", Ws, [
            m.value ? (g(), v(E, { key: 0 }, [
              o("header", Ys, [
                o("div", Gs, [
                  o("span", Js, [
                    k(S, {
                      name: "cpu",
                      size: 12
                    }),
                    j(f(m.value.model), 1)
                  ]),
                  o("span", Zs, [
                    k(S, {
                      name: "layers",
                      size: 12
                    }),
                    j(f(m.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  o("span", qs, [
                    k(S, {
                      name: "activity",
                      size: 12
                    }),
                    j(f(m.value.totalCost.toFixed(3)) + " USD" + f(m.value.metricsExact ? "" : " loaded"), 1)
                  ]),
                  o("span", Ks, [
                    k(S, {
                      name: "message-square",
                      size: 12
                    }),
                    j(f(m.value.messages.length) + " entries", 1)
                  ])
                ]),
                o("div", Qs, [
                  o("div", Xs, [
                    k(S, {
                      name: "search",
                      size: 12
                    }),
                    X(o("input", {
                      "onUpdate:modelValue": u[3] || (u[3] = (l) => U.value = l),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [Dt, U.value]
                    ])
                  ]),
                  o("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: $e
                  }, [
                    k(S, {
                      name: "copy",
                      size: 12
                    }),
                    u[13] || (u[13] = o("span", null, "Copy", -1))
                  ]),
                  o("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: Ce
                  }, [
                    k(S, {
                      name: "external-link",
                      size: 12
                    }),
                    u[14] || (u[14] = o("span", null, "Open", -1))
                  ])
                ])
              ]),
              m.value.droppedHead ? (g(), v("div", tn, [
                o("span", null, " Showing the last " + f((m.value.loadedBytes / 1048576).toFixed(1)) + " MB of " + f((m.value.fileSize / 1048576).toFixed(1)) + " MB (" + f(m.value.turns) + " turns" + f(m.value.metricsExact ? "" : " in loaded window") + "). ", 1),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  disabled: C.value,
                  onClick: be
                }, [
                  k(S, {
                    name: "history",
                    size: 12
                  }),
                  o("span", null, f(C.value ? "Loading" : "Load earlier"), 1)
                ], 8, en)
              ])) : x("", !0),
              o("div", sn, [
                w.value ? (g(), v("p", nn, "Reading transcript...")) : ut.value.length ? x("", !0) : (g(), v("p", on, "No turn matches that filter.")),
                dt.value ? (g(), v("button", {
                  key: 2,
                  type: "button",
                  class: "omp-btn omp-btn--wide",
                  onClick: u[4] || (u[4] = (l) => P.value += Mt)
                }, [
                  k(S, {
                    name: "chevron-up",
                    size: 12
                  }),
                  o("span", null, "Show " + f(Math.min(dt.value, Mt)) + " earlier turns (" + f(dt.value) + " hidden)", 1)
                ])) : x("", !0),
                (g(!0), v(E, null, D(St.value, (l) => (g(), v("article", {
                  key: l.id,
                  class: z(["omp-turn", `omp-turn--${l.role}`])
                }, [
                  o("header", an, [
                    o("span", rn, [
                      k(S, {
                        name: B(l.role),
                        size: 13
                      }, null, 8, ["name"]),
                      j(" " + f(Q(l.role)), 1)
                    ]),
                    o("span", ln, f(l.timeLabel), 1)
                  ]),
                  l.thinking ? (g(), v("details", cn, [
                    u[15] || (u[15] = o("summary", null, "Reasoning", -1)),
                    o("pre", un, f(l.thinking), 1)
                  ])) : x("", !0),
                  l.text ? (g(), v("pre", dn, f(l.text), 1)) : x("", !0),
                  l.images.length ? (g(), v("div", pn, [
                    (g(!0), v(E, null, D(l.images, ($, Pe) => (g(), v("button", {
                      key: Pe,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (Fo) => H.value = $
                    }, [
                      o("img", {
                        src: $,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, hn)
                    ], 8, mn))), 128))
                  ])) : x("", !0),
                  (g(!0), v(E, null, D(l.toolCalls || [], ($) => (g(), v("details", {
                    key: $.id,
                    class: z(["omp-fold omp-fold--tool", { "is-error": $.isError }])
                  }, [
                    o("summary", null, [
                      o("span", fn, f($.name), 1),
                      $.intent ? (g(), v("span", gn, f($.intent), 1)) : x("", !0),
                      o("span", vn, f($.isError ? "failed" : "ok"), 1)
                    ]),
                    u[17] || (u[17] = o("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    o("pre", yn, f($.argumentsLabel), 1),
                    $.result ? (g(), v(E, { key: 0 }, [
                      u[16] || (u[16] = o("p", { class: "omp-fold__label" }, "Result", -1)),
                      o("pre", _n, f($.result), 1)
                    ], 64)) : x("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (g(), v("div", wn, [
              k(S, {
                name: "history",
                size: 28
              }),
              u[18] || (u[18] = o("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ])) : x("", !0),
        a.value === "skills" ? (g(), v("section", bn, [
          o("div", kn, [
            o("div", Sn, [
              k(S, {
                name: "search",
                size: 14
              }),
              X(o("input", {
                "onUpdate:modelValue": u[5] || (u[5] = (l) => lt.value = l),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [Dt, lt.value]
              ])
            ]),
            o("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: Se
            }, [
              k(S, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          o("div", Mn, [
            (g(), v(E, null, D(n, (l) => o("button", {
              key: l,
              type: "button",
              class: z(["omp-chip", { "is-active": ct.value === l }]),
              onClick: ($) => ct.value = l
            }, f(l), 11, Tn)), 64))
          ]),
          o("div", Cn, [
            o("div", $n, [
              G.value ? (g(), v("p", Pn, "Indexing skills...")) : M.value.length ? x("", !0) : (g(), v("p", xn, "No skill matches that search.")),
              (g(!0), v(E, null, D(M.value, (l) => (g(), v("button", {
                key: l.id,
                type: "button",
                class: z(["omp-skill", { "is-active": A.value?.id === l.id }]),
                onClick: ($) => A.value = l
              }, [
                o("span", En, [
                  k(S, {
                    name: "book",
                    size: 13
                  }),
                  j(" " + f(l.name), 1)
                ]),
                o("span", Ln, f(l.description), 1),
                o("span", An, [
                  o("span", zn, f(l.category), 1),
                  o("span", On, f(l.source), 1)
                ])
              ], 10, In))), 128))
            ]),
            A.value ? (g(), v("aside", Rn, [
              o("header", null, [
                o("h3", null, f(A.value.name), 1),
                o("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: u[6] || (u[6] = (l) => Me(A.value.name))
                }, [
                  k(S, {
                    name: "terminal",
                    size: 12
                  }),
                  u[19] || (u[19] = o("span", null, "Inject", -1))
                ])
              ]),
              o("p", Nn, f(A.value.description), 1),
              o("pre", Dn, f(A.value.body || "This skill has no body."), 1)
            ])) : x("", !0)
          ])
        ])) : x("", !0),
        a.value === "profiles" ? (g(), v("section", Fn, [
          u[23] || (u[23] = o("header", { class: "omp-profiles__head" }, [
            o("h2", null, "Model presets"),
            o("p", null, [
              j("Loaded from OMP global "),
              o("code", null, "modelPresets"),
              j(". Apply one to a new tab or split pane.")
            ])
          ], -1)),
          o("div", Hn, [
            (g(!0), v(E, null, D(K.value, (l) => (g(), v("article", {
              key: l.id,
              class: z(["omp-profile", { "is-default": l.isDefault }])
            }, [
              o("header", null, [
                o("span", Bn, [
                  k(S, {
                    name: "zap",
                    size: 16
                  })
                ]),
                o("div", null, [
                  o("h3", null, f(l.label), 1),
                  o("code", null, f(Object.keys(l.modelRoles).length) + " model roles · thinking " + f(l.defaultThinkingLevel), 1)
                ])
              ]),
              o("div", jn, [
                o("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: ($) => Nt(l, "new-tab")
                }, [
                  k(S, {
                    name: "play",
                    size: 12
                  }),
                  u[20] || (u[20] = o("span", null, "New tab", -1))
                ], 8, Un),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Nt(l, "split-v")
                }, [
                  k(S, {
                    name: "split-vertical",
                    size: 12
                  }),
                  u[21] || (u[21] = o("span", null, "Split right", -1))
                ], 8, Vn),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Nt(l, "split-h")
                }, [
                  k(S, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  u[22] || (u[22] = o("span", null, "Split down", -1))
                ], 8, Wn)
              ])
            ], 2))), 128))
          ])
        ])) : x("", !0)
      ]),
      H.value ? (g(), v("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: u[9] || (u[9] = (l) => H.value = null)
      }, [
        o("button", {
          type: "button",
          class: "omp-lightbox__close",
          "aria-label": "Close image",
          onClick: u[7] || (u[7] = (l) => H.value = null)
        }, [
          k(S, {
            name: "x",
            size: 18
          })
        ]),
        o("img", {
          src: H.value,
          alt: "Attachment preview",
          onClick: u[8] || (u[8] = nt(() => {
          }, ["stop"]))
        }, null, 8, Yn)
      ])) : x("", !0)
    ]));
  }
}), Zn = /* @__PURE__ */ Yt(Jn, [["__scopeId", "data-v-1955e927"]]), qn = { class: "omp-hud__bar" }, Kn = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, Qn = ["title"], Xn = {
  key: 0,
  class: "omp-hud__peek"
}, to = ["title", "aria-expanded"], eo = { class: "omp-hud__body" }, so = { class: "omp-hud__row" }, no = ["title"], oo = { class: "omp-hud__chip-text" }, ao = ["title"], io = { class: "omp-hud__chip-text" }, ro = { class: "omp-hud__row" }, lo = ["title"], co = { class: "omp-hud__chip-text" }, uo = ["title"], po = { class: "omp-hud__chip-text" }, mo = { class: "omp-hud__status" }, ho = { class: "omp-hud__turns" }, fo = { class: "omp-hud__actions" }, go = ["disabled", "title"], vo = {
  key: 1,
  class: "omp-hud__placeholder"
}, yo = { class: "omp-hud__placeholder-title" }, _o = { class: "omp-hud__placeholder-note" }, wo = { class: "omp-hud__placeholder" }, bo = { class: "omp-hud__launch" }, ko = ["disabled"], So = ["value"], Mo = ["disabled"], ae = "dinotty-omp.preset", ie = "dinotty-omp.presets", To = 12e3, Co = /* @__PURE__ */ Wt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(t) {
    const e = t, s = T(!1), n = T(!1), a = T(!0), i = T(!0), r = T([]), c = T(rt), d = T({ cwd: "", sessionFile: "", isRunning: !1, state: "inactive", summary: null }), h = T(!1);
    let m = 0, w, C = !1;
    const P = [], U = I(
      () => r.value.find((M) => M.id === c.value) || null
    ), H = I(() => {
      const _ = (d.value.summary?.model || "").split("/").pop() || "omp";
      return _.length > 18 ? `${_.slice(0, 17)}...` : _;
    }), R = I(() => {
      const M = d.value.summary?.totalTokens || 0;
      return M >= 1e6 ? `${(M / 1e6).toFixed(1)}M tok` : M >= 1e3 ? `${Math.round(M / 1e3)}k tok` : `${M} tok`;
    }), N = I(() => {
      if (d.value.state === "inactive") return "Inactive";
      if (d.value.state === "starting") return "Starting";
      switch (d.value.summary?.status) {
        case "running_tool":
          return "Running a tool";
        case "thinking":
          return "Thinking";
        case "error":
          return "Last tool failed";
        default:
          return "Waiting for you";
      }
    }), G = I(() => d.value.state === "inactive" ? "is-inactive" : d.value.state === "starting" ? "is-starting" : `is-${d.value.summary?.status || "idle"}`), lt = I(() => {
      const M = d.value.cwd;
      if (!M) return "this pane";
      const _ = M.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return _[_.length - 1] || M;
    }), ct = I(() => d.value.state === "inactive" ? "Inactive" : d.value.state === "starting" ? "Starting" : `${H.value} · ${d.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function A() {
      try {
        const M = localStorage.getItem(ie), _ = M ? JSON.parse(M) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    function K(M) {
      try {
        localStorage.setItem(ie, JSON.stringify(M));
      } catch {
      }
    }
    function st() {
      try {
        localStorage.setItem(ae, c.value);
      } catch {
      }
    }
    function Ot(M) {
      if (!C) {
        if (h.value = !0, M.state === "inactive" && n.value && Date.now() < m) {
          d.value = { ...M, state: "starting" };
          return;
        }
        (M.state !== "inactive" || Date.now() >= m) && (n.value = !1), d.value = M;
      }
    }
    function kt() {
      e.api.open();
    }
    async function ut() {
      await _e(e.api);
    }
    async function St() {
      await _t(e.api, { preset: U.value, target: "split-v" });
    }
    async function dt() {
      !await ks(e.api, U.value) || C || (st(), n.value = !0, d.value = { ...d.value, state: "starting", summary: null }, m = Date.now() + To, w !== void 0 && window.clearTimeout(w), w = window.setTimeout(() => {
        w = void 0, C || q(!0);
      }, 600));
    }
    return ue(async () => {
      try {
        const Q = localStorage.getItem(ae);
        Q && (c.value = Q);
      } catch {
      }
      const M = A();
      M.length && (r.value = M, a.value = !1), P.push(
        ge(e.api, {
          listener: Ot,
          visible: () => !s.value
        })
      );
      const _ = await bt(e.api);
      if (C) return;
      i.value = _ ? _.tmux : !0;
      const B = await At(e.api);
      C || (r.value = B, K(r.value), r.value.some((Q) => Q.id === c.value) || (c.value = rt), a.value = !1);
    }), xe(() => {
      C = !0, w !== void 0 && (window.clearTimeout(w), w = void 0);
      for (const M of P)
        try {
          M.dispose();
        } catch {
        }
      P.length = 0;
    }), (M, _) => (g(), v("section", {
      class: z(["omp-hud", [`is-${d.value.state}`, { "is-collapsed": s.value, "is-dragging": t.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      o("header", qn, [
        o("div", Kn, [
          k(S, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          _[6] || (_[6] = o("span", { class: "omp-hud__name" }, "OMP", -1)),
          o("span", {
            class: z(["omp-hud__beacon", G.value]),
            title: N.value
          }, null, 10, Qn),
          s.value ? (g(), v("span", Xn, f(ct.value), 1)) : x("", !0)
        ]),
        o("div", {
          class: "omp-hud__tools",
          onPointerdown: _[3] || (_[3] = nt(() => {
          }, ["stop"])),
          onMousedown: _[4] || (_[4] = nt(() => {
          }, ["stop"]))
        }, [
          o("button", {
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
            k(S, {
              name: s.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, to)
        ], 32)
      ]),
      X(o("div", eo, [
        d.value.state === "running" && d.value.summary ? (g(), v(E, { key: 0 }, [
          o("div", so, [
            o("span", {
              class: "omp-hud__chip",
              title: `Model: ${d.value.summary.model}`
            }, [
              k(S, {
                name: "cpu",
                size: 12
              }),
              o("span", oo, f(H.value), 1)
            ], 8, no),
            o("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${d.value.summary.thinkingLevel}`
            }, [
              k(S, {
                name: "zap",
                size: 12
              }),
              o("span", io, f(d.value.summary.thinkingLevel), 1)
            ], 8, ao)
          ]),
          o("div", ro, [
            o("span", {
              class: "omp-hud__chip",
              title: `${d.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              k(S, {
                name: "layers",
                size: 12
              }),
              o("span", co, f(R.value), 1)
            ], 8, lo),
            o("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${d.value.summary.totalCost.toFixed(4)} USD`
            }, [
              k(S, {
                name: "activity",
                size: 12
              }),
              o("span", po, f(d.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, uo)
          ]),
          o("p", mo, [
            o("span", {
              class: z(["omp-hud__status-dot", G.value])
            }, null, 2),
            j(" " + f(N.value) + " ", 1),
            o("span", ho, f(d.value.summary.turns) + " turns", 1)
          ]),
          o("div", fo, [
            o("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: kt
            }, [
              k(S, {
                name: "history",
                size: 14
              }),
              _[7] || (_[7] = o("span", null, "Explorer", -1))
            ]),
            o("button", {
              type: "button",
              class: "omp-hud__action",
              disabled: !i.value,
              title: i.value ? "Enter tmux copy-mode to scroll history" : "tmux was not found on this host",
              onClick: ut
            }, [
              k(S, {
                name: "terminal",
                size: 14
              }),
              _[8] || (_[8] = o("span", null, "Scroll", -1))
            ], 8, go),
            o("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: St
            }, [
              k(S, {
                name: "split-vertical",
                size: 14
              }),
              _[9] || (_[9] = o("span", null, "Split", -1))
            ])
          ])
        ], 64)) : d.value.state === "starting" || !h.value ? (g(), v("div", vo, [
          _[10] || (_[10] = o("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          o("p", yo, f(h.value ? "Starting OMP" : "Reading session"), 1),
          o("p", _o, "Waiting for the first turn in " + f(lt.value), 1)
        ])) : (g(), v(E, { key: 2 }, [
          o("div", wo, [
            k(S, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            _[11] || (_[11] = o("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            _[12] || (_[12] = o("p", { class: "omp-hud__placeholder-note" }, "Pick a model preset and start one in this pane.", -1))
          ]),
          o("div", bo, [
            _[13] || (_[13] = o("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Model preset", -1)),
            X(o("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": _[5] || (_[5] = (B) => c.value = B),
              class: "omp-hud__select",
              disabled: a.value,
              onChange: st
            }, [
              (g(!0), v(E, null, D(r.value, (B) => (g(), v("option", {
                key: B.id,
                value: B.id
              }, f(B.label), 9, So))), 128))
            ], 40, ko), [
              [de, c.value]
            ]),
            o("button", {
              type: "button",
              class: "omp-hud__launch-btn",
              disabled: a.value || n.value,
              title: "Run OMP in the active pane",
              onClick: dt
            }, [
              k(S, {
                name: "play",
                size: 12
              }),
              o("span", null, f(n.value ? "Starting" : "Launch"), 1)
            ], 8, Mo)
          ])
        ], 64))
      ], 512), [
        [Le, !s.value]
      ])
    ], 2));
  }
}), $o = /* @__PURE__ */ Yt(Co, [["__scopeId", "data-v-30d2ca9a"]]);
function Po(t) {
  const e = ge(t, {});
  return {
    series: {
      id: "dinotty-omp:session",
      label: "OMP session cost",
      scale: "auto",
      statusIcon: "Bot",
      defaultVisible: !0,
      current: () => {
        const n = Pt().summary;
        return n ? n.totalCost : null;
      },
      statusText: () => {
        const n = Pt();
        if (n.state === "inactive") return null;
        const a = n.summary;
        if (n.state === "starting" || !a) return "OMP: starting";
        const i = a.model.split("/").pop() || "omp";
        return `OMP ${i.length > 16 ? `${i.slice(0, 15)}...` : i} ${a.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        const n = Pt();
        if (n.state === "inactive")
          return [{ label: "State", value: "No OMP session in this tab" }];
        const a = n.summary;
        return a ? [
          { label: "Model", value: a.model },
          { label: "Provider", value: a.provider },
          { label: "Thinking", value: a.thinkingLevel },
          { label: "Status", value: a.status.replace("_", " ") },
          { label: "Context tokens", value: a.totalTokens.toLocaleString() },
          { label: "Assistant turns", value: String(a.turns) },
          { label: "Session cost", value: `${a.totalCost.toFixed(4)} USD` },
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
const xo = 244, pt = 12, Io = 560;
function Eo() {
  return typeof window > "u" || typeof window.innerWidth != "number" ? 1280 : Number.isFinite(window.innerWidth) && window.innerWidth > 0 ? window.innerWidth : 1280;
}
function Lo() {
  const t = Eo();
  return t < Io ? { x: pt, y: pt } : { x: Math.max(pt, t - xo - pt), y: pt };
}
const we = "dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud", re = "dinotty-omp:overlay-pos-migrated:v1", Ao = 44, zo = 120, le = 244, ce = 12;
function Oo() {
  try {
    const t = localStorage.getItem(we);
    if (!t) return null;
    const e = JSON.parse(t);
    return typeof e?.x != "number" || typeof e?.y != "number" || !Number.isFinite(e.x) || !Number.isFinite(e.y) ? null : { x: e.x, y: e.y };
  } catch {
    return null;
  }
}
function Ro(t, e, s) {
  return t.x < 0 || t.y < 0 || t.x > e || t.y > s ? !0 : t.y >= Ao ? !1 : t.x >= e - le - ce && t.x <= e - le + ce || t.x > e - zo;
}
function No(t) {
  if (typeof window > "u") return;
  const e = window.innerWidth, s = window.innerHeight;
  if (!Number.isFinite(e) || !Number.isFinite(s) || e <= 0 || s <= 0 || e >= 560) return;
  try {
    if (localStorage.getItem(re)) return;
  } catch {
    return;
  }
  const n = Oo();
  if (!(!n || !Ro(n, e, s)))
    try {
      localStorage.setItem(we, JSON.stringify(t)), localStorage.setItem(re, "1");
    } catch {
    }
}
let wt = [];
function mt(t) {
  wt.push(() => t.dispose());
}
function Ho(t) {
  wt = [], mt(
    t.commands.register("omp.open-session-viewer", () => {
      t.open();
    })
  ), mt(
    t.commands.register("omp.tmux-copymode", () => {
      _e(t);
    })
  ), mt(
    t.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a model preset in a new tab",
      items: async () => oe(t, await At(t), "new-tab")
    })
  ), mt(
    t.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a model preset in a split pane",
      items: async () => oe(t, await At(t), "split-v")
    })
  ), mt(
    t.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await Ut(t)).map((a) => ({
        label: a.name,
        detail: a.description,
        icon: "book",
        action: () => {
          ve(t, a.name);
        }
      }))
    })
  );
  const e = Po(t);
  wt.push(() => e.dispose());
  const s = Lo();
  return No(s), {
    component: Zn,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: $o,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: s
      }
    ],
    monitor: { series: [e.series] },
    dispose: Do
  };
}
function Do() {
  for (const t of wt)
    try {
      t();
    } catch {
    }
  wt = [], os(), cs(), ys(), ds();
}
export {
  Ho as activate,
  Do as deactivate
};
