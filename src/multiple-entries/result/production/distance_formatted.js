(exports.ids = [0]),
  (exports.modules = [
    function(t, n, r) {
      "use strict";
      function u(t) {
        Math.pow(t, 2);
      }
      r.d(n, "a", function() {
        return u;
      });
    },
    function(t, n, r) {
      "use strict";
      r.r(n),
        r.d(n, "distance", function() {
          return c;
        });
      var u = r(0);
      function c({ x: t, y: n }, { x: r, y: c }) {
        return Math.sqrt(Object(u.a)(t - r) + Object(u.a)(n - c));
      }
    }
  ]);
