/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::after,\\r\\n*::before {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(246, 246, 246);\\r\\n}\\r\\n\\r\\n#toDoForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 45%;\\r\\n  height: auto;\\r\\n  margin: 20vh auto auto auto;\\r\\n  background-color: rgb(246, 246, 246);\\r\\n  box-shadow: 0 4px 20px 3px rgb(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 992px) {\\r\\n  #toDoForm {\\r\\n    width: 70%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  #toDoForm {\\r\\n    width: 85%;\\r\\n  }\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  background: #fff;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 10px;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 20px;\\r\\n  font-weight: 100;\\r\\n  font-style: normal;\\r\\n  padding-top: 8px;\\r\\n}\\r\\n\\r\\ni {\\r\\n  color: rgb(147, 147, 147);\\r\\n}\\r\\n\\r\\n.inputTask {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  border-left: none;\\r\\n  border-bottom: none;\\r\\n  border-right: none;\\r\\n  border-top: 1px solid gray;\\r\\n  height: 50px;\\r\\n  padding: 0 10px;\\r\\n}\\r\\n\\r\\n.inputTask i {\\r\\n  rotate: 90deg;\\r\\n}\\r\\n\\r\\n#addTask {\\r\\n  width: 100%;\\r\\n  height: 45px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#btnClear {\\r\\n  cursor: pointer;\\r\\n  height: 50px;\\r\\n  color: rgb(147, 147, 147);\\r\\n  border-left: none;\\r\\n  border-bottom: none;\\r\\n  border-right: none;\\r\\n  border-top: 1px solid gray;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n#btnClear:hover {\\r\\n  font-size: 19px;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  background: #fff;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  align-items: center;\\r\\n  height: 50px;\\r\\n  border-left: none;\\r\\n  border-bottom: none;\\r\\n  border-right: none;\\r\\n  border-top: 1px solid gray;\\r\\n  padding-left: 10px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.tasks li:nth-child(2) {\\r\\n  padding-left: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.tasks li:nth-child(3) {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-items: flex-end;\\r\\n  margin-left: auto;\\r\\n  padding-right: 15px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\ninput[type=checkbox]:checked + label {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  font-size: 15px;\\r\\n  font-style: italic;\\r\\n  font-weight: 100;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  height: 45px;\\r\\n  width: 95%;\\r\\n  padding-left: 5px;\\r\\n  border: none;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n.textcompleted {\\r\\n  text-decoration: line-through;\\r\\n  border: none;\\r\\n  font-size: 17px;\\r\\n  height: 45px;\\r\\n  width: 95%;\\r\\n  padding-left: 5px;\\r\\n  color: rgb(155, 155, 155);\\r\\n}\\r\\n\\r\\n.edit_btn {\\r\\n  cursor: all-scroll;\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.delete_btn {\\r\\n  cursor: pointer;\\r\\n  display: none;\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://add_new_items/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://add_new_items/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://add_new_items/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://add_new_items/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://add_new_items/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://add_new_items/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://add_new_items/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://add_new_items/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://add_new_items/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://add_new_items/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods.js */ \"./src/methods.js\");\n/* harmony import */ var _interactiveList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactiveList.js */ \"./src/interactiveList.js\");\n\r\n\r\n\r\n\r\nconst inputForm = document.getElementById('inputForm');\r\nconst addTask = document.getElementById('addTask');\r\n\r\ninputForm.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  _methods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTasks(addTask.value);\r\n  addTask.value = '';\r\n});\r\n\r\ndocument.querySelector('.btn_clear_all').addEventListener('click', _interactiveList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearAllTasksCompleted);\r\n\r\nwindow.addEventListener('load', () => {\r\n  document.addEventListener('listUpdated', () => {\r\n    _interactiveList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkStatusEvent();\r\n  }, false);\r\n  _interactiveList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkStatusEvent();\r\n});\r\n\r\n_methods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showTasks();\n\n//# sourceURL=webpack://add_new_items/./src/index.js?");

/***/ }),

