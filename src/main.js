import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninjas.vue'
import VueResource from 'vue-resource'

// Vue.component('ninjas', Ninjas)
Vue.use(VueResource);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
