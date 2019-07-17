global["fib"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/simple-code-splitting/src/boot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/simple-code-splitting/src/boot.js":
/*!***********************************************!*\
  !*** ./src/simple-code-splitting/src/boot.js ***!
  \***********************************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _owa_sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owa-sync */ \"./src/simple-code-splitting/src/owa-sync/index.js\");\n/* harmony import */ var _owa_lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owa-lazy */ \"./src/simple-code-splitting/src/owa-lazy/index.js\");\n\r\n\r\n\r\nasync function main() {\r\n    Object(_owa_sync__WEBPACK_IMPORTED_MODULE_0__[\"syncCore\"])();\r\n\r\n    await Object(_owa_lazy__WEBPACK_IMPORTED_MODULE_1__[\"lazyComponent\"])();\r\n}\n\n//# sourceURL=webpack://fib/./src/simple-code-splitting/src/boot.js?");

/***/ }),

/***/ "./src/simple-code-splitting/src/owa-lazy/index.js":
/*!*********************************************************!*\
  !*** ./src/simple-code-splitting/src/owa-lazy/index.js ***!
  \*********************************************************/
/*! exports provided: lazyComponent, syncUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazyComponent\", function() { return lazyComponent; });\n/* harmony import */ var _syncUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syncUtil */ \"./src/simple-code-splitting/src/owa-lazy/syncUtil.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"syncUtil\", function() { return _syncUtil__WEBPACK_IMPORTED_MODULE_0__[\"syncUtil\"]; });\n\nconst lazyComponent = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./lazyIndex */ \"./src/simple-code-splitting/src/owa-lazy/lazyIndex.js\")).then(({lazyComponent}) => lazyComponent());\r\n\n\n//# sourceURL=webpack://fib/./src/simple-code-splitting/src/owa-lazy/index.js?");

/***/ }),

/***/ "./src/simple-code-splitting/src/owa-lazy/syncUtil.js":
/*!************************************************************!*\
  !*** ./src/simple-code-splitting/src/owa-lazy/syncUtil.js ***!
  \************************************************************/
/*! exports provided: syncUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"syncUtil\", function() { return syncUtil; });\nfunction syncUtil() {\r\n    console.log(\"I'm owa-lazy/syncUtil.js!\");\r\n}\n\n//# sourceURL=webpack://fib/./src/simple-code-splitting/src/owa-lazy/syncUtil.js?");

/***/ }),

/***/ "./src/simple-code-splitting/src/owa-sync/core.js":
/*!********************************************************!*\
  !*** ./src/simple-code-splitting/src/owa-sync/core.js ***!
  \********************************************************/
/*! exports provided: syncCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"syncCore\", function() { return syncCore; });\nfunction syncCore() {\r\n    console.log(\"I'm owa-sync/core.js!\");\r\n}\n\n//# sourceURL=webpack://fib/./src/simple-code-splitting/src/owa-sync/core.js?");

/***/ }),

/***/ "./src/simple-code-splitting/src/owa-sync/index.js":
/*!*********************************************************!*\
  !*** ./src/simple-code-splitting/src/owa-sync/index.js ***!
  \*********************************************************/
/*! exports provided: syncCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/simple-code-splitting/src/owa-sync/core.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"syncCore\", function() { return _core__WEBPACK_IMPORTED_MODULE_0__[\"syncCore\"]; });\n\n\n\n//# sourceURL=webpack://fib/./src/simple-code-splitting/src/owa-sync/index.js?");

/***/ })

/******/ });