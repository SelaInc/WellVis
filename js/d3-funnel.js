!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("d3")) : "function" == typeof define && define.amd ? define(["d3"], e) : "object" == typeof exports ? exports.D3Funnel = e(require("d3")) : t.D3Funnel = e(t.d3)
}(window, function (t) {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
                return t[e]
            }.bind(null, i));
            return r
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 18)
    }([function (t, e, n) {
        "use strict";
        n.r(e);
        var r = "http://www.w3.org/1999/xhtml", i = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: r,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, o = function (t) {
            var e = t += "", n = e.indexOf(":");
            return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), i.hasOwnProperty(e) ? {
                space: i[e],
                local: t
            } : t
        };
        var a = function (t) {
            var e = o(t);
            return (e.local ? function (t) {
                return function () {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    var e = this.ownerDocument, n = this.namespaceURI;
                    return n === r && e.documentElement.namespaceURI === r ? e.createElement(t) : e.createElementNS(n, t)
                }
            })(e)
        };

        function u() {
        }

        var s = function (t) {
            return null == t ? u : function () {
                return this.querySelector(t)
            }
        };

        function l() {
            return []
        }

        var c = function (t) {
            return null == t ? l : function () {
                return this.querySelectorAll(t)
            }
        }, h = function (t) {
            return function () {
                return this.matches(t)
            }
        };
        if ("undefined" != typeof document) {
            var f = document.documentElement;
            if (!f.matches) {
                var p = f.webkitMatchesSelector || f.msMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector;
                h = function (t) {
                    return function () {
                        return p.call(this, t)
                    }
                }
            }
        }
        var d = h, v = function (t) {
            return new Array(t.length)
        };

        function g(t, e) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
        }

        g.prototype = {
            constructor: g, appendChild: function (t) {
                return this._parent.insertBefore(t, this._next)
            }, insertBefore: function (t, e) {
                return this._parent.insertBefore(t, e)
            }, querySelector: function (t) {
                return this._parent.querySelector(t)
            }, querySelectorAll: function (t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var y = "$";

        function m(t, e, n, r, i, o) {
            for (var a, u = 0, s = e.length, l = o.length; u < l; ++u) (a = e[u]) ? (a.__data__ = o[u], r[u] = a) : n[u] = new g(t, o[u]);
            for (; u < s; ++u) (a = e[u]) && (i[u] = a)
        }

        function b(t, e, n, r, i, o, a) {
            var u, s, l, c = {}, h = e.length, f = o.length, p = new Array(h);
            for (u = 0; u < h; ++u) (s = e[u]) && (p[u] = l = y + a.call(s, s.__data__, u, e), l in c ? i[u] = s : c[l] = s);
            for (u = 0; u < f; ++u) (s = c[l = y + a.call(t, o[u], u, o)]) ? (r[u] = s, s.__data__ = o[u], c[l] = null) : n[u] = new g(t, o[u]);
            for (u = 0; u < h; ++u) (s = e[u]) && c[p[u]] === s && (i[u] = s)
        }

        function w(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }

        var _ = function (t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        };

        function k(t, e) {
            return t.style.getPropertyValue(e) || _(t).getComputedStyle(t, null).getPropertyValue(e)
        }

        function x(t) {
            return t.trim().split(/^|\s+/)
        }

        function M(t) {
            return t.classList || new A(t)
        }

        function A(t) {
            this._node = t, this._names = x(t.getAttribute("class") || "")
        }

        function E(t, e) {
            for (var n = M(t), r = -1, i = e.length; ++r < i;) n.add(e[r])
        }

        function O(t, e) {
            for (var n = M(t), r = -1, i = e.length; ++r < i;) n.remove(e[r])
        }

        A.prototype = {
            add: function (t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            }, remove: function (t) {
                var e = this._names.indexOf(t);
                e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
            }, contains: function (t) {
                return this._names.indexOf(t) >= 0
            }
        };

        function P() {
            this.textContent = ""
        }

        function N() {
            this.innerHTML = ""
        }

        function S() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function C() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function j() {
            return null
        }

        function L() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function T() {
            return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
        }

        function B() {
            return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
        }

        var I = {}, D = null;
        "undefined" != typeof document && ("onmouseenter" in document.documentElement || (I = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));

        function H(t, e, n) {
            return t = z(t, e, n), function (e) {
                var n = e.relatedTarget;
                n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
            }
        }

        function z(t, e, n) {
            return function (r) {
                var i = D;
                D = r;
                try {
                    t.call(this, this.__data__, e, n)
                } finally {
                    D = i
                }
            }
        }

        function F(t) {
            return function () {
                var e = this.__on;
                if (e) {
                    for (var n, r = 0, i = -1, o = e.length; r < o; ++r) n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
                    ++i ? e.length = i : delete this.__on
                }
            }
        }

        function X(t, e, n) {
            var r = I.hasOwnProperty(t.type) ? H : z;
            return function (i, o, a) {
                var u, s = this.__on, l = r(e, o, a);
                if (s) for (var c = 0, h = s.length; c < h; ++c) if ((u = s[c]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = l, u.capture = n), void(u.value = e);
                this.addEventListener(t.type, l, n), u = {
                    type: t.type,
                    name: t.name,
                    value: e,
                    listener: l,
                    capture: n
                }, s ? s.push(u) : this.__on = [u]
            }
        }

        function R(t, e, n, r) {
            var i = D;
            t.sourceEvent = D, D = t;
            try {
                return e.apply(n, r)
            } finally {
                D = i
            }
        }

        function q(t, e, n) {
            var r = _(t), i = r.CustomEvent;
            "function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i)
        }

        var V = [null];

        function Y(t, e) {
            this._groups = t, this._parents = e
        }

        function Q() {
            return new Y([[document.documentElement]], V)
        }

        Y.prototype = Q.prototype = {
            constructor: Y, select: function (t) {
                "function" != typeof t && (t = s(t));
                for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var o, a, u = e[i], l = u.length, c = r[i] = new Array(l), h = 0; h < l; ++h) (o = u[h]) && (a = t.call(o, o.__data__, h, u)) && ("__data__" in o && (a.__data__ = o.__data__), c[h] = a);
                return new Y(r, this._parents)
            }, selectAll: function (t) {
                "function" != typeof t && (t = c(t));
                for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o) for (var a, u = e[o], s = u.length, l = 0; l < s; ++l) (a = u[l]) && (r.push(t.call(a, a.__data__, l, u)), i.push(a));
                return new Y(r, i)
            }, filter: function (t) {
                "function" != typeof t && (t = d(t));
                for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var o, a = e[i], u = a.length, s = r[i] = [], l = 0; l < u; ++l) (o = a[l]) && t.call(o, o.__data__, l, a) && s.push(o);
                return new Y(r, this._parents)
            }, data: function (t, e) {
                if (!t) return p = new Array(this.size()), l = -1, this.each(function (t) {
                    p[++l] = t
                }), p;
                var n = e ? b : m, r = this._parents, i = this._groups;
                "function" != typeof t && (t = function (t) {
                    return function () {
                        return t
                    }
                }(t));
                for (var o = i.length, a = new Array(o), u = new Array(o), s = new Array(o), l = 0; l < o; ++l) {
                    var c = r[l], h = i[l], f = h.length, p = t.call(c, c && c.__data__, l, r), d = p.length,
                        v = u[l] = new Array(d), g = a[l] = new Array(d);
                    n(c, h, v, g, s[l] = new Array(f), p, e);
                    for (var y, w, _ = 0, k = 0; _ < d; ++_) if (y = v[_]) {
                        for (_ >= k && (k = _ + 1); !(w = g[k]) && ++k < d;) ;
                        y._next = w || null
                    }
                }
                return (a = new Y(a, r))._enter = u, a._exit = s, a
            }, enter: function () {
                return new Y(this._enter || this._groups.map(v), this._parents)
            }, exit: function () {
                return new Y(this._exit || this._groups.map(v), this._parents)
            }, merge: function (t) {
                for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) for (var s, l = e[u], c = n[u], h = l.length, f = a[u] = new Array(h), p = 0; p < h; ++p) (s = l[p] || c[p]) && (f[p] = s);
                for (; u < r; ++u) a[u] = e[u];
                return new Y(a, this._parents)
            }, order: function () {
                for (var t = this._groups, e = -1, n = t.length; ++e < n;) for (var r, i = t[e], o = i.length - 1, a = i[o]; --o >= 0;) (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
                return this
            }, sort: function (t) {
                function e(e, n) {
                    return e && n ? t(e.__data__, n.__data__) : !e - !n
                }

                t || (t = w);
                for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var a, u = n[o], s = u.length, l = i[o] = new Array(s), c = 0; c < s; ++c) (a = u[c]) && (l[c] = a);
                    l.sort(e)
                }
                return new Y(i, this._parents).order()
            }, call: function () {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            }, nodes: function () {
                var t = new Array(this.size()), e = -1;
                return this.each(function () {
                    t[++e] = this
                }), t
            }, node: function () {
                for (var t = this._groups, e = 0, n = t.length; e < n; ++e) for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
                    var a = r[i];
                    if (a) return a
                }
                return null
            }, size: function () {
                var t = 0;
                return this.each(function () {
                    ++t
                }), t
            }, empty: function () {
                return !this.node()
            }, each: function (t) {
                for (var e = this._groups, n = 0, r = e.length; n < r; ++n) for (var i, o = e[n], a = 0, u = o.length; a < u; ++a) (i = o[a]) && t.call(i, i.__data__, a, o);
                return this
            }, attr: function (t, e) {
                var n = o(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
                }
                return this.each((null == e ? n.local ? function (t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function (t) {
                    return function () {
                        this.removeAttribute(t)
                    }
                } : "function" == typeof e ? n.local ? function (t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
                    }
                } : function (t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
                    }
                } : n.local ? function (t, e) {
                    return function () {
                        this.setAttributeNS(t.space, t.local, e)
                    }
                } : function (t, e) {
                    return function () {
                        this.setAttribute(t, e)
                    }
                })(n, e))
            }, style: function (t, e, n) {
                return arguments.length > 1 ? this.each((null == e ? function (t) {
                    return function () {
                        this.style.removeProperty(t)
                    }
                } : "function" == typeof e ? function (t, e, n) {
                    return function () {
                        var r = e.apply(this, arguments);
                        null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
                    }
                } : function (t, e, n) {
                    return function () {
                        this.style.setProperty(t, e, n)
                    }
                })(t, e, null == n ? "" : n)) : k(this.node(), t)
            }, property: function (t, e) {
                return arguments.length > 1 ? this.each((null == e ? function (t) {
                    return function () {
                        delete this[t]
                    }
                } : "function" == typeof e ? function (t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? delete this[t] : this[t] = n
                    }
                } : function (t, e) {
                    return function () {
                        this[t] = e
                    }
                })(t, e)) : this.node()[t]
            }, classed: function (t, e) {
                var n = x(t + "");
                if (arguments.length < 2) {
                    for (var r = M(this.node()), i = -1, o = n.length; ++i < o;) if (!r.contains(n[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof e ? function (t, e) {
                    return function () {
                        (e.apply(this, arguments) ? E : O)(this, t)
                    }
                } : e ? function (t) {
                    return function () {
                        E(this, t)
                    }
                } : function (t) {
                    return function () {
                        O(this, t)
                    }
                })(n, e))
            }, text: function (t) {
                return arguments.length ? this.each(null == t ? P : ("function" == typeof t ? function (t) {
                    return function () {
                        var e = t.apply(this, arguments);
                        this.textContent = null == e ? "" : e
                    }
                } : function (t) {
                    return function () {
                        this.textContent = t
                    }
                })(t)) : this.node().textContent
            }, html: function (t) {
                return arguments.length ? this.each(null == t ? N : ("function" == typeof t ? function (t) {
                    return function () {
                        var e = t.apply(this, arguments);
                        this.innerHTML = null == e ? "" : e
                    }
                } : function (t) {
                    return function () {
                        this.innerHTML = t
                    }
                })(t)) : this.node().innerHTML
            }, raise: function () {
                return this.each(S)
            }, lower: function () {
                return this.each(C)
            }, append: function (t) {
                var e = "function" == typeof t ? t : a(t);
                return this.select(function () {
                    return this.appendChild(e.apply(this, arguments))
                })
            }, insert: function (t, e) {
                var n = "function" == typeof t ? t : a(t), r = null == e ? j : "function" == typeof e ? e : s(e);
                return this.select(function () {
                    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
                })
            }, remove: function () {
                return this.each(L)
            }, clone: function (t) {
                return this.select(t ? B : T)
            }, datum: function (t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            }, on: function (t, e, n) {
                var r, i, o = function (t) {
                    return t.trim().split(/^|\s+/).map(function (t) {
                        var e = "", n = t.indexOf(".");
                        return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {type: t, name: e}
                    })
                }(t + ""), a = o.length;
                if (!(arguments.length < 2)) {
                    for (u = e ? X : F, null == n && (n = !1), r = 0; r < a; ++r) this.each(u(o[r], e, n));
                    return this
                }
                var u = this.node().__on;
                if (u) for (var s, l = 0, c = u.length; l < c; ++l) for (r = 0, s = u[l]; r < a; ++r) if ((i = o[r]).type === s.type && i.name === s.name) return s.value
            }, dispatch: function (t, e) {
                return this.each(("function" == typeof e ? function (t, e) {
                    return function () {
                        return q(this, t, e.apply(this, arguments))
                    }
                } : function (t, e) {
                    return function () {
                        return q(this, t, e)
                    }
                })(t, e))
            }
        };
        var G = Q, $ = function (t) {
            return "string" == typeof t ? new Y([[document.querySelector(t)]], [document.documentElement]) : new Y([[t]], V)
        }, W = function (t) {
            return $(a(t).call(document.documentElement))
        }, U = 0;

        function J() {
            return new K
        }

        function K() {
            this._ = "@" + (++U).toString(36)
        }

        K.prototype = J.prototype = {
            constructor: K, get: function (t) {
                for (var e = this._; !(e in t);) if (!(t = t.parentNode)) return;
                return t[e]
            }, set: function (t, e) {
                return t[this._] = e
            }, remove: function (t) {
                return this._ in t && delete t[this._]
            }, toString: function () {
                return this._
            }
        };
        var Z = function () {
            for (var t, e = D; t = e.sourceEvent;) e = t;
            return e
        }, tt = function (t, e) {
            var n = t.ownerSVGElement || t;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
        }, et = function (t) {
            var e = Z();
            return e.changedTouches && (e = e.changedTouches[0]), tt(t, e)
        }, nt = function (t) {
            return "string" == typeof t ? new Y([document.querySelectorAll(t)], [document.documentElement]) : new Y([null == t ? [] : t], V)
        }, rt = function (t, e, n) {
            arguments.length < 3 && (n = e, e = Z().changedTouches);
            for (var r, i = 0, o = e ? e.length : 0; i < o; ++i) if ((r = e[i]).identifier === n) return tt(t, r);
            return null
        }, it = function (t, e) {
            null == e && (e = Z().touches);
            for (var n = 0, r = e ? e.length : 0, i = new Array(r); n < r; ++n) i[n] = tt(t, e[n]);
            return i
        };
        n.d(e, "create", function () {
            return W
        }), n.d(e, "creator", function () {
            return a
        }), n.d(e, "local", function () {
            return J
        }), n.d(e, "matcher", function () {
            return d
        }), n.d(e, "mouse", function () {
            return et
        }), n.d(e, "namespace", function () {
            return o
        }), n.d(e, "namespaces", function () {
            return i
        }), n.d(e, "clientPoint", function () {
            return tt
        }), n.d(e, "select", function () {
            return $
        }), n.d(e, "selectAll", function () {
            return nt
        }), n.d(e, "selection", function () {
            return G
        }), n.d(e, "selector", function () {
            return s
        }), n.d(e, "selectorAll", function () {
            return c
        }), n.d(e, "style", function () {
            return k
        }), n.d(e, "touch", function () {
            return rt
        }), n.d(e, "touches", function () {
            return it
        }), n.d(e, "window", function () {
            return _
        }), n.d(e, "event", function () {
            return D
        }), n.d(e, "customEvent", function () {
            return R
        })
    }, function (t, e, n) {
        "use strict";
        var r, i, o, a = n(14), u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

        function s() {
            o = !1
        }

        function l(t) {
            if (t) {
                if (t !== r) {
                    if (t.length !== u.length) throw new Error("Custom alphabet for shortid must be " + u.length + " unique characters. You submitted " + t.length + " characters: " + t);
                    var e = t.split("").filter(function (t, e, n) {
                        return e !== n.lastIndexOf(t)
                    });
                    if (e.length) throw new Error("Custom alphabet for shortid must be " + u.length + " unique characters. These characters were not unique: " + e.join(", "));
                    r = t, s()
                }
            } else r !== u && (r = u, s())
        }

        function c() {
            return o || (o = function () {
                r || l(u);
                for (var t, e = r.split(""), n = [], i = a.nextValue(); e.length > 0;) i = a.nextValue(), t = Math.floor(i * e.length), n.push(e.splice(t, 1)[0]);
                return n.join("")
            }())
        }

        t.exports = {
            characters: function (t) {
                return l(t), r
            }, seed: function (t) {
                a.seed(t), i !== t && (s(), i = t)
            }, lookup: function (t) {
                return c()[t]
            }, shuffled: c
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(13);
        t.exports = function (t, e) {
            for (var n, i = 0, o = ""; !n;) o += t(e >> 4 * i & 15 | r()), n = e < Math.pow(16, i + 1), i++;
            return o
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0), i = {
            value: function () {
            }
        };

        function o() {
            for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
                if (!(t = arguments[e] + "") || t in r) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new a(r)
        }

        function a(t) {
            this._ = t
        }

        function u(t, e) {
            for (var n, r = 0, i = t.length; r < i; ++r) if ((n = t[r]).name === e) return n.value
        }

        function s(t, e, n) {
            for (var r = 0, o = t.length; r < o; ++r) if (t[r].name === e) {
                t[r] = i, t = t.slice(0, r).concat(t.slice(r + 1));
                break
            }
            return null != n && t.push({name: e, value: n}), t
        }

        a.prototype = o.prototype = {
            constructor: a, on: function (t, e) {
                var n, r = this._, i = function (t, e) {
                    return t.trim().split(/^|\s+/).map(function (t) {
                        var n = "", r = t.indexOf(".");
                        if (r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        return {type: t, name: n}
                    })
                }(t + "", r), o = -1, a = i.length;
                if (!(arguments.length < 2)) {
                    if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                    for (; ++o < a;) if (n = (t = i[o]).type) r[n] = s(r[n], t.name, e); else if (null == e) for (n in r) r[n] = s(r[n], t.name, null);
                    return this
                }
                for (; ++o < a;) if ((n = (t = i[o]).type) && (n = u(r[n], t.name))) return n
            }, copy: function () {
                var t = {}, e = this._;
                for (var n in e) t[n] = e[n].slice();
                return new a(t)
            }, call: function (t, e) {
                if ((n = arguments.length - 2) > 0) for (var n, r, i = new Array(n), o = 0; o < n; ++o) i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (o = 0, n = (r = this._[t]).length; o < n; ++o) r[o].value.apply(e, i)
            }, apply: function (t, e, n) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n)
            }
        };
        var l, c, h = o, f = 0, p = 0, d = 0, v = 1e3, g = 0, y = 0, m = 0,
            b = "object" == typeof performance && performance.now ? performance : Date,
            w = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
                setTimeout(t, 17)
            };

        function _() {
            return y || (w(k), y = b.now() + m)
        }

        function k() {
            y = 0
        }

        function x() {
            this._call = this._time = this._next = null
        }

        function M(t, e, n) {
            var r = new x;
            return r.restart(t, e, n), r
        }

        function A() {
            y = (g = b.now()) + m, f = p = 0;
            try {
                !function () {
                    _(), ++f;
                    for (var t, e = l; e;) (t = y - e._time) >= 0 && e._call.call(null, t), e = e._next;
                    --f
                }()
            } finally {
                f = 0, function () {
                    var t, e, n = l, r = 1 / 0;
                    for (; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : l = e);
                    c = t, O(r)
                }(), y = 0
            }
        }

        function E() {
            var t = b.now(), e = t - g;
            e > v && (m -= e, g = t)
        }

        function O(t) {
            f || (p && (p = clearTimeout(p)), t - y > 24 ? (t < 1 / 0 && (p = setTimeout(A, t - b.now() - m)), d && (d = clearInterval(d))) : (d || (g = b.now(), d = setInterval(E, v)), f = 1, w(A)))
        }

        x.prototype = M.prototype = {
            constructor: x, restart: function (t, e, n) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                n = (null == n ? _() : +n) + (null == e ? 0 : +e), this._next || c === this || (c ? c._next = this : l = this, c = this), this._call = t, this._time = n, O()
            }, stop: function () {
                this._call && (this._call = null, this._time = 1 / 0, O())
            }
        };
        var P = function (t, e, n) {
                var r = new x;
                return e = null == e ? 0 : +e, r.restart(function (n) {
                    r.stop(), t(n + e)
                }, e, n), r
            }, N = h("start", "end", "interrupt"), S = [], C = 0, j = 1, L = 2, T = 3, B = 4, I = 5, D = 6,
            H = function (t, e, n, r, i, o) {
                var a = t.__transition;
                if (a) {
                    if (n in a) return
                } else t.__transition = {};
                !function (t, e, n) {
                    var r, i = t.__transition;

                    function o(s) {
                        var l, c, h, f;
                        if (n.state !== j) return u();
                        for (l in i) if ((f = i[l]).name === n.name) {
                            if (f.state === T) return P(o);
                            f.state === B ? (f.state = D, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[l]) : +l < e && (f.state = D, f.timer.stop(), delete i[l])
                        }
                        if (P(function () {
                                n.state === T && (n.state = B, n.timer.restart(a, n.delay, n.time), a(s))
                            }), n.state = L, n.on.call("start", t, t.__data__, n.index, n.group), n.state === L) {
                            for (n.state = T, r = new Array(h = n.tween.length), l = 0, c = -1; l < h; ++l) (f = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (r[++c] = f);
                            r.length = c + 1
                        }
                    }

                    function a(e) {
                        for (var i = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(u), n.state = I, 1), o = -1, a = r.length; ++o < a;) r[o].call(null, i);
                        n.state === I && (n.on.call("end", t, t.__data__, n.index, n.group), u())
                    }

                    function u() {
                        for (var r in n.state = D, n.timer.stop(), delete i[e], i) return;
                        delete t.__transition
                    }

                    i[e] = n, n.timer = M(function (t) {
                        n.state = j, n.timer.restart(o, n.delay, n.time), n.delay <= t && o(t - n.delay)
                    }, 0, n.time)
                }(t, n, {
                    name: e,
                    index: r,
                    group: i,
                    on: N,
                    tween: S,
                    time: o.time,
                    delay: o.delay,
                    duration: o.duration,
                    ease: o.ease,
                    timer: null,
                    state: C
                })
            };

        function z(t, e) {
            var n = X(t, e);
            if (n.state > C) throw new Error("too late; already scheduled");
            return n
        }

        function F(t, e) {
            var n = X(t, e);
            if (n.state > L) throw new Error("too late; already started");
            return n
        }

        function X(t, e) {
            var n = t.__transition;
            if (!n || !(n = n[e])) throw new Error("transition not found");
            return n
        }

        var R = function (t, e, n) {
            t.prototype = e.prototype = n, n.constructor = t
        };

        function q(t, e) {
            var n = Object.create(t.prototype);
            for (var r in e) n[r] = e[r];
            return n
        }

        function V() {
        }

        var Y = "\\s*([+-]?\\d+)\\s*", Q = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            G = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $ = /^#([0-9a-f]{3})$/, W = /^#([0-9a-f]{6})$/,
            U = new RegExp("^rgb\\(" + [Y, Y, Y] + "\\)$"), J = new RegExp("^rgb\\(" + [G, G, G] + "\\)$"),
            K = new RegExp("^rgba\\(" + [Y, Y, Y, Q] + "\\)$"), Z = new RegExp("^rgba\\(" + [G, G, G, Q] + "\\)$"),
            tt = new RegExp("^hsl\\(" + [Q, G, G] + "\\)$"), et = new RegExp("^hsla\\(" + [Q, G, G, Q] + "\\)$"), nt = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function rt(t) {
            var e;
            return t = (t + "").trim().toLowerCase(), (e = $.exec(t)) ? new st((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = W.exec(t)) ? it(parseInt(e[1], 16)) : (e = U.exec(t)) ? new st(e[1], e[2], e[3], 1) : (e = J.exec(t)) ? new st(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = K.exec(t)) ? ot(e[1], e[2], e[3], e[4]) : (e = Z.exec(t)) ? ot(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = tt.exec(t)) ? ct(e[1], e[2] / 100, e[3] / 100, 1) : (e = et.exec(t)) ? ct(e[1], e[2] / 100, e[3] / 100, e[4]) : nt.hasOwnProperty(t) ? it(nt[t]) : "transparent" === t ? new st(NaN, NaN, NaN, 0) : null
        }

        function it(t) {
            return new st(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function ot(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN), new st(t, e, n, r)
        }

        function at(t) {
            return t instanceof V || (t = rt(t)), t ? new st((t = t.rgb()).r, t.g, t.b, t.opacity) : new st
        }

        function ut(t, e, n, r) {
            return 1 === arguments.length ? at(t) : new st(t, e, n, null == r ? 1 : r)
        }

        function st(t, e, n, r) {
            this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
        }

        function lt(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function ct(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new ft(t, e, n, r)
        }

        function ht(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
                if (t instanceof ft) return new ft(t.h, t.s, t.l, t.opacity);
                if (t instanceof V || (t = rt(t)), !t) return new ft;
                if (t instanceof ft) return t;
                var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r),
                    o = Math.max(e, n, r), a = NaN, u = o - i, s = (o + i) / 2;
                return u ? (a = e === o ? (n - r) / u + 6 * (n < r) : n === o ? (r - e) / u + 2 : (e - n) / u + 4, u /= s < .5 ? o + i : 2 - o - i, a *= 60) : u = s > 0 && s < 1 ? 0 : a, new ft(a, u, s, t.opacity)
            }(t) : new ft(t, e, n, null == r ? 1 : r)
        }

        function ft(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }

        function pt(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
        }

        R(V, rt, {
            displayable: function () {
                return this.rgb().displayable()
            }, hex: function () {
                return this.rgb().hex()
            }, toString: function () {
                return this.rgb() + ""
            }
        }), R(st, ut, q(V, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new st(this.r * t, this.g * t, this.b * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new st(this.r * t, this.g * t, this.b * t, this.opacity)
            }, rgb: function () {
                return this
            }, displayable: function () {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            }, hex: function () {
                return "#" + lt(this.r) + lt(this.g) + lt(this.b)
            }, toString: function () {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), R(ft, ht, q(V, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new ft(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new ft(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l,
                    r = n + (n < .5 ? n : 1 - n) * e, i = 2 * n - r;
                return new st(pt(t >= 240 ? t - 240 : t + 120, i, r), pt(t, i, r), pt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            }, displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var dt = Math.PI / 180, vt = 180 / Math.PI, gt = .96422, yt = 1, mt = .82521, bt = 4 / 29, wt = 6 / 29,
            _t = 3 * wt * wt, kt = wt * wt * wt;

        function xt(t) {
            if (t instanceof At) return new At(t.l, t.a, t.b, t.opacity);
            if (t instanceof jt) {
                if (isNaN(t.h)) return new At(t.l, 0, 0, t.opacity);
                var e = t.h * dt;
                return new At(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
            }
            t instanceof st || (t = at(t));
            var n, r, i = Nt(t.r), o = Nt(t.g), a = Nt(t.b), u = Et((.2225045 * i + .7168786 * o + .0606169 * a) / yt);
            return i === o && o === a ? n = r = u : (n = Et((.4360747 * i + .3850649 * o + .1430804 * a) / gt), r = Et((.0139322 * i + .0971045 * o + .7141733 * a) / mt)), new At(116 * u - 16, 500 * (n - u), 200 * (u - r), t.opacity)
        }

        function Mt(t, e, n, r) {
            return 1 === arguments.length ? xt(t) : new At(t, e, n, null == r ? 1 : r)
        }

        function At(t, e, n, r) {
            this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
        }

        function Et(t) {
            return t > kt ? Math.pow(t, 1 / 3) : t / _t + bt
        }

        function Ot(t) {
            return t > wt ? t * t * t : _t * (t - bt)
        }

        function Pt(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function Nt(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function St(t) {
            if (t instanceof jt) return new jt(t.h, t.c, t.l, t.opacity);
            if (t instanceof At || (t = xt(t)), 0 === t.a && 0 === t.b) return new jt(NaN, 0, t.l, t.opacity);
            var e = Math.atan2(t.b, t.a) * vt;
            return new jt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function Ct(t, e, n, r) {
            return 1 === arguments.length ? St(t) : new jt(t, e, n, null == r ? 1 : r)
        }

        function jt(t, e, n, r) {
            this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
        }

        R(At, Mt, q(V, {
            brighter: function (t) {
                return new At(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, darker: function (t) {
                return new At(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, rgb: function () {
                var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500,
                    n = isNaN(this.b) ? t : t - this.b / 200;
                return new st(Pt(3.1338561 * (e = gt * Ot(e)) - 1.6168667 * (t = yt * Ot(t)) - .4906146 * (n = mt * Ot(n))), Pt(-.9787684 * e + 1.9161415 * t + .033454 * n), Pt(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
            }
        })), R(jt, Ct, q(V, {
            brighter: function (t) {
                return new jt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            }, darker: function (t) {
                return new jt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            }, rgb: function () {
                return xt(this).rgb()
            }
        }));
        var Lt = -.14861, Tt = 1.78277, Bt = -.29227, It = -.90649, Dt = 1.97294, Ht = Dt * It, zt = Dt * Tt,
            Ft = Tt * Bt - It * Lt;

        function Xt(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
                if (t instanceof Rt) return new Rt(t.h, t.s, t.l, t.opacity);
                t instanceof st || (t = at(t));
                var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = (Ft * r + Ht * e - zt * n) / (Ft + Ht - zt),
                    o = r - i, a = (Dt * (n - i) - Bt * o) / It, u = Math.sqrt(a * a + o * o) / (Dt * i * (1 - i)),
                    s = u ? Math.atan2(a, o) * vt - 120 : NaN;
                return new Rt(s < 0 ? s + 360 : s, u, i, t.opacity)
            }(t) : new Rt(t, e, n, null == r ? 1 : r)
        }

        function Rt(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }

        function qt(t, e, n, r, i) {
            var o = t * t, a = o * t;
            return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
        }

        R(Rt, Xt, q(V, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Rt(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Rt(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * dt, e = +this.l,
                    n = isNaN(this.s) ? 0 : this.s * e * (1 - e), r = Math.cos(t), i = Math.sin(t);
                return new st(255 * (e + n * (Lt * r + Tt * i)), 255 * (e + n * (Bt * r + It * i)), 255 * (e + n * (Dt * r)), this.opacity)
            }
        }));
        var Vt = function (t) {
            return function () {
                return t
            }
        };

        function Yt(t, e) {
            return function (n) {
                return t + n * e
            }
        }

        function Qt(t, e) {
            var n = e - t;
            return n ? Yt(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Vt(isNaN(t) ? e : t)
        }

        function Gt(t) {
            return 1 == (t = +t) ? $t : function (e, n) {
                return n - e ? function (t, e, n) {
                    return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
                        return Math.pow(t + r * e, n)
                    }
                }(e, n, t) : Vt(isNaN(e) ? n : e)
            }
        }

        function $t(t, e) {
            var n = e - t;
            return n ? Yt(t, n) : Vt(isNaN(t) ? e : t)
        }

        var Wt = function t(e) {
            var n = Gt(e);

            function r(t, e) {
                var r = n((t = ut(t)).r, (e = ut(e)).r), i = n(t.g, e.g), o = n(t.b, e.b), a = $t(t.opacity, e.opacity);
                return function (e) {
                    return t.r = r(e), t.g = i(e), t.b = o(e), t.opacity = a(e), t + ""
                }
            }

            return r.gamma = t, r
        }(1);

        function Ut(t) {
            return function (e) {
                var n, r, i = e.length, o = new Array(i), a = new Array(i), u = new Array(i);
                for (n = 0; n < i; ++n) r = ut(e[n]), o[n] = r.r || 0, a[n] = r.g || 0, u[n] = r.b || 0;
                return o = t(o), a = t(a), u = t(u), r.opacity = 1, function (t) {
                    return r.r = o(t), r.g = a(t), r.b = u(t), r + ""
                }
            }
        }

        Ut(function (t) {
            var e = t.length - 1;
            return function (n) {
                var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), i = t[r], o = t[r + 1],
                    a = r > 0 ? t[r - 1] : 2 * i - o, u = r < e - 1 ? t[r + 2] : 2 * o - i;
                return qt((n - r / e) * e, a, i, o, u)
            }
        }), Ut(function (t) {
            var e = t.length;
            return function (n) {
                var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e), i = t[(r + e - 1) % e], o = t[r % e],
                    a = t[(r + 1) % e], u = t[(r + 2) % e];
                return qt((n - r / e) * e, i, o, a, u)
            }
        });
        var Jt = function (t, e) {
            return e -= t = +t, function (n) {
                return t + e * n
            }
        }, Kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Zt = new RegExp(Kt.source, "g");
        var te, ee, ne, re, ie = function (t, e) {
                var n, r, i, o = Kt.lastIndex = Zt.lastIndex = 0, a = -1, u = [], s = [];
                for (t += "", e += ""; (n = Kt.exec(t)) && (r = Zt.exec(e));) (i = r.index) > o && (i = e.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (n = n[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, s.push({
                    i: a,
                    x: Jt(n, r)
                })), o = Zt.lastIndex;
                return o < e.length && (i = e.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? s[0] ? function (t) {
                    return function (e) {
                        return t(e) + ""
                    }
                }(s[0].x) : function (t) {
                    return function () {
                        return t
                    }
                }(e) : (e = s.length, function (t) {
                    for (var n, r = 0; r < e; ++r) u[(n = s[r]).i] = n.x(t);
                    return u.join("")
                })
            }, oe = 180 / Math.PI, ae = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1},
            ue = function (t, e, n, r, i, o) {
                var a, u, s;
                return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (s = t * n + e * r) && (n -= t * s, r -= e * s), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, s /= u), t * r < e * n && (t = -t, e = -e, s = -s, a = -a), {
                    translateX: i,
                    translateY: o,
                    rotate: Math.atan2(e, t) * oe,
                    skewX: Math.atan(s) * oe,
                    scaleX: a,
                    scaleY: u
                }
            };

        function se(t, e, n, r) {
            function i(t) {
                return t.length ? t.pop() + " " : ""
            }

            return function (o, a) {
                var u = [], s = [];
                return o = t(o), a = t(a), function (t, r, i, o, a, u) {
                    if (t !== i || r !== o) {
                        var s = a.push("translate(", null, e, null, n);
                        u.push({i: s - 4, x: Jt(t, i)}, {i: s - 2, x: Jt(r, o)})
                    } else (i || o) && a.push("translate(" + i + e + o + n)
                }(o.translateX, o.translateY, a.translateX, a.translateY, u, s), function (t, e, n, o) {
                    t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), o.push({
                        i: n.push(i(n) + "rotate(", null, r) - 2,
                        x: Jt(t, e)
                    })) : e && n.push(i(n) + "rotate(" + e + r)
                }(o.rotate, a.rotate, u, s), function (t, e, n, o) {
                    t !== e ? o.push({
                        i: n.push(i(n) + "skewX(", null, r) - 2,
                        x: Jt(t, e)
                    }) : e && n.push(i(n) + "skewX(" + e + r)
                }(o.skewX, a.skewX, u, s), function (t, e, n, r, o, a) {
                    if (t !== n || e !== r) {
                        var u = o.push(i(o) + "scale(", null, ",", null, ")");
                        a.push({i: u - 4, x: Jt(t, n)}, {i: u - 2, x: Jt(e, r)})
                    } else 1 === n && 1 === r || o.push(i(o) + "scale(" + n + "," + r + ")")
                }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s), o = a = null, function (t) {
                    for (var e, n = -1, r = s.length; ++n < r;) u[(e = s[n]).i] = e.x(t);
                    return u.join("")
                }
            }
        }

        var le = se(function (t) {
            return "none" === t ? ae : (te || (te = document.createElement("DIV"), ee = document.documentElement, ne = document.defaultView), te.style.transform = t, t = ne.getComputedStyle(ee.appendChild(te), null).getPropertyValue("transform"), ee.removeChild(te), t = t.slice(7, -1).split(","), ue(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }, "px, ", "px)", "deg)"), ce = se(function (t) {
            return null == t ? ae : (re || (re = document.createElementNS("http://www.w3.org/2000/svg", "g")), re.setAttribute("transform", t), (t = re.transform.baseVal.consolidate()) ? (t = t.matrix, ue(t.a, t.b, t.c, t.d, t.e, t.f)) : ae)
        }, ", ", ")", ")");
        Math.SQRT2;

        function he(t) {
            return function (e, n) {
                var r = t((e = ht(e)).h, (n = ht(n)).h), i = $t(e.s, n.s), o = $t(e.l, n.l),
                    a = $t(e.opacity, n.opacity);
                return function (t) {
                    return e.h = r(t), e.s = i(t), e.l = o(t), e.opacity = a(t), e + ""
                }
            }
        }

        he(Qt), he($t);

        function fe(t) {
            return function (e, n) {
                var r = t((e = Ct(e)).h, (n = Ct(n)).h), i = $t(e.c, n.c), o = $t(e.l, n.l),
                    a = $t(e.opacity, n.opacity);
                return function (t) {
                    return e.h = r(t), e.c = i(t), e.l = o(t), e.opacity = a(t), e + ""
                }
            }
        }

        fe(Qt), fe($t);

        function pe(t) {
            return function e(n) {
                function r(e, r) {
                    var i = t((e = Xt(e)).h, (r = Xt(r)).h), o = $t(e.s, r.s), a = $t(e.l, r.l),
                        u = $t(e.opacity, r.opacity);
                    return function (t) {
                        return e.h = i(t), e.s = o(t), e.l = a(Math.pow(t, n)), e.opacity = u(t), e + ""
                    }
                }

                return n = +n, r.gamma = e, r
            }(1)
        }

        pe(Qt), pe($t);

        function de(t, e, n) {
            var r = t._id;
            return t.each(function () {
                var t = F(this, r);
                (t.value || (t.value = {}))[e] = n.apply(this, arguments)
            }), function (t) {
                return X(t, r).value[e]
            }
        }

        var ve = function (t, e) {
            var n;
            return ("number" == typeof e ? Jt : e instanceof rt ? Wt : (n = rt(e)) ? (e = n, Wt) : ie)(t, e)
        };
        var ge = r.selection.prototype.constructor;
        var ye = 0;

        function me(t, e, n, r) {
            this._groups = t, this._parents = e, this._name = n, this._id = r
        }

        function be(t) {
            return Object(r.selection)().transition(t)
        }

        function we() {
            return ++ye
        }

        var _e = r.selection.prototype;
        me.prototype = be.prototype = {
            constructor: me,
            select: function (t) {
                var e = this._name, n = this._id;
                "function" != typeof t && (t = Object(r.selector)(t));
                for (var i = this._groups, o = i.length, a = new Array(o), u = 0; u < o; ++u) for (var s, l, c = i[u], h = c.length, f = a[u] = new Array(h), p = 0; p < h; ++p) (s = c[p]) && (l = t.call(s, s.__data__, p, c)) && ("__data__" in s && (l.__data__ = s.__data__), f[p] = l, H(f[p], e, n, p, f, X(s, n)));
                return new me(a, this._parents, e, n)
            },
            selectAll: function (t) {
                var e = this._name, n = this._id;
                "function" != typeof t && (t = Object(r.selectorAll)(t));
                for (var i = this._groups, o = i.length, a = [], u = [], s = 0; s < o; ++s) for (var l, c = i[s], h = c.length, f = 0; f < h; ++f) if (l = c[f]) {
                    for (var p, d = t.call(l, l.__data__, f, c), v = X(l, n), g = 0, y = d.length; g < y; ++g) (p = d[g]) && H(p, e, n, g, d, v);
                    a.push(d), u.push(l)
                }
                return new me(a, u, e, n)
            },
            filter: function (t) {
                "function" != typeof t && (t = Object(r.matcher)(t));
                for (var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o) for (var a, u = e[o], s = u.length, l = i[o] = [], c = 0; c < s; ++c) (a = u[c]) && t.call(a, a.__data__, c, u) && l.push(a);
                return new me(i, this._parents, this._name, this._id)
            },
            merge: function (t) {
                if (t._id !== this._id) throw new Error;
                for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) for (var s, l = e[u], c = n[u], h = l.length, f = a[u] = new Array(h), p = 0; p < h; ++p) (s = l[p] || c[p]) && (f[p] = s);
                for (; u < r; ++u) a[u] = e[u];
                return new me(a, this._parents, this._name, this._id)
            },
            selection: function () {
                return new ge(this._groups, this._parents)
            },
            transition: function () {
                for (var t = this._name, e = this._id, n = we(), r = this._groups, i = r.length, o = 0; o < i; ++o) for (var a, u = r[o], s = u.length, l = 0; l < s; ++l) if (a = u[l]) {
                    var c = X(a, e);
                    H(a, t, n, l, u, {
                        time: c.time + c.delay + c.duration,
                        delay: 0,
                        duration: c.duration,
                        ease: c.ease
                    })
                }
                return new me(r, this._parents, t, n)
            },
            call: _e.call,
            nodes: _e.nodes,
            node: _e.node,
            size: _e.size,
            empty: _e.empty,
            each: _e.each,
            on: function (t, e) {
                var n = this._id;
                return arguments.length < 2 ? X(this.node(), n).on.on(t) : this.each(function (t, e, n) {
                    var r, i, o = function (t) {
                        return (t + "").trim().split(/^|\s+/).every(function (t) {
                            var e = t.indexOf(".");
                            return e >= 0 && (t = t.slice(0, e)), !t || "start" === t
                        })
                    }(e) ? z : F;
                    return function () {
                        var a = o(this, t), u = a.on;
                        u !== r && (i = (r = u).copy()).on(e, n), a.on = i
                    }
                }(n, t, e))
            },
            attr: function (t, e) {
                var n = Object(r.namespace)(t), i = "transform" === n ? ce : ve;
                return this.attrTween(t, "function" == typeof e ? (n.local ? function (t, e, n) {
                    var r, i, o;
                    return function () {
                        var a, u = n(this);
                        if (null != u) return (a = this.getAttributeNS(t.space, t.local)) === u ? null : a === r && u === i ? o : o = e(r = a, i = u);
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function (t, e, n) {
                    var r, i, o;
                    return function () {
                        var a, u = n(this);
                        if (null != u) return (a = this.getAttribute(t)) === u ? null : a === r && u === i ? o : o = e(r = a, i = u);
                        this.removeAttribute(t)
                    }
                })(n, i, de(this, "attr." + t, e)) : null == e ? (n.local ? function (t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function (t) {
                    return function () {
                        this.removeAttribute(t)
                    }
                })(n) : (n.local ? function (t, e, n) {
                    var r, i;
                    return function () {
                        var o = this.getAttributeNS(t.space, t.local);
                        return o === n ? null : o === r ? i : i = e(r = o, n)
                    }
                } : function (t, e, n) {
                    var r, i;
                    return function () {
                        var o = this.getAttribute(t);
                        return o === n ? null : o === r ? i : i = e(r = o, n)
                    }
                })(n, i, e + ""))
            },
            attrTween: function (t, e) {
                var n = "attr." + t;
                if (arguments.length < 2) return (n = this.tween(n)) && n._value;
                if (null == e) return this.tween(n, null);
                if ("function" != typeof e) throw new Error;
                var i = Object(r.namespace)(t);
                return this.tween(n, (i.local ? function (t, e) {
                    function n() {
                        var n = this, r = e.apply(n, arguments);
                        return r && function (e) {
                            n.setAttributeNS(t.space, t.local, r(e))
                        }
                    }

                    return n._value = e, n
                } : function (t, e) {
                    function n() {
                        var n = this, r = e.apply(n, arguments);
                        return r && function (e) {
                            n.setAttribute(t, r(e))
                        }
                    }

                    return n._value = e, n
                })(i, e))
            },
            style: function (t, e, n) {
                var i = "transform" == (t += "") ? le : ve;
                return null == e ? this.styleTween(t, function (t, e) {
                    var n, i, o;
                    return function () {
                        var a = Object(r.style)(this, t), u = (this.style.removeProperty(t), Object(r.style)(this, t));
                        return a === u ? null : a === n && u === i ? o : o = e(n = a, i = u)
                    }
                }(t, i)).on("end.style." + t, function (t) {
                    return function () {
                        this.style.removeProperty(t)
                    }
                }(t)) : this.styleTween(t, "function" == typeof e ? function (t, e, n) {
                    var i, o, a;
                    return function () {
                        var u = Object(r.style)(this, t), s = n(this);
                        return null == s && (this.style.removeProperty(t), s = Object(r.style)(this, t)), u === s ? null : u === i && s === o ? a : a = e(i = u, o = s)
                    }
                }(t, i, de(this, "style." + t, e)) : function (t, e, n) {
                    var i, o;
                    return function () {
                        var a = Object(r.style)(this, t);
                        return a === n ? null : a === i ? o : o = e(i = a, n)
                    }
                }(t, i, e + ""), n)
            },
            styleTween: function (t, e, n) {
                var r = "style." + (t += "");
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == e) return this.tween(r, null);
                if ("function" != typeof e) throw new Error;
                return this.tween(r, function (t, e, n) {
                    function r() {
                        var r = this, i = e.apply(r, arguments);
                        return i && function (e) {
                            r.style.setProperty(t, i(e), n)
                        }
                    }

                    return r._value = e, r
                }(t, e, null == n ? "" : n))
            },
            text: function (t) {
                return this.tween("text", "function" == typeof t ? function (t) {
                    return function () {
                        var e = t(this);
                        this.textContent = null == e ? "" : e
                    }
                }(de(this, "text", t)) : function (t) {
                    return function () {
                        this.textContent = t
                    }
                }(null == t ? "" : t + ""))
            },
            remove: function () {
                return this.on("end.remove", function (t) {
                    return function () {
                        var e = this.parentNode;
                        for (var n in this.__transition) if (+n !== t) return;
                        e && e.removeChild(this)
                    }
                }(this._id))
            },
            tween: function (t, e) {
                var n = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = X(this.node(), n).tween, o = 0, a = i.length; o < a; ++o) if ((r = i[o]).name === t) return r.value;
                    return null
                }
                return this.each((null == e ? function (t, e) {
                    var n, r;
                    return function () {
                        var i = F(this, t), o = i.tween;
                        if (o !== n) for (var a = 0, u = (r = n = o).length; a < u; ++a) if (r[a].name === e) {
                            (r = r.slice()).splice(a, 1);
                            break
                        }
                        i.tween = r
                    }
                } : function (t, e, n) {
                    var r, i;
                    if ("function" != typeof n) throw new Error;
                    return function () {
                        var o = F(this, t), a = o.tween;
                        if (a !== r) {
                            i = (r = a).slice();
                            for (var u = {name: e, value: n}, s = 0, l = i.length; s < l; ++s) if (i[s].name === e) {
                                i[s] = u;
                                break
                            }
                            s === l && i.push(u)
                        }
                        o.tween = i
                    }
                })(n, t, e))
            },
            delay: function (t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
                    return function () {
                        z(this, t).delay = +e.apply(this, arguments)
                    }
                } : function (t, e) {
                    return e = +e, function () {
                        z(this, t).delay = e
                    }
                })(e, t)) : X(this.node(), e).delay
            },
            duration: function (t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
                    return function () {
                        F(this, t).duration = +e.apply(this, arguments)
                    }
                } : function (t, e) {
                    return e = +e, function () {
                        F(this, t).duration = e
                    }
                })(e, t)) : X(this.node(), e).duration
            },
            ease: function (t) {
                var e = this._id;
                return arguments.length ? this.each(function (t, e) {
                    if ("function" != typeof e) throw new Error;
                    return function () {
                        F(this, t).ease = e
                    }
                }(e, t)) : X(this.node(), e).ease
            }
        };
        (function t(e) {
            function n(t) {
                return Math.pow(t, e)
            }

            return e = +e, n.exponent = t, n
        })(3), function t(e) {
            function n(t) {
                return 1 - Math.pow(1 - t, e)
            }

            return e = +e, n.exponent = t, n
        }(3), function t(e) {
            function n(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
            }

            return e = +e, n.exponent = t, n
        }(3), Math.PI;
        (function t(e) {
            function n(t) {
                return t * t * ((e + 1) * t - e)
            }

            return e = +e, n.overshoot = t, n
        })(1.70158), function t(e) {
            function n(t) {
                return --t * t * ((e + 1) * t + e) + 1
            }

            return e = +e, n.overshoot = t, n
        }(1.70158), function t(e) {
            function n(t) {
                return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
            }

            return e = +e, n.overshoot = t, n
        }(1.70158);
        var ke = 2 * Math.PI, xe = (function t(e, n) {
            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= ke);

            function i(t) {
                return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n)
            }

            return i.amplitude = function (e) {
                return t(e, n * ke)
            }, i.period = function (n) {
                return t(e, n)
            }, i
        }(1, .3), function t(e, n) {
            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= ke);

            function i(t) {
                return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n)
            }

            return i.amplitude = function (e) {
                return t(e, n * ke)
            }, i.period = function (n) {
                return t(e, n)
            }, i
        }(1, .3), function t(e, n) {
            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= ke);

            function i(t) {
                return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2
            }

            return i.amplitude = function (e) {
                return t(e, n * ke)
            }, i.period = function (n) {
                return t(e, n)
            }, i
        }(1, .3), {
            time: null, delay: 0, duration: 250, ease: function (t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
        });

        function Me(t, e) {
            for (var n; !(n = t.__transition) || !(n = n[e]);) if (!(t = t.parentNode)) return xe.time = _(), xe;
            return n
        }

        r.selection.prototype.interrupt = function (t) {
            return this.each(function () {
                !function (t, e) {
                    var n, r, i, o = t.__transition, a = !0;
                    if (o) {
                        for (i in e = null == e ? null : e + "", o) (n = o[i]).name === e ? (r = n.state > L && n.state < I, n.state = D, n.timer.stop(), r && n.on.call("interrupt", t, t.__data__, n.index, n.group), delete o[i]) : a = !1;
                        a && delete t.__transition
                    }
                }(this, t)
            })
        }, r.selection.prototype.transition = function (t) {
            var e, n;
            t instanceof me ? (e = t._id, t = t._name) : (e = we(), (n = xe).time = _(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o) for (var a, u = r[o], s = u.length, l = 0; l < s; ++l) (a = u[l]) && H(a, t, e, l, u, n || Me(a, e));
            return new me(r, this._parents, t, e)
        };
        r.selection.prototype.attrs = function (t) {
            return ("function" == typeof t ? function (t, e) {
                return t.each(function () {
                    var t = e.apply(this, arguments), n = Object(r.select)(this);
                    for (var i in t) n.attr(i, t[i])
                })
            } : function (t, e) {
                for (var n in e) t.attr(n, e[n]);
                return t
            })(this, t)
        }, r.selection.prototype.styles = function (t, e) {
            return ("function" == typeof t ? function (t, e, n) {
                return t.each(function () {
                    var t = e.apply(this, arguments), i = Object(r.select)(this);
                    for (var o in t) i.style(o, t[o], n)
                })
            } : function (t, e, n) {
                for (var r in e) t.style(r, e[r], n);
                return t
            })(this, t, null == e ? "" : e)
        }, r.selection.prototype.properties = function (t) {
            return ("function" == typeof t ? function (t, e) {
                return t.each(function () {
                    var t = e.apply(this, arguments), n = Object(r.select)(this);
                    for (var i in t) n.property(i, t[i])
                })
            } : function (t, e) {
                for (var n in e) t.property(n, e[n]);
                return t
            })(this, t)
        }, be.prototype.attrs = function (t) {
            return ("function" == typeof t ? function (t, e) {
                return t.each(function () {
                    var n = e.apply(this, arguments), i = Object(r.select)(this).transition(t);
                    for (var o in n) i.attr(o, n[o])
                })
            } : function (t, e) {
                for (var n in e) t.attr(n, e[n]);
                return t
            })(this, t)
        }, be.prototype.styles = function (t, e) {
            return ("function" == typeof t ? function (t, e, n) {
                return t.each(function () {
                    var i = e.apply(this, arguments), o = Object(r.select)(this).transition(t);
                    for (var a in i) o.style(a, i[a], n)
                })
            } : function (t, e, n) {
                for (var r in e) t.style(r, e[r], n);
                return t
            })(this, t, null == e ? "" : e)
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        var o = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }

            return i(t, null, [{
                key: "isExtendableObject", value: function (t) {
                    return "object" === (void 0 === t ? "undefined" : r(t)) && null !== t && !Array.isArray(t)
                }
            }, {
                key: "extend", value: function (e, n) {
                    var r = {};
                    return Object.keys(e).length > 0 && (r = t.extend({}, e)), Object.keys(n).forEach(function (i) {
                        t.isExtendableObject(n[i]) ? t.isExtendableObject(e[i]) ? r[i] = t.extend(e[i], n[i]) : r[i] = t.extend({}, n[i]) : r[i] = n[i]
                    }), r
                }
            }, {
                key: "convertLegacyBlock", value: function (e) {
                    return {
                        label: e[0],
                        value: t.getRawBlockCount(e),
                        formattedValue: Array.isArray(e[1]) ? e[1][1] : null,
                        backgroundColor: e[2],
                        labelColor: e[3]
                    }
                }
            }, {
                key: "getRawBlockCount", value: function (t) {
                    return Array.isArray(t) ? Array.isArray(t[1]) ? t[1][0] : t[1] : t.value
                }
            }]), t
        }();
        e.default = o
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        var i = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }

            return r(t, [{
                key: "plot", value: function (t) {
                    var e = "";
                    return t.forEach(function (t) {
                        e += "" + t[0] + t[1] + "," + t[2] + " "
                    }), e.replace(/ +/g, " ").trim()
                }
            }, {
                key: "makeCurvedPaths", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = this.makeBezierPoints(t);
                    return e ? this.makeBezierPath(n, t.ratio) : this.makeBezierPath(n)
                }
            }, {
                key: "makeBezierPoints", value: function (t) {
                    var e = t.centerX, n = t.prevLeftX, r = t.prevRightX, i = t.prevHeight, o = t.nextLeftX,
                        a = t.nextRightX, u = t.nextHeight, s = t.curveHeight;
                    return {
                        p00: {x: n, y: i},
                        p01: {x: e, y: i + s / 2},
                        p02: {x: r, y: i},
                        p10: {x: o, y: u},
                        p11: {x: e, y: u + s},
                        p12: {x: a, y: u}
                    }
                }
            }, {
                key: "makeBezierPath", value: function (t) {
                    var e = t.p00, n = t.p01, r = t.p02, i = t.p10, o = t.p11, a = t.p12,
                        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        s = this.getQuadraticBezierCurve(e, n, r, u), l = this.getQuadraticBezierCurve(i, o, a, u);
                    return [[s.p0.x, s.p0.y, "M"], [s.p1.x, s.p1.y, "Q"], [s.p2.x, s.p2.y, ""], [l.p2.x, l.p2.y, "L"], [l.p2.x, l.p2.y, "M"], [l.p1.x, l.p1.y, "Q"], [l.p0.x, l.p0.y, ""], [s.p0.x, s.p0.y, "L"]]
                }
            }, {
                key: "getQuadraticBezierCurve", value: function (t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    return {
                        p0: t,
                        p1: {
                            x: this.getLinearInterpolation(t, e, r, "x"),
                            y: this.getLinearInterpolation(t, e, r, "y")
                        },
                        p2: {
                            x: this.getQuadraticInterpolation(t, e, n, r, "x"),
                            y: this.getQuadraticInterpolation(t, e, n, r, "y")
                        }
                    }
                }
            }, {
                key: "getLinearInterpolation", value: function (t, e, n, r) {
                    return t[r] + n * (e[r] - t[r])
                }
            }, {
                key: "getQuadraticInterpolation", value: function (t, e, n, r, i) {
                    return Math.pow(1 - r, 2) * t[i] + 2 * (1 - r) * r * e[i] + Math.pow(r, 2) * n[i]
                }
            }, {
                key: "makeStraightPaths", value: function (t) {
                    var e = t.prevLeftX, n = t.prevRightX, r = t.prevHeight, i = t.nextLeftX, o = t.nextRightX,
                        a = t.nextHeight, u = t.ratio;
                    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                        var s = n - e, l = o - i, c = s * (u || 0) + e, h = l * (u || 0) + i;
                        return [[e, r, "M"], [c = Math.min(c, s), r, "L"], [h = Math.min(h, l), a, "L"], [i, a, "L"], [e, r, "L"]]
                    }
                    return [[e, r, "M"], [n, r, "L"], [o, a, "L"], [i, a, "L"], [e, r, "L"]]
                }
            }]), t
        }();
        e.default = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        var i = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }

            return r(t, [{
                key: "getFormatter", value: function (t) {
                    var e = this;
                    return "function" == typeof t ? t : function (n, r, i) {
                        return e.stringFormatter(n, r, i, t)
                    }
                }
            }, {
                key: "format", value: function (t, e) {
                    var n = t.label, r = t.value, i = t.formattedValue;
                    return e(n, r, void 0 === i ? null : i)
                }
            }, {
                key: "stringFormatter", value: function (t, e, n, r) {
                    var i = n;
                    return null === n && (i = this.getDefaultFormattedValue(e)), r.split("{l}").join(t).split("{v}").join(e).split("{f}").join(i)
                }
            }, {
                key: "getDefaultFormattedValue", value: function (t) {
                    return t.toLocaleString()
                }
            }]), t
        }();
        e.default = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        var i = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.hexExpression = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i, this.instanceId = null, this.labelFill = null, this.scale = null
            }

            return r(t, [{
                key: "setInstanceId", value: function (t) {
                    this.instanceId = t
                }
            }, {
                key: "setLabelFill", value: function (t) {
                    this.labelFill = t
                }
            }, {
                key: "setScale", value: function (t) {
                    this.scale = t
                }
            }, {
                key: "getBlockFill", value: function (t, e, n) {
                    var r = this.getBlockRawFill(t, e);
                    return {raw: r, actual: this.getBlockActualFill(r, e, n)}
                }
            }, {
                key: "getBlockRawFill", value: function (t, e) {
                    return this.hexExpression.test(t) ? t : Array.isArray(this.scale) ? this.scale[e] : this.scale(e)
                }
            }, {
                key: "getBlockActualFill", value: function (t, e, n) {
                    return "solid" === n ? t : "url(#" + this.getGradientId(e) + ")"
                }
            }, {
                key: "getGradientId", value: function (t) {
                    return this.instanceId + "-gradient-" + t
                }
            }, {
                key: "getLabelColor", value: function (t) {
                    return this.hexExpression.test(t) ? t : this.labelFill
                }
            }, {
                key: "shade", value: function (t, e) {
                    var n = this.hexToRgb(t), r = n.R, i = n.G, o = n.B, a = e < 0 ? 0 : 255, u = e < 0 ? -1 * e : e;
                    return "#" + (16777216 + 65536 * (Math.round((a - r) * u) + r) + 256 * (Math.round((a - i) * u) + i) + (Math.round((a - o) * u) + o)).toString(16).slice(1)
                }
            }, {
                key: "hexToRgb", value: function (t) {
                    var e = t.slice(1);
                    3 === e.length && (e = this.expandHex(e));
                    var n = parseInt(e, 16);
                    return {R: n >> 16, G: n >> 8 & 255, B: 255 & n}
                }
            }, {
                key: "expandHex", value: function (t) {
                    return t[0] + t[0] + t[1] + t[1] + t[2] + t[2]
                }
            }]), t
        }();
        e.default = i
    }, function (e, n) {
        e.exports = t
    }, function (t, e, n) {
        "use strict";
        t.exports = 0
    }, function (t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = function (t) {
            if (!t || "string" != typeof t || t.length < 6) return !1;
            for (var e = r.characters(), n = t.length, i = 0; i < n; i++) if (-1 === e.indexOf(t[i])) return !1;
            return !0
        }
    }, function (t, e, n) {
        "use strict";
        var r, i, o = n(2), a = n(1), u = 1459707606518, s = 6;
        t.exports = function (t) {
            var e = "", n = Math.floor(.001 * (Date.now() - u));
            return n === i ? r++ : (r = 0, i = n), e += o(a.lookup, s), e += o(a.lookup, t), r > 0 && (e += o(a.lookup, r)), e += o(a.lookup, n)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = function (t) {
            var e = r.shuffled();
            return {version: 15 & e.indexOf(t.substr(0, 1)), worker: 15 & e.indexOf(t.substr(1, 1))}
        }
    }, function (t, e, n) {
        "use strict";
        var r = "object" == typeof window && (window.crypto || window.msCrypto);
        t.exports = function () {
            if (!r || !r.getRandomValues) return 48 & Math.floor(256 * Math.random());
            var t = new Uint8Array(1);
            return r.getRandomValues(t), 48 & t[0]
        }
    }, function (t, e, n) {
        "use strict";
        var r = 1;
        t.exports = {
            nextValue: function () {
                return (r = (9301 * r + 49297) % 233280) / 233280
            }, seed: function (t) {
                r = t
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1), i = (n(2), n(12)), o = n(11), a = n(10), u = n(9) || 0;

        function s() {
            return o(u)
        }

        t.exports = s, t.exports.generate = s, t.exports.seed = function (e) {
            return r.seed(e), t.exports
        }, t.exports.worker = function (e) {
            return u = e, t.exports
        }, t.exports.characters = function (t) {
            return void 0 !== t && r.characters(t), r.shuffled()
        }, t.exports.decode = i, t.exports.isValid = a
    }, function (t, e, n) {
        "use strict";
        t.exports = n(15)
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            return function (t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function (t, e) {
                    var n = [], r = !0, i = !1, o = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), i = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), u = d(n(16)), s = n(8), l = n(0);
        n(3);
        var c = d(n(7)), h = d(n(6)), f = d(n(5)), p = d(n(4));

        function d(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function v(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }

        var g = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.container = (0, l.select)(e).node(), this.colorizer = new c.default, this.formatter = new h.default, this.navigator = new f.default, this.id = null, this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this)
            }

            return a(t, [{
                key: "destroy", value: function () {
                    var t = (0, l.select)(this.container);
                    t.selectAll("svg").remove(), t.selectAll("*").remove(), t.text("")
                }
            }, {
                key: "draw", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.destroy(), this.initialize(t, e), this.drawOntoDom()
                }
            }, {
                key: "initialize", value: function (t, e) {
                    this.validateData(t);
                    var n = this.getSettings(e);
                    this.id = "d3-funnel-" + u.default.generate(), this.labelFormatter = this.formatter.getFormatter(n.label.format), this.tooltipFormatter = this.formatter.getFormatter(n.tooltip.format), this.colorizer.setInstanceId(this.id), this.colorizer.setLabelFill(n.label.fill), this.colorizer.setScale(n.block.fill.scale), this.settings = {
                        width: n.chart.width,
                        height: n.chart.height,
                        bottomWidth: n.chart.width * n.chart.bottomWidth,
                        bottomPinch: n.chart.bottomPinch,
                        isInverted: n.chart.inverted,
                        isCurved: n.chart.curve.enabled,
                        curveHeight: n.chart.curve.height,
                        curveShade: n.chart.curve.shade,
                        addValueOverlay: n.block.barOverlay,
                        animation: n.chart.animate,
                        totalCount: n.chart.totalCount,
                        fillType: n.block.fill.type,
                        hoverEffects: n.block.highlight,
                        dynamicHeight: n.block.dynamicHeight,
                        dynamicSlope: n.block.dynamicSlope,
                        minHeight: n.block.minHeight,
                        label: n.label,
                        tooltip: n.tooltip,
                        onBlockClick: n.events.click.block
                    }, this.setBlocks(t)
                }
            }, {
                key: "validateData", value: function (t) {
                    if (!1 === Array.isArray(t)) throw new Error("Data must be an array.");
                    if (0 === t.length) throw new Error("Data array must contain at least one element.");
                    if ("object" !== o(t[0])) throw new Error("Data array elements must be an object.");
                    if (Array.isArray(t[0]) && t[0].length < 2 || !1 === Array.isArray(t[0]) && (void 0 === t[0].label || void 0 === t[0].value)) throw new Error("Data array elements must contain a label and value.")
                }
            }, {
                key: "getSettings", value: function (t) {
                    var e = this.getContainerDimensions(), n = this.getDefaultSettings(e), r = p.default.extend({}, n);
                    return (r = p.default.extend(r, t)).chart = i({}, r.chart, this.castDimensions(r, e)), r
                }
            }, {
                key: "getDefaultSettings", value: function (e) {
                    var n = t.defaults;
                    return n.chart = i({}, n.chart, e), n
                }
            }, {
                key: "getContainerDimensions", value: function () {
                    var t = {
                        width: parseFloat((0, l.select)(this.container).style("width")),
                        height: parseFloat((0, l.select)(this.container).style("height"))
                    };
                    return ["width", "height"].forEach(function (e) {
                        0 === t[e] && delete t[e]
                    }), t
                }
            }, {
                key: "castDimensions", value: function (e, n) {
                    var r = e.chart, i = {};
                    return Object.keys(n).forEach(function (e) {
                        var o = r[e], a = n[e];
                        /%$/.test(String(o)) ? i[e] = parseFloat(o) / 100 * a : i[e] = o <= 0 ? t.defaults.chart[e] : o
                    }), i
                }
            }, {
                key: "setBlocks", value: function (t) {
                    var e = this.getTotalCount(t);
                    this.blocks = this.standardizeData(t, e)
                }
            }, {
                key: "getTotalCount", value: function (t) {
                    return null !== this.settings.totalCount ? this.settings.totalCount || 0 : t.reduce(function (t, e) {
                        return t + p.default.getRawBlockCount(e)
                    }, 0)
                }
            }, {
                key: "standardizeData", value: function (t, e) {
                    var n = this;
                    return t.map(function (r, i) {
                        var o = Array.isArray(r) ? p.default.convertLegacyBlock(r) : r,
                            a = e > 0 ? o.value / e || 0 : 1 / t.length;
                        return {
                            index: i,
                            ratio: a,
                            value: o.value,
                            height: n.settings.height * a,
                            fill: n.colorizer.getBlockFill(o.backgroundColor, i, n.settings.fillType),
                            label: {
                                enabled: !o.hideLabel,
                                raw: o.label,
                                formatted: n.formatter.format(o, n.labelFormatter),
                                color: n.colorizer.getLabelColor(o.labelColor)
                            },
                            tooltip: {enabled: o.enabled, formatted: n.formatter.format(o, n.tooltipFormatter)}
                        }
                    })
                }
            }, {
                key: "drawOntoDom", value: function () {
                    this.svg = (0, l.select)(this.container).append("svg").attr("id", this.id).attr("width", this.settings.width).attr("height", this.settings.height);
                    var t = this.makePaths(), e = r(t, 2);
                    this.blockPaths = e[0], this.overlayPaths = e[1], "gradient" === this.settings.fillType && this.defineColorGradients(this.svg), this.settings.isCurved && this.drawTopOval(this.svg, this.blockPaths), this.drawBlock(0)
                }
            }, {
                key: "makePaths", value: function () {
                    var t = this, e = (this.settings.width - this.settings.bottomWidth) / 2,
                        n = this.settings.width / 2, r = [], i = [];
                    this.dx = this.getDx(e), this.dy = this.getDy();
                    var o = this.dx, a = this.dy, u = 0, s = this.settings.width, l = 0;
                    this.settings.isInverted && (u = e, s = this.settings.width - e);
                    var c = 0, h = 0, f = 0;
                    this.settings.isCurved && (l = this.settings.curveHeight / 2);
                    var p = this.settings.height;
                    0 !== this.settings.minHeight && (p = this.settings.height - this.settings.minHeight * this.blocks.length);
                    var d = this.settings.height;
                    this.settings.bottomPinch > 0 && this.blocks.forEach(function (e, n) {
                        var r = p * e.ratio;
                        0 !== t.settings.minHeight && (r += t.settings.minHeight), t.settings.isCurved && (r += t.settings.curveHeight / t.blocks.length), t.settings.isInverted ? n < t.settings.bottomPinch && (d -= r) : n >= t.blocks.length - t.settings.bottomPinch && (d -= r)
                    });
                    var g = d / e;
                    return this.blocks.forEach(function (e, d) {
                        if (t.settings.dynamicHeight && (a = p * e.ratio, 0 !== t.settings.minHeight && (a += t.settings.minHeight), t.settings.isCurved && (a -= t.settings.curveHeight / t.blocks.length), c = (l + a) / g, t.settings.isInverted && (c = (l + a - t.settings.height) / (-1 * g)), 0 === t.settings.bottomWidth && d === t.blocks.length - 1 && (c = t.settings.width / 2, t.settings.isInverted && (c = 0)), t.settings.bottomWidth === t.settings.width && (c = u), !Number.isNaN(c) && Number.isFinite(c) || (c = 0), o = c - u, t.settings.isInverted && (o = u - c)), t.settings.dynamicSlope && !t.settings.isInverted) {
                            var y = (t.blocks[d + 1] ? t.blocks[d + 1].value : e.value) / e.value;
                            o = (1 - y) * (n - u)
                        }
                        t.settings.bottomPinch > 0 && (t.settings.isInverted ? (t.settings.dynamicHeight || (o = t.dx), o = d < t.settings.bottomPinch ? 0 : o) : d >= t.blocks.length - t.settings.bottomPinch && (o = 0)), c = u + o, h = s - o, f = l + a, t.blocks[d].height = a, t.settings.isInverted && (c = u - o, h = s + o);
                        var m = {
                            centerX: n,
                            prevLeftX: u,
                            prevRightX: s,
                            prevHeight: l,
                            nextLeftX: c,
                            nextRightX: h,
                            nextHeight: f,
                            curveHeight: t.settings.curveHeight,
                            ratio: e.ratio
                        };
                        t.settings.isCurved ? (r = [].concat(v(r), [t.navigator.makeCurvedPaths(m)]), t.settings.addValueOverlay && (i = [].concat(v(i), [t.navigator.makeCurvedPaths(m, !0)]))) : (r = [].concat(v(r), [t.navigator.makeStraightPaths(m)]), t.settings.addValueOverlay && (i = [].concat(v(i), [t.navigator.makeStraightPaths(m, !0)]))), u = c, s = h, l = f
                    }), [r, i]
                }
            }, {
                key: "getDx", value: function (t) {
                    return this.settings.bottomPinch > 0 ? t / (this.blocks.length - this.settings.bottomPinch) : t / this.blocks.length
                }
            }, {
                key: "getDy", value: function () {
                    return this.settings.isCurved ? (this.settings.height - this.settings.curveHeight) / this.blocks.length : this.settings.height / this.blocks.length
                }
            }, {
                key: "defineColorGradients", value: function (t) {
                    var e = this, n = t.append("defs");
                    this.blocks.forEach(function (t, r) {
                        var i = t.fill.raw, o = e.colorizer.shade(i, -.2),
                            a = n.append("linearGradient").attr("id", e.colorizer.getGradientId(r));
                        [[0, o], [40, i], [60, i], [100, o]].forEach(function (t) {
                            a.append("stop").attrs({offset: t[0] + "%", style: "stop-color: " + t[1]})
                        })
                    })
                }
            }, {
                key: "drawTopOval", value: function (t, e) {
                    var n = this.settings.width / 2, r = e[0], i = r[1][1] + this.settings.curveHeight / 2,
                        o = this.navigator.plot([["M", r[0][0], r[0][1]], ["Q", n, i], [" ", r[2][0], r[2][1]], ["M", r[2][0], this.settings.curveHeight / 2], ["Q", n, 0], [" ", r[0][0], this.settings.curveHeight / 2]]);
                    t.append("path").attr("fill", this.colorizer.shade(this.blocks[0].fill.raw, this.settings.curveShade)).attr("d", o)
                }
            }, {
                key: "drawBlock", value: function (t) {
                    var e = this;
                    if (t !== this.blocks.length) {
                        var n = this.svg.append("g"), r = this.blocks[t], i = this.getBlockPath(n, t);
                        this.attachData(i, r);
                        var o = null, a = r.fill.actual;
                        this.settings.addValueOverlay && (o = this.getOverlayPath(n, t), this.attachData(o, r), i.node().setAttribute("pathType", "background"), o.node().setAttribute("pathType", "foreground"), a = this.colorizer.shade(r.fill.raw, .3)), 0 !== this.settings.animation ? i.transition().duration(this.settings.animation).ease(s.easeLinear).attr("fill", a).attr("d", this.getPathDefinition(t)).on("end", function () {
                            e.drawBlock(t + 1)
                        }) : (i.attr("fill", a).attr("d", this.getPathDefinition(t)), this.drawBlock(t + 1)), this.settings.addValueOverlay && (i.attr("stroke", this.blocks[t].fill.raw), 0 !== this.settings.animation ? o.transition().duration(this.settings.animation).ease(s.easeLinear).attr("fill", r.fill.actual).attr("d", this.getOverlayPathDefinition(t)) : o.attr("fill", r.fill.actual).attr("d", this.getOverlayPathDefinition(t))), this.settings.hoverEffects && [i, o].forEach(function (t) {
                            t && t.on("mouseover", e.onMouseOver).on("mouseout", e.onMouseOut)
                        }), null !== this.settings.onBlockClick && [i, o].forEach(function (t) {
                            t && t.style("cursor", "pointer").on("click", e.settings.onBlockClick)
                        }), this.settings.tooltip.enabled && [i, o].forEach(function (t) {
                            t && (t.node().addEventListener("mouseout", function () {
                                e.tooltip && (e.container.removeChild(e.tooltip), e.tooltip = null)
                            }), t.node().addEventListener("mousemove", function (t) {
                                e.tooltip || (e.tooltip = document.createElement("div"), e.tooltip.setAttribute("class", "d3-funnel-tooltip"), e.container.appendChild(e.tooltip)), e.tooltip.innerText = r.tooltip.formatted;
                                var n = e.tooltip.offsetWidth, i = e.tooltip.offsetHeight + 5,
                                    o = e.container.getBoundingClientRect().y + window.scrollY,
                                    a = t.layerY - i < o ? t.layerY + 5 : t.layerY - i,
                                    u = ["display: inline-block", "position: absolute", "left: " + (t.layerX - n / 2) + "px", "top: " + a + "px", "border: 1px solid " + r.fill.raw, "background: rgb(255,255,255,0.75)", "padding: 5px 15px", "color: #000", "font-size: 14px", "font-weight: bold", "text-align: center", "cursor: default", "pointer-events: none"];
                                e.tooltip.setAttribute("style", u.join(";"))
                            }))
                        }), this.settings.label.enabled && r.label.enabled && this.addBlockLabel(n, t)
                    }
                }
            }, {
                key: "getBlockPath", value: function (t, e) {
                    var n = t.append("path");
                    return 0 !== this.settings.animation && this.addBeforeTransition(n, e, !1), n
                }
            }, {
                key: "getOverlayPath", value: function (t, e) {
                    var n = t.append("path");
                    return 0 !== this.settings.animation && this.addBeforeTransition(n, e, !0), n
                }
            }, {
                key: "addBeforeTransition", value: function (t, e, n) {
                    var r = n ? this.overlayPaths[e] : this.blockPaths[e], i = "", o = "";
                    i = this.settings.isCurved ? this.navigator.plot([["M", r[0][0], r[0][1]], ["Q", r[1][0], r[1][1]], [" ", r[2][0], r[2][1]], ["L", r[2][0], r[2][1]], ["M", r[2][0], r[2][1]], ["Q", r[1][0], r[1][1]], [" ", r[0][0], r[0][1]]]) : this.navigator.plot([["M", r[0][0], r[0][1]], ["L", r[1][0], r[1][1]], ["L", r[1][0], r[1][1]], ["L", r[0][0], r[0][1]]]), o = "solid" === this.settings.fillType && e > 0 ? this.blocks[e - 1].fill.actual : this.blocks[e].fill.actual, t.attr("d", i).attr("fill", o)
                }
            }, {
                key: "attachData", value: function (t, e) {
                    var n = i({}, e, {node: t.node()});
                    t.data([n])
                }
            }, {
                key: "getPathDefinition", value: function (t) {
                    var e = [];
                    return this.blockPaths[t].forEach(function (t) {
                        e.push([t[2], t[0], t[1]])
                    }), this.navigator.plot(e)
                }
            }, {
                key: "getOverlayPathDefinition", value: function (t) {
                    var e = [];
                    return this.overlayPaths[t].forEach(function (t) {
                        e.push([t[2], t[0], t[1]])
                    }), this.navigator.plot(e)
                }
            }, {
                key: "onMouseOver", value: function (t, e, n) {
                    var r = this, i = n[0].parentElement.childNodes;
                    [].slice.call(i).forEach(function (e) {
                        "path" === e.nodeName.toLowerCase() && ("foreground" === (e.getAttribute("pathType") || "") ? (0, l.select)(e).attr("fill", r.colorizer.shade(t.fill.raw, -.5)) : (0, l.select)(e).attr("fill", r.colorizer.shade(t.fill.raw, -.2)))
                    })
                }
            }, {
                key: "onMouseOut", value: function (t, e, n) {
                    var r = this, i = n[0].parentElement.childNodes;
                    [].slice.call(i).forEach(function (e) {
                        if ("path" === e.nodeName.toLowerCase()) if ("background" === (e.getAttribute("pathType") || "")) {
                            var n = r.colorizer.shade(t.fill.raw, .3);
                            (0, l.select)(e).attr("fill", n)
                        } else (0, l.select)(e).attr("fill", t.fill.actual)
                    })
                }
            }, {
                key: "addBlockLabel", value: function (t, e) {
                    var n = this.blockPaths[e], r = this.blocks[e].label.formatted, i = this.blocks[e].label.color,
                        o = this.settings.width / 2, a = this.getTextY(n), u = t.append("text").attrs({
                            x: o,
                            y: a,
                            fill: i,
                            "font-size": this.settings.label.fontSize,
                            "text-anchor": "middle",
                            "dominant-baseline": "middle",
                            "pointer-events": "none"
                        });
                    null !== this.settings.label.fontFamily && u.attr("font-family", this.settings.label.fontFamily), this.addLabelLines(u, r, o)
                }
            }, {
                key: "addLabelLines", value: function (t, e, n) {
                    var r = e.split("\n"), i = -20 * (r.length - 1) / 2;
                    r.forEach(function (e, r) {
                        var o = 0 === r ? i : 20;
                        t.append("tspan").attrs({x: n, dy: o}).text(e)
                    })
                }
            }, {
                key: "getTextY", value: function (t) {
                    var e = this.settings, n = e.isCurved, r = e.curveHeight;
                    return n ? (t[2][1] + t[3][1]) / 2 + 1.5 * r / this.blocks.length : (t[1][1] + t[2][1]) / 2
                }
            }]), t
        }();
        g.defaults = {
            chart: {
                width: 350,
                height: 400,
                bottomWidth: 1 / 3,
                bottomPinch: 0,
                inverted: !1,
                horizontal: !1,
                animate: 0,
                curve: {enabled: !1, height: 20, shade: -.4},
                totalCount: null
            },
            block: {
                dynamicHeight: !1,
                dynamicSlope: !1,
                barOverlay: !1,
                fill: {scale: (0, s.scaleOrdinal)(s.schemeCategory10).domain((0, s.range)(0, 10)), type: "solid"},
                minHeight: 0,
                highlight: !1
            },
            label: {enabled: !0, fontFamily: null, fontSize: "14px", fill: "#fff", format: "{l}: {f}"},
            tooltip: {enabled: !1, format: "{l}: {f}"},
            events: {click: {block: null}}
        }, e.default = g
    }, function (t, e, n) {
        "use strict";
        t.exports = n(17).default
    }])
});