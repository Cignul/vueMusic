import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

class App {
  constructor() {
    this.controllers = {
      itunesCtrl: new ItunesController()
    }
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import ItunesController from "./components/itunes-controller.js";


