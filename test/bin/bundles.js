/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ts-loader/index.js??ruleSet[1].rules[1].use!./src/index.js??taj-loader-options!./test/index.taj?taj&type=script&lang=ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??ruleSet[1].rules[1].use!./src/index.js??taj-loader-options!./test/index.taj?taj&type=script&lang=ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'taj'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.counter = 0;
        return _this;
    }
    default_1.prototype.increment = function () {
        console.log("triggered increment");
        ++this.counter;
    };
    default_1.prototype.decrement = function () {
        --this.counter;
    };
    __decorate([
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'taj'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        __metadata("design:type", Object)
    ], default_1.prototype, "counter", void 0);
    return default_1;
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'taj'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (default_1);


/***/ }),

/***/ "./test/index.ts":
/*!***********************!*\
  !*** ./test/index.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _index_taj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.taj */ "./test/index.taj");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'taj'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var app = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'taj'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_index_taj__WEBPACK_IMPORTED_MODULE_0__.default, document.querySelector('#app'));
app.create();


/***/ }),

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
/* harmony import */ var _index_taj_taj_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.taj?taj&type=script&lang=ts */ "./test/index.taj?taj&type=script&lang=ts");
/* harmony import */ var _src_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../src/runtime/render_component.js */ "./src/runtime/render_component.js");



;
    var component = (0,_src_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)({
        script:_index_taj_taj_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default,
        render:_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
    console.log('comp',component)
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/index.js??taj-loader-options!./test/index.taj?taj&type=html":
/*!*************************************************************************!*\
  !*** ./src/index.js??taj-loader-options!./test/index.taj?taj&type=html ***!
  \*************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./src/index.js):\nTypeError: Cannot read property 'createRenderer' of undefined\n    at Object.exports.extractComponent (/home/warrior/projects/opensource/taj-webpack-loader/src/extract_component.js:13:40)\n    at Object.loader (/home/warrior/projects/opensource/taj-webpack-loader/src/index.js:34:26)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)");

/***/ }),

/***/ "./test/index.taj?taj&type=script&lang=ts":
/*!************************************************!*\
  !*** ./test/index.taj?taj&type=script&lang=ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_ruleSet_1_rules_1_use_src_index_js_taj_loader_options_index_taj_taj_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader/index.js??ruleSet[1].rules[1].use!../src/index.js??taj-loader-options!./index.taj?taj&type=script&lang=ts */ "./node_modules/ts-loader/index.js??ruleSet[1].rules[1].use!./src/index.js??taj-loader-options!./test/index.taj?taj&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_ruleSet_1_rules_1_use_src_index_js_taj_loader_options_index_taj_taj_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./test/index.taj?taj&type=html":
/*!**************************************!*\
  !*** ./test/index.taj?taj&type=html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_index_js_taj_loader_options_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../src/index.js??taj-loader-options!./index.taj?taj&type=html */ "./src/index.js??taj-loader-options!./test/index.taj?taj&type=html");
/* harmony import */ var _src_index_js_taj_loader_options_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_index_js_taj_loader_options_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _src_index_js_taj_loader_options_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _src_index_js_taj_loader_options_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_src_index_js_taj_loader_options_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0___default())); 

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
/******/ 	__webpack_require__("./test/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvLi90ZXN0L2luZGV4LnRhaj9mOWRiIiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci8uL3Rlc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyLy4vdGVzdC9pbmRleC50YWoiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyLy4vdGVzdC9pbmRleC50YWo/M2MxZCIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvLi90ZXN0L2luZGV4LnRhaj9hYTI1Iiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci8uL3NyYy9ydW50aW1lL3JlbmRlcl9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUN4QztJQUE2Qiw2QkFBUztJQUF0QztRQUFBLHFFQWFDO1FBVkcsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUFVaEIsQ0FBQztJQVJHLDZCQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFURDtRQURDLGtJQUFROzs4Q0FDRztJQVVoQixnQkFBQztDQUFBLENBYjRCLGtJQUFTLEdBYXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjhCO0FBQ0w7QUFFbkIsSUFBTSxHQUFHLEdBQUcsSUFBSSxrSUFBRyxDQUFDLCtDQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRWpFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xtQztBQUNRO0FBQ0w7QUFDbkQsQ0FBbUU7QUFDbkUsb0JBQW9CLGlGQUFlO0FBQ25DLGVBQWUsdUVBQU07QUFDckIsZUFBZSw2REFBTTtBQUNyQixLQUFLO0FBQ0w7QUFDQSxJQUFJLGlFQUFlLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHNJLENBQUMsaUVBQWUsNkpBQUksRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzRixDQUFDLGlFQUFlLGlHQUFJLEVBQUMsQzs7Ozs7Ozs7OztBQ0F4Ryx1QkFBdUI7QUFDdkI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEM7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50LCBSZWFjdGl2ZX0gZnJvbSBcInRhalwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQFJlYWN0aXZlXG4gICAgY291bnRlciA9IDA7XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlcmVkIGluY3JlbWVudFwiKTtcbiAgICAgICAgKyt0aGlzLmNvdW50ZXI7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KCkge1xuICAgICAgICAtLXRoaXMuY291bnRlcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgTWFpbiBmcm9tIFwiLi9pbmRleC50YWpcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCJ0YWpcIjtcblxuZXhwb3J0IGNvbnN0IGFwcCA9IG5ldyBBcHAoTWFpbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpKTtcblxuYXBwLmNyZWF0ZSgpOyIsImltcG9ydCAgcmVuZGVyICBmcm9tIFwiLi9pbmRleC50YWo/dGFqJnR5cGU9aHRtbFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnRhaj90YWomdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC50YWo/dGFqJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuaW1wb3J0IHtyZW5kZXJDb21wb25lbnR9IGZyb20gXCIhLi4vc3JjL3J1bnRpbWUvcmVuZGVyX2NvbXBvbmVudC5qc1wiXG4gICAgdmFyIGNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudCh7XG4gICAgICAgIHNjcmlwdDpzY3JpcHQsXG4gICAgICAgIHJlbmRlcjpyZW5kZXJcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdjb21wJyxjb21wb25lbnQpXG4gICAgZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50IiwiaW1wb3J0IGNvZGUgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2UhLi4vc3JjL2luZGV4LmpzPz90YWotbG9hZGVyLW9wdGlvbnMhLi9pbmRleC50YWo/dGFqJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0IGRlZmF1bHQgY29kZTsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2UhLi4vc3JjL2luZGV4LmpzPz90YWotbG9hZGVyLW9wdGlvbnMhLi9pbmRleC50YWo/dGFqJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImltcG9ydCBjb2RlIGZyb20gXCItIS4uL3NyYy9pbmRleC5qcz8/dGFqLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudGFqP3RhaiZ0eXBlPWh0bWxcIjsgZXhwb3J0IGRlZmF1bHQgY29kZTsgZXhwb3J0ICogZnJvbSBcIi0hLi4vc3JjL2luZGV4LmpzPz90YWotbG9hZGVyLW9wdGlvbnMhLi9pbmRleC50YWo/dGFqJnR5cGU9aHRtbFwiIiwiZXhwb3J0cy5yZW5kZXJDb21wb25lbnQgPSBmdW5jdGlvbiAoe1xuICAgIHJlbmRlciwgc2NyaXB0XG59KSB7XG4gICAgc2NyaXB0LnByb3RvdHlwZS5yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90ZXN0L2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==