/***/ "./src/interactiveList.js":
/*!********************************!*\
  !*** ./src/interactiveList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InteractiveFunction)\n/* harmony export */ });\n/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods.js */ \"./src/methods.js\");\n\r\n\r\nclass InteractiveFunction {\r\n    static changeCompletedTask = (checkboxStatus, id) => {\r\n      const listOfTasks = _methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskFromStorage();\r\n      listOfTasks[id].completed = checkboxStatus;\r\n      _methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskToStorage(listOfTasks);\r\n      _methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showTasks();\r\n    }\r\n\r\n    static checkStatusEvent = () => (\r\n      document.querySelectorAll('.checkbox').forEach((checkbox) => checkbox.addEventListener('change', () => {\r\n        let checkboxStatus;\r\n        let id;\r\n        if (checkbox.id > 0) {\r\n          id = checkbox.id - 1;\r\n        } else {\r\n          id = 0;\r\n        }\r\n\r\n        if (checkbox.checked === true) {\r\n          checkboxStatus = true;\r\n        } else if (checkbox.checked !== true) {\r\n          checkboxStatus = false;\r\n        }\r\n\r\n        this.changeCompletedTask(checkboxStatus, id);\r\n      }))\r\n    )\r\n\r\n    static clearAllTasksCompleted = () => {\r\n      let listOfTasks = _methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskFromStorage();\r\n\r\n      listOfTasks = listOfTasks.filter((item) => item.completed !== true);\r\n      _methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newIndex(listOfTasks);\r\n      _methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskToStorage(listOfTasks);\r\n      _methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showTasks();\r\n    }\r\n}\n\n//# sourceURL=webpack://add_new_items/./src/interactiveList.js?");

/***/ }),

