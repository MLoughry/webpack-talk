global.fib = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0))
  );
})([
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "main", function() {
        return o;
      });
    const r = n(1);
    function o() {
      console.log(r.main);
    }
  },
  function(e, t, n) {
    var r = n(2),
      o = n(4);
    "string" == typeof r && (r = [[e.i, r]]);
    for (var i = 0; i < r.length; i++) o.loadStyles(r[i][1], !1);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (t = e.exports = n(3)(!1)).push([
      e.i,
      '._11S1oAud878vCE74TqKF32{color:"[theme:themePrimary, default:#0078D4]"}html[dir=ltr] ._11S1oAud878vCE74TqKF32{padding-left:2px}html[dir=rtl] ._11S1oAud878vCE74TqKF32{padding-right:2px}',
      ""
    ]),
      (t.locals = { main: "_11S1oAud878vCE74TqKF32" });
  },
  function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (u = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      u
                    )),
                    "/*# ".concat(l, " */")),
                  i = r.sources.map(function(e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(e, " */");
                  });
                return [n]
                  .concat(i)
                  .concat([o])
                  .join("\n");
              }
              var a, u, l;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (r[i] = !0);
          }
          for (var a = 0; a < e.length; a++) {
            var u = e[a];
            (null != u[0] && r[u[0]]) ||
              (n && !u[2]
                ? (u[2] = n)
                : n && (u[2] = "(".concat(u[2], ") and (").concat(n, ")")),
              t.push(u));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = "undefined" == typeof window ? global : window,
      a = i && i.CSPSettings && i.CSPSettings.nonce,
      u = (function() {
        var e = i.__themeState__ || {
          theme: void 0,
          lastStyleElement: void 0,
          registeredStyles: []
        };
        e.runState ||
          (e = o({}, e, {
            perf: { count: 0, duration: 0 },
            runState: { flushTimer: 0, mode: 0, buffer: [] }
          }));
        e.registeredThemableStyles ||
          (e = o({}, e, { registeredThemableStyles: [] }));
        return (i.__themeState__ = e), e;
      })(),
      l = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,
      s = 1e4,
      c = function() {
        return "undefined" != typeof performance && performance.now
          ? performance.now()
          : Date.now();
      };
    function f(e) {
      var t = c();
      e();
      var n = c();
      u.perf.duration += n - t;
    }
    function d() {
      f(function() {
        var e = u.runState.buffer.slice();
        u.runState.buffer = [];
        var t = [].concat.apply([], e);
        t.length > 0 && p(t);
      });
    }
    function p(e, t) {
      u.loadStyles
        ? u.loadStyles(S(e).styleString, e)
        : r
        ? (function(e, t) {
            if ("undefined" == typeof document) return;
            var n = document.getElementsByTagName("head")[0],
              r = u.registeredStyles,
              o = u.lastStyleElement,
              i = o ? o.styleSheet : void 0,
              a = i ? i.cssText : "",
              l = r[r.length - 1],
              c = S(e).styleString;
            (!o || a.length + c.length > s) &&
              (((o = document.createElement("style")).type = "text/css"),
              t
                ? (n.replaceChild(o, t.styleElement), (t.styleElement = o))
                : n.appendChild(o),
              t || ((l = { styleElement: o, themableStyle: e }), r.push(l)));
            (o.styleSheet.cssText += h(c)),
              Array.prototype.push.apply(l.themableStyle, e),
              (u.lastStyleElement = o);
          })(e, t)
        : (function(e) {
            if ("undefined" == typeof document) return;
            var t = document.getElementsByTagName("head")[0],
              n = document.createElement("style"),
              r = S(e),
              o = r.styleString,
              i = r.themable;
            (n.type = "text/css"), a && n.setAttribute("nonce", a);
            n.appendChild(document.createTextNode(o)),
              u.perf.count++,
              t.appendChild(n);
            var l = { styleElement: n, themableStyle: e };
            i ? u.registeredThemableStyles.push(l) : u.registeredStyles.push(l);
          })(e);
    }
    function y(e) {
      void 0 === e && (e = 3),
        (3 !== e && 2 !== e) ||
          (m(u.registeredStyles), (u.registeredStyles = [])),
        (3 !== e && 1 !== e) ||
          (m(u.registeredThemableStyles), (u.registeredThemableStyles = []));
    }
    function m(e) {
      e.forEach(function(e) {
        var t = e && e.styleElement;
        t && t.parentElement && t.parentElement.removeChild(t);
      });
    }
    function h(e) {
      return e && (e = S(g(e)).styleString), e;
    }
    function S(e) {
      var t = u.theme,
        n = !1;
      return {
        styleString: (e || [])
          .map(function(e) {
            var r = e.theme;
            if (r) {
              n = !0;
              var o = t ? t[r] : void 0,
                i = e.defaultValue || "inherit";
              return (
                !t ||
                  o ||
                  !console ||
                  r in t ||
                  "undefined" == typeof DEBUG ||
                  !DEBUG ||
                  console.warn(
                    'Theming value not provided for "' +
                      r +
                      '". Falling back to "' +
                      i +
                      '".'
                  ),
                o || i
              );
            }
            return e.rawString;
          })
          .join(""),
        themable: n
      };
    }
    function g(e) {
      var t = [];
      if (e) {
        for (var n = 0, r = void 0; (r = l.exec(e)); ) {
          var o = r.index;
          o > n && t.push({ rawString: e.substring(n, o) }),
            t.push({ theme: r[1], defaultValue: r[2] }),
            (n = l.lastIndex);
        }
        t.push({ rawString: e.substring(n) });
      }
      return t;
    }
    (t.loadStyles = function(e, t) {
      void 0 === t && (t = !1),
        f(function() {
          var n = Array.isArray(e) ? e : g(e);
          void 0 === r &&
            (r = (function() {
              var e = !1;
              if ("undefined" != typeof document) {
                var t = document.createElement("style");
                (t.type = "text/css"), (e = !!t.styleSheet);
              }
              return e;
            })());
          var o = u.runState,
            i = o.mode,
            a = o.buffer,
            l = o.flushTimer;
          t || 1 === i
            ? (a.push(n),
              l ||
                (u.runState.flushTimer = setTimeout(function() {
                  (u.runState.flushTimer = 0), d();
                }, 0)))
            : p(n);
        });
    }),
      (t.configureLoadStyles = function(e) {
        u.loadStyles = e;
      }),
      (t.configureRunMode = function(e) {
        u.runState.mode = e;
      }),
      (t.flush = d),
      (t.loadTheme = function(e) {
        (u.theme = e),
          (function() {
            if (u.theme) {
              for (
                var e = [], t = 0, n = u.registeredThemableStyles;
                t < n.length;
                t++
              ) {
                var r = n[t];
                e.push(r.themableStyle);
              }
              e.length > 0 && (y(1), p([].concat.apply([], e)));
            }
          })();
      }),
      (t.clearStyles = y),
      (t.detokenize = h),
      (t.splitStyles = g);
  }
]);
