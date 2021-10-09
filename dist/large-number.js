(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["largeNumber"] = factory();
	else
		root["largeNumber"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(1);
} else {
  module.exports = __webpack_require__(2);
}


/***/ }),
/* 1 */
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_502__) => {

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = __nested_webpack_require_502__(1);
} else {
  module.exports = __nested_webpack_require_502__(2);
}


/***/ }),
/* 1 */
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module) => {

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../dist/large-number'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
} else {
  module.exports = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../dist/large-number.min'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1144__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1144__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_1144__(0);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});

/***/ }),
/* 2 */
/***/ ((module) => {

!function(e,o){  true?module.exports=o():0}(self,(function(){return e=[e=>{"production"===process.env.NODE_ENV?e.exports=Object(function(){var e=new Error("Cannot find module '../dist/large-number'");throw e.code="MODULE_NOT_FOUND",e}()):e.exports=Object(function(){var e=new Error("Cannot find module '../dist/large-number.min'");throw e.code="MODULE_NOT_FOUND",e}())}],o={},r=function r(t){var n=o[t];if(void 0!==n)return n.exports;var u=o[t]={exports:{}};return e[t](u,u.exports,r),u.exports}(0),r=r.default;var e,o,r}));

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_3644__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_3644__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_3644__(0);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});

/***/ }),
/* 2 */
/***/ ((module) => {

!function(r,e){ true?module.exports=e():0}(self,(function(){return r=[(r,e,o)=>{"production"===process.env.NODE_ENV?r.exports=o(1):r.exports=o(2)},r=>{var e;self,e=function(){return(()=>{var r=[r=>{"production"===process.env.NODE_ENV?r.exports=Object(function(){var r=new Error("Cannot find module '../dist/large-number'");throw r.code="MODULE_NOT_FOUND",r}()):r.exports=Object(function(){var r=new Error("Cannot find module '../dist/large-number.min'");throw r.code="MODULE_NOT_FOUND",r}())}],e={},o=function o(t){var n=e[t];if(void 0!==n)return n.exports;var u=e[t]={exports:{}};return r[t](u,u.exports,o),u.exports}(0);return o=o.default})()},r.exports=e()},r=>{var e,o;self,r.exports=(e=[r=>{"production"===process.env.NODE_ENV?r.exports=Object(function(){var r=new Error("Cannot find module '../dist/large-number'");throw r.code="MODULE_NOT_FOUND",r}()):r.exports=Object(function(){var r=new Error("Cannot find module '../dist/large-number.min'");throw r.code="MODULE_NOT_FOUND",r}())}],o={},function r(t){var n=o[t];if(void 0!==n)return n.exports;var u=o[t]={exports:{}};return e[t](u,u.exports,r),u.exports}(0).default)}],e={},o=function o(t){var n=e[t];if(void 0!==n)return n.exports;var u=e[t]={exports:{}};return r[t](u,u.exports,o),u.exports}(0),o=o.default;var r,e,o}));

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});