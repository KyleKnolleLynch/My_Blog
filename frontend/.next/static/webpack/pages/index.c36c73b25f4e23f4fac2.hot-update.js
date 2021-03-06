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


var _jsxFileName = "C:\\myProjects\\nextjs\\kylesblog\\frontend\\components\\Posts.js",
    _this = undefined;

var Posts = function Posts(_ref) {
  var posts = _ref.posts;
  console.log(posts);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w- flex flex-col md:pl-16",
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
          lineNumber: 9,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "text-3xl font-medium text-gray-600 my-2",
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-gray-500",
          children: ["article by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-red-700",
            children: post.authorName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 26
          }, _this), " on", ' ', new Date(post.publishedAt).toLocaleDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJ0aXRsZSIsImF1dGhvck5hbWUiLCJEYXRlIiwicHVibGlzaGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQSxjQUNHQSxLQUFLLElBQ0pBLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSwwQkFDWjtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUMsZUFBaEI7QUFBQSxvQkFBaUNBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkYsR0FBaEIsQ0FBb0IsVUFBQUcsUUFBUTtBQUFBLG1CQUFJQSxRQUFRLEdBQUcsR0FBZjtBQUFBLFdBQTVCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMseUNBQWQ7QUFBQSxvQkFBeURGLElBQUksQ0FBQ0c7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBLGlEQUNhO0FBQU0scUJBQVMsRUFBQyxjQUFoQjtBQUFBLHNCQUFnQ0gsSUFBSSxDQUFDSTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURiLFNBQ3dFLEdBRHhFLEVBRUcsSUFBSUMsSUFBSixDQUFTTCxJQUFJLENBQUNNLFdBQWQsRUFBMkJDLGtCQUEzQixFQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWxCRDs7S0FBTVosSztBQW9CU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzM2YzczYjI1ZjRlMjNmNGZhYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBvc3RzKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctIGZsZXggZmxleC1jb2wgbWQ6cGwtMTYnPlxyXG4gICAgICB7cG9zdHMgJiZcclxuICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMTIgYm9yZGVyLXJlZC03MDAgYm9yZGVyLWItMic+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+e3Bvc3QuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkgKyAnICcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBteS0yJz57cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAnPlxyXG4gICAgICAgICAgICAgIGFydGljbGUgYnkgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXJlZC03MDAnPntwb3N0LmF1dGhvck5hbWV9PC9zcGFuPiBvbnsnICd9XHJcbiAgICAgICAgICAgICAge25ldyBEYXRlKHBvc3QucHVibGlzaGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==