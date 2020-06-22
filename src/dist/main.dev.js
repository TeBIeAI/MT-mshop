"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _vant = _interopRequireDefault(require("vant"));

require("./config/rem");

require("vant/lib/index.css");

var _fastclick = _interopRequireDefault(require("fastclick"));

require("./assets/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import 'lib-flexible/flexible'
_vue["default"].config.productionTip = false;

_vue["default"].use(_vant["default"]);

_fastclick["default"].attach(document.body);

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');