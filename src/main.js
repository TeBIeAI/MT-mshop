import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import './config/rem'
import 'vant/lib/index.css'
// import 'lib-flexible/flexible'
import FastClick from 'fastclick'
import './assets/icons'

Vue.config.productionTip = false
Vue.use(Vant)
FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
