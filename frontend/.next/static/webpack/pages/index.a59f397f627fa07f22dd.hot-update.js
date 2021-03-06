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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "text-3xl font-medium text-gray-600 my-2 md:text-4xl hover:text-gray-400 transition-colors",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJzbHVnIiwiY3VycmVudCIsInRpdGxlIiwiYXV0aG9yTmFtZSIsIkRhdGUiLCJwdWJsaXNoZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzNCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUEsY0FDR0EsS0FBSyxJQUNKQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsMEJBQ1o7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUEsb0JBQ0dBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkYsR0FBaEIsQ0FBb0IsVUFBQUcsUUFBUTtBQUFBLG1CQUFJQSxRQUFRLEdBQUcsR0FBZjtBQUFBLFdBQTVCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxpQkFBVUYsSUFBSSxDQUFDRyxJQUFMLENBQVVDLE9BQXBCLENBQVY7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBQywyRkFBZDtBQUFBLHdCQUNHSixJQUFJLENBQUNLO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBV0U7QUFBTSxtQkFBUyxFQUFDLHVCQUFoQjtBQUFBLGlEQUNhO0FBQU0scUJBQVMsRUFBQyxjQUFoQjtBQUFBLHNCQUFnQ0wsSUFBSSxDQUFDTTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURiLEVBQ3FFLEdBRHJFLFNBRU0sSUFBSUMsSUFBSixDQUFTUCxJQUFJLENBQUNRLFdBQWQsRUFBMkJDLGtCQUEzQixFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0ExQkQ7O0tBQU1kLEs7QUE0QlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1OWYzOTdmNjI3ZmEwN2YyMmRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQb3N0cyA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwb3N0cylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1kOnBsLTE2IG1kOnctMy80IGxnOnctMy81Jz5cclxuICAgICAge3Bvc3RzICYmXHJcbiAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTEyIGJvcmRlci1yZWQtNzAwIGJvcmRlci1iLTInPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPlxyXG4gICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IGNhdGVnb3J5ICsgJyAnKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgcG9zdC8ke3Bvc3Quc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBteS0yIG1kOnRleHQtNHhsIGhvdmVyOnRleHQtZ3JheS00MDAgdHJhbnNpdGlvbi1jb2xvcnMnPlxyXG4gICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB0ZXh0LXNtJz5cclxuICAgICAgICAgICAgICBhcnRpY2xlIGJ5IDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1yZWQtNzAwJz57cG9zdC5hdXRob3JOYW1lfTwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgIG9uIHtuZXcgRGF0ZShwb3N0LnB1Ymxpc2hlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=