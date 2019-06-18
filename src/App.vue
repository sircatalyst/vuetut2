<template>
  <div>
    <!-- <ninjas></ninjas> -->
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// import Ninjas from "./Ninjas.vue"
import Header from './components/Header';
import Footer from './components/Footer';
import Ninjas from './components/Ninjas';

export default {
  components: {
    // 'ninjas': Ninjas 
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
  },
  data () {
    return {
       ninjas: [
           {name: 'Ryu', speciality: 'Vue Components', show: false},
           {name: 'Crystal', speciality: 'Html Wizandary', show: false},
           {name: 'Hitoshi', speciality: 'Click Events', show: false},
           {name: 'Tango', speciality: 'Conditionals', show: false},
           {name: 'Kanmi', speciality: 'Webpack', show: false},
           {name: 'Yoshi', speciality: 'Dummy data', show: false},
       ],
       title: "Vue Ninjas"
    }
  },
  methods: {
    updateTitle: function(updateTitle) {
      this.title = updateTitle;
    }
  }
}
</script>

<style scoped>
  h1{
    color:purple;
  }
</style>
