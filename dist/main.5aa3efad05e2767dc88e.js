/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/poppins.css":
/*!*******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/poppins.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets//fonts/Poppins-Regular.ttf */ \"./assets/fonts/Poppins-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n  font-family: \\\"Roboto\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/poppins.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!normalize.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./poppins.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/poppins.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/attractive-beautiful-woman.jpg */ \"./assets/attractive-beautiful-woman.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  padding: 2rem;\\r\\n  color: white;\\r\\n  background: red;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 600px;\\r\\n  height: 350px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./assets/attractive-beautiful-woman.jpg":
/*!***********************************************!*\
  !*** ./assets/attractive-beautiful-woman.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7e7e393017f24c7c51f39f07c340a8b8.jpg\");\n\n//# sourceURL=webpack:///./assets/attractive-beautiful-woman.jpg?");

/***/ }),

/***/ "./assets/csv.csv":
/*!************************!*\
  !*** ./assets/csv.csv ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [[\"LatD\",\" \\\"LatM\\\"\",\" \\\"LatS\\\"\",\" \\\"NS\\\"\",\" \\\"LonD\\\"\",\" \\\"LonM\\\"\",\" \\\"LonS\\\"\",\" \\\"EW\\\"\",\" \\\"City\\\"\",\" \\\"State\\\"\"],[\"   41\",\"    5\",\"   59\",\" \\\"N\\\"\",\"     80\",\"   39\",\"    0\",\" \\\"W\\\"\",\" \\\"Youngstown\\\"\",\" OH\"],[\"   42\",\"   52\",\"   48\",\" \\\"N\\\"\",\"     97\",\"   23\",\"   23\",\" \\\"W\\\"\",\" \\\"Yankton\\\"\",\" SD\"],[\"   46\",\"   35\",\"   59\",\" \\\"N\\\"\",\"    120\",\"   30\",\"   36\",\" \\\"W\\\"\",\" \\\"Yakima\\\"\",\" WA\"],[\"   42\",\"   16\",\"   12\",\" \\\"N\\\"\",\"     71\",\"   48\",\"    0\",\" \\\"W\\\"\",\" \\\"Worcester\\\"\",\" MA\"],[\"   43\",\"   37\",\"   48\",\" \\\"N\\\"\",\"     89\",\"   46\",\"   11\",\" \\\"W\\\"\",\" \\\"Wisconsin Dells\\\"\",\" WI\"],[\"   36\",\"    5\",\"   59\",\" \\\"N\\\"\",\"     80\",\"   15\",\"    0\",\" \\\"W\\\"\",\" \\\"Winston-Salem\\\"\",\" NC\"],[\"   49\",\"   52\",\"   48\",\" \\\"N\\\"\",\"     97\",\"    9\",\"    0\",\" \\\"W\\\"\",\" \\\"Winnipeg\\\"\",\" MB\"],[\"   39\",\"   11\",\"   23\",\" \\\"N\\\"\",\"     78\",\"    9\",\"   36\",\" \\\"W\\\"\",\" \\\"Winchester\\\"\",\" VA\"],[\"   34\",\"   14\",\"   24\",\" \\\"N\\\"\",\"     77\",\"   55\",\"   11\",\" \\\"W\\\"\",\" \\\"Wilmington\\\"\",\" NC\"],[\"   39\",\"   45\",\"    0\",\" \\\"N\\\"\",\"     75\",\"   33\",\"    0\",\" \\\"W\\\"\",\" \\\"Wilmington\\\"\",\" DE\"],[\"   48\",\"    9\",\"    0\",\" \\\"N\\\"\",\"    103\",\"   37\",\"   12\",\" \\\"W\\\"\",\" \\\"Williston\\\"\",\" ND\"],[\"   41\",\"   15\",\"    0\",\" \\\"N\\\"\",\"     77\",\"    0\",\"    0\",\" \\\"W\\\"\",\" \\\"Williamsport\\\"\",\" PA\"],[\"   37\",\"   40\",\"   48\",\" \\\"N\\\"\",\"     82\",\"   16\",\"   47\",\" \\\"W\\\"\",\" \\\"Williamson\\\"\",\" WV\"],[\"   33\",\"   54\",\"    0\",\" \\\"N\\\"\",\"     98\",\"   29\",\"   23\",\" \\\"W\\\"\",\" \\\"Wichita Falls\\\"\",\" TX\"],[\"   37\",\"   41\",\"   23\",\" \\\"N\\\"\",\"     97\",\"   20\",\"   23\",\" \\\"W\\\"\",\" \\\"Wichita\\\"\",\" KS\"],[\"   40\",\"    4\",\"   11\",\" \\\"N\\\"\",\"     80\",\"   43\",\"   12\",\" \\\"W\\\"\",\" \\\"Wheeling\\\"\",\" WV\"],[\"   26\",\"   43\",\"   11\",\" \\\"N\\\"\",\"     80\",\"    3\",\"    0\",\" \\\"W\\\"\",\" \\\"West Palm Beach\\\"\",\" FL\"],[\"   47\",\"   25\",\"   11\",\" \\\"N\\\"\",\"    120\",\"   19\",\"   11\",\" \\\"W\\\"\",\" \\\"Wenatchee\\\"\",\" WA\"],[\"   41\",\"   25\",\"   11\",\" \\\"N\\\"\",\"    122\",\"   23\",\"   23\",\" \\\"W\\\"\",\" \\\"Weed\\\"\",\" CA\"],[\"   31\",\"   13\",\"   11\",\" \\\"N\\\"\",\"     82\",\"   20\",\"   59\",\" \\\"W\\\"\",\" \\\"Waycross\\\"\",\" GA\"],[\"   44\",\"   57\",\"   35\",\" \\\"N\\\"\",\"     89\",\"   38\",\"   23\",\" \\\"W\\\"\",\" \\\"Wausau\\\"\",\" WI\"],[\"   42\",\"   21\",\"   36\",\" \\\"N\\\"\",\"     87\",\"   49\",\"   48\",\" \\\"W\\\"\",\" \\\"Waukegan\\\"\",\" IL\"],[\"   44\",\"   54\",\"    0\",\" \\\"N\\\"\",\"     97\",\"    6\",\"   36\",\" \\\"W\\\"\",\" \\\"Watertown\\\"\",\" SD\"],[\"   43\",\"   58\",\"   47\",\" \\\"N\\\"\",\"     75\",\"   55\",\"   11\",\" \\\"W\\\"\",\" \\\"Watertown\\\"\",\" NY\"],[\"   42\",\"   30\",\"    0\",\" \\\"N\\\"\",\"     92\",\"   20\",\"   23\",\" \\\"W\\\"\",\" \\\"Waterloo\\\"\",\" IA\"],[\"   41\",\"   32\",\"   59\",\" \\\"N\\\"\",\"     73\",\"    3\",\"    0\",\" \\\"W\\\"\",\" \\\"Waterbury\\\"\",\" CT\"],[\"   38\",\"   53\",\"   23\",\" \\\"N\\\"\",\"     77\",\"    1\",\"   47\",\" \\\"W\\\"\",\" \\\"Washington\\\"\",\" DC\"],[\"   41\",\"   50\",\"   59\",\" \\\"N\\\"\",\"     79\",\"    8\",\"   23\",\" \\\"W\\\"\",\" \\\"Warren\\\"\",\" PA\"],[\"   46\",\"    4\",\"   11\",\" \\\"N\\\"\",\"    118\",\"   19\",\"   48\",\" \\\"W\\\"\",\" \\\"Walla Walla\\\"\",\" WA\"],[\"   31\",\"   32\",\"   59\",\" \\\"N\\\"\",\"     97\",\"    8\",\"   23\",\" \\\"W\\\"\",\" \\\"Waco\\\"\",\" TX\"],[\"   38\",\"   40\",\"   48\",\" \\\"N\\\"\",\"     87\",\"   31\",\"   47\",\" \\\"W\\\"\",\" \\\"Vincennes\\\"\",\" IN\"],[\"   28\",\"   48\",\"   35\",\" \\\"N\\\"\",\"     97\",\"    0\",\"   36\",\" \\\"W\\\"\",\" \\\"Victoria\\\"\",\" TX\"],[\"   32\",\"   20\",\"   59\",\" \\\"N\\\"\",\"     90\",\"   52\",\"   47\",\" \\\"W\\\"\",\" \\\"Vicksburg\\\"\",\" MS\"],[\"   49\",\"   16\",\"   12\",\" \\\"N\\\"\",\"    123\",\"    7\",\"   12\",\" \\\"W\\\"\",\" \\\"Vancouver\\\"\",\" BC\"],[\"   46\",\"   55\",\"   11\",\" \\\"N\\\"\",\"     98\",\"    0\",\"   36\",\" \\\"W\\\"\",\" \\\"Valley City\\\"\",\" ND\"],[\"   30\",\"   49\",\"   47\",\" \\\"N\\\"\",\"     83\",\"   16\",\"   47\",\" \\\"W\\\"\",\" \\\"Valdosta\\\"\",\" GA\"],[\"   43\",\"    6\",\"   36\",\" \\\"N\\\"\",\"     75\",\"   13\",\"   48\",\" \\\"W\\\"\",\" \\\"Utica\\\"\",\" NY\"],[\"   39\",\"   54\",\"    0\",\" \\\"N\\\"\",\"     79\",\"   43\",\"   48\",\" \\\"W\\\"\",\" \\\"Uniontown\\\"\",\" PA\"],[\"   32\",\"   20\",\"   59\",\" \\\"N\\\"\",\"     95\",\"   18\",\"    0\",\" \\\"W\\\"\",\" \\\"Tyler\\\"\",\" TX\"],[\"   42\",\"   33\",\"   36\",\" \\\"N\\\"\",\"    114\",\"   28\",\"   12\",\" \\\"W\\\"\",\" \\\"Twin Falls\\\"\",\" ID\"],[\"   33\",\"   12\",\"   35\",\" \\\"N\\\"\",\"     87\",\"   34\",\"   11\",\" \\\"W\\\"\",\" \\\"Tuscaloosa\\\"\",\" AL\"],[\"   34\",\"   15\",\"   35\",\" \\\"N\\\"\",\"     88\",\"   42\",\"   35\",\" \\\"W\\\"\",\" \\\"Tupelo\\\"\",\" MS\"],[\"   36\",\"    9\",\"   35\",\" \\\"N\\\"\",\"     95\",\"   54\",\"   36\",\" \\\"W\\\"\",\" \\\"Tulsa\\\"\",\" OK\"],[\"   32\",\"   13\",\"   12\",\" \\\"N\\\"\",\"    110\",\"   58\",\"   12\",\" \\\"W\\\"\",\" \\\"Tucson\\\"\",\" AZ\"],[\"   37\",\"   10\",\"   11\",\" \\\"N\\\"\",\"    104\",\"   30\",\"   36\",\" \\\"W\\\"\",\" \\\"Trinidad\\\"\",\" CO\"],[\"   40\",\"   13\",\"   47\",\" \\\"N\\\"\",\"     74\",\"   46\",\"   11\",\" \\\"W\\\"\",\" \\\"Trenton\\\"\",\" NJ\"],[\"   44\",\"   45\",\"   35\",\" \\\"N\\\"\",\"     85\",\"   37\",\"   47\",\" \\\"W\\\"\",\" \\\"Traverse City\\\"\",\" MI\"],[\"   43\",\"   39\",\"    0\",\" \\\"N\\\"\",\"     79\",\"   22\",\"   47\",\" \\\"W\\\"\",\" \\\"Toronto\\\"\",\" ON\"],[\"   39\",\"    2\",\"   59\",\" \\\"N\\\"\",\"     95\",\"   40\",\"   11\",\" \\\"W\\\"\",\" \\\"Topeka\\\"\",\" KS\"],[\"   41\",\"   39\",\"    0\",\" \\\"N\\\"\",\"     83\",\"   32\",\"   24\",\" \\\"W\\\"\",\" \\\"Toledo\\\"\",\" OH\"],[\"   33\",\"   25\",\"   48\",\" \\\"N\\\"\",\"     94\",\"    3\",\"    0\",\" \\\"W\\\"\",\" \\\"Texarkana\\\"\",\" TX\"],[\"   39\",\"   28\",\"   12\",\" \\\"N\\\"\",\"     87\",\"   24\",\"   36\",\" \\\"W\\\"\",\" \\\"Terre Haute\\\"\",\" IN\"],[\"   27\",\"   57\",\"    0\",\" \\\"N\\\"\",\"     82\",\"   26\",\"   59\",\" \\\"W\\\"\",\" \\\"Tampa\\\"\",\" FL\"],[\"   30\",\"   27\",\"    0\",\" \\\"N\\\"\",\"     84\",\"   16\",\"   47\",\" \\\"W\\\"\",\" \\\"Tallahassee\\\"\",\" FL\"],[\"   47\",\"   14\",\"   24\",\" \\\"N\\\"\",\"    122\",\"   25\",\"   48\",\" \\\"W\\\"\",\" \\\"Tacoma\\\"\",\" WA\"],[\"   43\",\"    2\",\"   59\",\" \\\"N\\\"\",\"     76\",\"    9\",\"    0\",\" \\\"W\\\"\",\" \\\"Syracuse\\\"\",\" NY\"],[\"   32\",\"   35\",\"   59\",\" \\\"N\\\"\",\"     82\",\"   20\",\"   23\",\" \\\"W\\\"\",\" \\\"Swainsboro\\\"\",\" GA\"],[\"   33\",\"   55\",\"   11\",\" \\\"N\\\"\",\"     80\",\"   20\",\"   59\",\" \\\"W\\\"\",\" \\\"Sumter\\\"\",\" SC\"],[\"   40\",\"   59\",\"   24\",\" \\\"N\\\"\",\"     75\",\"   11\",\"   24\",\" \\\"W\\\"\",\" \\\"Stroudsburg\\\"\",\" PA\"],[\"   37\",\"   57\",\"   35\",\" \\\"N\\\"\",\"    121\",\"   17\",\"   24\",\" \\\"W\\\"\",\" \\\"Stockton\\\"\",\" CA\"],[\"   44\",\"   31\",\"   12\",\" \\\"N\\\"\",\"     89\",\"   34\",\"   11\",\" \\\"W\\\"\",\" \\\"Stevens Point\\\"\",\" WI\"],[\"   40\",\"   21\",\"   36\",\" \\\"N\\\"\",\"     80\",\"   37\",\"   12\",\" \\\"W\\\"\",\" \\\"Steubenville\\\"\",\" OH\"],[\"   40\",\"   37\",\"   11\",\" \\\"N\\\"\",\"    103\",\"   13\",\"   12\",\" \\\"W\\\"\",\" \\\"Sterling\\\"\",\" CO\"],[\"   38\",\"    9\",\"    0\",\" \\\"N\\\"\",\"     79\",\"    4\",\"   11\",\" \\\"W\\\"\",\" \\\"Staunton\\\"\",\" VA\"],[\"   39\",\"   55\",\"   11\",\" \\\"N\\\"\",\"     83\",\"   48\",\"   35\",\" \\\"W\\\"\",\" \\\"Springfield\\\"\",\" OH\"],[\"   37\",\"   13\",\"   12\",\" \\\"N\\\"\",\"     93\",\"   17\",\"   24\",\" \\\"W\\\"\",\" \\\"Springfield\\\"\",\" MO\"],[\"   42\",\"    5\",\"   59\",\" \\\"N\\\"\",\"     72\",\"   35\",\"   23\",\" \\\"W\\\"\",\" \\\"Springfield\\\"\",\" MA\"],[\"   39\",\"   47\",\"   59\",\" \\\"N\\\"\",\"     89\",\"   39\",\"    0\",\" \\\"W\\\"\",\" \\\"Springfield\\\"\",\" IL\"],[\"   47\",\"   40\",\"   11\",\" \\\"N\\\"\",\"    117\",\"   24\",\"   36\",\" \\\"W\\\"\",\" \\\"Spokane\\\"\",\" WA\"],[\"   41\",\"   40\",\"   48\",\" \\\"N\\\"\",\"     86\",\"   15\",\"    0\",\" \\\"W\\\"\",\" \\\"South Bend\\\"\",\" IN\"],[\"   43\",\"   32\",\"   24\",\" \\\"N\\\"\",\"     96\",\"   43\",\"   48\",\" \\\"W\\\"\",\" \\\"Sioux Falls\\\"\",\" SD\"],[\"   42\",\"   29\",\"   24\",\" \\\"N\\\"\",\"     96\",\"   23\",\"   23\",\" \\\"W\\\"\",\" \\\"Sioux City\\\"\",\" IA\"],[\"   32\",\"   30\",\"   35\",\" \\\"N\\\"\",\"     93\",\"   45\",\"    0\",\" \\\"W\\\"\",\" \\\"Shreveport\\\"\",\" LA\"],[\"   33\",\"   38\",\"   23\",\" \\\"N\\\"\",\"     96\",\"   36\",\"   36\",\" \\\"W\\\"\",\" \\\"Sherman\\\"\",\" TX\"],[\"   44\",\"   47\",\"   59\",\" \\\"N\\\"\",\"    106\",\"   57\",\"   35\",\" \\\"W\\\"\",\" \\\"Sheridan\\\"\",\" WY\"],[\"   35\",\"   13\",\"   47\",\" \\\"N\\\"\",\"     96\",\"   40\",\"   48\",\" \\\"W\\\"\",\" \\\"Seminole\\\"\",\" OK\"],[\"   32\",\"   25\",\"   11\",\" \\\"N\\\"\",\"     87\",\"    1\",\"   11\",\" \\\"W\\\"\",\" \\\"Selma\\\"\",\" AL\"],[\"   38\",\"   42\",\"   35\",\" \\\"N\\\"\",\"     93\",\"   13\",\"   48\",\" \\\"W\\\"\",\" \\\"Sedalia\\\"\",\" MO\"],[\"   47\",\"   35\",\"   59\",\" \\\"N\\\"\",\"    122\",\"   19\",\"   48\",\" \\\"W\\\"\",\" \\\"Seattle\\\"\",\" WA\"],[\"   41\",\"   24\",\"   35\",\" \\\"N\\\"\",\"     75\",\"   40\",\"   11\",\" \\\"W\\\"\",\" \\\"Scranton\\\"\",\" PA\"],[\"   41\",\"   52\",\"   11\",\" \\\"N\\\"\",\"    103\",\"   39\",\"   36\",\" \\\"W\\\"\",\" \\\"Scottsbluff\\\"\",\" NB\"],[\"   42\",\"   49\",\"   11\",\" \\\"N\\\"\",\"     73\",\"   56\",\"   59\",\" \\\"W\\\"\",\" \\\"Schenectady\\\"\",\" NY\"],[\"   32\",\"    4\",\"   48\",\" \\\"N\\\"\",\"     81\",\"    5\",\"   23\",\" \\\"W\\\"\",\" \\\"Savannah\\\"\",\" GA\"],[\"   46\",\"   29\",\"   24\",\" \\\"N\\\"\",\"     84\",\"   20\",\"   59\",\" \\\"W\\\"\",\" \\\"Sault Sainte Marie\\\"\",\" MI\"],[\"   27\",\"   20\",\"   24\",\" \\\"N\\\"\",\"     82\",\"   31\",\"   47\",\" \\\"W\\\"\",\" \\\"Sarasota\\\"\",\" FL\"],[\"   38\",\"   26\",\"   23\",\" \\\"N\\\"\",\"    122\",\"   43\",\"   12\",\" \\\"W\\\"\",\" \\\"Santa Rosa\\\"\",\" CA\"],[\"   35\",\"   40\",\"   48\",\" \\\"N\\\"\",\"    105\",\"   56\",\"   59\",\" \\\"W\\\"\",\" \\\"Santa Fe\\\"\",\" NM\"],[\"   34\",\"   25\",\"   11\",\" \\\"N\\\"\",\"    119\",\"   41\",\"   59\",\" \\\"W\\\"\",\" \\\"Santa Barbara\\\"\",\" CA\"],[\"   33\",\"   45\",\"   35\",\" \\\"N\\\"\",\"    117\",\"   52\",\"   12\",\" \\\"W\\\"\",\" \\\"Santa Ana\\\"\",\" CA\"],[\"   37\",\"   20\",\"   24\",\" \\\"N\\\"\",\"    121\",\"   52\",\"   47\",\" \\\"W\\\"\",\" \\\"San Jose\\\"\",\" CA\"],[\"   37\",\"   46\",\"   47\",\" \\\"N\\\"\",\"    122\",\"   25\",\"   11\",\" \\\"W\\\"\",\" \\\"San Francisco\\\"\",\" CA\"],[\"   41\",\"   27\",\"    0\",\" \\\"N\\\"\",\"     82\",\"   42\",\"   35\",\" \\\"W\\\"\",\" \\\"Sandusky\\\"\",\" OH\"],[\"   32\",\"   42\",\"   35\",\" \\\"N\\\"\",\"    117\",\"    9\",\"    0\",\" \\\"W\\\"\",\" \\\"San Diego\\\"\",\" CA\"],[\"   34\",\"    6\",\"   36\",\" \\\"N\\\"\",\"    117\",\"   18\",\"   35\",\" \\\"W\\\"\",\" \\\"San Bernardino\\\"\",\" CA\"],[\"   29\",\"   25\",\"   12\",\" \\\"N\\\"\",\"     98\",\"   30\",\"    0\",\" \\\"W\\\"\",\" \\\"San Antonio\\\"\",\" TX\"],[\"   31\",\"   27\",\"   35\",\" \\\"N\\\"\",\"    100\",\"   26\",\"   24\",\" \\\"W\\\"\",\" \\\"San Angelo\\\"\",\" TX\"],[\"   40\",\"   45\",\"   35\",\" \\\"N\\\"\",\"    111\",\"   52\",\"   47\",\" \\\"W\\\"\",\" \\\"Salt Lake City\\\"\",\" UT\"],[\"   38\",\"   22\",\"   11\",\" \\\"N\\\"\",\"     75\",\"   35\",\"   59\",\" \\\"W\\\"\",\" \\\"Salisbury\\\"\",\" MD\"],[\"   36\",\"   40\",\"   11\",\" \\\"N\\\"\",\"    121\",\"   39\",\"    0\",\" \\\"W\\\"\",\" \\\"Salinas\\\"\",\" CA\"],[\"   38\",\"   50\",\"   24\",\" \\\"N\\\"\",\"     97\",\"   36\",\"   36\",\" \\\"W\\\"\",\" \\\"Salina\\\"\",\" KS\"],[\"   38\",\"   31\",\"   47\",\" \\\"N\\\"\",\"    106\",\"    0\",\"    0\",\" \\\"W\\\"\",\" \\\"Salida\\\"\",\" CO\"],[\"   44\",\"   56\",\"   23\",\" \\\"N\\\"\",\"    123\",\"    1\",\"   47\",\" \\\"W\\\"\",\" \\\"Salem\\\"\",\" OR\"],[\"   44\",\"   57\",\"    0\",\" \\\"N\\\"\",\"     93\",\"    5\",\"   59\",\" \\\"W\\\"\",\" \\\"Saint Paul\\\"\",\" MN\"],[\"   38\",\"   37\",\"   11\",\" \\\"N\\\"\",\"     90\",\"   11\",\"   24\",\" \\\"W\\\"\",\" \\\"Saint Louis\\\"\",\" MO\"],[\"   39\",\"   46\",\"   12\",\" \\\"N\\\"\",\"     94\",\"   50\",\"   23\",\" \\\"W\\\"\",\" \\\"Saint Joseph\\\"\",\" MO\"],[\"   42\",\"    5\",\"   59\",\" \\\"N\\\"\",\"     86\",\"   28\",\"   48\",\" \\\"W\\\"\",\" \\\"Saint Joseph\\\"\",\" MI\"],[\"   44\",\"   25\",\"   11\",\" \\\"N\\\"\",\"     72\",\"    1\",\"   11\",\" \\\"W\\\"\",\" \\\"Saint Johnsbury\\\"\",\" VT\"],[\"   45\",\"   34\",\"   11\",\" \\\"N\\\"\",\"     94\",\"   10\",\"   11\",\" \\\"W\\\"\",\" \\\"Saint Cloud\\\"\",\" MN\"],[\"   29\",\"   53\",\"   23\",\" \\\"N\\\"\",\"     81\",\"   19\",\"   11\",\" \\\"W\\\"\",\" \\\"Saint Augustine\\\"\",\" FL\"],[\"   43\",\"   25\",\"   48\",\" \\\"N\\\"\",\"     83\",\"   56\",\"   24\",\" \\\"W\\\"\",\" \\\"Saginaw\\\"\",\" MI\"],[\"   38\",\"   35\",\"   24\",\" \\\"N\\\"\",\"    121\",\"   29\",\"   23\",\" \\\"W\\\"\",\" \\\"Sacramento\\\"\",\" CA\"],[\"   43\",\"   36\",\"   36\",\" \\\"N\\\"\",\"     72\",\"   58\",\"   12\",\" \\\"W\\\"\",\" \\\"Rutland\\\"\",\" VT\"],[\"   33\",\"   24\",\"    0\",\" \\\"N\\\"\",\"    104\",\"   31\",\"   47\",\" \\\"W\\\"\",\" \\\"Roswell\\\"\",\" NM\"],[\"   35\",\"   56\",\"   23\",\" \\\"N\\\"\",\"     77\",\"   48\",\"    0\",\" \\\"W\\\"\",\" \\\"Rocky Mount\\\"\",\" NC\"],[\"   41\",\"   35\",\"   24\",\" \\\"N\\\"\",\"    109\",\"   13\",\"   48\",\" \\\"W\\\"\",\" \\\"Rock Springs\\\"\",\" WY\"],[\"   42\",\"   16\",\"   12\",\" \\\"N\\\"\",\"     89\",\"    5\",\"   59\",\" \\\"W\\\"\",\" \\\"Rockford\\\"\",\" IL\"],[\"   43\",\"    9\",\"   35\",\" \\\"N\\\"\",\"     77\",\"   36\",\"   36\",\" \\\"W\\\"\",\" \\\"Rochester\\\"\",\" NY\"],[\"   44\",\"    1\",\"   12\",\" \\\"N\\\"\",\"     92\",\"   27\",\"   35\",\" \\\"W\\\"\",\" \\\"Rochester\\\"\",\" MN\"],[\"   37\",\"   16\",\"   12\",\" \\\"N\\\"\",\"     79\",\"   56\",\"   24\",\" \\\"W\\\"\",\" \\\"Roanoke\\\"\",\" VA\"],[\"   37\",\"   32\",\"   24\",\" \\\"N\\\"\",\"     77\",\"   26\",\"   59\",\" \\\"W\\\"\",\" \\\"Richmond\\\"\",\" VA\"],[\"   39\",\"   49\",\"   48\",\" \\\"N\\\"\",\"     84\",\"   53\",\"   23\",\" \\\"W\\\"\",\" \\\"Richmond\\\"\",\" IN\"],[\"   38\",\"   46\",\"   12\",\" \\\"N\\\"\",\"    112\",\"    5\",\"   23\",\" \\\"W\\\"\",\" \\\"Richfield\\\"\",\" UT\"],[\"   45\",\"   38\",\"   23\",\" \\\"N\\\"\",\"     89\",\"   25\",\"   11\",\" \\\"W\\\"\",\" \\\"Rhinelander\\\"\",\" WI\"],[\"   39\",\"   31\",\"   12\",\" \\\"N\\\"\",\"    119\",\"   48\",\"   35\",\" \\\"W\\\"\",\" \\\"Reno\\\"\",\" NV\"],[\"   50\",\"   25\",\"   11\",\" \\\"N\\\"\",\"    104\",\"   39\",\"    0\",\" \\\"W\\\"\",\" \\\"Regina\\\"\",\" SA\"],[\"   40\",\"   10\",\"   48\",\" \\\"N\\\"\",\"    122\",\"   14\",\"   23\",\" \\\"W\\\"\",\" \\\"Red Bluff\\\"\",\" CA\"],[\"   40\",\"   19\",\"   48\",\" \\\"N\\\"\",\"     75\",\"   55\",\"   48\",\" \\\"W\\\"\",\" \\\"Reading\\\"\",\" PA\"],[\"   41\",\"    9\",\"   35\",\" \\\"N\\\"\",\"     81\",\"   14\",\"   23\",\" \\\"W\\\"\",\" \\\"Ravenna\\\"\",\" OH \"],[\"\"],[\"\"]]\n\n//# sourceURL=webpack:///./assets/csv.csv?");

/***/ }),

