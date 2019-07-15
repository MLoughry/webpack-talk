global["fib"] = (function(modules) {
  // webpackBootstrap
  // The module cache
  var installedModules = {};

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

  // Load entry module and return exports
  return __webpack_require__(
    (__webpack_require__.s = "./src/scss/src/index.js")
  );
})({
  "./node_modules/@microsoft/load-themed-styles/lib/index.js":
    /*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
    /*! no static exports found */
    function(module, exports, __webpack_require__) {
      "use strict";

      /**
       * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
       * to use if that slot is not specified by the theme.
       */
      var __assign =
        (this && this.__assign) ||
        function() {
          __assign =
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      // IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
      // value will initialize as undefined, and later will be set once on first loadStyles injection.
      var _injectStylesWithCssText;
      // Store the theming state in __themeState__ global scope for reuse in the case of duplicate
      // load-themed-styles hosted on the page.
      var _root = typeof window === "undefined" ? global : window; // tslint:disable-line:no-any
      // Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
      var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
      var _themeState = initializeThemeState();
      /**
       * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
       */
      // tslint:disable-next-line:max-line-length
      var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
      /** Maximum style text length, for supporting IE style restrictions. */
      var MAX_STYLE_CONTENT_SIZE = 10000;
      var now = function() {
        return typeof performance !== "undefined" && !!performance.now
          ? performance.now()
          : Date.now();
      };
      function measure(func) {
        var start = now();
        func();
        var end = now();
        _themeState.perf.duration += end - start;
      }
      /**
       * initialize global state object
       */
      function initializeThemeState() {
        var state = _root.__themeState__ || {
          theme: undefined,
          lastStyleElement: undefined,
          registeredStyles: []
        };
        if (!state.runState) {
          state = __assign({}, state, {
            perf: {
              count: 0,
              duration: 0
            },
            runState: {
              flushTimer: 0,
              mode: 0 /* sync */,
              buffer: []
            }
          });
        }
        if (!state.registeredThemableStyles) {
          state = __assign({}, state, { registeredThemableStyles: [] });
        }
        _root.__themeState__ = state;
        return state;
      }
      /**
       * Loads a set of style text. If it is registered too early, we will register it when the window.load
       * event is fired.
       * @param {string | ThemableArray} styles Themable style text to register.
       * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
       */
      function loadStyles(styles, loadAsync) {
        if (loadAsync === void 0) {
          loadAsync = false;
        }
        measure(function() {
          var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
          if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
          }
          var _a = _themeState.runState,
            mode = _a.mode,
            buffer = _a.buffer,
            flushTimer = _a.flushTimer;
          if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
              _themeState.runState.flushTimer = asyncLoadStyles();
            }
          } else {
            applyThemableStyles(styleParts);
          }
        });
      }
      exports.loadStyles = loadStyles;
      /**
       * Allows for customizable loadStyles logic. e.g. for server side rendering application
       * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
       * a loadStyles callback that gets called when styles are loaded or reloaded
       */
      function configureLoadStyles(loadStylesFn) {
        _themeState.loadStyles = loadStylesFn;
      }
      exports.configureLoadStyles = configureLoadStyles;
      /**
       * Configure run mode of load-themable-styles
       * @param mode load-themable-styles run mode, async or sync
       */
      function configureRunMode(mode) {
        _themeState.runState.mode = mode;
      }
      exports.configureRunMode = configureRunMode;
      /**
       * external code can call flush to synchronously force processing of currently buffered styles
       */
      function flush() {
        measure(function() {
          var styleArrays = _themeState.runState.buffer.slice();
          _themeState.runState.buffer = [];
          var mergedStyleArray = [].concat.apply([], styleArrays);
          if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
          }
        });
      }
      exports.flush = flush;
      /**
       * register async loadStyles
       */
      function asyncLoadStyles() {
        return setTimeout(function() {
          _themeState.runState.flushTimer = 0;
          flush();
        }, 0);
      }
      /**
       * Loads a set of style text. If it is registered too early, we will register it when the window.load event
       * is fired.
       * @param {string} styleText Style to register.
       * @param {IStyleRecord} styleRecord Existing style record to re-apply.
       */
      function applyThemableStyles(stylesArray, styleRecord) {
        if (_themeState.loadStyles) {
          _themeState.loadStyles(
            resolveThemableArray(stylesArray).styleString,
            stylesArray
          );
        } else {
          _injectStylesWithCssText
            ? registerStylesIE(stylesArray, styleRecord)
            : registerStyles(stylesArray);
        }
      }
      /**
       * Registers a set theme tokens to find and replace. If styles were already registered, they will be
       * replaced.
       * @param {theme} theme JSON object of theme tokens to values.
       */
      function loadTheme(theme) {
        _themeState.theme = theme;
        // reload styles.
        reloadStyles();
      }
      exports.loadTheme = loadTheme;
      /**
       * Clear already registered style elements and style records in theme_State object
       * @param option - specify which group of registered styles should be cleared.
       * Default to be both themable and non-themable styles will be cleared
       */
      function clearStyles(option) {
        if (option === void 0) {
          option = 3 /* all */;
        }
        if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
          clearStylesInternal(_themeState.registeredStyles);
          _themeState.registeredStyles = [];
        }
        if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
          clearStylesInternal(_themeState.registeredThemableStyles);
          _themeState.registeredThemableStyles = [];
        }
      }
      exports.clearStyles = clearStyles;
      function clearStylesInternal(records) {
        records.forEach(function(styleRecord) {
          var styleElement = styleRecord && styleRecord.styleElement;
          if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
          }
        });
      }
      /**
       * Reloads styles.
       */
      function reloadStyles() {
        if (_themeState.theme) {
          var themableStyles = [];
          for (
            var _i = 0, _a = _themeState.registeredThemableStyles;
            _i < _a.length;
            _i++
          ) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
          }
          if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
          }
        }
      }
      /**
       * Find theme tokens and replaces them with provided theme values.
       * @param {string} styles Tokenized styles to fix.
       */
      function detokenize(styles) {
        if (styles) {
          styles = resolveThemableArray(splitStyles(styles)).styleString;
        }
        return styles;
      }
      exports.detokenize = detokenize;
      /**
       * Resolves ThemingInstruction objects in an array and joins the result into a string.
       * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
       */
      function resolveThemableArray(splitStyleArray) {
        var theme = _themeState.theme;
        var themable = false;
        // Resolve the array of theming instructions to an array of strings.
        // Then join the array to produce the final CSS string.
        var resolvedArray = (splitStyleArray || []).map(function(currentValue) {
          var themeSlot = currentValue.theme;
          if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || "inherit";
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (
              theme &&
              !themedValue &&
              console &&
              !(themeSlot in theme) &&
              typeof DEBUG !== "undefined" &&
              DEBUG
            ) {
              console.warn(
                'Theming value not provided for "' +
                  themeSlot +
                  '". Falling back to "' +
                  defaultValue +
                  '".'
              );
            }
            return themedValue || defaultValue;
          } else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
          }
        });
        return {
          styleString: resolvedArray.join(""),
          themable: themable
        };
      }
      /**
       * Split tokenized CSS into an array of strings and theme specification objects
       * @param {string} styles Tokenized styles to split.
       */
      function splitStyles(styles) {
        var result = [];
        if (styles) {
          var pos = 0; // Current position in styles.
          var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
          while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
              result.push({
                rawString: styles.substring(pos, matchIndex)
              });
            }
            result.push({
              theme: tokenMatch[1],
              defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
          }
          // Push the rest of the string after the last match.
          result.push({
            rawString: styles.substring(pos)
          });
        }
        return result;
      }
      exports.splitStyles = splitStyles;
      /**
       * Registers a set of style text. If it is registered too early, we will register it when the
       * window.load event is fired.
       * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
       * @param {IStyleRecord} styleRecord May specify a style Element to update.
       */
      function registerStyles(styleArray) {
        if (typeof document === "undefined") {
          return;
        }
        var head = document.getElementsByTagName("head")[0];
        var styleElement = document.createElement("style");
        var _a = resolveThemableArray(styleArray),
          styleString = _a.styleString,
          themable = _a.themable;
        styleElement.type = "text/css";
        if (_styleNonce) {
          styleElement.setAttribute("nonce", _styleNonce);
        }
        styleElement.appendChild(document.createTextNode(styleString));
        _themeState.perf.count++;
        head.appendChild(styleElement);
        var record = {
          styleElement: styleElement,
          themableStyle: styleArray
        };
        if (themable) {
          _themeState.registeredThemableStyles.push(record);
        } else {
          _themeState.registeredStyles.push(record);
        }
      }
      /**
       * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
       * to register slightly differently.
       * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
       * @param {IStyleRecord} styleRecord May specify a style Element to update.
       */
      function registerStylesIE(styleArray, styleRecord) {
        if (typeof document === "undefined") {
          return;
        }
        var head = document.getElementsByTagName("head")[0];
        var registeredStyles = _themeState.registeredStyles;
        var lastStyleElement = _themeState.lastStyleElement;
        var stylesheet = lastStyleElement
          ? lastStyleElement.styleSheet
          : undefined;
        var lastStyleContent = stylesheet ? stylesheet.cssText : "";
        var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
        var resolvedStyleText = resolveThemableArray(styleArray).styleString;
        if (
          !lastStyleElement ||
          lastStyleContent.length + resolvedStyleText.length >
            MAX_STYLE_CONTENT_SIZE
        ) {
          lastStyleElement = document.createElement("style");
          lastStyleElement.type = "text/css";
          if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
          } else {
            head.appendChild(lastStyleElement);
          }
          if (!styleRecord) {
            lastRegisteredStyle = {
              styleElement: lastStyleElement,
              themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
          }
        }
        lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
        Array.prototype.push.apply(
          lastRegisteredStyle.themableStyle,
          styleArray
        ); // concat in-place
        // Preserve the theme state.
        _themeState.lastStyleElement = lastStyleElement;
      }
      /**
       * Checks to see if styleSheet exists as a property off of a style element.
       * This will determine if style registration should be done via cssText (<= IE9) or not
       */
      function shouldUseCssText() {
        var useCSSText = false;
        if (typeof document !== "undefined") {
          var emptyStyle = document.createElement("style");
          emptyStyle.type = "text/css";
          useCSSText = !!emptyStyle.styleSheet;
        }
        return useCSSText;
      }
      //# sourceMappingURL=index.js.map

      //# sourceURL=webpack://fib/./node_modules/@microsoft/load-themed-styles/lib/index.js?
    },

  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/scss/src/styles.scss":
    /*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!./src/scss/src/styles.scss ***!
  \***********************************************************************************************************************************************************************/
    /*! no static exports found */
    function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(
        /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
      )(false);
      // Module
      exports.push([
        module.i,
        '._11S1oAud878vCE74TqKF32{color:"[theme:themePrimary, default:#0078D4]"}html[dir=ltr] ._11S1oAud878vCE74TqKF32{padding-left:2px}html[dir=rtl] ._11S1oAud878vCE74TqKF32{padding-right:2px}',
        ""
      ]);
      // Exports
      exports.locals = {
        main: "_11S1oAud878vCE74TqKF32"
      };

      //# sourceURL=webpack://fib/./src/scss/src/styles.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js
    },

  "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
    /*! no static exports found */
    function(module, exports, __webpack_require__) {
      "use strict";

      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function(useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function(item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], "{").concat(content, "}");
            }

            return content;
          }).join("");
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names

        list.i = function(modules, mediaQuery) {
          if (typeof modules === "string") {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, ""]];
          }

          var alreadyImportedModules = {};

          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = modules[_i]; // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            // when a module is imported multiple times with different media queries.
            // I hope this will never occur (Hey this way we have smaller bundles)

            if (item[0] == null || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = "("
                  .concat(item[2], ") and (")
                  .concat(mediaQuery, ")");
              }

              list.push(item);
            }
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ""; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === "function") {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function(source) {
            return "/*# sourceURL="
              .concat(cssMapping.sourceRoot)
              .concat(source, " */");
          });
          return [content]
            .concat(sourceURLs)
            .concat([sourceMapping])
            .join("\n");
        }

        return [content].join("\n");
      } // Adapted from convert-source-map (MIT)

      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(
          unescape(encodeURIComponent(JSON.stringify(sourceMap)))
        );
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
          base64
        );
        return "/*# ".concat(data, " */");
      }

      //# sourceURL=webpack://fib/./node_modules/css-loader/dist/runtime/api.js?
    },

  "./src/scss/src/index.js":
    /*!*******************************!*\
  !*** ./src/scss/src/index.js ***!
  \*******************************/
    /*! exports provided: main */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "main",
        function() {
          return main;
        }
      );
      const styles = __webpack_require__(
        /*! ./styles.scss */ "./src/scss/src/styles.scss"
      );

      function main() {
        console.log(styles.main);
      }

      //# sourceURL=webpack://fib/./src/scss/src/index.js?
    },

  "./src/scss/src/styles.scss":
    /*!**********************************!*\
  !*** ./src/scss/src/styles.scss ***!
  \**********************************/
    /*! no static exports found */
    function(module, exports, __webpack_require__) {
      var content = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/scss/src/styles.scss"
      );
      var loader = __webpack_require__(
        "./node_modules/@microsoft/load-themed-styles/lib/index.js"
      );

      if (typeof content === "string") content = [[module.i, content]];

      // add the styles to the DOM
      for (var i = 0; i < content.length; i++)
        loader.loadStyles(content[i][1], false);

      if (content.locals) module.exports = content.locals;

      //# sourceURL=webpack://fib/./src/scss/src/styles.scss?
    }
});
