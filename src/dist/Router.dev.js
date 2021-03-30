"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _About = _interopRequireDefault(require("./components/About"));

var _Groups = _interopRequireDefault(require("./components/Groups.vue"));


var _GroupDetaild = _interopRequireDefault(require("./components/GroupDetaild.vue"));

var _FullScreenEditGroup = _interopRequireDefault(require("./components/FullScreenEditGroup.vue"));

var _FullScreenNewGroup = _interopRequireDefault(require("./components/FullScreenNewGroup.vue"));



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: [{
    path: "/",
    component: _Groups["default"]
  }, {
    path: "/about",
    component: _About["default"]
  },
  {
    path:"GroupTemplate",
    component: _GroupTemplate["default"]
  },
  {
    path: "/group/:id",
    component: _GroupDetaild["default"],
    props: true
  }, {
    path: "/group/:id/edit",
    component: _FullScreenEditGroup["default"],
    props: true
  }, {
    path: "/group/new",
    component: _FullScreenNewGroup["default"]
  }, {
    path: "*",
    component: _Page["default"]
  }]
});
var _default = Router;
exports["default"] = _default;