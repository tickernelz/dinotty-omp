const p = window.__DINOTTY_VUE__;
if (!p)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const T = p.ref;
p.reactive;
const I = p.computed;
p.watch;
const pe = p.onMounted;
p.onUnmounted;
const Le = p.onBeforeUnmount;
p.nextTick;
p.h;
const Gt = p.defineComponent;
p.getCurrentInstance;
const f = p.toDisplayString, R = p.normalizeClass;
p.normalizeStyle;
const g = p.openBlock, y = p.createElementBlock, o = p.createElementVNode, ze = p.createBlock, k = p.createVNode, E = p.createCommentVNode, j = p.createTextVNode;
p.withCtx;
const X = p.withDirectives, st = p.withModifiers;
p.withKeys;
const Ht = p.vModelText, me = p.vModelSelect, Oe = p.vModelCheckbox;
p.vModelRadio;
const Re = p.vShow, Ne = p.mergeProps, F = p.renderList;
p.renderSlot;
p.resolveComponent;
p.resolveDirective;
const De = p.resolveDynamicComponent;
p.resolveTransitionHooks;
p.setBlockTracking;
p.useSlots;
p.useAttrs;
p.isRef;
const Fe = p.unref;
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
const A = p.Fragment;
p.Static;
p.Text;
p.Comment;
const te = {
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
}, He = ["width", "height"], Be = /* @__PURE__ */ Gt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(t) {
    const e = t, s = I(() => e.size), n = I(() => e.class), a = I(() => te[e.name] || te.info);
    return (i, r) => (g(), y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: s.value,
      height: s.value,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: R(["omp-svg-icon", n.value]),
      "aria-hidden": "true"
    }, [
      (g(!0), y(A, null, F(a.value, (c, v) => (g(), ze(De(c.tag), Ne({ key: v }, { ref_for: !0 }, c.attrs), null, 16))), 128))
    ], 10, He));
  }
}), Jt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, a] of e)
    s[n] = a;
  return s;
}, S = /* @__PURE__ */ Jt(Be, [["__scopeId", "data-v-35ecedfe"]]), V = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
};
function je(t) {
  return !(!t || typeof t != "object" || !("model" in t) || typeof t.model != "string" || !("provider" in t) || typeof t.provider != "string" || !("thinkingLevel" in t) || typeof t.thinkingLevel != "string" || !("status" in t) || !["idle", "thinking", "running_tool", "error"].includes(String(t.status)) || !("totalTokens" in t) || typeof t.totalTokens != "number" || !Number.isSafeInteger(t.totalTokens) || t.totalTokens < 0 || !("turns" in t) || typeof t.turns != "number" || !Number.isSafeInteger(t.turns) || t.turns < 0 || !("totalCost" in t) || typeof t.totalCost != "number" || !Number.isFinite(t.totalCost) || t.totalCost < 0);
}
async function he(t, e) {
  const s = e?.paneId ?? t.terminal.activePaneId() ?? "", n = e?.cwd ?? t.terminal.activeCwd() ?? "";
  try {
    const a = await t.exec.run(["pane", s, n]);
    if (a.code !== 0 || !a.stdout.trim()) return V;
    const i = JSON.parse(a.stdout.trim());
    return !i || typeof i != "object" || !("cwd" in i) || typeof i.cwd != "string" || !("sessionFile" in i) || typeof i.sessionFile != "string" || !("isRunning" in i) || typeof i.isRunning != "boolean" || !("state" in i) || i.state !== "inactive" && i.state !== "starting" && i.state !== "running" || i.state === "inactive" != !i.isRunning || !("summary" in i) || i.summary !== null && !je(i.summary) ? V : {
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
function Ve(t) {
  const e = t.replace(/\\/g, "/").split("/").pop() || t, s = e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return s ? `${s[1]} ${s[2]}:${s[3]}:${s[4]}` : e.replace(/\.jsonl$/, "");
}
function Ue(t) {
  const e = t.replace(/\\/g, "/").split("/"), s = e[e.length - 2] || "";
  return s ? s.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
function Ye(t, e = Date.now()) {
  if (!t) return "unknown";
  const s = e - t, n = Math.round(s / 6e4);
  if (n < 1) return "just now";
  if (n < 60) return `${n}m ago`;
  const a = Math.round(n / 60);
  return a < 24 ? `${a}h ago` : `${Math.round(a / 24)}d ago`;
}
async function We(t, e, s) {
  const n = e.includes("\\") ? "\\" : "/", a = [];
  if (s)
    a.push([e, s].join(n));
  else
    try {
      const c = await t.workspace.readDir(e);
      for (const v of c.entries)
        v.is_dir && v.name.startsWith("-") && a.push([e, v.name].join(n));
    } catch {
      return [];
    }
  const i = Date.now(), r = [];
  for (const c of a)
    try {
      const v = await t.workspace.readDir(c);
      for (const u of v.entries) {
        if (u.is_dir || !u.name.endsWith(".jsonl") || u.name.startsWith("__") || !/^\d{4}-\d{2}-\d{2}T/.test(u.name)) continue;
        const h = [c, u.name].join(n);
        let m = 0;
        try {
          m = (await t.workspace.stat(h)).modified || 0;
        } catch {
        }
        r.push({
          path: h,
          name: u.name,
          modified: m,
          displayName: Ve(h),
          workspace: Ue(h),
          ageLabel: Ye(m, i)
        });
      }
    } catch {
    }
  return r.sort((c, v) => v.modified - c.modified || v.name.localeCompare(c.name)), r;
}
class Ge {
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
      const c = [], v = n.content;
      if (Array.isArray(v))
        for (const u of v) {
          const h = u;
          if (h?.type === "text") i += `${h.text || ""}
`;
          else if (h?.type === "thinking") r += `${h.thinking || h.text || ""}
`;
          else if (h?.type === "toolCall") {
            const m = h.arguments ?? {}, _ = {
              id: h.id || `call-${this.messages.length}-${c.length}`,
              name: h.name || "tool",
              arguments: m,
              argumentsLabel: Je(m),
              intent: h.intent
            };
            c.push(_), this.pending.set(_.id, _);
          }
        }
      this.messages.push({
        id: s.id || `msg-${a}-${this.messages.length}`,
        role: "assistant",
        text: i.trim(),
        images: [],
        timestamp: a,
        timeLabel: Bt(a),
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
        for (const v of c) {
          const u = v;
          u?.type === "text" ? i += `${u.text || ""}
` : u?.type === "image" && (u.url ? r.push(u.url) : u.data && r.push(`data:${u.mediaType || "image/png"};base64,${u.data}`));
        }
      else typeof c == "string" && (i = c);
      this.messages.push({
        id: s.id || `msg-${a}-${this.messages.length}`,
        role: "user",
        text: i.trim(),
        images: r,
        timestamp: a,
        timeLabel: Bt(a),
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "toolResult") {
      let i = "";
      const r = n.content;
      if (Array.isArray(r))
        for (const u of r) {
          const h = u;
          h?.type === "text" && (i += `${h.text || ""}
`);
        }
      else typeof r == "string" && (i = r);
      const c = n.toolCallId, v = c ? this.pending.get(c) : void 0;
      if (v && c) {
        v.result = i.trim(), v.isError = !!n.isError, this.pending.delete(c);
        for (const u of this.messages)
          u.toolCalls?.includes(v) && (u.searchText = "");
      } else
        this.messages.push({
          id: s.id || `msg-${a}-${this.messages.length}`,
          role: "toolResult",
          text: i.trim(),
          images: [],
          timestamp: a,
          timeLabel: Bt(a),
          toolCallId: c,
          isError: !!n.isError,
          searchText: ""
        }), this.trim();
    }
  }
}
function Bt(t) {
  if (!t) return "";
  const e = new Date(t);
  return `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
}
function Je(t) {
  if (typeof t == "string") return t;
  try {
    return JSON.stringify(t, null, 2);
  } catch {
    return String(t);
  }
}
function Ke(t) {
  const e = [t.text];
  if (t.thinking && e.push(t.thinking), t.toolCalls)
    for (const s of t.toolCalls)
      e.push(s.name), s.intent && e.push(s.intent), s.result && e.push(s.result);
  return t.searchText = e.join(" ").toLowerCase(), t.searchText;
}
const Ze = 2 * 1024 * 1024, qe = 6 * 1024 * 1024, Qe = 1024 * 1024, Xe = 6, U = /* @__PURE__ */ new Map();
function ts(t, e, s, n = 0) {
  return `${t}\0${e}\0${s}\0${n}`;
}
async function es(t, e, s, n) {
  try {
    const a = await t.exec.run(["chunk", e, String(s), String(n)]);
    if (a.code !== 0 || !a.stdout.trim()) return null;
    const i = JSON.parse(a.stdout.trim());
    return i.error || typeof i != "object" || i === null || typeof i.start != "number" || typeof i.end != "number" || typeof i.size != "number" || typeof i.eof != "boolean" || typeof i.content != "string" ? null : i;
  } catch {
    return null;
  }
}
async function ss(t, e) {
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
function ns(t, e, s, n, a) {
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
function ee(t) {
  return t.map((e) => ({
    ...e,
    toolCalls: e.toolCalls?.map((s) => ({ ...s }))
  }));
}
function os(t) {
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
function as(t, e, s, n) {
  let a = null;
  for (const i of U.values())
    i.data.filePath === t && i.size === e && i.mtime === s && i.data.startOffset > 0 && i.data.loadedBytes < n && (!a || i.data.loadedBytes > a.loadedBytes) && (a = i.data);
  return a;
}
async function is(t, e, s, n, a) {
  const i = new Ge({ keepMessages: Number.MAX_SAFE_INTEGER });
  let r = s, c = null, v = s, u = 0;
  for (; ; ) {
    const h = await es(t, e, r, Qe);
    if (!h) return null;
    c ??= h, u === 0 && (v = h.start);
    let m = h.content, _ = h.end;
    if (a !== void 0 && h.start >= a) break;
    if (a !== void 0 && _ > a) {
      const P = new TextEncoder().encode(m);
      m = new TextDecoder().decode(P.subarray(0, Math.max(0, a - h.start))), _ = a;
    }
    const C = new TextEncoder().encode(m).byteLength;
    if (!C && _ <= r) return null;
    if (i.push(m, h.eof || a !== void 0 && _ >= a), u += C, _ <= r || h.eof || a !== void 0 && _ >= a || u >= n) break;
    r = h.end;
  }
  return { parser: i, metadata: c, startOffset: v, loadedBytes: u };
}
function rs(t, e) {
  return e && (t.model = e.model, t.provider = e.provider, t.totalTokens = e.totalTokens, t.totalCost = e.totalCost, t.turns = e.turns, t.metricsExact = !0), t;
}
async function se(t, e, s = {}) {
  const n = await t.workspace.stat(e).catch(() => null);
  if (!n || n.is_dir) return null;
  const a = Math.max(1, s.tailBytes ?? Ze), i = Math.max(1, s.historyBytes ?? qe), r = s.before ?? as(e, n.size, n.modified || 0, a), c = ts(e, a, i, r?.startOffset || 0), v = U.get(c);
  if (v && v.mtime === (n.modified || 0) && v.size === n.size)
    return U.delete(c), U.set(c, v), v.data;
  const u = r ? Math.min(r.startOffset, n.size) : void 0, h = u === void 0 ? Math.max(0, n.size - a) : Math.max(0, u - i), m = await is(t, e, h, i, u);
  if (!m) return null;
  let _;
  if (r) {
    const C = os([...ee(m.parser.messages), ...ee(r.messages)]);
    _ = {
      ...r,
      messages: C,
      droppedHead: m.startOffset > 0 || m.parser.droppedHead || r.droppedHead,
      startOffset: m.startOffset,
      loadedBytes: m.loadedBytes + r.loadedBytes,
      fileSize: n.size,
      metricsExact: !1
    }, !_.sessionId && m.parser.sessionId && (_.sessionId = m.parser.sessionId), !_.cwd && m.parser.cwd && (_.cwd = m.parser.cwd);
  } else
    _ = ns(m.parser, e, n.size, m.startOffset, m.loadedBytes), !_.sessionId && m.metadata?.sessionId && (_.sessionId = m.metadata.sessionId), !_.cwd && m.metadata?.cwd && (_.cwd = m.metadata.cwd);
  for (rs(_, await ss(t, e)), U.set(c, { mtime: n.modified || 0, size: n.size, data: _ }); U.size > Xe; ) U.delete(U.keys().next().value);
  return _;
}
function ls() {
  U.clear();
}
const Kt = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, cs = 250, us = 3e4, ds = 2500, ps = 3e3, ms = 3e3, Zt = 600, x = /* @__PURE__ */ new Set();
let L = null, N = Kt, ot = "", yt = null, _t = null, At = null, at = null, jt = null, Vt = "", $t = 0, J = 0, Y = null, Pt = -1, Et = "", rt = !1, K = !1, it = null, tt = -1 / 0, Lt = "";
function fe(t) {
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
function Ot() {
  if (typeof document < "u" && document.hidden) return !1;
  for (const t of x)
    if (!t.subscriber.visible || t.subscriber.visible()) return !0;
  return !1;
}
function ge() {
  for (const t of x)
    if (!t.disposed)
      try {
        t.subscriber.listener?.(N);
      } catch {
      }
}
function Rt() {
  yt !== null && (clearTimeout(yt), yt = null);
}
function hs() {
  it !== null && (clearTimeout(it), it = null);
}
function ve() {
  _t !== null && (clearTimeout(_t), _t = null);
}
function ye() {
  ve(), !(!L || x.size === 0) && (_t = setTimeout(() => {
    if (_t = null, L && x.size > 0 && Ot()) {
      const t = L.terminal.activePaneId() || "";
      t !== ot && bt(t);
    }
    ye();
  }, cs));
}
function qt() {
  $t += 1, jt?.dispose(), jt = null, Vt = "";
}
function ne() {
  if (Rt(), !L || x.size === 0 || Y) return;
  const t = Date.now(), e = N.summary?.status, s = N.state === "starting" ? ms : e === "thinking" || e === "running_tool" ? ds : N.sessionFile ? us : ps, n = rt ? K ? 0 : Math.max(0, tt + Zt - t) : Math.max(0, tt + s - t);
  Ot() && (yt = setTimeout(() => {
    yt = null, Z(K);
  }, n));
}
function fs() {
  const t = L;
  if (!t || x.size === 0) return;
  const e = N.sessionFile, s = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")), n = s > 0 ? e.slice(0, s) : "";
  if (n === Vt || (qt(), !n || typeof t.workspace.watch != "function")) return;
  Vt = n;
  const a = $t, i = (r) => r.replace(/\\/g, "/");
  try {
    const r = t.workspace.watch(n, (c) => {
      L !== t || x.size === 0 || a !== $t || c.type === "file_event" && (c.path && i(c.path) !== i(N.sessionFile) || (rt = !0, Y && (K = !0, it === null && Ot() && (it = setTimeout(() => {
        it = null, Z(!0);
      }, Zt))), Z(!1)));
    });
    Promise.resolve(r).then((c) => {
      if (L !== t || x.size === 0 || a !== $t) {
        c?.dispose();
        return;
      }
      jt = c;
    }).catch(() => {
    });
  } catch {
  }
}
function bt(t) {
  const e = L;
  if (!e || x.size === 0 || t === ot) return;
  J += 1, ot = t, N = {
    ...Kt,
    cwd: e.terminal.activeCwd() || "",
    isRunning: !0,
    state: "starting"
  }, Lt = fe(N), tt = -1 / 0, qt(), rt = !0, K = !0, ge();
  const s = J;
  if ((e.terminal.activePaneId() || "") === t) {
    Z(!0);
    return;
  }
  queueMicrotask(() => {
    if (L !== e || x.size === 0 || s !== J) return;
    const a = e.terminal.activePaneId() || t;
    if (a !== ot) {
      bt(a);
      return;
    }
    Z(!0);
  });
}
function Z(t = !1) {
  const e = L;
  if (!e || x.size === 0) return Promise.resolve();
  const s = e.terminal.activePaneId() || "";
  if (s !== ot)
    return bt(s), Y || Promise.resolve();
  if (rt = !0, K ||= t, Y && Pt === J && Et === s) return Y;
  if (!Ot() || !K && Date.now() - tt < Zt)
    return ne(), Promise.resolve();
  Rt();
  const n = { paneId: s, cwd: e.terminal.activeCwd() || "" }, a = J;
  rt = !1, K = !1;
  const i = he(e, n).then((r) => {
    if (L !== e || x.size === 0 || a !== J) return;
    const c = e.terminal.activePaneId() || "";
    if (c !== n.paneId) {
      bt(c);
      return;
    }
    tt = Date.now();
    const v = fe(r);
    N = r, fs(), v !== Lt && (Lt = v, ge());
  }).catch(() => {
    L === e && a === J && (tt = Date.now());
  }).finally(() => {
    Y === i && (Y = null, Pt = -1, Et = "", ne());
  });
  return Y = i, Pt = a, Et = n.paneId, Promise.resolve();
}
function _e() {
  J += 1, Rt(), hs(), ve(), At?.dispose(), At = null, qt(), at && typeof document < "u" && document.removeEventListener("visibilitychange", at), at = null, L = null, Y = null, Pt = -1, Et = "", rt = !1, K = !1, N = Kt, ot = "", Lt = "", tt = -1 / 0;
}
function we(t, e) {
  L = t;
  const s = { subscriber: e, disposed: !1 };
  return x.add(s), !At && typeof t.terminal.onDidChangeActivePane == "function" && (At = t.terminal.onDidChangeActivePane((n) => {
    L !== t || x.size === 0 || bt(n || t.terminal.activePaneId() || "");
  })), typeof document < "u" && !at && (at = () => {
    document.hidden ? Rt() : Z(!0);
  }, document.addEventListener("visibilitychange", at)), ye(), e.listener?.(N), Z(!0), {
    dispose() {
      s.disposed || (s.disposed = !0, x.delete(s), x.size === 0 && _e());
    }
  };
}
function It() {
  return N;
}
function gs() {
  x.clear(), _e();
}
let ft = null, nt = null;
function vs(t) {
  return /^[A-Za-z]:[\\/]/.test(t) || t.includes("\\");
}
function xt(t, ...e) {
  const s = vs(t) ? "\\" : "/";
  return [t.replace(/[\\/]+$/, ""), ...e].join(s);
}
async function St(t) {
  if (ft) return ft;
  if (nt) return nt;
  nt = (async () => {
    try {
      const s = await t.exec.run(["doctor"]);
      if (s.code === 0 && s.stdout.trim())
        return ft = JSON.parse(s.stdout.trim()), ft;
    } catch {
    }
    return null;
  })();
  const e = await nt;
  return nt = null, e;
}
function ys() {
  ft = null, nt = null;
}
const _s = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let gt = [], Ut = 0;
const ws = 6e4;
function bs(t, e) {
  const s = `${t} ${e}`.toLowerCase();
  for (const n of _s)
    if (n.match.test(s)) return n.category;
  return "general";
}
function ks(t) {
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
async function Ss(t) {
  const e = await St(t), s = [];
  return e?.ompHome ? (s.push({ label: "managed", path: xt(e.ompHome, "managed-skills") }), s.push({ label: "project", path: xt(e.ompHome, "skills") })) : (s.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), s.push({ label: "project", path: "~/.omp/agent/skills" })), e?.home ? s.push({ label: "user", path: xt(e.home, ".agents", "skills") }) : s.push({ label: "user", path: "~/.agents/skills" }), s;
}
async function Yt(t, e = !1) {
  const s = Date.now();
  if (!e && gt.length && s - Ut < ws) return gt;
  const n = await Ss(t), a = n[0]?.path.includes("\\") ? "\\" : "/", i = /* @__PURE__ */ new Map();
  for (const r of n) {
    let c;
    try {
      c = await t.workspace.readDir(r.path);
    } catch {
      continue;
    }
    for (const v of c.entries) {
      if (!v.is_dir) continue;
      const u = [r.path, v.name, "SKILL.md"].join(a);
      try {
        const h = await t.workspace.readFile(u);
        if (!h.content) continue;
        const { name: m, description: _, body: C } = ks(h.content), P = m || v.name;
        if (i.has(P)) continue;
        i.set(P, {
          id: P,
          name: P,
          description: _ || "No description provided.",
          category: bs(P, _),
          source: r.label,
          filePath: u,
          body: C
        });
      } catch {
      }
    }
  }
  return gt = [...i.values()].sort((r, c) => r.name.localeCompare(c.name)), Ut = s, gt;
}
function Ms(t, e, s = "all") {
  const a = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return t.filter((i) => {
    if (s !== "all" && i.category !== s) return !1;
    if (!a.length) return !0;
    const r = `${i.name} ${i.description}`.toLowerCase();
    return a.every((c) => r.includes(c));
  });
}
function be(t, e) {
  const s = t.terminal.activePaneId();
  return s ? (t.terminal.send(s, `/skill ${e}
`), t.ui.notify(`Injected skill ${e}`, "info"), !0) : (t.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function Ts() {
  gt = [], Ut = 0;
}
const Cs = 20, oe = 500, $s = 750;
function ae(t, e) {
  const n = t.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean), r = `omp-${(n[n.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 32) || "workspace"}`;
  return e ? `${r}-${e}` : r;
}
function ke(t) {
  return [];
}
function Ps(t) {
  return t ? `/modelpreset switch ${t.id}
` : "";
}
function vt(t) {
  return `'${t.replace(/'/g, "'\\''")}'`;
}
async function Qt(t, e) {
  try {
    const s = await t.exec.run(["pane-client-pids", e]);
    if (s.code !== 0 || !s.stdout.trim()) return [];
    const n = JSON.parse(s.stdout.trim());
    return Array.isArray(n) ? n.filter((a) => Number.isSafeInteger(a) && a > 0) : [];
  } catch {
    return [];
  }
}
function Wt(t, e, s, n, a = []) {
  if (!n) return;
  const i = new Set(a);
  let r = 0;
  const c = async () => {
    if (r >= Cs) {
      t.ui.notify(`OMP preset ${n.id} was not applied before startup timeout`, "warn");
      return;
    }
    r += 1;
    const [v, u] = await Promise.all([
      he(t, { paneId: e, cwd: s }),
      Qt(t, e)
    ]), h = u.some((_) => !i.has(_));
    if (v.isRunning && (v.state === "starting" || v.state === "running") && h) {
      const _ = Ps(n);
      _ && window.setTimeout(() => {
        t.terminal.send(e, _), t.ui.notify(`OMP preset ${n.id} applied`, "info");
      }, $s);
      return;
    }
    window.setTimeout(() => void c(), oe);
  };
  window.setTimeout(() => void c(), oe);
}
async function wt(t, e = {}) {
  const s = await St(t), n = e.cwd || t.terminal.activeCwd() || s?.home || ".", a = e.target || "new-tab", i = ke(e.preset), r = e.preset?.id || lt, c = !!s?.tmux && s?.platform !== "win32", v = ["omp", ...i].map(vt).join(" "), u = `${v}; exec "$SHELL"`;
  if (a === "new-tab") {
    const W = Math.random().toString(36).slice(2, 10), D = ae(n, W), H = c ? ["tmux", "new-session", "-s", D, "-c", n, "sh", "-c", u] : ["omp", ...i], z = await t.terminal.createTerminalTab({
      cwd: n,
      argv: H,
      title: `OMP: ${r}`
    });
    return Wt(t, z, n, e.preset, []), t.ui.notify(
      c ? `OMP started in tmux session ${D}` : `OMP started with preset ${r}`,
      "info"
    ), z;
  }
  const h = await t.terminal.splitTerminalPane({
    direction: a === "split-h" ? "horizontal" : "vertical",
    cwd: n
  });
  if (!h)
    return t.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const m = await Qt(t, h), _ = h.replace(/[^a-zA-Z0-9_-]+/g, "").slice(0, 8) || Math.random().toString(36).slice(2, 10), C = ae(n, _), P = c ? `tmux new-session -s ${vt(C)} -c ${vt(n)} sh -c ${vt(u)}` : v;
  return t.terminal.send(h, `${P}
`), Wt(t, h, n, e.preset, m), t.ui.notify(`OMP started in a split pane with preset ${r}`, "info"), h;
}
async function Es(t, e) {
  const s = t.terminal.activePaneId();
  if (!s)
    return t.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const n = t.terminal.activeCwd() || "", a = await Qt(t, s), i = ["omp", ...ke()].map(vt).join(" ");
  return t.terminal.send(s, `${i}
`), Wt(t, s, n, e, a), t.ui.notify(`Launching OMP with preset ${e?.id || lt}`, "info"), !0;
}
async function Se(t) {
  const e = await St(t);
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
const lt = "default";
function Is(t) {
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
    isDefault: t.id === lt
  };
}
async function zt(t) {
  try {
    const e = await t.exec.run(["model-presets"]);
    if (e.code !== 0 || !e.stdout.trim()) return [];
    const s = JSON.parse(e.stdout.trim());
    if (!Array.isArray(s)) return [];
    const n = [];
    for (const a of s) {
      const i = Is(a);
      i && n.push(i);
    }
    return n.sort((a, i) => a.isDefault !== i.isDefault ? a.isDefault ? -1 : 1 : a.id.localeCompare(i.id));
  } catch {
    return [];
  }
}
function ie(t, e, s) {
  return e.map((n) => ({
    label: n.label,
    detail: `${Object.keys(n.modelRoles).length} model roles · thinking ${n.defaultThinkingLevel}`,
    icon: "zap",
    action: () => {
      wt(t, { preset: n, target: s });
    }
  }));
}
const xs = { class: "omp-app" }, As = { class: "omp-app__bar" }, Ls = { class: "omp-app__brand" }, zs = { class: "omp-app__version" }, Os = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, Rs = ["aria-selected", "onClick"], Ns = {
  key: 0,
  class: "omp-app__badge"
}, Ds = { class: "omp-app__bar-actions" }, Fs = ["value"], Hs = { class: "omp-app__body" }, Bs = {
  key: 0,
  class: "omp-pane omp-pane--sessions"
}, js = { class: "omp-sessions" }, Vs = { class: "omp-sessions__head" }, Us = { class: "omp-field omp-field--search" }, Ys = { class: "omp-toggle" }, Ws = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, Gs = {
  key: 0,
  class: "omp-hint"
}, Js = {
  key: 1,
  class: "omp-hint"
}, Ks = ["aria-selected", "onClick"], Zs = { class: "omp-session__title" }, qs = { class: "omp-session__meta" }, Qs = { class: "omp-transcript" }, Xs = { class: "omp-transcript__head" }, tn = { class: "omp-transcript__meta" }, en = { class: "omp-tag" }, sn = { class: "omp-tag" }, nn = { class: "omp-tag omp-tag--cost" }, on = { class: "omp-tag" }, an = { class: "omp-transcript__tools" }, rn = { class: "omp-field omp-field--search" }, ln = {
  key: 0,
  class: "omp-banner omp-banner--action"
}, cn = ["disabled"], un = { class: "omp-turns" }, dn = {
  key: 0,
  class: "omp-hint"
}, pn = {
  key: 1,
  class: "omp-hint"
}, mn = { class: "omp-turn__head" }, hn = { class: "omp-turn__role" }, fn = { class: "omp-turn__time" }, gn = {
  key: 0,
  class: "omp-fold"
}, vn = { class: "omp-code" }, yn = {
  key: 1,
  class: "omp-turn__text"
}, _n = {
  key: 2,
  class: "omp-turn__images"
}, wn = ["onClick"], bn = ["src"], kn = { class: "omp-fold__name" }, Sn = {
  key: 0,
  class: "omp-fold__intent"
}, Mn = { class: "omp-fold__state" }, Tn = { class: "omp-code" }, Cn = { class: "omp-code" }, $n = {
  key: 1,
  class: "omp-empty"
}, Pn = {
  key: 1,
  class: "omp-pane omp-pane--skills"
}, En = { class: "omp-skills__head" }, In = { class: "omp-field omp-field--search omp-field--grow" }, xn = { class: "omp-chips" }, An = ["onClick"], Ln = { class: "omp-skills__body" }, zn = { class: "omp-skills__grid" }, On = {
  key: 0,
  class: "omp-hint"
}, Rn = {
  key: 1,
  class: "omp-hint"
}, Nn = ["onClick"], Dn = { class: "omp-skill__title" }, Fn = { class: "omp-skill__desc" }, Hn = { class: "omp-skill__tags" }, Bn = { class: "omp-chip omp-chip--tiny" }, jn = { class: "omp-chip omp-chip--tiny" }, Vn = {
  key: 0,
  class: "omp-skill-detail"
}, Un = { class: "omp-skill-detail__desc" }, Yn = { class: "omp-code omp-code--tall" }, Wn = {
  key: 2,
  class: "omp-pane omp-pane--profiles"
}, Gn = { class: "omp-profiles__grid" }, Jn = { class: "omp-profile__icon" }, Kn = { class: "omp-profile__actions" }, Zn = ["onClick"], qn = ["onClick"], Qn = ["onClick"], Xn = ["src"], to = 6 * 1024 * 1024, Ct = 200, eo = /* @__PURE__ */ Gt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(t) {
    const e = t, s = "1.1.2", n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], a = T("sessions"), i = T(""), r = T([]), c = T(!0), v = T(""), u = T(!0), h = T(""), m = T(null), _ = T(!1), C = T(!1), P = T(Ct), W = T(""), D = T(null);
    let H = 0;
    const z = T([]), G = T(!0), ct = T(""), ut = T("all"), O = T(null), q = T([]), et = T(lt), Nt = I(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: r.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: z.value.length },
      { id: "profiles", label: "Model presets", icon: "zap", badge: q.value.length }
    ]), Mt = I(() => {
      const b = v.value.trim().toLowerCase();
      return b ? r.value.filter((d) => d.path.toLowerCase().includes(b)) : r.value;
    }), dt = I(() => {
      if (!m.value) return [];
      const b = W.value.trim().toLowerCase();
      return b ? m.value.messages.filter((d) => Ke(d).includes(b)) : m.value.messages;
    }), Tt = I(() => {
      const b = dt.value;
      return b.length > P.value ? b.slice(b.length - P.value) : b;
    }), pt = I(() => Math.max(0, dt.value.length - Tt.value.length)), M = I(() => Ms(z.value, ct.value, ut.value)), w = I(
      () => q.value.find((b) => b.id === et.value) || null
    );
    function B(b) {
      return b === "user" ? "terminal" : b === "assistant" ? "bot" : "code";
    }
    function Q(b) {
      return b === "user" ? "You" : b === "assistant" ? "Agent" : "Tool";
    }
    async function Dt() {
      c.value = !0;
      try {
        if (!i.value) {
          const d = await St(e.api);
          i.value = d?.ompHome ? xt(d.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let b;
        if (u.value) {
          const d = It().sessionFile;
          if (!d) {
            r.value = [], h.value = "", m.value = null;
            return;
          }
          const l = d.replace(/\\/g, "/").split("/");
          b = l[l.length - 2];
        }
        r.value = await We(e.api, i.value, b), r.value.length && !r.value.some((d) => d.path === h.value) && await Xt(r.value[0].path);
      } finally {
        c.value = !1;
      }
    }
    async function Xt(b) {
      const d = ++H;
      h.value = b, P.value = Ct, _.value = !0;
      try {
        const l = await se(e.api, b);
        d === H && h.value === b && (m.value = l);
      } finally {
        d === H && (_.value = !1);
      }
    }
    async function Te() {
      const b = m.value, d = H;
      if (!(!b || b.startOffset <= 0 || C.value)) {
        C.value = !0;
        try {
          const l = await se(e.api, b.filePath, {
            historyBytes: to,
            before: b
          });
          d === H && m.value === b && h.value === b.filePath && (m.value = l);
        } finally {
          d === H && (C.value = !1);
        }
      }
    }
    async function Ce() {
      G.value = !0;
      try {
        z.value = await Yt(e.api), !O.value && z.value.length && (O.value = z.value[0]);
      } finally {
        G.value = !1;
      }
    }
    async function $e() {
      G.value = !0;
      try {
        z.value = await Yt(e.api, !0), !O.value && z.value.length && (O.value = z.value[0]);
      } finally {
        G.value = !1;
      }
    }
    function Pe(b) {
      be(e.api, b);
    }
    async function Ft(b, d) {
      await wt(e.api, { preset: b, target: d });
    }
    async function Ee() {
      await wt(e.api, { preset: w.value, target: "new-tab" });
    }
    async function Ie() {
      m.value && await wt(e.api, {
        preset: w.value,
        target: "new-tab",
        cwd: m.value.cwd || void 0
      });
    }
    async function xe() {
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
    return pe(async () => {
      await Promise.all([
        zt(e.api).then((b) => {
          q.value = b;
        }),
        Dt(),
        Ce()
      ]);
    }), (b, d) => (g(), y("div", xs, [
      o("header", As, [
        o("div", Ls, [
          k(S, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          d[10] || (d[10] = o("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          o("span", zs, "v" + f(Fe(s)), 1)
        ]),
        o("nav", Os, [
          (g(!0), y(A, null, F(Nt.value, (l) => (g(), y("button", {
            key: l.id,
            type: "button",
            role: "tab",
            class: R(["omp-app__tab", { "is-active": a.value === l.id }]),
            "aria-selected": a.value === l.id,
            onClick: ($) => a.value = l.id
          }, [
            k(S, {
              name: l.icon,
              size: 14
            }, null, 8, ["name"]),
            o("span", null, f(l.label), 1),
            l.badge ? (g(), y("span", Ns, f(l.badge), 1)) : E("", !0)
          ], 10, Rs))), 128))
        ]),
        o("div", Ds, [
          X(o("select", {
            "onUpdate:modelValue": d[0] || (d[0] = (l) => et.value = l),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch model preset"
          }, [
            (g(!0), y(A, null, F(q.value, (l) => (g(), y("option", {
              key: l.id,
              value: l.id
            }, f(l.label), 9, Fs))), 128))
          ], 512), [
            [me, et.value]
          ]),
          o("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: Ee
          }, [
            k(S, {
              name: "play",
              size: 13
            }),
            d[11] || (d[11] = o("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      o("main", Hs, [
        a.value === "sessions" ? (g(), y("section", Bs, [
          o("aside", js, [
            o("div", Vs, [
              o("div", Us, [
                k(S, {
                  name: "search",
                  size: 13
                }),
                X(o("input", {
                  "onUpdate:modelValue": d[1] || (d[1] = (l) => v.value = l),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [Ht, v.value]
                ])
              ]),
              o("button", {
                type: "button",
                class: R(["omp-icon-btn", { "is-busy": c.value }]),
                title: "Reload session list",
                onClick: Dt
              }, [
                k(S, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            o("label", Ys, [
              X(o("input", {
                "onUpdate:modelValue": d[2] || (d[2] = (l) => u.value = l),
                type: "checkbox",
                onChange: Dt
              }, null, 544), [
                [Oe, u.value]
              ]),
              d[12] || (d[12] = o("span", null, "This workspace only", -1))
            ]),
            o("div", Ws, [
              c.value ? (g(), y("p", Gs, "Loading sessions...")) : Mt.value.length ? E("", !0) : (g(), y("p", Js, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (g(!0), y(A, null, F(Mt.value, (l) => (g(), y("button", {
                key: l.path,
                type: "button",
                role: "option",
                class: R(["omp-session", { "is-active": h.value === l.path }]),
                "aria-selected": h.value === l.path,
                onClick: ($) => Xt(l.path)
              }, [
                o("span", Zs, [
                  k(S, {
                    name: "file-text",
                    size: 12
                  }),
                  j(" " + f(l.displayName), 1)
                ]),
                o("span", qs, [
                  o("span", null, f(l.workspace), 1),
                  o("span", null, f(l.ageLabel), 1)
                ])
              ], 10, Ks))), 128))
            ])
          ]),
          o("div", Qs, [
            m.value ? (g(), y(A, { key: 0 }, [
              o("header", Xs, [
                o("div", tn, [
                  o("span", en, [
                    k(S, {
                      name: "cpu",
                      size: 12
                    }),
                    j(f(m.value.model), 1)
                  ]),
                  o("span", sn, [
                    k(S, {
                      name: "layers",
                      size: 12
                    }),
                    j(f(m.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  o("span", nn, [
                    k(S, {
                      name: "activity",
                      size: 12
                    }),
                    j(f(m.value.totalCost.toFixed(3)) + " USD" + f(m.value.metricsExact ? "" : " loaded"), 1)
                  ]),
                  o("span", on, [
                    k(S, {
                      name: "message-square",
                      size: 12
                    }),
                    j(f(m.value.messages.length) + " entries", 1)
                  ])
                ]),
                o("div", an, [
                  o("div", rn, [
                    k(S, {
                      name: "search",
                      size: 12
                    }),
                    X(o("input", {
                      "onUpdate:modelValue": d[3] || (d[3] = (l) => W.value = l),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [Ht, W.value]
                    ])
                  ]),
                  o("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: xe
                  }, [
                    k(S, {
                      name: "copy",
                      size: 12
                    }),
                    d[13] || (d[13] = o("span", null, "Copy", -1))
                  ]),
                  o("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: Ie
                  }, [
                    k(S, {
                      name: "external-link",
                      size: 12
                    }),
                    d[14] || (d[14] = o("span", null, "Open", -1))
                  ])
                ])
              ]),
              m.value.droppedHead ? (g(), y("div", ln, [
                o("span", null, " Showing the last " + f((m.value.loadedBytes / 1048576).toFixed(1)) + " MB of " + f((m.value.fileSize / 1048576).toFixed(1)) + " MB (" + f(m.value.turns) + " turns" + f(m.value.metricsExact ? "" : " in loaded window") + "). ", 1),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  disabled: C.value,
                  onClick: Te
                }, [
                  k(S, {
                    name: "history",
                    size: 12
                  }),
                  o("span", null, f(C.value ? "Loading" : "Load earlier"), 1)
                ], 8, cn)
              ])) : E("", !0),
              o("div", un, [
                _.value ? (g(), y("p", dn, "Reading transcript...")) : dt.value.length ? E("", !0) : (g(), y("p", pn, "No turn matches that filter.")),
                pt.value ? (g(), y("button", {
                  key: 2,
                  type: "button",
                  class: "omp-btn omp-btn--wide",
                  onClick: d[4] || (d[4] = (l) => P.value += Ct)
                }, [
                  k(S, {
                    name: "chevron-up",
                    size: 12
                  }),
                  o("span", null, "Show " + f(Math.min(pt.value, Ct)) + " earlier turns (" + f(pt.value) + " hidden)", 1)
                ])) : E("", !0),
                (g(!0), y(A, null, F(Tt.value, (l) => (g(), y("article", {
                  key: l.id,
                  class: R(["omp-turn", `omp-turn--${l.role}`])
                }, [
                  o("header", mn, [
                    o("span", hn, [
                      k(S, {
                        name: B(l.role),
                        size: 13
                      }, null, 8, ["name"]),
                      j(" " + f(Q(l.role)), 1)
                    ]),
                    o("span", fn, f(l.timeLabel), 1)
                  ]),
                  l.thinking ? (g(), y("details", gn, [
                    d[15] || (d[15] = o("summary", null, "Reasoning", -1)),
                    o("pre", vn, f(l.thinking), 1)
                  ])) : E("", !0),
                  l.text ? (g(), y("pre", yn, f(l.text), 1)) : E("", !0),
                  l.images.length ? (g(), y("div", _n, [
                    (g(!0), y(A, null, F(l.images, ($, Ae) => (g(), y("button", {
                      key: Ae,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (Wo) => D.value = $
                    }, [
                      o("img", {
                        src: $,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, bn)
                    ], 8, wn))), 128))
                  ])) : E("", !0),
                  (g(!0), y(A, null, F(l.toolCalls || [], ($) => (g(), y("details", {
                    key: $.id,
                    class: R(["omp-fold omp-fold--tool", { "is-error": $.isError }])
                  }, [
                    o("summary", null, [
                      o("span", kn, f($.name), 1),
                      $.intent ? (g(), y("span", Sn, f($.intent), 1)) : E("", !0),
                      o("span", Mn, f($.isError ? "failed" : "ok"), 1)
                    ]),
                    d[17] || (d[17] = o("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    o("pre", Tn, f($.argumentsLabel), 1),
                    $.result ? (g(), y(A, { key: 0 }, [
                      d[16] || (d[16] = o("p", { class: "omp-fold__label" }, "Result", -1)),
                      o("pre", Cn, f($.result), 1)
                    ], 64)) : E("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (g(), y("div", $n, [
              k(S, {
                name: "history",
                size: 28
              }),
              d[18] || (d[18] = o("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ])) : E("", !0),
        a.value === "skills" ? (g(), y("section", Pn, [
          o("div", En, [
            o("div", In, [
              k(S, {
                name: "search",
                size: 14
              }),
              X(o("input", {
                "onUpdate:modelValue": d[5] || (d[5] = (l) => ct.value = l),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [Ht, ct.value]
              ])
            ]),
            o("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: $e
            }, [
              k(S, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          o("div", xn, [
            (g(), y(A, null, F(n, (l) => o("button", {
              key: l,
              type: "button",
              class: R(["omp-chip", { "is-active": ut.value === l }]),
              onClick: ($) => ut.value = l
            }, f(l), 11, An)), 64))
          ]),
          o("div", Ln, [
            o("div", zn, [
              G.value ? (g(), y("p", On, "Indexing skills...")) : M.value.length ? E("", !0) : (g(), y("p", Rn, "No skill matches that search.")),
              (g(!0), y(A, null, F(M.value, (l) => (g(), y("button", {
                key: l.id,
                type: "button",
                class: R(["omp-skill", { "is-active": O.value?.id === l.id }]),
                onClick: ($) => O.value = l
              }, [
                o("span", Dn, [
                  k(S, {
                    name: "book",
                    size: 13
                  }),
                  j(" " + f(l.name), 1)
                ]),
                o("span", Fn, f(l.description), 1),
                o("span", Hn, [
                  o("span", Bn, f(l.category), 1),
                  o("span", jn, f(l.source), 1)
                ])
              ], 10, Nn))), 128))
            ]),
            O.value ? (g(), y("aside", Vn, [
              o("header", null, [
                o("h3", null, f(O.value.name), 1),
                o("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: d[6] || (d[6] = (l) => Pe(O.value.name))
                }, [
                  k(S, {
                    name: "terminal",
                    size: 12
                  }),
                  d[19] || (d[19] = o("span", null, "Inject", -1))
                ])
              ]),
              o("p", Un, f(O.value.description), 1),
              o("pre", Yn, f(O.value.body || "This skill has no body."), 1)
            ])) : E("", !0)
          ])
        ])) : E("", !0),
        a.value === "profiles" ? (g(), y("section", Wn, [
          d[23] || (d[23] = o("header", { class: "omp-profiles__head" }, [
            o("h2", null, "Model presets"),
            o("p", null, [
              j("Loaded from OMP global "),
              o("code", null, "modelPresets"),
              j(". Apply one to a new tab or split pane.")
            ])
          ], -1)),
          o("div", Gn, [
            (g(!0), y(A, null, F(q.value, (l) => (g(), y("article", {
              key: l.id,
              class: R(["omp-profile", { "is-default": l.isDefault }])
            }, [
              o("header", null, [
                o("span", Jn, [
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
              o("div", Kn, [
                o("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: ($) => Ft(l, "new-tab")
                }, [
                  k(S, {
                    name: "play",
                    size: 12
                  }),
                  d[20] || (d[20] = o("span", null, "New tab", -1))
                ], 8, Zn),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Ft(l, "split-v")
                }, [
                  k(S, {
                    name: "split-vertical",
                    size: 12
                  }),
                  d[21] || (d[21] = o("span", null, "Split right", -1))
                ], 8, qn),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Ft(l, "split-h")
                }, [
                  k(S, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  d[22] || (d[22] = o("span", null, "Split down", -1))
                ], 8, Qn)
              ])
            ], 2))), 128))
          ])
        ])) : E("", !0)
      ]),
      D.value ? (g(), y("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: d[9] || (d[9] = (l) => D.value = null)
      }, [
        o("button", {
          type: "button",
          class: "omp-lightbox__close",
          "aria-label": "Close image",
          onClick: d[7] || (d[7] = (l) => D.value = null)
        }, [
          k(S, {
            name: "x",
            size: 18
          })
        ]),
        o("img", {
          src: D.value,
          alt: "Attachment preview",
          onClick: d[8] || (d[8] = st(() => {
          }, ["stop"]))
        }, null, 8, Xn)
      ])) : E("", !0)
    ]));
  }
}), so = /* @__PURE__ */ Jt(eo, [["__scopeId", "data-v-1955e927"]]), no = { class: "omp-hud__bar" }, oo = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, ao = ["title"], io = {
  key: 0,
  class: "omp-hud__peek"
}, ro = ["title", "aria-expanded"], lo = { class: "omp-hud__body" }, co = { class: "omp-hud__row" }, uo = ["title"], po = { class: "omp-hud__chip-text" }, mo = ["title"], ho = { class: "omp-hud__chip-text" }, fo = { class: "omp-hud__row" }, go = ["title"], vo = { class: "omp-hud__chip-text" }, yo = ["title"], _o = { class: "omp-hud__chip-text" }, wo = { class: "omp-hud__status" }, bo = { class: "omp-hud__turns" }, ko = { class: "omp-hud__actions" }, So = ["disabled", "title"], Mo = {
  key: 1,
  class: "omp-hud__placeholder"
}, To = { class: "omp-hud__placeholder-title" }, Co = { class: "omp-hud__placeholder-note" }, $o = { class: "omp-hud__placeholder" }, Po = { class: "omp-hud__launch" }, Eo = ["disabled"], Io = ["value"], xo = ["disabled"], re = "dinotty-omp.preset", le = "dinotty-omp.presets", Ao = 12e3, Lo = /* @__PURE__ */ Gt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(t) {
    const e = t, s = T(!1), n = T(!1), a = T(!0), i = T(!0), r = T([]), c = T(lt), u = T({ cwd: "", sessionFile: "", isRunning: !1, state: "inactive", summary: null }), h = T(!1);
    let m = 0, _, C = !1;
    const P = [], W = I(
      () => r.value.find((M) => M.id === c.value) || null
    ), D = I(() => {
      const w = (u.value.summary?.model || "").split("/").pop() || "omp";
      return w.length > 18 ? `${w.slice(0, 17)}...` : w;
    }), H = I(() => {
      const M = u.value.summary?.totalTokens || 0;
      return M >= 1e6 ? `${(M / 1e6).toFixed(1)}M tok` : M >= 1e3 ? `${Math.round(M / 1e3)}k tok` : `${M} tok`;
    }), z = I(() => {
      if (u.value.state === "inactive") return "Inactive";
      if (u.value.state === "starting") return "Starting";
      switch (u.value.summary?.status) {
        case "running_tool":
          return "Running a tool";
        case "thinking":
          return "Thinking";
        case "error":
          return "Last tool failed";
        default:
          return "Waiting for you";
      }
    }), G = I(() => u.value.state === "inactive" ? "is-inactive" : u.value.state === "starting" ? "is-starting" : `is-${u.value.summary?.status || "idle"}`), ct = I(() => {
      const M = u.value.cwd;
      if (!M) return "this pane";
      const w = M.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return w[w.length - 1] || M;
    }), ut = I(() => u.value.state === "inactive" ? "Inactive" : u.value.state === "starting" ? "Starting" : `${D.value} · ${u.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function O() {
      try {
        const M = localStorage.getItem(le), w = M ? JSON.parse(M) : [];
        return Array.isArray(w) ? w : [];
      } catch {
        return [];
      }
    }
    function q(M) {
      try {
        localStorage.setItem(le, JSON.stringify(M));
      } catch {
      }
    }
    function et() {
      try {
        localStorage.setItem(re, c.value);
      } catch {
      }
    }
    function Nt(M) {
      if (!C) {
        if (h.value = !0, M.state === "inactive" && n.value && Date.now() < m) {
          u.value = { ...M, state: "starting" };
          return;
        }
        (M.state !== "inactive" || Date.now() >= m) && (n.value = !1), u.value = M;
      }
    }
    function Mt() {
      e.api.open();
    }
    async function dt() {
      await Se(e.api);
    }
    async function Tt() {
      await wt(e.api, { preset: W.value, target: "split-v" });
    }
    async function pt() {
      !await Es(e.api, W.value) || C || (et(), n.value = !0, u.value = { ...u.value, state: "starting", summary: null }, m = Date.now() + Ao, _ !== void 0 && window.clearTimeout(_), _ = window.setTimeout(() => {
        _ = void 0, C || Z(!0);
      }, 600));
    }
    return pe(async () => {
      try {
        const Q = localStorage.getItem(re);
        Q && (c.value = Q);
      } catch {
      }
      const M = O();
      M.length && (r.value = M, a.value = !1), P.push(
        we(e.api, {
          listener: Nt,
          visible: () => !s.value
        })
      );
      const w = await St(e.api);
      if (C) return;
      i.value = w ? w.tmux : !0;
      const B = await zt(e.api);
      C || (r.value = B, q(r.value), r.value.some((Q) => Q.id === c.value) || (c.value = lt), a.value = !1);
    }), Le(() => {
      C = !0, _ !== void 0 && (window.clearTimeout(_), _ = void 0);
      for (const M of P)
        try {
          M.dispose();
        } catch {
        }
      P.length = 0;
    }), (M, w) => (g(), y("section", {
      class: R(["omp-hud", [`is-${u.value.state}`, { "is-collapsed": s.value, "is-dragging": t.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      o("header", no, [
        o("div", oo, [
          k(S, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          w[6] || (w[6] = o("span", { class: "omp-hud__name" }, "OMP", -1)),
          o("span", {
            class: R(["omp-hud__beacon", G.value]),
            title: z.value
          }, null, 10, ao),
          s.value ? (g(), y("span", io, f(ut.value), 1)) : E("", !0)
        ]),
        o("div", {
          class: "omp-hud__tools",
          onPointerdown: w[3] || (w[3] = st(() => {
          }, ["stop"])),
          onMousedown: w[4] || (w[4] = st(() => {
          }, ["stop"]))
        }, [
          o("button", {
            type: "button",
            class: "omp-hud__icon",
            title: s.value ? "Expand panel" : "Collapse panel",
            "aria-expanded": !s.value,
            onPointerdown: w[0] || (w[0] = st(() => {
            }, ["stop"])),
            onMousedown: w[1] || (w[1] = st(() => {
            }, ["stop"])),
            onClick: w[2] || (w[2] = st((B) => s.value = !s.value, ["stop"]))
          }, [
            k(S, {
              name: s.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, ro)
        ], 32)
      ]),
      X(o("div", lo, [
        u.value.state === "running" && u.value.summary ? (g(), y(A, { key: 0 }, [
          o("div", co, [
            o("span", {
              class: "omp-hud__chip",
              title: `Model: ${u.value.summary.model}`
            }, [
              k(S, {
                name: "cpu",
                size: 12
              }),
              o("span", po, f(D.value), 1)
            ], 8, uo),
            o("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${u.value.summary.thinkingLevel}`
            }, [
              k(S, {
                name: "zap",
                size: 12
              }),
              o("span", ho, f(u.value.summary.thinkingLevel), 1)
            ], 8, mo)
          ]),
          o("div", fo, [
            o("span", {
              class: "omp-hud__chip",
              title: `${u.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              k(S, {
                name: "layers",
                size: 12
              }),
              o("span", vo, f(H.value), 1)
            ], 8, go),
            o("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${u.value.summary.totalCost.toFixed(4)} USD`
            }, [
              k(S, {
                name: "activity",
                size: 12
              }),
              o("span", _o, f(u.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, yo)
          ]),
          o("p", wo, [
            o("span", {
              class: R(["omp-hud__status-dot", G.value])
            }, null, 2),
            j(" " + f(z.value) + " ", 1),
            o("span", bo, f(u.value.summary.turns) + " turns", 1)
          ]),
          o("div", ko, [
            o("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: Mt
            }, [
              k(S, {
                name: "history",
                size: 14
              }),
              w[7] || (w[7] = o("span", null, "Explorer", -1))
            ]),
            o("button", {
              type: "button",
              class: "omp-hud__action",
              disabled: !i.value,
              title: i.value ? "Enter tmux copy-mode to scroll history" : "tmux was not found on this host",
              onClick: dt
            }, [
              k(S, {
                name: "terminal",
                size: 14
              }),
              w[8] || (w[8] = o("span", null, "Scroll", -1))
            ], 8, So),
            o("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: Tt
            }, [
              k(S, {
                name: "split-vertical",
                size: 14
              }),
              w[9] || (w[9] = o("span", null, "Split", -1))
            ])
          ])
        ], 64)) : u.value.state === "starting" || !h.value ? (g(), y("div", Mo, [
          w[10] || (w[10] = o("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          o("p", To, f(h.value ? "Starting OMP" : "Reading session"), 1),
          o("p", Co, "Waiting for the first turn in " + f(ct.value), 1)
        ])) : (g(), y(A, { key: 2 }, [
          o("div", $o, [
            k(S, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            w[11] || (w[11] = o("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            w[12] || (w[12] = o("p", { class: "omp-hud__placeholder-note" }, "Pick a model preset and start one in this pane.", -1))
          ]),
          o("div", Po, [
            w[13] || (w[13] = o("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Model preset", -1)),
            X(o("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": w[5] || (w[5] = (B) => c.value = B),
              class: "omp-hud__select",
              disabled: a.value,
              onChange: et
            }, [
              (g(!0), y(A, null, F(r.value, (B) => (g(), y("option", {
                key: B.id,
                value: B.id
              }, f(B.label), 9, Io))), 128))
            ], 40, Eo), [
              [me, c.value]
            ]),
            o("button", {
              type: "button",
              class: "omp-hud__launch-btn",
              disabled: a.value || n.value,
              title: "Run OMP in the active pane",
              onClick: pt
            }, [
              k(S, {
                name: "play",
                size: 12
              }),
              o("span", null, f(n.value ? "Starting" : "Launch"), 1)
            ], 8, xo)
          ])
        ], 64))
      ], 512), [
        [Re, !s.value]
      ])
    ], 2));
  }
}), zo = /* @__PURE__ */ Jt(Lo, [["__scopeId", "data-v-30d2ca9a"]]);
function Oo(t) {
  const e = we(t, {});
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
        const a = n.summary;
        if (n.state === "starting" || !a) return "OMP: starting";
        const i = a.model.split("/").pop() || "omp";
        return `OMP ${i.length > 16 ? `${i.slice(0, 15)}...` : i} ${a.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        const n = It();
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
const Ro = 244, mt = 12, No = 560;
function Do() {
  return typeof window > "u" || typeof window.innerWidth != "number" ? 1280 : Number.isFinite(window.innerWidth) && window.innerWidth > 0 ? window.innerWidth : 1280;
}
function Fo() {
  const t = Do();
  return t < No ? { x: mt, y: mt } : { x: Math.max(mt, t - Ro - mt), y: mt };
}
const Me = "dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud", ce = "dinotty-omp:overlay-pos-migrated:v1", Ho = 44, Bo = 120, ue = 244, de = 12;
function jo() {
  try {
    const t = localStorage.getItem(Me);
    if (!t) return null;
    const e = JSON.parse(t);
    return typeof e?.x != "number" || typeof e?.y != "number" || !Number.isFinite(e.x) || !Number.isFinite(e.y) ? null : { x: e.x, y: e.y };
  } catch {
    return null;
  }
}
function Vo(t, e, s) {
  return t.x < 0 || t.y < 0 || t.x > e || t.y > s ? !0 : t.y >= Ho ? !1 : t.x >= e - ue - de && t.x <= e - ue + de || t.x > e - Bo;
}
function Uo(t) {
  if (typeof window > "u") return;
  const e = window.innerWidth, s = window.innerHeight;
  if (!Number.isFinite(e) || !Number.isFinite(s) || e <= 0 || s <= 0 || e >= 560) return;
  try {
    if (localStorage.getItem(ce)) return;
  } catch {
    return;
  }
  const n = jo();
  if (!(!n || !Vo(n, e, s)))
    try {
      localStorage.setItem(Me, JSON.stringify(t)), localStorage.setItem(ce, "1");
    } catch {
    }
}
let kt = [];
function ht(t) {
  kt.push(() => t.dispose());
}
function Go(t) {
  kt = [], ht(
    t.commands.register("omp.open-session-viewer", () => {
      t.open();
    })
  ), ht(
    t.commands.register("omp.tmux-copymode", () => {
      Se(t);
    })
  ), ht(
    t.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a model preset in a new tab",
      items: async () => ie(t, await zt(t), "new-tab")
    })
  ), ht(
    t.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a model preset in a split pane",
      items: async () => ie(t, await zt(t), "split-v")
    })
  ), ht(
    t.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await Yt(t)).map((a) => ({
        label: a.name,
        detail: a.description,
        icon: "book",
        action: () => {
          be(t, a.name);
        }
      }))
    })
  );
  const e = Oo(t);
  kt.push(() => e.dispose());
  const s = Fo();
  return Uo(s), {
    component: so,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: zo,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: s
      }
    ],
    monitor: { series: [e.series] },
    dispose: Yo
  };
}
function Yo() {
  for (const t of kt)
    try {
      t();
    } catch {
    }
  kt = [], ls(), gs(), Ts(), ys();
}
export {
  Go as activate,
  Yo as deactivate
};
