/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./test/index.taj":
/*!************************!*\
  !*** ./test/index.taj ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.taj?taj&type=html */ "./test/index.taj?taj&type=html");
/* harmony import */ var _index_taj_taj_type_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.taj?taj&type=script */ "./test/index.taj?taj&type=script");
/* harmony import */ var _index_taj_taj_type_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_taj_taj_type_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _index_taj_taj_type_script__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _index_taj_taj_type_script__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../src/runtime/render_component.js */ "./src/runtime/render_component.js");



;
    var component = (0,_src_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)({
        script:(_index_taj_taj_type_script__WEBPACK_IMPORTED_MODULE_1___default()),
        render:_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./test/index.taj?taj&type=html":
/*!**************************************!*\
  !*** ./test/index.taj?taj&type=html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(ce,ct,f,he,hForE
) {
const ctx = this;
return ce('div', [], {})
}

/***/ }),

/***/ "./test/index.taj?taj&type=script":
/*!****************************************!*\
  !*** ./test/index.taj?taj&type=script ***!
  \****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '@' (4:4)\nFile was processed with these loaders:\n * ./src/index.js\nYou may need an additional loader to handle the result of these loaders.\n| export default class extends Component {\n| \n>     @Reactive\n|     counter = 0;\n| ");

/***/ }),

/***/ "./src/runtime/render_component.js":
/*!*****************************************!*\
  !*** ./src/runtime/render_component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.renderComponent = function ({
    render, script
}) {
    script.prototype.render = render;
    return script;
}

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sayMyName": () => (/* binding */ sayMyName)
/* harmony export */ });
/* harmony import */ var _index_taj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.taj */ "./test/index.taj");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    components: {
        Index: _index_taj__WEBPACK_IMPORTED_MODULE_0__.default
    },
    methods: {
        name() {
            this.Index();
            console.log("this", this);
        }
    }
});

function sayMyName(name) {
    alert(name);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./test/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvLi90ZXN0L2luZGV4LnRhaiIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvLi90ZXN0L2luZGV4LnRhaj9lYjY2Iiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci8uL3NyYy9ydW50aW1lL3JlbmRlcl9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyLy4vdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDQTtBQUNMO0FBQzNDLENBQW1FO0FBQ25FLG9CQUFvQixpRkFBZTtBQUNuQyxlQUFlLG1FQUFNO0FBQ3JCLGVBQWUsNkRBQU07QUFDckIsS0FBSztBQUNMLElBQUksaUVBQWUsUzs7Ozs7Ozs7Ozs7Ozs7O0FDUko7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsdUJBQXVCO0FBQ3ZCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xnQzs7QUFFaEMsaUVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EsQzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHJlbmRlciAgZnJvbSBcIi4vaW5kZXgudGFqP3RhaiZ0eXBlPWh0bWxcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC50YWo/dGFqJnR5cGU9c2NyaXB0XCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnRhaj90YWomdHlwZT1zY3JpcHRcIlxuaW1wb3J0IHtyZW5kZXJDb21wb25lbnR9IGZyb20gXCIhLi4vc3JjL3J1bnRpbWUvcmVuZGVyX2NvbXBvbmVudC5qc1wiXG4gICAgdmFyIGNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudCh7XG4gICAgICAgIHNjcmlwdDpzY3JpcHQsXG4gICAgICAgIHJlbmRlcjpyZW5kZXJcbiAgICB9KVxuICAgIGV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhjZSxjdCxmLGhlLGhGb3JFXG4pIHtcbmNvbnN0IGN0eCA9IHRoaXM7XG5yZXR1cm4gY2UoJ2RpdicsIFtdLCB7fSlcbn0iLCJleHBvcnRzLnJlbmRlckNvbXBvbmVudCA9IGZ1bmN0aW9uICh7XG4gICAgcmVuZGVyLCBzY3JpcHRcbn0pIHtcbiAgICBzY3JpcHQucHJvdG90eXBlLnJlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gc2NyaXB0O1xufSIsImltcG9ydCBJbmRleCBmcm9tIFwiLi9pbmRleC50YWpcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5kZXhcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbmFtZSgpIHtcbiAgICAgICAgICAgIHRoaXMuSW5kZXgoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNheU15TmFtZShuYW1lKSB7XG4gICAgYWxlcnQobmFtZSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdGVzdC9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=