import N from "react";
var e1 = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function c0() {
  if (W1)
    return E;
  W1 = 1;
  var f = N, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, c = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, d, H) {
    var M, C = {}, W = null, S = null;
    H !== void 0 && (W = "" + H), d.key !== void 0 && (W = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (M in d)
      h.call(d, M) && !x.hasOwnProperty(M) && (C[M] = d[M]);
    if (m && m.defaultProps)
      for (M in d = m.defaultProps, d)
        C[M] === void 0 && (C[M] = d[M]);
    return { $$typeof: i, type: m, key: W, ref: S, props: C, _owner: c.current };
  }
  return E.Fragment = s, E.jsx = u, E.jsxs = u, E;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R1;
function d0() {
  return R1 || (R1 = 1, {}.NODE_ENV !== "production" && function() {
    var f = N, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), r1 = Symbol.iterator, H1 = "@@iterator";
    function V1(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = r1 && t[r1] || t[H1];
      return typeof r == "function" ? r : null;
    }
    var V = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(t) {
      {
        for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          l[o - 1] = arguments[o];
        y1("error", t, l);
      }
    }
    function y1(t, r, l) {
      {
        var o = V.ReactDebugCurrentFrame, v = o.getStackAddendum();
        v !== "" && (r += "%s", l = l.concat([v]));
        var p = l.map(function(a) {
          return String(a);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, p);
      }
    }
    var B1 = !1, D1 = !1, P1 = !1, A1 = !1, E1 = !1, l1;
    l1 = Symbol.for("react.module.reference");
    function _1(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === h || t === x || E1 || t === c || t === H || t === M || A1 || t === S || B1 || D1 || P1 || typeof t == "object" && t !== null && (t.$$typeof === W || t.$$typeof === C || t.$$typeof === u || t.$$typeof === m || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === l1 || t.getModuleId !== void 0));
    }
    function N1(t, r, l) {
      var o = t.displayName;
      if (o)
        return o;
      var v = r.displayName || r.name || "";
      return v !== "" ? l + "(" + v + ")" : l;
    }
    function o1(t) {
      return t.displayName || "Context";
    }
    function b(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case h:
          return "Fragment";
        case s:
          return "Portal";
        case x:
          return "Profiler";
        case c:
          return "StrictMode";
        case H:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            var r = t;
            return o1(r) + ".Consumer";
          case u:
            var l = t;
            return o1(l._context) + ".Provider";
          case d:
            return N1(t, t.render, "ForwardRef");
          case C:
            var o = t.displayName || null;
            return o !== null ? o : b(t.type) || "Memo";
          case W: {
            var v = t, p = v._payload, a = v._init;
            try {
              return b(a(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, P = 0, i1, s1, n1, h1, a1, c1, d1;
    function v1() {
    }
    v1.__reactDisabledLog = !0;
    function S1() {
      {
        if (P === 0) {
          i1 = console.log, s1 = console.info, n1 = console.warn, h1 = console.error, a1 = console.group, c1 = console.groupCollapsed, d1 = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: v1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        P++;
      }
    }
    function T1() {
      {
        if (P--, P === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, t, {
              value: i1
            }),
            info: R({}, t, {
              value: s1
            }),
            warn: R({}, t, {
              value: n1
            }),
            error: R({}, t, {
              value: h1
            }),
            group: R({}, t, {
              value: a1
            }),
            groupCollapsed: R({}, t, {
              value: c1
            }),
            groupEnd: R({}, t, {
              value: d1
            })
          });
        }
        P < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $ = V.ReactCurrentDispatcher, Y;
    function T(t, r, l) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (v) {
            var o = v.stack.trim().match(/\n( *(at )?)/);
            Y = o && o[1] || "";
          }
        return `
` + Y + t;
      }
    }
    var U = !1, O;
    {
      var O1 = typeof WeakMap == "function" ? WeakMap : Map;
      O = new O1();
    }
    function f1(t, r) {
      if (!t || U)
        return "";
      {
        var l = O.get(t);
        if (l !== void 0)
          return l;
      }
      var o;
      U = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = $.current, $.current = null, S1();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (L) {
              o = L;
            }
            Reflect.construct(t, [], a);
          } else {
            try {
              a.call();
            } catch (L) {
              o = L;
            }
            t.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            o = L;
          }
          t();
        }
      } catch (L) {
        if (L && o && typeof L.stack == "string") {
          for (var n = L.stack.split(`
`), j = o.stack.split(`
`), w = n.length - 1, k = j.length - 1; w >= 1 && k >= 0 && n[w] !== j[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (n[w] !== j[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || n[w] !== j[k]) {
                    var Z = `
` + n[w].replace(" at new ", " at ");
                    return t.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", t.displayName)), typeof t == "function" && O.set(t, Z), Z;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        U = !1, $.current = p, T1(), Error.prepareStackTrace = v;
      }
      var B = t ? t.displayName || t.name : "", L1 = B ? T(B) : "";
      return typeof t == "function" && O.set(t, L1), L1;
    }
    function q1(t, r, l) {
      return f1(t, !1);
    }
    function F1(t) {
      var r = t.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(t, r, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return f1(t, F1(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case H:
          return T("Suspense");
        case M:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return q1(t.render);
          case C:
            return q(t.type, r, l);
          case W: {
            var o = t, v = o._payload, p = o._init;
            try {
              return q(p(v), r, l);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, x1 = {}, p1 = V.ReactDebugCurrentFrame;
    function I(t) {
      if (t) {
        var r = t._owner, l = q(t.type, t._source, r ? r.type : null);
        p1.setExtraStackFrame(l);
      } else
        p1.setExtraStackFrame(null);
    }
    function I1(t, r, l, o, v) {
      {
        var p = Function.call.bind(F);
        for (var a in t)
          if (p(t, a)) {
            var n = void 0;
            try {
              if (typeof t[a] != "function") {
                var j = Error((o || "React class") + ": " + l + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              n = t[a](r, a, o, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              n = w;
            }
            n && !(n instanceof Error) && (I(v), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", l, a, typeof n), I(null)), n instanceof Error && !(n.message in x1) && (x1[n.message] = !0, I(v), g("Failed %s type: %s", l, n.message), I(null));
          }
      }
    }
    var z1 = Array.isArray;
    function J(t) {
      return z1(t);
    }
    function $1(t) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, l = r && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function Y1(t) {
      try {
        return u1(t), !1;
      } catch {
        return !0;
      }
    }
    function u1(t) {
      return "" + t;
    }
    function m1(t) {
      if (Y1(t))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $1(t)), u1(t);
    }
    var A = V.ReactCurrentOwner, U1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, w1, k1, G;
    G = {};
    function J1(t) {
      if (F.call(t, "ref")) {
        var r = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function G1(t) {
      if (F.call(t, "key")) {
        var r = Object.getOwnPropertyDescriptor(t, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function K1(t, r) {
      if (typeof t.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var l = b(A.current.type);
        G[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(A.current.type), t.ref), G[l] = !0);
      }
    }
    function X1(t, r) {
      {
        var l = function() {
          w1 || (w1 = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Q1(t, r) {
      {
        var l = function() {
          k1 || (k1 = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var e0 = function(t, r, l, o, v, p, a) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: t,
        key: r,
        ref: l,
        props: a,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function t0(t, r, l, o, v) {
      {
        var p, a = {}, n = null, j = null;
        l !== void 0 && (m1(l), n = "" + l), G1(r) && (m1(r.key), n = "" + r.key), J1(r) && (j = r.ref, K1(r, v));
        for (p in r)
          F.call(r, p) && !U1.hasOwnProperty(p) && (a[p] = r[p]);
        if (t && t.defaultProps) {
          var w = t.defaultProps;
          for (p in w)
            a[p] === void 0 && (a[p] = w[p]);
        }
        if (n || j) {
          var k = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          n && X1(a, k), j && Q1(a, k);
        }
        return e0(t, n, j, v, o, A.current, a);
      }
    }
    var K = V.ReactCurrentOwner, g1 = V.ReactDebugCurrentFrame;
    function y(t) {
      if (t) {
        var r = t._owner, l = q(t.type, t._source, r ? r.type : null);
        g1.setExtraStackFrame(l);
      } else
        g1.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Q(t) {
      return typeof t == "object" && t !== null && t.$$typeof === i;
    }
    function j1() {
      {
        if (K.current) {
          var t = b(K.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function r0(t) {
      {
        if (t !== void 0) {
          var r = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + r + ":" + l + ".";
        }
        return "";
      }
    }
    var M1 = {};
    function l0(t) {
      {
        var r = j1();
        if (!r) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (r = `

Check the top-level render call using <` + l + ">.");
        }
        return r;
      }
    }
    function Z1(t, r) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = l0(r);
        if (M1[l])
          return;
        M1[l] = !0;
        var o = "";
        t && t._owner && t._owner !== K.current && (o = " It was passed a child from " + b(t._owner.type) + "."), y(t), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, o), y(null);
      }
    }
    function C1(t, r) {
      {
        if (typeof t != "object")
          return;
        if (J(t))
          for (var l = 0; l < t.length; l++) {
            var o = t[l];
            Q(o) && Z1(o, r);
          }
        else if (Q(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var v = V1(t);
          if (typeof v == "function" && v !== t.entries)
            for (var p = v.call(t), a; !(a = p.next()).done; )
              Q(a.value) && Z1(a.value, r);
        }
      }
    }
    function o0(t) {
      {
        var r = t.type;
        if (r == null || typeof r == "string")
          return;
        var l;
        if (typeof r == "function")
          l = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          l = r.propTypes;
        else
          return;
        if (l) {
          var o = b(r);
          I1(l, t.props, "prop", o, t);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var v = b(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function i0(t) {
      {
        for (var r = Object.keys(t.props), l = 0; l < r.length; l++) {
          var o = r[l];
          if (o !== "children" && o !== "key") {
            y(t), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), y(null);
            break;
          }
        }
        t.ref !== null && (y(t), g("Invalid attribute `ref` supplied to `React.Fragment`."), y(null));
      }
    }
    function b1(t, r, l, o, v, p) {
      {
        var a = _1(t);
        if (!a) {
          var n = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = r0(v);
          j ? n += j : n += j1();
          var w;
          t === null ? w = "null" : J(t) ? w = "array" : t !== void 0 && t.$$typeof === i ? (w = "<" + (b(t.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, n);
        }
        var k = t0(t, r, l, v, p);
        if (k == null)
          return k;
        if (a) {
          var Z = r.children;
          if (Z !== void 0)
            if (o)
              if (J(Z)) {
                for (var B = 0; B < Z.length; B++)
                  C1(Z[B], t);
                Object.freeze && Object.freeze(Z);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              C1(Z, t);
        }
        return t === h ? i0(k) : o0(k), k;
      }
    }
    function s0(t, r, l) {
      return b1(t, r, l, !0);
    }
    function n0(t, r, l) {
      return b1(t, r, l, !1);
    }
    var h0 = n0, a0 = s0;
    _.Fragment = h, _.jsx = h0, _.jsxs = a0;
  }()), _;
}
({}).NODE_ENV === "production" ? e1.exports = c0() : e1.exports = d0();
var e = e1.exports;
const p0 = {
  accessibility: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M11 18h10.024M37 18H21.024m0 0v8.8m0 13.2V26.8m5.952-8.8v8.8m0 13.2V26.8m-5.952 0h5.952", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "23.9999", cy: "11", r: "3", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  android1: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M30 30a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M11 32v-2.859c0-7.185 5.77-13.116 12.954-13.14A12.999 12.999 0 0 1 37 29v4H11v-1Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m11 14 4.884 4.884M37 14l-4.862 4.862", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" })
  ] }),
  android2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M29 21h4.7c.5 0 .9.4 1 .8l1 5.9c.2 1.2-.8 2.3-2 2.3H33c-.6 0-1-.4-1-1v-1 5c0 .6-.4 1-1 1h-1v5h-4v-5h-2", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M29 21H14.3c-.5 0-.9.4-1 .8l-1 5.9c-.2 1.2.8 2.3 2 2.3h.7c.6 0 1-.4 1-1v-1 5c0 .6.4 1 1 1h1v5h4v-5h2", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M20.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M29.9 12.6 33 9m-15 3.6L14.9 9", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M16.6 21.1c-.4-1-.6-2-.6-3.1 0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.1-.2 2.1-.6 3", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  angular: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m24 11-12 5 2 16 10 6 10-6 2-16-12-5Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23.995 16.277 17.9 29.923h2.274l1.183-3.093h5.186l1.183 3.093H30l-6.005-13.646Zm1.82 8.733h-3.548l1.82-4.275 1.728 4.276Z", fill: "currentColor" })
  ] }),
  appleIos: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M24 18.2c1 0 3-1.5 5.4-1.5 4.1 0 5.5 3.7 5.5 3.7s-4.4 1.5-4.4 5.5c0 4.4 4.4 5.3 4.4 5.3s-3.1 11.2-11 6.7c-7.8 4.6-12-6.2-12-12.2 0-5.8 3.6-8.9 7.1-8.9 2.3 0 3.9 1.4 5 1.4Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23.6 13C28 14 31 12 31 8", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  babyBonus: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 39c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M27.563 29.938a4.489 4.489 0 0 1-1.506 1.738 3.7 3.7 0 0 1-2.057.637c-.722 0-1.431-.22-2.056-.637a4.49 4.49 0 0 1-1.506-1.738", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17.656 26.375a1.781 1.781 0 1 0 0-3.563 1.781 1.781 0 0 0 0 3.563Zm12.688 0a1.781 1.781 0 1 0 0-3.562 1.781 1.781 0 0 0 0 3.562Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M20.293 13.633c1.236-2.173-.567-4.464-3.354-2.598-1.858 1.244-3.535-.055-3.228-1.606", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" })
  ] }),
  bag: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M12 35h24l1.993-16.89a.925.925 0 0 0-.045-.415.983.983 0 0 0-.225-.362 1.087 1.087 0 0 0-.366-.246 1.168 1.168 0 0 0-.444-.087H11.087c-.153 0-.304.03-.444.087-.14.058-.264.141-.366.246a.983.983 0 0 0-.225.362.925.925 0 0 0-.045.415L12 35Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19 16.313a5.312 5.312 0 1 1 10.625 0", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  book1: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M25 35v-1.852c0-1.019.9-1.852 2-1.852h6v-18.52l-3.5-1.483c-2.6-1.018-5.5.741-5.5 3.334M23 35v-1.76c0-1.018-.9-1.852-2-1.852h-6V12.776l3.5-1.482c2.6-1.018 5.5.741 5.5 3.334", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M33 16h4v19H24m-9-19h-4v19h13m0-21v2", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  book: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M30.375 10.25V23l-4.25-3.188L21.874 23V10.25", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M12 35a1 1 0 1 0 2 0h-2Zm4.3-3.26v-1 1Zm18.7 0v1h1v-1h-1ZM35 10h1V9h-1v1ZM14 35c0-.596.24-1.17.67-1.594l-1.406-1.423A4.241 4.241 0 0 0 12 35h2Zm.67-1.594a2.32 2.32 0 0 1 1.63-.667v-2a4.32 4.32 0 0 0-3.036 1.244l1.405 1.423Zm1.63-.667H35v-2H16.3v2Zm19.7-1V10h-2v21.74h2ZM35 9H16.3v2H35V9ZM16.3 9a4.32 4.32 0 0 0-3.036 1.244l1.405 1.422A2.32 2.32 0 0 1 16.3 11V9Zm-3.036 1.244A4.241 4.241 0 0 0 12 13.26h2c0-.596.24-1.17.67-1.595l-1.406-1.422ZM12 13.26V35h2V13.26h-2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M13 36v1h20", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" })
  ] }),
  book2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M29 11v12l-4-3-4 3V11", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M13 36c0-.796.348-1.559.967-2.121A3.475 3.475 0 0 1 16.3 33H35V11H16.3c-.875 0-1.714.316-2.333.879C13.348 12.44 13 13.204 13 14v22Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M13 36v1h18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" })
  ] }),
  car: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M8 23h32", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M37 32v3.75c0 .331-.105.65-.293.884-.187.234-.442.366-.707.366h-3c-.265 0-.52-.132-.707-.366A1.424 1.424 0 0 1 32 35.75V32m-16 0v3.75c0 .331-.105.65-.293.884-.187.234-.442.366-.707.366h-3c-.265 0-.52-.132-.707-.366A1.424 1.424 0 0 1 11 35.75V32m4-4.625h2.25m13.5 0H33", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m37 23.059-4.047-9.395a1.11 1.11 0 0 0-.4-.483 1.06 1.06 0 0 0-.59-.181H16.037c-.21 0-.414.063-.59.18a1.11 1.11 0 0 0-.4.484L11 23.059V32h26v-8.941Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  chartAnalytics2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 23V10.5M35.5 17 12.309 30.75", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M10.725 26.468a13.521 13.521 0 0 1 8.775-15.2v10.134l-8.775 5.066Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 10.5a13.5 13.5 0 1 1-11.641 20.34", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  chartAnaytics1: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M14 35V25h6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M39 34.991 10 35", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M21 35V18h6m8-7h-7v24h7V11Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
  ] }),
  chartBizdev: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m11 31 10.4-9.1 2.6 2.6L35 14", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M36 35H11V12", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M29 14h6v6", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  cloudDevops2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M32 20c3.9.3 7 3.5 7 7.5 0 4.1-3.4 7.5-7.5 7.5h-14", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 27.5c0 4.1-3.4 7.5-7.5 7.5S9 31.6 9 27.5c0-4 3.1-7.2 7-7.5 0-4.4 3.6-8 8-8s8 3.6 8 8c0 2-.8 3.9-2 5.3", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  cloudDevops: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M22 35h-5.302a7.465 7.465 0 0 1-3.168-.711 7.732 7.732 0 0 1-2.607-2.001A8.087 8.087 0 0 1 9.34 29.35a8.292 8.292 0 0 1-.28-3.353 8.202 8.202 0 0 1 1.074-3.176 7.881 7.881 0 0 1 2.236-2.436 7.55 7.55 0 0 1 3.004-1.266 7.43 7.43 0 0 1 3.239.13", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17 24.25c0-1.783.415-3.54 1.209-5.127a11.185 11.185 0 0 1 3.36-4 10.866 10.866 0 0 1 4.773-1.994 10.767 10.767 0 0 1 5.137.448 10.968 10.968 0 0 1 4.373 2.794 11.304 11.304 0 0 1 2.648 4.525c.52 1.701.636 3.505.34 5.261A11.382 11.382 0 0 1 36.8 31", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 28.773 29 24l5 4.773M29 38V24", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  contentCreator: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M18.581 37H11v-7.581a1.152 1.152 0 0 1 .337-.814l17.268-17.268a1.151 1.151 0 0 1 1.628 0l6.43 6.43a1.151 1.151 0 0 1 0 1.628L19.395 36.663a1.153 1.153 0 0 1-.814.337Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M25.125 15 33 22.875", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m28.5 33 5.625-5.625-1.125-4.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m11.697 28.572 7.732 7.732", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  cycle: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M35.25 17.25A2.25 2.25 0 0 0 33 15h-5.625l7.875 13.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M35.25 34.125a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25Zm-22.5 0a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M12.75 15h3.938l7.875 13.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M29.919 19.5H19.312l-6.562 9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  dataAnalyst: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M23 35c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m38 38-6-6m-20-4 7.2-7 3.9 4.1 5.1-6.2", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", fill: "currentColor" })
  ] }),
  designerPenTool: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 27v11.938M24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17 16V9h14v7", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m16.685 16-3.577 7.244a1.046 1.046 0 0 0 .095 1.083L24 39l10.797-14.673a1.046 1.046 0 0 0 .095-1.083L31.315 16h-14.63Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
  ] }),
  devProcess1: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M8.208 23.057a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM22.086 14a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm4.957 19.97a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM34 23.057a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-18.16 0h.75c.596 0 1.169-.232 1.59-.645.422-.412.66-.972.66-1.555v-4.6c0-.584.237-1.143.659-1.556a2.276 2.276 0 0 1 1.59-.644h.75m-1.362 9h.75c.597 0 1.17.232 1.591.644.422.413.66.972.66 1.556v6.6c0 .583.237 1.143.659 1.555.421.413.994.645 1.59.645h.75", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M34.826 23.057h-20", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" })
  ] }),
  devProcess2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M39 35H7v-2h32v2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M37.213 30 41 34l-3.787 4L36 36.718 38.574 34 36 31.282 37.213 30Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M26.043 27.253a6.35 6.35 0 0 0 .688-.34c.23-.131.442-.275.635-.432l1.948.795a.405.405 0 0 0 .483-.164l1.577-2.716a.399.399 0 0 0-.085-.505l-1.652-1.304a5.775 5.775 0 0 0 .005-1.53l1.658-1.293a.393.393 0 0 0 .094-.506l-1.56-2.725a.382.382 0 0 0-.481-.166l-1.95.78a5.91 5.91 0 0 0-1.323-.768l-.29-2.086a.388.388 0 0 0-.392-.33l-3.14-.009a.38.38 0 0 0-.384.335l-.3 2.084a4.966 4.966 0 0 0-.698.322 4.856 4.856 0 0 0-.634.432l-1.949-.795a.405.405 0 0 0-.482.164l-1.577 2.716a.398.398 0 0 0 .085.505l1.652 1.304a5.753 5.753 0 0 0-.005 1.53l-1.658 1.293a.4.4 0 0 0-.095.506l1.562 2.725c.097.171.3.247.48.167l1.95-.78c.41.319.859.57 1.324.767l.29 2.086c.028.188.19.332.392.33l3.138.009a.38.38 0 0 0 .385-.335l.31-2.066Z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M22.184 22.731a2.008 2.008 0 0 1 .741-2.733 2.008 2.008 0 0 1 2.733.741 2.008 2.008 0 0 1-.74 2.733 2.008 2.008 0 0 1-2.734-.74Z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M13 22c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11h-6.931c2.006 1.267 4.383 2 6.931 2 7.18 0 13-5.82 13-13S31.18 9 24 9s-13 5.82-13 13c0 3.493 1.378 6.664 3.62 9h3.054A10.987 10.987 0 0 1 13 22Z", fill: "currentColor" })
  ] }),
  discount: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 49 48", width: "49", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M15.628 21.718a5.62 5.62 0 1 0 0-11.238 5.62 5.62 0 0 0 0 11.238Zm0-2.094a3.525 3.525 0 1 0 0-7.05 3.525 3.525 0 0 0 0 7.05Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "m12.953 36.712 19.66-26.547 1.684 1.247-19.661 26.547-1.683-1.247Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M37.834 31.292a5.62 5.62 0 1 1-11.239 0 5.62 5.62 0 0 1 11.239 0Zm-2.095 0a3.525 3.525 0 1 1-7.05 0 3.525 3.525 0 0 1 7.05 0Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "m32.51 9.466 2.486 1.842-20.256 27.35-2.487-1.841L32.51 9.467Zm.208 1.399L13.652 36.608l.88.652 19.065-25.744-.88-.651Zm-17.09.114a5.12 5.12 0 1 0 0 10.24 5.12 5.12 0 0 0 0-10.24Zm-6.12 5.12a6.12 6.12 0 1 1 12.24 0 6.12 6.12 0 0 1-12.24 0Zm6.12-3.025a3.025 3.025 0 1 0 0 6.05 3.025 3.025 0 0 0 0-6.05Zm-4.025 3.025a4.025 4.025 0 1 1 8.05 0 4.025 4.025 0 0 1-8.05 0Zm14.492 15.193a6.12 6.12 0 1 1 12.239 0 6.12 6.12 0 0 1-12.24 0Zm6.12-5.119a5.12 5.12 0 1 0 0 10.239 5.12 5.12 0 0 0 0-10.239Zm-4.026 5.12a4.025 4.025 0 1 1 8.05 0 4.025 4.025 0 0 1-8.05 0Zm4.025-3.026a3.025 3.025 0 1 0 0 6.05 3.025 3.025 0 0 0 0-6.05Z", fill: "currentColor" })
  ] }),
  display: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 49 48", width: "49", height: "48", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M36.958 11.377H11.542a2.158 2.158 0 0 0-2.159 2.159v16.077a2.16 2.16 0 0 0 2.159 2.159h25.416a2.158 2.158 0 0 0 2.159-2.159V13.536a2.158 2.158 0 0 0-2.159-2.159ZM11.542 9.22a4.317 4.317 0 0 0-4.317 4.317v16.077a4.316 4.316 0 0 0 4.317 4.317h12.1v2.693h-7.15v2.158h16.46v-2.158h-7.15V33.93h11.156a4.317 4.317 0 0 0 4.317-4.317V13.536a4.317 4.317 0 0 0-4.317-4.317H11.542Z", fill: "currentColor" }) }),
  dotNet: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M11.5 38a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M30 22 20 11h-3v25c0 .6.4 1 1 1h4m8-26h4c.6 0 1 .4 1 1v25h-4.2L22 26", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  extra: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 49 48", width: "49", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M13.59 11.806c0-1.716 1.382-3.131 3.106-3.131h16.108c1.724 0 3.106 1.415 3.106 3.13v24.427c0 1.696-1.363 3.093-3.069 3.093H16.66c-1.706 0-3.069-1.397-3.069-3.093V11.806Zm3.106-1.268c-.674 0-1.242.56-1.242 1.268v24.426c0 .688.55 1.23 1.205 1.23H32.84c.655 0 1.205-.542 1.205-1.23V11.806c0-.707-.568-1.268-1.242-1.268H16.696Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24.75 35.56a1.404 1.404 0 1 0 0-2.807 1.404 1.404 0 0 0 0 2.808Z", fill: "currentColor" })
  ] }),
  featureIdeasAndContentBlocks: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: /* @__PURE__ */ e.jsx("path", { stroke: "currentColor", strokeWidth: "2", d: "M30 12h6v6h-6zM11 22h7v14h-7zm11 0h14v14H22zM11 12h15v6H11z", fill: "none" }) }),
  financeAssistantCalculator: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M31 15H17v7h14v-7Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M35 37V11H13v26h22Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M18.375 28.5a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Zm5.625 0a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Zm5.625 0a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Zm-11.25 5.625a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Zm5.625 0a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Zm5.625 0a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Z", fill: "currentColor" })
  ] }),
  flutter: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M14.784 27 11 23.02 23.378 10H31L14.784 27ZM22 33.984 25.02 37H33l-7.01-7", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M21.992 25.98 18 29.99 21.992 34 33 23h-8.042l-2.966 2.98Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m22.472 34.42 5.622-2.385-1.931-1.931-3.691 4.316Z", fill: "currentColor" })
  ] }),
  frontendDevelopment: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M15 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "m28 22 4.621 4.621L28 31.243M23 22l-4.5 4.5L23 31", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M35.917 13H11v22h26V13h-1.083Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
  ] }),
  frontendDevelopment2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M35.917 13H11v22h26V13h-1.083Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23 23h-8v8h8v-8Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M15 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M26 23h8m-8 4h4", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  githubFork: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M16 37a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm17-18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-17 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 10v-1.125c0-.895.358-1.753.996-2.386A3.413 3.413 0 0 1 19.4 24.5h10.2c.902 0 1.767-.356 2.404-.989A3.362 3.362 0 0 0 33 21.125V20", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M16 19v10", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" })
  ] }),
  globe: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 39c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m37.463 30.62-8.482-5.216a1.25 1.25 0 0 0-.488-.174l-3.565-.48a1.25 1.25 0 0 0-1.309.729l-2.14 4.803a1.25 1.25 0 0 0 .223 1.357l2.938 3.178a1.249 1.249 0 0 1 .31 1.086l-.599 3.093", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m14.149 12.688-1.398 3.305a1.25 1.25 0 0 0-.019.926l1.795 4.791a1.25 1.25 0 0 0 .908.784l3.349.72a1.25 1.25 0 0 1 .862.677l.595 1.229a1.25 1.25 0 0 0 1.125.705h2.099", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m27.822 9.492 1.458 2.612a1.25 1.25 0 0 1-.253 1.537l-4.205 3.802c-.071.065-.15.121-.234.167l-1.913 1.057a1.25 1.25 0 0 1-.604.156h-3.335a1.25 1.25 0 0 0-1.152.764l-1.301 3.09", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  healthCheck: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M9.75 23h-1v2h1v-2Zm5.938 1v1a1 1 0 0 0 .832-.445L15.688 24Zm2.374-3.563.833-.554a1 1 0 0 0-1.665 0l.832.555Zm4.75 7.125-.832.555a1 1 0 0 0 1.665 0l-.832-.555ZM25.188 24v-1a1 1 0 0 0-.832.445l.832.555Zm3.563 1a1 1 0 1 0 0-2v2Zm-19 0h5.938v-2H9.75v2Zm6.77-.445 2.375-3.563-1.665-1.11-2.375 3.563 1.665 1.11Zm.71-3.563 4.75 7.125 1.665-1.11-4.75-7.124-1.665 1.11Zm6.415 7.125 2.375-3.562-1.665-1.11-2.375 3.563 1.665 1.11ZM25.188 25h3.562v-2h-3.563v2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M9.173 19.249a10.477 10.477 0 0 1-.017-.593A7.72 7.72 0 0 1 24 15.682a7.72 7.72 0 0 1 14.844 2.974C38.844 28.75 24 37.063 24 37.063s-5.93-3.32-10.293-8.313", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" })
  ] }),
  hrAssistant: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m38.5 23.5-2.125 1.364-4.5-8.618L37 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m9.5 23.5 2.125 1.213 4.5-8.618L11 13.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m36.375 24.864-2.25 2.632c-1.424 1.424-5.67 5.463-5.67 5.463s-6.53-1.482-8.723-2.03a1.125 1.125 0 0 1-.42-.205l-7.687-6.01", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m34.125 27.496-6.188-4.5-1.8 1.35a4.5 4.5 0 0 1-5.4 0l-.762-.572a1.125 1.125 0 0 1-.12-1.695l5.503-5.503a1.124 1.124 0 0 1 .796-.33h5.721", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m16.206 16.095 7.217-2.104c.257-.075.534-.055.778.056L26 16m-4.25 19.934-4.238-1.06a1.125 1.125 0 0 1-.465-.242l-3.172-2.757", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" })
  ] }),
  hr1: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M20 29h-9v-9a9 9 0 1 1 9 9Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19 28.996a9.042 9.042 0 0 0 3.387 4.351A9.45 9.45 0 0 0 27.737 35H37v-9.007c0-2.303-.908-4.52-2.537-6.192C32.834 18.128 31 17.5 29.5 17.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
  ] }),
  hr2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m28.326 23.995 3.66 3.504c.698.668 1.918.668 2.615 0 .697-.667.697-1.835 0-2.503l-5.316-5.007a3.853 3.853 0 0 0-5.317 0l-1.22 1.168a1.737 1.737 0 0 1-2.44 0L19 19.906s2.963-3.088 5.49-5.174c2.529-2.086 7.148-2.67 10.286.417 3.137 3.004 2.789 7.093 0 9.93", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m24 15.052-.346-.331c-2.509-2.073-7.094-2.653-10.208.414C10.33 18.202 10 22 14 25.5M32.5 28c.345.69.14 1.76-.465 2.364-.69.69-1.898.69-2.589 0l-3.625-3.625m3.97 4.056a1.85 1.85 0 0 1-.345 2.158c-.69.69-1.899.69-2.59 0m-.603 1.554-1.122 1.035c-.69.69-1.9.69-2.59 0s-.69-1.898 0-2.589l1.122-1.036c.69-.69 1.9-.69 2.59 0s.69 1.9 0 2.59Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m23.49 32.004-1.38 1.38c-.69.691-1.9.691-2.59 0-.69-.69-.69-1.898 0-2.589l1.381-1.38c.69-.691 1.9-.691 2.59 0a1.73 1.73 0 0 1 0 2.589Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m20.901 29.415-1.38 1.38c-.691.69-1.9.69-2.59 0s-.69-1.898 0-2.589l1.381-1.38c.69-.691 1.899-.691 2.59 0 .69.69.69 1.812 0 2.588Zm-2.589-2.676-1.38 1.38c-.691.691-1.9.691-2.59 0-.69-.69-.69-1.898 0-2.588l1.38-1.381c.691-.69 1.9-.69 2.59 0s.69 1.898 0 2.589Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinejoin: "round", fill: "none" })
  ] }),
  icEmbeddedDeveloperCpu: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M29 19H19v10h10V19Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M33.9 13H13v22h22V13h-1.1Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M36 21h3m-3 6h3M9 21h3.375M9 27h3.375M27 36v3m-6-3v3m6-30v3.375M21 9v3.375", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" })
  ] }),
  javaForIot: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M15 35.806a1 1 0 0 0 1.176.984l16.824-3V29l-18 3.21v3.596Zm0-9a1 1 0 0 0 1.176.984l16.824-3V20l-18 3.21v3.596Zm0-9a1 1 0 0 0 1.176.984l16.824-3V11l-18 3.21v3.596Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m15.5 27.5 8.5 3m-8.5-12 8.5 3", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinejoin: "round", fill: "none" })
  ] }),
  java: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M22.952 22h-9.577c-2.115 8.333 5.401 15 5.401 15h8.464s7.46-6.667 5.4-15h-9.688Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M33.173 26.033C35.374 24.225 39 24.79 39 27.728S35.633 34 30 34m-8.623-16.442c-2.98-4.217 4.385-4.892 1.462-8.715m1.855 10.907c-2.98-4.216 4.386-4.89 1.462-8.714", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  javascript: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M20.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19 24c-2.2-1.5-4-4-4-6.7 0-4.6 4-8.3 9-8.3s9 3.7 9 8.3c0 2.8-1.5 5.2-3.7 6.7", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17 21.8s-2.1.7-3.2 2.3c0 0-2.7.2-2.9 4.4-.2 4.2 3.5 8.5 8.6 8.5h8.8c5.2 0 8.8-4.2 8.6-8.5-.2-4.3-2.9-4.4-2.9-4.4-1.1-1.6-3.2-2.3-3.2-2.3", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M26.7 19.2c-.1 0-.7-.2-.9-.4-.5-.3-.9-.8-1.8-.8s-1.3.5-1.8.8c-.2.1-.7.4-.9.4-.3 0-.6.2-.7.5-.1.3 0 .7.3.9.1 0 1.5 1 3.1 1s3.1-.9 3.1-1c.3-.2.4-.5.3-.8-.1-.3-.4-.6-.7-.6Z", fill: "currentColor" })
  ] }),
  laptop: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 49 48", width: "49", height: "48", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M38.096 30.577V13.615a1.04 1.04 0 0 0-1.038-1.038H11.442a1.04 1.04 0 0 0-1.038 1.038v16.962h27.692ZM8.326 13.615v16.962H6.25v3.808A3.12 3.12 0 0 0 9.365 37.5h29.77a3.12 3.12 0 0 0 3.115-3.115v-3.808h-2.077V13.615a3.12 3.12 0 0 0-3.115-3.115H11.442a3.12 3.12 0 0 0-3.115 3.115Zm0 19.039v1.73a1.04 1.04 0 0 0 1.04 1.04h29.769a1.04 1.04 0 0 0 1.038-1.04v-1.73H29.58a2.835 2.835 0 0 1-2.347 1.244h-5.966a2.835 2.835 0 0 1-2.347-1.244H8.327Z", fill: "currentColor" }) }),
  lockPrivacySecurity: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 28.5a2.813 2.813 0 1 0 0-5.625 2.813 2.813 0 0 0 0 5.625Zm0 0v3.375", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M37 37V18H11v19h26Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19 18v-4a5 5 0 1 1 10 0v4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  machineLearning: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M19.756 19c-.913-.583-1.934-1.007-3.116-1.007-3.652 0-5.64 3.128-5.64 5.991 0 1.644.645 3.394 1.88 4.56m14.343-8.748c1.128-1.007 2.471-1.803 4.137-1.803 3.652 0 5.64 3.128 5.64 5.991 0 1.644-.645 3.394-1.88 4.56", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M20.67 23.401c-2.15-.265-4.513-.159-6.232 1.538-2.579 2.545-1.773 6.15.322 8.165 2.095 2.014 5.694 2.863 8.273.318 2.686-2.651 1.397-7.105.913-9.384-.483-2.28-1.773-6.787.913-9.438 2.633-2.545 6.232-1.75 8.327.318 1.128 1.114 1.88 2.704 1.934 4.348", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24.054 32.308c.215.371.483.743.806 1.06 2.578 2.546 6.23 1.75 8.272-.317 2.041-2.068 2.901-5.62.323-8.165-1.612-1.59-3.814-1.75-5.802-1.538m-14.827-3.923c-.053-1.697.752-3.393 1.934-4.56 2.095-2.015 5.695-2.81 8.273-.265.322.318.591.69.806 1.06", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  magnifier: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M23 35c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m38 38-6-6", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  marketingSpecialist: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M11 21h6v14h-6V21Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17 20.304 22.605 9a4.45 4.45 0 0 1 3.17 1.324 4.525 4.525 0 0 1 1.313 3.198v3.391h8.67a2.226 2.226 0 0 1 1.68.765 2.264 2.264 0 0 1 .545 1.776c-.341 2.752-.88 6.968-1.31 10.315A5.992 5.992 0 0 1 30.73 35H17", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" })
  ] }),
  marketing: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M11 33.5s18.512-5.738 26-8v-7c-7.503-2.26-26-8-26-8v23Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M26 15a1 1 0 1 0-2 0h2Zm5 12.503v5.499h2v-5.499h-2Zm-5 5.504V15h-2v18.007h2Zm2.5 2.493a2.494 2.494 0 0 1-2.5-2.493h-2a4.494 4.494 0 0 0 4.5 4.493v-2Zm0 2A4.5 4.5 0 0 0 33 33h-2a2.5 2.5 0 0 1-2.5 2.5v2Z", fill: "currentColor" })
  ] }),
  mobile: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 37.5a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("rect", { x: "14", y: "9", width: "20", height: "31", rx: "1", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M13 32h22M20 10.5h8", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  moneyFinance2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M37.929 15H9v16.875C9 32.496 9.48 33 10.071 33H39V16.125c0-.621-.48-1.125-1.071-1.125Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6.429-12.571 8.571 7.5m-8.571 9.643 8.571-7.5m-21.429-9.643L9 22.929m8.571 9.643L9 25.072", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  moneyFinance: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 16.125v2.25m0 11.25v2.25", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 39c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19.625 29.625h6.063a2.812 2.812 0 1 0 0-5.625h-3.375a2.812 2.812 0 1 1 0-5.625h5.062", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" })
  ] }),
  motionDesigner: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M38 13H19c1.748 3.75 3.848 7.35 5.793 11-1.945 3.65-4.045 7.25-5.793 11h19c-1.752-3.758-3.884-7.354-5.852-11 1.953-3.664 3.964-7.302 5.852-11Z", stroke: "currentColor", strokeWidth: "1.89696", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M18 21h-4m-2 0H9m7 8h-4m6-4h-8", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  officeAssistant: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M28.5 17.25 16.783 29.158a2.25 2.25 0 0 0 3.182 3.182L33.93 18.18a4.5 4.5 0 0 0-6.364-6.364l-13.965 14.16a6.75 6.75 0 0 0 9.546 9.546l11.539-11.524", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
  pawDog: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M13 26a3.333 3.333 0 1 0 0-6.666A3.333 3.333 0 0 0 13 26Zm6-7.333A3.333 3.333 0 1 0 19 12a3.333 3.333 0 0 0 0 6.667Zm10 0A3.333 3.333 0 1 0 29 12a3.333 3.333 0 0 0 0 6.667ZM35 26a3.333 3.333 0 1 0 0-6.666A3.333 3.333 0 0 0 35 26Zm-4.98 1.927c-.98-1.153-1.801-2.136-2.792-3.288-.517-.61-1.181-1.22-1.969-1.492a2.271 2.271 0 0 0-.371-.102C24.606 23 24.302 23 24.01 23c-.293 0-.597 0-.89.056a2.273 2.273 0 0 0-.37.102c-.788.271-1.44.882-1.97 1.492-.979 1.152-1.8 2.136-2.79 3.288-1.475 1.48-3.286 3.119-2.949 5.413.326 1.152 1.148 2.294 2.622 2.621.822.17 3.444-.497 6.234-.497h.203c2.79 0 5.413.656 6.234.497 1.474-.327 2.296-1.48 2.622-2.621.35-2.305-1.463-3.944-2.937-5.424Z", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
  poiLocation: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m24 38-.654.757.671.579.656-.596L24 38Zm0-29V8v1Zm10 11.154c0 1.742-.615 3.676-1.611 5.647-.991 1.961-2.323 3.889-3.674 5.598a55.513 55.513 0 0 1-5.274 5.756 20.566 20.566 0 0 1-.108.1l-.005.004v.001L24 38a186.929 186.929 0 0 0 .674.739l.002-.002.007-.006.026-.024a23.046 23.046 0 0 0 .456-.43 57.545 57.545 0 0 0 5.12-5.637c1.4-1.772 2.817-3.816 3.889-5.937C35.24 24.593 36 22.335 36 20.153h-2ZM24 38l.654-.757h-.001l-.005-.005a49.716 49.716 0 0 1-5.369-5.659C16.543 28.18 14 23.955 14 20.155h-2c0 4.546 2.957 9.245 5.72 12.68a51.749 51.749 0 0 0 5.131 5.478 31.627 31.627 0 0 0 .459.413l.026.023a.33.33 0 0 1 .007.006l.002.002L24 38ZM14 20.154c0-2.698 1.057-5.282 2.934-7.185l-1.424-1.404A12.234 12.234 0 0 0 12 20.154h2Zm2.934-7.185A9.924 9.924 0 0 1 24 10V8c-3.187 0-6.24 1.284-8.49 3.565l1.424 1.404ZM24 10a9.924 9.924 0 0 1 7.066 2.97l1.424-1.405A11.924 11.924 0 0 0 24 8v2Zm7.066 2.97A10.233 10.233 0 0 1 34 20.153h2c0-3.22-1.261-6.309-3.51-8.59l-1.424 1.405Z", fill: "currentColor" })
  ] }),
  presentation: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M13 31.75V16m22 0v15.75", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M35.917 11H12.083c-.598 0-1.083.56-1.083 1.25V16h26v-3.75c0-.69-.485-1.25-1.083-1.25Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 32v3m0 4.875a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm-13.5-8h27", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  productOwnerKey: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m19.569 23.321.72.695.443-.46-.23-.596-.933.361Zm5.603 5.804.384-.923-.63-.262-.473.49.72.695Zm-1.844 1.91v1a1 1 0 0 0 .72-.305l-.72-.694Zm-3.362 0v-1a1 1 0 0 0-1 1h1Zm0 3.483v1a1 1 0 0 0 1-1h-1Zm-3.362 0v-1a1 1 0 0 0-1 1h1Zm0 3.482v1h1v-1h-1ZM11 38h-1v1h1v-1Zm0-5.804-.72-.694-.28.29v.404h1Zm9.501-9.236a9.787 9.787 0 0 1-.24-6.349l-1.914-.578a11.787 11.787 0 0 0 .29 7.65l1.864-.723Zm-.24-6.349c.63-2.081 1.93-3.867 3.675-5.06l-1.129-1.65c-2.13 1.456-3.703 3.624-4.46 6.132l1.915.578Zm3.675-5.06a8.808 8.808 0 0 1 5.898-1.503l.21-1.99a10.809 10.809 0 0 0-7.237 1.843l1.129 1.65Zm5.898-1.503a8.938 8.938 0 0 1 5.495 2.704l1.439-1.39a10.939 10.939 0 0 0-6.725-3.303l-.209 1.989Zm5.495 2.704a9.595 9.595 0 0 1 2.624 5.73l1.99-.195a11.595 11.595 0 0 0-3.175-6.924l-1.439 1.389Zm2.624 5.73a9.73 9.73 0 0 1-1.463 6.167l1.687 1.075a11.728 11.728 0 0 0 1.767-7.437l-1.99.195ZM36.49 24.65c-1.157 1.816-2.878 3.154-4.868 3.799l.616 1.902c2.442-.79 4.538-2.428 5.939-4.626L36.49 24.65Zm-4.868 3.799a8.752 8.752 0 0 1-6.066-.246l-.767 1.847a10.752 10.752 0 0 0 7.45.302l-.617-1.903Zm-7.169-.017-1.845 1.91 1.44 1.39 1.844-1.911-1.439-1.39Zm-1.125 1.605h-3.362v2h3.362v-2Zm-4.362 1v3.482h2v-3.482h-2Zm1 2.482h-3.362v2h3.362v-2Zm-4.362 1V38h2v-3.482h-2Zm1 2.482H11v2h5.604v-2ZM12 38v-5.804h-2V38h2Zm-.28-5.11 8.568-8.874-1.439-1.39-8.568 8.876 1.438 1.389Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M31.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  productRoadmap: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M13.8 15.6a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6ZM34.333 38a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M34.333 38a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6ZM24.067 26.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M30.6 12.8a5.6 5.6 0 0 1 0 11.2m0-11.2h-14m15.867 22.4H16.6M22.2 24h-5.6m14 0h-4.667M16.6 35.2a5.6 5.6 0 0 1 0-11.2", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  productStrategy: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("circle", { cx: "24", cy: "24", r: "14", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m16.736 22.037 12.34-4.113-4.114 12.34-2.021-5.603-.16-.442-.442-.16-5.603-2.022Z", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  projectManagement: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M35 11h1v-1h-1v1Zm0 26v1h1v-1h-1Zm-22 0h-1v1h1v-1Zm0-26v-1h-1v1h1Zm6.6 1h1v-2h-1v2Zm8.8 0H35v-2h-6.6v2Zm5.6-1v25.999L35 37h1V11h-2Zm1 26v-1H13v2h21.999L35 37Zm-21 0V11h-2v26h2Zm-1-25h6.6v-2H13v2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19 15v-1a5 5 0 1 1 10 0v1H19Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 32a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m22 26 2 2 6.1-5.9", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  puzzleOpenJob: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M15.008 37v-7.408a3.85 3.85 0 0 1-3.813-.24 4.04 4.04 0 0 1-1.35-1.485 4.2 4.2 0 0 1-.492-1.973 4.2 4.2 0 0 1 .491-1.973 4.04 4.04 0 0 1 1.351-1.485 3.85 3.85 0 0 1 3.813-.24v-7.194h7.098a4.208 4.208 0 0 1 .233-3.94 4.016 4.016 0 0 1 1.436-1.396 3.86 3.86 0 0 1 1.91-.507 3.86 3.86 0 0 1 1.91.507c.585.333 1.08.813 1.437 1.396s.565 1.25.606 1.939a4.21 4.21 0 0 1-.374 2H37v7.195a3.85 3.85 0 0 0-3.813.24 4.04 4.04 0 0 0-1.351 1.485 4.2 4.2 0 0 0-.491 1.973 4.2 4.2 0 0 0 .49 1.973 4.04 4.04 0 0 0 1.352 1.484 3.85 3.85 0 0 0 3.813.24V37H15.008Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }) }),
  qa: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M27.938 20.625a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Zm-7.875 0a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 24v14.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M40 24H8", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M35 27.333c0 3.095-1.159 6.062-3.222 8.25C29.715 37.77 26.918 39 24 39c-2.917 0-5.715-1.23-7.778-3.417C14.159 33.395 13 30.428 13 27.333v-4.666c0-3.095 1.159-6.062 3.222-8.25C18.285 12.23 21.082 11 24 11c2.917 0 5.715 1.23 7.778 3.417C33.841 16.605 35 19.573 35 22.667v4.666Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m38.614 33.438-4.041-2.334m4.041-15.541-4.042 2.333M9.386 15.563l4.042 2.333M9.386 33.438l4.042-2.334", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" })
  ] }),
  react: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M31.5 28.547C35.407 27.593 38 25.913 38 24c0-2.974-6.268-5.385-14-5.385S10 21.026 10 24c0 2.974 6.268 5.385 14 5.385.922 0 1.824-.035 2.697-.1", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17.592 24A35.91 35.91 0 0 1 19 21.308c3.866-6.696 9.088-10.92 11.663-9.432 2.576 1.487 1.53 8.12-2.337 14.816-3.866 6.696-9.087 10.92-11.663 9.432-1.616-.933-1.806-3.893-.768-7.624", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23.738 15.113c-2.742-2.826-5.441-4.18-7.075-3.237-2.575 1.487-1.529 8.12 2.337 14.816 3.866 6.696 9.088 10.92 11.663 9.432 2.576-1.487 1.53-8.12-2.337-14.816a35.86 35.86 0 0 0-1.632-2.573", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23.688 25.375a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Z", fill: "currentColor" })
  ] }),
  rubyRor: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M16.5 11h15l7.5 9.044L24 37 9 20.044 16.5 11Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M30.52 19.813 24 35.75l-6.52-15.938 6.52-8.5 6.52 8.5ZM9 20h29.75", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  scrumMaster: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M18 19h-4v-5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M21.061 29c1.308 0 2.605-.003 4.051-.57a7.842 7.842 0 0 0 3.554-2.763A7.222 7.222 0 0 0 30 21.5a7.222 7.222 0 0 0-1.334-4.167 7.842 7.842 0 0 0-3.554-2.762 8.327 8.327 0 0 0-4.574-.427 8.063 8.063 0 0 0-4.054 2.053L15 17.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M10 29h27.883", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m34 25 4 4-4 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", fill: "none" })
  ] }),
  security: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { stroke: "currentColor", strokeWidth: "2", d: "M13 19h22v18H13z", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m29.561 19.14.04-5.054a5.828 5.828 0 0 0-5.83-5.836 5.834 5.834 0 0 0-5.831 5.836l-.04 5.054", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23.823 29.307a2.666 2.666 0 0 0 2.66-2.672 2.666 2.666 0 0 0-2.66-2.672 2.666 2.666 0 0 0-2.66 2.672 2.666 2.666 0 0 0 2.66 2.672Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23.824 29.301v3.71", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" })
  ] }),
  sentAirplane: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M17.522 25.977C18.848 27.145 31 37 31 37c.977-4.474 5-25 5-25s-22.955 7.617-27 9l8.522 4.977Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m17 26 18-13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23.623 31.346 17 37V26", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" })
  ] }),
  serverBackend: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M33 35H15c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2Zm0-8H15c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2Zm0-8H15c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2Zm-2 16v3m-14-3v3m10.9-7h4.2m-4.2-16h4.2", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M30 24.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z", fill: "currentColor" })
  ] }),
  settingsTestAutomation: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m23.228 11.373-2.842-2.13a1.205 1.205 0 0 0-1.081-.188c-.88.276-1.734.629-2.552 1.056a1.206 1.206 0 0 0-.633.898l-.502 3.516a12.993 12.993 0 0 0-1.093 1.093l-3.516.502a1.203 1.203 0 0 0-.897.632 15.56 15.56 0 0 0-1.057 2.55 1.205 1.205 0 0 0 .187 1.084l2.131 2.842a12.91 12.91 0 0 0 0 1.544l-2.13 2.842a1.205 1.205 0 0 0-.188 1.081c.276.88.629 1.734 1.056 2.552a1.206 1.206 0 0 0 .898.633l3.516.502a12.932 12.932 0 0 0 1.093 1.093l.502 3.515a1.203 1.203 0 0 0 .632.898c.818.427 1.671.781 2.55 1.057a1.206 1.206 0 0 0 1.084-.187l2.842-2.131a12.91 12.91 0 0 0 1.544 0l2.842 2.13a1.204 1.204 0 0 0 1.081.188c.88-.276 1.734-.629 2.552-1.056a1.206 1.206 0 0 0 .633-.898l.502-3.516a12.932 12.932 0 0 0 1.093-1.093l3.515-.502a1.203 1.203 0 0 0 .898-.632c.427-.818.781-1.671 1.057-2.55a1.206 1.206 0 0 0-.187-1.084l-2.131-2.842a12.91 12.91 0 0 0 0-1.544l2.13-2.842a1.204 1.204 0 0 0 .188-1.081 15.561 15.561 0 0 0-1.056-2.552 1.206 1.206 0 0 0-.898-.633l-3.516-.502a12.932 12.932 0 0 0-1.093-1.093l-.502-3.516a1.203 1.203 0 0 0-.632-.897 15.56 15.56 0 0 0-2.55-1.057 1.205 1.205 0 0 0-1.084.187l-2.842 2.131a12.91 12.91 0 0 0-1.544 0Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
  ] }),
  sick: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 39c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M32.313 19.25 27.563 24m4.75 0-4.75-4.75m-7.125 0L15.688 24m4.75 0-4.75-4.75", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 33.5a1.781 1.781 0 1 0 0-3.562 1.781 1.781 0 0 0 0 3.562Z", fill: "currentColor" })
  ] }),
  solutionArchitectBulb: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m30.994 29.856-.559-.83a1.045 1.045 0 0 1-.019.014c-.12.08-.554.369-.967.805A3.727 3.727 0 0 0 28.685 31h-9.37a3.727 3.727 0 0 0-.764-1.155 5.658 5.658 0 0 0-.967-.805A11.482 11.482 0 0 1 12.5 19.5c0-6.337 5.135-11.479 11.482-11.5h.037c6.346.021 11.482 5.163 11.482 11.5 0 3.962-2.007 7.458-5.066 9.528l.56.828Zm0 0-.019.013c-.237.158-1.487.993-1.487 2.131L24.02 7c6.896.022 12.48 5.61 12.48 12.5a12.48 12.48 0 0 1-5.506 10.356Z", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m21.526 39.466-.031-.845-.84-.11a1.34 1.34 0 0 1-1.175-1.318V31h9v6.193a1.34 1.34 0 0 1-1.175 1.318l-.84.11-.03.846a.561.561 0 0 1-.569.533h-3.771a.563.563 0 0 1-.57-.534Z", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m19.296 18.43 3.581 3.59 6.736-6.75", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "3.8637", fill: "none" })
  ] }),
  suitcaseBizdev: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 9h2c1.1 0 2 .9 2 2v3m-4-5h-2c-1.1 0-2 .9-2 2v3m2 12.4L11 23v-5c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v5l-11 3.4", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M35 24v11H13V24", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M26 29h-4v-4c0-1.1.9-2 2-2s2 .9 2 2v4Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  systemArchitectFork: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M24 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm11 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-11 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-17.5v9.2M35 28v-3H24m-11 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-6v-3h11", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }) }),
  talentAcquisitionSpecialist: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M27 35v-5.9c0-2.5-3.6-3.9-5-4.6-1.2-.6-3.4-2-3.4-4.2 0-2.1 1.8-3.3 3.4-3.3 1.6 0 3.4 1.2 3.4 3.3 0 2.1-2.2 3.6-3.4 4.2-1.5.8-5 2.2-5 4.6V33", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23 35c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m38 38-6-6", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  teamLeads: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 31.834a4.375 4.375 0 1 0 0-8.75 4.375 4.375 0 0 0 0 8.75Zm7 4.785c-1.476-2.628-4.09-4.375-7.07-4.375-2.888 0-5.432 1.64-6.93 4.132M32 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M37.422 27.524c-1.527-1.838-3.78-3-6.292-3a8.016 8.016 0 0 0-4.084 1.116M16 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-5.125 3.509c1.336-1.838 3.307-3 5.506-3 1.298 0 2.517.405 3.573 1.116", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  ticket: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M19 15v19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M9.26 28.74a1.09 1.09 0 0 0-.26.703v3.446c0 .295.122.577.338.786.216.208.51.325.816.325H39v-4.557c0-.256-.092-.504-.26-.702a1.16 1.16 0 0 0-.663-.385 4.65 4.65 0 0 1-2.652-1.545A4.345 4.345 0 0 1 34.385 24c0-1.024.367-2.018 1.04-2.811a4.65 4.65 0 0 1 2.652-1.545c.26-.05.495-.187.663-.385.168-.198.26-.446.26-.702V14H10.154c-.306 0-.6.117-.816.325a1.09 1.09 0 0 0-.338.786v3.446c0 .256.092.504.26.702.168.198.402.334.663.385a4.65 4.65 0 0 1 2.652 1.545A4.345 4.345 0 0 1 13.615 24a4.345 4.345 0 0 1-1.04 2.811 4.65 4.65 0 0 1-2.652 1.545 1.16 1.16 0 0 0-.663.385Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
  ] }),
  time: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 38.25c7.87 0 14.25-6.38 14.25-14.25S31.87 9.75 24 9.75 9.75 16.13 9.75 24 16.13 38.25 24 38.25Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M32.313 23H22l6.878 6.878", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "bevel", fill: "none" })
  ] }),
  uIDesigner: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 31c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.2 7 7 7Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M9 24s4.3 11 15 11c9.7 0 14.3-9.5 15-11-.7-1.5-5.3-11-15-11C13.3 13 9 24 9 24Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 21c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3h-3v-3Z", fill: "currentColor" })
  ] }),
  userJourney: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M20 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm16.243 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m22 22 4.243 4.243M18 22l-4.243 4.243", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M28 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M34.243 22 30 26.243", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M12 31a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] }),
  user: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M24 29a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm9.323 6.16A10.992 10.992 0 0 0 24 30a10.99 10.99 0 0 0-9.137 4.873", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  uxDesigner: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M35 18H17v19h18V18Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17 32h-4V13h18v4", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M22 21v1.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V10c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1v3", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] }),
  vacation: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M29.819 39.804C31.022 30.78 29.32 23.61 21.5 20", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M21.697 18.894v10.651c-4.813-1.203-7.288-7.848 0-10.651Zm1.561.682H35.03c-1.203-4.813-9.53-6.728-11.772 0Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M21.697 19.454H8.803c1.416-5.763 10.651-7.287 12.791 0", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m22.258 19.454 8.643-8.93c-5.076-3.074-13.128 1.643-8.643 8.93Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17 37h19.06", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", fill: "none" })
  ] }),
  valueMatrix: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 9v30m15-15H9", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "33.0993", cy: "17.2721", r: "2.48162", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "16.4449", cy: "32.2721", r: "2.48162", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "14.7904", cy: "14.9008", r: "2.48162", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "31.6654", cy: "30.8383", r: "2.48162", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  wordpress: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M27.467 36.133c1.906-5.46 5.546-16.986 5.546-18.546 0-3.9-3.38-4.507-4.68-2.86C25.473 18.28 31.76 22.58 30.46 27m-10.013 9.047c.606-1.734 2.773-8.754 3.813-12.047", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M19.667 19.667h3.466l4.334 16.466m-15.6-16.466H16.2l4.247 15.6", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", fill: "none" })
  ] })
}, u0 = {
  halley3: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M40.12 70.16c15.13 0 29.6-12.5 29.6-29.61C69.72 21.54 53.14 11 40.12 11c-15.13 0-29.6 12.5-29.6 29.61 0 19.01 16.58 29.55 29.6 29.55Z", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M40.12 21.58c0 8.84-10.16 19-19 19 8.84 0 19.02 9.34 19.02 18.18 9.34 0 19.48-9.53 19.48-22.22C59.62 14.9 40.18 11 40.18 11", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M40.12 59.58c0-8.84 10.16-19 19-19-8.84 0-19-10.16-19-19-9.75 0-19.5 10.46-19.5 23.04 0 21.64 19.44 25.54 19.44 25.54", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
  ] }),
  storybook: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M17 21v46h42a4 4 0 0 0 4-4V18", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M20 12h37.5a5.5 5.5 0 1 1 0 11h-7M17 23h19.5", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M36 20h15v29l-7.5-5-7.5 5V20Z", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
  ] }),
  halley2: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M29.62 61.57c5.843 0 10.58-4.737 10.58-10.58s-4.737-10.58-10.58-10.58-10.58 4.737-10.58 10.58 4.737 10.58 10.58 10.58Z", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M35.44 17.54 15.8 37.18c-7.63 7.63-7.63 20 0 27.63 7.63 7.63 20 7.63 27.63 0l19.63-19.63M32.21 33.43 50.1 15.55m-2.92 32.84 17.88-17.88m-23.27 8.31L71.51 9.1", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
  ] }),
  halley: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m47.9 48.93 16.92-16.92-2.83-2.83L47 44.17c.52 1.55.81 3.14.9 4.76Zm-5.25-11.81c.48.48.92.98 1.33 1.5l27.88-27.88-2.83-2.83-27.88 27.88c.52.41 1.02.85 1.5 1.33Zm-7.04-4.34L50.6 17.79l-2.83-2.83-16.92 16.92c1.61.09 3.21.39 4.76.9Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M29.89 71.99c-5.66 0-11.32-2.15-15.63-6.46-8.62-8.62-8.62-22.64 0-31.26L29.8 18.73l2.83 2.83L17.09 37.1c-7.06 7.06-7.06 18.55 0 25.61 7.06 7.06 18.55 7.06 25.61 0l15.54-15.54L61.07 50 45.53 65.54C41.22 69.85 35.56 72 29.9 72l-.01-.01Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { d: "M29.89 62.03c-6.54 0-11.86-5.32-11.86-11.86h4c0 4.33 3.53 7.86 7.86 7.86v4Z", fill: "currentColor" })
  ] }),
  loggie: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M38.349 28.5H17.748a4.39 4.39 0 0 1-4.386-4.386 4.392 4.392 0 0 1 3.214-4.225l1.668-.46-.215-1.717a8.761 8.761 0 0 1-.07-1.101c0-4.745 3.861-8.605 8.607-8.605a8.6 8.6 0 0 1 8.201 5.987 9.63 9.63 0 0 0-3.453 2.371l2.93 2.723a5.547 5.547 0 0 1 4.105-1.79 5.608 5.608 0 0 1 5.602 5.601 5.608 5.608 0 0 1-5.602 5.602Zm19.65-9.5H47.114c-1.45-3.244-4.639-5.548-8.379-5.695a12.6 12.6 0 0 0-12.169-9.299c-6.95 0-12.606 5.655-12.606 12.605v.023a8.411 8.411 0 0 0-4.596 7.48c0 4.624 3.76 8.386 8.384 8.386H38.35c5.26 0 9.54-4.253 9.597-9.5H58a1 1 0 0 1 1 1v44a1 1 0 0 1-1 1H34c-.55 0-1-.448-1-1V53.833h-4V68c0 2.757 2.245 5 5 5h24c2.758 0 5-2.243 5-5V24c0-2.757-2.242-5-5-5Z", fill: "#D92327" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M44 65a2 2 0 1 0 4.001-.001A2 2 0 0 0 44 65ZM23 37a2 2 0 1 0 .001 4.001A2 2 0 0 0 23 37Zm0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 23 45Zm6 4h26v-4H29v4Zm0-8h26v-4H29v4Z", fill: "#D92327" })
  ] }),
  nutsandbolts: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#b57ff8c8-9b82-49c8-9e5d-1d67a0cbe4df)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M56.88 50c0 9.11-7.39 16.5-16.5 16.5s-16.5-7.35-16.5-16.76c0-9.11 7.69-18.84 20.1-18.84 14.43 0 22.19 7.75 25.78 16.81C62.23 45.86 56.88 50 56.88 50Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M46.94 45.11a2.55 2.55 0 1 0 0-5.1 2.55 2.55 0 0 0 0 5.1Z", fill: "#D92327" }),
      /* @__PURE__ */ e.jsx("path", { d: "M54.92 23.96H25.85L11.31 49.14l14.54 25.18h29.07L65.15 56.6", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M40.54 10.18c4.5-4.74 9.97-4.16 9.97-4.16s.27 4.96-4.15 9.21c-4.72 4.54-9.37 3.2-9.37 3.2s-.46-4.03 3.55-8.25Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "b57ff8c8-9b82-49c8-9e5d-1d67a0cbe4df", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M9 4h62.77v72.32H9z" }) }) })
  ] }),
  bugsnatch: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M47.074 65.006c-7.45 0-13.89-4.346-16.967-10.627a17.227 17.227 0 0 0 6.025 1.089c8.7 0 15.894-6.48 17.064-14.86a4.375 4.375 0 0 1 1.628 2.599 4.402 4.402 0 0 1-.8 3.567l-1.2 1.6 3.2 2.4 1.198-1.6a8.466 8.466 0 0 0 1.522-6.767 8.463 8.463 0 0 0-4.053-5.63l-1.309-.757v-7.708c7.325 2.604 12.592 9.587 12.592 17.794 0 10.42-8.478 18.9-18.9 18.9ZM23.382 26.979a4.765 4.765 0 0 1 4.76-4.761h12.48c1.191 0 2.313.46 3.171 1.226-9.276 1.337-16.767 8.252-18.96 17.225a10.91 10.91 0 0 1-1.45-5.451v-8.24Zm10.5-14.011c2.481 0 4.5 2.018 4.5 4.5v.75h-9v-.75c0-2.482 2.018-4.5 4.5-4.5ZM28.42 49a18.79 18.79 0 0 1-.245-2.894c0-10.421 8.478-18.9 18.9-18.9.782 0 1.55.063 2.307.155v10.857c0 7.306-5.945 13.25-13.25 13.25a13.19 13.19 0 0 1-7.44-2.283L28.42 49Zm25.258-24.82c1.514-1.677 2.084-4.082 1.333-6.307l-.638-1.895-3.79 1.277.637 1.896a2.386 2.386 0 0 1-1.065 2.82l-1.759 1.016a8.809 8.809 0 0 0-6.014-4.565v-.954c0-4.687-3.814-8.5-8.5-8.5-4.687 0-8.5 3.813-8.5 8.5v1.202a8.797 8.797 0 0 0-5.118 4.5l-2.075-1.198a2.388 2.388 0 0 1-1.066-2.821l.64-1.896-3.793-1.277-.638 1.895a6.403 6.403 0 0 0 2.854 7.56l3.196 1.848v2.566H16.7a8.773 8.773 0 0 0-5.75 2.147l-1.745 1.512 2.62 3.023 1.746-1.513a4.773 4.773 0 0 1 3.13-1.17h2.682v1.372c0 .83.083 1.646.214 2.449l-1.423.823a6.383 6.383 0 0 0-1.909 9.352l1.2 1.6 3.2-2.4-1.2-1.6a2.352 2.352 0 0 1-.428-1.905 2.351 2.351 0 0 1 1.14-1.585l.633-.366a15.019 15.019 0 0 0 3.073 4.345l.296.29c.008 1.769.223 3.49.614 5.146l-.002.002.003.002a22.821 22.821 0 0 0 4.308 8.9l-9.974 8.544 2.602 3.038 10.116-8.665a22.8 22.8 0 0 0 15.23 5.818c12.626 0 22.9-10.273 22.9-22.9 0-10.331-6.88-19.082-16.297-21.925Z", fill: "#D92327" }) }),
  locker: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#220e3690-9b2f-4b8e-a696-9d51e25d34ba)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "m49.65 25.13-1.56-7.78c-.98-4.87-5.28-8.54-10.24-8.34-6.35.26-10.71 6.05-9.51 12.02l1.62 8.06", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M47.4 58.81c-1.46 1.65-3.45 2.82-5.75 3.19-3.57.57-6.86-.75-9.04-3.11m-2.83-15.28v3.74m21.35-3.74v3.74m-10.22-3.74v5.9c0 1.33-1.08 2.41-2.41 2.41", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M33.2 72h-6.9c-4.03 0-7.3-3.27-7.3-7.3v-6.23m42-.67v6.9c0 4.03-3.27 7.3-7.3 7.3h-6.3M19 43.6v-6.3c0-4.03 3.27-7.3 7.3-7.3h27.4c4.03 0 7.3 3.27 7.3 7.3v6.3", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "220e3690-9b2f-4b8e-a696-9d51e25d34ba", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M17 7h46v67H17z" }) }) })
  ] }),
  androidCollar: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M49.966 31.89a2.812 2.812 0 1 0 0-5.623 2.812 2.812 0 0 0 0 5.624Zm-19.922 0a2.812 2.812 0 1 0 0-5.623 2.812 2.812 0 0 0 0 5.624Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M63.437 39.316V37.74a22.624 22.624 0 0 0-6.506-16.162l7.5-7.5a1.876 1.876 0 0 0-2.681-2.625l-7.688 7.696A24.066 24.066 0 0 0 40 14.81a24.075 24.075 0 0 0-14.063 4.322l-7.65-7.678a1.88 1.88 0 0 0-2.662 2.653l7.5 7.5a22.622 22.622 0 0 0-6.563 16.18v1.576A8.437 8.437 0 0 0 10 47.547v15a6.563 6.563 0 1 0 13.125 0v-.937l-3.75-1.763v2.7a2.812 2.812 0 1 1-5.625 0V53.37l16.716 7.782 9.45-8.232 9.459 8.232 16.875-7.857v9.253a2.812 2.812 0 1 1-5.625 0v-2.7l-3.75 1.763v.937a6.563 6.563 0 1 0 13.125 0v-15a8.438 8.438 0 0 0-6.563-8.23v-.002ZM40 18.56c11.41 0 19.687 8.072 19.687 19.18v1.979l-19.771 8.663-19.604-8.588V37.74c0-11.11 8.279-19.181 19.688-19.181ZM29.837 56.726 13.75 49.235v-1.688a4.688 4.688 0 0 1 4.303-4.687l18.403 8.062-6.619 5.804Zm20.157 0-6.619-5.766 18.44-8.1a4.688 4.688 0 0 1 4.435 4.687v1.613l-16.256 7.566Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M39.916 63.466a2.812 2.812 0 1 0 0-5.624 2.812 2.812 0 0 0 0 5.624Z", fill: "#D8262C" })
  ] }),
  emotionNormalize: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("g", { clipPath: "url(#ee4df90c-167b-448a-ab30-5dba022c0ddc)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: /* @__PURE__ */ e.jsx("path", { d: "M23.39 13 10.87 46.97h19.1l-7.51 20.98h.69l32.49-39.47H37.41L43.98 13H23.39Zm26.65 34.8H42v8.1h8.04m11.13-8.1h-8.04v.55l6.04 6.6v.95h-8.04m21.17-8.1h-8.04v.55l6.04 6.6v.95h-8.04", fill: "none" }) }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "ee4df90c-167b-448a-ab30-5dba022c0ddc", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M8 11h64.3v58.95H8z" }) }) })
  ] }),
  analyticsCollector: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#a409605f-6a46-40b4-a544-f73c123ea70c)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "m14.05 38.41 20.32-20.55 5.7 4.7L50.63 12", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M41.56 12h9.07v9.07M34.55 38.06v-11m8 11v-9m8 9v-13m9 13-.04-11", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m35 38.36 9.17 9.17h31.39l-9.46-9.17H35Zm0 0v30.52h31V47.53", strokeLinejoin: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m37.56 38.18-9.18 9.18H5l9-9h21v30.52H14V47.36", strokeLinejoin: "round", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "a409605f-6a46-40b4-a544-f73c123ea70c", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M3 10h74.56v60.88H3z" }) }) })
  ] }),
  loggy: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#b59e18ab-0238-4061-81f6-ee36b5bb4476)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "m51.36 37.11-13.57 5.95c-2.8 1.04-5.35 2.68-7.46 4.79l-7.72 7.72L9.17 42.14l8.3-8.3c2.21-2.21 3.89-4.88 4.93-7.82l5.3-12.48c.97-2.75 4.48-3.55 6.54-1.49l18.54 18.54c2.04 2.04 1.29 5.51-1.42 6.52Z", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m31.09 47.09 18.38 18.38a4.008 4.008 0 0 1 0 5.66 4.008 4.008 0 0 1-5.66 0L25.44 52.74M12 39.31l-2.83-2.83a4.008 4.008 0 0 1 0-5.66 4.008 4.008 0 0 1 5.66 0l2.83 2.83m7.77-14.78 20.58 20.58m.95-24.11c13.81 0 25 11.19 25 25 0 9.25-5.03 17.33-12.5 21.66m8.42-46.66c1.62 1.35 3.11 2.86 4.43 4.5M47.56 8c5.46 0 10.6 1.38 15.09 3.8", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "b59e18ab-0238-4061-81f6-ee36b5bb4476", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M6 6h67.96v68.3H6z" }) }) })
  ] }),
  japx: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M47.5 30a1 1 0 0 1-1-1v-5c0-2.757-2.243-5-5-5h-1v4h1a1 1 0 0 1 1 1v5c0 1.13.391 2.162 1.025 3a4.954 4.954 0 0 0-1.025 3v5a1 1 0 0 1-1 1h-1v4h1c2.757 0 5-2.243 5-5v-5a1 1 0 0 1 1-1h1v-4h-1Zm-19-6v5a1 1 0 0 1-1 1h-1v4h1a1 1 0 0 1 1 1v5c0 2.757 2.243 5 5 5h1v-4h-1a1 1 0 0 1-1-1v-5c0-1.13-.391-2.162-1.025-3a4.954 4.954 0 0 0 1.025-3v-5a1 1 0 0 1 1-1h1v-4h-1c-2.757 0-5 2.243-5 5Z", fill: "#D92327" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M65 31.404A6.604 6.604 0 0 1 58.404 38h-.84c1.048-4.05 1.928-9.01 2.381-15H65v8.404ZM25.884 50c-1.494-1.962-6.027-9.079-7.563-24.835-.194-1.998-1.292-3.887-2.353-5.714-.666-1.147-1.345-2.317-1.762-3.45h42.058c-.35 21.668-6.327 31.533-8.108 34H25.884ZM22 58h31v-4H22v4Zm36 4c1.103 0 2 .897 2 2v6H15v-6c0-1.103.897-2 2-2h41ZM32 10c0-1.103.897-2 2-2h7c1.103 0 2 .897 2 2v2H32v-2Zm28.18 9c.064-1.602.1-3.266.1-5v-2H47v-2c0-3.309-2.69-6-6-6h-7c-3.309 0-6 2.691-6 6v2H9.8v2c0 2.795 1.438 5.273 2.71 7.46.885 1.523 1.72 2.963 1.831 4.093 1.273 13.066 4.532 20.664 6.811 24.541A4.005 4.005 0 0 0 18 54v4h-1c-3.309 0-6 2.691-6 6v10h53V64c0-3.309-2.69-6-6-6h-1v-4c0-2.206-1.794-4-4-4h-.092c1.044-1.824 2.301-4.444 3.483-8h2.013C64.247 42 69 37.247 69 31.404V19h-8.82Z", fill: "#D92327" })
  ] }),
  viper: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M47.31 15.395a2.673 2.673 0 1 1-5.346 0 2.673 2.673 0 0 1 5.345 0Zm-12.06 7.841.322 1.974.32 1.974h.002l-.016.003a12.043 12.043 0 0 0-.461.094 16.45 16.45 0 0 0-1.34.364c-1.11.35-2.427.895-3.501 1.68l-2.359-3.231c1.563-1.141 3.334-1.846 4.653-2.263a20.506 20.506 0 0 1 2.17-.557l.145-.027.043-.007.014-.003h.005l.003-.001Zm.646 3.948Zm-4.381 23.382A4.265 4.265 0 0 0 32.418 59H62v4H32.418a8.265 8.265 0 0 1-1.747-16.344l.844 3.91Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M44.637 9.187a6.178 6.178 0 0 0-5.297 2.938l-.59.963-4.484-.039h-2.294a2.163 2.163 0 0 0-2.028 2.916m0 0 1.466 3.944a3.213 3.213 0 0 0 3.011 2.093h.876l1.73 1.838a2.29 2.29 0 0 0 1.666.72h9.97a5.607 5.607 0 0 0 4.002-1.682l2.777-2.833 2.856 2.8-2.777 2.833a9.608 9.608 0 0 1-6.859 2.881h-9.969a6.287 6.287 0 0 1-4.579-1.978l-.598-.636a7.214 7.214 0 0 1-5.855-4.642l-1.467-3.945c-1.495-4.026 1.483-8.309 5.778-8.309h2.31l2.32.02a10.184 10.184 0 0 1 8.035-3.882 10.2 10.2 0 0 1 8.617 4.736c3.131.124 6.265.76 8.76 2.25 2.944 1.759 4.885 4.655 4.885 8.777 0 2.574-1.078 4.877-2.449 6.88-1.367 2-3.163 3.891-4.826 5.625l-.247.257c-1.619 1.686-3.092 3.221-4.197 4.743-1.165 1.604-1.718 2.928-1.718 4.095 0 1.443.535 2.218 1.325 2.73.92.598 2.388.951 4.33.951h9.466v4h-9.466c-2.303 0-4.663-.398-6.508-1.596-1.977-1.283-3.147-3.35-3.147-6.085 0-2.416 1.127-4.581 2.481-6.446 1.274-1.752 2.927-3.474 4.483-5.094l.311-.324c1.696-1.768 3.26-3.43 4.412-5.114 1.148-1.678 1.75-3.185 1.75-4.622 0-2.637-1.133-4.266-2.936-5.343-1.934-1.156-4.73-1.708-7.899-1.708h-1.268l-.54-1.147a6.21 6.21 0 0 0-5.619-3.565", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M43.754 33.77c-3.403 3.571-6.537 8.387-6.537 13.915 0 2.891.55 4.944 1.36 6.42.801 1.459 1.92 2.468 3.266 3.186C44.642 58.786 48.362 59 52 59v4c-3.584 0-8.255-.16-12.04-2.18-1.95-1.04-3.672-2.574-4.89-4.79-1.208-2.2-1.853-4.952-1.853-8.345 0-7.04 3.955-12.807 7.642-16.675a42.43 42.43 0 0 1 5.117-4.546 37.477 37.477 0 0 1 1.698-1.21 24.492 24.492 0 0 1 .627-.407l.04-.024.011-.007.004-.003h.002c0-.001.001-.001 1.038 1.709l1.037 1.71-.002.001-.021.014-.1.062a33.499 33.499 0 0 0-1.925 1.349 38.453 38.453 0 0 0-4.63 4.112Zm-15.719-4.35c-.517-.333-1.817-.301-2.728 1.112l-3.362-2.167c1.729-2.683 5.346-4.183 8.257-2.308 2.91 1.876 3.039 5.789 1.312 8.472l-3.364-2.165c.91-1.414.402-2.611-.114-2.944", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M28.69 16.334C19.14 20.648 12.5 30.256 12.5 41.409c0 15.188 12.313 27.5 27.5 27.5 12.711 0 23.413-8.625 26.561-20.346.612-2.28.94-4.678.94-7.154 0-5.906-1.86-11.371-5.026-15.85l3.267-2.309A31.365 31.365 0 0 1 71.5 41.41c0 2.83-.374 5.576-1.076 8.19v.001C66.818 63.025 54.566 72.91 40 72.91c-17.396 0-31.5-14.103-31.5-31.5 0-12.782 7.614-23.783 18.544-28.72l1.647 3.645Z", fill: "#D8262C" })
  ] }),
  retrofitConverter: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#9b332062-dac8-4c98-a8de-b2c94972285b)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M50.62 29.39a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-21.24 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", fill: "#D92327" }),
      /* @__PURE__ */ e.jsx("path", { d: "M55.3 18.31 64.61 9m-39.88 9.31L15.42 9", stroke: "#D8262C", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M40 13.16c13.67 0 23 10.05 23 22.46v3.46c3.87 0 7 3.13 7 7v15c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1M40 13.16c-13.67 0-23 10.05-23 22.46v3.46c-3.87 0-7 3.13-7 7v15c0 2.76 2.24 5 5 5s5-2.24 5-5v-1", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M50.63 46.46c1.24 1.98 1.94 4.34 1.89 6.85-.12 6.91-5.83 12.42-12.75 12.3M31.21 62a12.479 12.479 0 0 1-3.73-9.14c.12-6.91 5.83-12.42 12.75-12.3 1.16.02 2.28.2 3.34.51", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m37.9 34.47 6.41 6.41-6.41 6.41m6.41 11.9-6.41 6.42 6.41 6.41", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "9b332062-dac8-4c98-a8de-b2c94972285b", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M8 7h64v66.43H8z" }) }) })
  ] }),
  actionChainer: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#8fd5ce72-f7f5-433f-9cbe-d0ff386e1519)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M45.26 40.09c-7.35-1.03-13-7.34-13-14.97C32.25 16.77 39.02 10 47.38 10S62.5 16.77 62.5 25.12c0 5.22-2.64 9.82-6.67 12.54M32.25 55.73c0-4.18 1.69-7.96 4.43-10.69m0 0a15.07 15.07 0 0 1 10.69-4.43c8.35 0 15.12 6.77 15.12 15.12s-6.77 15.12-15.12 15.12c-6.77 0-12.5-4.45-14.43-10.59", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M32.24 25.25c7.35 1.03 13 7.34 13 14.97 0 8.35-6.77 15.12-15.12 15.12S15 48.58 15 40.23c0-7.31 5.18-13.4 12.07-14.81", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "8fd5ce72-f7f5-433f-9cbe-d0ff386e1519", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M13 8h51.5v64.85H13z" }) }) })
  ] }),
  eightshiftCodingStandard: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#c541bc7a-6ebf-4be7-aa73-0a1fe1b59ca1)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "m48.91 47.32 11.94 10.57c2.11 1.91 2.19 5.2.17 7.21a4.988 4.988 0 0 1-7.21-.17l-10.5-12.02", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M30.89 56.78c12.09 0 21.89-9.8 21.89-21.89S42.98 13 30.89 13 9 22.8 9 34.89s9.8 21.89 21.89 21.89Z", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M30.89 48.71c7.632 0 13.82-6.187 13.82-13.82s-6.188-13.82-13.82-13.82c-7.633 0-13.82 6.187-13.82 13.82s6.187 13.82 13.82 13.82Z", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m36.89 27.75-9.63 9.62 9.95 9.95m25.01-16.46 7.18 7.17-7.42 7.42M57.8 23.08l-5.12 9.74", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "c541bc7a-6ebf-4be7-aa73-0a1fe1b59ca1", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M7 11h65.22v57.56H7z" }) }) })
  ] }),
  eightshiftDashboardMonitor: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#fa4060d1-31f9-47ee-a144-aacf7aecc8c0)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M38.61 59H16c-2.76 0-5-2.24-5-5V14h45c2.76 0 5 2.24 5 5v16.65", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M53 66c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M53 55a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM27.75 37.61l-2.97-1.05a6.547 6.547 0 0 1-4-8.36 6.547 6.547 0 0 1 8.36-4l2.97 1.05", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m33.97 36.58-5.21-1.87m7.55-5.01-5.55-1.99", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M22.02 25.2c-1.51-.53-3.07.67-3.6 2.18-.53 1.51-.15 3.25 1.36 3.78m7.36 8.13 5.85-16.31", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M19.76 27.88C15.69 26.45 11 23.45 11 16m42 29 7.39-7.39m-3.85 15.93v10.45M48 50l-7.39-7.39", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "fa4060d1-31f9-47ee-a144-aacf7aecc8c0", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M9 12h62v56H9z" }) }) })
  ] }),
  eightshiftGdpr: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#6d947cbc-7947-41d2-a0cc-c23e805d3752)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M58.75 65h-37.5C17.8 65 15 62.2 15 58.75v-37.5C15 17.8 17.8 15 21.25 15h37.5C62.2 15 65 17.8 65 21.25v37.5C65 62.2 62.2 65 58.75 65Z", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M50 27H23v27h27V27Z", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m29.99 38.01 6 5.99L55 24.99", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "6d947cbc-7947-41d2-a0cc-c23e805d3752", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M13 13h54v54H13z" }) }) })
  ] }),
  eightshiftForms: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#b212a30b-8a5c-4319-844a-5cc0a5b35d11)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M57 28H23v22h34V28Z", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M33 35v10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M31 34h4m-4 10h4m23.75 21h-37.5C17.8 65 15 62.2 15 58.75v-37.5C15 17.8 17.8 15 21.25 15h37.5C62.2 15 65 17.8 65 21.25v37.5C65 62.2 62.2 65 58.75 65Z", strokeLinecap: "square", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "b212a30b-8a5c-4319-844a-5cc0a5b35d11", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M13 13h54v54H13z" }) }) })
  ] }),
  eightshiftDocs: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#74116306-3519-4f7a-bb59-c558ed93b8b5)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M61 22.63c4.09 0 7.41 3.32 7.41 7.41v27.78c0 4.09-3.32 7.41-7.41 7.41H18.41c-4.09-.01-7.41-3.32-7.41-7.42V30.03c0-4.09 3.32-7.41 7.41-7.41", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M39.71 17.53c-4.02-3.97-8.41-5.67-21.3.74v37.88c0 .41.33.74.74.74h15.38a5.17 5.17 0 0 1 5.17 5.17v2.68-2.68a5.17 5.17 0 0 1 5.17-5.17h15.38c.41 0 .74-.33.74-.74V18.27c-12.88-6.41-17.27-4.71-21.28-.74Z", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M61 28.58c-12.89-6.41-17.28-4.7-21.3-.74M61 40.05c-12.89-6.41-17.28-4.7-21.3-.74M61 51.51c-12.89-6.41-17.28-4.7-21.3-.74", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "74116306-3519-4f7a-bb59-c558ed93b8b5", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M9 12h61.41v55.22H9z" }) }) })
  ] }),
  eightshiftFrontendLibs: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#d52dd685-4b43-4f14-83c7-7f9f9c5e6138)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M41.11 14v15.36h15.35", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M57.46 59.89v6.86H16V13h26.11l15.35 15.36v15", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M63.68 44h-33v15h33V44Z", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "d52dd685-4b43-4f14-83c7-7f9f9c5e6138", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M14 11h51.68v57.75H14z" }) }) })
  ] }),
  eightshiftLibs1: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#6483b84f-b870-4980-baac-7fbb0ef69e71)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M44.43 14v15.36h15.35", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M61 67H19V13h26.81L61 28.43V67Z", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m41.7 58.66-3.98-1.4a8.787 8.787 0 0 1-5.37-11.22 8.787 8.787 0 0 1 11.22-5.37l3.98 1.4m2.49 15.2-6.99-2.5m9.72-6.17-6.6-2.36", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M34 42c-2.03-.71-4.11.9-4.83 2.92-.71 2.03-.2 4.37 1.83 5.08m9.87 10.91 7.85-21.89", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M30.96 45.59C25.5 43.67 19 39 19 29", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "6483b84f-b870-4980-baac-7fbb0ef69e71", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M17 11h46v58H17z" }) }) })
  ] }),
  eightshiftLibs: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#3d82a66e-25df-490d-8f7b-15f3b6effac0)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M67 13H13v54h54V13Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M61 63a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-42 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm42-42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-42 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", fill: "#D92327" }),
      /* @__PURE__ */ e.jsx("path", { d: "M40 59c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M45.56 55.78c2.77-7.93 7.6-22.91 7.6-25.17 0-5.69-4.99-6.54-6.89-4.18-4.18 5.18 5.03 11.33 2.91 18.42m-4.76 11.62-7.51-24.85m-2.14 25.97c.89-2.48 3.55-10.16 5.1-14.94m-6.47-9.59h5.36m-3.99 23.41-7.51-24.85m-4.57 1.44h6.43", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "3d82a66e-25df-490d-8f7b-15f3b6effac0", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M11 11h58v58H11z" }) }) })
  ] }),
  boilerplate: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#6242c987-27ea-4f6e-8ebc-c4c779f67374)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M67 13H13v54h54V13Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M61 63a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-42 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm42-42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-42 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", fill: "#D92327" }),
      /* @__PURE__ */ e.jsx("path", { d: "M40 59c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M45.56 55.78c2.77-7.93 7.6-22.91 7.6-25.17 0-5.69-4.99-6.54-6.89-4.18-4.18 5.18 5.03 11.33 2.91 18.42m-4.76 11.62-7.51-24.85m-2.14 25.97c.89-2.48 3.55-10.16 5.1-14.94m-6.47-9.59h5.36m-3.99 23.41-7.51-24.85m-4.57 1.44h6.43", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "6242c987-27ea-4f6e-8ebc-c4c779f67374", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M11 11h58v58H11z" }) }) })
  ] }),
  secretsCli: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#7b9b4ab6-7355-4ebe-b0e3-bfc8e2fd588c)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M33.57 44.96a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-12 5.37a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-12 5.37a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 5.37a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", fill: "currentColor" }),
      /* @__PURE__ */ e.jsx("path", { d: "M50.99 33.84v-9.1c0-5.65-3.97-10.7-9.54-11.59-7.14-1.13-13.3 4.35-13.3 11.27v9.42", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M57.13 66.82H22c-2.21 0-4-1.79-4-4V37.84c0-2.21 1.79-4 4-4h35.13c2.21 0 4 1.79 4 4v24.99c0 2.2-1.79 3.99-4 3.99Z", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "square", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "7b9b4ab6-7355-4ebe-b0e3-bfc8e2fd588c", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M16 11h47.13v57.82H16z" }) }) })
  ] }),
  jsonapiQuerybuilder: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#7cba23f5-900c-48ef-a878-753eca73dbff)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M51.53 50.41c7.693 0 13.93-6.237 13.93-13.93s-6.237-13.93-13.93-13.93S37.6 28.787 37.6 36.48s6.237 13.93 13.93 13.93Z", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M16.72 65.52h26.02m6.72-42.82V14H16.72v41.8m35.74-5.55V22.7m-3 36.1v-8.55M16.72 65.52c-3.71 0-6.72-3.01-6.72-6.72v-2.84h29.07m10.39 2.84c0 3.71-3.01 6.72-6.72 6.72", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M24.74 28.05a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", fill: "currentColor" }),
      /* @__PURE__ */ e.jsx("path", { d: "M38.24 37.05h6.5m-16-3h9.5m-9.5-8h12.89m19.68 20.34 9.7 9.83", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "7cba23f5-900c-48ef-a878-753eca73dbff", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M8 12h64.43v55.52H8z" }) }) })
  ] }),
  chartsPainter: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#565d328f-0ba9-42ac-a0b9-ff3a7d8d349a)", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M69.65 40.33c0 16.2-13.13 29.33-29.33 29.33-17.61 0-8.54-10.9-13.75-15.65C20.69 48.64 11 56.58 11 40.33 11 24.13 24.13 11 40.33 11c16.2 0 29.32 13.13 29.32 29.33Z", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M39.24 54.13a5.82 5.82 0 1 0 0-11.64 5.82 5.82 0 0 0 0 11.64Zm-4.51-8.43L13.17 29.25M43.45 45.7l22.6-19.46M39.24 53.53l1.09 16.12m-2.18-26.56-4.89-31.23m11.2 39.19 16.05 10.54m-24.8-9.45-7.19 7.53", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "565d328f-0ba9-42ac-a0b9-ff3a7d8d349a", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M9 9h62.65v62.65H9z" }) }) })
  ] }),
  princeofversionsFlutter: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M65 35H12V7.941l18.642 10.716-1.995 3.468L16 14.855V31h45V14.854l-12.647 7.271-1.995-3.468L65 7.941v27.06Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M48.542 26.773 38.99 13.772l-9.552 13-3.222-2.367L38.99 7.015l12.775 17.39-3.223 2.368ZM46.18 39.374l-7.19 9.788-7.19-9.788h-4.963L38.99 55.917l12.153-16.543H46.18Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "m59.12 39.374-20.13 27.49-20.129-27.49h-4.957L38.99 73.636l25.086-34.262H59.12Zm3.326-4.544h.327l-.213-.155-.114.156Zm-47.238 0h.327l-.115-.155-.212.156Z", fill: "currentColor" })
  ] }),
  princeofversionsIos: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M65 35H12V7.941l18.642 10.716-1.995 3.468L16 14.855V31h45V14.854l-12.647 7.271-1.995-3.468L65 7.941v27.06Z", fill: "#D92327" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M48.542 26.773 38.99 13.772l-9.552 13-3.222-2.367L38.99 7.015l12.775 17.39-3.223 2.368ZM46.18 39.374l-7.19 9.788-7.19-9.788h-4.963L38.99 55.917l12.153-16.543H46.18Z", fill: "#D92327" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "m59.12 39.374-20.13 27.49-20.129-27.49h-4.957L38.99 73.636l25.086-34.262H59.12Zm3.326-4.544h.327l-.213-.155-.114.156Zm-47.238 0h.327l-.115-.155-.212.156Z", fill: "#D92327" })
  ] }),
  mailgunCatcher: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#6b7dee8e-4328-4d1a-b9f9-4454efca0565)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M32.73 31.08a2.23 2.23 0 1 0 0-4.46 2.23 2.23 0 0 0 0 4.46Z", fill: "#D92327" }),
      /* @__PURE__ */ e.jsx("path", { d: "M40.56 27.24c.11.52.16 1.06.16 1.61 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c3.87 0 7.1 2.75 7.84 6.39Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M19.04 36.85a15.73 15.73 0 0 1-2.16-8C16.87 20.1 23.97 13 32.73 13c8.12 0 14.82 6.1 15.74 13.97 0 2.21-1.68 3.99-3.89 3.99a4.01 4.01 0 0 1-3.95-3.34", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M8 36.86h49.19", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M52.34 36.86c.16 1.01.24 2.05.24 3.11 0 11.05-8.95 28-20 28s-20-16.95-20-28c0-1.05.08-2.07.23-3.07m39.77 3.07H73.2M32.73 38.4v29.57m10-29.57v25.57m-20-25.57v24.57M14.4 46.64h36.36m-33.36 10h30.36", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "6b7dee8e-4328-4d1a-b9f9-4454efca0565", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M6 11h67.2v58.97H6z" }) }) })
  ] }),
  prometheus: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#d1444ede-6423-4934-a1c1-57e98224a95c)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "m56.41 51.62 8.89-8.88 8.88 8.88M6.41 42.74l8.89 8.88 8.88-8.88M45.55 16h-10c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4ZM29.93 44.05l8.65 8.8 14.97-15.12", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M65.39 44.12c.11.95.16 1.91.16 2.88 0 13.81-11.19 25-25 25-9.48 0-17.72-5.27-21.96-13.04m-2.96-10.03c-.05-.64-.07-1.28-.07-1.93 0-13.81 11.19-25 25-25 9.35 0 17.51 5.14 21.79 12.74", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "d1444ede-6423-4934-a1c1-57e98224a95c", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M5 6h70.59v68H5z" }) }) })
  ] }),
  phrasingplus: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#352f3457-050f-4a9d-b366-8e32d43769f6)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M19 54V26h5.79c3.66 0 7.29 2.93 7.73 6.56.55 4.56-2.99 8.44-7.44 8.44H23m16 13V24m0 19.58c0-3.4 3.52-6.1 7-5.68 2.9.35 5 2.97 5 5.89V54m9-12.75V71m0-61v24", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M58 61H10V17h31m31 5H48", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "352f3457-050f-4a9d-b366-8e32d43769f6", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M8 10h64v61H8z" }) }) })
  ] }),
  fiscalizer: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#b4e1974a-e322-4da4-a802-4e7ff20f4059)", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M45.64 66.1H34.05C19.66 66.1 8 54.44 8 40.05S19.66 14 34.05 14h11.59", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M45.64 66.1c14.387 0 26.05-11.663 26.05-26.05S60.027 14 45.64 14 19.59 25.663 19.59 40.05 31.253 66.1 45.64 66.1ZM8 40.05h11.59M10.9 53.2h11.59M10.9 26.9h11.59", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M52.27 31.34c-4.58-4.71-12.95-3.84-12.95 1.92 0 6.77 13.3 5.11 13.3 12.54 0 5.38-9.17 8.29-14.72 2.39m7.74 3.22v5.57m0-33.86v5.57", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "b4e1974a-e322-4da4-a802-4e7ff20f4059", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M6 12h67.69v56.1H6z" }) }) })
  ] }),
  enumeration: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#2243c74e-e798-41a0-a62f-215549aaaeab)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M56.12 48.66 39.49 30.99l5.09-7.34h23.07l5.09 7.34-16.62 17.67Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M13.72 65.52h26.02m6.72-46.47V14H13.72v41.8m32.74 3V38.95M13.72 65.52C10.01 65.52 7 62.51 7 58.8v-2.84h19.07m20.39 2.84c0 3.71-3.01 6.72-6.72 6.72", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M21.74 25.05a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7.66a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 7.67a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-12 7.67a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", fill: "#D92327" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "2243c74e-e798-41a0-a62f-215549aaaeab", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M5 12h70.31v55.52H5z" }) }) })
  ] }),
  phrasing: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M26 29v26h-4V25h7.792c4.705 0 9.153 3.718 9.713 8.32.693 5.713-3.738 10.68-9.429 10.68H28v-4h2.076c3.297 0 5.862-2.874 5.459-6.197-.31-2.544-3.013-4.803-5.743-4.803H26Zm20 26h-4V25h4v30Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M46 44.583h-4c0-4.597 4.558-8.231 9.237-7.662C55.124 37.393 58 40.838 58 44.8V55h-4V44.8c0-1.988-1.418-3.686-3.245-3.909-2.388-.29-4.755 1.597-4.755 3.692ZM63 9h4v63h-4V9Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M17 60h46v4H13V16h50v4H17v40Z", fill: "#D8262C" })
  ] }),
  mobxJsonapi: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M12.892 17.646a.203.203 0 0 0-.018.073c0 .005 0 .026.018.072.019.05.062.137.156.258.196.255.56.59 1.172.974 1.229.77 3.14 1.537 5.679 2.21 5.049 1.34 12.135 2.19 20.039 2.19 7.904 0 14.989-.85 20.037-2.19 2.54-.673 4.45-1.44 5.679-2.21.612-.383.976-.72 1.172-.974.094-.121.137-.208.156-.258.018-.046.018-.067.018-.072 0-.006 0-.027-.018-.073a1.065 1.065 0 0 0-.156-.258c-.196-.255-.56-.59-1.172-.974-1.229-.77-3.14-1.538-5.679-2.211-5.049-1.339-12.133-2.19-20.037-2.19s-14.99.851-20.039 2.19c-2.54.673-4.45 1.44-5.679 2.21-.612.384-.976.72-1.172.975a1.06 1.06 0 0 0-.156.258Zm5.982-7.31c5.47-1.45 12.917-2.323 21.064-2.323S55.531 8.886 61 10.336c2.72.722 5.066 1.615 6.778 2.689C69.388 14.034 71 15.568 71 17.719c0 2.15-1.612 3.684-3.222 4.693C66.066 23.486 63.72 24.38 61 25.1c-5.47 1.45-12.915 2.324-21.062 2.324-8.148 0-15.594-.874-21.064-2.324-2.72-.721-5.066-1.614-6.778-2.688-1.61-1.009-3.222-2.543-3.222-4.693 0-2.15 1.612-3.685 3.222-4.694 1.712-1.074 4.058-1.967 6.778-2.689Zm48.104 21.87a.24.24 0 0 0 .022-.09h4c0 2.247-1.742 3.83-3.473 4.865-1.852 1.107-4.398 2.023-7.367 2.75l-.951-3.885c2.788-.683 4.9-1.482 6.267-2.299.681-.407 1.094-.77 1.32-1.05a1.19 1.19 0 0 0 .182-.291ZM67 46.515h4c0 1.9-1.258 3.327-2.615 4.307-1.404 1.013-3.32 1.859-5.54 2.56l-1.205-3.815c2.027-.64 3.49-1.33 4.404-1.989.451-.326.706-.6.838-.796.12-.177.118-.258.118-.267Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M9 60.846V18h4v42.846c0 .019.066.566 1.41 1.487 1.237.849 3.15 1.72 5.674 2.5 5.023 1.551 12.07 2.622 19.916 2.622 7.847 0 14.893-1.07 19.916-2.623 2.524-.78 4.437-1.65 5.674-2.499 1.344-.921 1.41-1.468 1.41-1.487V18h4v42.846c0 2.105-1.557 3.696-3.148 4.786-1.698 1.164-4.031 2.18-6.755 3.022-5.473 1.69-12.927 2.801-21.097 2.801-8.17 0-15.624-1.11-21.097-2.801-2.724-.842-5.057-1.858-6.755-3.022C10.558 64.542 9 62.951 9 60.846Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M50.994 50.313V50.3a3.259 3.259 0 0 1 .01-.279 6.056 6.056 0 0 1 .757-2.56c.887-1.574 2.63-2.884 5.514-2.884v4c-1.468 0-1.865.556-2.03.849a2.06 2.06 0 0 0-.25.878v7.091c0 1.865-.837 3.361-2.141 4.333-1.242.925-2.8 1.306-4.284 1.306v-4c.853 0 1.507-.225 1.894-.513.323-.241.53-.565.53-1.126v-7.08Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M50.464 35.426c-.387-.288-1.04-.513-1.894-.513v-4c1.484 0 3.042.381 4.284 1.306 1.304.972 2.14 2.468 2.14 4.333v6.235a1.917 1.917 0 0 0 .027.232c.034.195.102.43.224.647.165.293.563.85 2.03.85v4c-2.884 0-4.627-1.312-5.514-2.886a6.06 6.06 0 0 1-.767-2.84v-6.238c0-.561-.207-.884-.53-1.126ZM27.02 32.22c1.241-.926 2.8-1.307 4.284-1.307v4c-.853 0-1.507.226-1.894.514-.323.24-.53.564-.53 1.125v6.238a3.95 3.95 0 0 1-.01.279 6.062 6.062 0 0 1-.757 2.56c-.887 1.575-2.63 2.886-5.514 2.886v-4c1.467 0 1.865-.556 2.03-.85a2.066 2.066 0 0 0 .25-.878v-6.235c0-1.865.837-3.361 2.141-4.333Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M28.88 50.313V50.3a3.942 3.942 0 0 0-.01-.279 6.057 6.057 0 0 0-.757-2.56c-.887-1.574-2.63-2.884-5.514-2.884v4c1.468 0 1.865.556 2.03.849a2.063 2.063 0 0 1 .25.878v7.091c0 1.865.837 3.361 2.141 4.333 1.241.925 2.8 1.306 4.284 1.306v-4c-.853 0-1.507-.225-1.894-.513-.323-.241-.53-.565-.53-1.126v-7.08Zm6.843-3.613a2.583 2.583 0 1 1-5.167 0 2.583 2.583 0 0 1 5.167 0Zm6.817.03a2.583 2.583 0 1 1-5.169.001 2.583 2.583 0 0 1 5.168 0Zm6.816-.03a2.583 2.583 0 1 1-5.169.001 2.583 2.583 0 0 1 5.17-.002Zm-36.961-9.728C10.67 35.921 9 34.335 9 32.116h4c0 .024.046.569 1.476 1.44 1.33.81 3.404 1.608 6.19 2.29l-.952 3.885c-2.972-.728-5.492-1.646-7.319-2.759Zm-.864 13.834C10.18 49.804 9 48.378 9 46.515h4c0 .026.012.41.915 1.079.875.65 2.297 1.335 4.32 1.973l-1.205 3.815c-2.226-.703-4.12-1.552-5.499-2.576Z", fill: "#D8262C" })
  ] }),
  mjolnir: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M41.419 41.419 15.756 67.083 8.124 59.45l22.53-22.53", stroke: "#D8262C", strokeWidth: "4", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "m56.18 10.872 7.632 7.63m1.624 18.968.227-6.986-10.856-10.857L43.948 8.77l-6.986.227-9.905 9.904-.226 6.986L37.69 36.744 40.945 40", stroke: "#D8262C", strokeWidth: "4", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M72.133 52.327c0 9.504-7.704 17.208-17.208 17.208-9.504 0-17.208-7.704-17.208-17.208 0-9.504 7.704-17.208 17.208-17.208 9.504 0 17.208 7.704 17.208 17.208Z", stroke: "#D8262C", strokeWidth: "4", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M47 45h16m-18 7h20m-18 7h16", stroke: "#D8262C", strokeWidth: "4", fill: "none" })
  ] }),
  mina: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "m19.944 19.053-2.767-2.889A32.888 32.888 0 0 1 40 7a32.888 32.888 0 0 1 22.826 9.168l-2.767 2.888A28.889 28.889 0 0 0 40 11a28.889 28.889 0 0 0-20.055 8.053Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "m65.581 19.035-25.58 22.484-25.578-22.486-1.286 1.8A32.856 32.856 0 0 0 7 39.999c0 18.226 14.774 33 33 33s33-14.774 33-33a32.856 32.856 0 0 0-6.133-19.164l-1.286-1.8Zm-50.412 5.98 24.83 21.83 24.836-21.829A28.86 28.86 0 0 1 69 40c0 16.017-12.984 29-29 29S11 56.016 11 40c0-5.366 1.461-10.51 4.169-14.985Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M53 32h4v20h-4V32Zm-30 0h4v20h-4V32Z", fill: "#D8262C" })
  ] }),
  mediaBlender: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M14 23v36h-4V19h11v4h-7Zm51 0H27v-4h42v42H21v-4h44V23Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M23 66h37v4H19V10h41v43h-4V14H23v52Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M46 34h-7v-4h11v11h-4v-7ZM33 47h7v4H29V40h4v7Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "m32.34 50.597-2.83-2.829 16.517-16.516 2.828 2.829L32.34 50.597Z", fill: "#D8262C" })
  ] }),
  material: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M16 17v48h48V17H16Zm44 44H20V21h40v40Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "m21.902 64.272-2.828-2.828 23.771-23.771 20.78 22.332-2.929 2.725-17.955-19.296-20.839 20.838Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "m34.064 47.55-2.665 2.983a12.38 12.38 0 0 1-4.143-9.214c-.021-6.85 5.515-12.422 12.365-12.443 6.852-.021 12.423 5.514 12.444 12.366a12.359 12.359 0 0 1-1.725 6.353l-3.44-2.038a8.359 8.359 0 0 0 1.166-4.303 8.404 8.404 0 0 0-8.431-8.378 8.404 8.404 0 0 0-8.378 8.43 8.38 8.38 0 0 0 2.808 6.245ZM67 21v-4h6v4h-6Zm0 44v-4h6v4h-6Zm-7 3h4v6h-4v-6Zm-44 0h4v6h-4v-6ZM60 8h4v6h-4V8ZM16 8h4v6h-4V8ZM7 21v-4h6v4H7Zm0 44v-4h6v4H7Z", fill: "#D8262C" })
  ] }),
  learnquery: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M35.647 50.402a2.564 2.564 0 1 1-5.129.001 2.564 2.564 0 0 1 5.129-.001Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M15.442 42.174a10.21 10.21 0 0 1 1.25 3.198 15.89 15.89 0 0 1 .324 3.219v13.594c0 .895.206 1.416.576 1.728.477.4 1.146.616 2.096.616h3.706v4h-3.706c-1.843 0-3.426-.509-4.671-1.555-1.348-1.135-2.001-2.787-2.001-4.79V48.592c0-.83-.08-1.634-.24-2.408a6.212 6.212 0 0 0-.765-1.953c-.341-.57-.82-1.086-1.449-1.552-.605-.449-1.426-.812-2.475-1.074l-.039-3.87c2.064-.56 3.304-1.443 3.884-2.624a10.54 10.54 0 0 0 1.084-4.723v-12.91c0-2.005.652-3.659 1.997-4.792 1.244-1.053 2.829-1.564 4.675-1.564h3.706v4h-3.706c-.948 0-1.616.215-2.094.62-.372.313-.578.836-.578 1.737v12.909c0 2.293-.5 4.465-1.494 6.487a7.833 7.833 0 0 1-2.315 2.791 9.26 9.26 0 0 1 2.235 2.509Zm50.24-5.299a14.54 14.54 0 0 1-1.494-6.489V17.477c0-.9-.207-1.423-.58-1.738-.477-.403-1.145-.619-2.092-.619H57.81v-4h3.706c1.844 0 3.43.512 4.674 1.564 1.345 1.137 1.998 2.79 1.998 4.793v12.91c0 1.684.36 3.252 1.084 4.724.58 1.18 1.819 2.062 3.882 2.622l-.038 3.87c-1.048.262-1.87.626-2.474 1.074-.629.466-1.108.983-1.45 1.554a6.205 6.205 0 0 0-.764 1.95c-.16.777-.24 1.58-.24 2.41v13.593c0 2.001-.654 3.654-2.002 4.79-1.243 1.046-2.827 1.554-4.67 1.554H57.81v-4h3.706c.95 0 1.619-.215 2.094-.614.371-.313.578-.835.578-1.73V48.591c0-1.098.107-2.173.323-3.221.235-1.132.653-2.2 1.25-3.196a9.28 9.28 0 0 1 2.235-2.509 7.831 7.831 0 0 1-2.314-2.79Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M22 22h4v34h-4V22Zm33.08 22.772 3.84 1.12a8.897 8.897 0 0 1-2.71 4.277c-.392.346-.8.65-1.241.94-.168.11-.336.213-.521.325l-.405.239c-1.369.807-2.98 1.2-4.802 1.2-1.42 0-2.78-.273-4.062-.82a9.877 9.877 0 0 1-3.395-2.401c-.964-1.042-1.714-2.306-2.254-3.777-.538-1.462-.801-3.1-.801-4.907 0-1.808.263-3.446.8-4.908.543-1.476 1.303-2.744 2.285-3.788a10.072 10.072 0 0 1 3.403-2.39 10.347 10.347 0 0 1 4.099-.82c1.7 0 3.241.358 4.599 1.085 2 1.072 3.957 3.246 4.974 6.178l-3.779 1.311c-.674-1.945-1.94-3.35-3.084-3.963-.753-.403-1.646-.61-2.71-.61a6.36 6.36 0 0 0-2.528.498c-.775.33-1.457.81-2.06 1.452-.6.638-1.082 1.44-1.444 2.426-.366.998-.555 2.172-.555 3.529 0 1.356.189 2.53.555 3.528.364.991.844 1.8 1.436 2.44a5.875 5.875 0 0 0 2.029 1.438c.78.333 1.607.5 2.492.5 1.14 0 2.052-.223 2.768-.646.872-.515 1.13-.684 1.556-1.059a4.917 4.917 0 0 0 1.515-2.397Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M55 29h4v30h-4V29Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M35.647 36.086a2.564 2.564 0 1 1-5.129.001 2.564 2.564 0 0 1 5.129-.001Z", fill: "#D8262C" })
  ] }),
  goldfinger: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M50.125 30.349a3.022 3.022 0 1 0 0-6.044 3.022 3.022 0 0 0 0 6.044Zm-20.25 0a3.022 3.022 0 1 0 0-6.044 3.022 3.022 0 0 0 0 6.044Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M56.714 19.642a2 2 0 1 1-2.828-2.829l9.313-9.312a2 2 0 1 1 2.828 2.829l-9.313 9.312Zm-30.566-2.829a2 2 0 0 1-2.829 2.829l-9.312-9.312a2 2 0 1 1 2.829-2.83l9.312 9.312ZM12 69h7v4H8V63h4v6Zm53-30h-7v-4h11v23a7 7 0 0 1-7 7H48v8H37v-4h7v-8h18a3 3 0 0 0 3-3V39Zm-21 0h-7v-4h11v11h-4v-7Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M45.608 11.695c11.27 2.49 19.167 12.043 19.167 23.786h-4c0-9.842-6.57-17.79-16.03-19.88C30.698 12.497 19 22.227 19 36.864V39h-6v7H9V35h6.055c.976-16.132 14.582-26.834 30.552-23.305Zm-19.784 52.3a2 2 0 1 1 3.999.07l-.065 3.72a2 2 0 1 1-4-.07l.066-3.72Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M37.62 62.766a2 2 0 1 1-3.908.857c-1.351-6.166-10.551-6.163-11.909.002a2 2 0 0 1-3.906-.86c2.28-10.35 17.452-10.357 19.723.001Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M40.184 54.34a2 2 0 1 1-3.198 2.403c-4.435-5.904-14.134-5.914-18.551-.008a2 2 0 0 1-3.203-2.396c6.017-8.045 18.918-8.032 24.952.002Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M37.103 43.71a2 2 0 0 1-1.972 3.48c-4.505-2.552-10.352-2.56-14.847-.014a2 2 0 1 1-1.971-3.48c5.719-3.24 13.063-3.23 18.79.014Z", fill: "#D8262C" })
  ] }),
  princeofversionsAndroid: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#ceddb96d-a637-4e4d-8ae1-945c531d84ae)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M50.62 30.39a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-21.24 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", fill: "#D92327" }),
      /* @__PURE__ */ e.jsx("path", { d: "M55.3 19.31 64.61 10m-39.88 9.31L15.42 10", stroke: "#D8262C", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M40 14.16c13.67 0 23 10.05 23 22.46v3.46c3.87 0 7 3.13 7 7v15c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1M40 14.16c-13.67 0-23 10.05-23 22.46v3.46c-3.87 0-7 3.13-7 7v15c0 2.76 2.24 5 5 5s5-2.24 5-5v-1", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M53.62 42.83H26.5v27.12h27.12V42.83Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "m35.16 61.18 11.25-11.25m-8.94-.38h9.06v9.07m-4.09 4.59h-9.07v-9.07", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "ceddb96d-a637-4e4d-8ae1-945c531d84ae", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M8 8h64v63.95H8z" }) }) })
  ] }),
  complexify1: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#1d4d076d-d9fd-4398-af3c-68e39a67f183)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M48.62 31.39a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-21.24 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", fill: "#D92327" }),
      /* @__PURE__ */ e.jsx("path", { d: "M53.3 20.31 62.61 11m-39.88 9.31L13.42 11", stroke: "#D8262C", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M38 15.16c13.67 0 23 10.05 23 22.46v3.46M38 15.16c-13.67 0-23 10.05-23 22.46v3.46c-3.87 0-7 3.13-7 7v15c0 2.76 2.24 5 5 5s5-2.24 5-5v-1", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M65.51 55.64H30.87a6.5 6.5 0 1 1 0-13h34.64a6.5 6.5 0 1 1 0 13Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M58.17 49.14h5.85", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M65.51 68.64H30.87a6.5 6.5 0 1 1 0-13h34.64a6.5 6.5 0 1 1 0 13Z", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M32.15 62.14H38", stroke: "#D92327", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "1d4d076d-d9fd-4398-af3c-68e39a67f183", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M6 9h68.01v61.64H6z" }) }) })
  ] }),
  jsonapix: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M44.867 62.34v-2h-2v2h2Zm24.184-22.262 1.175 1.618-.011-3.244-1.164 1.626ZM44.774 17.663l-2-.022-.022 2.022h2.022v-2Zm.093-8.348v-2H42.89l-.022 1.977 2 .023ZM78.25 43.153l.958 1.756 1.042-.569v-1.187h-2ZM44.867 70.686h-2v2h2v-2ZM78.25 37.54h2v-1.11l-.94-.587-1.06 1.696Zm-1.559 6.464.958 1.755-.958-1.755Zm-.51-7.757-1.06 1.696 1.06-1.696ZM66.75 38.43l1.164-1.626-1.164 1.626Zm-3.344-6.464 2-.01-2 .01Zm3.32 9.802 1.175 1.618-1.175-1.618Zm-1.3 15.572v-9.1h-4v9.1h4ZM67.9 43.386l2.326-1.69-2.35-3.236-2.327 1.69 2.351 3.236Zm2.315-4.934-2.302-1.648-2.328 3.253 2.302 1.647 2.328-3.252Zm-4.81-6.496-.047-9.328-4 .02.047 9.328 4-.02Zm-7.047-16.293H44.774v4h13.584v-4Zm-11.584 2.023.093-8.35-4-.044-.093 8.349 4 .045Zm-1.907-6.371h15.614v-4H44.867v4Zm24.614 9v7.452h4v-7.452h-4Zm7.811 21.082-1.559.851 1.916 3.511 1.559-.85-1.916-3.511Zm-7.81 11.385v6.904h4v-6.904h-4Zm-9 15.904H44.866v4H60.48v-4ZM44.867 64.34h13.558v-4H44.867v4Zm2 6.346V62.34h-4v8.346h4Zm28.254-32.743 2.068 1.293 2.12-3.392-2.068-1.293-2.12 3.392Zm1.128-.403v5.613h4V37.54h-4Zm-.517 4.708a12 12 0 0 0-6.252 10.534h4a8 8 0 0 1 4.168-7.023l-1.916-3.511ZM69.48 27.767a12 12 0 0 0 5.64 10.176l2.12-3.392a8 8 0 0 1-3.76-6.784h-4Zm-9-16.452a9 9 0 0 1 9 9h4c0-7.18-5.82-13-13-13v4Zm4.877 11.313a7 7 0 0 0-7-6.965v4a3 3 0 0 1 3 2.985l4-.02Zm2.555 14.176a6 6 0 0 1-2.508-4.848l-4 .02a10 10 0 0 0 4.18 8.08l2.328-3.252ZM65.426 48.24a6 6 0 0 1 2.474-4.854l-2.35-3.237a10 10 0 0 0-4.124 8.091h4Zm4.055 11.446a9 9 0 0 1-9 9v4c7.18 0 13-5.82 13-13h-4Zm-8.055-2.346a3 3 0 0 1-3 3v4a7 7 0 0 0 7-7h-4Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M46.67 62.29h2.756a5 5 0 0 0 5-5v-9.1a8 8 0 0 1 3.299-6.473l2.326-1.69-2.29-1.639a8 8 0 0 1-3.344-6.488l-.02-9.245a5 5 0 0 0-5-4.99H46.63", stroke: "#D8262C", strokeWidth: "4", strokeLinejoin: "bevel", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M44.972 17.66v2h2v-2h-2ZM20.505 39.922l-1.175-1.618.01 3.244 1.165-1.626Zm24.467 22.321h2v-2h-2v2Zm0 8.442v2h2v-2h-2ZM11.306 35.847l-.74-1.858-1.26.501v1.357h2ZM44.972 9.314h2v-2h-2v2ZM11.306 43.46h-2v1.262l1.138.543.862-1.805Zm.466-7.799-.74-1.858.74 1.858Zm11.014 5.894-1.164 1.626 1.164-1.626Zm.045-3.323-1.175-1.618 1.175 1.618ZM24.13 22.66v9.1h4v-9.1h-4Zm-2.474 13.954-2.326 1.69 2.35 3.236 2.326-1.69-2.35-3.236Zm-2.315 4.934 2.28 1.633 2.33-3.253-2.282-1.632-2.328 3.252Zm4.789 6.512v9.183h4V48.06h-4Zm7 16.183h13.842v-4H31.13v4Zm11.842-2v8.442h4v-8.442h-4Zm2 6.442H29.074v4h15.898v-4Zm-24.898-9v-6.687h-4v6.687h4Zm-8.029-21.98.466-.185-1.479-3.717-.466.186 1.48 3.716Zm8.03-11.335v-6.056h-4v6.056h4Zm9-15.056h15.897v-4H29.074v4Zm15.897 4.346H31.13v4h13.842v-4Zm-2-6.346v8.346h4V9.314h-4ZM13.242 42.17l-1.075-.514-1.723 3.61 1.076.514 1.723-3.61Zm.064 1.291v-7.613h-4v7.613h4Zm-.795-5.94a12 12 0 0 0 7.563-11.15h-4a8 8 0 0 1-5.042 7.433l1.48 3.717Zm7.563 15.478a12 12 0 0 0-6.832-10.83l-1.722 3.61a8 8 0 0 1 4.554 7.22h4Zm9 15.687a9 9 0 0 1-9-9h-4c0 7.18 5.82 13 13 13v-4ZM24.13 57.243a7 7 0 0 0 7 7v-4a3 3 0 0 1-3-3h-4Zm-2.508-14.062a6 6 0 0 1 2.508 4.879h4a10 10 0 0 0-4.18-8.132l-2.328 3.253ZM24.13 31.76a6 6 0 0 1-2.474 4.854l2.35 3.237a10 10 0 0 0 4.124-8.091h-4Zm-4.056-11.446a9 9 0 0 1 9-9v-4c-7.18 0-13 5.82-13 13h4Zm8.056 2.346a3 3 0 0 1 3-3v-4a7 7 0 0 0-7 7h4Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M34.251 70.685H20.074c-6.075 0-11-4.924-11-11v-7.948a8 8 0 0 0-4.554-7.22L2.306 43.46v-7.613l1.726-.687a8 8 0 0 0 5.042-7.433v-7.413c0-6.075 4.925-11 11-11h14.177M3.275 35.757h8.03m-8.029 8.012h8.736m46.604-3.357h10.207", stroke: "#D8262C", strokeWidth: "4", fill: "none" })
  ] }),
  sentinelIos: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#d1111247-3645-4ffc-b34f-2ee979a20fa4)", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M41.08 58.49a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16Zm9.66-1.21a1.87 1.87 0 1 0 0-3.74 1.87 1.87 0 0 0 0 3.74Zm-4.89 2.74a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Zm0-7.23a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Zm-14.61 4.49a1.87 1.87 0 1 0 0-3.74 1.87 1.87 0 0 0 0 3.74Zm4.9 2.74a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Zm0-7.23a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Z", fill: "currentColor" }),
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M40.99 65.14c-4.25.08-7.61-1.39-9.72-3.72-.09 0-.17.01-.26.01A6.01 6.01 0 0 1 25 55.42c0-3.32 2.69-6.01 6.01-6.01.13 0 .25 0 .38.01 2.06-2.21 5.57-3.65 9.61-3.72 4.03.07 7.55 1.52 9.61 3.72.12-.01.25-.01.38-.01 3.32 0 6.01 2.69 6.01 6.01a6.01 6.01 0 0 1-6.01 6.01c-.09 0-.17 0-.26-.01-2.13 2.33-5.48 3.79-9.74 3.72Z", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M57.7 54.46h16.29m-17.65 4.35 5.65 5.65h11m-23.64-1.79 7.64 10.79h8m-8-20 15.5-15.5v-12.5", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M69.11 22.46a3.325 3.325 0 0 0 3.25 4c1.83 0 3.32-1.49 3.32-3.32 0-.23-.03-.46-.07-.68h-6.5Zm7.88 28.76a3.325 3.325 0 0 0-4 3.25c0 1.83 1.49 3.32 3.32 3.32.23 0 .46-.03.68-.07v-6.5Zm-2 10a3.325 3.325 0 0 0-4 3.25c0 1.83 1.49 3.32 3.32 3.32.23 0 .46-.03.68-.07v-6.5Zm-8 9a3.325 3.325 0 0 0-4 3.25c0 1.83 1.49 3.32 3.32 3.32.23 0 .46-.03.68-.07v-6.5Z", fill: "currentColor" }),
      /* @__PURE__ */ e.jsx("path", { d: "M24.82 54.46H7m18 4-6 6H8m24.64-1.79L25 73.46h-8m8-20L9.5 37.96v-12.5", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M12.89 22.46a3.325 3.325 0 0 1-3.25 4c-1.83 0-3.32-1.49-3.32-3.32 0-.23.03-.46.07-.68h6.5ZM4 51.22a3.325 3.325 0 0 1 4 3.25c0 1.83-1.49 3.32-3.32 3.32-.23 0-.46-.03-.68-.07v-6.5Zm2 10a3.325 3.325 0 0 1 4 3.25c0 1.83-1.49 3.32-3.32 3.32-.23 0-.46-.03-.68-.07v-6.5Zm9 9a3.325 3.325 0 0 1 4 3.25c0 1.83-1.49 3.32-3.32 3.32-.23 0-.46-.03-.68-.07v-6.5Z", fill: "currentColor" }),
      /* @__PURE__ */ e.jsx("path", { d: "M22.77 51.23c-1.31-3.45-2.13-7.17-2.13-10.61 0-10.38 6.48-15.82 12.56-15.82 3.95 0 7.02 2.28 9.07 2.28 1.76 0 5.04-2.42 9.3-2.42 7.33 0 10.22 5.22 10.22 5.22s-5.64 2.88-5.64 9.88c0 4.94 2.75 7.85 4.8 9.34", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M44.893 11.318c3.66-3.756 8.104-3.3 8.104-3.3s.218 3.93-3.37 7.3c-3.838 3.603-7.614 2.534-7.614 2.534s-.374-3.195 2.88-6.534Z", stroke: "currentColor", strokeWidth: "4", strokeMiterlimit: "10", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M48.32 39.56a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Zm-12.2 0a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z", fill: "currentColor" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "d1111247-3645-4ffc-b34f-2ee979a20fa4", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M4 4h72.99v72.78H4z" }) }) })
  ] }),
  sentinel: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#3a7f3d86-f747-40d4-a256-dd9949fd3403)", fill: "#D92327", children: [
      /* @__PURE__ */ e.jsx("path", { d: "M48.35 28.04c1.3 0 2.36-1.06 2.36-2.36 0-1.3-1.06-2.36-2.36-2.36-1.3 0-2.36 1.06-2.36 2.36 0 1.31 1.06 2.36 2.36 2.36Zm-16.72 0c1.3 0 2.36-1.06 2.36-2.36 0-1.3-1.06-2.36-2.36-2.36-1.3 0-2.36 1.06-2.36 2.36 0 1.31 1.06 2.36 2.36 2.36Zm8.45 23.99a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16Zm9.66-4.95c-1.03 0-1.87.84-1.87 1.87 0 1.03.84 1.87 1.87 1.87 1.03 0 1.87-.84 1.87-1.87 0-1.03-.83-1.87-1.87-1.87Zm-4.89 4.06c-.67 0-1.21.54-1.21 1.21 0 .67.54 1.21 1.21 1.21.67 0 1.21-.54 1.21-1.21 0-.67-.54-1.21-1.21-1.21Zm0-4.81a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Zm-14.61.75c-1.03 0-1.87.84-1.87 1.87 0 1.03.84 1.87 1.87 1.87 1.03 0 1.87-.84 1.87-1.87 0-1.03-.84-1.87-1.87-1.87Zm4.9 4.06c-.67 0-1.21.54-1.21 1.21 0 .67.54 1.21 1.21 1.21.67 0 1.21-.54 1.21-1.21 0-.67-.54-1.21-1.21-1.21Zm0-4.81a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Z", fill: "none" }),
      /* @__PURE__ */ e.jsx("path", { d: "M77.31 44.68c-1.08 0-2.03.52-2.63 1.32h-8.69v-5.49c0-.22-.01-.44-.03-.65l7.53-7.53V19.2c.71-.61 1.18-1.5 1.18-2.52 0-.23-.03-.46-.07-.68h-6.49a3.328 3.328 0 0 0 1.39 3.43v11.24l-5.15 5.15A7.546 7.546 0 0 0 60 33.15v-.2c0-5.33-1.97-10.03-5.25-13.5l6.03-6.03c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0l-6.25 6.25c-3.22-2.22-7.2-3.51-11.6-3.55v-.01h-.2v.01c-4.4.04-8.37 1.33-11.59 3.54l-6.24-6.24c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83l6.02 6.02c-3.29 3.47-5.27 8.17-5.27 13.51v.2a7.495 7.495 0 0 0-4.35 2.67l-5.14-5.15V19.43A3.315 3.315 0 0 0 11.89 16h-6.5c-.04.22-.07.45-.07.68 0 1.01.46 1.91 1.18 2.52v13.13l7.52 7.52c-.02.22-.03.44-.03.66V46H5.31a3.29 3.29 0 0 0-2.63-1.32c-.23 0-.46.03-.68.07v6.49c.22.05.45.07.68.07 1.08 0 2.03-.52 2.63-1.32h8.68v3.07c0 1.51.57 2.89 1.5 3.93H7.31a3.29 3.29 0 0 0-2.63-1.32c-.23 0-.46.03-.68.07v6.49c.22.05.45.07.68.07 1.08 0 2.03-.52 2.63-1.32h10.52l2-2h.22c2.39 0 4.45-1.43 5.39-3.47.96.67 2.07 1.13 3.28 1.33L22.97 65h-5.65a3.29 3.29 0 0 0-2.63-1.32c-.23 0-.46.03-.68.07v6.49c.22.05.45.07.68.07 1.08 0 2.03-.52 2.63-1.32h7.72l7.14-10.09c2.23 1.2 4.88 1.83 7.82 1.76h.31c2.8 0 5.35-.62 7.51-1.78L54.96 69h7.72c.61.8 1.55 1.32 2.63 1.32.23 0 .46-.03.68-.07v-6.49c-.22-.05-.45-.07-.68-.07-1.08 0-2.03.52-2.63 1.32h-5.65l-5.76-8.14c1.2-.19 2.31-.66 3.27-1.33.94 2.04 3 3.47 5.39 3.47h.13c.03 0 .07 0 .1-.01l2 2h10.51c.61.8 1.55 1.32 2.63 1.32.23 0 .46-.03.68-.07v-6.49c-.22-.05-.45-.07-.68-.07-1.08 0-2.03.52-2.63 1.32h-8.19c.93-1.05 1.5-2.42 1.5-3.93V50h8.69c.61.8 1.55 1.32 2.63 1.32.23 0 .46-.03.68-.07v-6.49c-.21-.05-.44-.08-.67-.08ZM21.5 37h2.49v-4.05c0-9.05 6.72-15.62 16-15.67 9.28.05 16 6.62 16 15.67V37h2.49c1.27 0 2.37.68 2.99 1.69l-5.25 5.25a7.973 7.973 0 0 0-5.81-2.99c-2.52-2.3-6.26-3.65-10.46-3.72-4.14.07-7.87 1.42-10.39 3.72a8.005 8.005 0 0 0-5.8 2.99l-5.25-5.25A3.503 3.503 0 0 1 21.5 37Zm.49 16.07c0 1.07-.87 1.93-1.93 1.93h-.13c-1.07 0-1.93-.87-1.93-1.93v-4.99c0-.03.01-.05.01-.08s-.01-.05-.01-.08v-4.1l4.08 4.08c-.05.34-.08.69-.08 1.05v4.12h-.01Zm27.99-.11-1.11-.05-.63.7c-1.85 2.04-4.79 3.14-8.21 3.06h-.08c-3.42.07-6.36-1.03-8.21-3.06l-.63-.7-1.11.05c-2.21 0-4.01-1.8-4.01-4.01s1.8-4.01 4.01-4.01c.08 0 .17 0 .25.01l.95.05.64-.69c1.75-1.87 4.8-3.03 8.11-3.09 3.38.06 6.43 1.21 8.18 3.09l.65.69.94-.06c2.28-.13 4.27 1.71 4.27 4.01 0 2.21-1.8 4.01-4.01 4.01Zm8.01.11v-4.12c0-.35-.03-.7-.08-1.04l4.08-4.08v9.24c0 1.07-.87 1.93-1.93 1.93h-.13a1.94 1.94 0 0 1-1.94-1.93Z", fill: "none" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "3a7f3d86-f747-40d4-a256-dd9949fd3403", children: /* @__PURE__ */ e.jsx("path", { fill: "#fff", d: "M2 10h75.99v60.32H2z" }) }) })
  ] }),
  goldeneye: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M65 38.224V36.54c0-6.86-2.604-12.884-6.943-17.241l7.969-7.97a2 2 0 1 0-2.828-2.828l-8.204 8.204C50.871 13.778 45.719 12.08 40 12.08c-5.71 0-10.854 1.692-14.974 4.612l-8.19-8.191a2 2 0 1 0-2.828 2.828l7.952 7.953C17.611 23.64 15 29.672 15 36.54v1.684c-4.003.912-7 4.5-7 8.776v15c0 3.86 3.141 7 7 7s7-3.14 7-7v-1h-4v1c0 1.655-1.346 3-3 3s-3-1.345-3-3V47c0-2.756 2.243-5 5-5h2v-5.46c0-11.854 8.832-20.46 21-20.46s21 8.606 21 20.46V42h2c2.757 0 5 2.244 5 5v15c0 1.655-1.346 3-3 3s-3-1.345-3-3v-1h-4v1c0 3.86 3.141 7 7 7s7-3.14 7-7V47c0-4.275-2.997-7.864-7-8.776Zm-35.625-13.92a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm21.25 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-2.498 33.697-5.656 9.797c2.713-.474 5.222-1.767 7.249-3.722.423-.407.805-.843 1.169-1.293L48.127 58Zm-7.528 5.037H29.327l.12.142c.155.183.31.366.477.54a13.893 13.893 0 0 0 7.915 4.099l2.76-4.781Zm-8.808-13.18 4.983-9.471a13.887 13.887 0 0 0-6.493 3.537c-.423.407-.805.844-1.169 1.293l2.679 4.642Zm7.096-4.896h11.786l-.117-.139c-.156-.184-.311-.368-.48-.543a13.89 13.89 0 0 0-8.623-4.197l-2.566 4.879Zm14.179 4h-5.538l5.64 9.77a13.966 13.966 0 0 0-.102-9.77Zm-26.234.308a13.967 13.967 0 0 0 .103 9.768h5.537l-5.64-9.768Zm10.26 9.768h5.816L45.818 54l-2.91-5.038h-6.124l-2.627 4.993 2.935 5.083ZM40.42 36.01c.02 0 .04.002.06.004a17.87 17.87 0 0 1 12.475 5.489 17.882 17.882 0 0 1 5.042 12.82 17.88 17.88 0 0 1-5.5 12.632 17.872 17.872 0 0 1-12.82 5.042 17.88 17.88 0 0 1-12.632-5.5 17.88 17.88 0 0 1-5.042-12.82 17.88 17.88 0 0 1 5.5-12.632c3.46-3.34 8.052-5.115 12.821-5.042l.048.003a.774.774 0 0 0 .048.004Z", fill: "#D92327" }) }),
  dox: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "m29.082 24-6.044 8.71 17.335 18.426 17.334-18.427L51.663 24h-22.58Zm20.487 4 3.004 4.328-12.2 12.97-12.201-12.97L31.175 28H49.57Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M63 23a2 2 0 1 1 0-4c5.523 0 10 4.477 10 10v30c0 5.523-4.477 10-10 10H17c-5.523 0-10-4.477-10-10V29c0-5.523 4.477-10 10-10a2 2 0 1 1 0 4 6 6 0 0 0-6 6v30a6 6 0 0 0 6 6h46a6 6 0 0 0 6-6V29a6 6 0 0 0-6-6Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "m65 15.054-1.11-.552C51.855 8.522 45.534 8.252 40 12.8c-5.534-4.549-11.855-4.279-23.89 1.702l-1.11.552v42.148A2.798 2.798 0 0 0 17.798 60h16.614A3.588 3.588 0 0 1 38 63.588v2.897h4v-2.897A3.588 3.588 0 0 1 45.588 60h16.614A2.798 2.798 0 0 0 65 57.202V15.054Zm-25 3.252 1.405-1.388c4.377-4.321 8.74-4.619 19.595.622V56H45.588A7.57 7.57 0 0 0 40 58.455 7.568 7.568 0 0 0 34.412 56H19V17.54c10.854-5.241 15.218-4.943 19.595-.622L40 18.306Z", fill: "#D8262C" })
  ] }),
  cookies: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M49.534 28.406a3.171 3.171 0 1 1-6.342 0 3.171 3.171 0 0 1 6.342 0Zm-16.52 23.667a3.355 3.355 0 1 1-6.71 0 3.355 3.355 0 0 1 6.71 0ZM27.316 36.78a3.26 3.26 0 1 0 0-6.52 3.26 3.26 0 0 0 0 6.52Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M38.467 15.12c-13.995 0-25.341 11.347-25.341 25.343 0 13.997 11.346 25.342 25.341 25.342.837 0 1.665-.041 2.482-.122a12.291 12.291 0 0 1-.136-1.823c0-3.486 1.467-6.62 3.802-8.839a14.74 14.74 0 0 1-.908-5.095c0-7.135 5.015-13.091 11.71-14.551.597-3.165 2.41-5.9 4.937-7.694-4.4-7.517-12.555-12.56-21.887-12.56ZM9.126 40.463c0-16.205 13.136-29.343 29.341-29.343 11.573 0 21.575 6.7 26.35 16.423l.892 1.816-1.826.87a8.219 8.219 0 0 0-4.666 6.983l-.09 1.702-1.695.181c-5.466.584-9.725 5.21-9.725 10.831 0 1.718.408 3.338 1.124 4.793l.744 1.512-1.363.99c-2.064 1.498-3.399 3.912-3.399 6.64 0 .987.175 1.936.492 2.809l.807 2.223-2.326.427c-1.724.316-3.5.485-5.319.485-16.205 0-29.341-13.136-29.341-29.342Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M66.424 44.544c-4.838-1.727-10.16.793-11.888 5.63l11.888-5.63Zm-8.111 6.949a16.13 16.13 0 0 1 7.732.78c.901.323 1.752.718 2.552 1.176a5.302 5.302 0 0 0-10.284-1.956Zm8.111-6.95c4.84 1.727 7.358 7.051 5.632 11.887l-.001.004a9.453 9.453 0 0 1-.526 1.182l-1.155 2.213-1.908-1.609a12.199 12.199 0 0 0-3.767-2.18 12.178 12.178 0 0 0-8.017-.064l-2.359.794-.268-2.474a9.261 9.261 0 0 1 .48-4.12l.001-.001", fill: "#D8262C" })
  ] }),
  complexify: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M16.596 37.558c0-12.926 10.479-22.404 23.404-22.404 12.926 0 23.405 9.478 23.405 22.404", stroke: "#D8262C", strokeWidth: "4", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M10 68h60V43H10v25Z", stroke: "#D8262C", strokeWidth: "4", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M59.035 58.152a2.915 2.915 0 1 0 0-5.829 2.915 2.915 0 0 0 0 5.83Zm-12.632 0a2.915 2.915 0 1 0 .001-5.829 2.915 2.915 0 0 0 0 5.83Zm-12.631 0a2.915 2.915 0 1 0 0-5.83 2.915 2.915 0 0 0 0 5.83Zm-12.632 0a2.915 2.915 0 1 0 0-5.83 2.915 2.915 0 0 0 0 5.83Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "m55.3 20.227 9.313-9.312m-39.88 9.312-9.312-9.312", stroke: "#D8262C", strokeWidth: "4", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M50.125 33.349a3.022 3.022 0 1 0 0-6.044 3.022 3.022 0 0 0 0 6.044Zm-20.25 0a3.022 3.022 0 1 0 0-6.044 3.022 3.022 0 0 0 0 6.044Z", fill: "#D8262C" })
  ] }),
  annotationClustering: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M53.405 56.358C61.25 48.661 66 40.705 66 32.763 66 18.533 54.358 7 40 7 25.643 7 14 18.533 14 32.763c0 7.842 4.748 15.772 12.591 23.505 2.692 2.654 5.569 5.097 8.446 7.278a81.121 81.121 0 0 0 2.788 2.025 54.402 54.402 0 0 0 1.087.734l1.08.695 1.084-.688a52.045 52.045 0 0 0 1.089-.725 79.041 79.041 0 0 0 2.79-2.003 84.524 84.524 0 0 0 8.45-7.226Zm-2.81-3.021c-2.557 2.496-5.304 4.797-8.05 6.846A75.618 75.618 0 0 1 40.007 62a77.683 77.683 0 0 1-2.544-1.843c-2.748-2.072-5.496-4.393-8.054-6.903C22.252 46.234 18 39.168 18 32.676 18 20.706 27.849 11 40 11c12.152 0 22 9.706 22 21.676 0 6.593-4.25 13.676-11.405 20.66Z", fill: "#D92327" }),
    /* @__PURE__ */ e.jsx("path", { d: "M42.747 40v4H28v-2c0-2.69 1.54-4.53 4.937-7.135.348-.266.7-.531 1.394-1.051 3.485-2.62 4.736-4.046 4.736-5.651 0-1.61-1.502-3.163-3.28-3.163-1.737 0-3.213.994-3.63 3.052l-3.851-.806c.83-4.1 4.018-6.246 7.482-6.246C39.75 21 43 24.359 43 28.163c0 3.407-1.809 5.467-6.331 8.867-.698.524-1.034.776-1.365 1.03-.982.753-1.723 1.388-2.256 1.94h9.699ZM47 22h4v22h-4V22Zm6.637 43.503c-2.192-.729-5.328-1.268-8.898-1.509l.269-3.992C53.88 60.6 60 62.634 60 66.427 60 70.766 51.45 73 40.5 73S21 70.766 21 66.427c0-3.02 3.576-4.74 9.37-5.762A53.426 53.426 0 0 1 36.036 60l.264 3.993a49.448 49.448 0 0 0-5.238.612c-2.168.383-3.928.89-5.084 1.445a5.6 5.6 0 0 0-.674.377l.121.077c.686.424 1.786.85 3.205 1.22C31.714 68.53 35.956 69 40.5 69s8.786-.47 11.869-1.275c1.419-.37 2.52-.796 3.205-1.22.043-.026.083-.052.12-.077-.45-.302-1.15-.623-2.057-.924Z", fill: "#D92327" })
  ] }),
  andoidinspector: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", width: "80", height: "80", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M18.596 37.558h-4c0-13.868 11.198-24.405 25.404-24.405 14.207 0 25.405 10.537 25.405 24.405V57.25h-4V37.558c0-11.603-9.355-20.405-21.405-20.405s-21.404 8.802-21.404 20.405Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "M56.714 21.642a2 2 0 1 1-2.828-2.829l9.313-9.312a2 2 0 1 1 2.828 2.829l-9.313 9.312Zm-30.566-2.829a2 2 0 0 1-2.829 2.829l-9.312-9.312a2 2 0 1 1 2.829-2.83l9.312 9.312Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M20.048 69.64c9.6 2.121 19.102-3.942 21.223-13.541 2.122-9.6-3.941-19.103-13.542-21.224-9.599-2.121-19.101 3.942-21.221 13.542-2.122 9.6 3.94 19.102 13.54 21.223Zm6.818-30.86c7.443 1.646 12.144 9.013 10.5 16.455-1.645 7.443-9.012 12.144-16.455 10.5-7.443-1.646-12.142-9.012-10.498-16.456 1.644-7.442 9.011-12.143 16.453-10.498Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { d: "m47.726 59.572-8.839-1.952.863-3.906 4.933 1.09.761-3.444 24.124 5.33-2.815 12.741-20.558-4.541.863-3.906 16.652 3.679 1.09-4.93-16.313-3.605-.761 3.444ZM17.794 51.69l-3.906-.863c1.342-6.076 7.355-9.913 13.432-8.57l-.863 3.905a7.266 7.266 0 0 0-8.663 5.528Z", fill: "#D8262C" }),
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M50.125 32.35a3.023 3.023 0 1 0-.001-6.046 3.023 3.023 0 0 0 .001 6.045Zm-20.25 0a3.023 3.023 0 1 0-.001-6.046 3.023 3.023 0 0 0 .001 6.045Z", fill: "#D8262C" })
  ] })
}, D = {
  error: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M4.222 19.778 19.778 4.222m-15.556 0 15.556 15.556", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
  warningCircle: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11ZM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm10-6v7h-2V6h2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "1.25", cy: "1.25", r: "1.25", transform: "matrix(1 0 0 -1 10.75 18)", fill: "currentColor" })
  ] }),
  warning: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M1 21 12 2l11 19H1Zm2.883-1.667h16.234L12 5.333l-8.117 14Zm8.187-1.283a.815.815 0 0 0 .83-.836.815.815 0 0 0-.836-.83.814.814 0 0 0-.83.836.814.814 0 0 0 .836.83Zm-.837-2.85H12.9V9.8h-1.667v5.4Z", fill: "currentColor" }) }),
  lightbulb: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M11.975 23a2.42 2.42 0 0 1-1.302-.353 1.844 1.844 0 0 1-.788-.967h-.257c-.495 0-.924-.182-1.288-.545a1.761 1.761 0 0 1-.545-1.288v-3.924a8.44 8.44 0 0 1-2.773-2.96C4.341 11.753 4 10.422 4 8.975c0-2.218.775-4.102 2.324-5.651C7.873 1.774 9.757 1 11.975 1s4.102.775 5.651 2.324c1.55 1.549 2.324 3.433 2.324 5.651 0 1.46-.34 2.793-1.022 3.997a8.465 8.465 0 0 1-2.773 2.951v3.924c0 .495-.182.924-.545 1.288a1.761 1.761 0 0 1-1.288.545h-.257c-.147.41-.41.732-.788.967a2.416 2.416 0 0 1-1.302.353Zm-2.347-3.153h4.694V18.71H9.628v1.137Zm0-2.237h4.694v-1.082H9.628v1.082Zm-.238-2.915h1.888v-3.502L8.785 8.7l.953-.953 2.237 2.236 2.237-2.236.953.953-2.493 2.493v3.502h1.888c1.063-.501 1.922-1.267 2.576-2.296.654-1.03.98-2.171.98-3.424 0-1.723-.592-3.178-1.778-4.363-1.185-1.186-2.64-1.779-4.363-1.779-1.723 0-3.178.593-4.363 1.779-1.186 1.185-1.779 2.64-1.779 4.363 0 1.253.327 2.394.981 3.424.654 1.03 1.513 1.795 2.576 2.296Z", fill: "currentColor" }) }),
  checkmark: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M20 7 9 18l-5-5", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
  info: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm10 5v-7h-2v7h2Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "12", cy: "7.25", r: "1.25", fill: "currentColor" })
  ] }),
  keepOut: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm5 1h8v-2H8v2Z", fill: "currentColor" }) }),
  person: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M20 23a8 8 0 1 0-16 0", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "12", cy: "8", r: "6", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  sun: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M12 4.196V2.5M6.482 6.482l-1.2-1.2M4.196 12H2.5m3.982 5.518-1.2 1.2M12 19.804V21.5m5.518-3.982 1.2 1.2M19.804 12H21.5m-3.982-5.518 1.2-1.2", stroke: "currentColor", strokeWidth: "1.80952", strokeLinecap: "square", strokeLinejoin: "round", fill: "none" })
  ] }),
  page: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a1 1 0 0 0-.24-.65l-6-7A1 1 0 0 0 14 1H6ZM5 4a1 1 0 0 1 1-1h6v7h7v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm12.826 4L14 3.537V8h3.826Z", fill: "currentColor" }) }),
  play: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M21 12 7 20V4l14 8Z", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
  moon: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "m4.44 16.295-.14-.868-1.33.214.732 1.132.738-.478ZM9.82 4.188l-.139-.868-1.331.214.733 1.132.738-.478Zm.388 4.295c0 3.5-2.559 6.406-5.908 6.944l.28 1.736a8.794 8.794 0 0 0 7.386-8.68h-1.758ZM9.083 4.666a6.997 6.997 0 0 1 1.125 3.817h1.758A8.756 8.756 0 0 0 10.56 3.71l-1.476.956Zm.877.39a7.09 7.09 0 0 1 1.127-.09V3.208a8.85 8.85 0 0 0-1.406.112l.28 1.736Zm1.127-.09A7.034 7.034 0 0 1 18.121 12h1.758a8.792 8.792 0 0 0-8.792-8.792v1.758ZM18.121 12a7.034 7.034 0 0 1-7.034 7.034v1.758A8.792 8.792 0 0 0 19.879 12h-1.758Zm-7.034 7.034a7.027 7.027 0 0 1-5.909-3.216l-1.476.955a8.786 8.786 0 0 0 7.385 4.02v-1.76Z", fill: "currentColor" }) }),
  search: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M10.5 3a7.5 7.5 0 1 0 4.55 13.462l.043.045 5.2 5.2a1 1 0 0 0 1.414-1.414l-5.2-5.2a1.116 1.116 0 0 0-.045-.042A7.5 7.5 0 0 0 10.5 3ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z", fill: "currentColor" }) }),
  book: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M4 19.5V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M21 22H6.5a2.5 2.5 0 0 1 0-5H21", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ e.jsx("path", { d: "M21 17h-.5a2.5 2.5 0 0 0 0 5h.5", stroke: "currentColor", strokeWidth: "2", fill: "none" })
  ] }),
  chartBar: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M14.944 21V3h-6.06v18m6.059 0-.002-10.21a1 1 0 0 1 1-1H21V21h-6.056Zm0 0H8.884m0 0v-6.442a1 1 0 0 0-1-1H3V21h5.885Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }) }),
  chartLine: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M3 3.5V21h19.5M3 19.556l9.152-9.167 3.051 3.056L21 7.75", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
  paperClip: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "m21.438 11.662-9.19 9.19a6.003 6.003 0 1 1-8.49-8.49l9.19-9.19a4.002 4.002 0 0 1 5.66 5.66l-9.2 9.19a2.001 2.001 0 1 1-2.83-2.83l8.49-8.48", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
  settings: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "m8.756 4.255 1.271-1.826a1 1 0 0 1 .82-.429h1.806a1 1 0 0 1 .819.426L14.73 4.22m-5.974.035c-.347.495-.923.738-1.535.695m1.535-.695c-.349.494-.923.74-1.535.695m0 0-2.25-.142a1 1 0 0 0-.835.364l-1.14 1.39a1 1 0 0 0-.179.943l.656 2.02m0 0c.09.288.1.597.037.889m-.037-.889c.09.288.101.596.036.892m0-.003c-.064.288-.202.56-.407.78m.408-.78v.003m-.408.778-1.486 1.598a1 1 0 0 0-.24.916l.403 1.668a1 1 0 0 0 .628.704l2.041.749c.285.11.531.29.718.515m-2.064-6.15c.206-.219.343-.49.407-.778m1.657 6.928c.185.226.31.5.36.795m-.36-.795c.186.226.313.499.36.795m-.36-.795-.003-.003a1.973 1.973 0 0 0-.038-.045m.4.843.348 2.136a1 1 0 0 0 .566.746l1.628.756a1 1 0 0 0 .91-.034l1.913-1.07m0 0a1.75 1.75 0 0 1 .857-.225m-.857.224a1.707 1.707 0 0 1 .857-.224m0 0a1.786 1.786 0 0 1 .861.224m-.861-.224c.297 0 .595.074.861.224m0 0 2.004 1.085a1 1 0 0 0 .907.023l1.62-.774a1 1 0 0 0 .558-.754l.312-2.075m0 0a1.68 1.68 0 0 1 .355-.801m-.355.801c.045-.298.17-.573.355-.801m0 0a1.74 1.74 0 0 1 .71-.518m-.71.518c.183-.227.425-.408.71-.518m0 0 2.063-.808a1 1 0 0 0 .61-.708l.386-1.69a1 1 0 0 0-.24-.9l-1.496-1.619m0 0a1.738 1.738 0 0 1-.425-.766m.425.766a1.76 1.76 0 0 1-.425-.766m0 0a1.598 1.598 0 0 1 .022-.86l.647-2.073a1 1 0 0 0-.182-.933l-1.113-1.353a1 1 0 0 0-.845-.362l-2.223.163m0 0a1.76 1.76 0 0 1-.87-.162m.87.162a1.737 1.737 0 0 1-.87-.162m0 0a1.735 1.735 0 0 1-.678-.568m.678.568a1.714 1.714 0 0 1-.678-.568M3.51 10.417v-.004m11.626 1.598c0 1.865-1.546 3.376-3.453 3.376-1.906 0-3.452-1.511-3.452-3.376s1.546-3.377 3.452-3.377c1.907 0 3.453 1.512 3.453 3.377Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "16", fill: "none" }) }),
  postItNote: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M3.852 20.148h10.74v-5.555h5.556V3.852H3.852v16.296Zm0 1.852c-.51 0-.945-.181-1.308-.544A1.783 1.783 0 0 1 2 20.148V3.852c0-.51.181-.945.544-1.308A1.783 1.783 0 0 1 3.852 2h16.296c.51 0 .945.181 1.308.544.363.363.544.799.544 1.308v11.481L15.333 22H3.852Zm2.963-8.148V12h5v1.852h-5Zm0-4.445V7.556h10.37v1.851H6.815Z", fill: "currentColor" }) }),
  verified: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "m8.633 22.5-1.9-3.233-3.716-.784.4-3.683L1 12l2.417-2.783-.4-3.684 3.716-.783 1.9-3.25L12 3.017 15.367 1.5l1.916 3.25 3.7.783-.4 3.684L23 12l-2.417 2.8.4 3.683-3.7.784-1.916 3.233L12 20.983 8.633 22.5Zm.734-2.167L12 19.217l2.7 1.116 1.583-2.466 2.867-.717-.283-2.917L20.833 12l-1.966-2.283.283-2.917-2.867-.667-1.633-2.466L12 4.783 9.3 3.667 7.717 6.133 4.85 6.8l.283 2.917L3.167 12l1.966 2.233L4.85 17.2l2.867.667 1.65 2.466Zm1.566-4.933L16.6 9.767 15.383 8.6l-4.45 4.417-2.3-2.35L7.4 11.883l3.533 3.517Z", fill: "currentColor" }) }),
  danger: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M7.833 22 2 16.167V7.833L7.833 2h8.334L22 7.833v8.334L16.167 22H7.833Zm.834-5.37L12 13.296l3.333 3.334 1.297-1.297L13.296 12l3.334-3.333-1.297-1.297L12 10.704 8.667 7.37 7.37 8.667 10.704 12 7.37 15.333l1.297 1.297Zm-.056 3.518h6.778l4.76-4.76V8.612l-4.76-4.76H8.61l-4.76 4.76v6.778l4.76 4.76Z", fill: "currentColor" }) }),
  checkCircle: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M10.55 16.567 17.617 9.5l-1.234-1.217-5.833 5.834-2.95-2.95-1.217 1.216 4.167 4.184ZM12 22a9.696 9.696 0 0 1-3.883-.788 10.13 10.13 0 0 1-3.184-2.145 10.129 10.129 0 0 1-2.145-3.184A9.696 9.696 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.028 10.028 0 0 1 2.145-3.175 10.2 10.2 0 0 1 3.184-2.137A9.696 9.696 0 0 1 12 2a9.74 9.74 0 0 1 3.9.788 10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.696 9.696 0 0 1-.788 3.883 10.2 10.2 0 0 1-2.137 3.184c-.9.905-1.958 1.62-3.175 2.145A9.738 9.738 0 0 1 12 22Zm0-1.667c2.322 0 4.292-.81 5.908-2.433 1.617-1.622 2.425-3.589 2.425-5.9 0-2.322-.808-4.292-2.425-5.908C16.292 4.475 14.322 3.667 12 3.667c-2.311 0-4.278.808-5.9 2.425C4.478 7.708 3.667 9.678 3.667 12c0 2.311.81 4.278 2.433 5.9 1.622 1.622 3.589 2.433 5.9 2.433Z", fill: "currentColor" }) })
}, z = (...f) => f.filter(Boolean).join(" "), m0 = (f) => {
  var x, u, m, d;
  const {
    type: i = "info",
    children: s,
    title: h
  } = f, c = {
    note: {
      label: "Note",
      icon: D.postItNote,
      iconClass: "text-violet-30"
    },
    tip: {
      label: "Tip",
      icon: D.lightbulb,
      iconClass: "text-sand-30"
    },
    info: {
      label: "Info",
      icon: D.info,
      iconClass: "text-sky-30"
    },
    caution: {
      label: "Caution",
      icon: D.warning,
      iconClass: "text-candy-30"
    },
    danger: {
      label: "Danger",
      icon: D.danger,
      iconClass: "text-candy-30"
    },
    success: {
      label: "Success",
      icon: D.checkCircle,
      iconClass: "text-olive-30"
    }
  };
  return !i || !Object.keys(c).includes(i) ? null : /* @__PURE__ */ e.jsxs("div", { className: z(
    `es-alert es-alert--${i}`,
    "m-0 my-10 pl-10 pr-0 py-4 border-l-4 border-l-infinum",
    i === "info" && "border-l-sky-30",
    i === "tip" && "border-l-sand-30",
    i === "note" && "border-l-violet-30",
    i === "success" && "border-l-olive-30",
    i === "danger" && "border-l-candy-30",
    i === "caution" && "border-l-candy-30"
  ), children: [
    h !== ":es-hide-title:" && /* @__PURE__ */ e.jsxs("i", { className: "flex gap-1.5 items-center font-sans text-12 uppercase not-italic leading-none font-medium mb-2", children: [
      ((x = c[i]) == null ? void 0 : x.icon) && N.cloneElement((u = c[i]) == null ? void 0 : u.icon, {
        className: z("w-6 h-6", (m = c[i]) == null ? void 0 : m.iconClass)
      }),
      /* @__PURE__ */ e.jsx("span", { className: "text-grey-500", children: h ?? ((d = c[i]) == null ? void 0 : d.label) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "font-sans text-16 text-black", children: s })
  ] });
}, t1 = (f) => {
  const {
    label: i,
    url: s,
    external: h = s == null ? void 0 : s.startsWith("http"),
    anchor: c = s == null ? void 0 : s.startsWith("#")
  } = f;
  let x = {};
  h && (x = {
    rel: "noopener noreferrer",
    target: "_blank"
  });
  const u = "group isolate overflow-hidden relative bg-infinum text-white hover:text-white px-7.5 py-3.75 rounded-full inline-flex items-center gap-3 cursor-pointer text-16 font-bold before:bg-black before:absolute before:inset-0 before:-z-10 before:translate-y-full-plus-px hover:before:translate-y-0 focus:before:translate-y-0 before:transition-transform before:duration-300 hover:decoration-transparent focus:outline-offset-4 focus:outline-infinum";
  if (c) {
    const m = () => {
      const d = document.querySelector(s);
      d && d.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    return /* @__PURE__ */ e.jsxs("button", { className: u, onClick: m, children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:translate-x-3 group-focus:translate-x-3 transition duration-500", children: i }),
      /* @__PURE__ */ e.jsx("svg", { className: "group-hover:opacity-0 group-hover:translate-x-3 group-hover:scale-75 group-focus:opacity-0 group-focus:translate-x-3 group-focus:scale-75 origin-right transition duration-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 16", fill: "none", height: "16", width: "17", children: /* @__PURE__ */ e.jsx("path", { d: "M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978", stroke: "currentColor", strokeWidth: "2", fill: "none" }) })
    ] });
  }
  return /* @__PURE__ */ e.jsxs("a", { className: u, href: s, ...x, children: [
    /* @__PURE__ */ e.jsx("span", { className: "group-hover:translate-x-3 group-focus:translate-x-3 transition duration-500", children: i }),
    /* @__PURE__ */ e.jsx("svg", { className: "group-hover:opacity-0 group-hover:translate-x-3 group-hover:scale-75 group-focus:opacity-0 group-focus:translate-x-3 group-focus:scale-75 origin-right transition duration-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 16", fill: "none", height: "16", width: "17", children: /* @__PURE__ */ e.jsx("path", { d: "M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978", stroke: "currentColor", strokeWidth: "2", fill: "none" }) })
  ] });
}, w0 = (f) => {
  const {
    title: i,
    subtitle: s,
    cards: h
  } = f;
  return /* @__PURE__ */ e.jsxs("div", { className: " gap-gutter px-side-padding p-side-padding py-10 desktop:pt-24 desktop:pb-36 desktop:grid desktop:grid-cols-12 desktop:auto-rows-auto", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "col-start-1 col-span-3 row-start-1 row-span-full mb-10 desktop:mb-0", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-36 font-bold mb-4 desktop:mb-1", children: i }),
      /* @__PURE__ */ e.jsx("p", { className: "text-16", children: s })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "col-start-5 col-span-8 flex flex-col items-start gap-y-20 desktop:grid desktop:grid-cols-2 desktop:auto-rows-auto desktop:gap-x-gutter", children: h.map(({ icon: c, text: x, buttonLabel: u, buttonUrl: m }, d) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-20 h-20 bg-infinum text-white rounded-full flex items-center justify-center mb-5", children: N.cloneElement(c, { className: "w-20 h-20" }) }),
      /* @__PURE__ */ e.jsx("h4", { className: "text-h3 font-bold font-display mb-10", children: x }),
      u && m && /* @__PURE__ */ e.jsx(t1, { label: u, url: m })
    ] }, d)) })
  ] });
}, k0 = (f) => {
  const {
    title: i,
    buttonLabel: s,
    buttonUrl: h,
    imageUrl: c,
    imageAlt: x,
    gray: u = !1
  } = f;
  return /* @__PURE__ */ e.jsxs("div", { className: `px-side-padding desktop:pr-0 py-10 desktop:py-20 desktop:grid desktop:grid-cols-2 desktop:items-center gap-gutter border-t border-t-grey-200 ${u ? "bg-grey-100" : ""}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-10 desktop:mb-0 text-center desktop:text-left flex flex-col items-center desktop:block", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-h3 font-bold font-display mb-4 desktop:mb-10", children: i }),
      /* @__PURE__ */ e.jsx(t1, { label: s, url: h })
    ] }),
    /* @__PURE__ */ e.jsx("img", { className: "w-full", src: c, alt: x })
  ] });
}, g0 = (f) => {
  const {
    title: i,
    text: s,
    imageUrl: h,
    imageAlt: c,
    gray: x = !1
  } = f;
  return /* @__PURE__ */ e.jsxs("div", { className: `${x ? "bg-grey-100" : ""} desktop:grid desktop:grid-cols-12 gap-gutter px-side-padding p-side-padding desktop:py-20`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "col-start-9 col-span-4 mb-10 desktop:mb-0 max-w-lg desktop:max-w-full row-start-1", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "text-h3 font-bold font-display mb-5", children: i }),
      /* @__PURE__ */ e.jsx("span", { className: "text-18", children: s })
    ] }),
    /* @__PURE__ */ e.jsx("img", { className: "col-start-1 col-span-6 row-start-1", src: h, alt: c })
  ] });
}, v0 = () => /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 18", width: "200", height: "18", fill: "none", children: [
  /* @__PURE__ */ e.jsx("path", { d: "M48.603 1.133h-5.4v15.666h5.4V1.133Zm28.465 0v15.733h-5.866L58.002 6.8v10.067h-5.4V1.133h6.466l12.6 9.6v-9.6h5.4ZM102.131 5.4H86.865v2.866h14.666v4.067H86.865v4.533H81.53V1.133h20.6v4.266Zm8.738-4.267h-5.4v15.666h5.4V1.133Zm28.868 0v15.733h-5.8L120.67 6.8v10.067h-5.334V1.133h6.401l12.6 9.6v-9.6h5.4Zm9.593 8.133c0 1.133.267 2.067.933 2.667.667.667 1.867.933 3.534.933h2.866c3.067 0 4.6-1.2 4.6-3.6V1.133h5.4v8.133c0 2.267-.733 4.2-2.133 5.6-1.467 1.467-3.6 2.2-6.6 2.2h-5.333c-1.534 0-2.867-.2-4-.6-1.134-.4-2.2-1.133-3.2-2.2-1-1.066-1.467-2.733-1.467-5V1.133h5.4v8.133Zm26.8 7.6h-5.333V1.133h7.733l6.667 10.333 6.533-10.333h7.867v15.733h-5.334v-10.6l-6.733 10.6h-4.467l-6.933-10.6v10.6Z", fill: "currentColor" }),
  /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M8.866 5.07c-2.151 0-3.81 1.66-3.81 3.93 0 2.19 1.648 3.88 3.77 3.93.94-.006 1.846-.376 3.02-1.333.848-.693 1.688-1.563 2.678-2.63-.963-1.037-1.786-1.886-2.617-2.564C10.725 5.44 9.814 5.07 8.866 5.07Zm9.103.166c-.946-1.01-1.903-1.977-2.87-2.766C13.405 1.09 11.396 0 8.866 0 3.809 0 0 4.044 0 9c0 4.901 3.808 8.911 8.759 9h.045c2.531 0 4.54-1.09 6.232-2.47.989-.807 1.967-1.8 2.933-2.832.966 1.033 1.944 2.025 2.932 2.832 1.692 1.38 3.702 2.47 6.233 2.47C32.112 18 36 13.972 36 9c0-5.005-3.982-9-8.928-9-2.531 0-4.54 1.09-6.233 2.47-.967.79-1.924 1.757-2.87 2.766Zm3.445 3.73c.99 1.068 1.83 1.938 2.679 2.63 1.182.965 2.093 1.334 3.041 1.334 2.105 0 3.81-1.677 3.81-3.93 0-2.22-1.735-3.93-3.872-3.93-.948 0-1.86.369-3.041 1.333-.831.678-1.654 1.527-2.617 2.564Z", fill: "#D82828" })
] }), f0 = {
  twitter: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z", fill: "currentColor" }) }),
  clutch: /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M16.121 15.696a5.351 5.351 0 0 1-3.615 1.34c-3.065 0-5.316-2.25-5.316-5.339 0-3.089 2.179-5.243 5.316-5.243a5.483 5.483 0 0 1 3.64 1.316l.67.575 2.969-2.969-.743-.694a9.609 9.609 0 0 0-6.536-2.443C6.999 2.24 3 6.214 3 11.673c0 5.46 4.094 9.554 9.506 9.554a9.611 9.611 0 0 0 6.584-2.49l.718-.67-3.017-2.97-.67.599Z", fill: "currentColor" }),
    /* @__PURE__ */ e.jsx("circle", { cx: "12.362", cy: "11.7211", r: "3.18451", fill: "currentColor" })
  ] }),
  dribbble: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M2 12C2 6.477 6.477 2 12 2A10 10 0 1 1 2 12Zm14.86-6.09A7.726 7.726 0 0 0 12 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74ZM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5ZM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01Zm12.22 6.53A57.5 57.5 0 0 0 15 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 0 1-3.24 4.99ZM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51Zm6.13-12.62a7.823 7.823 0 0 1 1.66 4.45 15.32 15.32 0 0 0-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08Z", fill: "currentColor" }) }),
  facebook: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M22 11.994c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 4.99 3.656 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.79c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.239.195 2.239.195v2.46h-1.262c-1.242 0-1.63.771-1.63 1.563v1.876h2.774l-.443 2.891h-2.33v6.988c4.78-.75 8.437-4.887 8.437-9.879Z", fill: "currentColor" }) }),
  instagram: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm10.9 2.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z", fill: "currentColor" }) }),
  linkedin: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", children: /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26ZM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 1.57v8.37H5.5v-8.37h2.77Z", fill: "currentColor" }) })
}, j0 = (f) => {
  const {
    footer: i
  } = f;
  if (!i)
    return null;
  const { copyright: s, links: h } = i, c = h == null ? void 0 : h[0].items;
  return /* @__PURE__ */ e.jsxs("div", { className: "es-footer flex flex-col desktop:flex-row items-center gap-8 desktop:justify-between px-side-padding py-8 border-t border-t-grey-200 bg-grey-100", children: [
    /* @__PURE__ */ e.jsx("a", { href: "https://infinum.com", children: /* @__PURE__ */ e.jsx(v0, {}) }),
    /* @__PURE__ */ e.jsx("span", { className: "text-14", children: s }),
    /* @__PURE__ */ e.jsx("div", { className: "flex gap-2", children: c.map(({ href: x, icon: u }, m) => /* @__PURE__ */ e.jsx("a", { href: x, children: f0[u] }, m)) })
  ] });
}, M0 = (f) => {
  const {
    title: i,
    subtitle: s,
    buttonLabel: h,
    buttonUrl: c,
    imageUrl: x,
    imageAlt: u,
    gray: m = !1,
    extendImage: d = !1
  } = f;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: z(
        "desktop:grid desktop:grid-cols-2 gap-gutter p-side-padding desktop:pt-20 desktop:pb-36",
        m && "bg-grey-100",
        d && "desktop:pb-0 desktop:gap-y-0 desktop:grid-rows-[auto_9rem]"
      ),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-5 mb-10 desktop:mb-0", children: [
          /* @__PURE__ */ e.jsx("h1", { className: "text-h2 font-display font-bold", children: i }),
          /* @__PURE__ */ e.jsx("p", { className: "text-16 max-w-sm", children: s }),
          /* @__PURE__ */ e.jsx(t1, { label: h, url: c })
        ] }),
        /* @__PURE__ */ e.jsx(
          "img",
          {
            className: z(d && "desktop:row-span-2"),
            src: x,
            alt: u
          }
        )
      ]
    }
  );
}, Z0 = (f) => {
  const {
    title: i,
    cards: s,
    gray: h = !1,
    osProjectIcons: c = !1
  } = f;
  return /* @__PURE__ */ e.jsxs("div", { className: `px-side-padding py-10 desktop:py-24 ${h ? "bg-grey-100" : ""}`, children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-h3 font-bold font-display mb-4 desktop:mb-20", children: i }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-start gap-y-10 desktop:gap-y-20 desktop:grid desktop:grid-cols-4 desktop:auto-rows-auto desktop:gap-x-gutter", children: s.map(({ icon: x, text: u, url: m }, d) => /* @__PURE__ */ e.jsxs("a", { className: "hover:no-underline hover:text-infinum", href: m, children: [
      N.cloneElement(x, { className: `text-infinum ${c ? "w-20 h-20 -mx-2" : "w-24 h-24 -mx-5"}` }),
      /* @__PURE__ */ e.jsx("h4", { className: "text-24 font-bold", children: u })
    ] }, d)) })
  ] });
}, C0 = (f) => {
  const {
    title: i,
    imageUrl: s,
    imageAlt: h,
    children: c,
    gray: x = !1
  } = f;
  return /* @__PURE__ */ e.jsxs("div", { className: `desktop:grid desktop:grid-cols-12 gap-gutter px-side-padding p-side-padding pt-0 desktop:pb-36 ${x ? "bg-grey-100" : ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "col-start-1 col-span-5", src: s, alt: h }),
    /* @__PURE__ */ e.jsxs("div", { className: "col-start-7 col-span-6 max-w-lg desktop:max-w-full", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "text-h3 font-bold font-display mb-5", children: i }),
      /* @__PURE__ */ e.jsx("span", { className: "text-18", children: c })
    ] })
  ] });
}, b0 = () => /* @__PURE__ */ e.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 18", width: "200", height: "18", fill: "none", children: [
  /* @__PURE__ */ e.jsx("path", { d: "M48.6 1.133h-5.4V16.8h5.4V1.133Zm28.466 0v15.734H71.2L58 6.8v10.067h-5.4V1.133h6.466l12.6 9.6v-9.6h5.4ZM102.133 5.4H86.867v2.867h14.666v4.066H86.867v4.534h-5.334V1.133h20.6V5.4Zm8.734-4.267h-5.4V16.8h5.4V1.133Zm28.867 0v15.734h-5.8L120.667 6.8v10.067h-5.334V1.133h6.401l12.6 9.6v-9.6h5.4Zm9.599 8.134c0 1.133.267 2.066.933 2.666.667.667 1.867.934 3.534.934h2.866c3.067 0 4.6-1.2 4.6-3.6V1.133h5.4v8.134c0 2.266-.733 4.2-2.133 5.6-1.467 1.466-3.6 2.2-6.6 2.2H152.6c-1.534 0-2.867-.2-4-.6-1.134-.4-2.2-1.134-3.2-2.2-1-1.067-1.467-2.734-1.467-5V1.133h5.4v8.134Zm26.8 7.6H170.8V1.133h7.733l6.667 10.334 6.533-10.334h7.867v15.734h-5.334v-10.6l-6.733 10.6h-4.467l-6.933-10.6v10.6Z", fill: "currentColor" }),
  /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M8.866 5.07c-2.151 0-3.81 1.66-3.81 3.93 0 2.19 1.648 3.88 3.77 3.93.94-.006 1.846-.376 3.02-1.333.848-.693 1.688-1.563 2.678-2.63-.963-1.037-1.786-1.886-2.617-2.564C10.725 5.44 9.814 5.07 8.866 5.07Zm9.103.166c-.946-1.01-1.903-1.977-2.87-2.766C13.405 1.09 11.396 0 8.866 0 3.809 0 0 4.044 0 9c0 4.901 3.808 8.911 8.759 9h.045c2.531 0 4.54-1.09 6.232-2.47.989-.807 1.967-1.8 2.933-2.832.966 1.033 1.944 2.025 2.932 2.832 1.692 1.38 3.702 2.47 6.233 2.47C32.112 18 36 13.972 36 9c0-5.005-3.982-9-8.928-9-2.531 0-4.54 1.09-6.233 2.47-.967.79-1.924 1.757-2.87 2.766Zm3.445 3.73c.99 1.068 1.83 1.938 2.679 2.63 1.182.965 2.093 1.334 3.041 1.334 2.105 0 3.81-1.677 3.81-3.93 0-2.22-1.735-3.93-3.872-3.93-.948 0-1.86.369-3.041 1.333-.831.678-1.654 1.527-2.617 2.564Z", fill: "#D82828" })
] }), L0 = (f) => {
  const {
    title: i,
    subtitle: s,
    cards: h
  } = f;
  return /* @__PURE__ */ e.jsxs("div", { className: "gap-gutter px-side-padding p-side-padding py-10 desktop:py-24 desktop:grid desktop:grid-cols-12 desktop:auto-rows-auto", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "col-start-1 col-span-3 row-start-1 row-span-full mb-10 desktop:mb-0", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-36 font-bold mb-4 desktop:mb-1", children: i }),
      /* @__PURE__ */ e.jsx("p", { className: "text-16", children: s })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "col-start-5 col-span-8 flex flex-col items-start gap-y-10 desktop:grid desktop:grid-cols-2 desktop:auto-rows-auto desktop:gap-x-gutter", children: h.map(({ title: c, subtitle: x }, u) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h4", { className: "text-24 font-bold mb-1.5", children: c }),
      /* @__PURE__ */ e.jsx("p", { className: "text-16", children: x })
    ] }, u)) })
  ] });
}, W0 = (f) => {
  const {
    previous: i,
    next: s
  } = f, h = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("svg", { className: "-scale-x-100", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 16", fill: "none", height: "16", width: "17", children: /* @__PURE__ */ e.jsx("path", { d: "M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }),
    "Previous"
  ] }), c = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    "Next",
    /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 16", fill: "none", height: "16", width: "17", children: /* @__PURE__ */ e.jsx("path", { d: "M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978", stroke: "currentColor", strokeWidth: "2", fill: "none" }) })
  ] });
  return /* @__PURE__ */ e.jsxs("div", { className: "border-t border-t-grey-200 pt-10 mt-10 pb-28 flex items-center justify-between", children: [
    !i && /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-3 text-16 font-bold text-grey-400 select-none", children: h }),
    i && /* @__PURE__ */ e.jsx("a", { className: "flex items-center gap-3 text-16 font-bold hover:no-underline", href: i, children: h }),
    !s && /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-3 text-16 font-bold text-grey-400 select-none", children: c }),
    s && /* @__PURE__ */ e.jsx("a", { className: "flex items-center gap-3 text-16 font-bold hover:no-underline", href: s, children: c })
  ] });
}, R0 = (f) => {
  const {
    imageUrl: i,
    imageAlt: s,
    title: h,
    description: c,
    url: x,
    newTab: u = !1
  } = f, m = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("img", { className: "aspect-[3/2] object-cover mb-2 border border-grey-100", src: i, alt: s }),
    /* @__PURE__ */ e.jsx("h2", { className: "transition-colors group-hover:text-infinum -mb-2", children: h }),
    /* @__PURE__ */ e.jsx("p", { children: c })
  ] });
  let d = {};
  return u && (d = {
    target: "_blank",
    rel: "noopener noreferrer"
  }), x ? /* @__PURE__ */ e.jsx("a", { href: x, className: "max-w-sm flex flex-col gap-4 group hover:no-underline transition hover:scale-105", ...d, children: m }) : /* @__PURE__ */ e.jsx("div", { className: "max-w-sm flex flex-col", children: m });
};
export {
  m0 as AdmonitionCard,
  w0 as CtaCards,
  k0 as CtaImageButton,
  g0 as FeatureShowcase,
  j0 as Footer,
  M0 as Hero,
  Z0 as IconLinkCards,
  C0 as ImageAndText,
  b0 as InfinumLogo,
  W0 as Pagination,
  R0 as ShowcaseCard,
  L0 as TextCards,
  D as generalIcons,
  p0 as icons,
  u0 as osProjectIcons
};