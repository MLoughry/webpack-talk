global.fib = (function(e) {
  var t = {},
    r = { 1: 0 };
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.e = function(t) {
      if (0 !== r[t]) {
        var n = require("./" + ({ 0: "distance" }[t] || t) + ".js"),
          o = n.modules,
          u = n.ids;
        for (var i in o) e[i] = o[i];
        for (var f = 0; f < u.length; f++) r[u[f]] = 0;
      }
      return Promise.all([]);
    }),
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
    (n.oe = function(e) {
      process.nextTick(function() {
        throw e;
      });
    }),
    n((n.s = 2))
  );
})([
  function(e, t, r) {
    "use strict";
    function n(e) {
      Math.pow(e, 2);
    }
    r.d(t, "a", function() {
      return n;
    });
  },
  ,
  function(e, t, r) {
    "use strict";
    r.r(t);
    r(0);
  }
]);
