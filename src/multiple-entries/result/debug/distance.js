exports.ids = ["distance"];
exports.modules = {

/***/ "./src/multiple-entries/src/common.js":
/*!********************************************!*\
  !*** ./src/multiple-entries/src/common.js ***!
  \********************************************/
/*! exports provided: square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\nfunction square(factor) {\r\n    Math.pow(factor, 2);\r\n}\n\n//# sourceURL=webpack://fib/./src/multiple-entries/src/common.js?");

/***/ }),

/***/ "./src/multiple-entries/src/lazy/index.js":
/*!************************************************!*\
  !*** ./src/multiple-entries/src/lazy/index.js ***!
  \************************************************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/multiple-entries/src/common.js\");\n\r\n\r\nfunction distance({x:x1, y:y1}, {x:x2, y:y2}) {\r\n    return Math.sqrt(Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"square\"])(x1 - x2) + Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"square\"])(y1 - y2));\r\n}\n\n//# sourceURL=webpack://fib/./src/multiple-entries/src/lazy/index.js?");

/***/ })

};;