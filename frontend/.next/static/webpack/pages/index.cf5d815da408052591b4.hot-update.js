webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialIcons */ "./components/SocialIcons.js");


var _jsxFileName = "C:\\myProjects\\nextjs\\kylesblog\\frontend\\components\\Hero.js",
    _this = undefined;





var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_client__WEBPACK_IMPORTED_MODULE_3__["default"]);

var urlFor = function urlFor(source) {
  return builder.image(source);
};

var Hero = function Hero(_ref) {
  var home = _ref.home;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative h-144",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute w-full h-full bg-yellow-900 bg-opacity-50 z-10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        layout: "fill",
        src: urlFor(home.mainImage).url(),
        className: "absolute object-cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute h-full w-full text-white flex flex-col justify-end pb-14 px-6 z-20 sm:px-12 lg:px-28",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-4xl font-bold mb-4 md:text-6xl lg:text-",
          children: home.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-xl text-gray-100 mb-6 md:text-2xl",
          children: home.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SocialIcons__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: "text-white",
          hoverColor: "text-gray-300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzIl0sIm5hbWVzIjpbImJ1aWxkZXIiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIkhlcm8iLCJob21lIiwibWFpbkltYWdlIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHdEQUFlLENBQUNDLCtDQUFELENBQS9COztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLE1BQU07QUFBQSxTQUFJSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFKO0FBQUEsQ0FBckI7O0FBRUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsaURBQUQ7QUFDRSxjQUFNLEVBQUMsTUFEVDtBQUVFLFdBQUcsRUFBRUosTUFBTSxDQUFDSSxJQUFJLENBQUNDLFNBQU4sQ0FBTixDQUF1QkMsR0FBdkIsRUFGUDtBQUdFLGlCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFPRTtBQUFLLGlCQUFTLEVBQUMsK0ZBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsOENBQWQ7QUFBQSxvQkFBOERGLElBQUksQ0FBQ0c7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyx3Q0FBYjtBQUFBLG9CQUNHSCxJQUFJLENBQUNJO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFLHFFQUFDLG9EQUFEO0FBQWEsZUFBSyxFQUFDLFlBQW5CO0FBQWdDLG9CQUFVLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FwQkQ7O0tBQU1MLEk7QUFzQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmNWQ4MTVkYTQwODA1MjU5MWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tICcuL1NvY2lhbEljb25zJ1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcblxyXG5jb25zdCB1cmxGb3IgPSBzb3VyY2UgPT4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcblxyXG5jb25zdCBIZXJvID0gKHsgaG9tZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLTE0NCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHctZnVsbCBoLWZ1bGwgYmcteWVsbG93LTkwMCBiZy1vcGFjaXR5LTUwIHotMTAnPjwvZGl2PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgbGF5b3V0PSdmaWxsJ1xyXG4gICAgICAgICAgc3JjPXt1cmxGb3IoaG9tZS5tYWluSW1hZ2UpLnVybCgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBvYmplY3QtY292ZXInXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgaC1mdWxsIHctZnVsbCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgcGItMTQgcHgtNiB6LTIwIHNtOnB4LTEyIGxnOnB4LTI4Jz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCBtYi00IG1kOnRleHQtNnhsIGxnOnRleHQtJz57aG9tZS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhsIHRleHQtZ3JheS0xMDAgbWItNiBtZDp0ZXh0LTJ4bCc+XHJcbiAgICAgICAgICAgIHtob21lLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIGNvbG9yPSd0ZXh0LXdoaXRlJyBob3ZlckNvbG9yPSd0ZXh0LWdyYXktMzAwJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1xyXG4iXSwic291cmNlUm9vdCI6IiJ9