"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/collect-recycling",{

/***/ "./src/components/card.tsx":
/*!*********************************!*\
  !*** ./src/components/card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat */ \"./src/components/chat.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { type, price, imageUrl, location, wallet, recyclingId } = param;\n    _s();\n    const [isChatOpen, setIsChatOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleChat = ()=>{\n        setIsChatOpen(!isChatOpen); // Cambia el estado del chat (abrir/cerrar)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-blue-200 border border-gray-300 rounded-lg shadow-lg w-80 p-6 text-center transition-all duration-500 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imageUrl,\n                        alt: \"\".concat(type, \" image\"),\n                        className: \"w-32 h-32 rounded-full mx-auto mb-4 object-cover\"\n                    }, void 0, false, {\n                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold\"\n                    }, void 0, false, {\n                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-700 text-sm mb-2\",\n                        children: [\n                            \"Price: $\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-sm mb-4\",\n                        children: [\n                            \"Ubication: \",\n                            location\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"bg-orange-500 text-white px-4 py-2 rounded-md flex items-center space-x-1 text-sm hover:bg-blue-600 transition-colors\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"\\uD83D\\uDC41️\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"See\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleChat,\n                                className: \"bg-orange-500 text-white px-4 py-2 rounded-md flex items-center space-x-1 text-sm hover:bg-blue-600 transition-colors\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"\\uD83D\\uDCAC\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            isChatOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                recyclingId: recyclingId,\n                onClose: function() {}\n            }, void 0, false, {\n                fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n                lineNumber: 47,\n                columnNumber: 22\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/talia/recyexchange-frontend/src/components/card.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"1RwI3Rpum6EBbUdSXPo/Ywgstjs=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNkO0FBVzFCLE1BQU1HLE9BQTRCO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsRUFBRTs7SUFDekYsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1XLGFBQWE7UUFDakJELGNBQWMsQ0FBQ0QsYUFBYSwyQ0FBMkM7SUFDekU7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLEtBQUtWO3dCQUNMVyxLQUFLLEdBQVEsT0FBTGIsTUFBSzt3QkFDYlUsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSTt3QkFBR0osV0FBVTs7Ozs7O2tDQUNkLDhEQUFDSzt3QkFBRUwsV0FBVTs7NEJBQTZCOzRCQUFTVDs7Ozs7OztrQ0FDbkQsOERBQUNjO3dCQUFFTCxXQUFVOzs0QkFBNkI7NEJBQVlQOzs7Ozs7O2tDQUN0RCw4REFBQ007d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTTtnQ0FBRUMsTUFBSztnQ0FBSVAsV0FBVTs7a0RBQ3BCLDhEQUFDUTtrREFBSzs7Ozs7O2tEQUNOLDhEQUFDQTtrREFBSzs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDQztnQ0FDQ0MsU0FBU1o7Z0NBQ1RFLFdBQVU7O2tEQUVWLDhEQUFDUTtrREFBSzs7Ozs7O2tEQUNOLDhEQUFDQTtrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTVhaLDRCQUFjLDhEQUFDUiw2Q0FBSUE7Z0JBQUNPLGFBQWFBO2dCQUFhZ0IsU0FBUyxZQUN4RDs7Ozs7Ozs7Ozs7O0FBR047R0F0Q010QjtLQUFBQTtBQXdDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJkLnRzeD9iZGZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGF0IGZyb20gXCIuL2NoYXRcIjtcblxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIHR5cGU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbiAgd2FsbGV0OiBzdHJpbmc7IC8vIFdhbGxldCBkZWwgcHVibGljYWRvclxuICByZWN5Y2xpbmdJZDogc3RyaW5nOyAvLyBJZGVudGlmaWNhZG9yIMO6bmljbyBkZWwgcmVjaWNsYWplXG59XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoeyB0eXBlLCBwcmljZSwgaW1hZ2VVcmwsIGxvY2F0aW9uLCB3YWxsZXQsIHJlY3ljbGluZ0lkIH0pID0+IHtcbiAgY29uc3QgW2lzQ2hhdE9wZW4sIHNldElzQ2hhdE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZUNoYXQgPSAoKSA9PiB7XG4gICAgc2V0SXNDaGF0T3BlbighaXNDaGF0T3Blbik7IC8vIENhbWJpYSBlbCBlc3RhZG8gZGVsIGNoYXQgKGFicmlyL2NlcnJhcilcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LTgwIHAtNiB0ZXh0LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNDAwIGhvdmVyOnNoYWRvdy0yeGwgaG92ZXI6LXRyYW5zbGF0ZS15LTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgYWx0PXtgJHt0eXBlfSBpbWFnZWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0zMiBoLTMyIHJvdW5kZWQtZnVsbCBteC1hdXRvIG1iLTQgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPnt9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCB0ZXh0LXNtIG1iLTJcIj5QcmljZTogJHtwcmljZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbSBtYi00XCI+VWJpY2F0aW9uOiB7bG9jYXRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgbXQtNFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSB0ZXh0LXNtIGhvdmVyOmJnLWJsdWUtNjAwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICA8c3Bhbj7wn5GB77iPPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+U2VlPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDaGF0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSB0ZXh0LXNtIGhvdmVyOmJnLWJsdWUtNjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj7wn5KsPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+Q2hhdDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgIHsvKiBNb3N0cmFyIGVsIGNoYXQgc2kgZXN0w6EgYWJpZXJ0byAqL31cbiAgICAgIHtpc0NoYXRPcGVuICYmIDxDaGF0IHJlY3ljbGluZ0lkPXtyZWN5Y2xpbmdJZH0gb25DbG9zZT17ZnVuY3Rpb24gKCk6IHZvaWQge1xuICAgICAgfSB9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hhdCIsIkNhcmQiLCJ0eXBlIiwicHJpY2UiLCJpbWFnZVVybCIsImxvY2F0aW9uIiwid2FsbGV0IiwicmVjeWNsaW5nSWQiLCJpc0NoYXRPcGVuIiwic2V0SXNDaGF0T3BlbiIsInRvZ2dsZUNoYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInAiLCJhIiwiaHJlZiIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/card.tsx\n"));

/***/ })

});