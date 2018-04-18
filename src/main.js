import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter)
Vue.use(BootstrapVue)
//
const router = new VueRouter({
  routes:routes
});


new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app');
