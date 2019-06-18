<template>
  <div>
    <!-- <ninjas></ninjas> -->
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
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
      title: 'Ninja App'
    }
  },

}
</script>

<style scoped>
  h1{
    color:purple;
  }
</style>