/***/ "./assets/fonts/Poppins-Regular.ttf":
/*!******************************************!*\
  !*** ./assets/fonts/Poppins-Regular.ttf ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"41e8dead03fb979ecc23b8dfb0fef627.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Poppins-Regular.ttf?");

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/*! exports provided: title, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"title\\\":\\\"description\\\"}\");\n\n//# sourceURL=webpack:///./assets/json.json?");

/***/ }),

/***/ "./assets/xml.xml":
/*!************************!*\
  !*** ./assets/xml.xml ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"catalog\":{\"book\":[{\"$\":{\"id\":\"bk101\"},\"author\":[\"Gambardella, Matthew\"],\"title\":[\"XML Developer's Guide\"],\"genre\":[\"Computer\"],\"price\":[\"44.95\"],\"publish_date\":[\"2000-10-01\"],\"description\":[\"An in-depth look at creating applications \\r\\n      with XML.\"]},{\"$\":{\"id\":\"bk102\"},\"author\":[\"Ralls, Kim\"],\"title\":[\"Midnight Rain\"],\"genre\":[\"Fantasy\"],\"price\":[\"5.95\"],\"publish_date\":[\"2000-12-16\"],\"description\":[\"A former architect battles corporate zombies, \\r\\n      an evil sorceress, and her own childhood to become queen \\r\\n      of the world.\"]},{\"$\":{\"id\":\"bk103\"},\"author\":[\"Corets, Eva\"],\"title\":[\"Maeve Ascendant\"],\"genre\":[\"Fantasy\"],\"price\":[\"5.95\"],\"publish_date\":[\"2000-11-17\"],\"description\":[\"After the collapse of a nanotechnology \\r\\n      society in England, the young survivors lay the \\r\\n      foundation for a new society.\"]},{\"$\":{\"id\":\"bk104\"},\"author\":[\"Corets, Eva\"],\"title\":[\"Oberon's Legacy\"],\"genre\":[\"Fantasy\"],\"price\":[\"5.95\"],\"publish_date\":[\"2001-03-10\"],\"description\":[\"In post-apocalypse England, the mysterious \\r\\n      agent known only as Oberon helps to create a new life \\r\\n      for the inhabitants of London. Sequel to Maeve \\r\\n      Ascendant.\"]},{\"$\":{\"id\":\"bk105\"},\"author\":[\"Corets, Eva\"],\"title\":[\"The Sundered Grail\"],\"genre\":[\"Fantasy\"],\"price\":[\"5.95\"],\"publish_date\":[\"2001-09-10\"],\"description\":[\"The two daughters of Maeve, half-sisters, \\r\\n      battle one another for control of England. Sequel to \\r\\n      Oberon's Legacy.\"]},{\"$\":{\"id\":\"bk106\"},\"author\":[\"Randall, Cynthia\"],\"title\":[\"Lover Birds\"],\"genre\":[\"Romance\"],\"price\":[\"4.95\"],\"publish_date\":[\"2000-09-02\"],\"description\":[\"When Carla meets Paul at an ornithology \\r\\n      conference, tempers fly as feathers get ruffled.\"]},{\"$\":{\"id\":\"bk107\"},\"author\":[\"Thurman, Paula\"],\"title\":[\"Splish Splash\"],\"genre\":[\"Romance\"],\"price\":[\"4.95\"],\"publish_date\":[\"2000-11-02\"],\"description\":[\"A deep sea diver finds true love twenty \\r\\n      thousand leagues beneath the sea.\"]},{\"$\":{\"id\":\"bk108\"},\"author\":[\"Knorr, Stefan\"],\"title\":[\"Creepy Crawlies\"],\"genre\":[\"Horror\"],\"price\":[\"4.95\"],\"publish_date\":[\"2000-12-06\"],\"description\":[\"An anthology of horror stories about roaches,\\r\\n      centipedes, scorpions  and other insects.\"]},{\"$\":{\"id\":\"bk109\"},\"author\":[\"Kress, Peter\"],\"title\":[\"Paradox Lost\"],\"genre\":[\"Science Fiction\"],\"price\":[\"6.95\"],\"publish_date\":[\"2000-11-02\"],\"description\":[\"After an inadvertant trip through a Heisenberg\\r\\n      Uncertainty Device, James Salway discovers the problems \\r\\n      of being quantum.\"]},{\"$\":{\"id\":\"bk110\"},\"author\":[\"O'Brien, Tim\"],\"title\":[\"Microsoft .NET: The Programming Bible\"],\"genre\":[\"Computer\"],\"price\":[\"36.95\"],\"publish_date\":[\"2000-12-09\"],\"description\":[\"Microsoft's .NET initiative is explored in \\r\\n      detail in this deep programmer's reference.\"]},{\"$\":{\"id\":\"bk111\"},\"author\":[\"O'Brien, Tim\"],\"title\":[\"MSXML3: A Comprehensive Guide\"],\"genre\":[\"Computer\"],\"price\":[\"36.95\"],\"publish_date\":[\"2000-12-01\"],\"description\":[\"The Microsoft MSXML3 parser is covered in \\r\\n      detail, with attention to XML DOM interfaces, XSLT processing, \\r\\n      SAX and more.\"]},{\"$\":{\"id\":\"bk112\"},\"author\":[\"Galos, Mike\"],\"title\":[\"Visual Studio 7: A Comprehensive Guide\"],\"genre\":[\"Computer\"],\"price\":[\"49.95\"],\"publish_date\":[\"2001-04-16\"],\"description\":[\"Microsoft Visual Studio 7 is explored in depth,\\r\\n      looking at how Visual Basic, Visual C++, C#, and ASP+ are \\r\\n      integrated into a comprehensive development \\r\\n      environment.\"]}]}}\n\n//# sourceURL=webpack:///./assets/xml.xml?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_json_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/json.json */ \"./assets/json.json\");\nvar _assets_json_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./assets/json.json */ \"./assets/json.json\", 1);\n/* harmony import */ var _assets_xml_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/xml.xml */ \"./assets/xml.xml\");\n/* harmony import */ var _assets_xml_xml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_xml_xml__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_csv_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/csv.csv */ \"./assets/csv.csv\");\n/* harmony import */ var _assets_csv_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_csv_csv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_attractive_beautiful_woman_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/attractive-beautiful-woman.jpg */ \"./assets/attractive-beautiful-woman.jpg\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n// const { exec } = require(\"child_process\");\r\n// import $ from \"jquery\";\r\n\r\n\r\n\r\n\r\n\r\n$(\".jquery\").html(\"some content\");\r\nconsole.log(test);\r\nconsole.log(\"JSON: \", _assets_json_json__WEBPACK_IMPORTED_MODULE_0__);\r\nconsole.log(\"JPG: \", _assets_attractive_beautiful_woman_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nconsole.log(\"XML: \", _assets_xml_xml__WEBPACK_IMPORTED_MODULE_1___default.a);\r\nconsole.log(\"CSV: \", _assets_csv_csv__WEBPACK_IMPORTED_MODULE_2___default.a);\r\nconsole.log(Post);\r\n// console.log($);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ })

/******/ });