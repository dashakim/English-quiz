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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n    background-color: #3f3f41;\\n    margin: 15px\\n}\\n\\nh1 {\\n    font-size: 20pt;\\n}\\n\\n.app {\\n    display: grid;\\n  \\n    color: rgb(245, 245, 245);\\n    text-align: center\\n}\\n\\n.answers {\\n    \\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n    grid-template-rows: 1fr;\\n    grid-gap: 20px;\\n}\\n\\n.answer-button,\\n.next-button {\\n    width: 100%;\\n    font-size: 16pt;\\n    line-height: 1.499;\\n    font-weight: 600;\\n    white-space: nowrap;\\n    text-align: center;\\n    background-color: #3f3f41;\\n    border: 1px solid #ebebeb;\\n    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\\n    cursor: pointer;\\n    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);\\n    transition: all .3s cubic-bezier(.645, .045, .355, 1);\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n    -ms-touch-action: manipulation;\\n    touch-action: manipulation;\\n    padding: 10px 50px;\\n    font-size: 18px;\\n\\n    border-radius: 5px;\\n    color: rgba(255, 255, 255, 0.924);\\n}\\n\\n.answer-button:hover,\\n.next-button:hover {\\n    background-color: rgba(255, 255, 255, 0.924);\\n    color: #3f3f41;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/actions/answerClick.js":
/*!************************************!*\
  !*** ./src/actions/answerClick.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AnswerClick = function AnswerClick(correctAnswer, answer) {\n  _classCallCheck(this, AnswerClick);\n\n  this.correctAnswer = correctAnswer;\n  this.answer = answer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerClick);\n\n//# sourceURL=webpack:///./src/actions/answerClick.js?");

/***/ }),

/***/ "./src/actions/dataLoaded.js":
/*!***********************************!*\
  !*** ./src/actions/dataLoaded.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DataLoaded = function DataLoaded(data) {\n  _classCallCheck(this, DataLoaded);\n\n  this.data = data;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataLoaded);\n\n//# sourceURL=webpack:///./src/actions/dataLoaded.js?");

/***/ }),

/***/ "./src/actions/nextClick.js":
/*!**********************************!*\
  !*** ./src/actions/nextClick.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar NextClick = function NextClick() {\n  _classCallCheck(this, NextClick);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NextClick);\n\n//# sourceURL=webpack:///./src/actions/nextClick.js?");

/***/ }),

/***/ "./src/actions/started.js":
/*!********************************!*\
  !*** ./src/actions/started.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Started = function Started() {\n  _classCallCheck(this, Started);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Started);\n\n//# sourceURL=webpack:///./src/actions/started.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom */ \"./src/lib/dom.js\");\n/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete */ \"./src/components/complete.js\");\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round */ \"./src/components/round.js\");\n\n\n\n\nvar app = function app(signal, state) {\n  var result;\n  if (state.loading) result = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"Loading...\");else if (state.round > state.quiz.length - 1) result = Object(_complete__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();else {\n    var roundData = state.quiz[state.round];\n    result = Object(_round__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(signal, state.quiz.length, state.round, roundData.question, roundData.answers, state.hasAnswered, state.currentAnswer, state.currentCorrectAnswer, roundData.correсtAnswer);\n  }\n  return Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n    className: \"app\"\n  }, result);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/components/app.js?");

/***/ }),

/***/ "./src/components/choice.js":
/*!**********************************!*\
  !*** ./src/components/choice.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom */ \"./src/lib/dom.js\");\n\n\nvar choice = function choice(txt, onclick) {\n  return Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n    className: \"answer\"\n  }, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"button\"])({\n    className: \"answer-button\",\n    onclick: onclick\n  }, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"\".concat(txt))), Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (choice);\n\n//# sourceURL=webpack:///./src/components/choice.js?");

/***/ }),

