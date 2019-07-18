exports.ids = [0];
exports.modules = {
  "./src/scope-hoisting/src/owa-lazy/lazyIndex.js":
    /*!******************************************************************!*\
  !*** ./src/scope-hoisting/src/owa-lazy/lazyIndex.js + 1 modules ***!
  \******************************************************************/
    /*! exports provided: lazyComponent */
    /*! all exports used */
    /*! ModuleConcatenation bailout: Cannot concat with ./src/scope-hoisting/src/owa-lazy/syncUtil.js */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);

      // EXTERNAL MODULE: ./src/scope-hoisting/src/owa-lazy/syncUtil.js
      var syncUtil = __webpack_require__(
        "./src/scope-hoisting/src/owa-lazy/syncUtil.js"
      );

      // CONCATENATED MODULE: ./src/scope-hoisting/src/owa-lazy/lazyComponent.js

      function lazyComponent() {
        Object(syncUtil["a" /* syncUtil */])();
        console.log("I'm owa-lazy/lazyComponent.js!");
      }
      // CONCATENATED MODULE: ./src/scope-hoisting/src/owa-lazy/lazyIndex.js
      /* concated harmony reexport lazyComponent */ __webpack_require__.d(
        __webpack_exports__,
        "lazyComponent",
        function() {
          return lazyComponent;
        }
      );

      //# sourceURL=webpack://fib/./src/scope-hoisting/src/owa-lazy/lazyIndex.js_+_1_modules?
    }
};
