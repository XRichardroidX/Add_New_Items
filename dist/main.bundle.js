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

/***/ "./modules/checkAndClear.js":
/*!**********************************!*\
  !*** ./modules/checkAndClear.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkTodo\": () => (/* binding */ checkTodo),\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted)\n/* harmony export */ });\nconst clearAllCompleted = (todosArray) => {\r\n  const checkedTodos = document.querySelectorAll('input[type=\"checkbox\"]:checked');\r\n  // If there are no checked todos\r\n  if (checkedTodos.length === 0) {\r\n    // Do nothing\r\n  } else {\r\n    // Get the todos from the local storage\r\n    let todos = JSON.parse(localStorage.getItem('todos'));\r\n    // Filter out the todos that are not checked\r\n    todos = todos.filter((todo) => todo.completed === false);\r\n    // Save the new todos to the local storage\r\n    todosArray = todos;\r\n    localStorage.setItem('todos', JSON.stringify(todosArray));\r\n    // Reload the page\r\n    window.location.reload();\r\n  }\r\n};\r\n\r\nconst checkTodo = (todosArray) => {\r\n  document.querySelectorAll('input[type=\"checkbox\"]').forEach((item) => {\r\n    item.addEventListener('change', (e) => {\r\n      // Only on the index being checked\r\n      if (e.target.checked) {\r\n        todosArray = JSON.parse(localStorage.getItem('todos'));\r\n        // Find the element with the same index\r\n        const todo = todosArray.find((todo) => todo.index === parseInt(e.target.id, 10));\r\n        // Add the new value to the todo\r\n        todo.completed = true;\r\n        // Save the new value to the local storage\r\n        localStorage.setItem('todos', JSON.stringify(todosArray));\r\n        // // Reload the page\r\n        window.location.reload();\r\n      } else {\r\n        todosArray = JSON.parse(localStorage.getItem('todos'));\r\n        // Find the element with the same index\r\n        const todo = todosArray.find((todo) => todo.index === parseInt(e.target.id, 10));\r\n        // Add the new value to the todo\r\n        todo.completed = false;\r\n        // Save the new value to the local storage\r\n        localStorage.setItem('todos', JSON.stringify(todosArray));\r\n        // // Reload the page\r\n        window.location.reload();\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://add_new_items/./modules/checkAndClear.js?");

/***/ }),

