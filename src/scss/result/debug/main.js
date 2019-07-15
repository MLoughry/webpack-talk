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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scss/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@microsoft/load-themed-styles/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/**\r\n * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value\r\n * to use if that slot is not specified by the theme.\r\n */\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this\r\n// value will initialize as undefined, and later will be set once on first loadStyles injection.\r\nvar _injectStylesWithCssText;\r\n// Store the theming state in __themeState__ global scope for reuse in the case of duplicate\r\n// load-themed-styles hosted on the page.\r\nvar _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any\r\n// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).\r\nvar _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;\r\nvar _themeState = initializeThemeState();\r\n/**\r\n * Matches theming tokens. For example, \"[theme: themeSlotName, default: #FFF]\" (including the quotes).\r\n */\r\n// tslint:disable-next-line:max-line-length\r\nvar _themeTokenRegex = /[\\'\\\"]\\[theme:\\s*(\\w+)\\s*(?:\\,\\s*default:\\s*([\\\\\"\\']?[\\.\\,\\(\\)\\#\\-\\s\\w]*[\\.\\,\\(\\)\\#\\-\\w][\\\"\\']?))?\\s*\\][\\'\\\"]/g;\r\n/** Maximum style text length, for supporting IE style restrictions. */\r\nvar MAX_STYLE_CONTENT_SIZE = 10000;\r\nvar now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };\r\nfunction measure(func) {\r\n    var start = now();\r\n    func();\r\n    var end = now();\r\n    _themeState.perf.duration += end - start;\r\n}\r\n/**\r\n * initialize global state object\r\n */\r\nfunction initializeThemeState() {\r\n    var state = _root.__themeState__ || {\r\n        theme: undefined,\r\n        lastStyleElement: undefined,\r\n        registeredStyles: []\r\n    };\r\n    if (!state.runState) {\r\n        state = __assign({}, (state), { perf: {\r\n                count: 0,\r\n                duration: 0\r\n            }, runState: {\r\n                flushTimer: 0,\r\n                mode: 0 /* sync */,\r\n                buffer: []\r\n            } });\r\n    }\r\n    if (!state.registeredThemableStyles) {\r\n        state = __assign({}, (state), { registeredThemableStyles: [] });\r\n    }\r\n    _root.__themeState__ = state;\r\n    return state;\r\n}\r\n/**\r\n * Loads a set of style text. If it is registered too early, we will register it when the window.load\r\n * event is fired.\r\n * @param {string | ThemableArray} styles Themable style text to register.\r\n * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.\r\n */\r\nfunction loadStyles(styles, loadAsync) {\r\n    if (loadAsync === void 0) { loadAsync = false; }\r\n    measure(function () {\r\n        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);\r\n        if (_injectStylesWithCssText === undefined) {\r\n            _injectStylesWithCssText = shouldUseCssText();\r\n        }\r\n        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;\r\n        if (loadAsync || mode === 1 /* async */) {\r\n            buffer.push(styleParts);\r\n            if (!flushTimer) {\r\n                _themeState.runState.flushTimer = asyncLoadStyles();\r\n            }\r\n        }\r\n        else {\r\n            applyThemableStyles(styleParts);\r\n        }\r\n    });\r\n}\r\nexports.loadStyles = loadStyles;\r\n/**\r\n * Allows for customizable loadStyles logic. e.g. for server side rendering application\r\n * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}\r\n * a loadStyles callback that gets called when styles are loaded or reloaded\r\n */\r\nfunction configureLoadStyles(loadStylesFn) {\r\n    _themeState.loadStyles = loadStylesFn;\r\n}\r\nexports.configureLoadStyles = configureLoadStyles;\r\n/**\r\n * Configure run mode of load-themable-styles\r\n * @param mode load-themable-styles run mode, async or sync\r\n */\r\nfunction configureRunMode(mode) {\r\n    _themeState.runState.mode = mode;\r\n}\r\nexports.configureRunMode = configureRunMode;\r\n/**\r\n * external code can call flush to synchronously force processing of currently buffered styles\r\n */\r\nfunction flush() {\r\n    measure(function () {\r\n        var styleArrays = _themeState.runState.buffer.slice();\r\n        _themeState.runState.buffer = [];\r\n        var mergedStyleArray = [].concat.apply([], styleArrays);\r\n        if (mergedStyleArray.length > 0) {\r\n            applyThemableStyles(mergedStyleArray);\r\n        }\r\n    });\r\n}\r\nexports.flush = flush;\r\n/**\r\n * register async loadStyles\r\n */\r\nfunction asyncLoadStyles() {\r\n    return setTimeout(function () {\r\n        _themeState.runState.flushTimer = 0;\r\n        flush();\r\n    }, 0);\r\n}\r\n/**\r\n * Loads a set of style text. If it is registered too early, we will register it when the window.load event\r\n * is fired.\r\n * @param {string} styleText Style to register.\r\n * @param {IStyleRecord} styleRecord Existing style record to re-apply.\r\n */\r\nfunction applyThemableStyles(stylesArray, styleRecord) {\r\n    if (_themeState.loadStyles) {\r\n        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);\r\n    }\r\n    else {\r\n        _injectStylesWithCssText ?\r\n            registerStylesIE(stylesArray, styleRecord) :\r\n            registerStyles(stylesArray);\r\n    }\r\n}\r\n/**\r\n * Registers a set theme tokens to find and replace. If styles were already registered, they will be\r\n * replaced.\r\n * @param {theme} theme JSON object of theme tokens to values.\r\n */\r\nfunction loadTheme(theme) {\r\n    _themeState.theme = theme;\r\n    // reload styles.\r\n    reloadStyles();\r\n}\r\nexports.loadTheme = loadTheme;\r\n/**\r\n * Clear already registered style elements and style records in theme_State object\r\n * @param option - specify which group of registered styles should be cleared.\r\n * Default to be both themable and non-themable styles will be cleared\r\n */\r\nfunction clearStyles(option) {\r\n    if (option === void 0) { option = 3 /* all */; }\r\n    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {\r\n        clearStylesInternal(_themeState.registeredStyles);\r\n        _themeState.registeredStyles = [];\r\n    }\r\n    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {\r\n        clearStylesInternal(_themeState.registeredThemableStyles);\r\n        _themeState.registeredThemableStyles = [];\r\n    }\r\n}\r\nexports.clearStyles = clearStyles;\r\nfunction clearStylesInternal(records) {\r\n    records.forEach(function (styleRecord) {\r\n        var styleElement = styleRecord && styleRecord.styleElement;\r\n        if (styleElement && styleElement.parentElement) {\r\n            styleElement.parentElement.removeChild(styleElement);\r\n        }\r\n    });\r\n}\r\n/**\r\n * Reloads styles.\r\n */\r\nfunction reloadStyles() {\r\n    if (_themeState.theme) {\r\n        var themableStyles = [];\r\n        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {\r\n            var styleRecord = _a[_i];\r\n            themableStyles.push(styleRecord.themableStyle);\r\n        }\r\n        if (themableStyles.length > 0) {\r\n            clearStyles(1 /* onlyThemable */);\r\n            applyThemableStyles([].concat.apply([], themableStyles));\r\n        }\r\n    }\r\n}\r\n/**\r\n * Find theme tokens and replaces them with provided theme values.\r\n * @param {string} styles Tokenized styles to fix.\r\n */\r\nfunction detokenize(styles) {\r\n    if (styles) {\r\n        styles = resolveThemableArray(splitStyles(styles)).styleString;\r\n    }\r\n    return styles;\r\n}\r\nexports.detokenize = detokenize;\r\n/**\r\n * Resolves ThemingInstruction objects in an array and joins the result into a string.\r\n * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.\r\n */\r\nfunction resolveThemableArray(splitStyleArray) {\r\n    var theme = _themeState.theme;\r\n    var themable = false;\r\n    // Resolve the array of theming instructions to an array of strings.\r\n    // Then join the array to produce the final CSS string.\r\n    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {\r\n        var themeSlot = currentValue.theme;\r\n        if (themeSlot) {\r\n            themable = true;\r\n            // A theming annotation. Resolve it.\r\n            var themedValue = theme ? theme[themeSlot] : undefined;\r\n            var defaultValue = currentValue.defaultValue || 'inherit';\r\n            // Warn to console if we hit an unthemed value even when themes are provided, but only if \"DEBUG\" is true.\r\n            // Allow the themedValue to be undefined to explicitly request the default value.\r\n            if (theme && !themedValue && console && !(themeSlot in theme) && typeof DEBUG !== 'undefined' && DEBUG) {\r\n                console.warn(\"Theming value not provided for \\\"\" + themeSlot + \"\\\". Falling back to \\\"\" + defaultValue + \"\\\".\");\r\n            }\r\n            return themedValue || defaultValue;\r\n        }\r\n        else {\r\n            // A non-themable string. Preserve it.\r\n            return currentValue.rawString;\r\n        }\r\n    });\r\n    return {\r\n        styleString: resolvedArray.join(''),\r\n        themable: themable\r\n    };\r\n}\r\n/**\r\n * Split tokenized CSS into an array of strings and theme specification objects\r\n * @param {string} styles Tokenized styles to split.\r\n */\r\nfunction splitStyles(styles) {\r\n    var result = [];\r\n    if (styles) {\r\n        var pos = 0; // Current position in styles.\r\n        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword\r\n        while (tokenMatch = _themeTokenRegex.exec(styles)) {\r\n            var matchIndex = tokenMatch.index;\r\n            if (matchIndex > pos) {\r\n                result.push({\r\n                    rawString: styles.substring(pos, matchIndex)\r\n                });\r\n            }\r\n            result.push({\r\n                theme: tokenMatch[1],\r\n                defaultValue: tokenMatch[2] // May be undefined\r\n            });\r\n            // index of the first character after the current match\r\n            pos = _themeTokenRegex.lastIndex;\r\n        }\r\n        // Push the rest of the string after the last match.\r\n        result.push({\r\n            rawString: styles.substring(pos)\r\n        });\r\n    }\r\n    return result;\r\n}\r\nexports.splitStyles = splitStyles;\r\n/**\r\n * Registers a set of style text. If it is registered too early, we will register it when the\r\n * window.load event is fired.\r\n * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.\r\n * @param {IStyleRecord} styleRecord May specify a style Element to update.\r\n */\r\nfunction registerStyles(styleArray) {\r\n    if (typeof document === 'undefined') {\r\n        return;\r\n    }\r\n    var head = document.getElementsByTagName('head')[0];\r\n    var styleElement = document.createElement('style');\r\n    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;\r\n    styleElement.type = 'text/css';\r\n    if (_styleNonce) {\r\n        styleElement.setAttribute('nonce', _styleNonce);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(styleString));\r\n    _themeState.perf.count++;\r\n    head.appendChild(styleElement);\r\n    var record = {\r\n        styleElement: styleElement,\r\n        themableStyle: styleArray\r\n    };\r\n    if (themable) {\r\n        _themeState.registeredThemableStyles.push(record);\r\n    }\r\n    else {\r\n        _themeState.registeredStyles.push(record);\r\n    }\r\n}\r\n/**\r\n * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need\r\n * to register slightly differently.\r\n * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.\r\n * @param {IStyleRecord} styleRecord May specify a style Element to update.\r\n */\r\nfunction registerStylesIE(styleArray, styleRecord) {\r\n    if (typeof document === 'undefined') {\r\n        return;\r\n    }\r\n    var head = document.getElementsByTagName('head')[0];\r\n    var registeredStyles = _themeState.registeredStyles;\r\n    var lastStyleElement = _themeState.lastStyleElement;\r\n    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;\r\n    var lastStyleContent = stylesheet ? stylesheet.cssText : '';\r\n    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];\r\n    var resolvedStyleText = resolveThemableArray(styleArray).styleString;\r\n    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {\r\n        lastStyleElement = document.createElement('style');\r\n        lastStyleElement.type = 'text/css';\r\n        if (styleRecord) {\r\n            head.replaceChild(lastStyleElement, styleRecord.styleElement);\r\n            styleRecord.styleElement = lastStyleElement;\r\n        }\r\n        else {\r\n            head.appendChild(lastStyleElement);\r\n        }\r\n        if (!styleRecord) {\r\n            lastRegisteredStyle = {\r\n                styleElement: lastStyleElement,\r\n                themableStyle: styleArray\r\n            };\r\n            registeredStyles.push(lastRegisteredStyle);\r\n        }\r\n    }\r\n    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);\r\n    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place\r\n    // Preserve the theme state.\r\n    _themeState.lastStyleElement = lastStyleElement;\r\n}\r\n/**\r\n * Checks to see if styleSheet exists as a property off of a style element.\r\n * This will determine if style registration should be done via cssText (<= IE9) or not\r\n */\r\nfunction shouldUseCssText() {\r\n    var useCSSText = false;\r\n    if (typeof document !== 'undefined') {\r\n        var emptyStyle = document.createElement('style');\r\n        emptyStyle.type = 'text/css';\r\n        useCSSText = !!emptyStyle.styleSheet;\r\n    }\r\n    return useCSSText;\r\n}\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://fib/./node_modules/@microsoft/load-themed-styles/lib/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/scss/src/styles.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!./src/scss/src/styles.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._11S1oAud878vCE74TqKF32{color:\\\"[theme:themePrimary, default:#0078D4]\\\"}html[dir=ltr] ._11S1oAud878vCE74TqKF32{padding-left:2px}html[dir=rtl] ._11S1oAud878vCE74TqKF32{padding-right:2px}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"main\": \"_11S1oAud878vCE74TqKF32\"\n};\n\n//# sourceURL=webpack://fib/./src/scss/src/styles.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://fib/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/src/index.js":
/*!*******************************!*\
  !*** ./src/scss/src/index.js ***!
  \*******************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\nconst styles = __webpack_require__(/*! ./styles.scss */ \"./src/scss/src/styles.scss\");\r\n\r\nfunction main() {\r\n    console.log(styles.main);\r\n}\n\n//# sourceURL=webpack://fib/./src/scss/src/index.js?");

/***/ }),

/***/ "./src/scss/src/styles.scss":
/*!**********************************!*\
  !*** ./src/scss/src/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/postcss-loader/src??ref--4-2!../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/scss/src/styles.scss\");\nvar loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ \"./node_modules/@microsoft/load-themed-styles/lib/index.js\");\n\nif(typeof content === \"string\") content = [[module.i, content]];\n\n// add the styles to the DOM\nfor (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], false);\n\nif(content.locals) module.exports = content.locals;\n\n//# sourceURL=webpack://fib/./src/scss/src/styles.scss?");

/***/ })

/******/ });