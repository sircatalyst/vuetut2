<template>
  <div>
    <!-- <ninjas></ninjas> -->
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
    <form-helper>
      <h2 slot="title">{{ title1 }}</h2>
      <p slot="text">I am the paragraph for the slot</p>
    </form-helper>

    <form-helper2>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper2>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
    <add-blog></add-blog>
  </div>
</template>

<script>
// import Ninjas from "./Ninjas.vue"
import Header from './components/Header';
import Footer from './components/Footer';
import Ninjas from './components/Ninjas';
import formHelper from './components/FormHelper';
import formHelper2 from './components/FormHelper2';

import formOne from './components/formOne';
import formTwo from './components/formTwo';

import addBlog from './components/addBlog';

export default {
  components: {
    // 'ninjas': Ninjas 
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-helper': formHelper,
    'form-helper2': formHelper2,
    'form-one': formOne,
    'form-two': formTwo,
    "add-blog": addBlog,
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
       title: "Vue Ninjas",
       title1: "I am a dynamic slot title",
       component: 'form-one'
    }
  },
  methods: {
    updateTitle: function(updateTitle) {
      this.title = updateTitle;
    },

    handleSubmit: function(){
      alert('thanks for submitting');
    }
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
