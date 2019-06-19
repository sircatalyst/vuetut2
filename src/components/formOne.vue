<template>
    <div>
        <form-helper2>
            <div slot="form-header">
                <h3>Form One - Contact Us</h3>
                <p>Fill in this form to contact us</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required>
                <label>Your Message</label>
                <textarea></textarea>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Send</button>
            </div>
        </form-helper2>
    </div>
</template>


<script>
import formHelper2 from './FormHelper2'

export default {
    components: {
        'form-helper2': formHelper2
    },
    data() {
        return {
        }
    },
      methods: {
       handleSubmit: function(){
            alert('thanks for submitting form one & contacting us');
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