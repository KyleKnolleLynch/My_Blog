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
          href: "post/".concat(post.slug.current),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-red-",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJzbHVnIiwiY3VycmVudCIsInRpdGxlIiwiYXV0aG9yTmFtZSIsIkRhdGUiLCJwdWJsaXNoZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzNCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUEsY0FDR0EsS0FBSyxJQUNKQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsMEJBQ1o7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUEsb0JBQ0dBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkYsR0FBaEIsQ0FBb0IsVUFBQUcsUUFBUTtBQUFBLG1CQUFJQSxRQUFRLEdBQUcsR0FBZjtBQUFBLFdBQTVCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxpQkFBVUYsSUFBSSxDQUFDRyxJQUFMLENBQVVDLE9BQXBCLENBQVY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsaUJBQWI7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMscURBQWQ7QUFBQSx3QkFDR0osSUFBSSxDQUFDSztBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVdFO0FBQU0sbUJBQVMsRUFBQyx1QkFBaEI7QUFBQSxpREFDYTtBQUFNLHFCQUFTLEVBQUMsY0FBaEI7QUFBQSxzQkFBZ0NMLElBQUksQ0FBQ007QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYixFQUNxRSxHQURyRSxTQUVNLElBQUlDLElBQUosQ0FBU1AsSUFBSSxDQUFDUSxXQUFkLEVBQTJCQyxrQkFBM0IsRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFkO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBMUJEOztLQUFNZCxLO0FBNEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZDRlZDk2NDViNDU0YWZjNGM2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUG9zdHMgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocG9zdHMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtZDpwbC0xNiBtZDp3LTMvNCBsZzp3LTMvNSc+XHJcbiAgICAgIHtwb3N0cyAmJlxyXG4gICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0xMiBib3JkZXItcmVkLTcwMCBib3JkZXItYi0yJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5cclxuICAgICAgICAgICAgICB7cG9zdC5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeSArICcgJyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YHBvc3QvJHtwb3N0LnNsdWcuY3VycmVudH1gfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2hvdmVyOnRleHQtcmVkLSc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIG15LTIgbWQ6dGV4dC00eGwnPlxyXG4gICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB0ZXh0LXNtJz5cclxuICAgICAgICAgICAgICBhcnRpY2xlIGJ5IDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1yZWQtNzAwJz57cG9zdC5hdXRob3JOYW1lfTwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgIG9uIHtuZXcgRGF0ZShwb3N0LnB1Ymxpc2hlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=