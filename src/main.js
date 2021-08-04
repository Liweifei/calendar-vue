import Vue from 'vue'
import App from './App.vue'

import cv from "../lib/index";
Vue.use(cv)

new Vue({
  el: '#app',
  render: h => h(App)
})
