import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.component('my-component', {
  template: '<div><li v-for="machine in machines">{{ machine.name }}</li></div>'
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    machines: [
      { name: 'Machine 1' },
      { name: 'Machine 2' }
    ]
  }
})

