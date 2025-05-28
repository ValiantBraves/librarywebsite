(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const p of f.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && s(p)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function s(c) {
        if (c.ep) return;
        c.ep = !0;
        const f = a(c);
        fetch(c.href, f)
    }
})();

function zi(l) {
    return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l
}
var $a = {
        exports: {}
    },
    rl = {},
    Fa = {
        exports: {}
    },
    oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef;

function om() {
    if (Ef) return oe;
    Ef = 1;
    var l = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        f = Symbol.for("react.provider"),
        p = Symbol.for("react.context"),
        y = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        x = Symbol.for("react.memo"),
        k = Symbol.for("react.lazy"),
        j = Symbol.iterator;

    function C(S) {
        return S === null || typeof S != "object" ? null : (S = j && S[j] || S["@@iterator"], typeof S == "function" ? S : null)
    }
    var O = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        P = Object.assign,
        I = {};

    function _(S, L, ee) {
        this.props = S, this.context = L, this.refs = I, this.updater = ee || O
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(S, L) {
        if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, L, "setState")
    }, _.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate")
    };

    function z() {}
    z.prototype = _.prototype;

    function B(S, L, ee) {
        this.props = S, this.context = L, this.refs = I, this.updater = ee || O
    }
    var W = B.prototype = new z;
    W.constructor = B, P(W, _.prototype), W.isPureReactComponent = !0;
    var G = Array.isArray,
        ne = Object.prototype.hasOwnProperty,
        J = {
            current: null
        },
        re = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function ce(S, L, ee) {
        var b, le = {},
            ae = null,
            me = null;
        if (L != null)
            for (b in L.ref !== void 0 && (me = L.ref), L.key !== void 0 && (ae = "" + L.key), L) ne.call(L, b) && !re.hasOwnProperty(b) && (le[b] = L[b]);
        var de = arguments.length - 2;
        if (de === 1) le.children = ee;
        else if (1 < de) {
            for (var ge = Array(de), Ae = 0; Ae < de; Ae++) ge[Ae] = arguments[Ae + 2];
            le.children = ge
        }
        if (S && S.defaultProps)
            for (b in de = S.defaultProps, de) le[b] === void 0 && (le[b] = de[b]);
        return {
            $$typeof: l,
            type: S,
            key: ae,
            ref: me,
            props: le,
            _owner: J.current
        }
    }

    function ye(S, L) {
        return {
            $$typeof: l,
            type: S.type,
            key: L,
            ref: S.ref,
            props: S.props,
            _owner: S._owner
        }
    }

    function ke(S) {
        return typeof S == "object" && S !== null && S.$$typeof === l
    }

    function Je(S) {
        var L = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + S.replace(/[=:]/g, function(ee) {
            return L[ee]
        })
    }
    var Ze = /\/+/g;

    function Oe(S, L) {
        return typeof S == "object" && S !== null && S.key != null ? Je("" + S.key) : L.toString(36)
    }

    function He(S, L, ee, b, le) {
        var ae = typeof S;
        (ae === "undefined" || ae === "boolean") && (S = null);
        var me = !1;
        if (S === null) me = !0;
        else switch (ae) {
            case "string":
            case "number":
                me = !0;
                break;
            case "object":
                switch (S.$$typeof) {
                    case l:
                    case o:
                        me = !0
                }
        }
        if (me) return me = S, le = le(me), S = b === "" ? "." + Oe(me, 0) : b, G(le) ? (ee = "", S != null && (ee = S.replace(Ze, "$&/") + "/"), He(le, L, ee, "", function(Ae) {
            return Ae
        })) : le != null && (ke(le) && (le = ye(le, ee + (!le.key || me && me.key === le.key ? "" : ("" + le.key).replace(Ze, "$&/") + "/") + S)), L.push(le)), 1;
        if (me = 0, b = b === "" ? "." : b + ":", G(S))
            for (var de = 0; de < S.length; de++) {
                ae = S[de];
                var ge = b + Oe(ae, de);
                me += He(ae, L, ee, ge, le)
            } else if (ge = C(S), typeof ge == "function")
                for (S = ge.call(S), de = 0; !(ae = S.next()).done;) ae = ae.value, ge = b + Oe(ae, de++), me += He(ae, L, ee, ge, le);
            else if (ae === "object") throw L = String(S), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
        return me
    }

    function qe(S, L, ee) {
        if (S == null) return S;
        var b = [],
            le = 0;
        return He(S, b, "", "", function(ae) {
            return L.call(ee, ae, le++)
        }), b
    }

    function xe(S) {
        if (S._status === -1) {
            var L = S._result;
            L = L(), L.then(function(ee) {
                (S._status === 0 || S._status === -1) && (S._status = 1, S._result = ee)
            }, function(ee) {
                (S._status === 0 || S._status === -1) && (S._status = 2, S._result = ee)
            }), S._status === -1 && (S._status = 0, S._result = L)
        }
        if (S._status === 1) return S._result.default;
        throw S._result
    }
    var pe = {
            current: null
        },
        F = {
            transition: null
        },
        X = {
            ReactCurrentDispatcher: pe,
            ReactCurrentBatchConfig: F,
            ReactCurrentOwner: J
        };

    function H() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return oe.Children = {
        map: qe,
        forEach: function(S, L, ee) {
            qe(S, function() {
                L.apply(this, arguments)
            }, ee)
        },
        count: function(S) {
            var L = 0;
            return qe(S, function() {
                L++
            }), L
        },
        toArray: function(S) {
            return qe(S, function(L) {
                return L
            }) || []
        },
        only: function(S) {
            if (!ke(S)) throw Error("React.Children.only expected to receive a single React element child.");
            return S
        }
    }, oe.Component = _, oe.Fragment = a, oe.Profiler = c, oe.PureComponent = B, oe.StrictMode = s, oe.Suspense = g, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, oe.act = H, oe.cloneElement = function(S, L, ee) {
        if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var b = P({}, S.props),
            le = S.key,
            ae = S.ref,
            me = S._owner;
        if (L != null) {
            if (L.ref !== void 0 && (ae = L.ref, me = J.current), L.key !== void 0 && (le = "" + L.key), S.type && S.type.defaultProps) var de = S.type.defaultProps;
            for (ge in L) ne.call(L, ge) && !re.hasOwnProperty(ge) && (b[ge] = L[ge] === void 0 && de !== void 0 ? de[ge] : L[ge])
        }
        var ge = arguments.length - 2;
        if (ge === 1) b.children = ee;
        else if (1 < ge) {
            de = Array(ge);
            for (var Ae = 0; Ae < ge; Ae++) de[Ae] = arguments[Ae + 2];
            b.children = de
        }
        return {
            $$typeof: l,
            type: S.type,
            key: le,
            ref: ae,
            props: b,
            _owner: me
        }
    }, oe.createContext = function(S) {
        return S = {
            $$typeof: p,
            _currentValue: S,
            _currentValue2: S,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, S.Provider = {
            $$typeof: f,
            _context: S
        }, S.Consumer = S
    }, oe.createElement = ce, oe.createFactory = function(S) {
        var L = ce.bind(null, S);
        return L.type = S, L
    }, oe.createRef = function() {
        return {
            current: null
        }
    }, oe.forwardRef = function(S) {
        return {
            $$typeof: y,
            render: S
        }
    }, oe.isValidElement = ke, oe.lazy = function(S) {
        return {
            $$typeof: k,
            _payload: {
                _status: -1,
                _result: S
            },
            _init: xe
        }
    }, oe.memo = function(S, L) {
        return {
            $$typeof: x,
            type: S,
            compare: L === void 0 ? null : L
        }
    }, oe.startTransition = function(S) {
        var L = F.transition;
        F.transition = {};
        try {
            S()
        } finally {
            F.transition = L
        }
    }, oe.unstable_act = H, oe.useCallback = function(S, L) {
        return pe.current.useCallback(S, L)
    }, oe.useContext = function(S) {
        return pe.current.useContext(S)
    }, oe.useDebugValue = function() {}, oe.useDeferredValue = function(S) {
        return pe.current.useDeferredValue(S)
    }, oe.useEffect = function(S, L) {
        return pe.current.useEffect(S, L)
    }, oe.useId = function() {
        return pe.current.useId()
    }, oe.useImperativeHandle = function(S, L, ee) {
        return pe.current.useImperativeHandle(S, L, ee)
    }, oe.useInsertionEffect = function(S, L) {
        return pe.current.useInsertionEffect(S, L)
    }, oe.useLayoutEffect = function(S, L) {
        return pe.current.useLayoutEffect(S, L)
    }, oe.useMemo = function(S, L) {
        return pe.current.useMemo(S, L)
    }, oe.useReducer = function(S, L, ee) {
        return pe.current.useReducer(S, L, ee)
    }, oe.useRef = function(S) {
        return pe.current.useRef(S)
    }, oe.useState = function(S) {
        return pe.current.useState(S)
    }, oe.useSyncExternalStore = function(S, L, ee) {
        return pe.current.useSyncExternalStore(S, L, ee)
    }, oe.useTransition = function() {
        return pe.current.useTransition()
    }, oe.version = "18.3.1", oe
}
var Sf;

function ou() {
    return Sf || (Sf = 1, Fa.exports = om()), Fa.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;

function am() {
    if (Cf) return rl;
    Cf = 1;
    var l = ou(),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function p(y, g, x) {
        var k, j = {},
            C = null,
            O = null;
        x !== void 0 && (C = "" + x), g.key !== void 0 && (C = "" + g.key), g.ref !== void 0 && (O = g.ref);
        for (k in g) s.call(g, k) && !f.hasOwnProperty(k) && (j[k] = g[k]);
        if (y && y.defaultProps)
            for (k in g = y.defaultProps, g) j[k] === void 0 && (j[k] = g[k]);
        return {
            $$typeof: o,
            type: y,
            key: C,
            ref: O,
            props: j,
            _owner: c.current
        }
    }
    return rl.Fragment = a, rl.jsx = p, rl.jsxs = p, rl
}
var kf;

function um() {
    return kf || (kf = 1, $a.exports = am()), $a.exports
}
var h = um(),
    m = ou();
const Ge = zi(m);
var Ci = {},
    Aa = {
        exports: {}
    },
    lt = {},
    Ba = {
        exports: {}
    },
    Ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nf;

function sm() {
    return Nf || (Nf = 1, function(l) {
        function o(F, X) {
            var H = F.length;
            F.push(X);
            e: for (; 0 < H;) {
                var S = H - 1 >>> 1,
                    L = F[S];
                if (0 < c(L, X)) F[S] = X, F[H] = L, H = S;
                else break e
            }
        }

        function a(F) {
            return F.length === 0 ? null : F[0]
        }

        function s(F) {
            if (F.length === 0) return null;
            var X = F[0],
                H = F.pop();
            if (H !== X) {
                F[0] = H;
                e: for (var S = 0, L = F.length, ee = L >>> 1; S < ee;) {
                    var b = 2 * (S + 1) - 1,
                        le = F[b],
                        ae = b + 1,
                        me = F[ae];
                    if (0 > c(le, H)) ae < L && 0 > c(me, le) ? (F[S] = me, F[ae] = H, S = ae) : (F[S] = le, F[b] = H, S = b);
                    else if (ae < L && 0 > c(me, H)) F[S] = me, F[ae] = H, S = ae;
                    else break e
                }
            }
            return X
        }

        function c(F, X) {
            var H = F.sortIndex - X.sortIndex;
            return H !== 0 ? H : F.id - X.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            l.unstable_now = function() {
                return f.now()
            }
        } else {
            var p = Date,
                y = p.now();
            l.unstable_now = function() {
                return p.now() - y
            }
        }
        var g = [],
            x = [],
            k = 1,
            j = null,
            C = 3,
            O = !1,
            P = !1,
            I = !1,
            _ = typeof setTimeout == "function" ? setTimeout : null,
            z = typeof clearTimeout == "function" ? clearTimeout : null,
            B = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function W(F) {
            for (var X = a(x); X !== null;) {
                if (X.callback === null) s(x);
                else if (X.startTime <= F) s(x), X.sortIndex = X.expirationTime, o(g, X);
                else break;
                X = a(x)
            }
        }

        function G(F) {
            if (I = !1, W(F), !P)
                if (a(g) !== null) P = !0, xe(ne);
                else {
                    var X = a(x);
                    X !== null && pe(G, X.startTime - F)
                }
        }

        function ne(F, X) {
            P = !1, I && (I = !1, z(ce), ce = -1), O = !0;
            var H = C;
            try {
                for (W(X), j = a(g); j !== null && (!(j.expirationTime > X) || F && !Je());) {
                    var S = j.callback;
                    if (typeof S == "function") {
                        j.callback = null, C = j.priorityLevel;
                        var L = S(j.expirationTime <= X);
                        X = l.unstable_now(), typeof L == "function" ? j.callback = L : j === a(g) && s(g), W(X)
                    } else s(g);
                    j = a(g)
                }
                if (j !== null) var ee = !0;
                else {
                    var b = a(x);
                    b !== null && pe(G, b.startTime - X), ee = !1
                }
                return ee
            } finally {
                j = null, C = H, O = !1
            }
        }
        var J = !1,
            re = null,
            ce = -1,
            ye = 5,
            ke = -1;

        function Je() {
            return !(l.unstable_now() - ke < ye)
        }

        function Ze() {
            if (re !== null) {
                var F = l.unstable_now();
                ke = F;
                var X = !0;
                try {
                    X = re(!0, F)
                } finally {
                    X ? Oe() : (J = !1, re = null)
                }
            } else J = !1
        }
        var Oe;
        if (typeof B == "function") Oe = function() {
            B(Ze)
        };
        else if (typeof MessageChannel < "u") {
            var He = new MessageChannel,
                qe = He.port2;
            He.port1.onmessage = Ze, Oe = function() {
                qe.postMessage(null)
            }
        } else Oe = function() {
            _(Ze, 0)
        };

        function xe(F) {
            re = F, J || (J = !0, Oe())
        }

        function pe(F, X) {
            ce = _(function() {
                F(l.unstable_now())
            }, X)
        }
        l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(F) {
            F.callback = null
        }, l.unstable_continueExecution = function() {
            P || O || (P = !0, xe(ne))
        }, l.unstable_forceFrameRate = function(F) {
            0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ye = 0 < F ? Math.floor(1e3 / F) : 5
        }, l.unstable_getCurrentPriorityLevel = function() {
            return C
        }, l.unstable_getFirstCallbackNode = function() {
            return a(g)
        }, l.unstable_next = function(F) {
            switch (C) {
                case 1:
                case 2:
                case 3:
                    var X = 3;
                    break;
                default:
                    X = C
            }
            var H = C;
            C = X;
            try {
                return F()
            } finally {
                C = H
            }
        }, l.unstable_pauseExecution = function() {}, l.unstable_requestPaint = function() {}, l.unstable_runWithPriority = function(F, X) {
            switch (F) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    F = 3
            }
            var H = C;
            C = F;
            try {
                return X()
            } finally {
                C = H
            }
        }, l.unstable_scheduleCallback = function(F, X, H) {
            var S = l.unstable_now();
            switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? S + H : S) : H = S, F) {
                case 1:
                    var L = -1;
                    break;
                case 2:
                    L = 250;
                    break;
                case 5:
                    L = 1073741823;
                    break;
                case 4:
                    L = 1e4;
                    break;
                default:
                    L = 5e3
            }
            return L = H + L, F = {
                id: k++,
                callback: X,
                priorityLevel: F,
                startTime: H,
                expirationTime: L,
                sortIndex: -1
            }, H > S ? (F.sortIndex = H, o(x, F), a(g) === null && F === a(x) && (I ? (z(ce), ce = -1) : I = !0, pe(G, H - S))) : (F.sortIndex = L, o(g, F), P || O || (P = !0, xe(ne))), F
        }, l.unstable_shouldYield = Je, l.unstable_wrapCallback = function(F) {
            var X = C;
            return function() {
                var H = C;
                C = X;
                try {
                    return F.apply(this, arguments)
                } finally {
                    C = H
                }
            }
        }
    }(Ua)), Ua
}
var Rf;

