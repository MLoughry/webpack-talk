exports.ids = ["lazy1"];
exports.modules = {
  "./src/split-chunks/src/lazy1/index.js":
    /*!*********************************************!*\
  !*** ./src/split-chunks/src/lazy1/index.js ***!
  \*********************************************/
    /*! exports provided: default */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function() {
          return Lazy1Component;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );

      function Lazy1Component() {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "div",
          {},
          "I'm lazy component #1"
        );
      }

      //# sourceURL=webpack://fib/./src/split-chunks/src/lazy1/index.js?
    }
};
