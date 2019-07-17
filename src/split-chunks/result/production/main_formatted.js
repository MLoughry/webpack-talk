global.fib = (function(e) {
  var n = {},
    r = { 3: 0 };
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  return (
    (t.e = function(n) {
      if (0 !== r[n]) {
        var t = require("./" +
            ({ 0: "vendors~lazy1~lazy2", 1: "lazy1", 2: "lazy2" }[n] || n) +
            ".js"),
          o = t.modules,
          u = t.ids;
        for (var i in o) e[i] = o[i];
        for (var l = 0; l < u.length; l++) r[u[l]] = 0;
      }
      return Promise.all([]);
    }),
    (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function(e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            r,
            o,
            function(n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    (t.oe = function(e) {
      process.nextTick(function() {
        throw e;
      });
    }),
    t((t.s = 0))
  );
})([
  function(e, n, r) {
    "use strict";
    async function t() {
      await Promise.all([r.e(0), r.e(1)]).then(r.bind(null, 1)),
        await Promise.all([r.e(0), r.e(2)]).then(r.bind(null, 2));
    }
    r.r(n),
      r.d(n, "main", function() {
        return t;
      });
  }
]);