function cm() {
    return Rf || (Rf = 1, Ba.exports = sm()), Ba.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jf;

function fm() {
    if (jf) return lt;
    jf = 1;
    var l = ou(),
        o = cm();

    function a(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var s = new Set,
        c = {};

    function f(e, t) {
        p(e, t), p(e + "Capture", t)
    }

    function p(e, t) {
        for (c[e] = t, e = 0; e < t.length; e++) s.add(t[e])
    }
    var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        g = Object.prototype.hasOwnProperty,
        x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        k = {},
        j = {};

    function C(e) {
        return g.call(j, e) ? !0 : g.call(k, e) ? !1 : x.test(e) ? j[e] = !0 : (k[e] = !0, !1)
    }

    function O(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function P(e, t, n, r) {
        if (t === null || typeof t > "u" || O(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function I(e, t, n, r, i, u, d) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = d
    }
    var _ = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        _[e] = new I(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        _[t] = new I(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        _[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        _[e] = new I(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        _[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        _[e] = new I(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        _[e] = new I(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        _[e] = new I(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        _[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var z = /[\-:]([a-z])/g;

    function B(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(z, B);
        _[t] = new I(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(z, B);
        _[t] = new I(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(z, B);
        _[t] = new I(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        _[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), _.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        _[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function W(e, t, n, r) {
        var i = _.hasOwnProperty(t) ? _[t] : null;
        (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P(t, n, i, r) && (n = null), r || i === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var G = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ne = Symbol.for("react.element"),
        J = Symbol.for("react.portal"),
        re = Symbol.for("react.fragment"),
        ce = Symbol.for("react.strict_mode"),
        ye = Symbol.for("react.profiler"),
        ke = Symbol.for("react.provider"),
        Je = Symbol.for("react.context"),
        Ze = Symbol.for("react.forward_ref"),
        Oe = Symbol.for("react.suspense"),
        He = Symbol.for("react.suspense_list"),
        qe = Symbol.for("react.memo"),
        xe = Symbol.for("react.lazy"),
        pe = Symbol.for("react.offscreen"),
        F = Symbol.iterator;

    function X(e) {
        return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var H = Object.assign,
        S;

    function L(e) {
        if (S === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            S = t && t[1] || ""
        }
        return `
` + S + e
    }
    var ee = !1;

    function b(e, t) {
        if (!e || ee) return "";
        ee = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (T) {
                        var r = T
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (T) {
                        r = T
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (T) {
                    r = T
                }
                e()
            }
        } catch (T) {
            if (T && r && typeof T.stack == "string") {
                for (var i = T.stack.split(`
`), u = r.stack.split(`
`), d = i.length - 1, v = u.length - 1; 1 <= d && 0 <= v && i[d] !== u[v];) v--;
                for (; 1 <= d && 0 <= v; d--, v--)
                    if (i[d] !== u[v]) {
                        if (d !== 1 || v !== 1)
                            do
                                if (d--, v--, 0 > v || i[d] !== u[v]) {
                                    var w = `
` + i[d].replace(" at new ", " at ");
                                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w
                                } while (1 <= d && 0 <= v);
                        break
                    }
            }
        } finally {
            ee = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? L(e) : ""
    }

    function le(e) {
        switch (e.tag) {
            case 5:
                return L(e.type);
            case 16:
                return L("Lazy");
            case 13:
                return L("Suspense");
            case 19:
                return L("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = b(e.type, !1), e;
            case 11:
                return e = b(e.type.render, !1), e;
            case 1:
                return e = b(e.type, !0), e;
            default:
                return ""
        }
    }

    function ae(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case re:
                return "Fragment";
            case J:
                return "Portal";
            case ye:
                return "Profiler";
            case ce:
                return "StrictMode";
            case Oe:
                return "Suspense";
            case He:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case Je:
                return (e.displayName || "Context") + ".Consumer";
            case ke:
                return (e._context.displayName || "Context") + ".Provider";
            case Ze:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case qe:
                return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
            case xe:
                t = e._payload, e = e._init;
                try {
                    return ae(e(t))
                } catch {}
        }
        return null
    }

    function me(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return ae(t);
            case 8:
                return t === ce ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function de(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function ge(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Ae(e) {
        var t = ge(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var i = n.get,
                u = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(d) {
                    r = "" + d, u.call(this, d)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(d) {
                    r = "" + d
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function An(e) {
        e._valueTracker || (e._valueTracker = Ae(e))
    }

    function gr(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = ge(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
    }

    function Jt(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Zt(e, t) {
        var n = t.checked;
        return H({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }

    function Se(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        n = de(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function yr(e, t) {
        t = t.checked, t != null && W(e, "checked", t, !1)
    }

    function En(e, t) {
        yr(e, t);
        var n = de(t.value),
            r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ki(e, t.type, de(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function Pu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function Ki(e, t, n) {
        (t !== "number" || Jt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var vr = Array.isArray;

    function Bn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + de(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0, r && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Qi(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
        return H({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function _u(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(a(92));
                if (vr(n)) {
                    if (1 < n.length) throw Error(a(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: de(n)
        }
    }

    function Lu(e, t) {
        var n = de(t.value),
            r = de(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
    }

    function Ou(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function Du(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Gi(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Du(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var ml, Mu = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, i)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (ml = ml || document.createElement("div"), ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ml.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function xr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var wr = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        fp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(wr).forEach(function(e) {
        fp.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e]
        })
    });

    function Iu(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px"
    }

    function zu(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    i = Iu(n, t[n], r);
                n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
            }
    }
    var dp = H({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Yi(e, t) {
        if (t) {
            if (dp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(a(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(a(62))
        }
    }

    function Xi(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Ji = null;

    function Zi(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var qi = null,
        Un = null,
        Hn = null;

    function $u(e) {
        if (e = Hr(e)) {
            if (typeof qi != "function") throw Error(a(280));
            var t = e.stateNode;
            t && (t = Fl(t), qi(e.stateNode, e.type, t))
        }
    }

    function Fu(e) {
        Un ? Hn ? Hn.push(e) : Hn = [e] : Un = e
    }

    function Au() {
        if (Un) {
            var e = Un,
                t = Hn;
            if (Hn = Un = null, $u(e), t)
                for (e = 0; e < t.length; e++) $u(t[e])
        }
    }

    function Bu(e, t) {
        return e(t)
    }

    function Uu() {}
    var bi = !1;

    function Hu(e, t, n) {
        if (bi) return e(t, n);
        bi = !0;
        try {
            return Bu(e, t, n)
        } finally {
            bi = !1, (Un !== null || Hn !== null) && (Uu(), Au())
        }
    }

    function Er(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Fl(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(a(231, t, typeof n));
        return n
    }
    var eo = !1;
    if (y) try {
        var Sr = {};
        Object.defineProperty(Sr, "passive", {
            get: function() {
                eo = !0
            }
        }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr)
    } catch {
        eo = !1
    }

    function pp(e, t, n, r, i, u, d, v, w) {
        var T = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, T)
        } catch (M) {
            this.onError(M)
        }
    }
    var Cr = !1,
        gl = null,
        yl = !1,
        to = null,
        hp = {
            onError: function(e) {
                Cr = !0, gl = e
            }
        };

    function mp(e, t, n, r, i, u, d, v, w) {
        Cr = !1, gl = null, pp.apply(hp, arguments)
    }

    function gp(e, t, n, r, i, u, d, v, w) {
        if (mp.apply(this, arguments), Cr) {
            if (Cr) {
                var T = gl;
                Cr = !1, gl = null
            } else throw Error(a(198));
            yl || (yl = !0, to = T)
        }
    }

    function Sn(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function Wu(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function Vu(e) {
        if (Sn(e) !== e) throw Error(a(188))
    }

    function yp(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Sn(e), t === null) throw Error(a(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var i = n.return;
            if (i === null) break;
            var u = i.alternate;
            if (u === null) {
                if (r = i.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (i.child === u.child) {
                for (u = i.child; u;) {
                    if (u === n) return Vu(i), e;
                    if (u === r) return Vu(i), t;
                    u = u.sibling
                }
                throw Error(a(188))
            }
            if (n.return !== r.return) n = i, r = u;
            else {
                for (var d = !1, v = i.child; v;) {
                    if (v === n) {
                        d = !0, n = i, r = u;
                        break
                    }
                    if (v === r) {
                        d = !0, r = i, n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!d) {
                    for (v = u.child; v;) {
                        if (v === n) {
                            d = !0, n = u, r = i;
                            break
                        }
                        if (v === r) {
                            d = !0, r = u, n = i;
                            break
                        }
                        v = v.sibling
                    }
                    if (!d) throw Error(a(189))
                }
            }
            if (n.alternate !== r) throw Error(a(190))
        }
        if (n.tag !== 3) throw Error(a(188));
        return n.stateNode.current === n ? e : t
    }

    function Ku(e) {
        return e = yp(e), e !== null ? Qu(e) : null
    }

    function Qu(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = Qu(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var Gu = o.unstable_scheduleCallback,
        Yu = o.unstable_cancelCallback,
        vp = o.unstable_shouldYield,
        xp = o.unstable_requestPaint,
        Pe = o.unstable_now,
        wp = o.unstable_getCurrentPriorityLevel,
        no = o.unstable_ImmediatePriority,
        Xu = o.unstable_UserBlockingPriority,
        vl = o.unstable_NormalPriority,
        Ep = o.unstable_LowPriority,
        Ju = o.unstable_IdlePriority,
        xl = null,
        Tt = null;

    function Sp(e) {
        if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
            Tt.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var vt = Math.clz32 ? Math.clz32 : Np,
        Cp = Math.log,
        kp = Math.LN2;

    function Np(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Cp(e) / kp | 0) | 0
    }
    var wl = 64,
        El = 4194304;

    function kr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function Sl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            i = e.suspendedLanes,
            u = e.pingedLanes,
            d = n & 268435455;
        if (d !== 0) {
            var v = d & ~i;
            v !== 0 ? r = kr(v) : (u &= d, u !== 0 && (r = kr(u)))
        } else d = n & ~i, d !== 0 ? r = kr(d) : u !== 0 && (r = kr(u));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & i) && (i = r & -r, u = t & -t, i >= u || i === 16 && (u & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= r; 0 < t;) n = 31 - vt(t), i = 1 << n, r |= e[n], t &= ~i;
        return r
    }

    function Rp(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function jp(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes; 0 < u;) {
            var d = 31 - vt(u),
                v = 1 << d,
                w = i[d];
            w === -1 ? (!(v & n) || v & r) && (i[d] = Rp(v, t)) : w <= t && (e.expiredLanes |= v), u &= ~v
        }
    }

    function ro(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function Zu() {
        var e = wl;
        return wl <<= 1, !(wl & 4194240) && (wl = 64), e
    }

    function lo(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Nr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n
    }

    function Tp(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var i = 31 - vt(n),
                u = 1 << i;
            t[i] = 0, r[i] = -1, e[i] = -1, n &= ~u
        }
    }

    function io(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - vt(n),
                i = 1 << r;
            i & t | e[r] & t && (e[r] |= t), n &= ~i
        }
    }
    var he = 0;

    function qu(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var bu, oo, es, ts, ns, ao = !1,
        Cl = [],
        qt = null,
        bt = null,
        en = null,
        Rr = new Map,
        jr = new Map,
        tn = [],
        Pp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function rs(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                qt = null;
                break;
            case "dragenter":
            case "dragleave":
                bt = null;
                break;
            case "mouseover":
            case "mouseout":
                en = null;
                break;
            case "pointerover":
            case "pointerout":
                Rr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                jr.delete(t.pointerId)
        }
    }

    function Tr(e, t, n, r, i, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: u,
            targetContainers: [i]
        }, t !== null && (t = Hr(t), t !== null && oo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
    }

    function _p(e, t, n, r, i) {
        switch (t) {
            case "focusin":
                return qt = Tr(qt, e, t, n, r, i), !0;
            case "dragenter":
                return bt = Tr(bt, e, t, n, r, i), !0;
            case "mouseover":
                return en = Tr(en, e, t, n, r, i), !0;
            case "pointerover":
                var u = i.pointerId;
                return Rr.set(u, Tr(Rr.get(u) || null, e, t, n, r, i)), !0;
            case "gotpointercapture":
                return u = i.pointerId, jr.set(u, Tr(jr.get(u) || null, e, t, n, r, i)), !0
        }
        return !1
    }

    function ls(e) {
        var t = Cn(e.target);
        if (t !== null) {
            var n = Sn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Wu(n), t !== null) {
                        e.blockedOn = t, ns(e.priority, function() {
                            es(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function kl(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = so(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Ji = r, n.target.dispatchEvent(r), Ji = null
            } else return t = Hr(n), t !== null && oo(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function is(e, t, n) {
        kl(e) && n.delete(t)
    }

    function Lp() {
        ao = !1, qt !== null && kl(qt) && (qt = null), bt !== null && kl(bt) && (bt = null), en !== null && kl(en) && (en = null), Rr.forEach(is), jr.forEach(is)
    }

    function Pr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, ao || (ao = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Lp)))
    }

    function _r(e) {
        function t(i) {
            return Pr(i, e)
        }
        if (0 < Cl.length) {
            Pr(Cl[0], e);
            for (var n = 1; n < Cl.length; n++) {
                var r = Cl[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (qt !== null && Pr(qt, e), bt !== null && Pr(bt, e), en !== null && Pr(en, e), Rr.forEach(t), jr.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < tn.length && (n = tn[0], n.blockedOn === null);) ls(n), n.blockedOn === null && tn.shift()
    }
    var Wn = G.ReactCurrentBatchConfig,
        Nl = !0;

    function Op(e, t, n, r) {
        var i = he,
            u = Wn.transition;
        Wn.transition = null;
        try {
            he = 1, uo(e, t, n, r)
        } finally {
            he = i, Wn.transition = u
        }
    }

    function Dp(e, t, n, r) {
        var i = he,
            u = Wn.transition;
        Wn.transition = null;
        try {
            he = 4, uo(e, t, n, r)
        } finally {
            he = i, Wn.transition = u
        }
    }

    function uo(e, t, n, r) {
        if (Nl) {
            var i = so(e, t, n, r);
            if (i === null) jo(e, t, r, Rl, n), rs(e, r);
            else if (_p(i, e, t, n, r)) r.stopPropagation();
            else if (rs(e, r), t & 4 && -1 < Pp.indexOf(e)) {
                for (; i !== null;) {
                    var u = Hr(i);
                    if (u !== null && bu(u), u = so(e, t, n, r), u === null && jo(e, t, r, Rl, n), u === i) break;
                    i = u
                }
                i !== null && r.stopPropagation()
            } else jo(e, t, r, null, n)
        }
    }
    var Rl = null;

    function so(e, t, n, r) {
        if (Rl = null, e = Zi(r), e = Cn(e), e !== null)
            if (t = Sn(e), t === null) e = null;
            else if (n = t.tag, n === 13) {
            if (e = Wu(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return Rl = e, null
    }

    function os(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (wp()) {
                    case no:
                        return 1;
                    case Xu:
                        return 4;
                    case vl:
                    case Ep:
                        return 16;
                    case Ju:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var nn = null,
        co = null,
        jl = null;

    function as() {
        if (jl) return jl;
        var e, t = co,
            n = t.length,
            r, i = "value" in nn ? nn.value : nn.textContent,
            u = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++);
        var d = n - e;
        for (r = 1; r <= d && t[n - r] === i[u - r]; r++);
        return jl = i.slice(e, 1 < r ? 1 - r : void 0)
    }

    function Tl(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Pl() {
        return !0
    }

    function us() {
        return !1
    }

    function ot(e) {
        function t(n, r, i, u, d) {
            this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = u, this.target = d, this.currentTarget = null;
            for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Pl : us, this.isPropagationStopped = us, this
        }
        return H(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pl)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pl)
            },
            persist: function() {},
            isPersistent: Pl
        }), t
    }
    var Vn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        fo = ot(Vn),
        Lr = H({}, Vn, {
            view: 0,
            detail: 0
        }),
        Mp = ot(Lr),
        po, ho, Or, _l = H({}, Lr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: go,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (po = e.screenX - Or.screenX, ho = e.screenY - Or.screenY) : ho = po = 0, Or = e), po)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : ho
            }
        }),
        ss = ot(_l),
        Ip = H({}, _l, {
            dataTransfer: 0
        }),
        zp = ot(Ip),
        $p = H({}, Lr, {
            relatedTarget: 0
        }),
        mo = ot($p),
        Fp = H({}, Vn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Ap = ot(Fp),
        Bp = H({}, Vn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Up = ot(Bp),
        Hp = H({}, Vn, {
            data: 0
        }),
        cs = ot(Hp),
        Wp = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Vp = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Kp = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Qp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Kp[e]) ? !!t[e] : !1
    }

    function go() {
        return Qp
    }
    var Gp = H({}, Lr, {
            key: function(e) {
                if (e.key) {
                    var t = Wp[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Tl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vp[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: go,
            charCode: function(e) {
                return e.type === "keypress" ? Tl(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Yp = ot(Gp),
        Xp = H({}, _l, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        fs = ot(Xp),
        Jp = H({}, Lr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: go
        }),
        Zp = ot(Jp),
        qp = H({}, Vn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        bp = ot(qp),
        eh = H({}, _l, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        th = ot(eh),
        nh = [9, 13, 27, 32],
        yo = y && "CompositionEvent" in window,
        Dr = null;
    y && "documentMode" in document && (Dr = document.documentMode);
    var rh = y && "TextEvent" in window && !Dr,
        ds = y && (!yo || Dr && 8 < Dr && 11 >= Dr),
        ps = " ",
        hs = !1;

    function ms(e, t) {
        switch (e) {
            case "keyup":
                return nh.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function gs(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Kn = !1;

    function lh(e, t) {
        switch (e) {
            case "compositionend":
                return gs(t);
            case "keypress":
                return t.which !== 32 ? null : (hs = !0, ps);
            case "textInput":
                return e = t.data, e === ps && hs ? null : e;
            default:
                return null
        }
    }

    function ih(e, t) {
        if (Kn) return e === "compositionend" || !yo && ms(e, t) ? (e = as(), jl = co = nn = null, Kn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return ds && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var oh = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function ys(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!oh[e.type] : t === "textarea"
    }

    function vs(e, t, n, r) {
        Fu(r), t = Il(t, "onChange"), 0 < t.length && (n = new fo("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var Mr = null,
        Ir = null;

    function ah(e) {
        zs(e, 0)
    }

    function Ll(e) {
        var t = Jn(e);
        if (gr(t)) return e
    }

    function uh(e, t) {
        if (e === "change") return t
    }
    var xs = !1;
    if (y) {
        var vo;
        if (y) {
            var xo = "oninput" in document;
            if (!xo) {
                var ws = document.createElement("div");
                ws.setAttribute("oninput", "return;"), xo = typeof ws.oninput == "function"
            }
            vo = xo
        } else vo = !1;
        xs = vo && (!document.documentMode || 9 < document.documentMode)
    }

    function Es() {
        Mr && (Mr.detachEvent("onpropertychange", Ss), Ir = Mr = null)
    }

    function Ss(e) {
        if (e.propertyName === "value" && Ll(Ir)) {
            var t = [];
            vs(t, Ir, e, Zi(e)), Hu(ah, t)
        }
    }

    function sh(e, t, n) {
        e === "focusin" ? (Es(), Mr = t, Ir = n, Mr.attachEvent("onpropertychange", Ss)) : e === "focusout" && Es()
    }

    function ch(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ll(Ir)
    }

    function fh(e, t) {
        if (e === "click") return Ll(t)
    }

    function dh(e, t) {
        if (e === "input" || e === "change") return Ll(t)
    }

    function ph(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var xt = typeof Object.is == "function" ? Object.is : ph;

    function zr(e, t) {
        if (xt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!g.call(t, i) || !xt(e[i], t[i])) return !1
        }
        return !0
    }

    function Cs(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function ks(e, t) {
        var n = Cs(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Cs(n)
        }
    }

    function Ns(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ns(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Rs() {
        for (var e = window, t = Jt(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = Jt(e.document)
        }
        return t
    }

    function wo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function hh(e) {
        var t = Rs(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Ns(n.ownerDocument.documentElement, n)) {
            if (r !== null && wo(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var i = n.textContent.length,
                        u = Math.min(r.start, i);
                    r = r.end === void 0 ? u : Math.min(r.end, i), !e.extend && u > r && (i = r, r = u, u = i), i = ks(n, u);
                    var d = ks(n, r);
                    i && d && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var mh = y && "documentMode" in document && 11 >= document.documentMode,
        Qn = null,
        Eo = null,
        $r = null,
        So = !1;

    function js(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        So || Qn == null || Qn !== Jt(r) || (r = Qn, "selectionStart" in r && wo(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), $r && zr($r, r) || ($r = r, r = Il(Eo, "onSelect"), 0 < r.length && (t = new fo("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Qn)))
    }

    function Ol(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var Gn = {
            animationend: Ol("Animation", "AnimationEnd"),
            animationiteration: Ol("Animation", "AnimationIteration"),
            animationstart: Ol("Animation", "AnimationStart"),
            transitionend: Ol("Transition", "TransitionEnd")
        },
        Co = {},
        Ts = {};
    y && (Ts = document.createElement("div").style, "AnimationEvent" in window || (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation), "TransitionEvent" in window || delete Gn.transitionend.transition);

    function Dl(e) {
        if (Co[e]) return Co[e];
        if (!Gn[e]) return e;
        var t = Gn[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Ts) return Co[e] = t[n];
        return e
    }
    var Ps = Dl("animationend"),
        _s = Dl("animationiteration"),
        Ls = Dl("animationstart"),
        Os = Dl("transitionend"),
        Ds = new Map,
        Ms = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function rn(e, t) {
        Ds.set(e, t), f(t, [e])
    }
    for (var ko = 0; ko < Ms.length; ko++) {
        var No = Ms[ko],
            gh = No.toLowerCase(),
            yh = No[0].toUpperCase() + No.slice(1);
        rn(gh, "on" + yh)
    }
    rn(Ps, "onAnimationEnd"), rn(_s, "onAnimationIteration"), rn(Ls, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(Os, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        vh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));

    function Is(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, gp(r, t, void 0, e), e.currentTarget = null
    }

    function zs(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = r.event;
            r = r.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var d = r.length - 1; 0 <= d; d--) {
                        var v = r[d],
                            w = v.instance,
                            T = v.currentTarget;
                        if (v = v.listener, w !== u && i.isPropagationStopped()) break e;
                        Is(i, v, T), u = w
                    } else
                        for (d = 0; d < r.length; d++) {
                            if (v = r[d], w = v.instance, T = v.currentTarget, v = v.listener, w !== u && i.isPropagationStopped()) break e;
                            Is(i, v, T), u = w
                        }
            }
        }
        if (yl) throw e = to, yl = !1, to = null, e
    }

    function we(e, t) {
        var n = t[Do];
        n === void 0 && (n = t[Do] = new Set);
        var r = e + "__bubble";
        n.has(r) || ($s(t, e, 2, !1), n.add(r))
    }

    function Ro(e, t, n) {
        var r = 0;
        t && (r |= 4), $s(n, e, r, t)
    }
    var Ml = "_reactListening" + Math.random().toString(36).slice(2);

    function Ar(e) {
        if (!e[Ml]) {
            e[Ml] = !0, s.forEach(function(n) {
                n !== "selectionchange" && (vh.has(n) || Ro(n, !1, e), Ro(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ml] || (t[Ml] = !0, Ro("selectionchange", !1, t))
        }
    }

    function $s(e, t, n, r) {
        switch (os(t)) {
            case 1:
                var i = Op;
                break;
            case 4:
                i = Dp;
                break;
            default:
                i = uo
        }
        n = i.bind(null, t, n, e), i = void 0, !eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
    }

    function jo(e, t, n, r, i) {
        var u = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
            if (r === null) return;
            var d = r.tag;
            if (d === 3 || d === 4) {
                var v = r.stateNode.containerInfo;
                if (v === i || v.nodeType === 8 && v.parentNode === i) break;
                if (d === 4)
                    for (d = r.return; d !== null;) {
                        var w = d.tag;
                        if ((w === 3 || w === 4) && (w = d.stateNode.containerInfo, w === i || w.nodeType === 8 && w.parentNode === i)) return;
                        d = d.return
                    }
                for (; v !== null;) {
                    if (d = Cn(v), d === null) return;
                    if (w = d.tag, w === 5 || w === 6) {
                        r = u = d;
                        continue e
                    }
                    v = v.parentNode
                }
            }
            r = r.return
        }
        Hu(function() {
            var T = u,
                M = Zi(n),
                $ = [];
            e: {
                var D = Ds.get(e);
                if (D !== void 0) {
                    var U = fo,
                        K = e;
                    switch (e) {
                        case "keypress":
                            if (Tl(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            U = Yp;
                            break;
                        case "focusin":
                            K = "focus", U = mo;
                            break;
                        case "focusout":
                            K = "blur", U = mo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            U = mo;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            U = ss;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            U = zp;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            U = Zp;
                            break;
                        case Ps:
                        case _s:
                        case Ls:
                            U = Ap;
                            break;
                        case Os:
                            U = bp;
                            break;
                        case "scroll":
                            U = Mp;
                            break;
                        case "wheel":
                            U = th;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            U = Up;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            U = fs
                    }
                    var Q = (t & 4) !== 0,
                        _e = !Q && e === "scroll",
                        N = Q ? D !== null ? D + "Capture" : null : D;
                    Q = [];
                    for (var E = T, R; E !== null;) {
                        R = E;
                        var A = R.stateNode;
                        if (R.tag === 5 && A !== null && (R = A, N !== null && (A = Er(E, N), A != null && Q.push(Br(E, A, R)))), _e) break;
                        E = E.return
                    }
                    0 < Q.length && (D = new U(D, K, null, n, M), $.push({
                        event: D,
                        listeners: Q
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (D = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", D && n !== Ji && (K = n.relatedTarget || n.fromElement) && (Cn(K) || K[Mt])) break e;
                    if ((U || D) && (D = M.window === M ? M : (D = M.ownerDocument) ? D.defaultView || D.parentWindow : window, U ? (K = n.relatedTarget || n.toElement, U = T, K = K ? Cn(K) : null, K !== null && (_e = Sn(K), K !== _e || K.tag !== 5 && K.tag !== 6) && (K = null)) : (U = null, K = T), U !== K)) {
                        if (Q = ss, A = "onMouseLeave", N = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (Q = fs, A = "onPointerLeave", N = "onPointerEnter", E = "pointer"), _e = U == null ? D : Jn(U), R = K == null ? D : Jn(K), D = new Q(A, E + "leave", U, n, M), D.target = _e, D.relatedTarget = R, A = null, Cn(M) === T && (Q = new Q(N, E + "enter", K, n, M), Q.target = R, Q.relatedTarget = _e, A = Q), _e = A, U && K) t: {
                            for (Q = U, N = K, E = 0, R = Q; R; R = Yn(R)) E++;
                            for (R = 0, A = N; A; A = Yn(A)) R++;
                            for (; 0 < E - R;) Q = Yn(Q),
                            E--;
                            for (; 0 < R - E;) N = Yn(N),
                            R--;
                            for (; E--;) {
                                if (Q === N || N !== null && Q === N.alternate) break t;
                                Q = Yn(Q), N = Yn(N)
                            }
                            Q = null
                        }
                        else Q = null;
                        U !== null && Fs($, D, U, Q, !1), K !== null && _e !== null && Fs($, _e, K, Q, !0)
                    }
                }
                e: {
                    if (D = T ? Jn(T) : window, U = D.nodeName && D.nodeName.toLowerCase(), U === "select" || U === "input" && D.type === "file") var Y = uh;
                    else if (ys(D))
                        if (xs) Y = dh;
                        else {
                            Y = ch;
                            var Z = sh
                        }
                    else(U = D.nodeName) && U.toLowerCase() === "input" && (D.type === "checkbox" || D.type === "radio") && (Y = fh);
                    if (Y && (Y = Y(e, T))) {
                        vs($, Y, n, M);
                        break e
                    }
                    Z && Z(e, D, T),
                    e === "focusout" && (Z = D._wrapperState) && Z.controlled && D.type === "number" && Ki(D, "number", D.value)
                }
                switch (Z = T ? Jn(T) : window, e) {
                    case "focusin":
                        (ys(Z) || Z.contentEditable === "true") && (Qn = Z, Eo = T, $r = null);
                        break;
                    case "focusout":
                        $r = Eo = Qn = null;
                        break;
                    case "mousedown":
                        So = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        So = !1, js($, n, M);
                        break;
                    case "selectionchange":
                        if (mh) break;
                    case "keydown":
                    case "keyup":
                        js($, n, M)
                }
                var q;
                if (yo) e: {
                    switch (e) {
                        case "compositionstart":
                            var te = "onCompositionStart";
                            break e;
                        case "compositionend":
                            te = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            te = "onCompositionUpdate";
                            break e
                    }
                    te = void 0
                }
                else Kn ? ms(e, n) && (te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (te = "onCompositionStart");te && (ds && n.locale !== "ko" && (Kn || te !== "onCompositionStart" ? te === "onCompositionEnd" && Kn && (q = as()) : (nn = M, co = "value" in nn ? nn.value : nn.textContent, Kn = !0)), Z = Il(T, te), 0 < Z.length && (te = new cs(te, e, null, n, M), $.push({
                    event: te,
                    listeners: Z
                }), q ? te.data = q : (q = gs(n), q !== null && (te.data = q)))),
                (q = rh ? lh(e, n) : ih(e, n)) && (T = Il(T, "onBeforeInput"), 0 < T.length && (M = new cs("onBeforeInput", "beforeinput", null, n, M), $.push({
                    event: M,
                    listeners: T
                }), M.data = q))
            }
            zs($, t)
        })
    }

    function Br(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Il(e, t) {
        for (var n = t + "Capture", r = []; e !== null;) {
            var i = e,
                u = i.stateNode;
            i.tag === 5 && u !== null && (i = u, u = Er(e, n), u != null && r.unshift(Br(e, u, i)), u = Er(e, t), u != null && r.push(Br(e, u, i))), e = e.return
        }
        return r
    }

    function Yn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function Fs(e, t, n, r, i) {
        for (var u = t._reactName, d = []; n !== null && n !== r;) {
            var v = n,
                w = v.alternate,
                T = v.stateNode;
            if (w !== null && w === r) break;
            v.tag === 5 && T !== null && (v = T, i ? (w = Er(n, u), w != null && d.unshift(Br(n, w, v))) : i || (w = Er(n, u), w != null && d.push(Br(n, w, v)))), n = n.return
        }
        d.length !== 0 && e.push({
            event: t,
            listeners: d
        })
    }
    var xh = /\r\n?/g,
        wh = /\u0000|\uFFFD/g;

    function As(e) {
        return (typeof e == "string" ? e : "" + e).replace(xh, `
`).replace(wh, "")
    }

    function zl(e, t, n) {
        if (t = As(t), As(e) !== t && n) throw Error(a(425))
    }

    function $l() {}
    var To = null,
        Po = null;

    function _o(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Lo = typeof setTimeout == "function" ? setTimeout : void 0,
        Eh = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Bs = typeof Promise == "function" ? Promise : void 0,
        Sh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bs < "u" ? function(e) {
            return Bs.resolve(null).then(e).catch(Ch)
        } : Lo;

    function Ch(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Oo(e, t) {
        var n = t,
            r = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n), i && i.nodeType === 8)
                if (n = i.data, n === "/$") {
                    if (r === 0) {
                        e.removeChild(i), _r(t);
                        return
                    }
                    r--
                } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = i
        } while (n);
        _r(t)
    }

    function ln(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Us(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Xn = Math.random().toString(36).slice(2),
        Pt = "__reactFiber$" + Xn,
        Ur = "__reactProps$" + Xn,
        Mt = "__reactContainer$" + Xn,
        Do = "__reactEvents$" + Xn,
        kh = "__reactListeners$" + Xn,
        Nh = "__reactHandles$" + Xn;

    function Cn(e) {
        var t = e[Pt];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Mt] || n[Pt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = Us(e); e !== null;) {
                        if (n = e[Pt]) return n;
                        e = Us(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Hr(e) {
        return e = e[Pt] || e[Mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function Jn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(a(33))
    }

    function Fl(e) {
        return e[Ur] || null
    }
    var Mo = [],
        Zn = -1;

    function on(e) {
        return {
            current: e
        }
    }

    function Ee(e) {
        0 > Zn || (e.current = Mo[Zn], Mo[Zn] = null, Zn--)
    }

    function ve(e, t) {
        Zn++, Mo[Zn] = e.current, e.current = t
    }
    var an = {},
        We = on(an),
        be = on(!1),
        kn = an;

    function qn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return an;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i = {},
            u;
        for (u in n) i[u] = t[u];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
    }

    function et(e) {
        return e = e.childContextTypes, e != null
    }

    function Al() {
        Ee(be), Ee(We)
    }

    function Hs(e, t, n) {
        if (We.current !== an) throw Error(a(168));
        ve(We, t), ve(be, n)
    }

    function Ws(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var i in r)
            if (!(i in t)) throw Error(a(108, me(e) || "Unknown", i));
        return H({}, n, r)
    }

    function Bl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, kn = We.current, ve(We, e), ve(be, be.current), !0
    }

    function Vs(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(a(169));
        n ? (e = Ws(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, Ee(be), Ee(We), ve(We, e)) : Ee(be), ve(be, n)
    }
    var It = null,
        Ul = !1,
        Io = !1;

    function Ks(e) {
        It === null ? It = [e] : It.push(e)
    }

    function Rh(e) {
        Ul = !0, Ks(e)
    }

    function un() {
        if (!Io && It !== null) {
            Io = !0;
            var e = 0,
                t = he;
            try {
                var n = It;
                for (he = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                It = null, Ul = !1
            } catch (i) {
                throw It !== null && (It = It.slice(e + 1)), Gu(no, un), i
            } finally {
                he = t, Io = !1
            }
        }
        return null
    }
    var bn = [],
        er = 0,
        Hl = null,
        Wl = 0,
        ft = [],
        dt = 0,
        Nn = null,
        zt = 1,
        $t = "";

    function Rn(e, t) {
        bn[er++] = Wl, bn[er++] = Hl, Hl = e, Wl = t
    }

    function Qs(e, t, n) {
        ft[dt++] = zt, ft[dt++] = $t, ft[dt++] = Nn, Nn = e;
        var r = zt;
        e = $t;
        var i = 32 - vt(r) - 1;
        r &= ~(1 << i), n += 1;
        var u = 32 - vt(t) + i;
        if (30 < u) {
            var d = i - i % 5;
            u = (r & (1 << d) - 1).toString(32), r >>= d, i -= d, zt = 1 << 32 - vt(t) + i | n << i | r, $t = u + e
        } else zt = 1 << u | n << i | r, $t = e
    }

    function zo(e) {
        e.return !== null && (Rn(e, 1), Qs(e, 1, 0))
    }

    function $o(e) {
        for (; e === Hl;) Hl = bn[--er], bn[er] = null, Wl = bn[--er], bn[er] = null;
        for (; e === Nn;) Nn = ft[--dt], ft[dt] = null, $t = ft[--dt], ft[dt] = null, zt = ft[--dt], ft[dt] = null
    }
    var at = null,
        ut = null,
        Ce = !1,
        wt = null;

    function Gs(e, t) {
        var n = gt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function Ys(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, at = e, ut = ln(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, at = e, ut = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Nn !== null ? {
                    id: zt,
                    overflow: $t
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, at = e, ut = null, !0) : !1;
            default:
                return !1
        }
    }

    function Fo(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Ao(e) {
        if (Ce) {
            var t = ut;
            if (t) {
                var n = t;
                if (!Ys(e, t)) {
                    if (Fo(e)) throw Error(a(418));
                    t = ln(n.nextSibling);
                    var r = at;
                    t && Ys(e, t) ? Gs(r, n) : (e.flags = e.flags & -4097 | 2, Ce = !1, at = e)
                }
            } else {
                if (Fo(e)) throw Error(a(418));
                e.flags = e.flags & -4097 | 2, Ce = !1, at = e
            }
        }
    }

    function Xs(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        at = e
    }

    function Vl(e) {
        if (e !== at) return !1;
        if (!Ce) return Xs(e), Ce = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_o(e.type, e.memoizedProps)), t && (t = ut)) {
            if (Fo(e)) throw Js(), Error(a(418));
            for (; t;) Gs(e, t), t = ln(t.nextSibling)
        }
        if (Xs(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                ut = ln(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                ut = null
            }
        } else ut = at ? ln(e.stateNode.nextSibling) : null;
        return !0
    }

    function Js() {
        for (var e = ut; e;) e = ln(e.nextSibling)
    }

    function tr() {
        ut = at = null, Ce = !1
    }

    function Bo(e) {
        wt === null ? wt = [e] : wt.push(e)
    }
    var jh = G.ReactCurrentBatchConfig;

    function Wr(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(a(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(a(147, e));
                var i = r,
                    u = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(d) {
                    var v = i.refs;
                    d === null ? delete v[u] : v[u] = d
                }, t._stringRef = u, t)
            }
            if (typeof e != "string") throw Error(a(284));
            if (!n._owner) throw Error(a(290, e))
        }
        return e
    }

    function Kl(e, t) {
        throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function Zs(e) {
        var t = e._init;
        return t(e._payload)
    }

    function qs(e) {
        function t(N, E) {
            if (e) {
                var R = N.deletions;
                R === null ? (N.deletions = [E], N.flags |= 16) : R.push(E)
            }
        }

        function n(N, E) {
            if (!e) return null;
            for (; E !== null;) t(N, E), E = E.sibling;
            return null
        }

        function r(N, E) {
            for (N = new Map; E !== null;) E.key !== null ? N.set(E.key, E) : N.set(E.index, E), E = E.sibling;
            return N
        }

        function i(N, E) {
            return N = gn(N, E), N.index = 0, N.sibling = null, N
        }

        function u(N, E, R) {
            return N.index = R, e ? (R = N.alternate, R !== null ? (R = R.index, R < E ? (N.flags |= 2, E) : R) : (N.flags |= 2, E)) : (N.flags |= 1048576, E)
        }

        function d(N) {
            return e && N.alternate === null && (N.flags |= 2), N
        }

        function v(N, E, R, A) {
            return E === null || E.tag !== 6 ? (E = La(R, N.mode, A), E.return = N, E) : (E = i(E, R), E.return = N, E)
        }

        function w(N, E, R, A) {
            var Y = R.type;
            return Y === re ? M(N, E, R.props.children, A, R.key) : E !== null && (E.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === xe && Zs(Y) === E.type) ? (A = i(E, R.props), A.ref = Wr(N, E, R), A.return = N, A) : (A = mi(R.type, R.key, R.props, null, N.mode, A), A.ref = Wr(N, E, R), A.return = N, A)
        }

        function T(N, E, R, A) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== R.containerInfo || E.stateNode.implementation !== R.implementation ? (E = Oa(R, N.mode, A), E.return = N, E) : (E = i(E, R.children || []), E.return = N, E)
        }

        function M(N, E, R, A, Y) {
            return E === null || E.tag !== 7 ? (E = Mn(R, N.mode, A, Y), E.return = N, E) : (E = i(E, R), E.return = N, E)
        }

        function $(N, E, R) {
            if (typeof E == "string" && E !== "" || typeof E == "number") return E = La("" + E, N.mode, R), E.return = N, E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case ne:
                        return R = mi(E.type, E.key, E.props, null, N.mode, R), R.ref = Wr(N, null, E), R.return = N, R;
                    case J:
                        return E = Oa(E, N.mode, R), E.return = N, E;
                    case xe:
                        var A = E._init;
                        return $(N, A(E._payload), R)
                }
                if (vr(E) || X(E)) return E = Mn(E, N.mode, R, null), E.return = N, E;
                Kl(N, E)
            }
            return null
        }

        function D(N, E, R, A) {
            var Y = E !== null ? E.key : null;
            if (typeof R == "string" && R !== "" || typeof R == "number") return Y !== null ? null : v(N, E, "" + R, A);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case ne:
                        return R.key === Y ? w(N, E, R, A) : null;
                    case J:
                        return R.key === Y ? T(N, E, R, A) : null;
                    case xe:
                        return Y = R._init, D(N, E, Y(R._payload), A)
                }
                if (vr(R) || X(R)) return Y !== null ? null : M(N, E, R, A, null);
                Kl(N, R)
            }
            return null
        }

        function U(N, E, R, A, Y) {
            if (typeof A == "string" && A !== "" || typeof A == "number") return N = N.get(R) || null, v(E, N, "" + A, Y);
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case ne:
                        return N = N.get(A.key === null ? R : A.key) || null, w(E, N, A, Y);
                    case J:
                        return N = N.get(A.key === null ? R : A.key) || null, T(E, N, A, Y);
                    case xe:
                        var Z = A._init;
                        return U(N, E, R, Z(A._payload), Y)
                }
                if (vr(A) || X(A)) return N = N.get(R) || null, M(E, N, A, Y, null);
                Kl(E, A)
            }
            return null
        }

        function K(N, E, R, A) {
            for (var Y = null, Z = null, q = E, te = E = 0, $e = null; q !== null && te < R.length; te++) {
                q.index > te ? ($e = q, q = null) : $e = q.sibling;
                var fe = D(N, q, R[te], A);
                if (fe === null) {
                    q === null && (q = $e);
                    break
                }
                e && q && fe.alternate === null && t(N, q), E = u(fe, E, te), Z === null ? Y = fe : Z.sibling = fe, Z = fe, q = $e
            }
            if (te === R.length) return n(N, q), Ce && Rn(N, te), Y;
            if (q === null) {
                for (; te < R.length; te++) q = $(N, R[te], A), q !== null && (E = u(q, E, te), Z === null ? Y = q : Z.sibling = q, Z = q);
                return Ce && Rn(N, te), Y
            }
            for (q = r(N, q); te < R.length; te++) $e = U(q, N, te, R[te], A), $e !== null && (e && $e.alternate !== null && q.delete($e.key === null ? te : $e.key), E = u($e, E, te), Z === null ? Y = $e : Z.sibling = $e, Z = $e);
            return e && q.forEach(function(yn) {
                return t(N, yn)
            }), Ce && Rn(N, te), Y
        }

        function Q(N, E, R, A) {
            var Y = X(R);
            if (typeof Y != "function") throw Error(a(150));
            if (R = Y.call(R), R == null) throw Error(a(151));
            for (var Z = Y = null, q = E, te = E = 0, $e = null, fe = R.next(); q !== null && !fe.done; te++, fe = R.next()) {
                q.index > te ? ($e = q, q = null) : $e = q.sibling;
                var yn = D(N, q, fe.value, A);
                if (yn === null) {
                    q === null && (q = $e);
                    break
                }
                e && q && yn.alternate === null && t(N, q), E = u(yn, E, te), Z === null ? Y = yn : Z.sibling = yn, Z = yn, q = $e
            }
            if (fe.done) return n(N, q), Ce && Rn(N, te), Y;
            if (q === null) {
                for (; !fe.done; te++, fe = R.next()) fe = $(N, fe.value, A), fe !== null && (E = u(fe, E, te), Z === null ? Y = fe : Z.sibling = fe, Z = fe);
                return Ce && Rn(N, te), Y
            }
            for (q = r(N, q); !fe.done; te++, fe = R.next()) fe = U(q, N, te, fe.value, A), fe !== null && (e && fe.alternate !== null && q.delete(fe.key === null ? te : fe.key), E = u(fe, E, te), Z === null ? Y = fe : Z.sibling = fe, Z = fe);
            return e && q.forEach(function(im) {
                return t(N, im)
            }), Ce && Rn(N, te), Y
        }

        function _e(N, E, R, A) {
            if (typeof R == "object" && R !== null && R.type === re && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case ne:
                        e: {
                            for (var Y = R.key, Z = E; Z !== null;) {
                                if (Z.key === Y) {
                                    if (Y = R.type, Y === re) {
                                        if (Z.tag === 7) {
                                            n(N, Z.sibling), E = i(Z, R.props.children), E.return = N, N = E;
                                            break e
                                        }
                                    } else if (Z.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === xe && Zs(Y) === Z.type) {
                                        n(N, Z.sibling), E = i(Z, R.props), E.ref = Wr(N, Z, R), E.return = N, N = E;
                                        break e
                                    }
                                    n(N, Z);
                                    break
                                } else t(N, Z);
                                Z = Z.sibling
                            }
                            R.type === re ? (E = Mn(R.props.children, N.mode, A, R.key), E.return = N, N = E) : (A = mi(R.type, R.key, R.props, null, N.mode, A), A.ref = Wr(N, E, R), A.return = N, N = A)
                        }
                        return d(N);
                    case J:
                        e: {
                            for (Z = R.key; E !== null;) {
                                if (E.key === Z)
                                    if (E.tag === 4 && E.stateNode.containerInfo === R.containerInfo && E.stateNode.implementation === R.implementation) {
                                        n(N, E.sibling), E = i(E, R.children || []), E.return = N, N = E;
                                        break e
                                    } else {
                                        n(N, E);
                                        break
                                    }
                                else t(N, E);
                                E = E.sibling
                            }
                            E = Oa(R, N.mode, A),
                            E.return = N,
                            N = E
                        }
                        return d(N);
                    case xe:
                        return Z = R._init, _e(N, E, Z(R._payload), A)
                }
                if (vr(R)) return K(N, E, R, A);
                if (X(R)) return Q(N, E, R, A);
                Kl(N, R)
            }
            return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, E !== null && E.tag === 6 ? (n(N, E.sibling), E = i(E, R), E.return = N, N = E) : (n(N, E), E = La(R, N.mode, A), E.return = N, N = E), d(N)) : n(N, E)
        }
        return _e
    }
    var nr = qs(!0),
        bs = qs(!1),
        Ql = on(null),
        Gl = null,
        rr = null,
        Uo = null;

    function Ho() {
        Uo = rr = Gl = null
    }

    function Wo(e) {
        var t = Ql.current;
        Ee(Ql), e._currentValue = t
    }

    function Vo(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function lr(e, t) {
        Gl = e, Uo = rr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0), e.firstContext = null)
    }

    function pt(e) {
        var t = e._currentValue;
        if (Uo !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, rr === null) {
                if (Gl === null) throw Error(a(308));
                rr = e, Gl.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else rr = rr.next = e;
        return t
    }
    var jn = null;

    function Ko(e) {
        jn === null ? jn = [e] : jn.push(e)
    }

    function ec(e, t, n, r) {
        var i = t.interleaved;
        return i === null ? (n.next = n, Ko(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ft(e, r)
    }

    function Ft(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var sn = !1;

    function Qo(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function tc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function At(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function cn(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, se & 2) {
            var i = r.pending;
            return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Ft(e, n)
        }
        return i = r.interleaved, i === null ? (t.next = t, Ko(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Ft(e, n)
    }

    function Yl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n)
        }
    }

    function nc(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var i = null,
                u = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var d = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    u === null ? i = u = d : u = u.next = d, n = n.next
                } while (n !== null);
                u === null ? i = u = t : u = u.next = t
            } else i = u = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: u,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function Xl(e, t, n, r) {
        var i = e.updateQueue;
        sn = !1;
        var u = i.firstBaseUpdate,
            d = i.lastBaseUpdate,
            v = i.shared.pending;
        if (v !== null) {
            i.shared.pending = null;
            var w = v,
                T = w.next;
            w.next = null, d === null ? u = T : d.next = T, d = w;
            var M = e.alternate;
            M !== null && (M = M.updateQueue, v = M.lastBaseUpdate, v !== d && (v === null ? M.firstBaseUpdate = T : v.next = T, M.lastBaseUpdate = w))
        }
        if (u !== null) {
            var $ = i.baseState;
            d = 0, M = T = w = null, v = u;
            do {
                var D = v.lane,
                    U = v.eventTime;
                if ((r & D) === D) {
                    M !== null && (M = M.next = {
                        eventTime: U,
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    });
                    e: {
                        var K = e,
                            Q = v;
                        switch (D = t, U = n, Q.tag) {
                            case 1:
                                if (K = Q.payload, typeof K == "function") {
                                    $ = K.call(U, $, D);
                                    break e
                                }
                                $ = K;
                                break e;
                            case 3:
                                K.flags = K.flags & -65537 | 128;
                            case 0:
                                if (K = Q.payload, D = typeof K == "function" ? K.call(U, $, D) : K, D == null) break e;
                                $ = H({}, $, D);
                                break e;
                            case 2:
                                sn = !0
                        }
                    }
                    v.callback !== null && v.lane !== 0 && (e.flags |= 64, D = i.effects, D === null ? i.effects = [v] : D.push(v))
                } else U = {
                    eventTime: U,
                    lane: D,
                    tag: v.tag,
                    payload: v.payload,
                    callback: v.callback,
                    next: null
                }, M === null ? (T = M = U, w = $) : M = M.next = U, d |= D;
                if (v = v.next, v === null) {
                    if (v = i.shared.pending, v === null) break;
                    D = v, v = D.next, D.next = null, i.lastBaseUpdate = D, i.shared.pending = null
                }
            } while (!0);
            if (M === null && (w = $), i.baseState = w, i.firstBaseUpdate = T, i.lastBaseUpdate = M, t = i.shared.interleaved, t !== null) {
                i = t;
                do d |= i.lane, i = i.next; while (i !== t)
            } else u === null && (i.shared.lanes = 0);
            _n |= d, e.lanes = d, e.memoizedState = $
        }
    }

    function rc(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    i = r.callback;
                if (i !== null) {
                    if (r.callback = null, r = n, typeof i != "function") throw Error(a(191, i));
                    i.call(r)
                }
            }
    }
    var Vr = {},
        _t = on(Vr),
        Kr = on(Vr),
        Qr = on(Vr);

    function Tn(e) {
        if (e === Vr) throw Error(a(174));
        return e
    }

    function Go(e, t) {
        switch (ve(Qr, t), ve(Kr, e), ve(_t, Vr), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Gi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gi(t, e)
        }
        Ee(_t), ve(_t, t)
    }

    function ir() {
        Ee(_t), Ee(Kr), Ee(Qr)
    }

    function lc(e) {
        Tn(Qr.current);
        var t = Tn(_t.current),
            n = Gi(t, e.type);
        t !== n && (ve(Kr, e), ve(_t, n))
    }

    function Yo(e) {
        Kr.current === e && (Ee(_t), Ee(Kr))
    }
    var Ne = on(0);

    function Jl(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Xo = [];

    function Jo() {
        for (var e = 0; e < Xo.length; e++) Xo[e]._workInProgressVersionPrimary = null;
        Xo.length = 0
    }
    var Zl = G.ReactCurrentDispatcher,
        Zo = G.ReactCurrentBatchConfig,
        Pn = 0,
        Re = null,
        De = null,
        Ie = null,
        ql = !1,
        Gr = !1,
        Yr = 0,
        Th = 0;

    function Ve() {
        throw Error(a(321))
    }

    function qo(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!xt(e[n], t[n])) return !1;
        return !0
    }

    function bo(e, t, n, r, i, u) {
        if (Pn = u, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zl.current = e === null || e.memoizedState === null ? Oh : Dh, e = n(r, i), Gr) {
            u = 0;
            do {
                if (Gr = !1, Yr = 0, 25 <= u) throw Error(a(301));
                u += 1, Ie = De = null, t.updateQueue = null, Zl.current = Mh, e = n(r, i)
            } while (Gr)
        }
        if (Zl.current = ti, t = De !== null && De.next !== null, Pn = 0, Ie = De = Re = null, ql = !1, t) throw Error(a(300));
        return e
    }

    function ea() {
        var e = Yr !== 0;
        return Yr = 0, e
    }

    function Lt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ie === null ? Re.memoizedState = Ie = e : Ie = Ie.next = e, Ie
    }

    function ht() {
        if (De === null) {
            var e = Re.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = De.next;
        var t = Ie === null ? Re.memoizedState : Ie.next;
        if (t !== null) Ie = t, De = e;
        else {
            if (e === null) throw Error(a(310));
            De = e, e = {
                memoizedState: De.memoizedState,
                baseState: De.baseState,
                baseQueue: De.baseQueue,
                queue: De.queue,
                next: null
            }, Ie === null ? Re.memoizedState = Ie = e : Ie = Ie.next = e
        }
        return Ie
    }

    function Xr(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function ta(e) {
        var t = ht(),
            n = t.queue;
        if (n === null) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = De,
            i = r.baseQueue,
            u = n.pending;
        if (u !== null) {
            if (i !== null) {
                var d = i.next;
                i.next = u.next, u.next = d
            }
            r.baseQueue = i = u, n.pending = null
        }
        if (i !== null) {
            u = i.next, r = r.baseState;
            var v = d = null,
                w = null,
                T = u;
            do {
                var M = T.lane;
                if ((Pn & M) === M) w !== null && (w = w.next = {
                    lane: 0,
                    action: T.action,
                    hasEagerState: T.hasEagerState,
                    eagerState: T.eagerState,
                    next: null
                }), r = T.hasEagerState ? T.eagerState : e(r, T.action);
                else {
                    var $ = {
                        lane: M,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    };
                    w === null ? (v = w = $, d = r) : w = w.next = $, Re.lanes |= M, _n |= M
                }
                T = T.next
            } while (T !== null && T !== u);
            w === null ? d = r : w.next = v, xt(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = w, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            i = e;
            do u = i.lane, Re.lanes |= u, _n |= u, i = i.next; while (i !== e)
        } else i === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function na(e) {
        var t = ht(),
            n = t.queue;
        if (n === null) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            i = n.pending,
            u = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var d = i = i.next;
            do u = e(u, d.action), d = d.next; while (d !== i);
            xt(u, t.memoizedState) || (tt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u
        }
        return [u, r]
    }

    function ic() {}

    function oc(e, t) {
        var n = Re,
            r = ht(),
            i = t(),
            u = !xt(r.memoizedState, i);
        if (u && (r.memoizedState = i, tt = !0), r = r.queue, ra(sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Ie !== null && Ie.memoizedState.tag & 1) {
            if (n.flags |= 2048, Jr(9, uc.bind(null, n, r, i, t), void 0, null), ze === null) throw Error(a(349));
            Pn & 30 || ac(n, t, i)
        }
        return i
    }

    function ac(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = Re.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function uc(e, t, n, r) {
        t.value = n, t.getSnapshot = r, cc(t) && fc(e)
    }

    function sc(e, t, n) {
        return n(function() {
            cc(t) && fc(e)
        })
    }

    function cc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !xt(e, n)
        } catch {
            return !0
        }
    }

    function fc(e) {
        var t = Ft(e, 1);
        t !== null && kt(t, e, 1, -1)
    }

    function dc(e) {
        var t = Lt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Lh.bind(null, Re, e), [t.memoizedState, e]
    }

    function Jr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = Re.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function pc() {
        return ht().memoizedState
    }

    function bl(e, t, n, r) {
        var i = Lt();
        Re.flags |= e, i.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function ei(e, t, n, r) {
        var i = ht();
        r = r === void 0 ? null : r;
        var u = void 0;
        if (De !== null) {
            var d = De.memoizedState;
            if (u = d.destroy, r !== null && qo(r, d.deps)) {
                i.memoizedState = Jr(t, n, u, r);
                return
            }
        }
        Re.flags |= e, i.memoizedState = Jr(1 | t, n, u, r)
    }

    function hc(e, t) {
        return bl(8390656, 8, e, t)
    }

    function ra(e, t) {
        return ei(2048, 8, e, t)
    }

    function mc(e, t) {
        return ei(4, 2, e, t)
    }

    function gc(e, t) {
        return ei(4, 4, e, t)
    }

    function yc(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function vc(e, t, n) {
        return n = n != null ? n.concat([e]) : null, ei(4, 4, yc.bind(null, t, e), n)
    }

    function la() {}

    function xc(e, t) {
        var n = ht();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function wc(e, t) {
        var n = ht();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && qo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function Ec(e, t, n) {
        return Pn & 21 ? (xt(n, t) || (n = Zu(), Re.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n)
    }

    function Ph(e, t) {
        var n = he;
        he = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Zo.transition;
        Zo.transition = {};
        try {
            e(!1), t()
        } finally {
            he = n, Zo.transition = r
        }
    }

    function Sc() {
        return ht().memoizedState
    }

    function _h(e, t, n) {
        var r = hn(e);
        if (n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Cc(e)) kc(t, n);
        else if (n = ec(e, t, n, r), n !== null) {
            var i = Xe();
            kt(n, e, r, i), Nc(n, t, r)
        }
    }

    function Lh(e, t, n) {
        var r = hn(e),
            i = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (Cc(e)) kc(t, i);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
                var d = t.lastRenderedState,
                    v = u(d, n);
                if (i.hasEagerState = !0, i.eagerState = v, xt(v, d)) {
                    var w = t.interleaved;
                    w === null ? (i.next = i, Ko(t)) : (i.next = w.next, w.next = i), t.interleaved = i;
                    return
                }
            } catch {} finally {}
            n = ec(e, t, i, r), n !== null && (i = Xe(), kt(n, e, r, i), Nc(n, t, r))
        }
    }

    function Cc(e) {
        var t = e.alternate;
        return e === Re || t !== null && t === Re
    }

    function kc(e, t) {
        Gr = ql = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Nc(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n)
        }
    }
    var ti = {
            readContext: pt,
            useCallback: Ve,
            useContext: Ve,
            useEffect: Ve,
            useImperativeHandle: Ve,
            useInsertionEffect: Ve,
            useLayoutEffect: Ve,
            useMemo: Ve,
            useReducer: Ve,
            useRef: Ve,
            useState: Ve,
            useDebugValue: Ve,
            useDeferredValue: Ve,
            useTransition: Ve,
            useMutableSource: Ve,
            useSyncExternalStore: Ve,
            useId: Ve,
            unstable_isNewReconciler: !1
        },
        Oh = {
            readContext: pt,
            useCallback: function(e, t) {
                return Lt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: pt,
            useEffect: hc,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, bl(4194308, 4, yc.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return bl(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return bl(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = Lt();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = Lt();
                return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, r.queue = e, e = e.dispatch = _h.bind(null, Re, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                var t = Lt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: dc,
            useDebugValue: la,
            useDeferredValue: function(e) {
                return Lt().memoizedState = e
            },
            useTransition: function() {
                var e = dc(!1),
                    t = e[0];
                return e = Ph.bind(null, e[1]), Lt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var r = Re,
                    i = Lt();
                if (Ce) {
                    if (n === void 0) throw Error(a(407));
                    n = n()
                } else {
                    if (n = t(), ze === null) throw Error(a(349));
                    Pn & 30 || ac(r, t, n)
                }
                i.memoizedState = n;
                var u = {
                    value: n,
                    getSnapshot: t
                };
                return i.queue = u, hc(sc.bind(null, r, u, e), [e]), r.flags |= 2048, Jr(9, uc.bind(null, r, u, n, t), void 0, null), n
            },
            useId: function() {
                var e = Lt(),
                    t = ze.identifierPrefix;
                if (Ce) {
                    var n = $t,
                        r = zt;
                    n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = Th++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        Dh = {
            readContext: pt,
            useCallback: xc,
            useContext: pt,
            useEffect: ra,
            useImperativeHandle: vc,
            useInsertionEffect: mc,
            useLayoutEffect: gc,
            useMemo: wc,
            useReducer: ta,
            useRef: pc,
            useState: function() {
                return ta(Xr)
            },
            useDebugValue: la,
            useDeferredValue: function(e) {
                var t = ht();
                return Ec(t, De.memoizedState, e)
            },
            useTransition: function() {
                var e = ta(Xr)[0],
                    t = ht().memoizedState;
                return [e, t]
            },
            useMutableSource: ic,
            useSyncExternalStore: oc,
            useId: Sc,
            unstable_isNewReconciler: !1
        },
        Mh = {
            readContext: pt,
            useCallback: xc,
            useContext: pt,
            useEffect: ra,
            useImperativeHandle: vc,
            useInsertionEffect: mc,
            useLayoutEffect: gc,
            useMemo: wc,
            useReducer: na,
            useRef: pc,
            useState: function() {
                return na(Xr)
            },
            useDebugValue: la,
            useDeferredValue: function(e) {
                var t = ht();
                return De === null ? t.memoizedState = e : Ec(t, De.memoizedState, e)
            },
            useTransition: function() {
                var e = na(Xr)[0],
                    t = ht().memoizedState;
                return [e, t]
            },
            useMutableSource: ic,
            useSyncExternalStore: oc,
            useId: Sc,
            unstable_isNewReconciler: !1
        };

    function Et(e, t) {
        if (e && e.defaultProps) {
            t = H({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    function ia(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var ni = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Sn(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Xe(),
                i = hn(e),
                u = At(r, i);
            u.payload = t, n != null && (u.callback = n), t = cn(e, u, i), t !== null && (kt(t, e, i, r), Yl(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Xe(),
                i = hn(e),
                u = At(r, i);
            u.tag = 1, u.payload = t, n != null && (u.callback = n), t = cn(e, u, i), t !== null && (kt(t, e, i, r), Yl(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Xe(),
                r = hn(e),
                i = At(n, r);
            i.tag = 2, t != null && (i.callback = t), t = cn(e, i, r), t !== null && (kt(t, e, r, n), Yl(t, e, r))
        }
    };

    function Rc(e, t, n, r, i, u, d) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, d) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, u) : !0
    }

    function jc(e, t, n) {
        var r = !1,
            i = an,
            u = t.contextType;
        return typeof u == "object" && u !== null ? u = pt(u) : (i = et(t) ? kn : We.current, r = t.contextTypes, u = (r = r != null) ? qn(e, i) : an), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ni, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = u), t
    }

    function Tc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ni.enqueueReplaceState(t, t.state, null)
    }

    function oa(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = {}, Qo(e);
        var u = t.contextType;
        typeof u == "object" && u !== null ? i.context = pt(u) : (u = et(t) ? kn : We.current, i.context = qn(e, u)), i.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (ia(e, t, u, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ni.enqueueReplaceState(i, i.state, null), Xl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function or(e, t) {
        try {
            var n = "",
                r = t;
            do n += le(r), r = r.return; while (r);
            var i = n
        } catch (u) {
            i = `
Error generating stack: ` + u.message + `
` + u.stack
        }
        return {
            value: e,
            source: t,
            stack: i,
            digest: null
        }
    }

    function aa(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }

    function ua(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var Ih = typeof WeakMap == "function" ? WeakMap : Map;

    function Pc(e, t, n) {
        n = At(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            si || (si = !0, Ca = r), ua(e, t)
        }, n
    }

    function _c(e, t, n) {
        n = At(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var i = t.value;
            n.payload = function() {
                return r(i)
            }, n.callback = function() {
                ua(e, t)
            }
        }
        var u = e.stateNode;
        return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
            ua(e, t), typeof r != "function" && (dn === null ? dn = new Set([this]) : dn.add(this));
            var d = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: d !== null ? d : ""
            })
        }), n
    }

    function Lc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Ih;
            var i = new Set;
            r.set(t, i)
        } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
        i.has(n) || (i.add(n), e = Xh.bind(null, e, t, n), t.then(e, e))
    }

    function Oc(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function Dc(e, t, n, r, i) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1), t.tag = 2, cn(n, t, 1))), n.lanes |= 1), e)
    }
    var zh = G.ReactCurrentOwner,
        tt = !1;

    function Ye(e, t, n, r) {
        t.child = e === null ? bs(t, null, n, r) : nr(t, e.child, n, r)
    }

    function Mc(e, t, n, r, i) {
        n = n.render;
        var u = t.ref;
        return lr(t, i), r = bo(e, t, n, r, u, i), n = ea(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Bt(e, t, i)) : (Ce && n && zo(t), t.flags |= 1, Ye(e, t, r, i), t.child)
    }

    function Ic(e, t, n, r, i) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" && !_a(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, zc(e, t, u, r, i)) : (e = mi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (u = e.child, !(e.lanes & i)) {
            var d = u.memoizedProps;
            if (n = n.compare, n = n !== null ? n : zr, n(d, r) && e.ref === t.ref) return Bt(e, t, i)
        }
        return t.flags |= 1, e = gn(u, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function zc(e, t, n, r, i) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (zr(u, r) && e.ref === t.ref)
                if (tt = !1, t.pendingProps = r = u, (e.lanes & i) !== 0) e.flags & 131072 && (tt = !0);
                else return t.lanes = e.lanes, Bt(e, t, i)
        }
        return sa(e, t, n, r, i)
    }

    function $c(e, t, n) {
        var r = t.pendingProps,
            i = r.children,
            u = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1)) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, ve(ur, st), st |= n;
            else {
                if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, ve(ur, st), st |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, r = u !== null ? u.baseLanes : n, ve(ur, st), st |= r
            }
        else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, ve(ur, st), st |= r;
        return Ye(e, t, i, n), t.child
    }

    function Fc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function sa(e, t, n, r, i) {
        var u = et(n) ? kn : We.current;
        return u = qn(t, u), lr(t, i), n = bo(e, t, n, r, u, i), r = ea(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Bt(e, t, i)) : (Ce && r && zo(t), t.flags |= 1, Ye(e, t, n, i), t.child)
    }

    function Ac(e, t, n, r, i) {
        if (et(n)) {
            var u = !0;
            Bl(t)
        } else u = !1;
        if (lr(t, i), t.stateNode === null) li(e, t), jc(t, n, r), oa(t, n, r, i), r = !0;
        else if (e === null) {
            var d = t.stateNode,
                v = t.memoizedProps;
            d.props = v;
            var w = d.context,
                T = n.contextType;
            typeof T == "object" && T !== null ? T = pt(T) : (T = et(n) ? kn : We.current, T = qn(t, T));
            var M = n.getDerivedStateFromProps,
                $ = typeof M == "function" || typeof d.getSnapshotBeforeUpdate == "function";
            $ || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== r || w !== T) && Tc(t, d, r, T), sn = !1;
            var D = t.memoizedState;
            d.state = D, Xl(t, r, d, i), w = t.memoizedState, v !== r || D !== w || be.current || sn ? (typeof M == "function" && (ia(t, n, M, r), w = t.memoizedState), (v = sn || Rc(t, n, v, r, D, w, T)) ? ($ || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), d.props = r, d.state = w, d.context = T, r = v) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            d = t.stateNode, tc(e, t), v = t.memoizedProps, T = t.type === t.elementType ? v : Et(t.type, v), d.props = T, $ = t.pendingProps, D = d.context, w = n.contextType, typeof w == "object" && w !== null ? w = pt(w) : (w = et(n) ? kn : We.current, w = qn(t, w));
            var U = n.getDerivedStateFromProps;
            (M = typeof U == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== $ || D !== w) && Tc(t, d, r, w), sn = !1, D = t.memoizedState, d.state = D, Xl(t, r, d, i);
            var K = t.memoizedState;
            v !== $ || D !== K || be.current || sn ? (typeof U == "function" && (ia(t, n, U, r), K = t.memoizedState), (T = sn || Rc(t, n, T, r, D, K, w) || !1) ? (M || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, K, w), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, K, w)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), d.props = r, d.state = K, d.context = w, r = T) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return ca(e, t, n, r, u, i)
    }

    function ca(e, t, n, r, i, u) {
        Fc(e, t);
        var d = (t.flags & 128) !== 0;
        if (!r && !d) return i && Vs(t, n, !1), Bt(e, t, u);
        r = t.stateNode, zh.current = t;
        var v = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && d ? (t.child = nr(t, e.child, null, u), t.child = nr(t, null, v, u)) : Ye(e, t, v, u), t.memoizedState = r.state, i && Vs(t, n, !0), t.child
    }

    function Bc(e) {
        var t = e.stateNode;
        t.pendingContext ? Hs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hs(e, t.context, !1), Go(e, t.containerInfo)
    }

    function Uc(e, t, n, r, i) {
        return tr(), Bo(i), t.flags |= 256, Ye(e, t, n, r), t.child
    }
    var fa = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function da(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function Hc(e, t, n) {
        var r = t.pendingProps,
            i = Ne.current,
            u = !1,
            d = (t.flags & 128) !== 0,
            v;
        if ((v = d) || (v = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), v ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ve(Ne, i & 1), e === null) return Ao(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (d = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, d = {
            mode: "hidden",
            children: d
        }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = d) : u = gi(d, r, 0, null), e = Mn(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = da(n), t.memoizedState = fa, e) : pa(t, d));
        if (i = e.memoizedState, i !== null && (v = i.dehydrated, v !== null)) return $h(e, t, d, r, v, i, n);
        if (u) {
            u = r.fallback, d = t.mode, i = e.child, v = i.sibling;
            var w = {
                mode: "hidden",
                children: r.children
            };
            return !(d & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = gn(i, w), r.subtreeFlags = i.subtreeFlags & 14680064), v !== null ? u = gn(v, u) : (u = Mn(u, d, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, d = e.child.memoizedState, d = d === null ? da(n) : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions
            }, u.memoizedState = d, u.childLanes = e.childLanes & ~n, t.memoizedState = fa, r
        }
        return u = e.child, e = u.sibling, r = gn(u, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
    }

    function pa(e, t) {
        return t = gi({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function ri(e, t, n, r) {
        return r !== null && Bo(r), nr(t, e.child, null, n), e = pa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function $h(e, t, n, r, i, u, d) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = aa(Error(a(422))), ri(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, i = t.mode, r = gi({
            mode: "visible",
            children: r.children
        }, i, 0, null), u = Mn(u, i, d, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && nr(t, e.child, null, d), t.child.memoizedState = da(d), t.memoizedState = fa, u);
        if (!(t.mode & 1)) return ri(e, t, d, null);
        if (i.data === "$!") {
            if (r = i.nextSibling && i.nextSibling.dataset, r) var v = r.dgst;
            return r = v, u = Error(a(419)), r = aa(u, r, void 0), ri(e, t, d, r)
        }
        if (v = (d & e.childLanes) !== 0, tt || v) {
            if (r = ze, r !== null) {
                switch (d & -d) {
                    case 4:
                        i = 2;
                        break;
                    case 16:
                        i = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        i = 32;
                        break;
                    case 536870912:
                        i = 268435456;
                        break;
                    default:
                        i = 0
                }
                i = i & (r.suspendedLanes | d) ? 0 : i, i !== 0 && i !== u.retryLane && (u.retryLane = i, Ft(e, i), kt(r, e, i, -1))
            }
            return Pa(), r = aa(Error(a(421))), ri(e, t, d, r)
        }
        return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jh.bind(null, e), i._reactRetry = t, null) : (e = u.treeContext, ut = ln(i.nextSibling), at = t, Ce = !0, wt = null, e !== null && (ft[dt++] = zt, ft[dt++] = $t, ft[dt++] = Nn, zt = e.id, $t = e.overflow, Nn = t), t = pa(t, r.children), t.flags |= 4096, t)
    }

    function Wc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Vo(e.return, t, n)
    }

    function ha(e, t, n, r, i) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i
        } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = i)
    }

    function Vc(e, t, n) {
        var r = t.pendingProps,
            i = r.revealOrder,
            u = r.tail;
        if (Ye(e, t, r.children, n), r = Ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
                else if (e.tag === 19) Wc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (ve(Ne, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Jl(e) === null && (i = n), n = n.sibling;
                n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ha(t, !1, i, n, u);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null;) {
                    if (e = i.alternate, e !== null && Jl(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = n, n = i, i = e
                }
                ha(t, !0, n, null, u);
                break;
            case "together":
                ha(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function li(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Bt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(a(153));
        if (t.child !== null) {
            for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Fh(e, t, n) {
        switch (t.tag) {
            case 3:
                Bc(t), tr();
                break;
            case 5:
                lc(t);
                break;
            case 1:
                et(t.type) && Bl(t);
                break;
            case 4:
                Go(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    i = t.memoizedProps.value;
                ve(Ql, r._currentValue), r._currentValue = i;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ve(Ne, Ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hc(e, t, n) : (ve(Ne, Ne.current & 1), e = Bt(e, t, n), e !== null ? e.sibling : null);
                ve(Ne, Ne.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return Vc(e, t, n);
                    t.flags |= 128
                }
                if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ve(Ne, Ne.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, $c(e, t, n)
        }
        return Bt(e, t, n)
    }
    var Kc, ma, Qc, Gc;
    Kc = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, ma = function() {}, Qc = function(e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            e = t.stateNode, Tn(_t.current);
            var u = null;
            switch (n) {
                case "input":
                    i = Zt(e, i), r = Zt(e, r), u = [];
                    break;
                case "select":
                    i = H({}, i, {
                        value: void 0
                    }), r = H({}, r, {
                        value: void 0
                    }), u = [];
                    break;
                case "textarea":
                    i = Qi(e, i), r = Qi(e, r), u = [];
                    break;
                default:
                    typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $l)
            }
            Yi(n, r);
            var d;
            n = null;
            for (T in i)
                if (!r.hasOwnProperty(T) && i.hasOwnProperty(T) && i[T] != null)
                    if (T === "style") {
                        var v = i[T];
                        for (d in v) v.hasOwnProperty(d) && (n || (n = {}), n[d] = "")
                    } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (c.hasOwnProperty(T) ? u || (u = []) : (u = u || []).push(T, null));
            for (T in r) {
                var w = r[T];
                if (v = i != null ? i[T] : void 0, r.hasOwnProperty(T) && w !== v && (w != null || v != null))
                    if (T === "style")
                        if (v) {
                            for (d in v) !v.hasOwnProperty(d) || w && w.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
                            for (d in w) w.hasOwnProperty(d) && v[d] !== w[d] && (n || (n = {}), n[d] = w[d])
                        } else n || (u || (u = []), u.push(T, n)), n = w;
                else T === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, v = v ? v.__html : void 0, w != null && v !== w && (u = u || []).push(T, w)) : T === "children" ? typeof w != "string" && typeof w != "number" || (u = u || []).push(T, "" + w) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (c.hasOwnProperty(T) ? (w != null && T === "onScroll" && we("scroll", e), u || v === w || (u = [])) : (u = u || []).push(T, w))
            }
            n && (u = u || []).push("style", n);
            var T = u;
            (t.updateQueue = T) && (t.flags |= 4)
        }
    }, Gc = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    };

    function Zr(e, t) {
        if (!Ce) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Ke(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
        else
            for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function Ah(e, t, n) {
        var r = t.pendingProps;
        switch ($o(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ke(t), null;
            case 1:
                return et(t.type) && Al(), Ke(t), null;
            case 3:
                return r = t.stateNode, ir(), Ee(be), Ee(We), Jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Ra(wt), wt = null))), ma(e, t), Ke(t), null;
            case 5:
                Yo(t);
                var i = Tn(Qr.current);
                if (n = t.type, e !== null && t.stateNode != null) Qc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(a(166));
                        return Ke(t), null
                    }
                    if (e = Tn(_t.current), Vl(t)) {
                        r = t.stateNode, n = t.type;
                        var u = t.memoizedProps;
                        switch (r[Pt] = t, r[Ur] = u, e = (t.mode & 1) !== 0, n) {
                            case "dialog":
                                we("cancel", r), we("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                we("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Fr.length; i++) we(Fr[i], r);
                                break;
                            case "source":
                                we("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                we("error", r), we("load", r);
                                break;
                            case "details":
                                we("toggle", r);
                                break;
                            case "input":
                                Se(r, u), we("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!u.multiple
                                }, we("invalid", r);
                                break;
                            case "textarea":
                                _u(r, u), we("invalid", r)
                        }
                        Yi(n, u), i = null;
                        for (var d in u)
                            if (u.hasOwnProperty(d)) {
                                var v = u[d];
                                d === "children" ? typeof v == "string" ? r.textContent !== v && (u.suppressHydrationWarning !== !0 && zl(r.textContent, v, e), i = ["children", v]) : typeof v == "number" && r.textContent !== "" + v && (u.suppressHydrationWarning !== !0 && zl(r.textContent, v, e), i = ["children", "" + v]) : c.hasOwnProperty(d) && v != null && d === "onScroll" && we("scroll", r)
                            } switch (n) {
                            case "input":
                                An(r), Pu(r, u, !0);
                                break;
                            case "textarea":
                                An(r), Ou(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof u.onClick == "function" && (r.onclick = $l)
                        }
                        r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                    } else {
                        d = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Du(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, {
                            is: r.is
                        }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[Pt] = t, e[Ur] = r, Kc(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (d = Xi(n, r), n) {
                                case "dialog":
                                    we("cancel", e), we("close", e), i = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    we("load", e), i = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (i = 0; i < Fr.length; i++) we(Fr[i], e);
                                    i = r;
                                    break;
                                case "source":
                                    we("error", e), i = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    we("error", e), we("load", e), i = r;
                                    break;
                                case "details":
                                    we("toggle", e), i = r;
                                    break;
                                case "input":
                                    Se(e, r), i = Zt(e, r), we("invalid", e);
                                    break;
                                case "option":
                                    i = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, i = H({}, r, {
                                        value: void 0
                                    }), we("invalid", e);
                                    break;
                                case "textarea":
                                    _u(e, r), i = Qi(e, r), we("invalid", e);
                                    break;
                                default:
                                    i = r
                            }
                            Yi(n, i),
                            v = i;
                            for (u in v)
                                if (v.hasOwnProperty(u)) {
                                    var w = v[u];
                                    u === "style" ? zu(e, w) : u === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && Mu(e, w)) : u === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && xr(e, w) : typeof w == "number" && xr(e, "" + w) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? w != null && u === "onScroll" && we("scroll", e) : w != null && W(e, u, w, d))
                                } switch (n) {
                                case "input":
                                    An(e), Pu(e, r, !1);
                                    break;
                                case "textarea":
                                    An(e), Ou(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + de(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, u = r.value, u != null ? Bn(e, !!r.multiple, u, !1) : r.defaultValue != null && Bn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof i.onClick == "function" && (e.onclick = $l)
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                            }
                        }
                        r && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return Ke(t), null;
            case 6:
                if (e && t.stateNode != null) Gc(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
                    if (n = Tn(Qr.current), Tn(_t.current), Vl(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[Pt] = t, (u = r.nodeValue !== n) && (e = at, e !== null)) switch (e.tag) {
                            case 3:
                                zl(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && zl(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        u && (t.flags |= 4)
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Pt] = t, t.stateNode = r
                }
                return Ke(t), null;
            case 13:
                if (Ee(Ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (Ce && ut !== null && t.mode & 1 && !(t.flags & 128)) Js(), tr(), t.flags |= 98560, u = !1;
                    else if (u = Vl(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!u) throw Error(a(318));
                            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(a(317));
                            u[Pt] = t
                        } else tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Ke(t), u = !1
                    } else wt !== null && (Ra(wt), wt = null), u = !0;
                    if (!u) return t.flags & 65536 ? t : null
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ne.current & 1 ? Me === 0 && (Me = 3) : Pa())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
            case 4:
                return ir(), ma(e, t), e === null && Ar(t.stateNode.containerInfo), Ke(t), null;
            case 10:
                return Wo(t.type._context), Ke(t), null;
            case 17:
                return et(t.type) && Al(), Ke(t), null;
            case 19:
                if (Ee(Ne), u = t.memoizedState, u === null) return Ke(t), null;
                if (r = (t.flags & 128) !== 0, d = u.rendering, d === null)
                    if (r) Zr(u, !1);
                    else {
                        if (Me !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (d = Jl(e), d !== null) {
                                    for (t.flags |= 128, Zr(u, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) u = n, e = r, u.flags &= 14680066, d = u.alternate, d === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = d.childLanes, u.lanes = d.lanes, u.child = d.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = d.memoizedProps, u.memoizedState = d.memoizedState, u.updateQueue = d.updateQueue, u.type = d.type, e = d.dependencies, u.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return ve(Ne, Ne.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        u.tail !== null && Pe() > sr && (t.flags |= 128, r = !0, Zr(u, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = Jl(d), e !== null) {
                            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !Ce) return Ke(t), null
                        } else 2 * Pe() - u.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(u, !1), t.lanes = 4194304);
                    u.isBackwards ? (d.sibling = t.child, t.child = d) : (n = u.last, n !== null ? n.sibling = d : t.child = d, u.last = d)
                }
                return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Pe(), t.sibling = null, n = Ne.current, ve(Ne, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
            case 22:
            case 23:
                return Ta(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? st & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(a(156, t.tag))
    }

    function Bh(e, t) {
        switch ($o(t), t.tag) {
            case 1:
                return et(t.type) && Al(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ir(), Ee(be), Ee(We), Jo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Yo(t), null;
            case 13:
                if (Ee(Ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(a(340));
                    tr()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Ee(Ne), null;
            case 4:
                return ir(), null;
            case 10:
                return Wo(t.type._context), null;
            case 22:
            case 23:
                return Ta(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var ii = !1,
        Qe = !1,
        Uh = typeof WeakSet == "function" ? WeakSet : Set,
        V = null;

    function ar(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (r) {
                Te(e, t, r)
            } else n.current = null
    }

    function ga(e, t, n) {
        try {
            n()
        } catch (r) {
            Te(e, t, r)
        }
    }
    var Yc = !1;

    function Hh(e, t) {
        if (To = Nl, e = Rs(), wo(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        u = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, u.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var d = 0,
                        v = -1,
                        w = -1,
                        T = 0,
                        M = 0,
                        $ = e,
                        D = null;
                    t: for (;;) {
                        for (var U; $ !== n || i !== 0 && $.nodeType !== 3 || (v = d + i), $ !== u || r !== 0 && $.nodeType !== 3 || (w = d + r), $.nodeType === 3 && (d += $.nodeValue.length), (U = $.firstChild) !== null;) D = $, $ = U;
                        for (;;) {
                            if ($ === e) break t;
                            if (D === n && ++T === i && (v = d), D === u && ++M === r && (w = d), (U = $.nextSibling) !== null) break;
                            $ = D, D = $.parentNode
                        }
                        $ = U
                    }
                    n = v === -1 || w === -1 ? null : {
                        start: v,
                        end: w
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (Po = {
                focusedElem: e,
                selectionRange: n
            }, Nl = !1, V = t; V !== null;)
            if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
            else
                for (; V !== null;) {
                    t = V;
                    try {
                        var K = t.alternate;
                        if (t.flags & 1024) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (K !== null) {
                                    var Q = K.memoizedProps,
                                        _e = K.memoizedState,
                                        N = t.stateNode,
                                        E = N.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : Et(t.type, Q), _e);
                                    N.__reactInternalSnapshotBeforeUpdate = E
                                }
                                break;
                            case 3:
                                var R = t.stateNode.containerInfo;
                                R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(a(163))
                        }
                    } catch (A) {
                        Te(t, t.return, A)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, V = e;
                        break
                    }
                    V = t.return
                }
        return K = Yc, Yc = !1, K
    }

    function qr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var i = r = r.next;
            do {
                if ((i.tag & e) === e) {
                    var u = i.destroy;
                    i.destroy = void 0, u !== void 0 && ga(t, n, u)
                }
                i = i.next
            } while (i !== r)
        }
    }

    function oi(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function ya(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function Xc(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pt], delete t[Ur], delete t[Do], delete t[kh], delete t[Nh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Jc(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function Zc(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Jc(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function va(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $l));
        else if (r !== 4 && (e = e.child, e !== null))
            for (va(e, t, n), e = e.sibling; e !== null;) va(e, t, n), e = e.sibling
    }

    function xa(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (xa(e, t, n), e = e.sibling; e !== null;) xa(e, t, n), e = e.sibling
    }
    var Be = null,
        St = !1;

    function fn(e, t, n) {
        for (n = n.child; n !== null;) qc(e, t, n), n = n.sibling
    }

    function qc(e, t, n) {
        if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
            Tt.onCommitFiberUnmount(xl, n)
        } catch {}
        switch (n.tag) {
            case 5:
                Qe || ar(n, t);
            case 6:
                var r = Be,
                    i = St;
                Be = null, fn(e, t, n), Be = r, St = i, Be !== null && (St ? (e = Be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
                break;
            case 18:
                Be !== null && (St ? (e = Be, n = n.stateNode, e.nodeType === 8 ? Oo(e.parentNode, n) : e.nodeType === 1 && Oo(e, n), _r(e)) : Oo(Be, n.stateNode));
                break;
            case 4:
                r = Be, i = St, Be = n.stateNode.containerInfo, St = !0, fn(e, t, n), Be = r, St = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    i = r = r.next;
                    do {
                        var u = i,
                            d = u.destroy;
                        u = u.tag, d !== void 0 && (u & 2 || u & 4) && ga(n, t, d), i = i.next
                    } while (i !== r)
                }
                fn(e, t, n);
                break;
            case 1:
                if (!Qe && (ar(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                } catch (v) {
                    Te(n, t, v)
                }
                fn(e, t, n);
                break;
            case 21:
                fn(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Qe = (r = Qe) || n.memoizedState !== null, fn(e, t, n), Qe = r) : fn(e, t, n);
                break;
            default:
                fn(e, t, n)
        }
    }

    function bc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Uh), t.forEach(function(r) {
                var i = Zh.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i))
            })
        }
    }

    function Ct(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                try {
                    var u = e,
                        d = t,
                        v = d;
                    e: for (; v !== null;) {
                        switch (v.tag) {
                            case 5:
                                Be = v.stateNode, St = !1;
                                break e;
                            case 3:
                                Be = v.stateNode.containerInfo, St = !0;
                                break e;
                            case 4:
                                Be = v.stateNode.containerInfo, St = !0;
                                break e
                        }
                        v = v.return
                    }
                    if (Be === null) throw Error(a(160));
                    qc(u, d, i), Be = null, St = !1;
                    var w = i.alternate;
                    w !== null && (w.return = null), i.return = null
                } catch (T) {
                    Te(i, t, T)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) ef(t, e), t = t.sibling
    }

    function ef(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Ct(t, e), Ot(e), r & 4) {
                    try {
                        qr(3, e, e.return), oi(3, e)
                    } catch (Q) {
                        Te(e, e.return, Q)
                    }
                    try {
                        qr(5, e, e.return)
                    } catch (Q) {
                        Te(e, e.return, Q)
                    }
                }
                break;
            case 1:
                Ct(t, e), Ot(e), r & 512 && n !== null && ar(n, n.return);
                break;
            case 5:
                if (Ct(t, e), Ot(e), r & 512 && n !== null && ar(n, n.return), e.flags & 32) {
                    var i = e.stateNode;
                    try {
                        xr(i, "")
                    } catch (Q) {
                        Te(e, e.return, Q)
                    }
                }
                if (r & 4 && (i = e.stateNode, i != null)) {
                    var u = e.memoizedProps,
                        d = n !== null ? n.memoizedProps : u,
                        v = e.type,
                        w = e.updateQueue;
                    if (e.updateQueue = null, w !== null) try {
                        v === "input" && u.type === "radio" && u.name != null && yr(i, u), Xi(v, d);
                        var T = Xi(v, u);
                        for (d = 0; d < w.length; d += 2) {
                            var M = w[d],
                                $ = w[d + 1];
                            M === "style" ? zu(i, $) : M === "dangerouslySetInnerHTML" ? Mu(i, $) : M === "children" ? xr(i, $) : W(i, M, $, T)
                        }
                        switch (v) {
                            case "input":
                                En(i, u);
                                break;
                            case "textarea":
                                Lu(i, u);
                                break;
                            case "select":
                                var D = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!u.multiple;
                                var U = u.value;
                                U != null ? Bn(i, !!u.multiple, U, !1) : D !== !!u.multiple && (u.defaultValue != null ? Bn(i, !!u.multiple, u.defaultValue, !0) : Bn(i, !!u.multiple, u.multiple ? [] : "", !1))
                        }
                        i[Ur] = u
                    } catch (Q) {
                        Te(e, e.return, Q)
                    }
                }
                break;
            case 6:
                if (Ct(t, e), Ot(e), r & 4) {
                    if (e.stateNode === null) throw Error(a(162));
                    i = e.stateNode, u = e.memoizedProps;
                    try {
                        i.nodeValue = u
                    } catch (Q) {
                        Te(e, e.return, Q)
                    }
                }
                break;
            case 3:
                if (Ct(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    _r(t.containerInfo)
                } catch (Q) {
                    Te(e, e.return, Q)
                }
                break;
            case 4:
                Ct(t, e), Ot(e);
                break;
            case 13:
                Ct(t, e), Ot(e), i = e.child, i.flags & 8192 && (u = i.memoizedState !== null, i.stateNode.isHidden = u, !u || i.alternate !== null && i.alternate.memoizedState !== null || (Sa = Pe())), r & 4 && bc(e);
                break;
            case 22:
                if (M = n !== null && n.memoizedState !== null, e.mode & 1 ? (Qe = (T = Qe) || M, Ct(t, e), Qe = T) : Ct(t, e), Ot(e), r & 8192) {
                    if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !M && e.mode & 1)
                        for (V = e, M = e.child; M !== null;) {
                            for ($ = V = M; V !== null;) {
                                switch (D = V, U = D.child, D.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        qr(4, D, D.return);
                                        break;
                                    case 1:
                                        ar(D, D.return);
                                        var K = D.stateNode;
                                        if (typeof K.componentWillUnmount == "function") {
                                            r = D, n = D.return;
                                            try {
                                                t = r, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount()
                                            } catch (Q) {
                                                Te(r, n, Q)
                                            }
                                        }
                                        break;
                                    case 5:
                                        ar(D, D.return);
                                        break;
                                    case 22:
                                        if (D.memoizedState !== null) {
                                            rf($);
                                            continue
                                        }
                                }
                                U !== null ? (U.return = D, V = U) : rf($)
                            }
                            M = M.sibling
                        }
                    e: for (M = null, $ = e;;) {
                        if ($.tag === 5) {
                            if (M === null) {
                                M = $;
                                try {
                                    i = $.stateNode, T ? (u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (v = $.stateNode, w = $.memoizedProps.style, d = w != null && w.hasOwnProperty("display") ? w.display : null, v.style.display = Iu("display", d))
                                } catch (Q) {
                                    Te(e, e.return, Q)
                                }
                            }
                        } else if ($.tag === 6) {
                            if (M === null) try {
                                $.stateNode.nodeValue = T ? "" : $.memoizedProps
                            } catch (Q) {
                                Te(e, e.return, Q)
                            }
                        } else if (($.tag !== 22 && $.tag !== 23 || $.memoizedState === null || $ === e) && $.child !== null) {
                            $.child.return = $, $ = $.child;
                            continue
                        }
                        if ($ === e) break e;
                        for (; $.sibling === null;) {
                            if ($.return === null || $.return === e) break e;
                            M === $ && (M = null), $ = $.return
                        }
                        M === $ && (M = null), $.sibling.return = $.return, $ = $.sibling
                    }
                }
                break;
            case 19:
                Ct(t, e), Ot(e), r & 4 && bc(e);
                break;
            case 21:
                break;
            default:
                Ct(t, e), Ot(e)
        }
    }

    function Ot(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null;) {
                        if (Jc(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(a(160))
                }
                switch (r.tag) {
                    case 5:
                        var i = r.stateNode;
                        r.flags & 32 && (xr(i, ""), r.flags &= -33);
                        var u = Zc(e);
                        xa(e, u, i);
                        break;
                    case 3:
                    case 4:
                        var d = r.stateNode.containerInfo,
                            v = Zc(e);
                        va(e, v, d);
                        break;
                    default:
                        throw Error(a(161))
                }
            }
            catch (w) {
                Te(e, e.return, w)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Wh(e, t, n) {
        V = e, tf(e)
    }

    function tf(e, t, n) {
        for (var r = (e.mode & 1) !== 0; V !== null;) {
            var i = V,
                u = i.child;
            if (i.tag === 22 && r) {
                var d = i.memoizedState !== null || ii;
                if (!d) {
                    var v = i.alternate,
                        w = v !== null && v.memoizedState !== null || Qe;
                    v = ii;
                    var T = Qe;
                    if (ii = d, (Qe = w) && !T)
                        for (V = i; V !== null;) d = V, w = d.child, d.tag === 22 && d.memoizedState !== null ? lf(i) : w !== null ? (w.return = d, V = w) : lf(i);
                    for (; u !== null;) V = u, tf(u), u = u.sibling;
                    V = i, ii = v, Qe = T
                }
                nf(e)
            } else i.subtreeFlags & 8772 && u !== null ? (u.return = i, V = u) : nf(e)
        }
    }

    function nf(e) {
        for (; V !== null;) {
            var t = V;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Qe || oi(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Qe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Et(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                } var u = t.updateQueue;
                            u !== null && rc(t, u, r);
                            break;
                        case 3:
                            var d = t.updateQueue;
                            if (d !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                rc(t, d, n)
                            }
                            break;
                        case 5:
                            var v = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = v;
                                var w = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        w.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        w.src && (n.src = w.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var T = t.alternate;
                                if (T !== null) {
                                    var M = T.memoizedState;
                                    if (M !== null) {
                                        var $ = M.dehydrated;
                                        $ !== null && _r($)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(a(163))
                    }
                    Qe || t.flags & 512 && ya(t)
                } catch (D) {
                    Te(t, t.return, D)
                }
            }
            if (t === e) {
                V = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, V = n;
                break
            }
            V = t.return
        }
    }

    function rf(e) {
        for (; V !== null;) {
            var t = V;
            if (t === e) {
                V = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, V = n;
                break
            }
            V = t.return
        }
    }

    function lf(e) {
        for (; V !== null;) {
            var t = V;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            oi(4, t)
                        } catch (w) {
                            Te(t, n, w)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var i = t.return;
                            try {
                                r.componentDidMount()
                            } catch (w) {
                                Te(t, i, w)
                            }
                        }
                        var u = t.return;
                        try {
                            ya(t)
                        } catch (w) {
                            Te(t, u, w)
                        }
                        break;
                    case 5:
                        var d = t.return;
                        try {
                            ya(t)
                        } catch (w) {
                            Te(t, d, w)
                        }
                }
            } catch (w) {
                Te(t, t.return, w)
            }
            if (t === e) {
                V = null;
                break
            }
            var v = t.sibling;
            if (v !== null) {
                v.return = t.return, V = v;
                break
            }
            V = t.return
        }
    }
    var Vh = Math.ceil,
        ai = G.ReactCurrentDispatcher,
        wa = G.ReactCurrentOwner,
        mt = G.ReactCurrentBatchConfig,
        se = 0,
        ze = null,
        Le = null,
        Ue = 0,
        st = 0,
        ur = on(0),
        Me = 0,
        br = null,
        _n = 0,
        ui = 0,
        Ea = 0,
        el = null,
        nt = null,
        Sa = 0,
        sr = 1 / 0,
        Ut = null,
        si = !1,
        Ca = null,
        dn = null,
        ci = !1,
        pn = null,
        fi = 0,
        tl = 0,
        ka = null,
        di = -1,
        pi = 0;

    function Xe() {
        return se & 6 ? Pe() : di !== -1 ? di : di = Pe()
    }

    function hn(e) {
        return e.mode & 1 ? se & 2 && Ue !== 0 ? Ue & -Ue : jh.transition !== null ? (pi === 0 && (pi = Zu()), pi) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : os(e.type)), e) : 1
    }

    function kt(e, t, n, r) {
        if (50 < tl) throw tl = 0, ka = null, Error(a(185));
        Nr(e, n, r), (!(se & 2) || e !== ze) && (e === ze && (!(se & 2) && (ui |= n), Me === 4 && mn(e, Ue)), rt(e, r), n === 1 && se === 0 && !(t.mode & 1) && (sr = Pe() + 500, Ul && un()))
    }

    function rt(e, t) {
        var n = e.callbackNode;
        jp(e, t);
        var r = Sl(e, e === ze ? Ue : 0);
        if (r === 0) n !== null && Yu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Yu(n), t === 1) e.tag === 0 ? Rh(af.bind(null, e)) : Ks(af.bind(null, e)), Sh(function() {
                !(se & 6) && un()
            }), n = null;
            else {
                switch (qu(r)) {
                    case 1:
                        n = no;
                        break;
                    case 4:
                        n = Xu;
                        break;
                    case 16:
                        n = vl;
                        break;
                    case 536870912:
                        n = Ju;
                        break;
                    default:
                        n = vl
                }
                n = mf(n, of.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function of(e, t) {
        if (di = -1, pi = 0, se & 6) throw Error(a(327));
        var n = e.callbackNode;
        if (cr() && e.callbackNode !== n) return null;
        var r = Sl(e, e === ze ? Ue : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = hi(e, r);
        else {
            t = r;
            var i = se;
            se |= 2;
            var u = sf();
            (ze !== e || Ue !== t) && (Ut = null, sr = Pe() + 500, On(e, t));
            do try {
                Gh();
                break
            } catch (v) {
                uf(e, v)
            }
            while (!0);
            Ho(), ai.current = u, se = i, Le !== null ? t = 0 : (ze = null, Ue = 0, t = Me)
        }
        if (t !== 0) {
            if (t === 2 && (i = ro(e), i !== 0 && (r = i, t = Na(e, i))), t === 1) throw n = br, On(e, 0), mn(e, r), rt(e, Pe()), n;
            if (t === 6) mn(e, r);
            else {
                if (i = e.current.alternate, !(r & 30) && !Kh(i) && (t = hi(e, r), t === 2 && (u = ro(e), u !== 0 && (r = u, t = Na(e, u))), t === 1)) throw n = br, On(e, 0), mn(e, r), rt(e, Pe()), n;
                switch (e.finishedWork = i, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(a(345));
                    case 2:
                        Dn(e, nt, Ut);
                        break;
                    case 3:
                        if (mn(e, r), (r & 130023424) === r && (t = Sa + 500 - Pe(), 10 < t)) {
                            if (Sl(e, 0) !== 0) break;
                            if (i = e.suspendedLanes, (i & r) !== r) {
                                Xe(), e.pingedLanes |= e.suspendedLanes & i;
                                break
                            }
                            e.timeoutHandle = Lo(Dn.bind(null, e, nt, Ut), t);
                            break
                        }
                        Dn(e, nt, Ut);
                        break;
                    case 4:
                        if (mn(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, i = -1; 0 < r;) {
                            var d = 31 - vt(r);
                            u = 1 << d, d = t[d], d > i && (i = d), r &= ~u
                        }
                        if (r = i, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vh(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Lo(Dn.bind(null, e, nt, Ut), r);
                            break
                        }
                        Dn(e, nt, Ut);
                        break;
                    case 5:
                        Dn(e, nt, Ut);
                        break;
                    default:
                        throw Error(a(329))
                }
            }
        }
        return rt(e, Pe()), e.callbackNode === n ? of.bind(null, e) : null
    }

    function Na(e, t) {
        var n = el;
        return e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256), e = hi(e, t), e !== 2 && (t = nt, nt = n, t !== null && Ra(t)), e
    }

    function Ra(e) {
        nt === null ? nt = e : nt.push.apply(nt, e)
    }

    function Kh(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r],
                            u = i.getSnapshot;
                        i = i.value;
                        try {
                            if (!xt(u(), i)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function mn(e, t) {
        for (t &= ~Ea, t &= ~ui, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - vt(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function af(e) {
        if (se & 6) throw Error(a(327));
        cr();
        var t = Sl(e, 0);
        if (!(t & 1)) return rt(e, Pe()), null;
        var n = hi(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ro(e);
            r !== 0 && (t = r, n = Na(e, r))
        }
        if (n === 1) throw n = br, On(e, 0), mn(e, t), rt(e, Pe()), n;
        if (n === 6) throw Error(a(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dn(e, nt, Ut), rt(e, Pe()), null
    }

    function ja(e, t) {
        var n = se;
        se |= 1;
        try {
            return e(t)
        } finally {
            se = n, se === 0 && (sr = Pe() + 500, Ul && un())
        }
    }

    function Ln(e) {
        pn !== null && pn.tag === 0 && !(se & 6) && cr();
        var t = se;
        se |= 1;
        var n = mt.transition,
            r = he;
        try {
            if (mt.transition = null, he = 1, e) return e()
        } finally {
            he = r, mt.transition = n, se = t, !(se & 6) && un()
        }
    }

    function Ta() {
        st = ur.current, Ee(ur)
    }

    function On(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Eh(n)), Le !== null)
            for (n = Le.return; n !== null;) {
                var r = n;
                switch ($o(r), r.tag) {
                    case 1:
                        r = r.type.childContextTypes, r != null && Al();
                        break;
                    case 3:
                        ir(), Ee(be), Ee(We), Jo();
                        break;
                    case 5:
                        Yo(r);
                        break;
                    case 4:
                        ir();
                        break;
                    case 13:
                        Ee(Ne);
                        break;
                    case 19:
                        Ee(Ne);
                        break;
                    case 10:
                        Wo(r.type._context);
                        break;
                    case 22:
                    case 23:
                        Ta()
                }
                n = n.return
            }
        if (ze = e, Le = e = gn(e.current, null), Ue = st = t, Me = 0, br = null, Ea = ui = _n = 0, nt = el = null, jn !== null) {
            for (t = 0; t < jn.length; t++)
                if (n = jn[t], r = n.interleaved, r !== null) {
                    n.interleaved = null;
                    var i = r.next,
                        u = n.pending;
                    if (u !== null) {
                        var d = u.next;
                        u.next = i, r.next = d
                    }
                    n.pending = r
                } jn = null
        }
        return e
    }

    function uf(e, t) {
        do {
            var n = Le;
            try {
                if (Ho(), Zl.current = ti, ql) {
                    for (var r = Re.memoizedState; r !== null;) {
                        var i = r.queue;
                        i !== null && (i.pending = null), r = r.next
                    }
                    ql = !1
                }
                if (Pn = 0, Ie = De = Re = null, Gr = !1, Yr = 0, wa.current = null, n === null || n.return === null) {
                    Me = 1, br = t, Le = null;
                    break
                }
                e: {
                    var u = e,
                        d = n.return,
                        v = n,
                        w = t;
                    if (t = Ue, v.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
                        var T = w,
                            M = v,
                            $ = M.tag;
                        if (!(M.mode & 1) && ($ === 0 || $ === 11 || $ === 15)) {
                            var D = M.alternate;
                            D ? (M.updateQueue = D.updateQueue, M.memoizedState = D.memoizedState, M.lanes = D.lanes) : (M.updateQueue = null, M.memoizedState = null)
                        }
                        var U = Oc(d);
                        if (U !== null) {
                            U.flags &= -257, Dc(U, d, v, u, t), U.mode & 1 && Lc(u, T, t), t = U, w = T;
                            var K = t.updateQueue;
                            if (K === null) {
                                var Q = new Set;
                                Q.add(w), t.updateQueue = Q
                            } else K.add(w);
                            break e
                        } else {
                            if (!(t & 1)) {
                                Lc(u, T, t), Pa();
                                break e
                            }
                            w = Error(a(426))
                        }
                    } else if (Ce && v.mode & 1) {
                        var _e = Oc(d);
                        if (_e !== null) {
                            !(_e.flags & 65536) && (_e.flags |= 256), Dc(_e, d, v, u, t), Bo(or(w, v));
                            break e
                        }
                    }
                    u = w = or(w, v),
                    Me !== 4 && (Me = 2),
                    el === null ? el = [u] : el.push(u),
                    u = d;do {
                        switch (u.tag) {
                            case 3:
                                u.flags |= 65536, t &= -t, u.lanes |= t;
                                var N = Pc(u, w, t);
                                nc(u, N);
                                break e;
                            case 1:
                                v = w;
                                var E = u.type,
                                    R = u.stateNode;
                                if (!(u.flags & 128) && (typeof E.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (dn === null || !dn.has(R)))) {
                                    u.flags |= 65536, t &= -t, u.lanes |= t;
                                    var A = _c(u, v, t);
                                    nc(u, A);
                                    break e
                                }
                        }
                        u = u.return
                    } while (u !== null)
                }
                ff(n)
            } catch (Y) {
                t = Y, Le === n && n !== null && (Le = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function sf() {
        var e = ai.current;
        return ai.current = ti, e === null ? ti : e
    }

    function Pa() {
        (Me === 0 || Me === 3 || Me === 2) && (Me = 4), ze === null || !(_n & 268435455) && !(ui & 268435455) || mn(ze, Ue)
    }

    function hi(e, t) {
        var n = se;
        se |= 2;
        var r = sf();
        (ze !== e || Ue !== t) && (Ut = null, On(e, t));
        do try {
            Qh();
            break
        } catch (i) {
            uf(e, i)
        }
        while (!0);
        if (Ho(), se = n, ai.current = r, Le !== null) throw Error(a(261));
        return ze = null, Ue = 0, Me
    }

    function Qh() {
        for (; Le !== null;) cf(Le)
    }

    function Gh() {
        for (; Le !== null && !vp();) cf(Le)
    }

    function cf(e) {
        var t = hf(e.alternate, e, st);
        e.memoizedProps = e.pendingProps, t === null ? ff(e) : Le = t, wa.current = null
    }

    function ff(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Bh(n, t), n !== null) {
                    n.flags &= 32767, Le = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Me = 6, Le = null;
                    return
                }
            } else if (n = Ah(n, t, st), n !== null) {
                Le = n;
                return
            }
            if (t = t.sibling, t !== null) {
                Le = t;
                return
            }
            Le = t = e
        } while (t !== null);
        Me === 0 && (Me = 5)
    }

    function Dn(e, t, n) {
        var r = he,
            i = mt.transition;
        try {
            mt.transition = null, he = 1, Yh(e, t, n, r)
        } finally {
            mt.transition = i, he = r
        }
        return null
    }

    function Yh(e, t, n, r) {
        do cr(); while (pn !== null);
        if (se & 6) throw Error(a(327));
        n = e.finishedWork;
        var i = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var u = n.lanes | n.childLanes;
        if (Tp(e, u), e === ze && (Le = ze = null, Ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ci || (ci = !0, mf(vl, function() {
                return cr(), null
            })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
            u = mt.transition, mt.transition = null;
            var d = he;
            he = 1;
            var v = se;
            se |= 4, wa.current = null, Hh(e, n), ef(n, e), hh(Po), Nl = !!To, Po = To = null, e.current = n, Wh(n), xp(), se = v, he = d, mt.transition = u
        } else e.current = n;
        if (ci && (ci = !1, pn = e, fi = i), u = e.pendingLanes, u === 0 && (dn = null), Sp(n.stateNode), rt(e, Pe()), t !== null)
            for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
        if (si) throw si = !1, e = Ca, Ca = null, e;
        return fi & 1 && e.tag !== 0 && cr(), u = e.pendingLanes, u & 1 ? e === ka ? tl++ : (tl = 0, ka = e) : tl = 0, un(), null
    }

    function cr() {
        if (pn !== null) {
            var e = qu(fi),
                t = mt.transition,
                n = he;
            try {
                if (mt.transition = null, he = 16 > e ? 16 : e, pn === null) var r = !1;
                else {
                    if (e = pn, pn = null, fi = 0, se & 6) throw Error(a(331));
                    var i = se;
                    for (se |= 4, V = e.current; V !== null;) {
                        var u = V,
                            d = u.child;
                        if (V.flags & 16) {
                            var v = u.deletions;
                            if (v !== null) {
                                for (var w = 0; w < v.length; w++) {
                                    var T = v[w];
                                    for (V = T; V !== null;) {
                                        var M = V;
                                        switch (M.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                qr(8, M, u)
                                        }
                                        var $ = M.child;
                                        if ($ !== null) $.return = M, V = $;
                                        else
                                            for (; V !== null;) {
                                                M = V;
                                                var D = M.sibling,
                                                    U = M.return;
                                                if (Xc(M), M === T) {
                                                    V = null;
                                                    break
                                                }
                                                if (D !== null) {
                                                    D.return = U, V = D;
                                                    break
                                                }
                                                V = U
                                            }
                                    }
                                }
                                var K = u.alternate;
                                if (K !== null) {
                                    var Q = K.child;
                                    if (Q !== null) {
                                        K.child = null;
                                        do {
                                            var _e = Q.sibling;
                                            Q.sibling = null, Q = _e
                                        } while (Q !== null)
                                    }
                                }
                                V = u
                            }
                        }
                        if (u.subtreeFlags & 2064 && d !== null) d.return = u, V = d;
                        else e: for (; V !== null;) {
                            if (u = V, u.flags & 2048) switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    qr(9, u, u.return)
                            }
                            var N = u.sibling;
                            if (N !== null) {
                                N.return = u.return, V = N;
                                break e
                            }
                            V = u.return
                        }
                    }
                    var E = e.current;
                    for (V = E; V !== null;) {
                        d = V;
                        var R = d.child;
                        if (d.subtreeFlags & 2064 && R !== null) R.return = d, V = R;
                        else e: for (d = E; V !== null;) {
                            if (v = V, v.flags & 2048) try {
                                switch (v.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        oi(9, v)
                                }
                            } catch (Y) {
                                Te(v, v.return, Y)
                            }
                            if (v === d) {
                                V = null;
                                break e
                            }
                            var A = v.sibling;
                            if (A !== null) {
                                A.return = v.return, V = A;
                                break e
                            }
                            V = v.return
                        }
                    }
                    if (se = i, un(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
                        Tt.onPostCommitFiberRoot(xl, e)
                    } catch {}
                    r = !0
                }
                return r
            } finally {
                he = n, mt.transition = t
            }
        }
        return !1
    }

    function df(e, t, n) {
        t = or(n, t), t = Pc(e, t, 1), e = cn(e, t, 1), t = Xe(), e !== null && (Nr(e, 1, t), rt(e, t))
    }

    function Te(e, t, n) {
        if (e.tag === 3) df(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    df(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
                        e = or(n, e), e = _c(t, e, 1), t = cn(t, e, 1), e = Xe(), t !== null && (Nr(t, 1, e), rt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function Xh(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, ze === e && (Ue & n) === n && (Me === 4 || Me === 3 && (Ue & 130023424) === Ue && 500 > Pe() - Sa ? On(e, 0) : Ea |= n), rt(e, t)
    }

    function pf(e, t) {
        t === 0 && (e.mode & 1 ? (t = El, El <<= 1, !(El & 130023424) && (El = 4194304)) : t = 1);
        var n = Xe();
        e = Ft(e, t), e !== null && (Nr(e, t, n), rt(e, n))
    }

    function Jh(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), pf(e, n)
    }

    function Zh(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    i = e.memoizedState;
                i !== null && (n = i.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(a(314))
        }
        r !== null && r.delete(t), pf(e, n)
    }
    var hf;
    hf = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || be.current) tt = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128)) return tt = !1, Fh(e, t, n);
                tt = !!(e.flags & 131072)
            }
        else tt = !1, Ce && t.flags & 1048576 && Qs(t, Wl, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                li(e, t), e = t.pendingProps;
                var i = qn(t, We.current);
                lr(t, n), i = bo(null, t, r, e, i, n);
                var u = ea();
                return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (u = !0, Bl(t)) : u = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Qo(t), i.updater = ni, t.stateNode = i, i._reactInternals = t, oa(t, r, e, n), t = ca(null, t, r, !0, u, n)) : (t.tag = 0, Ce && u && zo(t), Ye(null, t, i, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (li(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = bh(r), e = Et(r, e), i) {
                        case 0:
                            t = sa(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ac(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Mc(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ic(null, t, r, Et(r.type, e), n);
                            break e
                    }
                    throw Error(a(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Et(r, i), sa(e, t, r, i, n);
            case 1:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Et(r, i), Ac(e, t, r, i, n);
            case 3:
                e: {
                    if (Bc(t), e === null) throw Error(a(387));r = t.pendingProps,
                    u = t.memoizedState,
                    i = u.element,
                    tc(e, t),
                    Xl(t, r, null, n);
                    var d = t.memoizedState;
                    if (r = d.element, u.isDehydrated)
                        if (u = {
                                element: r,
                                isDehydrated: !1,
                                cache: d.cache,
                                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                                transitions: d.transitions
                            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
                            i = or(Error(a(423)), t), t = Uc(e, t, r, n, i);
                            break e
                        } else if (r !== i) {
                        i = or(Error(a(424)), t), t = Uc(e, t, r, n, i);
                        break e
                    } else
                        for (ut = ln(t.stateNode.containerInfo.firstChild), at = t, Ce = !0, wt = null, n = bs(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (tr(), r === i) {
                            t = Bt(e, t, n);
                            break e
                        }
                        Ye(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return lc(t), e === null && Ao(t), r = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, d = i.children, _o(r, i) ? d = null : u !== null && _o(r, u) && (t.flags |= 32), Fc(e, t), Ye(e, t, d, n), t.child;
            case 6:
                return e === null && Ao(t), null;
            case 13:
                return Hc(e, t, n);
            case 4:
                return Go(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Ye(e, t, r, n), t.child;
            case 11:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Et(r, i), Mc(e, t, r, i, n);
            case 7:
                return Ye(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ye(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ye(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, i = t.pendingProps, u = t.memoizedProps, d = i.value, ve(Ql, r._currentValue), r._currentValue = d, u !== null)
                        if (xt(u.value, d)) {
                            if (u.children === i.children && !be.current) {
                                t = Bt(e, t, n);
                                break e
                            }
                        } else
                            for (u = t.child, u !== null && (u.return = t); u !== null;) {
                                var v = u.dependencies;
                                if (v !== null) {
                                    d = u.child;
                                    for (var w = v.firstContext; w !== null;) {
                                        if (w.context === r) {
                                            if (u.tag === 1) {
                                                w = At(-1, n & -n), w.tag = 2;
                                                var T = u.updateQueue;
                                                if (T !== null) {
                                                    T = T.shared;
                                                    var M = T.pending;
                                                    M === null ? w.next = w : (w.next = M.next, M.next = w), T.pending = w
                                                }
                                            }
                                            u.lanes |= n, w = u.alternate, w !== null && (w.lanes |= n), Vo(u.return, n, t), v.lanes |= n;
                                            break
                                        }
                                        w = w.next
                                    }
                                } else if (u.tag === 10) d = u.type === t.type ? null : u.child;
                                else if (u.tag === 18) {
                                    if (d = u.return, d === null) throw Error(a(341));
                                    d.lanes |= n, v = d.alternate, v !== null && (v.lanes |= n), Vo(d, n, t), d = u.sibling
                                } else d = u.child;
                                if (d !== null) d.return = u;
                                else
                                    for (d = u; d !== null;) {
                                        if (d === t) {
                                            d = null;
                                            break
                                        }
                                        if (u = d.sibling, u !== null) {
                                            u.return = d.return, d = u;
                                            break
                                        }
                                        d = d.return
                                    }
                                u = d
                            }
                    Ye(e, t, i.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return i = t.type, r = t.pendingProps.children, lr(t, n), i = pt(i), r = r(i), t.flags |= 1, Ye(e, t, r, n), t.child;
            case 14:
                return r = t.type, i = Et(r, t.pendingProps), i = Et(r.type, i), Ic(e, t, r, i, n);
            case 15:
                return zc(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Et(r, i), li(e, t), t.tag = 1, et(r) ? (e = !0, Bl(t)) : e = !1, lr(t, n), jc(t, r, i), oa(t, r, i, n), ca(null, t, r, !0, e, n);
            case 19:
                return Vc(e, t, n);
            case 22:
                return $c(e, t, n)
        }
        throw Error(a(156, t.tag))
    };

    function mf(e, t) {
        return Gu(e, t)
    }

    function qh(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function gt(e, t, n, r) {
        return new qh(e, t, n, r)
    }

    function _a(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function bh(e) {
        if (typeof e == "function") return _a(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Ze) return 11;
            if (e === qe) return 14
        }
        return 2
    }

    function gn(e, t) {
        var n = e.alternate;
        return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function mi(e, t, n, r, i, u) {
        var d = 2;
        if (r = e, typeof e == "function") _a(e) && (d = 1);
        else if (typeof e == "string") d = 5;
        else e: switch (e) {
            case re:
                return Mn(n.children, i, u, t);
            case ce:
                d = 8, i |= 8;
                break;
            case ye:
                return e = gt(12, n, t, i | 2), e.elementType = ye, e.lanes = u, e;
            case Oe:
                return e = gt(13, n, t, i), e.elementType = Oe, e.lanes = u, e;
            case He:
                return e = gt(19, n, t, i), e.elementType = He, e.lanes = u, e;
            case pe:
                return gi(n, i, u, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case ke:
                        d = 10;
                        break e;
                    case Je:
                        d = 9;
                        break e;
                    case Ze:
                        d = 11;
                        break e;
                    case qe:
                        d = 14;
                        break e;
                    case xe:
                        d = 16, r = null;
                        break e
                }
                throw Error(a(130, e == null ? e : typeof e, ""))
        }
        return t = gt(d, n, t, i), t.elementType = e, t.type = r, t.lanes = u, t
    }

    function Mn(e, t, n, r) {
        return e = gt(7, e, r, t), e.lanes = n, e
    }

    function gi(e, t, n, r) {
        return e = gt(22, e, r, t), e.elementType = pe, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e
    }

    function La(e, t, n) {
        return e = gt(6, e, null, t), e.lanes = n, e
    }

    function Oa(e, t, n) {
        return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function em(e, t, n, r, i) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lo(0), this.expirationTimes = lo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
    }

    function Da(e, t, n, r, i, u, d, v, w) {
        return e = new em(e, t, n, v, w), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = gt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Qo(u), e
    }

    function tm(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: J,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function gf(e) {
        if (!e) return an;
        e = e._reactInternals;
        e: {
            if (Sn(e) !== e || e.tag !== 1) throw Error(a(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (et(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(a(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (et(n)) return Ws(e, n, t)
        }
        return t
    }

    function yf(e, t, n, r, i, u, d, v, w) {
        return e = Da(n, r, !0, e, i, u, d, v, w), e.context = gf(null), n = e.current, r = Xe(), i = hn(n), u = At(r, i), u.callback = t ?? null, cn(n, u, i), e.current.lanes = i, Nr(e, i, r), rt(e, r), e
    }

    function yi(e, t, n, r) {
        var i = t.current,
            u = Xe(),
            d = hn(i);
        return n = gf(n), t.context === null ? t.context = n : t.pendingContext = n, t = At(u, d), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = cn(i, t, d), e !== null && (kt(e, i, d, u), Yl(e, i, d)), d
    }

    function vi(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function vf(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Ma(e, t) {
        vf(e, t), (e = e.alternate) && vf(e, t)
    }
    var xf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function Ia(e) {
        this._internalRoot = e
    }
    xi.prototype.render = Ia.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(a(409));
        yi(e, t, null, null)
    }, xi.prototype.unmount = Ia.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Ln(function() {
                yi(null, e, null, null)
            }), t[Mt] = null
        }
    };

    function xi(e) {
        this._internalRoot = e
    }
    xi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ts();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
            tn.splice(n, 0, e), n === 0 && ls(e)
        }
    };

    function za(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function wi(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function wf() {}

    function nm(e, t, n, r, i) {
        if (i) {
            if (typeof r == "function") {
                var u = r;
                r = function() {
                    var T = vi(d);
                    u.call(T)
                }
            }
            var d = yf(t, r, e, 0, null, !1, !1, "", wf);
            return e._reactRootContainer = d, e[Mt] = d.current, Ar(e.nodeType === 8 ? e.parentNode : e), Ln(), d
        }
        for (; i = e.lastChild;) e.removeChild(i);
        if (typeof r == "function") {
            var v = r;
            r = function() {
                var T = vi(w);
                v.call(T)
            }
        }
        var w = Da(e, 0, !1, null, null, !1, !1, "", wf);
        return e._reactRootContainer = w, e[Mt] = w.current, Ar(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
            yi(t, w, n, r)
        }), w
    }

    function Ei(e, t, n, r, i) {
        var u = n._reactRootContainer;
        if (u) {
            var d = u;
            if (typeof i == "function") {
                var v = i;
                i = function() {
                    var w = vi(d);
                    v.call(w)
                }
            }
            yi(t, d, e, i)
        } else d = nm(n, t, e, i, r);
        return vi(d)
    }
    bu = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = kr(t.pendingLanes);
                    n !== 0 && (io(t, n | 1), rt(t, Pe()), !(se & 6) && (sr = Pe() + 500, un()))
                }
                break;
            case 13:
                Ln(function() {
                    var r = Ft(e, 1);
                    if (r !== null) {
                        var i = Xe();
                        kt(r, e, 1, i)
                    }
                }), Ma(e, 1)
        }
    }, oo = function(e) {
        if (e.tag === 13) {
            var t = Ft(e, 134217728);
            if (t !== null) {
                var n = Xe();
                kt(t, e, 134217728, n)
            }
            Ma(e, 134217728)
        }
    }, es = function(e) {
        if (e.tag === 13) {
            var t = hn(e),
                n = Ft(e, t);
            if (n !== null) {
                var r = Xe();
                kt(n, e, t, r)
            }
            Ma(e, t)
        }
    }, ts = function() {
        return he
    }, ns = function(e, t) {
        var n = he;
        try {
            return he = e, t()
        } finally {
            he = n
        }
    }, qi = function(e, t, n) {
        switch (t) {
            case "input":
                if (En(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = Fl(r);
                            if (!i) throw Error(a(90));
                            gr(r), En(r, i)
                        }
                    }
                }
                break;
            case "textarea":
                Lu(e, n);
                break;
            case "select":
                t = n.value, t != null && Bn(e, !!n.multiple, t, !1)
        }
    }, Bu = ja, Uu = Ln;
    var rm = {
            usingClientEntryPoint: !1,
            Events: [Hr, Jn, Fl, Fu, Au, ja]
        },
        nl = {
            findFiberByHostInstance: Cn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        lm = {
            bundleType: nl.bundleType,
            version: nl.version,
            rendererPackageName: nl.rendererPackageName,
            rendererConfig: nl.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: G.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = Ku(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: nl.findFiberByHostInstance,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Si.isDisabled && Si.supportsFiber) try {
            xl = Si.inject(lm), Tt = Si
        } catch {}
    }
    return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rm, lt.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!za(t)) throw Error(a(200));
        return tm(e, t, null, n)
    }, lt.createRoot = function(e, t) {
        if (!za(e)) throw Error(a(299));
        var n = !1,
            r = "",
            i = xf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Da(e, 1, !1, null, null, n, !1, r, i), e[Mt] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new Ia(t)
    }, lt.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
        return e = Ku(t), e = e === null ? null : e.stateNode, e
    }, lt.flushSync = function(e) {
        return Ln(e)
    }, lt.hydrate = function(e, t, n) {
        if (!wi(t)) throw Error(a(200));
        return Ei(null, e, t, !0, n)
    }, lt.hydrateRoot = function(e, t, n) {
        if (!za(e)) throw Error(a(405));
        var r = n != null && n.hydratedSources || null,
            i = !1,
            u = "",
            d = xf;
        if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = yf(t, null, e, 1, n ?? null, i, !1, u, d), e[Mt] = t.current, Ar(e), r)
            for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
        return new xi(t)
    }, lt.render = function(e, t, n) {
        if (!wi(t)) throw Error(a(200));
        return Ei(null, e, t, !1, n)
    }, lt.unmountComponentAtNode = function(e) {
        if (!wi(e)) throw Error(a(40));
        return e._reactRootContainer ? (Ln(function() {
            Ei(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Mt] = null
            })
        }), !0) : !1
    }, lt.unstable_batchedUpdates = ja, lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!wi(n)) throw Error(a(200));
        if (e == null || e._reactInternals === void 0) throw Error(a(38));
        return Ei(e, t, n, !1, r)
    }, lt.version = "18.3.1-next-f1338f8080-20240426", lt
}
var Tf;

function nd() {
    if (Tf) return Aa.exports;
    Tf = 1;

    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
        } catch (o) {
            console.error(o)
        }
    }
    return l(), Aa.exports = fm(), Aa.exports
}
var Pf;

function dm() {
    if (Pf) return Ci;
    Pf = 1;
    var l = nd();
    return Ci.createRoot = l.createRoot, Ci.hydrateRoot = l.hydrateRoot, Ci
}
var pm = dm(),
    ll = {},
    _f;

function hm() {
    if (_f) return ll;
    _f = 1, Object.defineProperty(ll, "__esModule", {
        value: !0
    }), ll.parse = p, ll.serialize = x;
    const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
        o = /^[\u0021-\u003A\u003C-\u007E]*$/,
        a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        s = /^[\u0020-\u003A\u003D-\u007E]*$/,
        c = Object.prototype.toString,
        f = (() => {
            const C = function() {};
            return C.prototype = Object.create(null), C
        })();

    function p(C, O) {
        const P = new f,
            I = C.length;
        if (I < 2) return P;
        const _ = (O == null ? void 0 : O.decode) || k;
        let z = 0;
        do {
            const B = C.indexOf("=", z);
            if (B === -1) break;
            const W = C.indexOf(";", z),
                G = W === -1 ? I : W;
            if (B > G) {
                z = C.lastIndexOf(";", B - 1) + 1;
                continue
            }
            const ne = y(C, z, B),
                J = g(C, B, ne),
                re = C.slice(ne, J);
            if (P[re] === void 0) {
                let ce = y(C, B + 1, G),
                    ye = g(C, G, ce);
                const ke = _(C.slice(ce, ye));
                P[re] = ke
            }
            z = G + 1
        } while (z < I);
        return P
    }

    function y(C, O, P) {
        do {
            const I = C.charCodeAt(O);
            if (I !== 32 && I !== 9) return O
        } while (++O < P);
        return P
    }

    function g(C, O, P) {
        for (; O > P;) {
            const I = C.charCodeAt(--O);
            if (I !== 32 && I !== 9) return O + 1
        }
        return P
    }

    function x(C, O, P) {
        const I = (P == null ? void 0 : P.encode) || encodeURIComponent;
        if (!l.test(C)) throw new TypeError(`argument name is invalid: ${C}`);
        const _ = I(O);
        if (!o.test(_)) throw new TypeError(`argument val is invalid: ${O}`);
        let z = C + "=" + _;
        if (!P) return z;
        if (P.maxAge !== void 0) {
            if (!Number.isInteger(P.maxAge)) throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);
            z += "; Max-Age=" + P.maxAge
        }
        if (P.domain) {
            if (!a.test(P.domain)) throw new TypeError(`option domain is invalid: ${P.domain}`);
            z += "; Domain=" + P.domain
        }
        if (P.path) {
            if (!s.test(P.path)) throw new TypeError(`option path is invalid: ${P.path}`);
            z += "; Path=" + P.path
        }
        if (P.expires) {
            if (!j(P.expires) || !Number.isFinite(P.expires.valueOf())) throw new TypeError(`option expires is invalid: ${P.expires}`);
            z += "; Expires=" + P.expires.toUTCString()
        }
        if (P.httpOnly && (z += "; HttpOnly"), P.secure && (z += "; Secure"), P.partitioned && (z += "; Partitioned"), P.priority) switch (typeof P.priority == "string" ? P.priority.toLowerCase() : void 0) {
            case "low":
                z += "; Priority=Low";
                break;
            case "medium":
                z += "; Priority=Medium";
                break;
            case "high":
                z += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${P.priority}`)
        }
        if (P.sameSite) switch (typeof P.sameSite == "string" ? P.sameSite.toLowerCase() : P.sameSite) {
            case !0:
            case "strict":
                z += "; SameSite=Strict";
                break;
            case "lax":
                z += "; SameSite=Lax";
                break;
            case "none":
                z += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)
        }
        return z
    }

    function k(C) {
        if (C.indexOf("%") === -1) return C;
        try {
            return decodeURIComponent(C)
        } catch {
            return C
        }
    }

    function j(C) {
        return c.call(C) === "[object Date]"
    }
    return ll
}
hm();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Lf = "popstate";

function mm(l = {}) {
    function o(c, f) {
        let {
            pathname: p = "/",
            search: y = "",
            hash: g = ""
        } = $n(c.location.hash.substring(1));
        return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), ba("", {
            pathname: p,
            search: y,
            hash: g
        }, f.state && f.state.usr || null, f.state && f.state.key || "default")
    }

    function a(c, f) {
        let p = c.document.querySelector("base"),
            y = "";
        if (p && p.getAttribute("href")) {
            let g = c.location.href,
                x = g.indexOf("#");
            y = x === -1 ? g : g.slice(0, x)
        }
        return y + "#" + (typeof f == "string" ? f : ul(f))
    }

    function s(c, f) {
        jt(c.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)
    }
    return ym(o, a, s, l)
}

function je(l, o) {
    if (l === !1 || l === null || typeof l > "u") throw new Error(o)
}

function jt(l, o) {
    if (!l) {
        typeof console < "u" && console.warn(o);
        try {
            throw new Error(o)
        } catch {}
    }
}

function gm() {
    return Math.random().toString(36).substring(2, 10)
}

function Of(l, o) {
    return {
        usr: l.state,
        key: l.key,
        idx: o
    }
}

function ba(l, o, a = null, s) {
    return {
        pathname: typeof l == "string" ? l : l.pathname,
        search: "",
        hash: "",
        ...typeof o == "string" ? $n(o) : o,
        state: a,
        key: o && o.key || s || gm()
    }
}

function ul({
    pathname: l = "/",
    search: o = "",
    hash: a = ""
}) {
    return o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o), a && a !== "#" && (l += a.charAt(0) === "#" ? a : "#" + a), l
}

function $n(l) {
    let o = {};
    if (l) {
        let a = l.indexOf("#");
        a >= 0 && (o.hash = l.substring(a), l = l.substring(0, a));
        let s = l.indexOf("?");
        s >= 0 && (o.search = l.substring(s), l = l.substring(0, s)), l && (o.pathname = l)
    }
    return o
}

function ym(l, o, a, s = {}) {
    let {
        window: c = document.defaultView,
        v5Compat: f = !1
    } = s, p = c.history, y = "POP", g = null, x = k();
    x == null && (x = 0, p.replaceState({
        ...p.state,
        idx: x
    }, ""));

    function k() {
        return (p.state || {
            idx: null
        }).idx
    }

    function j() {
        y = "POP";
        let _ = k(),
            z = _ == null ? null : _ - x;
        x = _, g && g({
            action: y,
            location: I.location,
            delta: z
        })
    }

    function C(_, z) {
        y = "PUSH";
        let B = ba(I.location, _, z);
        a(B, _), x = k() + 1;
        let W = Of(B, x),
            G = I.createHref(B);
        try {
            p.pushState(W, "", G)
        } catch (ne) {
            if (ne instanceof DOMException && ne.name === "DataCloneError") throw ne;
            c.location.assign(G)
        }
        f && g && g({
            action: y,
            location: I.location,
            delta: 1
        })
    }

    function O(_, z) {
        y = "REPLACE";
        let B = ba(I.location, _, z);
        a(B, _), x = k();
        let W = Of(B, x),
            G = I.createHref(B);
        p.replaceState(W, "", G), f && g && g({
            action: y,
            location: I.location,
            delta: 0
        })
    }

    function P(_) {
        let z = c.location.origin !== "null" ? c.location.origin : c.location.href,
            B = typeof _ == "string" ? _ : ul(_);
        return B = B.replace(/ $/, "%20"), je(z, `No window.location.(origin|href) available to create URL for href: ${B}`), new URL(B, z)
    }
    let I = {
        get action() {
            return y
        },
        get location() {
            return l(c, p)
        },
        listen(_) {
            if (g) throw new Error("A history only accepts one active listener");
            return c.addEventListener(Lf, j), g = _, () => {
                c.removeEventListener(Lf, j), g = null
            }
        },
        createHref(_) {
            return o(c, _)
        },
        createURL: P,
        encodeLocation(_) {
            let z = P(_);
            return {
                pathname: z.pathname,
                search: z.search,
                hash: z.hash
            }
        },
        push: C,
        replace: O,
        go(_) {
            return p.go(_)
        }
    };
    return I
}

function rd(l, o, a = "/") {
    return vm(l, o, a, !1)
}

function vm(l, o, a, s) {
    let c = typeof o == "string" ? $n(o) : o,
        f = wn(c.pathname || "/", a);
    if (f == null) return null;
    let p = ld(l);
    xm(p);
    let y = null;
    for (let g = 0; y == null && g < p.length; ++g) {
        let x = _m(f);
        y = Tm(p[g], x, s)
    }
    return y
}

function ld(l, o = [], a = [], s = "") {
    let c = (f, p, y) => {
        let g = {
            relativePath: y === void 0 ? f.path || "" : y,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: p,
            route: f
        };
        g.relativePath.startsWith("/") && (je(g.relativePath.startsWith(s), `Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), g.relativePath = g.relativePath.slice(s.length));
        let x = Qt([s, g.relativePath]),
            k = a.concat(g);
        f.children && f.children.length > 0 && (je(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${x}".`), ld(f.children, o, k, x)), !(f.path == null && !f.index) && o.push({
            path: x,
            score: Rm(x, f.index),
            routesMeta: k
        })
    };
    return l.forEach((f, p) => {
        var y;
        if (f.path === "" || !((y = f.path) != null && y.includes("?"))) c(f, p);
        else
            for (let g of id(f.path)) c(f, p, g)
    }), o
}

function id(l) {
    let o = l.split("/");
    if (o.length === 0) return [];
    let [a, ...s] = o, c = a.endsWith("?"), f = a.replace(/\?$/, "");
    if (s.length === 0) return c ? [f, ""] : [f];
    let p = id(s.join("/")),
        y = [];
    return y.push(...p.map(g => g === "" ? f : [f, g].join("/"))), c && y.push(...p), y.map(g => l.startsWith("/") && g === "" ? "/" : g)
}

function xm(l) {
    l.sort((o, a) => o.score !== a.score ? a.score - o.score : jm(o.routesMeta.map(s => s.childrenIndex), a.routesMeta.map(s => s.childrenIndex)))
}
var wm = /^:[\w-]+$/,
    Em = 3,
    Sm = 2,
    Cm = 1,
    km = 10,
    Nm = -2,
    Df = l => l === "*";

function Rm(l, o) {
    let a = l.split("/"),
        s = a.length;
    return a.some(Df) && (s += Nm), o && (s += Sm), a.filter(c => !Df(c)).reduce((c, f) => c + (wm.test(f) ? Em : f === "" ? Cm : km), s)
}

function jm(l, o) {
    return l.length === o.length && l.slice(0, -1).every((s, c) => s === o[c]) ? l[l.length - 1] - o[o.length - 1] : 0
}

function Tm(l, o, a = !1) {
    let {
        routesMeta: s
    } = l, c = {}, f = "/", p = [];
    for (let y = 0; y < s.length; ++y) {
        let g = s[y],
            x = y === s.length - 1,
            k = f === "/" ? o : o.slice(f.length) || "/",
            j = Li({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: x
            }, k),
            C = g.route;
        if (!j && x && a && !s[s.length - 1].route.index && (j = Li({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: !1
            }, k)), !j) return null;
        Object.assign(c, j.params), p.push({
            params: c,
            pathname: Qt([f, j.pathname]),
            pathnameBase: Mm(Qt([f, j.pathnameBase])),
            route: C
        }), j.pathnameBase !== "/" && (f = Qt([f, j.pathnameBase]))
    }
    return p
}

function Li(l, o) {
    typeof l == "string" && (l = {
        path: l,
        caseSensitive: !1,
        end: !0
    });
    let [a, s] = Pm(l.path, l.caseSensitive, l.end), c = o.match(a);
    if (!c) return null;
    let f = c[0],
        p = f.replace(/(.)\/+$/, "$1"),
        y = c.slice(1);
    return {
        params: s.reduce((x, {
            paramName: k,
            isOptional: j
        }, C) => {
            if (k === "*") {
                let P = y[C] || "";
                p = f.slice(0, f.length - P.length).replace(/(.)\/+$/, "$1")
            }
            const O = y[C];
            return j && !O ? x[k] = void 0 : x[k] = (O || "").replace(/%2F/g, "/"), x
        }, {}),
        pathname: f,
        pathnameBase: p,
        pattern: l
    }
}

function Pm(l, o = !1, a = !0) {
    jt(l === "*" || !l.endsWith("*") || l.endsWith("/*"), `Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);
    let s = [],
        c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (p, y, g) => (s.push({
            paramName: y,
            isOptional: g != null
        }), g ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return l.endsWith("*") ? (s.push({
        paramName: "*"
    }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, o ? void 0 : "i"), s]
}

function _m(l) {
    try {
        return l.split("/").map(o => decodeURIComponent(o).replace(/\//g, "%2F")).join("/")
    } catch (o) {
        return jt(!1, `The URL path "${l}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`), l
    }
}

function wn(l, o) {
    if (o === "/") return l;
    if (!l.toLowerCase().startsWith(o.toLowerCase())) return null;
    let a = o.endsWith("/") ? o.length - 1 : o.length,
        s = l.charAt(a);
    return s && s !== "/" ? null : l.slice(a) || "/"
}

function Lm(l, o = "/") {
    let {
        pathname: a,
        search: s = "",
        hash: c = ""
    } = typeof l == "string" ? $n(l) : l;
    return {
        pathname: a ? a.startsWith("/") ? a : Om(a, o) : o,
        search: Im(s),
        hash: zm(c)
    }
}

function Om(l, o) {
    let a = o.replace(/\/+$/, "").split("/");
    return l.split("/").forEach(c => {
        c === ".." ? a.length > 1 && a.pop() : c !== "." && a.push(c)
    }), a.length > 1 ? a.join("/") : "/"
}

function Ha(l, o, a, s) {
    return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function Dm(l) {
    return l.filter((o, a) => a === 0 || o.route.path && o.route.path.length > 0)
}

function od(l) {
    let o = Dm(l);
    return o.map((a, s) => s === o.length - 1 ? a.pathname : a.pathnameBase)
}

function ad(l, o, a, s = !1) {
    let c;
    typeof l == "string" ? c = $n(l) : (c = {
        ...l
    }, je(!c.pathname || !c.pathname.includes("?"), Ha("?", "pathname", "search", c)), je(!c.pathname || !c.pathname.includes("#"), Ha("#", "pathname", "hash", c)), je(!c.search || !c.search.includes("#"), Ha("#", "search", "hash", c)));
    let f = l === "" || c.pathname === "",
        p = f ? "/" : c.pathname,
        y;
    if (p == null) y = a;
    else {
        let j = o.length - 1;
        if (!s && p.startsWith("..")) {
            let C = p.split("/");
            for (; C[0] === "..";) C.shift(), j -= 1;
            c.pathname = C.join("/")
        }
        y = j >= 0 ? o[j] : "/"
    }
    let g = Lm(c, y),
        x = p && p !== "/" && p.endsWith("/"),
        k = (f || p === ".") && a.endsWith("/");
    return !g.pathname.endsWith("/") && (x || k) && (g.pathname += "/"), g
}
var Qt = l => l.join("/").replace(/\/\/+/g, "/"),
    Mm = l => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Im = l => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l,
    zm = l => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l;

function $m(l) {
    return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l
}
var ud = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ud);
var Fm = ["GET", ...ud];
new Set(Fm);
var hr = m.createContext(null);
hr.displayName = "DataRouter";
var $i = m.createContext(null);
$i.displayName = "DataRouterState";
var sd = m.createContext({
    isTransitioning: !1
});
sd.displayName = "ViewTransition";
var Am = m.createContext(new Map);
Am.displayName = "Fetchers";
var Bm = m.createContext(null);
Bm.displayName = "Await";
var Dt = m.createContext(null);
Dt.displayName = "Navigation";
var fl = m.createContext(null);
fl.displayName = "Location";
var Yt = m.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Yt.displayName = "Route";
var au = m.createContext(null);
au.displayName = "RouteError";

function Um(l, {
    relative: o
} = {}) {
    je(dl(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: a,
        navigator: s
    } = m.useContext(Dt), {
        hash: c,
        pathname: f,
        search: p
    } = pl(l, {
        relative: o
    }), y = f;
    return a !== "/" && (y = f === "/" ? a : Qt([a, f])), s.createHref({
        pathname: y,
        search: p,
        hash: c
    })
}

function dl() {
    return m.useContext(fl) != null
}

function Fn() {
    return je(dl(), "useLocation() may be used only in the context of a <Router> component."), m.useContext(fl).location
}
var cd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function fd(l) {
    m.useContext(Dt).static || m.useLayoutEffect(l)
}

function Hm() {
    let {
        isDataRoute: l
    } = m.useContext(Yt);
    return l ? tg() : Wm()
}

function Wm() {
    je(dl(), "useNavigate() may be used only in the context of a <Router> component.");
    let l = m.useContext(hr),
        {
            basename: o,
            navigator: a
        } = m.useContext(Dt),
        {
            matches: s
        } = m.useContext(Yt),
        {
            pathname: c
        } = Fn(),
        f = JSON.stringify(od(s)),
        p = m.useRef(!1);
    return fd(() => {
        p.current = !0
    }), m.useCallback((g, x = {}) => {
        if (jt(p.current, cd), !p.current) return;
        if (typeof g == "number") {
            a.go(g);
            return
        }
        let k = ad(g, JSON.parse(f), c, x.relative === "path");
        l == null && o !== "/" && (k.pathname = k.pathname === "/" ? o : Qt([o, k.pathname])), (x.replace ? a.replace : a.push)(k, x.state, x)
    }, [o, a, f, c, l])
}
m.createContext(null);

function pl(l, {
    relative: o
} = {}) {
    let {
        matches: a
    } = m.useContext(Yt), {
        pathname: s
    } = Fn(), c = JSON.stringify(od(a));
    return m.useMemo(() => ad(l, JSON.parse(c), s, o === "path"), [l, c, s, o])
}

function Vm(l, o) {
    return dd(l, o)
}

function dd(l, o, a, s) {
    var z;
    je(dl(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: c
    } = m.useContext(Dt), {
        matches: f
    } = m.useContext(Yt), p = f[f.length - 1], y = p ? p.params : {}, g = p ? p.pathname : "/", x = p ? p.pathnameBase : "/", k = p && p.route;
    {
        let B = k && k.path || "";
        pd(g, !k || B.endsWith("*") || B.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)
    }
    let j = Fn(),
        C;
    if (o) {
        let B = typeof o == "string" ? $n(o) : o;
        je(x === "/" || ((z = B.pathname) == null ? void 0 : z.startsWith(x)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${B.pathname}" was given in the \`location\` prop.`), C = B
    } else C = j;
    let O = C.pathname || "/",
        P = O;
    if (x !== "/") {
        let B = x.replace(/^\//, "").split("/");
        P = "/" + O.replace(/^\//, "").split("/").slice(B.length).join("/")
    }
    let I = rd(l, {
        pathname: P
    });
    jt(k || I != null, `No routes matched location "${C.pathname}${C.search}${C.hash}" `), jt(I == null || I[I.length - 1].route.element !== void 0 || I[I.length - 1].route.Component !== void 0 || I[I.length - 1].route.lazy !== void 0, `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let _ = Xm(I && I.map(B => Object.assign({}, B, {
        params: Object.assign({}, y, B.params),
        pathname: Qt([x, c.encodeLocation ? c.encodeLocation(B.pathname).pathname : B.pathname]),
        pathnameBase: B.pathnameBase === "/" ? x : Qt([x, c.encodeLocation ? c.encodeLocation(B.pathnameBase).pathname : B.pathnameBase])
    })), f, a, s);
    return o && _ ? m.createElement(fl.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...C
            },
            navigationType: "POP"
        }
    }, _) : _
}

function Km() {
    let l = eg(),
        o = $m(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l),
        a = l instanceof Error ? l.stack : null,
        s = "rgba(200,200,200, 0.5)",
        c = {
            padding: "0.5rem",
            backgroundColor: s
        },
        f = {
            padding: "2px 4px",
            backgroundColor: s
        },
        p = null;
    return console.error("Error handled by React Router default ErrorBoundary:", l), p = m.createElement(m.Fragment, null, m.createElement("p", null, "💿 Hey developer 👋"), m.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", m.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", m.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")), m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, o), a ? m.createElement("pre", {
        style: c
    }, a) : null, p)
}
var Qm = m.createElement(Km, null),
    Gm = class extends m.Component {
        constructor(l) {
            super(l), this.state = {
                location: l.location,
                revalidation: l.revalidation,
                error: l.error
            }
        }
        static getDerivedStateFromError(l) {
            return {
                error: l
            }
        }
        static getDerivedStateFromProps(l, o) {
            return o.location !== l.location || o.revalidation !== "idle" && l.revalidation === "idle" ? {
                error: l.error,
                location: l.location,
                revalidation: l.revalidation
            } : {
                error: l.error !== void 0 ? l.error : o.error,
                location: o.location,
                revalidation: l.revalidation || o.revalidation
            }
        }
        componentDidCatch(l, o) {
            console.error("React Router caught the following error during render", l, o)
        }
        render() {
            return this.state.error !== void 0 ? m.createElement(Yt.Provider, {
                value: this.props.routeContext
            }, m.createElement(au.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function Ym({
    routeContext: l,
    match: o,
    children: a
}) {
    let s = m.useContext(hr);
    return s && s.static && s.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = o.route.id), m.createElement(Yt.Provider, {
        value: l
    }, a)
}

function Xm(l, o = [], a = null, s = null) {
    if (l == null) {
        if (!a) return null;
        if (a.errors) l = a.matches;
        else if (o.length === 0 && !a.initialized && a.matches.length > 0) l = a.matches;
        else return null
    }
    let c = l,
        f = a == null ? void 0 : a.errors;
    if (f != null) {
        let g = c.findIndex(x => x.route.id && (f == null ? void 0 : f[x.route.id]) !== void 0);
        je(g >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), c = c.slice(0, Math.min(c.length, g + 1))
    }
    let p = !1,
        y = -1;
    if (a)
        for (let g = 0; g < c.length; g++) {
            let x = c[g];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (y = g), x.route.id) {
                let {
                    loaderData: k,
                    errors: j
                } = a, C = x.route.loader && !k.hasOwnProperty(x.route.id) && (!j || j[x.route.id] === void 0);
                if (x.route.lazy || C) {
                    p = !0, y >= 0 ? c = c.slice(0, y + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight((g, x, k) => {
        let j, C = !1,
            O = null,
            P = null;
        a && (j = f && x.route.id ? f[x.route.id] : void 0, O = x.route.errorElement || Qm, p && (y < 0 && k === 0 ? (pd("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), C = !0, P = null) : y === k && (C = !0, P = x.route.hydrateFallbackElement || null)));
        let I = o.concat(c.slice(0, k + 1)),
            _ = () => {
                let z;
                return j ? z = O : C ? z = P : x.route.Component ? z = m.createElement(x.route.Component, null) : x.route.element ? z = x.route.element : z = g, m.createElement(Ym, {
                    match: x,
                    routeContext: {
                        outlet: g,
                        matches: I,
                        isDataRoute: a != null
                    },
                    children: z
                })
            };
        return a && (x.route.ErrorBoundary || x.route.errorElement || k === 0) ? m.createElement(Gm, {
            location: a.location,
            revalidation: a.revalidation,
            component: O,
            error: j,
            children: _(),
            routeContext: {
                outlet: null,
                matches: I,
                isDataRoute: !0
            }
        }) : _()
    }, null)
}

function uu(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Jm(l) {
    let o = m.useContext(hr);
    return je(o, uu(l)), o
}

function Zm(l) {
    let o = m.useContext($i);
    return je(o, uu(l)), o
}

function qm(l) {
    let o = m.useContext(Yt);
    return je(o, uu(l)), o
}

function su(l) {
    let o = qm(l),
        a = o.matches[o.matches.length - 1];
    return je(a.route.id, `${l} can only be used on routes that contain a unique "id"`), a.route.id
}

function bm() {
    return su("useRouteId")
}

function eg() {
    var s;
    let l = m.useContext(au),
        o = Zm("useRouteError"),
        a = su("useRouteError");
    return l !== void 0 ? l : (s = o.errors) == null ? void 0 : s[a]
}

function tg() {
    let {
        router: l
    } = Jm("useNavigate"), o = su("useNavigate"), a = m.useRef(!1);
    return fd(() => {
        a.current = !0
    }), m.useCallback(async (c, f = {}) => {
        jt(a.current, cd), a.current && (typeof c == "number" ? l.navigate(c) : await l.navigate(c, {
            fromRouteId: o,
            ...f
        }))
    }, [l, o])
}
var Mf = {};

function pd(l, o, a) {
    !o && !Mf[l] && (Mf[l] = !0, jt(!1, a))
}
m.memo(ng);

function ng({
    routes: l,
    future: o,
    state: a
}) {
    return dd(l, void 0, a, o)
}

function In(l) {
    je(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function rg({
    basename: l = "/",
    children: o = null,
    location: a,
    navigationType: s = "POP",
    navigator: c,
    static: f = !1
}) {
    je(!dl(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let p = l.replace(/^\/*/, "/"),
        y = m.useMemo(() => ({
            basename: p,
            navigator: c,
            static: f,
            future: {}
        }), [p, c, f]);
    typeof a == "string" && (a = $n(a));
    let {
        pathname: g = "/",
        search: x = "",
        hash: k = "",
        state: j = null,
        key: C = "default"
    } = a, O = m.useMemo(() => {
        let P = wn(g, p);
        return P == null ? null : {
            location: {
                pathname: P,
                search: x,
                hash: k,
                state: j,
                key: C
            },
            navigationType: s
        }
    }, [p, g, x, k, j, C, s]);
    return jt(O != null, `<Router basename="${p}"> is not able to match the URL "${g}${x}${k}" because it does not start with the basename, so the <Router> won't render anything.`), O == null ? null : m.createElement(Dt.Provider, {
        value: y
    }, m.createElement(fl.Provider, {
        children: o,
        value: O
    }))
}

function lg({
    children: l,
    location: o
}) {
    return Vm(eu(l), o)
}

function eu(l, o = []) {
    let a = [];
    return m.Children.forEach(l, (s, c) => {
        if (!m.isValidElement(s)) return;
        let f = [...o, c];
        if (s.type === m.Fragment) {
            a.push.apply(a, eu(s.props.children, f));
            return
        }
        je(s.type === In, `[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), je(!s.props.index || !s.props.children, "An index route cannot have child routes.");
        let p = {
            id: s.props.id || f.join("-"),
            caseSensitive: s.props.caseSensitive,
            element: s.props.element,
            Component: s.props.Component,
            index: s.props.index,
            path: s.props.path,
            loader: s.props.loader,
            action: s.props.action,
            hydrateFallbackElement: s.props.hydrateFallbackElement,
            HydrateFallback: s.props.HydrateFallback,
            errorElement: s.props.errorElement,
            ErrorBoundary: s.props.ErrorBoundary,
            hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
            shouldRevalidate: s.props.shouldRevalidate,
            handle: s.props.handle,
            lazy: s.props.lazy
        };
        s.props.children && (p.children = eu(s.props.children, f)), a.push(p)
    }), a
}
var Ti = "get",
    Pi = "application/x-www-form-urlencoded";

function Fi(l) {
    return l != null && typeof l.tagName == "string"
}

function ig(l) {
    return Fi(l) && l.tagName.toLowerCase() === "button"
}

function og(l) {
    return Fi(l) && l.tagName.toLowerCase() === "form"
}

function ag(l) {
    return Fi(l) && l.tagName.toLowerCase() === "input"
}

function ug(l) {
    return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey)
}

function sg(l, o) {
    return l.button === 0 && (!o || o === "_self") && !ug(l)
}
var ki = null;

function cg() {
    if (ki === null) try {
        new FormData(document.createElement("form"), 0), ki = !1
    } catch {
        ki = !0
    }
    return ki
}
var fg = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Wa(l) {
    return l != null && !fg.has(l) ? (jt(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pi}"`), null) : l
}

function dg(l, o) {
    let a, s, c, f, p;
    if (og(l)) {
        let y = l.getAttribute("action");
        s = y ? wn(y, o) : null, a = l.getAttribute("method") || Ti, c = Wa(l.getAttribute("enctype")) || Pi, f = new FormData(l)
    } else if (ig(l) || ag(l) && (l.type === "submit" || l.type === "image")) {
        let y = l.form;
        if (y == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let g = l.getAttribute("formaction") || y.getAttribute("action");
        if (s = g ? wn(g, o) : null, a = l.getAttribute("formmethod") || y.getAttribute("method") || Ti, c = Wa(l.getAttribute("formenctype")) || Wa(y.getAttribute("enctype")) || Pi, f = new FormData(y, l), !cg()) {
            let {
                name: x,
                type: k,
                value: j
            } = l;
            if (k === "image") {
                let C = x ? `${x}.` : "";
                f.append(`${C}x`, "0"), f.append(`${C}y`, "0")
            } else x && f.append(x, j)
        }
    } else {
        if (Fi(l)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        a = Ti, s = null, c = Pi, p = l
    }
    return f && c === "text/plain" && (p = f, f = void 0), {
        action: s,
        method: a.toLowerCase(),
        encType: c,
        formData: f,
        body: p
    }
}

function cu(l, o) {
    if (l === !1 || l === null || typeof l > "u") throw new Error(o)
}
async function pg(l, o) {
    if (l.id in o) return o[l.id];
    try {
        let a = await import(l.module);
        return o[l.id] = a, a
    } catch (a) {
        return console.error(`Error loading route module \`${l.module}\`, reloading page...`), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function hg(l) {
    return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string"
}
async function mg(l, o, a) {
    let s = await Promise.all(l.map(async c => {
        let f = o.routes[c.route.id];
        if (f) {
            let p = await pg(f, a);
            return p.links ? p.links() : []
        }
        return []
    }));
    return xg(s.flat(1).filter(hg).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? {
        ...c,
        rel: "prefetch",
        as: "style"
    } : {
        ...c,
        rel: "prefetch"
    }))
}

function If(l, o, a, s, c, f) {
    let p = (g, x) => a[x] ? g.route.id !== a[x].route.id : !0,
        y = (g, x) => {
            var k;
            return a[x].pathname !== g.pathname || ((k = a[x].route.path) == null ? void 0 : k.endsWith("*")) && a[x].params["*"] !== g.params["*"]
        };
    return f === "assets" ? o.filter((g, x) => p(g, x) || y(g, x)) : f === "data" ? o.filter((g, x) => {
        var j;
        let k = s.routes[g.route.id];
        if (!k || !k.hasLoader) return !1;
        if (p(g, x) || y(g, x)) return !0;
        if (g.route.shouldRevalidate) {
            let C = g.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
                currentParams: ((j = a[0]) == null ? void 0 : j.params) || {},
                nextUrl: new URL(l, window.origin),
                nextParams: g.params,
                defaultShouldRevalidate: !0
            });
            if (typeof C == "boolean") return C
        }
        return !0
    }) : []
}

function gg(l, o) {
    return yg(l.map(a => {
        let s = o.routes[a.route.id];
        if (!s) return [];
        let c = [s.module];
        return s.imports && (c = c.concat(s.imports)), c
    }).flat(1))
}

function yg(l) {
    return [...new Set(l)]
}

function vg(l) {
    let o = {},
        a = Object.keys(l).sort();
    for (let s of a) o[s] = l[s];
    return o
}

function xg(l, o) {
    let a = new Set;
    return new Set(o), l.reduce((s, c) => {
        let f = JSON.stringify(vg(c));
        return a.has(f) || (a.add(f), s.push({
            key: f,
            link: c
        })), s
    }, [])
}

function wg(l) {
    let o = typeof l == "string" ? new URL(l, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : l;
    return o.pathname === "/" ? o.pathname = "_root.data" : o.pathname = `${o.pathname.replace(/\/$/,"")}.data`, o
}

function Eg() {
    let l = m.useContext(hr);
    return cu(l, "You must render this element inside a <DataRouterContext.Provider> element"), l
}

function Sg() {
    let l = m.useContext($i);
    return cu(l, "You must render this element inside a <DataRouterStateContext.Provider> element"), l
}
var fu = m.createContext(void 0);
fu.displayName = "FrameworkContext";

function hd() {
    let l = m.useContext(fu);
    return cu(l, "You must render this element inside a <HydratedRouter> element"), l
}

function Cg(l, o) {
    let a = m.useContext(fu),
        [s, c] = m.useState(!1),
        [f, p] = m.useState(!1),
        {
            onFocus: y,
            onBlur: g,
            onMouseEnter: x,
            onMouseLeave: k,
            onTouchStart: j
        } = o,
        C = m.useRef(null);
    m.useEffect(() => {
        if (l === "render" && p(!0), l === "viewport") {
            let I = z => {
                    z.forEach(B => {
                        p(B.isIntersecting)
                    })
                },
                _ = new IntersectionObserver(I, {
                    threshold: .5
                });
            return C.current && _.observe(C.current), () => {
                _.disconnect()
            }
        }
    }, [l]), m.useEffect(() => {
        if (s) {
            let I = setTimeout(() => {
                p(!0)
            }, 100);
            return () => {
                clearTimeout(I)
            }
        }
    }, [s]);
    let O = () => {
            c(!0)
        },
        P = () => {
            c(!1), p(!1)
        };
    return a ? l !== "intent" ? [f, C, {}] : [f, C, {
        onFocus: il(y, O),
        onBlur: il(g, P),
        onMouseEnter: il(x, O),
        onMouseLeave: il(k, P),
        onTouchStart: il(j, O)
    }] : [!1, C, {}]
}

function il(l, o) {
    return a => {
        l && l(a), a.defaultPrevented || o(a)
    }
}

function kg({
    page: l,
    ...o
}) {
    let {
        router: a
    } = Eg(), s = m.useMemo(() => rd(a.routes, l, a.basename), [a.routes, l, a.basename]);
    return s ? m.createElement(Rg, {
        page: l,
        matches: s,
        ...o
    }) : null
}

function Ng(l) {
    let {
        manifest: o,
        routeModules: a
    } = hd(), [s, c] = m.useState([]);
    return m.useEffect(() => {
        let f = !1;
        return mg(l, o, a).then(p => {
            f || c(p)
        }), () => {
            f = !0
        }
    }, [l, o, a]), s
}

function Rg({
    page: l,
    matches: o,
    ...a
}) {
    let s = Fn(),
        {
            manifest: c,
            routeModules: f
        } = hd(),
        {
            loaderData: p,
            matches: y
        } = Sg(),
        g = m.useMemo(() => If(l, o, y, c, s, "data"), [l, o, y, c, s]),
        x = m.useMemo(() => If(l, o, y, c, s, "assets"), [l, o, y, c, s]),
        k = m.useMemo(() => {
            if (l === s.pathname + s.search + s.hash) return [];
            let O = new Set,
                P = !1;
            if (o.forEach(_ => {
                    var B;
                    let z = c.routes[_.route.id];
                    !z || !z.hasLoader || (!g.some(W => W.route.id === _.route.id) && _.route.id in p && ((B = f[_.route.id]) != null && B.shouldRevalidate) || z.hasClientLoader ? P = !0 : O.add(_.route.id))
                }), O.size === 0) return [];
            let I = wg(l);
            return P && O.size > 0 && I.searchParams.set("_routes", o.filter(_ => O.has(_.route.id)).map(_ => _.route.id).join(",")), [I.pathname + I.search]
        }, [p, s, c, g, o, l, f]),
        j = m.useMemo(() => gg(x, c), [x, c]),
        C = Ng(x);
    return m.createElement(m.Fragment, null, k.map(O => m.createElement("link", {
        key: O,
        rel: "prefetch",
        as: "fetch",
        href: O,
        ...a
    })), j.map(O => m.createElement("link", {
        key: O,
        rel: "modulepreload",
        href: O,
        ...a
    })), C.map(({
        key: O,
        link: P
    }) => m.createElement("link", {
        key: O,
        ...P
    })))
}

function jg(...l) {
    return o => {
        l.forEach(a => {
            typeof a == "function" ? a(o) : a != null && (a.current = o)
        })
    }
}
var md = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    md && (window.__reactRouterVersion = "7.1.1")
} catch {}

function Tg({
    basename: l,
    children: o,
    window: a
}) {
    let s = m.useRef();
    s.current == null && (s.current = mm({
        window: a,
        v5Compat: !0
    }));
    let c = s.current,
        [f, p] = m.useState({
            action: c.action,
            location: c.location
        }),
        y = m.useCallback(g => {
            m.startTransition(() => p(g))
        }, [p]);
    return m.useLayoutEffect(() => c.listen(y), [c, y]), m.createElement(rg, {
        basename: l,
        children: o,
        location: f.location,
        navigationType: f.action,
        navigator: c
    })
}
var gd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ct = m.forwardRef(function({
        onClick: o,
        discover: a = "render",
        prefetch: s = "none",
        relative: c,
        reloadDocument: f,
        replace: p,
        state: y,
        target: g,
        to: x,
        preventScrollReset: k,
        viewTransition: j,
        ...C
    }, O) {
        let {
            basename: P
        } = m.useContext(Dt), I = typeof x == "string" && gd.test(x), _, z = !1;
        if (typeof x == "string" && I && (_ = x, md)) try {
            let ye = new URL(window.location.href),
                ke = x.startsWith("//") ? new URL(ye.protocol + x) : new URL(x),
                Je = wn(ke.pathname, P);
            ke.origin === ye.origin && Je != null ? x = Je + ke.search + ke.hash : z = !0
        } catch {
            jt(!1, `<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let B = Um(x, {
                relative: c
            }),
            [W, G, ne] = Cg(s, C),
            J = Og(x, {
                replace: p,
                state: y,
                target: g,
                preventScrollReset: k,
                relative: c,
                viewTransition: j
            });

        function re(ye) {
            o && o(ye), ye.defaultPrevented || J(ye)
        }
        let ce = m.createElement("a", {
            ...C,
            ...ne,
            href: _ || B,
            onClick: z || f ? o : re,
            ref: jg(O, G),
            target: g,
            "data-discover": !I && a === "render" ? "true" : void 0
        });
        return W && !I ? m.createElement(m.Fragment, null, ce, m.createElement(kg, {
            page: B
        })) : ce
    });
ct.displayName = "Link";
var Pg = m.forwardRef(function({
    "aria-current": o = "page",
    caseSensitive: a = !1,
    className: s = "",
    end: c = !1,
    style: f,
    to: p,
    viewTransition: y,
    children: g,
    ...x
}, k) {
    let j = pl(p, {
            relative: x.relative
        }),
        C = Fn(),
        O = m.useContext($i),
        {
            navigator: P,
            basename: I
        } = m.useContext(Dt),
        _ = O != null && $g(j) && y === !0,
        z = P.encodeLocation ? P.encodeLocation(j).pathname : j.pathname,
        B = C.pathname,
        W = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
    a || (B = B.toLowerCase(), W = W ? W.toLowerCase() : null, z = z.toLowerCase()), W && I && (W = wn(W, I) || W);
    const G = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
    let ne = B === z || !c && B.startsWith(z) && B.charAt(G) === "/",
        J = W != null && (W === z || !c && W.startsWith(z) && W.charAt(z.length) === "/"),
        re = {
            isActive: ne,
            isPending: J,
            isTransitioning: _
        },
        ce = ne ? o : void 0,
        ye;
    typeof s == "function" ? ye = s(re) : ye = [s, ne ? "active" : null, J ? "pending" : null, _ ? "transitioning" : null].filter(Boolean).join(" ");
    let ke = typeof f == "function" ? f(re) : f;
    return m.createElement(ct, {
        ...x,
        "aria-current": ce,
        className: ye,
        ref: k,
        style: ke,
        to: p,
        viewTransition: y
    }, typeof g == "function" ? g(re) : g)
});
Pg.displayName = "NavLink";
var _g = m.forwardRef(({
    discover: l = "render",
    fetcherKey: o,
    navigate: a,
    reloadDocument: s,
    replace: c,
    state: f,
    method: p = Ti,
    action: y,
    onSubmit: g,
    relative: x,
    preventScrollReset: k,
    viewTransition: j,
    ...C
}, O) => {
    let P = Ig(),
        I = zg(y, {
            relative: x
        }),
        _ = p.toLowerCase() === "get" ? "get" : "post",
        z = typeof y == "string" && gd.test(y),
        B = W => {
            if (g && g(W), W.defaultPrevented) return;
            W.preventDefault();
            let G = W.nativeEvent.submitter,
                ne = (G == null ? void 0 : G.getAttribute("formmethod")) || p;
            P(G || W.currentTarget, {
                fetcherKey: o,
                method: ne,
                navigate: a,
                replace: c,
                state: f,
                relative: x,
                preventScrollReset: k,
                viewTransition: j
            })
        };
    return m.createElement("form", {
        ref: O,
        method: _,
        action: I,
        onSubmit: s ? g : B,
        ...C,
        "data-discover": !z && l === "render" ? "true" : void 0
    })
});
_g.displayName = "Form";

function Lg(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function yd(l) {
    let o = m.useContext(hr);
    return je(o, Lg(l)), o
}

function Og(l, {
    target: o,
    replace: a,
    state: s,
    preventScrollReset: c,
    relative: f,
    viewTransition: p
} = {}) {
    let y = Hm(),
        g = Fn(),
        x = pl(l, {
            relative: f
        });
    return m.useCallback(k => {
        if (sg(k, o)) {
            k.preventDefault();
            let j = a !== void 0 ? a : ul(g) === ul(x);
            y(l, {
                replace: j,
                state: s,
                preventScrollReset: c,
                relative: f,
                viewTransition: p
            })
        }
    }, [g, y, x, a, s, o, l, c, f, p])
}
var Dg = 0,
    Mg = () => `__${String(++Dg)}__`;

function Ig() {
    let {
        router: l
    } = yd("useSubmit"), {
        basename: o
    } = m.useContext(Dt), a = bm();
    return m.useCallback(async (s, c = {}) => {
        let {
            action: f,
            method: p,
            encType: y,
            formData: g,
            body: x
        } = dg(s, o);
        if (c.navigate === !1) {
            let k = c.fetcherKey || Mg();
            await l.fetch(k, a, c.action || f, {
                preventScrollReset: c.preventScrollReset,
                formData: g,
                body: x,
                formMethod: c.method || p,
                formEncType: c.encType || y,
                flushSync: c.flushSync
            })
        } else await l.navigate(c.action || f, {
            preventScrollReset: c.preventScrollReset,
            formData: g,
            body: x,
            formMethod: c.method || p,
            formEncType: c.encType || y,
            replace: c.replace,
            state: c.state,
            fromRouteId: a,
            flushSync: c.flushSync,
            viewTransition: c.viewTransition
        })
    }, [l, o, a])
}

function zg(l, {
    relative: o
} = {}) {
    let {
        basename: a
    } = m.useContext(Dt), s = m.useContext(Yt);
    je(s, "useFormAction must be used inside a RouteContext");
    let [c] = s.matches.slice(-1), f = {
        ...pl(l || ".", {
            relative: o
        })
    }, p = Fn();
    if (l == null) {
        f.search = p.search;
        let y = new URLSearchParams(f.search),
            g = y.getAll("index");
        if (g.some(k => k === "")) {
            y.delete("index"), g.filter(j => j).forEach(j => y.append("index", j));
            let k = y.toString();
            f.search = k ? `?${k}` : ""
        }
    }
    return (!l || l === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (f.pathname = f.pathname === "/" ? a : Qt([a, f.pathname])), ul(f)
}

function $g(l, o = {}) {
    let a = m.useContext(sd);
    je(a != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: s
    } = yd("useViewTransitionState"), c = pl(l, {
        relative: o.relative
    });
    if (!a.isTransitioning) return !1;
    let f = wn(a.currentLocation.pathname, s) || a.currentLocation.pathname,
        p = wn(a.nextLocation.pathname, s) || a.nextLocation.pathname;
    return Li(c.pathname, p) != null || Li(c.pathname, f) != null
}
new TextEncoder;
var Fg = nd();
const pr = zi(Fg);
var Va = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var zf;

function Ag() {
    return zf || (zf = 1, function(l) {
        (function() {
            var o = {}.hasOwnProperty;

            function a() {
                for (var f = "", p = 0; p < arguments.length; p++) {
                    var y = arguments[p];
                    y && (f = c(f, s(y)))
                }
                return f
            }

            function s(f) {
                if (typeof f == "string" || typeof f == "number") return f;
                if (typeof f != "object") return "";
                if (Array.isArray(f)) return a.apply(null, f);
                if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]")) return f.toString();
                var p = "";
                for (var y in f) o.call(f, y) && f[y] && (p = c(p, y));
                return p
            }

            function c(f, p) {
                return p ? f ? f + " " + p : f + p : f
            }
            l.exports ? (a.default = a, l.exports = a) : window.classNames = a
        })()
    }(Va)), Va.exports
}
var Bg = Ag();
const ie = zi(Bg);

function tu() {
    return tu = Object.assign ? Object.assign.bind() : function(l) {
        for (var o = 1; o < arguments.length; o++) {
            var a = arguments[o];
            for (var s in a)({}).hasOwnProperty.call(a, s) && (l[s] = a[s])
        }
        return l
    }, tu.apply(null, arguments)
}

function vd(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.includes(s)) continue;
            a[s] = l[s]
        } return a
}

function $f(l) {
    return "default" + l.charAt(0).toUpperCase() + l.substr(1)
}

function Ug(l) {
    var o = Hg(l, "string");
    return typeof o == "symbol" ? o : String(o)
}

function Hg(l, o) {
    if (typeof l != "object" || l === null) return l;
    var a = l[Symbol.toPrimitive];
    if (a !== void 0) {
        var s = a.call(l, o);
        if (typeof s != "object") return s;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(l)
}

function Wg(l, o, a) {
    var s = m.useRef(l !== void 0),
        c = m.useState(o),
        f = c[0],
        p = c[1],
        y = l !== void 0,
        g = s.current;
    return s.current = y, !y && g && f !== o && p(o), [y ? l : f, m.useCallback(function(x) {
        for (var k = arguments.length, j = new Array(k > 1 ? k - 1 : 0), C = 1; C < k; C++) j[C - 1] = arguments[C];
        a && a.apply(void 0, [x].concat(j)), p(x)
    }, [a])]
}

function du(l, o) {
    return Object.keys(o).reduce(function(a, s) {
        var c, f = a,
            p = f[$f(s)],
            y = f[s],
            g = vd(f, [$f(s), s].map(Ug)),
            x = o[s],
            k = Wg(y, p, l[x]),
            j = k[0],
            C = k[1];
        return tu({}, g, (c = {}, c[s] = j, c[x] = C, c))
    }, l)
}

function nu(l, o) {
    return nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a
    }, nu(l, o)
}

function Vg(l, o) {
    l.prototype = Object.create(o.prototype), l.prototype.constructor = l, nu(l, o)
}
const Kg = ["xxl", "xl", "lg", "md", "sm", "xs"],
    Qg = "xs",
    pu = m.createContext({
        prefixes: {},
        breakpoints: Kg,
        minBreakpoint: Qg
    });

function ue(l, o) {
    const {
        prefixes: a
    } = m.useContext(pu);
    return l || a[o] || o
}

function xd() {
    const {
        breakpoints: l
    } = m.useContext(pu);
    return l
}

function wd() {
    const {
        minBreakpoint: l
    } = m.useContext(pu);
    return l
}

function hu(l) {
    return l && l.ownerDocument || document
}

function Gg(l) {
    var o = hu(l);
    return o && o.defaultView || window
}

function Yg(l, o) {
    return Gg(l).getComputedStyle(l, o)
}
var Xg = /([A-Z])/g;

function Jg(l) {
    return l.replace(Xg, "-$1").toLowerCase()
}
var Zg = /^ms-/;

function Ni(l) {
    return Jg(l).replace(Zg, "-ms-")
}
var qg = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function bg(l) {
    return !!(l && qg.test(l))
}

function Gt(l, o) {
    var a = "",
        s = "";
    if (typeof o == "string") return l.style.getPropertyValue(Ni(o)) || Yg(l).getPropertyValue(Ni(o));
    Object.keys(o).forEach(function(c) {
        var f = o[c];
        !f && f !== 0 ? l.style.removeProperty(Ni(c)) : bg(c) ? s += c + "(" + f + ") " : a += Ni(c) + ": " + f + ";"
    }), s && (a += "transform: " + s + ";"), l.style.cssText += ";" + a
}
var Ka = {
        exports: {}
    },
    Qa, Ff;

function ey() {
    if (Ff) return Qa;
    Ff = 1;
    var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return Qa = l, Qa
}
var Ga, Af;

function ty() {
    if (Af) return Ga;
    Af = 1;
    var l = ey();

    function o() {}

    function a() {}
    return a.resetWarningCache = o, Ga = function() {
        function s(p, y, g, x, k, j) {
            if (j !== l) {
                var C = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw C.name = "Invariant Violation", C
            }
        }
        s.isRequired = s;

        function c() {
            return s
        }
        var f = {
            array: s,
            bigint: s,
            bool: s,
            func: s,
            number: s,
            object: s,
            string: s,
            symbol: s,
            any: s,
            arrayOf: c,
            element: s,
            elementType: s,
            instanceOf: c,
            node: s,
            objectOf: c,
            oneOf: c,
            oneOfType: c,
            shape: c,
            exact: c,
            checkPropTypes: a,
            resetWarningCache: o
        };
        return f.PropTypes = f, f
    }, Ga
}
var Bf;

function ny() {
    return Bf || (Bf = 1, Ka.exports = ty()()), Ka.exports
}
var ry = ny();
const xn = zi(ry),
    Uf = {
        disabled: !1
    },
    Ed = Ge.createContext(null);
var ly = function(o) {
        return o.scrollTop
    },
    al = "unmounted",
    vn = "exited",
    Nt = "entering",
    Wt = "entered",
    sl = "exiting",
    Xt = function(l) {
        Vg(o, l);

        function o(s, c) {
            var f;
            f = l.call(this, s, c) || this;
            var p = c,
                y = p && !p.isMounting ? s.enter : s.appear,
                g;
            return f.appearStatus = null, s.in ? y ? (g = vn, f.appearStatus = Nt) : g = Wt : s.unmountOnExit || s.mountOnEnter ? g = al : g = vn, f.state = {
                status: g
            }, f.nextCallback = null, f
        }
        o.getDerivedStateFromProps = function(c, f) {
            var p = c.in;
            return p && f.status === al ? {
                status: vn
            } : null
        };
        var a = o.prototype;
        return a.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, a.componentDidUpdate = function(c) {
            var f = null;
            if (c !== this.props) {
                var p = this.state.status;
                this.props.in ? p !== Nt && p !== Wt && (f = Nt) : (p === Nt || p === Wt) && (f = sl)
            }
            this.updateStatus(!1, f)
        }, a.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, a.getTimeouts = function() {
            var c = this.props.timeout,
                f, p, y;
            return f = p = y = c, c != null && typeof c != "number" && (f = c.exit, p = c.enter, y = c.appear !== void 0 ? c.appear : p), {
                exit: f,
                enter: p,
                appear: y
            }
        }, a.updateStatus = function(c, f) {
            if (c === void 0 && (c = !1), f !== null)
                if (this.cancelNextCallback(), f === Nt) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var p = this.props.nodeRef ? this.props.nodeRef.current : pr.findDOMNode(this);
                        p && ly(p)
                    }
                    this.performEnter(c)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === vn && this.setState({
                status: al
            })
        }, a.performEnter = function(c) {
            var f = this,
                p = this.props.enter,
                y = this.context ? this.context.isMounting : c,
                g = this.props.nodeRef ? [y] : [pr.findDOMNode(this), y],
                x = g[0],
                k = g[1],
                j = this.getTimeouts(),
                C = y ? j.appear : j.enter;
            if (!c && !p || Uf.disabled) {
                this.safeSetState({
                    status: Wt
                }, function() {
                    f.props.onEntered(x)
                });
                return
            }
            this.props.onEnter(x, k), this.safeSetState({
                status: Nt
            }, function() {
                f.props.onEntering(x, k), f.onTransitionEnd(C, function() {
                    f.safeSetState({
                        status: Wt
                    }, function() {
                        f.props.onEntered(x, k)
                    })
                })
            })
        }, a.performExit = function() {
            var c = this,
                f = this.props.exit,
                p = this.getTimeouts(),
                y = this.props.nodeRef ? void 0 : pr.findDOMNode(this);
            if (!f || Uf.disabled) {
                this.safeSetState({
                    status: vn
                }, function() {
                    c.props.onExited(y)
                });
                return
            }
            this.props.onExit(y), this.safeSetState({
                status: sl
            }, function() {
                c.props.onExiting(y), c.onTransitionEnd(p.exit, function() {
                    c.safeSetState({
                        status: vn
                    }, function() {
                        c.props.onExited(y)
                    })
                })
            })
        }, a.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, a.safeSetState = function(c, f) {
            f = this.setNextCallback(f), this.setState(c, f)
        }, a.setNextCallback = function(c) {
            var f = this,
                p = !0;
            return this.nextCallback = function(y) {
                p && (p = !1, f.nextCallback = null, c(y))
            }, this.nextCallback.cancel = function() {
                p = !1
            }, this.nextCallback
        }, a.onTransitionEnd = function(c, f) {
            this.setNextCallback(f);
            var p = this.props.nodeRef ? this.props.nodeRef.current : pr.findDOMNode(this),
                y = c == null && !this.props.addEndListener;
            if (!p || y) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var g = this.props.nodeRef ? [this.nextCallback] : [p, this.nextCallback],
                    x = g[0],
                    k = g[1];
                this.props.addEndListener(x, k)
            }
            c != null && setTimeout(this.nextCallback, c)
        }, a.render = function() {
            var c = this.state.status;
            if (c === al) return null;
            var f = this.props,
                p = f.children;
            f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
            var y = vd(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return Ge.createElement(Ed.Provider, {
                value: null
            }, typeof p == "function" ? p(c, y) : Ge.cloneElement(Ge.Children.only(p), y))
        }, o
    }(Ge.Component);
Xt.contextType = Ed;
Xt.propTypes = {};

function fr() {}
Xt.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: fr,
    onEntering: fr,
    onEntered: fr,
    onExit: fr,
    onExiting: fr,
    onExited: fr
};
Xt.UNMOUNTED = al;
Xt.EXITED = vn;
Xt.ENTERING = Nt;
Xt.ENTERED = Wt;
Xt.EXITING = sl;

function iy(l) {
    return l.code === "Escape" || l.keyCode === 27
}

function oy() {
    const l = m.version.split(".");
    return {
        major: +l[0],
        minor: +l[1],
        patch: +l[2]
    }
}

function Ai(l) {
    if (!l || typeof l == "function") return null;
    const {
        major: o
    } = oy();
    return o >= 19 ? l.props.ref : l.ref
}
const Bi = !!(typeof window < "u" && window.document && window.document.createElement);
var ru = !1,
    lu = !1;
try {
    var Ya = {
        get passive() {
            return ru = !0
        },
        get once() {
            return lu = ru = !0
        }
    };
    Bi && (window.addEventListener("test", Ya, Ya), window.removeEventListener("test", Ya, !0))
} catch {}

function ay(l, o, a, s) {
    if (s && typeof s != "boolean" && !lu) {
        var c = s.once,
            f = s.capture,
            p = a;
        !lu && c && (p = a.__once || function y(g) {
            this.removeEventListener(o, y, f), a.call(this, g)
        }, a.__once = p), l.addEventListener(o, p, ru ? s : f)
    }
    l.addEventListener(o, a, s)
}

function uy(l, o, a, s) {
    var c = s && typeof s != "boolean" ? s.capture : s;
    l.removeEventListener(o, a, c), a.__once && l.removeEventListener(o, a.__once, c)
}

function Oi(l, o, a, s) {
    return ay(l, o, a, s),
        function() {
            uy(l, o, a, s)
        }
}

function sy(l, o, a, s) {
    if (s === void 0 && (s = !0), l) {
        var c = document.createEvent("HTMLEvents");
        c.initEvent(o, a, s), l.dispatchEvent(c)
    }
}

function cy(l) {
    var o = Gt(l, "transitionDuration") || "",
        a = o.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(o) * a
}

function fy(l, o, a) {
    a === void 0 && (a = 5);
    var s = !1,
        c = setTimeout(function() {
            s || sy(l, "transitionend", !0)
        }, o + a),
        f = Oi(l, "transitionend", function() {
            s = !0
        }, {
            once: !0
        });
    return function() {
        clearTimeout(c), f()
    }
}

function dy(l, o, a, s) {
    a == null && (a = cy(l) || 0);
    var c = fy(l, a, s),
        f = Oi(l, "transitionend", o);
    return function() {
        c(), f()
    }
}

function Hf(l, o) {
    const a = Gt(l, o) || "",
        s = a.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(a) * s
}

function mu(l, o) {
    const a = Hf(l, "transitionDuration"),
        s = Hf(l, "transitionDelay"),
        c = dy(l, f => {
            f.target === l && (c(), o(f))
        }, a + s)
}

function ol(...l) {
    return l.filter(o => o != null).reduce((o, a) => {
        if (typeof a != "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        return o === null ? a : function(...c) {
            o.apply(this, c), a.apply(this, c)
        }
    }, null)
}

function Sd(l) {
    l.offsetHeight
}
const Wf = l => !l || typeof l == "function" ? l : o => {
    l.current = o
};

function py(l, o) {
    const a = Wf(l),
        s = Wf(o);
    return c => {
        a && a(c), s && s(c)
    }
}

function hy(l, o) {
    return m.useMemo(() => py(l, o), [l, o])
}

function my(l) {
    return l && "setState" in l ? pr.findDOMNode(l) : l ?? null
}
const gu = Ge.forwardRef(({
        onEnter: l,
        onEntering: o,
        onEntered: a,
        onExit: s,
        onExiting: c,
        onExited: f,
        addEndListener: p,
        children: y,
        childRef: g,
        ...x
    }, k) => {
        const j = m.useRef(null),
            C = hy(j, g),
            O = J => {
                C(my(J))
            },
            P = J => re => {
                J && j.current && J(j.current, re)
            },
            I = m.useCallback(P(l), [l]),
            _ = m.useCallback(P(o), [o]),
            z = m.useCallback(P(a), [a]),
            B = m.useCallback(P(s), [s]),
            W = m.useCallback(P(c), [c]),
            G = m.useCallback(P(f), [f]),
            ne = m.useCallback(P(p), [p]);
        return h.jsx(Xt, {
            ref: k,
            ...x,
            onEnter: I,
            onEntered: z,
            onEntering: _,
            onExit: B,
            onExited: G,
            onExiting: W,
            addEndListener: ne,
            nodeRef: j,
            children: typeof y == "function" ? (J, re) => y(J, {
                ...re,
                ref: O
            }) : Ge.cloneElement(y, {
                ref: O
            })
        })
    }),
    gy = {
        height: ["marginTop", "marginBottom"],
        width: ["marginLeft", "marginRight"]
    };

function yy(l, o) {
    const a = `offset${l[0].toUpperCase()}${l.slice(1)}`,
        s = o[a],
        c = gy[l];
    return s + parseInt(Gt(o, c[0]), 10) + parseInt(Gt(o, c[1]), 10)
}
const vy = {
        [vn]: "collapse",
        [sl]: "collapsing",
        [Nt]: "collapsing",
        [Wt]: "collapse show"
    },
    Cd = Ge.forwardRef(({
        onEnter: l,
        onEntering: o,
        onEntered: a,
        onExit: s,
        onExiting: c,
        className: f,
        children: p,
        dimension: y = "height",
        in: g = !1,
        timeout: x = 300,
        mountOnEnter: k = !1,
        unmountOnExit: j = !1,
        appear: C = !1,
        getDimensionValue: O = yy,
        ...P
    }, I) => {
        const _ = typeof y == "function" ? y() : y,
            z = m.useMemo(() => ol(J => {
                J.style[_] = "0"
            }, l), [_, l]),
            B = m.useMemo(() => ol(J => {
                const re = `scroll${_[0].toUpperCase()}${_.slice(1)}`;
                J.style[_] = `${J[re]}px`
            }, o), [_, o]),
            W = m.useMemo(() => ol(J => {
                J.style[_] = null
            }, a), [_, a]),
            G = m.useMemo(() => ol(J => {
                J.style[_] = `${O(_,J)}px`, Sd(J)
            }, s), [s, O, _]),
            ne = m.useMemo(() => ol(J => {
                J.style[_] = null
            }, c), [_, c]);
        return h.jsx(gu, {
            ref: I,
            addEndListener: mu,
            ...P,
            "aria-expanded": P.role ? g : null,
            onEnter: z,
            onEntering: B,
            onEntered: W,
            onExit: G,
            onExiting: ne,
            childRef: Ai(p),
            in: g,
            timeout: x,
            mountOnEnter: k,
            unmountOnExit: j,
            appear: C,
            children: (J, re) => Ge.cloneElement(p, {
                ...re,
                className: ie(f, p.props.className, vy[J], _ === "width" && "collapse-horizontal")
            })
        })
    });

function kd(l, o) {
    return Array.isArray(l) ? l.includes(o) : l === o
}
const hl = m.createContext({});
hl.displayName = "AccordionContext";
const yu = m.forwardRef(({
    as: l = "div",
    bsPrefix: o,
    className: a,
    children: s,
    eventKey: c,
    ...f
}, p) => {
    const {
        activeEventKey: y
    } = m.useContext(hl);
    return o = ue(o, "accordion-collapse"), h.jsx(Cd, {
        ref: p,
        in: kd(y, c),
        ...f,
        className: ie(a, o),
        children: h.jsx(l, {
            children: m.Children.only(s)
        })
    })
});
yu.displayName = "AccordionCollapse";
const Ui = m.createContext({
    eventKey: ""
});
Ui.displayName = "AccordionItemContext";
const Nd = m.forwardRef(({
    as: l = "div",
    bsPrefix: o,
    className: a,
    onEnter: s,
    onEntering: c,
    onEntered: f,
    onExit: p,
    onExiting: y,
    onExited: g,
    ...x
}, k) => {
    o = ue(o, "accordion-body");
    const {
        eventKey: j
    } = m.useContext(Ui);
    return h.jsx(yu, {
        eventKey: j,
        onEnter: s,
        onEntering: c,
        onEntered: f,
        onExit: p,
        onExiting: y,
        onExited: g,
        children: h.jsx(l, {
            ref: k,
            ...x,
            className: ie(a, o)
        })
    })
});
Nd.displayName = "AccordionBody";

function xy(l, o) {
    const {
        activeEventKey: a,
        onSelect: s,
        alwaysOpen: c
    } = m.useContext(hl);
    return f => {
        let p = l === a ? null : l;
        c && (Array.isArray(a) ? a.includes(l) ? p = a.filter(y => y !== l) : p = [...a, l] : p = [l]), s == null || s(p, f), o == null || o(f)
    }
}
const vu = m.forwardRef(({
    as: l = "button",
    bsPrefix: o,
    className: a,
    onClick: s,
    ...c
}, f) => {
    o = ue(o, "accordion-button");
    const {
        eventKey: p
    } = m.useContext(Ui), y = xy(p, s), {
        activeEventKey: g
    } = m.useContext(hl);
    return l === "button" && (c.type = "button"), h.jsx(l, {
        ref: f,
        onClick: y,
        ...c,
        "aria-expanded": Array.isArray(g) ? g.includes(p) : p === g,
        className: ie(a, o, !kd(g, p) && "collapsed")
    })
});
vu.displayName = "AccordionButton";
const Rd = m.forwardRef(({
    as: l = "h2",
    "aria-controls": o,
    bsPrefix: a,
    className: s,
    children: c,
    onClick: f,
    ...p
}, y) => (a = ue(a, "accordion-header"), h.jsx(l, {
    ref: y,
    ...p,
    className: ie(s, a),
    children: h.jsx(vu, {
        onClick: f,
        "aria-controls": o,
        children: c
    })
})));
Rd.displayName = "AccordionHeader";
const jd = m.forwardRef(({
    as: l = "div",
    bsPrefix: o,
    className: a,
    eventKey: s,
    ...c
}, f) => {
    o = ue(o, "accordion-item");
    const p = m.useMemo(() => ({
        eventKey: s
    }), [s]);
    return h.jsx(Ui.Provider, {
        value: p,
        children: h.jsx(l, {
            ref: f,
            ...c,
            className: ie(a, o)
        })
    })
});
jd.displayName = "AccordionItem";
const Td = m.forwardRef((l, o) => {
    const {
        as: a = "div",
        activeKey: s,
        bsPrefix: c,
        className: f,
        onSelect: p,
        flush: y,
        alwaysOpen: g,
        ...x
    } = du(l, {
        activeKey: "onSelect"
    }), k = ue(c, "accordion"), j = m.useMemo(() => ({
        activeEventKey: s,
        onSelect: p,
        alwaysOpen: g
    }), [s, p, g]);
    return h.jsx(hl.Provider, {
        value: j,
        children: h.jsx(a, {
            ref: o,
            ...x,
            className: ie(f, k, y && `${k}-flush`)
        })
    })
});
Td.displayName = "Accordion";
const Ri = Object.assign(Td, {
    Button: vu,
    Collapse: yu,
    Item: jd,
    Header: Rd,
    Body: Nd
});

function wy(l) {
    const o = m.useRef(l);
    return m.useEffect(() => {
        o.current = l
    }, [l]), o
}

function Hi(l) {
    const o = wy(l);
    return m.useCallback(function(...a) {
        return o.current && o.current(...a)
    }, [o])
}
const xu = l => m.forwardRef((o, a) => h.jsx("div", {
    ...o,
    ref: a,
    className: ie(o.className, l)
}));

function Ey(l) {
    const o = m.useRef(l);
    return m.useEffect(() => {
        o.current = l
    }, [l]), o
}

function Vt(l) {
    const o = Ey(l);
    return m.useCallback(function(...a) {
        return o.current && o.current(...a)
    }, [o])
}

function Sy() {
    const l = m.useRef(!0),
        o = m.useRef(() => l.current);
    return m.useEffect(() => (l.current = !0, () => {
        l.current = !1
    }), []), o.current
}

function Cy(l) {
    const o = m.useRef(null);
    return m.useEffect(() => {
        o.current = l
    }), o.current
}
const ky = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative",
    Ny = typeof document < "u",
    Vf = Ny || ky ? m.useLayoutEffect : m.useEffect,
    Ry = ["as", "disabled"];

function jy(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}

function Ty(l) {
    return !l || l.trim() === "#"
}

function wu({
    tagName: l,
    disabled: o,
    href: a,
    target: s,
    rel: c,
    role: f,
    onClick: p,
    tabIndex: y = 0,
    type: g
}) {
    l || (a != null || s != null || c != null ? l = "a" : l = "button");
    const x = {
        tagName: l
    };
    if (l === "button") return [{
        type: g || "button",
        disabled: o
    }, x];
    const k = C => {
            if ((o || l === "a" && Ty(a)) && C.preventDefault(), o) {
                C.stopPropagation();
                return
            }
            p == null || p(C)
        },
        j = C => {
            C.key === " " && (C.preventDefault(), k(C))
        };
    return l === "a" && (a || (a = "#"), o && (a = void 0)), [{
        role: f ?? "button",
        disabled: void 0,
        tabIndex: o ? void 0 : y,
        href: a,
        target: l === "a" ? s : void 0,
        "aria-disabled": o || void 0,
        rel: l === "a" ? c : void 0,
        onClick: k,
        onKeyDown: j
    }, x]
}
const Pd = m.forwardRef((l, o) => {
    let {
        as: a,
        disabled: s
    } = l, c = jy(l, Ry);
    const [f, {
        tagName: p
    }] = wu(Object.assign({
        tagName: a,
        disabled: s
    }, c));
    return h.jsx(p, Object.assign({}, c, f, {
        ref: o
    }))
});
Pd.displayName = "Button";
const Py = ["onKeyDown"];

function _y(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}

function Ly(l) {
    return !l || l.trim() === "#"
}
const _d = m.forwardRef((l, o) => {
    let {
        onKeyDown: a
    } = l, s = _y(l, Py);
    const [c] = wu(Object.assign({
        tagName: "a"
    }, s)), f = Vt(p => {
        c.onKeyDown(p), a == null || a(p)
    });
    return Ly(s.href) || s.role === "button" ? h.jsx("a", Object.assign({
        ref: o
    }, s, c, {
        onKeyDown: f
    })) : h.jsx("a", Object.assign({
        ref: o
    }, s, {
        onKeyDown: a
    }))
});
_d.displayName = "Anchor";
const Oy = {
        [Nt]: "show",
        [Wt]: "show"
    },
    Ld = m.forwardRef(({
        className: l,
        children: o,
        transitionClasses: a = {},
        onEnter: s,
        ...c
    }, f) => {
        const p = {
                in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                ...c
            },
            y = m.useCallback((g, x) => {
                Sd(g), s == null || s(g, x)
            }, [s]);
        return h.jsx(gu, {
            ref: f,
            addEndListener: mu,
            ...p,
            onEnter: y,
            childRef: Ai(o),
            children: (g, x) => m.cloneElement(o, {
                ...x,
                className: ie("fade", l, o.props.className, Oy[g], a[g])
            })
        })
    });
Ld.displayName = "Fade";
const Dy = {
        "aria-label": xn.string,
        onClick: xn.func,
        variant: xn.oneOf(["white"])
    },
    Eu = m.forwardRef(({
        className: l,
        variant: o,
        "aria-label": a = "Close",
        ...s
    }, c) => h.jsx("button", {
        ref: c,
        type: "button",
        className: ie("btn-close", o && `btn-close-${o}`, l),
        "aria-label": a,
        ...s
    }));
Eu.displayName = "CloseButton";
Eu.propTypes = Dy;
const cl = m.forwardRef(({
    as: l,
    bsPrefix: o,
    variant: a = "primary",
    size: s,
    active: c = !1,
    disabled: f = !1,
    className: p,
    ...y
}, g) => {
    const x = ue(o, "btn"),
        [k, {
            tagName: j
        }] = wu({
            tagName: l,
            disabled: f,
            ...y
        }),
        C = j;
    return h.jsx(C, {
        ...k,
        ...y,
        ref: g,
        disabled: f,
        className: ie(p, x, c && "active", a && `${x}-${a}`, s && `${x}-${s}`, y.href && f && "disabled")
    })
});
cl.displayName = "Button";
const Su = m.forwardRef(({
    className: l,
    bsPrefix: o,
    as: a = "div",
    ...s
}, c) => (o = ue(o, "card-body"), h.jsx(a, {
    ref: c,
    className: ie(l, o),
    ...s
})));
Su.displayName = "CardBody";
const Od = m.forwardRef(({
    className: l,
    bsPrefix: o,
    as: a = "div",
    ...s
}, c) => (o = ue(o, "card-footer"), h.jsx(a, {
    ref: c,
    className: ie(l, o),
    ...s
})));
Od.displayName = "CardFooter";
const Cu = m.createContext(null);
Cu.displayName = "CardHeaderContext";
const Dd = m.forwardRef(({
    bsPrefix: l,
    className: o,
    as: a = "div",
    ...s
}, c) => {
    const f = ue(l, "card-header"),
        p = m.useMemo(() => ({
            cardHeaderBsPrefix: f
        }), [f]);
    return h.jsx(Cu.Provider, {
        value: p,
        children: h.jsx(a, {
            ref: c,
            ...s,
            className: ie(o, f)
        })
    })
});
Dd.displayName = "CardHeader";
const Md = m.forwardRef(({
    bsPrefix: l,
    className: o,
    variant: a,
    as: s = "img",
    ...c
}, f) => {
    const p = ue(l, "card-img");
    return h.jsx(s, {
        ref: f,
        className: ie(a ? `${p}-${a}` : p, o),
        ...c
    })
});
Md.displayName = "CardImg";
const Id = m.forwardRef(({
    className: l,
    bsPrefix: o,
    as: a = "div",
    ...s
}, c) => (o = ue(o, "card-img-overlay"), h.jsx(a, {
    ref: c,
    className: ie(l, o),
    ...s
})));
Id.displayName = "CardImgOverlay";
const zd = m.forwardRef(({
    className: l,
    bsPrefix: o,
    as: a = "a",
    ...s
}, c) => (o = ue(o, "card-link"), h.jsx(a, {
    ref: c,
    className: ie(l, o),
    ...s
})));
zd.displayName = "CardLink";
const My = xu("h6"),
    $d = m.forwardRef(({
        className: l,
        bsPrefix: o,
        as: a = My,
        ...s
    }, c) => (o = ue(o, "card-subtitle"), h.jsx(a, {
        ref: c,
        className: ie(l, o),
        ...s
    })));
$d.displayName = "CardSubtitle";
const Fd = m.forwardRef(({
    className: l,
    bsPrefix: o,
    as: a = "p",
    ...s
}, c) => (o = ue(o, "card-text"), h.jsx(a, {
    ref: c,
    className: ie(l, o),
    ...s
})));
Fd.displayName = "CardText";
const Iy = xu("h5"),
    Ad = m.forwardRef(({
        className: l,
        bsPrefix: o,
        as: a = Iy,
        ...s
    }, c) => (o = ue(o, "card-title"), h.jsx(a, {
        ref: c,
        className: ie(l, o),
        ...s
    })));
Ad.displayName = "CardTitle";
const Bd = m.forwardRef(({
    bsPrefix: l,
    className: o,
    bg: a,
    text: s,
    border: c,
    body: f = !1,
    children: p,
    as: y = "div",
    ...g
}, x) => {
    const k = ue(l, "card");
    return h.jsx(y, {
        ref: x,
        ...g,
        className: ie(o, k, a && `bg-${a}`, s && `text-${s}`, c && `border-${c}`),
        children: f ? h.jsx(Su, {
            children: p
        }) : p
    })
});
Bd.displayName = "Card";
const Rt = Object.assign(Bd, {
    Img: Md,
    Title: Ad,
    Subtitle: $d,
    Body: Su,
    Link: zd,
    Text: Fd,
    Header: Dd,
    Footer: Od,
    ImgOverlay: Id
});

function zy({
    as: l,
    bsPrefix: o,
    className: a,
    ...s
}) {
    o = ue(o, "col");
    const c = xd(),
        f = wd(),
        p = [],
        y = [];
    return c.forEach(g => {
        const x = s[g];
        delete s[g];
        let k, j, C;
        typeof x == "object" && x != null ? {
            span: k,
            offset: j,
            order: C
        } = x : k = x;
        const O = g !== f ? `-${g}` : "";
        k && p.push(k === !0 ? `${o}${O}` : `${o}${O}-${k}`), C != null && y.push(`order${O}-${C}`), j != null && y.push(`offset${O}-${j}`)
    }), [{
        ...s,
        className: ie(a, ...p, ...y)
    }, {
        as: l,
        bsPrefix: o,
        spans: p
    }]
}
const Fe = m.forwardRef((l, o) => {
    const [{
        className: a,
        ...s
    }, {
        as: c = "div",
        bsPrefix: f,
        spans: p
    }] = zy(l);
    return h.jsx(c, {
        ...s,
        ref: o,
        className: ie(a, !p.length && f)
    })
});
Fe.displayName = "Col";
const it = m.forwardRef(({
    bsPrefix: l,
    fluid: o = !1,
    as: a = "div",
    className: s,
    ...c
}, f) => {
    const p = ue(l, "container"),
        y = typeof o == "string" ? `-${o}` : "-fluid";
    return h.jsx(a, {
        ref: f,
        ...c,
        className: ie(s, o ? `${p}${y}` : p)
    })
});
it.displayName = "Container";
var $y = Function.prototype.bind.call(Function.prototype.call, [].slice);

function zn(l, o) {
    return $y(l.querySelectorAll(o))
}

function Fy() {
    const [, l] = m.useReducer(o => o + 1, 0);
    return l
}

function Kf(l, o) {
    if (l.contains) return l.contains(o);
    if (l.compareDocumentPosition) return l === o || !!(l.compareDocumentPosition(o) & 16)
}
const Di = m.createContext(null),
    ku = (l, o = null) => l != null ? String(l) : o || null,
    Nu = m.createContext(null);
Nu.displayName = "NavContext";
const Ay = "data-rr-ui-",
    By = "rrUi";

function Wi(l) {
    return `${Ay}${l}`
}

function Uy(l) {
    return `${By}${l}`
}
const Ud = m.createContext(Bi ? window : void 0);
Ud.Provider;

function Ru() {
    return m.useContext(Ud)
}
const Hy = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative",
    Wy = typeof document < "u",
    Vy = Wy || Hy ? m.useLayoutEffect : m.useEffect,
    mr = m.createContext(null);
mr.displayName = "NavbarContext";
xn.string, xn.bool, xn.bool, xn.bool, xn.bool;
const yt = m.forwardRef(({
    bsPrefix: l,
    className: o,
    fluid: a = !1,
    rounded: s = !1,
    roundedCircle: c = !1,
    thumbnail: f = !1,
    ...p
}, y) => (l = ue(l, "img"), h.jsx("img", {
    ref: y,
    ...p,
    className: ie(o, a && `${l}-fluid`, s && "rounded", c && "rounded-circle", f && `${l}-thumbnail`)
})));
yt.displayName = "Image";
const Qf = l => !l || typeof l == "function" ? l : o => {
    l.current = o
};

function Ky(l, o) {
    const a = Qf(l),
        s = Qf(o);
    return c => {
        a && a(c), s && s(c)
    }
}

function Vi(l, o) {
    return m.useMemo(() => Ky(l, o), [l, o])
}
const Hd = m.createContext(null),
    Qy = ["as", "active", "eventKey"];

function Gy(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}

function Wd({
    key: l,
    onClick: o,
    active: a,
    id: s,
    role: c,
    disabled: f
}) {
    const p = m.useContext(Di),
        y = m.useContext(Nu),
        g = m.useContext(Hd);
    let x = a;
    const k = {
        role: c
    };
    if (y) {
        !c && y.role === "tablist" && (k.role = "tab");
        const j = y.getControllerId(l ?? null),
            C = y.getControlledId(l ?? null);
        k[Wi("event-key")] = l, k.id = j || s, x = a == null && l != null ? y.activeKey === l : a, (x || !(g != null && g.unmountOnExit) && !(g != null && g.mountOnEnter)) && (k["aria-controls"] = C)
    }
    return k.role === "tab" && (k["aria-selected"] = x, x || (k.tabIndex = -1), f && (k.tabIndex = -1, k["aria-disabled"] = !0)), k.onClick = Vt(j => {
        f || (o == null || o(j), l != null && p && !j.isPropagationStopped() && p(l, j))
    }), [k, {
        isActive: x
    }]
}
const Vd = m.forwardRef((l, o) => {
    let {
        as: a = Pd,
        active: s,
        eventKey: c
    } = l, f = Gy(l, Qy);
    const [p, y] = Wd(Object.assign({
        key: ku(c, f.href),
        active: s
    }, f));
    return p[Wi("active")] = y.isActive, h.jsx(a, Object.assign({}, f, p, {
        ref: o
    }))
});
Vd.displayName = "NavItem";
const Yy = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function Xy(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}
const Gf = () => {},
    Yf = Wi("event-key"),
    Kd = m.forwardRef((l, o) => {
        let {
            as: a = "div",
            onSelect: s,
            activeKey: c,
            role: f,
            onKeyDown: p
        } = l, y = Xy(l, Yy);
        const g = Fy(),
            x = m.useRef(!1),
            k = m.useContext(Di),
            j = m.useContext(Hd);
        let C, O;
        j && (f = f || "tablist", c = j.activeKey, C = j.getControlledId, O = j.getControllerId);
        const P = m.useRef(null),
            I = W => {
                const G = P.current;
                if (!G) return null;
                const ne = zn(G, `[${Yf}]:not([aria-disabled=true])`),
                    J = G.querySelector("[aria-selected=true]");
                if (!J || J !== document.activeElement) return null;
                const re = ne.indexOf(J);
                if (re === -1) return null;
                let ce = re + W;
                return ce >= ne.length && (ce = 0), ce < 0 && (ce = ne.length - 1), ne[ce]
            },
            _ = (W, G) => {
                W != null && (s == null || s(W, G), k == null || k(W, G))
            },
            z = W => {
                if (p == null || p(W), !j) return;
                let G;
                switch (W.key) {
                    case "ArrowLeft":
                    case "ArrowUp":
                        G = I(-1);
                        break;
                    case "ArrowRight":
                    case "ArrowDown":
                        G = I(1);
                        break;
                    default:
                        return
                }
                G && (W.preventDefault(), _(G.dataset[Uy("EventKey")] || null, W), x.current = !0, g())
            };
        m.useEffect(() => {
            if (P.current && x.current) {
                const W = P.current.querySelector(`[${Yf}][aria-selected=true]`);
                W == null || W.focus()
            }
            x.current = !1
        });
        const B = Vi(o, P);
        return h.jsx(Di.Provider, {
            value: _,
            children: h.jsx(Nu.Provider, {
                value: {
                    role: f,
                    activeKey: ku(c),
                    getControlledId: C || Gf,
                    getControllerId: O || Gf
                },
                children: h.jsx(a, Object.assign({}, y, {
                    onKeyDown: z,
                    ref: B,
                    role: f
                }))
            })
        })
    });
Kd.displayName = "Nav";
const Jy = Object.assign(Kd, {
    Item: Vd
});

function Xa(l) {
    l === void 0 && (l = hu());
    try {
        var o = l.activeElement;
        return !o || !o.nodeName ? null : o
    } catch {
        return l.body
    }
}

function Zy(l) {
    const o = m.useRef(l);
    return o.current = l, o
}

function qy(l) {
    const o = Zy(l);
    m.useEffect(() => () => o.current(), [])
}

function by(l = document) {
    const o = l.defaultView;
    return Math.abs(o.innerWidth - l.documentElement.clientWidth)
}
const Xf = Wi("modal-open");
class ju {
    constructor({
        ownerDocument: o,
        handleContainerOverflow: a = !0,
        isRTL: s = !1
    } = {}) {
        this.handleContainerOverflow = a, this.isRTL = s, this.modals = [], this.ownerDocument = o
    }
    getScrollbarWidth() {
        return by(this.ownerDocument)
    }
    getElement() {
        return (this.ownerDocument || document).body
    }
    setModalAttributes(o) {}
    removeModalAttributes(o) {}
    setContainerStyle(o) {
        const a = {
                overflow: "hidden"
            },
            s = this.isRTL ? "paddingLeft" : "paddingRight",
            c = this.getElement();
        o.style = {
            overflow: c.style.overflow,
            [s]: c.style[s]
        }, o.scrollBarWidth && (a[s] = `${parseInt(Gt(c,s)||"0",10)+o.scrollBarWidth}px`), c.setAttribute(Xf, ""), Gt(c, a)
    }
    reset() {
        [...this.modals].forEach(o => this.remove(o))
    }
    removeContainerStyle(o) {
        const a = this.getElement();
        a.removeAttribute(Xf), Object.assign(a.style, o.style)
    }
    add(o) {
        let a = this.modals.indexOf(o);
        return a !== -1 || (a = this.modals.length, this.modals.push(o), this.setModalAttributes(o), a !== 0) || (this.state = {
            scrollBarWidth: this.getScrollbarWidth(),
            style: {}
        }, this.handleContainerOverflow && this.setContainerStyle(this.state)), a
    }
    remove(o) {
        const a = this.modals.indexOf(o);
        a !== -1 && (this.modals.splice(a, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(o))
    }
    isTopModal(o) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === o
    }
}
const Ja = (l, o) => Bi ? l == null ? (o || hu()).body : (typeof l == "function" && (l = l()), l && "current" in l && (l = l.current), l && ("nodeType" in l || l.getBoundingClientRect) ? l : null) : null;

function ev(l, o) {
    const a = Ru(),
        [s, c] = m.useState(() => Ja(l, a == null ? void 0 : a.document));
    if (!s) {
        const f = Ja(l);
        f && c(f)
    }
    return m.useEffect(() => {}, [o, s]), m.useEffect(() => {
        const f = Ja(l);
        f !== s && c(f)
    }, [l, s]), s
}

function tv({
    children: l,
    in: o,
    onExited: a,
    mountOnEnter: s,
    unmountOnExit: c
}) {
    const f = m.useRef(null),
        p = m.useRef(o),
        y = Vt(a);
    m.useEffect(() => {
        o ? p.current = !0 : y(f.current)
    }, [o, y]);
    const g = Vi(f, l.ref),
        x = m.cloneElement(l, {
            ref: g
        });
    return o ? x : c || !p.current && s ? null : x
}
const nv = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];

function rv(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}

function lv(l) {
    let {
        onEnter: o,
        onEntering: a,
        onEntered: s,
        onExit: c,
        onExiting: f,
        onExited: p,
        addEndListener: y,
        children: g
    } = l, x = rv(l, nv);
    const k = m.useRef(null),
        j = Vi(k, Ai(g)),
        C = G => ne => {
            G && k.current && G(k.current, ne)
        },
        O = m.useCallback(C(o), [o]),
        P = m.useCallback(C(a), [a]),
        I = m.useCallback(C(s), [s]),
        _ = m.useCallback(C(c), [c]),
        z = m.useCallback(C(f), [f]),
        B = m.useCallback(C(p), [p]),
        W = m.useCallback(C(y), [y]);
    return Object.assign({}, x, {
        nodeRef: k
    }, o && {
        onEnter: O
    }, a && {
        onEntering: P
    }, s && {
        onEntered: I
    }, c && {
        onExit: _
    }, f && {
        onExiting: z
    }, p && {
        onExited: B
    }, y && {
        addEndListener: W
    }, {
        children: typeof g == "function" ? (G, ne) => g(G, Object.assign({}, ne, {
            ref: j
        })) : m.cloneElement(g, {
            ref: j
        })
    })
}
const iv = ["component"];

function ov(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}
const av = m.forwardRef((l, o) => {
    let {
        component: a
    } = l, s = ov(l, iv);
    const c = lv(s);
    return h.jsx(a, Object.assign({
        ref: o
    }, c))
});

function uv({
    in: l,
    onTransition: o
}) {
    const a = m.useRef(null),
        s = m.useRef(!0),
        c = Vt(o);
    return Vf(() => {
        if (!a.current) return;
        let f = !1;
        return c({
            in: l,
            element: a.current,
            initial: s.current,
            isStale: () => f
        }), () => {
            f = !0
        }
    }, [l, c]), Vf(() => (s.current = !1, () => {
        s.current = !0
    }), []), a
}

function sv({
    children: l,
    in: o,
    onExited: a,
    onEntered: s,
    transition: c
}) {
    const [f, p] = m.useState(!o);
    o && f && p(!1);
    const y = uv({
            in: !!o,
            onTransition: x => {
                const k = () => {
                    x.isStale() || (x.in ? s == null || s(x.element, x.initial) : (p(!0), a == null || a(x.element)))
                };
                Promise.resolve(c(x)).then(k, j => {
                    throw x.in || p(!0), j
                })
            }
        }),
        g = Vi(y, l.ref);
    return f && !o ? null : m.cloneElement(l, {
        ref: g
    })
}

function Jf(l, o, a) {
    return l ? h.jsx(av, Object.assign({}, a, {
        component: l
    })) : o ? h.jsx(sv, Object.assign({}, a, {
        transition: o
    })) : h.jsx(tv, Object.assign({}, a))
}
const cv = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function fv(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if ({}.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}
let Za;

function dv(l) {
    return Za || (Za = new ju({
        ownerDocument: l == null ? void 0 : l.document
    })), Za
}

function pv(l) {
    const o = Ru(),
        a = l || dv(o),
        s = m.useRef({
            dialog: null,
            backdrop: null
        });
    return Object.assign(s.current, {
        add: () => a.add(s.current),
        remove: () => a.remove(s.current),
        isTopModal: () => a.isTopModal(s.current),
        setDialogRef: m.useCallback(c => {
            s.current.dialog = c
        }, []),
        setBackdropRef: m.useCallback(c => {
            s.current.backdrop = c
        }, [])
    })
}
const Qd = m.forwardRef((l, o) => {
    let {
        show: a = !1,
        role: s = "dialog",
        className: c,
        style: f,
        children: p,
        backdrop: y = !0,
        keyboard: g = !0,
        onBackdropClick: x,
        onEscapeKeyDown: k,
        transition: j,
        runTransition: C,
        backdropTransition: O,
        runBackdropTransition: P,
        autoFocus: I = !0,
        enforceFocus: _ = !0,
        restoreFocus: z = !0,
        restoreFocusOptions: B,
        renderDialog: W,
        renderBackdrop: G = Se => h.jsx("div", Object.assign({}, Se)),
        manager: ne,
        container: J,
        onShow: re,
        onHide: ce = () => {},
        onExit: ye,
        onExited: ke,
        onExiting: Je,
        onEnter: Ze,
        onEntering: Oe,
        onEntered: He
    } = l, qe = fv(l, cv);
    const xe = Ru(),
        pe = ev(J),
        F = pv(ne),
        X = Sy(),
        H = Cy(a),
        [S, L] = m.useState(!a),
        ee = m.useRef(null);
    m.useImperativeHandle(o, () => F, [F]), Bi && !H && a && (ee.current = Xa(xe == null ? void 0 : xe.document)), a && S && L(!1);
    const b = Vt(() => {
            if (F.add(), Ae.current = Oi(document, "keydown", de), ge.current = Oi(document, "focus", () => setTimeout(ae), !0), re && re(), I) {
                var Se, yr;
                const En = Xa((Se = (yr = F.dialog) == null ? void 0 : yr.ownerDocument) != null ? Se : xe == null ? void 0 : xe.document);
                F.dialog && En && !Kf(F.dialog, En) && (ee.current = En, F.dialog.focus())
            }
        }),
        le = Vt(() => {
            if (F.remove(), Ae.current == null || Ae.current(), ge.current == null || ge.current(), z) {
                var Se;
                (Se = ee.current) == null || Se.focus == null || Se.focus(B), ee.current = null
            }
        });
    m.useEffect(() => {
        !a || !pe || b()
    }, [a, pe, b]), m.useEffect(() => {
        S && le()
    }, [S, le]), qy(() => {
        le()
    });
    const ae = Vt(() => {
            if (!_ || !X() || !F.isTopModal()) return;
            const Se = Xa(xe == null ? void 0 : xe.document);
            F.dialog && Se && !Kf(F.dialog, Se) && F.dialog.focus()
        }),
        me = Vt(Se => {
            Se.target === Se.currentTarget && (x == null || x(Se), y === !0 && ce())
        }),
        de = Vt(Se => {
            g && iy(Se) && F.isTopModal() && (k == null || k(Se), Se.defaultPrevented || ce())
        }),
        ge = m.useRef(),
        Ae = m.useRef(),
        An = (...Se) => {
            L(!0), ke == null || ke(...Se)
        };
    if (!pe) return null;
    const gr = Object.assign({
        role: s,
        ref: F.setDialogRef,
        "aria-modal": s === "dialog" ? !0 : void 0
    }, qe, {
        style: f,
        className: c,
        tabIndex: -1
    });
    let Jt = W ? W(gr) : h.jsx("div", Object.assign({}, gr, {
        children: m.cloneElement(p, {
            role: "document"
        })
    }));
    Jt = Jf(j, C, {
        unmountOnExit: !0,
        mountOnEnter: !0,
        appear: !0,
        in: !!a,
        onExit: ye,
        onExiting: Je,
        onExited: An,
        onEnter: Ze,
        onEntering: Oe,
        onEntered: He,
        children: Jt
    });
    let Zt = null;
    return y && (Zt = G({
        ref: F.setBackdropRef,
        onClick: me
    }), Zt = Jf(O, P, {
        in: !!a,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Zt
    })), h.jsx(h.Fragment, {
        children: pr.createPortal(h.jsxs(h.Fragment, {
            children: [Zt, Jt]
        }), pe)
    })
});
Qd.displayName = "Modal";
const hv = Object.assign(Qd, {
    Manager: ju
});

function mv(l, o) {
    return l.classList ? l.classList.contains(o) : (" " + (l.className.baseVal || l.className) + " ").indexOf(" " + o + " ") !== -1
}

function gv(l, o) {
    l.classList ? l.classList.add(o) : mv(l, o) || (typeof l.className == "string" ? l.className = l.className + " " + o : l.setAttribute("class", (l.className && l.className.baseVal || "") + " " + o))
}

function Zf(l, o) {
    return l.replace(new RegExp("(^|\\s)" + o + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function yv(l, o) {
    l.classList ? l.classList.remove(o) : typeof l.className == "string" ? l.className = Zf(l.className, o) : l.setAttribute("class", Zf(l.className && l.className.baseVal || "", o))
}
const dr = {
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
};
class Gd extends ju {
    adjustAndStore(o, a, s) {
        const c = a.style[o];
        a.dataset[o] = c, Gt(a, {
            [o]: `${parseFloat(Gt(a,o))+s}px`
        })
    }
    restore(o, a) {
        const s = a.dataset[o];
        s !== void 0 && (delete a.dataset[o], Gt(a, {
            [o]: s
        }))
    }
    setContainerStyle(o) {
        super.setContainerStyle(o);
        const a = this.getElement();
        if (gv(a, "modal-open"), !o.scrollBarWidth) return;
        const s = this.isRTL ? "paddingLeft" : "paddingRight",
            c = this.isRTL ? "marginLeft" : "marginRight";
        zn(a, dr.FIXED_CONTENT).forEach(f => this.adjustAndStore(s, f, o.scrollBarWidth)), zn(a, dr.STICKY_CONTENT).forEach(f => this.adjustAndStore(c, f, -o.scrollBarWidth)), zn(a, dr.NAVBAR_TOGGLER).forEach(f => this.adjustAndStore(c, f, o.scrollBarWidth))
    }
    removeContainerStyle(o) {
        super.removeContainerStyle(o);
        const a = this.getElement();
        yv(a, "modal-open");
        const s = this.isRTL ? "paddingLeft" : "paddingRight",
            c = this.isRTL ? "marginLeft" : "marginRight";
        zn(a, dr.FIXED_CONTENT).forEach(f => this.restore(s, f)), zn(a, dr.STICKY_CONTENT).forEach(f => this.restore(c, f)), zn(a, dr.NAVBAR_TOGGLER).forEach(f => this.restore(c, f))
    }
}
let qa;

function vv(l) {
    return qa || (qa = new Gd(l)), qa
}
const Yd = m.createContext({
        onHide() {}
    }),
    xv = m.forwardRef(({
        closeLabel: l = "Close",
        closeVariant: o,
        closeButton: a = !1,
        onHide: s,
        children: c,
        ...f
    }, p) => {
        const y = m.useContext(Yd),
            g = Hi(() => {
                y == null || y.onHide(), s == null || s()
            });
        return h.jsxs("div", {
            ref: p,
            ...f,
            children: [c, a && h.jsx(Eu, {
                "aria-label": l,
                variant: o,
                onClick: g
            })]
        })
    }),
    Xd = m.forwardRef(({
        className: l,
        bsPrefix: o,
        as: a = "div",
        ...s
    }, c) => (o = ue(o, "nav-item"), h.jsx(a, {
        ref: c,
        className: ie(l, o),
        ...s
    })));
Xd.displayName = "NavItem";
const Jd = m.forwardRef(({
    bsPrefix: l,
    className: o,
    as: a = _d,
    active: s,
    eventKey: c,
    disabled: f = !1,
    ...p
}, y) => {
    l = ue(l, "nav-link");
    const [g, x] = Wd({
        key: ku(c, p.href),
        active: s,
        disabled: f,
        ...p
    });
    return h.jsx(a, {
        ...p,
        ...g,
        ref: y,
        disabled: f,
        className: ie(o, l, f && "disabled", x.isActive && "active")
    })
});
Jd.displayName = "NavLink";
const Zd = m.forwardRef((l, o) => {
    const {
        as: a = "div",
        bsPrefix: s,
        variant: c,
        fill: f = !1,
        justify: p = !1,
        navbar: y,
        navbarScroll: g,
        className: x,
        activeKey: k,
        ...j
    } = du(l, {
        activeKey: "onSelect"
    }), C = ue(s, "nav");
    let O, P, I = !1;
    const _ = m.useContext(mr),
        z = m.useContext(Cu);
    return _ ? (O = _.bsPrefix, I = y ?? !0) : z && ({
        cardHeaderBsPrefix: P
    } = z), h.jsx(Jy, {
        as: a,
        ref: o,
        activeKey: k,
        className: ie(x, {
            [C]: !I,
            [`${O}-nav`]: I,
            [`${O}-nav-scroll`]: I && g,
            [`${P}-${c}`]: !!P,
            [`${C}-${c}`]: !!c,
            [`${C}-fill`]: f,
            [`${C}-justified`]: p
        }),
        ...j
    })
});
Zd.displayName = "Nav";
const Ht = Object.assign(Zd, {
        Item: Xd,
        Link: Jd
    }),
    qd = m.forwardRef(({
        bsPrefix: l,
        className: o,
        as: a,
        ...s
    }, c) => {
        l = ue(l, "navbar-brand");
        const f = a || (s.href ? "a" : "span");
        return h.jsx(f, {
            ...s,
            ref: c,
            className: ie(o, l)
        })
    });
qd.displayName = "NavbarBrand";
const bd = m.forwardRef(({
    children: l,
    bsPrefix: o,
    ...a
}, s) => {
    o = ue(o, "navbar-collapse");
    const c = m.useContext(mr);
    return h.jsx(Cd, {
        in: !!(c && c.expanded),
        ...a,
        children: h.jsx("div", {
            ref: s,
            className: o,
            children: l
        })
    })
});
bd.displayName = "NavbarCollapse";
const ep = m.forwardRef(({
    bsPrefix: l,
    className: o,
    children: a,
    label: s = "Toggle navigation",
    as: c = "button",
    onClick: f,
    ...p
}, y) => {
    l = ue(l, "navbar-toggler");
    const {
        onToggle: g,
        expanded: x
    } = m.useContext(mr) || {}, k = Hi(j => {
        f && f(j), g && g()
    });
    return c === "button" && (p.type = "button"), h.jsx(c, {
        ...p,
        ref: y,
        onClick: k,
        "aria-label": s,
        className: ie(o, l, !x && "collapsed"),
        children: a || h.jsx("span", {
            className: `${l}-icon`
        })
    })
});
ep.displayName = "NavbarToggle";
const iu = new WeakMap,
    qf = (l, o) => {
        if (!l || !o) return;
        const a = iu.get(o) || new Map;
        iu.set(o, a);
        let s = a.get(l);
        return s || (s = o.matchMedia(l), s.refCount = 0, a.set(s.media, s)), s
    };

function wv(l, o = typeof window > "u" ? void 0 : window) {
    const a = qf(l, o),
        [s, c] = m.useState(() => a ? a.matches : !1);
    return Vy(() => {
        let f = qf(l, o);
        if (!f) return c(!1);
        let p = iu.get(o);
        const y = () => {
            c(f.matches)
        };
        return f.refCount++, f.addListener(y), y(), () => {
            f.removeListener(y), f.refCount--, f.refCount <= 0 && (p == null || p.delete(f.media)), f = void 0
        }
    }, [l]), s
}

function Ev(l) {
    const o = Object.keys(l);

    function a(y, g) {
        return y === g ? g : y ? `${y} and ${g}` : g
    }

    function s(y) {
        return o[Math.min(o.indexOf(y) + 1, o.length - 1)]
    }

    function c(y) {
        const g = s(y);
        let x = l[g];
        return typeof x == "number" ? x = `${x-.2}px` : x = `calc(${x} - 0.2px)`, `(max-width: ${x})`
    }

    function f(y) {
        let g = l[y];
        return typeof g == "number" && (g = `${g}px`), `(min-width: ${g})`
    }

    function p(y, g, x) {
        let k;
        typeof y == "object" ? (k = y, x = g, g = !0) : (g = g || !0, k = {
            [y]: g
        });
        let j = m.useMemo(() => Object.entries(k).reduce((C, [O, P]) => ((P === "up" || P === !0) && (C = a(C, f(O))), (P === "down" || P === !0) && (C = a(C, c(O))), C), ""), [JSON.stringify(k)]);
        return wv(j, x)
    }
    return p
}
const Sv = Ev({
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400
    }),
    tp = m.forwardRef(({
        className: l,
        bsPrefix: o,
        as: a = "div",
        ...s
    }, c) => (o = ue(o, "offcanvas-body"), h.jsx(a, {
        ref: c,
        className: ie(l, o),
        ...s
    })));
tp.displayName = "OffcanvasBody";
const Cv = {
        [Nt]: "show",
        [Wt]: "show"
    },
    np = m.forwardRef(({
        bsPrefix: l,
        className: o,
        children: a,
        in: s = !1,
        mountOnEnter: c = !1,
        unmountOnExit: f = !1,
        appear: p = !1,
        ...y
    }, g) => (l = ue(l, "offcanvas"), h.jsx(gu, {
        ref: g,
        addEndListener: mu,
        in: s,
        mountOnEnter: c,
        unmountOnExit: f,
        appear: p,
        ...y,
        childRef: Ai(a),
        children: (x, k) => m.cloneElement(a, {
            ...k,
            className: ie(o, a.props.className, (x === Nt || x === sl) && `${l}-toggling`, Cv[x])
        })
    })));
np.displayName = "OffcanvasToggling";
const rp = m.forwardRef(({
    bsPrefix: l,
    className: o,
    closeLabel: a = "Close",
    closeButton: s = !1,
    ...c
}, f) => (l = ue(l, "offcanvas-header"), h.jsx(xv, {
    ref: f,
    ...c,
    className: ie(o, l),
    closeLabel: a,
    closeButton: s
})));
rp.displayName = "OffcanvasHeader";
const kv = xu("h5"),
    lp = m.forwardRef(({
        className: l,
        bsPrefix: o,
        as: a = kv,
        ...s
    }, c) => (o = ue(o, "offcanvas-title"), h.jsx(a, {
        ref: c,
        className: ie(l, o),
        ...s
    })));
lp.displayName = "OffcanvasTitle";

function Nv(l) {
    return h.jsx(np, {
        ...l
    })
}

function Rv(l) {
    return h.jsx(Ld, {
        ...l
    })
}
const ip = m.forwardRef(({
    bsPrefix: l,
    className: o,
    children: a,
    "aria-labelledby": s,
    placement: c = "start",
    responsive: f,
    show: p = !1,
    backdrop: y = !0,
    keyboard: g = !0,
    scroll: x = !1,
    onEscapeKeyDown: k,
    onShow: j,
    onHide: C,
    container: O,
    autoFocus: P = !0,
    enforceFocus: I = !0,
    restoreFocus: _ = !0,
    restoreFocusOptions: z,
    onEntered: B,
    onExit: W,
    onExiting: G,
    onEnter: ne,
    onEntering: J,
    onExited: re,
    backdropClassName: ce,
    manager: ye,
    renderStaticNode: ke = !1,
    ...Je
}, Ze) => {
    const Oe = m.useRef();
    l = ue(l, "offcanvas");
    const [He, qe] = m.useState(!1), xe = Hi(C), pe = Sv(f || "xs", "up");
    m.useEffect(() => {
        qe(f ? p && !pe : p)
    }, [p, f, pe]);
    const F = m.useMemo(() => ({
        onHide: xe
    }), [xe]);

    function X() {
        return ye || (x ? (Oe.current || (Oe.current = new Gd({
            handleContainerOverflow: !1
        })), Oe.current) : vv())
    }
    const H = (b, ...le) => {
            b && (b.style.visibility = "visible"), ne == null || ne(b, ...le)
        },
        S = (b, ...le) => {
            b && (b.style.visibility = ""), re == null || re(...le)
        },
        L = m.useCallback(b => h.jsx("div", {
            ...b,
            className: ie(`${l}-backdrop`, ce)
        }), [ce, l]),
        ee = b => h.jsx("div", {
            ...b,
            ...Je,
            className: ie(o, f ? `${l}-${f}` : l, `${l}-${c}`),
            "aria-labelledby": s,
            children: a
        });
    return h.jsxs(h.Fragment, {
        children: [!He && (f || ke) && ee({}), h.jsx(Yd.Provider, {
            value: F,
            children: h.jsx(hv, {
                show: He,
                ref: Ze,
                backdrop: y,
                container: O,
                keyboard: g,
                autoFocus: P,
                enforceFocus: I && !x,
                restoreFocus: _,
                restoreFocusOptions: z,
                onEscapeKeyDown: k,
                onShow: j,
                onHide: xe,
                onEnter: H,
                onEntering: J,
                onEntered: B,
                onExit: W,
                onExiting: G,
                onExited: S,
                manager: X(),
                transition: Nv,
                backdropTransition: Rv,
                renderBackdrop: L,
                renderDialog: ee
            })
        })]
    })
});
ip.displayName = "Offcanvas";
const _i = Object.assign(ip, {
        Body: tp,
        Header: rp,
        Title: lp
    }),
    op = m.forwardRef(({
        onHide: l,
        ...o
    }, a) => {
        const s = m.useContext(mr),
            c = Hi(() => {
                s == null || s.onToggle == null || s.onToggle(), l == null || l()
            });
        return h.jsx(_i, {
            ref: a,
            show: !!(s != null && s.expanded),
            ...o,
            renderStaticNode: !0,
            onHide: c
        })
    });
op.displayName = "NavbarOffcanvas";
const ap = m.forwardRef(({
    className: l,
    bsPrefix: o,
    as: a = "span",
    ...s
}, c) => (o = ue(o, "navbar-text"), h.jsx(a, {
    ref: c,
    className: ie(l, o),
    ...s
})));
ap.displayName = "NavbarText";
const up = m.forwardRef((l, o) => {
    const {
        bsPrefix: a,
        expand: s = !0,
        variant: c = "light",
        bg: f,
        fixed: p,
        sticky: y,
        className: g,
        as: x = "nav",
        expanded: k,
        onToggle: j,
        onSelect: C,
        collapseOnSelect: O = !1,
        ...P
    } = du(l, {
        expanded: "onToggle"
    }), I = ue(a, "navbar"), _ = m.useCallback((...W) => {
        C == null || C(...W), O && k && (j == null || j(!1))
    }, [C, O, k, j]);
    P.role === void 0 && x !== "nav" && (P.role = "navigation");
    let z = `${I}-expand`;
    typeof s == "string" && (z = `${z}-${s}`);
    const B = m.useMemo(() => ({
        onToggle: () => j == null ? void 0 : j(!k),
        bsPrefix: I,
        expanded: !!k,
        expand: s
    }), [I, k, s, j]);
    return h.jsx(mr.Provider, {
        value: B,
        children: h.jsx(Di.Provider, {
            value: _,
            children: h.jsx(x, {
                ref: o,
                ...P,
                className: ie(g, I, s && z, c && `${I}-${c}`, f && `bg-${f}`, y && `sticky-${y}`, p && `fixed-${p}`)
            })
        })
    })
});
up.displayName = "Navbar";
const ji = Object.assign(up, {
        Brand: qd,
        Collapse: bd,
        Offcanvas: op,
        Text: ap,
        Toggle: ep
    }),
    Kt = m.forwardRef(({
        bsPrefix: l,
        className: o,
        as: a = "div",
        ...s
    }, c) => {
        const f = ue(l, "row"),
            p = xd(),
            y = wd(),
            g = `${f}-cols`,
            x = [];
        return p.forEach(k => {
            const j = s[k];
            delete s[k];
            let C;
            j != null && typeof j == "object" ? {
                cols: C
            } = j : C = j;
            const O = k !== y ? `-${k}` : "";
            C != null && x.push(`${g}${O}-${C}`)
        }), h.jsx(a, {
            ref: c,
            ...s,
            className: ie(o, f, ...x)
        })
    });
Kt.displayName = "Row";
const jv = "/library/assets/ccetLogoBlack-D99RbQYi.png";

function Tv() {
    return h.jsx(ji, {
        style: {
            backgroundColor: "#084386",
            padding: "0 70px"
        },
        expand: !1,
        children: h.jsxs(it, {
            fluid: !0,
            children: [h.jsx(ji.Brand, {
                href: "/",
                className: "d-flex align-items-center",
                children: h.jsx("img", {
                    src: jv,
                    width: "95",
                    height: "90",
                    className: "d-inline-block align-top",
                    alt: "CCET logo"
                })
            }), h.jsxs("div", {
                className: "mx-auto text-center",
                style: {
                    color: "white"
                },
                children: [h.jsx("div", {
                    children: h.jsx("h2", {
                        style: {
                            fontWeight: "bolder"
                        },
                        children: "Library"
                    })
                }), h.jsx("div", {
                    style: {
                        fontSize: "medium",
                        fontWeight: "bolder"
                    },
                    children: h.jsx("h5", {
                        children: "Chandigarh College of Engineering and Technology"
                    })
                })]
            }), h.jsx(ji.Toggle, {
                "aria-controls": "offcanvasNavbar",
                className: "custom-toggler"
            }), h.jsxs(ji.Offcanvas, {
                id: "offcanvasNavbar",
                "aria-labelledby": "offcanvasNavbarLabel",
                placement: "end",
                style: {
                    backgroundColor: "#084386",
                    color: "white"
                },
                children: [h.jsx(_i.Header, {
                    closeButton: !0,
                    closeVariant: "white",
                    children: h.jsx(_i.Title, {
                        id: "offcanvasNavbarLabel",
                        children: "CCET Library"
                    })
                }), h.jsx(_i.Body, {
                    children: h.jsxs(Ht, {
                        className: "justify-content-end flex-grow-1 pe-3",
                        children: [h.jsx(Ht.Link, {
                            as: ct,
                            to: "/",
                            style: {
                                color: "white"
                            },
                            children: "Home"
                        }), h.jsx(Ht.Link, {
                            as: ct,
                            to: "/about",
                            style: {
                                color: "white"
                            },
                            children: "About"
                        }), h.jsx(Ht.Link, {
                            as: ct,
                            to: "/information",
                            style: {
                                color: "white"
                            },
                            children: "Get in Touch"
                        }), h.jsx(Ht.Link, {
                            as: ct,
                            to: "/resources",
                            style: {
                                color: "white"
                            },
                            children: "Resources"
                        }), h.jsx(Ht.Link, {
                            as: ct,
                            to: "/services",
                            style: {
                                color: "white"
                            },
                            children: "Services"
                        })]
                    })
                })]
            })]
        })
    })
}

function Pv() {
    const [l, o] = m.useState(0);
    return m.useEffect(() => {
        const a = async () => {
            const f = await (await fetch("https://jsonplaceholder.typicode.com/posts/56")).json();
            o(f.id)
        };
        a();
        const s = setInterval(a, 6e4);
        return () => clearInterval(s)
    }, []), h.jsx("div", {
        className: "footer-container",
        children: h.jsxs("footer", {
            style: {
                padding: "0 70px"
            },
            className: "d-flex flex-wrap justify-content-between align-items-center py-3 border-top",
            children: [h.jsx("p", {
                className: "col-md-4 mb-0 text-white",
                children: "© 2025, CCET, All rights reserved"
            }), h.jsxs("ul", {
                className: "nav col-md-4 justify-content-center",
                children: [h.jsx("li", {
                    className: "nav-item",
                    children: h.jsx(Ht.Link, {
                        as: ct,
                        to: "/about",
                        className: "nav-link px-2 text-white",
                        children: "About"
                    })
                }), h.jsx("li", {
                    className: "nav-item",
                    children: h.jsx(Ht.Link, {
                        as: ct,
                        to: "/resources",
                        className: "nav-link px-2 text-white",
                        children: "Resource"
                    })
                }), h.jsx("li", {
                    className: "nav-item",
                    children: h.jsx(Ht.Link, {
                        as: ct,
                        to: "/information",
                        className: "nav-link px-2 text-white",
                        children: "Get in Touch"
                    })
                })]
            }), h.jsxs("p", {
                className: "col-md-4 mb-0 text-white text-end",
                children: ["Visitor Counter: ", l]
            })]
        })
    })
}

function _v({
    children: l
}) {
    return h.jsxs("div", {
        children: [h.jsx(Tv, {}), h.jsx("div", {
            className: "main-content min-h-screen",
            children: l
        }), h.jsx(Pv, {})]
    })
}

function Lv() {
    return h.jsxs(h.Fragment, {
        children: [h.jsx(it, {
            className: "px-4 py-5",
            children: h.jsxs(Kt, {
                className: "align-items-stretch g-5 py-5",
                children: [h.jsx(Fe, {
                    xs: 12,
                    sm: 8,
                    lg: 6,
                    className: "d-flex",
                    children: h.jsx(yt, {
                        src: "/library/assets/images/library_1.png",
                        fluid: !0,
                        alt: "Bootstrap Themes",
                        className: "w-100 h-100",
                        style: {
                            objectFit: "cover"
                        }
                    })
                }), h.jsxs(Fe, {
                    lg: 6,
                    className: "d-flex flex-column justify-content-center",
                    children: [h.jsx("h1", {
                        className: "display-5 fw-bold text-body-emphasis lh-2 mb-3",
                        children: "Empowering Minds Through Knowledge: CCET Degree Wing Library"
                    }), h.jsx("p", {
                        className: "lead",
                        children: "CCET Degree Wing is one the leading colleges in Chandigarh in Technical Education due to its own up to date library which is a home to various Technical as well as Non-Technical books. The library staff is constantly striving ​towards helping students to get the optimum benefit of the resources provided by the college."
                    }), h.jsx("div", {
                        className: "d-grid gap-2 d-md-flex justify-content-md-start",
                        children: h.jsx(ct, {
                            to: "/about",
                            children: h.jsx(cl, {
                                variant: "warning",
                                size: "lg",
                                className: "px-4 me-md-2",
                                children: "Learn More"
                            })
                        })
                    })]
                })]
            })
        }), 

        // ⬇️ Slideshow starts here
            h.jsx(it, {
    className: "my-5",
    children: h.jsxs("div", {
        className: "carousel slide",
        id: "libraryCarousel",
        "data-bs-ride": "carousel",
        children: [
            h.jsxs("div", {
                className: "carousel-inner",
                children: [
                    "./assets/images/CCET.jpeg",
                    "./assets/images/library1.jpg",
                    "./assets/images/library2.jpg",
                    "./assets/images/library3.jpg",
                    "./assets/images/library4.jpg",
                    "./assets/images/library5.jpg",
                    "./assets/images/library6.jpg",
                    "./assets/images/library7.jpg",
                    "./assets/images/library8.jpg",
                    "./assets/images/library9.jpg"
                ].map((src, idx) =>
                    h.jsx("div", {
                        className: `carousel-item${idx === 0 ? " active" : ""}`,
                        children: h.jsx("img", {
                            src,
                            className: "d-block w-100 img-fluid",
                            alt: `Slide ${idx + 1}`,
                            style: {
                                maxHeight: "600px",
                                objectFit: "cover"
                            }
                        })
                    }, idx)
                )
            }),
            // Prev button
            h.jsxs("button", {
                className: "carousel-control-prev",
                type: "button",
                "data-bs-target": "#libraryCarousel",
                "data-bs-slide": "prev",
                children: [
                    h.jsx("span", {
                        className: "carousel-control-prev-icon",
                        "aria-hidden": "true"
                    }),
                    h.jsx("span", {
                        className: "visually-hidden",
                        children: "Previous"
                    })
                ]
            }),
            // Next button
            h.jsxs("button", {
                className: "carousel-control-next",
                type: "button",
                "data-bs-target": "#libraryCarousel",
                "data-bs-slide": "next",
                children: [
                    h.jsx("span", {
                        className: "carousel-control-next-icon",
                        "aria-hidden": "true"
                    }),
                    h.jsx("span", {
                        className: "visually-hidden",
                        children: "Next"
                    })
                ]
            })
        ]
    })
}),

            // ⬆️ Slideshow ends here

            h.jsx(it, {
            className: "my-5",
            children: h.jsx(Kt, {
                className: "justify-content-center",
                children: h.jsxs(Fe, {
                    md: 10,
                    lg: 8,
                    children: [h.jsx("h2", {
                        className: "text-center fw-bold",
                        style: {
                            fontSize: "2.5rem",
                            lineHeight: "1.3",
                            marginBottom: "1rem",
                            color: "#333333"
                        },
                        children: "Our Vision & Mission"
                    }), h.jsx("p", {
                        className: "text-center",
                        style: {
                            fontSize: "1.25rem",
                            lineHeight: "1.8",
                            color: "#555555"
                        },
                        children: "CCET Degree Wing is one of the leading colleges in Chandigarh in technical education due to its up-to-date library, which is home to various technical as well as non-technical books. The library staff is constantly striving towards helping students get the optimum benefit of the resources provided by the college."
                    })]
                })
            })
        }), h.jsxs(it, {
            className: "my-5",
            children: [h.jsx("h2", {
                className: "text-center fw-bold",
                style: {
                    fontSize: "2.5rem",
                    lineHeight: "1.3",
                    marginBottom: "2rem",
                    color: "#333333"
                },
                children: "Our Staff"
            }), h.jsxs(Kt, {
                children: [h.jsxs(Fe, {
                    lg: 4,
                    className: "text-center mb-4",
                    children: [h.jsx(yt, {
                        src: "/library/assets/images/Dr.Davinder Singh.jpg",
                        width: "210",
                        height: "140"
                    }), h.jsx("h3", {
                        className: "fw-normal mt-3",
                        children: "Dr. Davinder Singh Saini"
                    }), h.jsx("p", {
                        children: "Position: Prof. In-Charge Library "
                    }), h.jsx("p", {
                        children: "Email: dssaini@ccet.ac.in"
                    }), h.jsx("p", {
                        children: "Qualification: B.E,M.E,Phd"
                    })]
                }), h.jsxs(Fe, {
                    lg: 4,
                    className: "text-center mb-4",
                    children: [h.jsx(yt, {
                        src: "./assets/images/Dr.Shalini Wasan.jpg",
                        width: "210",
                        height: "140"
                    }), h.jsx("h3", {
                        className: "fw-normal mt-3",
                        children: "Dr. Shalini Wasan"
                    }), h.jsx("p", {
                        children: "Position: Librarian"
                    }), h.jsx("p", {
                        children: "Email: shalini.wasan@gmail.com"
                    }), h.jsx("p", {
                        children: "Qualification: M.A.(Economics),M.Lib,PGDLAN,UGC-NET,PhD "
                    })]
                }), h.jsxs(Fe, {
                    lg: 4,
                    className: "text-center mb-4",
                    children: [h.jsx(yt, {
                        src: "/library/assets/images/Karamjeet.jpg",
                        width: "210",
                        height: "140"
                    }), h.jsx("h3", {
                        className: "fw-normal mt-3",
                        children: "Karamjit Kaur"
                    }), h.jsx("p", {
                        children: "Position: Library Assistant"
                    }), h.jsx("p", {
                        children: "Email: karamjitkaur24@gmail.com"
                    }), h.jsx("p", {
                        children: "Qualification: B.A.,B.Lib."
                    })]
                })]
            })]
        }), h.jsxs(it, {
            className: "my-5",
            children: [h.jsx("h2", {
                className: "text-center fw-bold",
                style: {
                    fontSize: "2.5rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    color: "#333333"
                },
                children: "Library Rules and Regulations"
            }), h.jsxs("ul", {
                children: [h.jsx("li", {
                    children: "Every student can issue only three books for one month only."
                }), h.jsx("li", {
                    children: "If the library card is lost, the duplicate can be issued on payment of Rs. 50."
                }), h.jsx("li", {
                    children: "Reference books, text-books and journals shall not be issued."
                }), h.jsx("li", {
                    children: "A fine of Re. 1/- per day shall be charged for each book kept beyond the due date."
                }), h.jsx("li", {
                    children: "Borrowers shall be required to pay the price of the book, if lost by them."
                }), h.jsx("li", {
                    children: "A student on leave must arrange for the return of books in time."
                }), h.jsx("li", {
                    children: "Marking on books and tearing of papers out of library books is not permissible. Defaulter, if any, shall have to pay the cost of the book."
                }), h.jsx("li", {
                    children: "The Librarian can recall any book, if necessary, even before the expiry of the due date of return."
                })]
            }), h.jsx("hr", {}), h.jsxs("p", {
                style: {
                    color: "#0d6efd"
                },
                children: ["Contact Information: ", h.jsx("span", {
                    style: {
                        color: "black"
                    },
                    children: "shalini.wasan@gmail.com"
                })]
            }), h.jsxs("p", {
                style: {
                    color: "#0d6efd"
                },
                children: ["Library Opening Hours: ", h.jsx("span", {
                    style: {
                        color: "black"
                    },
                    children: "9.00 a.m. to 5 p.m."
                })]
            })]
        }), h.jsx(it, {
            className: "px-4 py-5",
            children: h.jsxs(Kt, {
                className: "align-items-stretch g-5 py-5",
                children: [h.jsx(Fe, {
                    xs: 12,
                    sm: 8,
                    lg: 6,
                    className: "d-flex",
                    children: h.jsx(yt, {
                        src: "/library/assets/images/CCET.jpeg",
                        fluid: !0,
                        alt: "Bootstrap Themes",
                        className: "w-100 h-100",
                        style: {
                            objectFit: "cover"
                        }
                    })
                }), h.jsxs(Fe, {
                    lg: 6,
                    className: "d-flex flex-column justify-content-center",
                    children: [h.jsx("h1", {
                        className: "display-5 fw-bold text-body-emphasis lh-1 mb-3",
                        children: "About College"
                    }), h.jsx("p", {
                        className: "lead",
                        children: "CCET is well known for its huge infrastructure and state of the art facilities. It is also known as Green Campus because it has a unique environment friendly & energy efficient building with fabulous architecture, lush verdant woods and landscape gardens that provide an idyllic academic environment to our students. CCET offers B.E. (Bachelor of Engineering) courses in four streams i.e. Electronics & Communication Engineering, Computer Science & Engineering, Mechanical Engineering and Civil Engineering."
                    }), h.jsx("div", {
                        className: "d-grid gap-2 d-md-flex justify-content-md-start",
                        children: h.jsx(ct, {
                            to: "https://ccet.ac.in/",
                            children: h.jsx(cl, {
                                variant: "warning",
                                size: "lg",
                                className: "px-4 me-md-2",
                                children: "Read More"
                            })
                        })
                    })]
                })]
            })
        })]
    })
}
var sp = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    bf = Ge.createContext && Ge.createContext(sp),
    Ov = ["attr", "size", "title"];

function Dv(l, o) {
    if (l == null) return {};
    var a = Mv(l, o),
        s, c;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(l);
        for (c = 0; c < f.length; c++) s = f[c], !(o.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(l, s) && (a[s] = l[s])
    }
    return a
}

function Mv(l, o) {
    if (l == null) return {};
    var a = {};
    for (var s in l)
        if (Object.prototype.hasOwnProperty.call(l, s)) {
            if (o.indexOf(s) >= 0) continue;
            a[s] = l[s]
        } return a
}

function Mi() {
    return Mi = Object.assign ? Object.assign.bind() : function(l) {
        for (var o = 1; o < arguments.length; o++) {
            var a = arguments[o];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (l[s] = a[s])
        }
        return l
    }, Mi.apply(this, arguments)
}

function ed(l, o) {
    var a = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(l);
        o && (s = s.filter(function(c) {
            return Object.getOwnPropertyDescriptor(l, c).enumerable
        })), a.push.apply(a, s)
    }
    return a
}

function Ii(l) {
    for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? ed(Object(a), !0).forEach(function(s) {
            Iv(l, s, a[s])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : ed(Object(a)).forEach(function(s) {
            Object.defineProperty(l, s, Object.getOwnPropertyDescriptor(a, s))
        })
    }
    return l
}

function Iv(l, o, a) {
    return o = zv(o), o in l ? Object.defineProperty(l, o, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : l[o] = a, l
}

function zv(l) {
    var o = $v(l, "string");
    return typeof o == "symbol" ? o : o + ""
}

function $v(l, o) {
    if (typeof l != "object" || !l) return l;
    var a = l[Symbol.toPrimitive];
    if (a !== void 0) {
        var s = a.call(l, o || "default");
        if (typeof s != "object") return s;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (o === "string" ? String : Number)(l)
}

function cp(l) {
    return l && l.map((o, a) => Ge.createElement(o.tag, Ii({
        key: a
    }, o.attr), cp(o.child)))
}

function Tu(l) {
    return o => Ge.createElement(Fv, Mi({
        attr: Ii({}, l.attr)
    }, o), cp(l.child))
}

function Fv(l) {
    var o = a => {
        var {
            attr: s,
            size: c,
            title: f
        } = l, p = Dv(l, Ov), y = c || a.size || "1em", g;
        return a.className && (g = a.className), l.className && (g = (g ? g + " " : "") + l.className), Ge.createElement("svg", Mi({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, a.attr, s, p, {
            className: g,
            style: Ii(Ii({
                color: l.color || a.color
            }, a.style), l.style),
            height: y,
            width: y,
            xmlns: "http://www.w3.org/2000/svg"
        }), f && Ge.createElement("title", null, f), l.children)
    };
    return bf !== void 0 ? Ge.createElement(bf.Consumer, null, a => o(a)) : o(sp)
}

function Av(l) {
    return Tu({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            },
            child: []
        }]
    })(l)
}

function Bv(l) {
    return Tu({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            },
            child: []
        }]
    })(l)
}

function Uv(l) {
    return Tu({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
            },
            child: []
        }]
    })(l)
}

function Hv() {
    return h.jsxs("div", {
        children: [h.jsx("div", {
            style: {
                width: "100%",
                height: "400px"
            },
            children: h.jsx("iframe", {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.670688131123!2d76.80631047473597!3d30.727656985879527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1736420547574!5m2!1sen!2sin",
                width: "100%",
                height: "100%",
                style: {
                    border: 0
                },
                allowFullScreen: "",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                title: "CCET Chandigarh Location"
            })
        }), h.jsx("h2", {
            className: "text-center fw-bold",
            style: {
                fontSize: "2.5rem",
                lineHeight: "1.3",
                marginBottom: "1rem",
                color: "#333333",
                marginTop: "40px"
            },
            children: "Get in Touch"
        }), h.jsx(it, {
            className: "my-5",
            children: h.jsxs(Kt, {
                className: "justify-content-center",
                children: [h.jsx(Fe, {
                    md: 4,
                    className: "mb-4",
                    children: h.jsx(Rt, {
                        className: "text-center h-100 info-card",
                        children: h.jsxs(Rt.Body, {
                            className: "d-flex flex-column justify-content-center align-items-center",
                            children: [h.jsx(Uv, {
                                size: 50
                            }), h.jsx("h3", {
                                className: "mt-3",
                                children: "Phone"
                            }), h.jsx("p", {
                                children: "+91 00000000000"
                            })]
                        })
                    })
                }), h.jsx(Fe, {
                    md: 4,
                    className: "mb-4",
                    children: h.jsx(Rt, {
                        className: "text-center h-100 info-card",
                        children: h.jsxs(Rt.Body, {
                            className: "d-flex flex-column justify-content-center align-items-center",
                            children: [h.jsx(Av, {
                                size: 50
                            }), h.jsx("h3", {
                                className: "mt-3",
                                children: "Email"
                            }), h.jsx("p", {
                                children: "ccet.ac.in"
                            })]
                        })
                    })
                }), h.jsx(Fe, {
                    md: 4,
                    className: "mb-4",
                    children: h.jsx(Rt, {
                        className: "text-center h-100 info-card",
                        children: h.jsxs(Rt.Body, {
                            className: "d-flex flex-column justify-content-center align-items-center",
                            children: [h.jsx(Bv, {
                                size: 50
                            }), h.jsx("h3", {
                                className: "mt-3",
                                children: "Location"
                            }), h.jsx("p", {
                                children: "CCET, Sector 26, Chandigarh"
                            })]
                        })
                    })
                })]
            })
        })]
    })
}
const Wv = () => {
    const l = [{
        title: "OPAC (Online Public Access Catalog)",
        description: "Access our Online Public Access Catalog for easy resource discovery.",
        image: "/library/assets/images/OPAC.jpeg",
        link: "#"
    }, {
        title: "Alice For Windows",
        description: "Manage book issues and returns with our barcode-enabled software.",
        image: "/library/assets/images/Alice.png",
        link: "#"
    }, {
        title: "E-mail Reference of Librarian",
        description: "Contact our librarian for assistance: shalini.wasan@gmail.com.",
        image: "/library/assets/images/email_reference.jpg",
        link: "mailto:shalini.wasan@gmail.com"
    }];
    return h.jsxs(it, {
        className: "my-5",
        children: [h.jsx(yt, {
            src: "/library/assets/images/Library_3.png",
            fluid: !0,
            alt: "Library Services",
            className: "mb-4",
            style: {
                width: "100%",
                margin: "20px 0",
                borderRadius: "8px",
                height: "580px",
                objectFit: "cover",
                objectPosition: "center 30%"
            }
        }), h.jsx("h1", {
            className: "text-center mb-4",
            style: {
                fontWeight: "bold"
            },
            children: "Library Services"
        }), h.jsx("p", {
            className: "text-center mb-5",
            style: {
                color: "#555",
                fontSize: "1.1rem",
                lineHeight: "1.6"
            },
            children: "Discover the various services we offer to support your academic and research needs."
        }), h.jsx(Kt, {
            xs: 1,
            md: 2,
            lg: 3,
            className: "g-4",
            children: l.map((o, a) => h.jsx(Fe, {
                children: h.jsxs(Rt, {
                    className: "h-100 shadow-sm",
                    style: {
                        borderRadius: "10px"
                    },
                    children: [h.jsx(Rt.Img, {
                        variant: "top",
                        src: o.image,
                        alt: o.title,
                        style: {
                            height: "200px",
                            objectFit: "cover",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px"
                        }
                    }), h.jsxs(Rt.Body, {
                        children: [h.jsx(Rt.Title, {
                            style: {
                                fontWeight: "bold",
                                fontSize: "1.25rem"
                            },
                            children: o.title
                        }), h.jsx(Rt.Text, {
                            style: {
                                color: "#555",
                                fontSize: "1rem",
                                lineHeight: "1.5"
                            },
                            children: o.description
                        })]
                    })]
                })
            }, a))
        })]
    })
};

function Vv() {
    return h.jsxs("div", {
        children: [h.jsxs(it, {
            className: "my-5",
            children: [h.jsx("h2", {
                className: "text-center fw-bold",
                style: {
                    fontSize: "2.5rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    color: "#333333"
                },
                children: "About Library"
            }), h.jsx("p", {
                children: "To support the academic requirements of the faculty & students, the college has a well stocked library with a collection of about 14,000 volumes in Science & Technology, catering to the needs of about 1100 members (both faculty & students) imparting/pursuing studies in four different branches of engineering. The library is continuously in the process to acquire text books & reference books, to keep its reader abreast with the latest information. The library of the institute aims to facilitate academic & research activities of the faculty & students by providing timely information & resources. Library is fully automated and is using Softlink Alice Software."
            })]
        }), h.jsxs(it, {
            className: "my-5",
            children: [h.jsx("h2", {
                className: "text-center fw-bold",
                style: {
                    fontSize: "2.5rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    color: "#333333"
                },
                children: "Our Vision and Mission"
            }), h.jsx("p", {
                children: "Our vision is to empower students with knowledge and skills through access to a comprehensive collection of resources. Our mission is to provide a conducive learning environment that fosters academic excellence and lifelong learning."
            })]
        }), h.jsxs(it, {
            className: "my-5",
            children: [h.jsx("h2", {
                className: "text-center fw-bold",
                style: {
                    fontSize: "2.5rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    color: "#333333"
                },
                children: "Our Staff"
            }), h.jsxs(Kt, {
                children: [h.jsxs(Fe, {
                    lg: 4,
                    className: "text-center mb-4",
                    children: [h.jsx(yt, {
                        src: "/library/assets/images/Dr.Davinder Singh.jpg",
                        width: "210",
                        height: "140"
                    }), h.jsx("h3", {
                        className: "fw-normal mt-3",
                        children: "Dr. Davinder Singh Saini"
                    }), h.jsx("p", {
                        children: "Position: Prof. In-Charge Library"
                    }), h.jsx("p", {
                        children: "Qualification: B.E, M.E, PhD"
                    })]
                }), h.jsxs(Fe, {
                    lg: 4,
                    className: "text-center mb-4",
                    children: [h.jsx(yt, {
                        src: "./assets/images/Dr.Shalini Wasan.jpg",
                        width: "210",
                        height: "140"
                    }), h.jsx("h3", {
                        className: "fw-normal mt-3",
                        children: "Dr. Shalini Wasan"
                    }), h.jsx("p", {
                        children: "Position: Librarian"
                    }), h.jsx("p", {
                        children: "Qualification: M.A.(Economics), M.Lib, PGDLAN, UGC-NET, PhD"
                    })]
                }), h.jsxs(Fe, {
                    lg: 4,
                    className: "text-center mb-4",
                    children: [h.jsx(yt, {
                        src: "/library/assets/images/Karamjeet.jpg",
                        width: "210",
                        height: "140"
                    }), h.jsx("h3", {
                        className: "fw-normal mt-3",
                        children: "Karamjit Kaur"
                    }), h.jsx("p", {
                        children: "Position: Library Assistant"
                    }), h.jsx("p", {
                        children: "Qualification: B.A., B.Lib."
                    })]
                })]
            })]
        }), h.jsx(it, {
            className: "px-4 py-5",
            children: h.jsxs(Kt, {
                className: "align-items-stretch g-5 py-5",
                children: [h.jsx(Fe, {
                    xs: 12,
                    sm: 8,
                    lg: 6,
                    className: "d-flex",
                    children: h.jsx(yt, {
                        src: "/library/assets/images/CCET.jpeg",
                        fluid: !0,
                        alt: "Bootstrap Themes",
                        className: "w-100 h-100",
                        style: {
                            objectFit: "cover"
                        }
                    })
                }), h.jsxs(Fe, {
                    lg: 6,
                    className: "d-flex flex-column justify-content-center",
                    children: [h.jsx("h1", {
                        className: "display-5 fw-bold text-body-emphasis lh-1 mb-3",
                        children: "About College"
                    }), h.jsx("p", {
                        className: "lead",
                        children: "CCET is well known for its huge infrastructure and state of the art facilities. It is also known as Green Campus because it has a unique environment friendly & energy efficient building with fabulous architecture, lush verdant woods and landscape gardens that provide an idyllic academic environment to our students. CCET offers B.E. (Bachelor of Engineering) courses in four streams i.e. Electronics & Communication Engineering, Computer Science & Engineering, Mechanical Engineering and Civil Engineering."
                    }), h.jsx("div", {
                        className: "d-grid gap-2 d-md-flex justify-content-md-start",
                        children: h.jsx(ct, {
                            to: "https://ccet.ac.in/",
                            children: h.jsx(cl, {
                                variant: "warning",
                                size: "lg",
                                className: "px-4 me-md-2",
                                children: "Read More"
                            })
                        })
                    })]
                })]
            })
        })]
    })
}
const td = () => {
    const l = [{
        title: "E-Books",
        description: "Access a wide range of e-books across various subjects.",
        buttons: [{
            text: "Free E-Books",
            link: "https://www.free-ebooks.net/"
        }, {
            text: "Pearson E-Books",
            link: "https://digital-library.pearson.com/pages/selectrole"
        }]
    }, {
        title: "Journals",
        description: "Browse through our collection of academic journals.",
        buttons: [{
            text: "Gutenberg",
            link: "https://www.gutenberg.org/"
        }, {
            text: "Computers",
            link: "https://freecomputerbooks.com/"
        }, {
            text: "Scholarpedia",
            link: "http://www.scholarpedia.org/article/Main_Page"
        }]
    }, {
        title: "Databases",
        description: "Utilize our databases for research and study.",
        buttons: [{
            text: "C-Programming",
            link: "https://www.cprogramming.com/tutorial.html"
        }, {
            text: "Encyclopedia",
            link: "https://www.encyclopedia.com/"
        }, {
            text: "Dictionary",
            link: "https://macmillaneducation.my.salesforce-sites.com/help/"
        }, {
            text: "No Due Form",
            link: "/library/assets/downloads/no_dues_form.docx"
        }, {
            text: "Courses Syllabus",
            link: "https://puchd.ac.in/syllabus.php?qstrfacid=5"
        }]
    }, {
        title: "Others",
        description: "Utilize other Links for Research and Study.",
        buttons: [{
            text: "National Digital Library",
            link: "https://ndl.iitkgp.ac.in/"
        }, {
            text: "Plagiarism Checker",
            link: "https://smallseotools.com/plagiarism-checker/"
        }, {
            text: "Grammar Checker",
            link: "https://www.grammarly.com/"
        }, {
            text: "Google Translate",
            link: "https://translate.google.com/?sl=auto&tl=hi&op=translate"
        }, {
            text: "DOAJ Directory",
            link: "https://doaj.org/"
        }, {
            text: "Employement news",
            link: "https://www.employmentnews.gov.in/"
        }, {
            text: "The Hindu",
            link: "https://www.thehindu.com/"
        }, {
            text: "The Times of India",
            link: "https://epaper.indiatimes.com/"
        }, {
            text: "NPTEL",
            link: "https://onlinecourses.nptel.ac.in/"
        }, {
            text: "SWAYAM",
            link: "https://swayam.gov.in/"
        }]
    }];
    return h.jsxs(it, {
        className: "my-5",
        children: [h.jsx(yt, {
            src: "/library/assets/images/library_2.png",
            fluid: !0,
            alt: "Library Resources",
            className: "mb-4",
            style: {
                width: "100%",
                margin: "20px 0",
                borderRadius: "8px",
                height: "500px",
                objectFit: "cover"
            }
        }), h.jsx("h1", {
            className: "text-center mb-4",
            style: {
                fontWeight: "bold"
            },
            children: "Library Resources"
        }), h.jsx("p", {
            className: "text-center mb-5",
            style: {
                color: "#555",
                fontSize: "1.1rem",
                lineHeight: "1.6"
            },
            children: "Explore our extensive collection of resources designed to cater to the academic and research needs of students and faculty."
        }), h.jsx(Ri, {
            defaultActiveKey: "0",
            children: l.map((o, a) => h.jsxs(Ri.Item, {
                eventKey: a.toString(),
                children: [h.jsx(Ri.Header, {
                    children: o.title
                }), h.jsxs(Ri.Body, {
                    children: [h.jsx("p", {
                        style: {
                            color: "#555",
                            fontSize: "1rem",
                            lineHeight: "1.5"
                        },
                        children: o.description
                    }), h.jsx("div", {
                        className: "d-grid gap-2",
                        children: o.buttons.map((s, c) => h.jsx(cl, {
                            variant: "primary",
                            href: s.link,
                            download: s.text === "No Due Form" ? "no_dues_form.docx" : void 0,
                            style: {
                                backgroundColor: "#ffc107",
                                border: "none",
                                borderRadius: "5px"
                            },
                            children: s.text
                        }, c))
                    })]
                })]
            }, a))
        })]
    })
};

function Kv() {
    return h.jsx(Tg, {
        children: h.jsx(_v, {
            children: h.jsxs(lg, {
                children: [h.jsx(In, {
                    path: "/",
                    element: h.jsx(Lv, {})
                }), h.jsx(In, {
                    path: "/about",
                    element: h.jsx(Vv, {})
                }), h.jsx(In, {
                    path: "/information",
                    element: h.jsx(Hv, {})
                }), h.jsx(In, {
                    path: "/resources",
                    element: h.jsx(td, {})
                }), h.jsx(In, {
                    path: "/services",
                    element: h.jsx(Wv, {})
                }), h.jsx(In, {
                    path: "/resources",
                    element: h.jsx(td, {})
                })]
            })
        })
    })
}
pm.createRoot(document.getElementById("root")).render(h.jsx(m.StrictMode, {
    children: h.jsx(Kv, {})
}));