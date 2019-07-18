global["fib"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tree-shaking/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tree-shaking/src/index.js":
/*!***************************************!*\
  !*** ./src/tree-shaking/src/index.js ***!
  \***************************************/
/*! exports provided: main */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./src/tree-shaking/src/math/index.js\");\n\r\n\r\nfunction main() {\r\n    console.log(Object(_math__WEBPACK_IMPORTED_MODULE_0__[/* square */ \"a\"])(10));\r\n}\n\n//# sourceURL=webpack://fib/./src/tree-shaking/src/index.js?");

/***/ }),

/***/ "./src/tree-shaking/src/math/cube.js":
/*!*******************************************!*\
  !*** ./src/tree-shaking/src/math/cube.js ***!
  \*******************************************/
/*! exports provided: cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export cube */\nfunction cube(x) {\r\n  return x * x * x;\r\n}\r\n\n\n//# sourceURL=webpack://fib/./src/tree-shaking/src/math/cube.js?");

/***/ }),

/***/ "./src/tree-shaking/src/math/index.js":
/*!********************************************!*\
  !*** ./src/tree-shaking/src/math/index.js ***!
  \********************************************/
/*! exports provided: square, cube */
/*! exports used: square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/tree-shaking/src/math/square.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _square__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube */ \"./src/tree-shaking/src/math/cube.js\");\n\r\n\n\n//# sourceURL=webpack://fib/./src/tree-shaking/src/math/index.js?");

/***/ }),

/***/ "./src/tree-shaking/src/math/square.js":
/*!*********************************************!*\
  !*** ./src/tree-shaking/src/math/square.js ***!
  \*********************************************/
/*! exports provided: square */
/*! exports used: square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return square; });\nfunction square(x) {\r\n  return x * x;\r\n}\r\n\n\n//# sourceURL=webpack://fib/./src/tree-shaking/src/math/square.js?");

/***/ })

/******/ });