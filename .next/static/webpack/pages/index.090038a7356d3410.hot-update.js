"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/Video.js":
/*!****************************!*\
  !*** ./src/pages/Video.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Video; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\nfunction Video() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {\n                    maxW: \"1000px\",\n                    ratio: 20 / 15,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        title: \"brittany-video\",\n                        id: \"ytvideo\",\n                        type: \"text/html\",\n                        src: \"https://www.youtube.com/embed/xT5zE5oiqoY\",\n                        alt: \"embedded-video-example\",\n                        width: \"640\",\n                        height: \"360\",\n                        allowFullScreen: true\n                    }, void 0, false, {\n                        fileName: \"/Users/cj/Desktop/chakratest/Chakra_TABD/src/pages/Video.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cj/Desktop/chakratest/Chakra_TABD/src/pages/Video.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cj/Desktop/chakratest/Chakra_TABD/src/pages/Video.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cj/Desktop/chakratest/Chakra_TABD/src/pages/Video.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Video;\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvVmlkZW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNxRTtBQUtoRixTQUFTUSxRQUFRO0lBRzlCLHFCQUNFO2tCQUNFLDRFQUFDRix1REFBU0E7c0JBQ1IsNEVBQUNMLGlEQUFHQTtnQkFBQ1EsWUFBVztnQkFBU0MsZ0JBQWU7MEJBQ3RDLDRFQUFDSCx5REFBV0E7b0JBQUNJLE1BQUs7b0JBQVNDLE9BQU8sS0FBSzs4QkFDckMsNEVBQUNDO3dCQUNEQyxPQUFNO3dCQUNOQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxPQUFNO3dCQUNOQyxRQUFPO3dCQUNQQyxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCLENBQUM7S0F0QnVCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvVmlkZW8uanM/OTk4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBTaW1wbGVHcmlkLCBUZXh0LCBDZW50ZXIsIENvbnRhaW5lciwgQXNwZWN0UmF0aW8gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW8oKSB7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cbiAgICAgICAgICA8QXNwZWN0UmF0aW8gbWF4Vz0nMTAwMHB4JyByYXRpbz17MjAgLyAxNX0+XG4gICAgICAgICAgICA8aWZyYW1lIFxuICAgICAgICAgICAgdGl0bGU9XCJicml0dGFueS12aWRlb1wiIFxuICAgICAgICAgICAgaWQ9XCJ5dHZpZGVvXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQveFQ1ekU1b2lxb1lcIlxuICAgICAgICAgICAgYWx0PVwiZW1iZWRkZWQtdmlkZW8tZXhhbXBsZVwiIFxuICAgICAgICAgICAgd2lkdGg9JzY0MCdcbiAgICAgICAgICAgIGhlaWdodD0nMzYwJ1xuICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuIC8+XG4gICAgICAgICAgPC9Bc3BlY3RSYXRpbz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiRmxleCIsIlNpbXBsZUdyaWQiLCJUZXh0IiwiQ2VudGVyIiwiQ29udGFpbmVyIiwiQXNwZWN0UmF0aW8iLCJWaWRlbyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heFciLCJyYXRpbyIsImlmcmFtZSIsInRpdGxlIiwiaWQiLCJ0eXBlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbGxvd0Z1bGxTY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Video.js\n"));

/***/ })

});