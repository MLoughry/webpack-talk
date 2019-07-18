global["fib"] = (function(modules) {
  // webpackBootstrap
  // The module cache
  var installedModules = {};

  // object to store loaded chunks
  // "0" means "already loaded"
  var installedChunks = {
    main: 0
  };

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });

    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  // This file contains only the entry chunk.
  // The chunk loading function for additional chunks
  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = [];

    // require() chunk loading for javascript

    // "0" is the signal for "already loaded"
    if (installedChunks[chunkId] !== 0) {
      var chunk = require("./" + ({}[chunkId] || chunkId) + ".js");
      var moreModules = chunk.modules,
        chunkIds = chunk.ids;
      for (var moduleId in moreModules) {
        modules[moduleId] = moreModules[moduleId];
      }
      for (var i = 0; i < chunkIds.length; i++)
        installedChunks[chunkIds[i]] = 0;
    }
    return Promise.all(promises);
  };

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // __webpack_public_path__
  __webpack_require__.p = "";

  // uncaught error handler for webpack runtime
  __webpack_require__.oe = function(err) {
    process.nextTick(function() {
      throw err; // catch this error by using import().catch()
    });
  };

  // Load entry module and return exports
  return __webpack_require__(
    (__webpack_require__.s = "./src/scope-hoisting/src/boot.js")
  );
})({
  "./src/scope-hoisting/src/boot.js":
    /*!****************************************************!*\
  !*** ./src/scope-hoisting/src/boot.js + 3 modules ***!
  \****************************************************/
    /*! exports provided: main */
    /*! all exports used */
    /*! ModuleConcatenation bailout: Cannot concat with ./src/scope-hoisting/src/owa-lazy/syncUtil.js because of ./src/scope-hoisting/src/owa-lazy/lazyComponent.js */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./src/scope-hoisting/src/owa-sync/core.js
      function syncCore() {
        console.log("I'm owa-sync/core.js!");
      }
      // CONCATENATED MODULE: ./src/scope-hoisting/src/owa-sync/index.js

      // EXTERNAL MODULE: ./src/scope-hoisting/src/owa-lazy/syncUtil.js
      var syncUtil = __webpack_require__(
        "./src/scope-hoisting/src/owa-lazy/syncUtil.js"
      );

      // CONCATENATED MODULE: ./src/scope-hoisting/src/owa-lazy/index.js
      const lazyComponent = () =>
        __webpack_require__
          .e(/*! import() */ 0)
          .then(
            __webpack_require__.bind(
              null,
              /*! ./lazyIndex */ "./src/scope-hoisting/src/owa-lazy/lazyIndex.js"
            )
          )
          .then(({ lazyComponent }) => lazyComponent());

      // CONCATENATED MODULE: ./src/scope-hoisting/src/boot.js
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "main",
        function() {
          return main;
        }
      );

      async function main() {
        syncCore();

        await lazyComponent();
      }

      //# sourceURL=webpack://fib/./src/scope-hoisting/src/boot.js_+_3_modules?
    },

  "./src/scope-hoisting/src/owa-lazy/syncUtil.js":
    /*!*****************************************************!*\
  !*** ./src/scope-hoisting/src/owa-lazy/syncUtil.js ***!
  \*****************************************************/
    /*! exports provided: syncUtil */
    /*! exports used: syncUtil */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function() {
          return syncUtil;
        }
      );
      function syncUtil() {
        console.log("I'm owa-lazy/syncUtil.js!");
      }

      //# sourceURL=webpack://fib/./src/scope-hoisting/src/owa-lazy/syncUtil.js?
    }
});