/***/ "./src/components/choices.js":
/*!***********************************!*\
  !*** ./src/components/choices.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _choice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choice */ \"./src/components/choice.js\");\n/* harmony import */ var _actions_answerClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/answerClick */ \"./src/actions/answerClick.js\");\n\n\n\nvar choices = function choices(signal, answers, correctAnswer) {\n  return answers.map(function (a) {\n    return Object(_choice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, signal(new _actions_answerClick__WEBPACK_IMPORTED_MODULE_1__[\"default\"](correctAnswer, a)));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (choices);\n\n//# sourceURL=webpack:///./src/components/choices.js?");

/***/ }),

/***/ "./src/components/complete.js":
/*!************************************!*\
  !*** ./src/components/complete.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom */ \"./src/lib/dom.js\");\n\n\nvar complete = function complete() {\n  return Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"h1\"])({}, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"Aaaa, vi iz anglii!\"), Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\" :)\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (complete);\n\n//# sourceURL=webpack:///./src/components/complete.js?");

/***/ }),

/***/ "./src/components/question.js":
/*!************************************!*\
  !*** ./src/components/question.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom */ \"./src/lib/dom.js\");\n\n\nvar question = function question(txt) {\n  return Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"h1\"])({}, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"\".concat(txt)), Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"br\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (question);\n\n//# sourceURL=webpack:///./src/components/question.js?");

/***/ }),

/***/ "./src/components/round.js":
/*!*********************************!*\
  !*** ./src/components/round.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom */ \"./src/lib/dom.js\");\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ \"./src/components/question.js\");\n/* harmony import */ var _choices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choices */ \"./src/components/choices.js\");\n/* harmony import */ var _roundResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roundResult */ \"./src/components/roundResult.js\");\n/* harmony import */ var _actions_nextClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/nextClick */ \"./src/actions/nextClick.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\n\nvar round = function round(signal, totalQuestions, currentQuestion, qstion, answrs, hasAnswered, currentAnswer, currentCorrectAnswer, correctAnswer) {\n  var progress = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"h1\"])({}, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"Question \".concat(currentQuestion + 1, \"/\").concat(totalQuestions)), Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"br\"])());\n  var questionTitle = Object(_question__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(qstion);\n  var answers = _lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"].apply(void 0, [{\n    className: \"answers\"\n  }].concat(_toConsumableArray(Object(_choices__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(signal, answrs, correctAnswer))));\n  var resultText = currentAnswer === currentCorrectAnswer ? \"Correct!\" : \"Correct was: \".concat(currentCorrectAnswer);\n  var result = Object(_roundResult__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(resultText, signal(new _actions_nextClick__WEBPACK_IMPORTED_MODULE_4__[\"default\"]()));\n  var round = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n    className: \"round\"\n  }, progress, questionTitle, answers, hasAnswered ? result : Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"\"));\n  return round;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (round);\n\n//# sourceURL=webpack:///./src/components/round.js?");

/***/ }),

