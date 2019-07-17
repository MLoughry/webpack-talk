exports.ids = [0];
exports.modules = {
  "./src/simple-code-splitting/src/owa-lazy/lazyComponent.js":
    /*!*****************************************************************!*\
  !*** ./src/simple-code-splitting/src/owa-lazy/lazyComponent.js ***!
  \*****************************************************************/
    /*! exports provided: lazyComponent */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "lazyComponent",
        function() {
          return lazyComponent;
        }
      );
      /* harmony import */ var _syncUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./syncUtil */ "./src/simple-code-splitting/src/owa-lazy/syncUtil.js"
      );

      function lazyComponent() {
        Object(_syncUtil__WEBPACK_IMPORTED_MODULE_0__["syncUtil"])();
        console.log("I'm owa-lazy/lazyComponent.js!");
      }

      //# sourceURL=webpack://fib/./src/simple-code-splitting/src/owa-lazy/lazyComponent.js?
    },

  "./src/simple-code-splitting/src/owa-lazy/lazyIndex.js":
    /*!*************************************************************!*\
  !*** ./src/simple-code-splitting/src/owa-lazy/lazyIndex.js ***!
  \*************************************************************/
    /*! exports provided: lazyComponent */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _lazyComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./lazyComponent */ "./src/simple-code-splitting/src/owa-lazy/lazyComponent.js"
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        "lazyComponent",
        function() {
          return _lazyComponent__WEBPACK_IMPORTED_MODULE_0__["lazyComponent"];
        }
      );

      //# sourceURL=webpack://fib/./src/simple-code-splitting/src/owa-lazy/lazyIndex.js?
    }
};
