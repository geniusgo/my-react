"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxRuntime = require("./src/react/jsx-runtime");
var App = function App() {
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)("div", {
      className: "div-container",
      id: "id",
      onClick: function onClick() {
        return console.log('hi');
      },
      children: (0, _jsxRuntime.jsx)("p", {
        children: "hello"
      })
    }), (0, _jsxRuntime.jsx)("h1", {
      children: "hi"
    }), (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)("p", {
        children: "nice to meet you"
      }), (0, _jsxRuntime.jsx)("p", {
        children: "my name is Jay"
      })]
    })]
  });
};
var _default = exports["default"] = App;