/***/ "./src/components/roundResult.js":
/*!***************************************!*\
  !*** ./src/components/roundResult.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom */ \"./src/lib/dom.js\");\n\n\nvar roundResult = function roundResult(result, onNext) {\n  return Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n    className: \"round-result\"\n  }, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"h1\"])({}, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(result)), Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"button\"])({\n    onclick: onNext,\n    className: \"next-button\"\n  }, Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(\"Next question\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (roundResult);\n\n//# sourceURL=webpack:///./src/components/roundResult.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz */ \"./src/quiz.js\");\n/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dom */ \"./src/lib/dom.js\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app */ \"./src/components/app.js\");\n/* harmony import */ var _actions_answerClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/answerClick */ \"./src/actions/answerClick.js\");\n/* harmony import */ var _actions_nextClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/nextClick */ \"./src/actions/nextClick.js\");\n/* harmony import */ var _actions_started__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/started */ \"./src/actions/started.js\");\n/* harmony import */ var _actions_dataLoaded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/dataLoaded */ \"./src/actions/dataLoaded.js\");\n\n\n\n\n\n\n\n\nvar state = {\n  loading: true,\n  quiz: [],\n  round: 0,\n  hasAnswered: false,\n  currentCorrectAnswer: \"\",\n  currentAnswer: \"\",\n  placeholder: {}\n};\n\nvar sleep = function sleep(ms) {\n  ms += new Date().getTime();\n\n  while (new Date() < ms) {}\n};\n\nvar update = function update(signal, model, message) {\n  if (message instanceof _actions_started__WEBPACK_IMPORTED_MODULE_6__[\"default\"]) {\n    model.placeholder = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_2__[\"getElementById\"])('out');\n    fetch('/sentences.json').then(function (response) {\n      return response.json();\n    }).then(function (result) {\n      signal(new _actions_dataLoaded__WEBPACK_IMPORTED_MODULE_7__[\"default\"](result))();\n    });\n  }\n\n  if (message instanceof _actions_dataLoaded__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n    model.quiz = Object(_quiz__WEBPACK_IMPORTED_MODULE_1__[\"generateQuiz\"])(message.data, 100, 4);\n    model.loading = false;\n  }\n\n  if (message instanceof _actions_answerClick__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n    model.hasAnswered = true;\n    model.currentCorrectAnswer = message.correctAnswer;\n    model.currentAnswer = message.answer;\n\n    if (model.currentCorrectAnswer === model.currentAnswer) {\n      setTimeout(signal(new _actions_nextClick__WEBPACK_IMPORTED_MODULE_5__[\"default\"]()), 2000);\n    } else {\n      setTimeout(signal(new _actions_nextClick__WEBPACK_IMPORTED_MODULE_5__[\"default\"]()), 3000);\n    }\n  }\n\n  if (message instanceof _actions_nextClick__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n    model.hasAnswered = false;\n    model.round += 1;\n  }\n\n  console.log(\"Handled: \", message);\n  console.log(model);\n  return model;\n};\n\nvar signal = function signal(action) {\n  return function callback() {\n    state = update(signal, state, action);\n    view(signal, state);\n  };\n};\n\nvar view = function view(signal, model) {\n  return Object(_lib_dom__WEBPACK_IMPORTED_MODULE_2__[\"renderTo\"])(model.placeholder)(Object(_components_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(signal, model));\n};\n\nwindow.onload = signal(new _actions_started__WEBPACK_IMPORTED_MODULE_6__[\"default\"]());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/arrays.js":
/*!***************************!*\
  !*** ./src/lib/arrays.js ***!
  \***************************/
/*! exports provided: range, deleteAt, insertAt, swap, append, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return range; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteAt\", function() { return deleteAt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertAt\", function() { return insertAt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swap\", function() { return swap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/lib/random.js\");\n\nvar range = function range(from, to) {\n  var start = from;\n  var result = [];\n\n  while (start <= to) {\n    result.push(start++);\n  }\n\n  return result;\n};\nvar deleteAt = function deleteAt(array, position) {\n  var copy = array.slice();\n  var deleted = copy.splice(position, 1);\n  return copy;\n};\nvar insertAt = function insertAt(array, item, position) {\n  var result = array.slice();\n  result.splice(position, 0, item);\n  return result;\n};\nvar swap = function swap(array, index1, index2) {\n  var swapped = array[index1];\n  array[index1] = array[index2];\n  array[index2] = swapped;\n};\nvar append = function append(array, el) {\n  var result = array.slice();\n  result.push(el);\n  return result;\n};\nvar shuffle = function shuffle(array) {\n  for (var index = array.length - 1; index >= 0; index--) {\n    swap(array, index, Object(_random__WEBPACK_IMPORTED_MODULE_0__[\"integer\"])(index));\n  }\n\n  return array;\n};\n\n//# sourceURL=webpack:///./src/lib/arrays.js?");

/***/ }),

/***/ "./src/lib/dom.js":
/*!************************!*\
  !*** ./src/lib/dom.js ***!
  \************************/
