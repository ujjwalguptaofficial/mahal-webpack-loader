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
        Reactive,
        __metadata("design:type", Object)
    ], default_1.prototype, "counter", void 0);
    return default_1;
}(Component));
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_taj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.taj */ "./test/index.taj");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    components: {
        Index: _index_taj__WEBPACK_IMPORTED_MODULE_0__.default
    },
    methods: {
        name: function () {
            new _index_taj__WEBPACK_IMPORTED_MODULE_0__.default();
            console.log("this", this);
        }
    }
});
// export function sayMyName(name) {
//     alert(name);
// }


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
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_index_js_taj_loader_options_index_taj_taj_type_html__WEBPACK_IMPORTED_MODULE_0__.default); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvLi90ZXN0L2luZGV4LnRhaj9mOWRiIiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci8uL3Rlc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyLy4vdGVzdC9pbmRleC50YWoiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyLy4vdGVzdC9pbmRleC50YWo/ZjNiZSIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvLi90ZXN0L2luZGV4LnRhaj8zYzFkIiwid2VicGFjazovL3Rhai13ZWJwYWNrLWxvYWRlci8uL3Rlc3QvaW5kZXgudGFqP2FhMjUiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyLy4vc3JjL3J1bnRpbWUvcmVuZGVyX2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFqLXdlYnBhY2stbG9hZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWotd2VicGFjay1sb2FkZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQTZCLDZCQUFTO0lBQXRDO1FBQUEscUVBYUM7UUFWRyxhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQVVoQixDQUFDO0lBUkcsNkJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQVREO1FBREMsUUFBUTs7OENBQ0c7SUFVaEIsZ0JBQUM7Q0FBQSxDQWI0QixTQUFTLEdBYXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkK0I7QUFFaEMsaUVBQWU7SUFDWCxVQUFVLEVBQUU7UUFDUixLQUFLO0tBQ1I7SUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJO1lBQ0EsSUFBSSwrQ0FBSyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQ0o7Q0FDSjtBQUVELG9DQUFvQztBQUNwQyxtQkFBbUI7QUFDbkIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCNEM7QUFDUTtBQUNMO0FBQ25ELENBQW1FO0FBQ25FLG9CQUFvQixpRkFBZTtBQUNuQyxlQUFlLHVFQUFNO0FBQ3JCLGVBQWUsNkRBQU07QUFDckIsS0FBSztBQUNMO0FBQ0EsSUFBSSxpRUFBZSxTOzs7Ozs7Ozs7Ozs7Ozs7QUNUSjtBQUNmO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0p5SixDQUFDLGlFQUFlLDZKQUFJLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzRixDQUFDLGlFQUFlLDZGQUFJLEVBQUMsQzs7Ozs7Ozs7OztBQ0F4Ryx1QkFBdUI7QUFDdkI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEM7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBAUmVhY3RpdmVcbiAgICBjb3VudGVyID0gMDtcblxuICAgIGluY3JlbWVudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyZWQgaW5jcmVtZW50XCIpO1xuICAgICAgICArK3RoaXMuY291bnRlcjtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoKSB7XG4gICAgICAgIC0tdGhpcy5jb3VudGVyO1xuICAgIH1cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tIFwiLi9pbmRleC50YWpcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5kZXhcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbmFtZSgpIHtcbiAgICAgICAgICAgIG5ldyBJbmRleCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzXCIsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2F5TXlOYW1lKG5hbWUpIHtcbi8vICAgICBhbGVydChuYW1lKTtcbi8vIH0iLCJpbXBvcnQgIHJlbmRlciAgZnJvbSBcIi4vaW5kZXgudGFqP3RhaiZ0eXBlPWh0bWxcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC50YWo/dGFqJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudGFqP3RhaiZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmltcG9ydCB7cmVuZGVyQ29tcG9uZW50fSBmcm9tIFwiIS4uL3NyYy9ydW50aW1lL3JlbmRlcl9jb21wb25lbnQuanNcIlxuICAgIHZhciBjb21wb25lbnQgPSByZW5kZXJDb21wb25lbnQoe1xuICAgICAgICBzY3JpcHQ6c2NyaXB0LFxuICAgICAgICByZW5kZXI6cmVuZGVyXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnY29tcCcsY29tcG9uZW50KVxuICAgIGV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFub255bW91cyhjZSxjdCxmLGhlLGhGb3JFXG4pIHtcbmNvbnN0IGN0eCA9IHRoaXM7XG5yZXR1cm4gY2UoJ2RpdicsIFtdLCB7fSlcbn0iLCJpbXBvcnQgY29kZSBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZSEuLi9zcmMvaW5kZXguanM/P3Rhai1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnRhaj90YWomdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgZGVmYXVsdCBjb2RlOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZSEuLi9zcmMvaW5kZXguanM/P3Rhai1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnRhaj90YWomdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiaW1wb3J0IGNvZGUgZnJvbSBcIi0hLi4vc3JjL2luZGV4LmpzPz90YWotbG9hZGVyLW9wdGlvbnMhLi9pbmRleC50YWo/dGFqJnR5cGU9aHRtbFwiOyBleHBvcnQgZGVmYXVsdCBjb2RlOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9zcmMvaW5kZXguanM/P3Rhai1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnRhaj90YWomdHlwZT1odG1sXCIiLCJleHBvcnRzLnJlbmRlckNvbXBvbmVudCA9IGZ1bmN0aW9uICh7XG4gICAgcmVuZGVyLCBzY3JpcHRcbn0pIHtcbiAgICBzY3JpcHQucHJvdG90eXBlLnJlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gc2NyaXB0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90ZXN0L2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==