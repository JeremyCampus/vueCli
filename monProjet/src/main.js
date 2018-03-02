import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    machine1: "active",
    machine2: "inactive"
  },
})