/***/ "./src/mainClass.js":
/*!**************************!*\
  !*** ./src/mainClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCollection)\n/* harmony export */ });\nclass TaskCollection {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\n\n//# sourceURL=webpack://add_new_items/./src/mainClass.js?");

/***/ }),

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UtilityFunction)\n/* harmony export */ });\n/* harmony import */ var _mainClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainClass.js */ \"./src/mainClass.js\");\n\r\n\r\nclass UtilityFunction {\r\n  static getTaskFromStorage = () => {\r\n    let listOfTasks;\r\n\r\n    if (JSON.parse(localStorage.getItem('storedTasksData')) === null) {\r\n      listOfTasks = [];\r\n    } else {\r\n      listOfTasks = JSON.parse(localStorage.getItem('storedTasksData'));\r\n    }\r\n    return listOfTasks;\r\n  };\r\n\r\n  static addTaskToStorage = (listOfTasks) => {\r\n    const item = JSON.stringify(listOfTasks);\r\n    localStorage.setItem('storedTasksData', item);\r\n  };\r\n\r\n  static newIndex = (listOfTasks) => {\r\n    listOfTasks.forEach((item, i) => {\r\n      item.index = i + 1;\r\n    });\r\n  }\r\n\r\n    static deleteTasks = (id) => {\r\n      let listOfTasks = this.getTaskFromStorage();\r\n      const taskToDelete = listOfTasks[id];\r\n\r\n      listOfTasks = listOfTasks.filter((item) => item !== taskToDelete);\r\n\r\n      this.newIndex(listOfTasks);\r\n      this.addTaskToStorage(listOfTasks);\r\n    };\r\n\r\n    static updateTaskInput = (newDescription, id) => {\r\n      const listOfTasks = this.getTaskFromStorage();\r\n      const itemToUpdate = listOfTasks[id];\r\n\r\n      listOfTasks.forEach((item) => {\r\n        if (item === itemToUpdate) {\r\n          item.description = newDescription;\r\n        }\r\n      });\r\n\r\n      this.addTaskToStorage(listOfTasks);\r\n      this.showTasks();\r\n    };\r\n\r\n    static addBtnRemoveEvent = () => {\r\n      document.querySelectorAll('.delete_btn').forEach((button) => button.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        let id;\r\n        if (button.id > 0) {\r\n          id = button.id - 1;\r\n        } else {\r\n          id = 0;\r\n        }\r\n        this.deleteTasks(id);\r\n        this.showTasks();\r\n      }));\r\n    };\r\n\r\n    static listOfTasksHtml = ({ description, index }, checkboxStatus, iscompleted) => {\r\n      const ul = document.createElement('ul');\r\n      ul.className = 'tasks';\r\n      ul.innerHTML = `\r\n        <li><input class=\"checkbox\" id=\"${index}\" type=\"checkbox\" ${checkboxStatus}></li> \r\n        <li><input id=\"TEXT${index}\" type=\"text\" class=\"text${iscompleted}\" value=\"${description}\" readonly></li>\r\n        <li>\r\n        <button class=\"edit_btn\" id=\"${index}\"><i class=\"fa fa-ellipsis-v icon\"></i></button>\r\n        <button class=\"delete_btn\" id=\"${index}\"><i class=\"fa fa-trash-can icon\"></i></button>\r\n        </li>\r\n      `;\r\n      return ul;\r\n    }\r\n\r\n    static showTasks = () => {\r\n      const listOfTasks = this.getTaskFromStorage();\r\n      document.querySelector('.toDoTasksContainer').innerHTML = '';\r\n      listOfTasks.forEach((item) => {\r\n        let checkboxStatus;\r\n        let iscompleted;\r\n        if (item.completed === true) {\r\n          checkboxStatus = 'checked';\r\n          iscompleted = 'completed';\r\n        } else {\r\n          checkboxStatus = '';\r\n          iscompleted = '';\r\n        }\r\n        document.querySelector('.toDoTasksContainer').appendChild(this.listOfTasksHtml(item, checkboxStatus, iscompleted));\r\n      });\r\n\r\n      this.addBtnRemoveEvent();\r\n      this.addBtnEditEvent();\r\n      this.updateBtnEvent();\r\n\r\n      const event = new Event('listUpdated');\r\n      document.dispatchEvent(event);\r\n    };\r\n\r\n    static addTasks = (description) => {\r\n      const listOfTasks = this.getTaskFromStorage();\r\n      const index = listOfTasks.length + 1;\r\n      const newtask = new _mainClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, false, index);\r\n\r\n      listOfTasks.push(newtask);\r\n      this.addTaskToStorage(listOfTasks);\r\n      this.showTasks();\r\n    }\r\n\r\n    static updateBtnEvent = () => {\r\n      document.querySelectorAll('.text').forEach((input) => input.addEventListener('keypress', (event) => {\r\n        if (event.key === 'Enter') {\r\n          event.preventDefault();\r\n          const inputID = 'TEXT';\r\n          const selectedID = event.currentTarget.id;\r\n          let concatID;\r\n\r\n          if (!selectedID.includes('TEXT')) {\r\n            concatID = inputID.concat(selectedID);\r\n          } else {\r\n            concatID = selectedID;\r\n          }\r\n\r\n          document.getElementById(concatID).setAttribute('readonly', 'readonly');\r\n          this.updateTaskInput(document.getElementById(concatID).value, (Number(concatID.replace('TEXT', '')) - 1));\r\n        }\r\n      }));\r\n    }\r\n\r\n    static addBtnEditEvent = () => {\r\n      let previousList = null;\r\n      document.querySelectorAll('.edit_btn').forEach((button) => button.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        const inputID = 'TEXT';\r\n        const selectedID = event.currentTarget.id;\r\n        let concatID;\r\n\r\n        if (!selectedID.includes('TEXT')) {\r\n          concatID = inputID.concat(selectedID);\r\n        } else {\r\n          concatID = selectedID;\r\n        }\r\n\r\n        if (previousList !== null) {\r\n          previousList.getElementById(concatID).removeAttribute('readonly');\r\n        }\r\n\r\n        const listItem = event.target.closest('li');\r\n        previousList = listItem;\r\n        const ulItem = event.target.closest('ul');\r\n\r\n        listItem.style.background = 'rgb(230, 230, 184)';\r\n        ulItem.style.background = 'rgb(230, 230, 184)';\r\n\r\n        document.getElementById(concatID).removeAttribute('readonly');\r\n        document.getElementById(concatID).focus();\r\n        document.getElementById(concatID).style.background = 'rgb(230, 230, 184)';\r\n        listItem.querySelector('.edit_btn').style.display = 'none';\r\n        listItem.querySelector('.delete_btn').style.display = 'block';\r\n      }));\r\n    };\r\n}\n\n//# sourceURL=webpack://add_new_items/./src/methods.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;