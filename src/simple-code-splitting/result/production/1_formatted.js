(exports.ids = [1]),
  (exports.modules = [
    ,
    function(n, t, r) {
      "use strict";
      function i(n) {
        return n <= 1 ? 1 : i(n - 1) + i(n - 2);
      }
      r.r(t),
        r.d(t, "fibonacci", function() {
          return i;
        });
    }
  ]);
