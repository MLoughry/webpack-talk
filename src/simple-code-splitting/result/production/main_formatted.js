global.fib = (function(e) {
  var n = {},
    t = { 0: 0 };
  function r(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.e = function(n) {
      if (0 !== t[n]) {
        var r = require("./" + ({}[n] || n) + ".js"),
          o = r.modules,
          u = r.ids;
        for (var i in o) e[i] = o[i];
        for (var f = 0; f < u.length; f++) t[u[f]] = 0;
      }
      return Promise.all([]);
    }),
    (r.m = e),
    (r.c = n),
    (r.d = function(e, n, t) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, n) {
      if ((1 & n && (e = r(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            t,
            o,
            function(n) {
              return e[n];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = ""),
    (r.oe = function(e) {
      process.nextTick(function() {
        throw e;
      });
    }),
    r((r.s = 0))
  );
})([
  function(e, n, t) {
    "use strict";
    async function r() {
      const { fibonacci: e } = await t.e(1).then(t.bind(null, 1));
      console.log(e(10));
    }
    t.r(n),
      t.d(n, "main", function() {
        return r;
      });
  }
]);
