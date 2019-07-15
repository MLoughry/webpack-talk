exports.ids = [0];
exports.modules = {
  "./src/simple-code-splitting/src/fibonacci.js":
    /*!****************************************************!*\
  !*** ./src/simple-code-splitting/src/fibonacci.js ***!
  \****************************************************/
    /*! exports provided: fibonacci */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "fibonacci",
        function() {
          return fibonacci;
        }
      );
      function fibonacci(n) {
        if (n <= 1) {
          return 1;
        } else {
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
      }

      //# sourceURL=webpack://fib/./src/simple-code-splitting/src/fibonacci.js?
    }
};