/***/ "./modules/editTodo.js":
/*!*****************************!*\
  !*** ./modules/editTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst editTodo = (todosArray) => {\r\n  document.querySelectorAll('.todo-desc').forEach((item) => {\r\n    if (item) {\r\n      item.addEventListener('keypress', (e) => {\r\n        if (e.key === 'Enter' && item.value.trim() !== '') {\r\n          todosArray = JSON.parse(localStorage.getItem('todos'));\r\n          // Find the element with the same index\r\n          const todo = todosArray.find((todo) => todo.index === parseInt(item.id.replace('todo-', ''), 10));\r\n          // Add the new value to the todo\r\n          todo.description = item.value;\r\n          // Save the new value to the local storage\r\n          localStorage.setItem('todos', JSON.stringify(todosArray));\r\n          // Reload the page\r\n          window.location.reload();\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodo);\n\n//# sourceURL=webpack://add_new_items/./modules/editTodo.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: sans-serif;\\r\\n  min-height: 100vh;\\r\\n  overflow: hidden;\\r\\n  background-color: black;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  margin: 10% 0 10% 0;\\r\\n  height: 82vh;\\r\\n  width: 100vw;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nsvg {\\r\\n  fill: white;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  from {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Scale svg on hover */\\r\\nsvg:hover {\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n\\r\\n.refresh:hover {\\r\\n  animation: spin 1s linear infinite;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 0.2px solid rgb(123, 123, 123);\\r\\n  align-items: center;\\r\\n  padding: 0 20px;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.header .demo {\\r\\n  text-align: center;\\r\\n  position: absolute;\\r\\n  z-index: 8;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.todo-wrap {\\r\\n  width: 500px;\\r\\n  height: 500px;\\r\\n  background: #ffffff50;\\r\\n  backdrop-filter: blur(10px);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  box-shadow: 0 4px 12px;\\r\\n  align-items: center;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 12rem;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  width: 100%;\\r\\n  height: 70%;\\r\\n  overflow-x: hidden;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.wrapper::-webkit-scrollbar {\\r\\n  background-color: transparent;\\r\\n  width: 5px;\\r\\n}\\r\\n\\r\\n.wrapper::-webkit-scrollbar-thumb {\\r\\n  background-color: rgb(19, 97, 158);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.todo-name {\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n  margin-top: 10px;\\r\\n  border-radius: 5px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n.todo-name:focus {\\r\\n  border-bottom: 0.2px solid rgb(123, 123, 123);\\r\\n  border-radius: 0;\\r\\n}\\r\\n\\r\\n.todo-name::placeholder {\\r\\n  color: rgb(123, 123, 123);\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n  background-color: white;\\r\\n  margin: 10px 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding-left: 10px;\\r\\n  border-bottom: 0.2px solid rgb(123, 123, 123);\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.item input {\\r\\n  margin-left: 10px;\\r\\n  color: rgb(123, 123, 123);\\r\\n}\\r\\n\\r\\n.item:hover {\\r\\n  background-color: #ffffff80;\\r\\n}\\r\\n\\r\\n/* Create button with no margin */\\r\\n.clear-btn {\\r\\n  margin: 0;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  margin-bottom: -10px;\\r\\n  color: rgb(123, 123, 123);\\r\\n  font-size: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clear-btn:hover {\\r\\n  background-color: #ffffff80;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://add_new_items/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://add_new_items/./src/style.css?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_checkAndClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/checkAndClear.js */ \"./modules/checkAndClear.js\");\n/* harmony import */ var _modules_editTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/editTodo.js */ \"./modules/editTodo.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\nconst todoList = document.querySelector('.wrapper');\r\nconst inputTodo = document.querySelector('#todo-name');\r\nlet todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];\r\n\r\nconst getValueFromInput = () => {\r\n  const todoValue = inputTodo.value;\r\n  inputTodo.value = '';\r\n  return todoValue;\r\n};\r\n\r\nconst createTodo = (todoValue) => {\r\n  const todo = document.createElement('li');\r\n  todo.classList.add('item');\r\n  todo.innerHTML = `\r\n  <div>\r\n  <input id=${todoValue.index} type=\"checkbox\" ${todoValue.completed ? 'checked' : ''}>\r\n  <input type=\"text\" id=\"todo-${todoValue.index}\" class=\"todo-desc\" value=\"${todoValue.description}\">\r\n</div>\r\n<svg class=\"w-6 h-6 ${todoValue.description}\" id=${todoValue.index} fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"></path></svg>\r\n    `;\r\n  todoList.appendChild(todo);\r\n  // Reload the page\r\n};\r\n\r\nconst createTodoFromTheLocalStorage = () => {\r\n  const todos = JSON.parse(localStorage.getItem('todos'));\r\n  if (todos) {\r\n    todosArray = [];\r\n    todos.forEach((todo) => {\r\n      todosArray.push({\r\n        index: todo.index,\r\n        description: todo.description,\r\n        completed: todo.completed,\r\n      });\r\n      createTodo(todo);\r\n    });\r\n  }\r\n};\r\n\r\nconst saveTodoToLocalStorage = () => {\r\n  localStorage.setItem('todos', JSON.stringify(todosArray));\r\n};\r\n\r\n// Add todo when enter key is pressed\r\ninputTodo.addEventListener('keypress', (e) => {\r\n  // Check if input is empty by removing the spaces\r\n  if (e.key === 'Enter' && inputTodo.value.trim() !== '') {\r\n    const todoValue = getValueFromInput();\r\n    todosArray.push({\r\n      index: todosArray.length + 1,\r\n      description: todoValue,\r\n      completed: false,\r\n    });\r\n    saveTodoToLocalStorage();\r\n    createTodo(todosArray[todosArray.length - 1]);\r\n    deleteTodo();\r\n  }\r\n} );\r\n\r\n\r\nconst deleteTodo = () => {\r\n  // Delete todo when the svg is clicked\r\n  document.querySelectorAll('.w-6').forEach((item) => {\r\n    if (item) {\r\n      item.addEventListener('click', (e) => {\r\n        let todos = JSON.parse(localStorage.getItem('todos'));\r\n        // If there is only one todo item\r\n        if (todos.length === 1) {\r\n          todos = [];\r\n          localStorage.setItem('todos', JSON.stringify(todos));\r\n          window.location.reload();\r\n          return;\r\n        }\r\n        // Find the parent of the svg\r\n        const parent = e.target.parentElement.parentElement;\r\n        // Find the index of the todo\r\n        const index = e.target.parentElement.id;\r\n        todos = todos.filter((todo) => todo.index !== parseInt(index, 10));\r\n        todosArray = todos;\r\n        saveTodoToLocalStorage();\r\n        parent.remove();\r\n        // Iterate through the todos and update the index\r\n        todos.forEach((todo, i) => {\r\n          todo.index = i + 1;\r\n        });\r\n        todosArray = todos;\r\n        localStorage.setItem('todos', JSON.stringify(todos));\r\n        // Reload the page\r\n        window.location.reload();\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\nwindow.onload = () => {\r\n  deleteTodo();\r\n};\r\n\r\ndocument.querySelector('.clear-btn').addEventListener('click', () => (0,_modules_checkAndClear_js__WEBPACK_IMPORTED_MODULE_0__.clearAllCompleted)(todosArray));\r\n\r\n// Get todos from local storage on page load\r\ndocument.addEventListener( 'DOMContentLoaded', createTodoFromTheLocalStorage );\r\n\r\n// Reload the page whenever the innerHTML of the todo list changes\r\ntodoList.addEventListener('DOMSubtreeModified', () => {\r\n  (0,_modules_editTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todosArray);\r\n  (0,_modules_checkAndClear_js__WEBPACK_IMPORTED_MODULE_0__.checkTodo)(todosArray);\r\n});\r\n\n\n//# sourceURL=webpack://add_new_items/./src/index.js?");

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