global.fib = (function(n) {
  var e = {},
    t = { 0: 0 };
  function r(t) {
    if (e[t]) return e[t].exports;
    var o = (e[t] = { i: t, l: !1, exports: {} });
    return n[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.e = function(e) {
      if (0 !== t[e]) {
        var r = require("./" + ({}[e] || e) + ".js"),
          o = r.modules,
          u = r.ids;
        for (var i in o) n[i] = o[i];
        for (var c = 0; c < u.length; c++) t[u[c]] = 0;
      }
      return Promise.all([]);
    }),
    (r.m = n),
    (r.c = e),
    (r.d = function(n, e, t) {
      r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (r.r = function(n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (r.t = function(n, e) {
      if ((1 & e && (n = r(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          r.d(
            t,
            o,
            function(e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (r.p = ""),
    (r.oe = function(n) {
      process.nextTick(function() {
        throw n;
      });
    }),
    r((r.s = 1))
  );
})([
  function(n, e, t) {
    "use strict";
    function r() {
      console.log("I'm owa-lazy/syncUtil.js!");
    }
    t.d(e, "a", function() {
      return r;
    });
  },
  function(n, e, t) {
    "use strict";
    t.r(e);
    t(0);
    const r = () =>
      t
        .e(1)
        .then(t.bind(null, 2))
        .then(({ lazyComponent: n }) => n());
    async function o() {
      console.log("I'm owa-sync/core.js!"), await r();
    }
    t.d(e, "main", function() {
      return o;
    });
  }
]);