/*! exports provided: setInner, getElementById, renderTo, button, div, h1, br, text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setInner\", function() { return setInner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElementById\", function() { return getElementById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTo\", function() { return renderTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h1\", function() { return h1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"br\", function() { return br; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\nvar setInner = function setInner(node) {\n  clear(node);\n\n  for (var _len = arguments.length, inner = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    inner[_key - 1] = arguments[_key];\n  }\n\n  return appendInner(node, inner);\n};\nvar getElementById = function getElementById(id) {\n  return document.getElementById(id);\n};\nvar renderTo = function renderTo(where) {\n  return function () {\n    for (var _len2 = arguments.length, inner = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      inner[_key2] = arguments[_key2];\n    }\n\n    return setInner.apply(void 0, [where].concat(inner));\n  };\n};\nvar button = function button(properties) {\n  var el = document.createElement(\"button\");\n  Object.assign(el, properties);\n\n  for (var _len3 = arguments.length, inner = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n    inner[_key3 - 1] = arguments[_key3];\n  }\n\n  return appendInner(el, inner);\n};\nvar div = function div(properties) {\n  var el = document.createElement(\"div\");\n  Object.assign(el, properties);\n\n  for (var _len4 = arguments.length, inner = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {\n    inner[_key4 - 1] = arguments[_key4];\n  }\n\n  return appendInner(el, inner);\n};\nvar h1 = function h1(properties) {\n  var el = document.createElement(\"h1\");\n  Object.assign(el, properties);\n\n  for (var _len5 = arguments.length, inner = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {\n    inner[_key5 - 1] = arguments[_key5];\n  }\n\n  return appendInner(el, inner);\n};\nvar br = function br() {\n  return document.createElement(\"br\");\n};\nvar text = function text(txt) {\n  return document.createTextNode(txt);\n};\n\nvar appendInner = function appendInner(node, inner) {\n  inner.forEach(function (el) {\n    return node.appendChild(el);\n  });\n  return node;\n};\n\nvar clear = function clear(node) {\n  var range = document.createRange();\n  range.selectNodeContents(node);\n  range.deleteContents();\n  return node;\n};\n\n//# sourceURL=webpack:///./src/lib/dom.js?");

/***/ }),

/***/ "./src/lib/random.js":
/*!***************************!*\
  !*** ./src/lib/random.js ***!
  \***************************/
/*! exports provided: integer, choose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"integer\", function() { return integer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"choose\", function() { return choose; });\nvar integer = function integer(max) {\n  return Math.abs(Math.round(Math.random() * (max + 1) - 0.5));\n};\nvar choose = function choose(items, numberToChoose) {\n  var result = [];\n\n  while (result.length < numberToChoose) {\n    var position = integer(items.length - 1);\n    var element = items[position];\n    items.splice(position, 1);\n    result.push(element);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack:///./src/lib/random.js?");

/***/ }),

/***/ "./src/quiz.js":
/*!*********************!*\
  !*** ./src/quiz.js ***!
  \*********************/
/*! exports provided: generateQuiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateQuiz\", function() { return generateQuiz; });\n/* harmony import */ var _lib_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/arrays */ \"./src/lib/arrays.js\");\n/* harmony import */ var _lib_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/random */ \"./src/lib/random.js\");\n\n\nvar generateQuiz = function generateQuiz(data, questionsNumber, answersNumber) {\n  var allQuestions = Object.values(data);\n  var allAnswers = Object.keys(data);\n  var positions = _lib_arrays__WEBPACK_IMPORTED_MODULE_0__[\"range\"](0, allQuestions.length - 1);\n  var chosenQuestions = _lib_random__WEBPACK_IMPORTED_MODULE_1__[\"choose\"](positions, questionsNumber);\n  var result = [];\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = chosenQuestions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var pos = _step.value;\n      var wrongAnswers = _lib_random__WEBPACK_IMPORTED_MODULE_1__[\"choose\"](_lib_arrays__WEBPACK_IMPORTED_MODULE_0__[\"deleteAt\"](allAnswers, pos), answersNumber - 1);\n      var answers = _lib_arrays__WEBPACK_IMPORTED_MODULE_0__[\"append\"](wrongAnswers, allAnswers[pos]);\n      _lib_arrays__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"](answers);\n      var item = {\n        index: pos,\n        question: allQuestions[pos],\n        correсtAnswer: allAnswers[pos],\n        answers: answers\n      };\n      result.push(item);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack:///./src/quiz.js?");

/***/ })

/******/ });