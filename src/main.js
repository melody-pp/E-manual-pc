// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
// www.shis.com/dlkjdfpc
// www.shis.com/dlkjdfmb
//
// if(isMobile){
//   location.herf = dlkjdfmb
// }

Vue.config.productionTip = false
Vue.prototype.bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
})
