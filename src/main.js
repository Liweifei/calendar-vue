import Vue from 'vue'
import App from './App.vue'
import popover from "./popover/popover.js";

Vue.use(popover)
new Vue({
  el: '#app',
  render: h => h(App)
})
