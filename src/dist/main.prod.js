"use strict";var _vue=_interopRequireDefault(require("vue")),_App=_interopRequireDefault(require("./App.vue")),_router=_interopRequireDefault(require("./router")),_store=_interopRequireDefault(require("./store")),_vant=_interopRequireDefault(require("vant"));require("vant/lib/index.css"),require("lib-flexible/flexible");var _fastclick=_interopRequireDefault(require("fastclick"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.config.productionTip=!1,_vue.default.use(_vant.default),_fastclick.default.attach(document.body),new _vue.default({router:_router.default,store:_store.default,render:function(e){return e(_App.default)}}).$mount("#app");