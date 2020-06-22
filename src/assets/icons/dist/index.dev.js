"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _SvgIcon = _interopRequireDefault(require("@/components/svg/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 全局注册组件
_vue["default"].component('svg-icon', _SvgIcon["default"]); // 定义一个加载目录的函数


var requireAll = function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
};

var req = require.context('@/assets/icons', false, /\.svg$/); // 加载目录下的所有 svg 文件


requireAll(req);