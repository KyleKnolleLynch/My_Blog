webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\myProjects\\nextjs\\kylesblog\\frontend\\components\\Posts.js",
    _this = undefined;



var Posts = function Posts(_ref) {
  var posts = _ref.posts;
  console.log(posts);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col md:pl-16 md:w-3/4 lg:w-3/5",
    children: posts && posts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "py-12 border-red-700 border-b-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-gray-400",
          children: post.categories.map(function (category) {
            return category + ' ';
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "text-3xl font-medium text-gray-600 my-2 md:text-4xl",
              children: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-gray-500 text-sm",
          children: ["article by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-red-700",
            children: post.authorName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 26
          }, _this), ' ', "on ", new Date(post.publishedAt).toLocaleDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Posts;
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c;

$RefreshReg$(_c, "Posts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJ0aXRsZSIsImF1dGhvck5hbWUiLCJEYXRlIiwicHVibGlzaGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBLGNBQ0dBLEtBQUssSUFDSkEsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDBCQUNaO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBLG9CQUNHQSxJQUFJLENBQUNDLFVBQUwsQ0FBZ0JGLEdBQWhCLENBQW9CLFVBQUFHLFFBQVE7QUFBQSxtQkFBSUEsUUFBUSxHQUFHLEdBQWY7QUFBQSxXQUE1QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyxnREFBRDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFDLHFEQUFkO0FBQUEsd0JBQ0dGLElBQUksQ0FBQ0c7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFXRTtBQUFNLG1CQUFTLEVBQUMsdUJBQWhCO0FBQUEsaURBQ2E7QUFBTSxxQkFBUyxFQUFDLGNBQWhCO0FBQUEsc0JBQWdDSCxJQUFJLENBQUNJO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGIsRUFDcUUsR0FEckUsU0FFTSxJQUFJQyxJQUFKLENBQVNMLElBQUksQ0FBQ00sV0FBZCxFQUEyQkMsa0JBQTNCLEVBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQTFCRDs7S0FBTVosSztBQTRCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGM4OGE0OTFlNmE3OWE0MjhhZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBvc3RzKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6cGwtMTYgbWQ6dy0zLzQgbGc6dy0zLzUnPlxyXG4gICAgICB7cG9zdHMgJiZcclxuICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMTIgYm9yZGVyLXJlZC03MDAgYm9yZGVyLWItMic+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+XHJcbiAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkgKyAnICcpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBteS0yIG1kOnRleHQtNHhsJz5cclxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgdGV4dC1zbSc+XHJcbiAgICAgICAgICAgICAgYXJ0aWNsZSBieSA8c3BhbiBjbGFzc05hbWU9J3RleHQtcmVkLTcwMCc+e3Bvc3QuYXV0aG9yTmFtZX08L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICBvbiB7bmV3IERhdGUocG9zdC5wdWJsaXNoZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c1xyXG4iXSwic291cmNlUm9vdCI6IiJ9