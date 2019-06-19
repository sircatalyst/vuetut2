<template>
    <div>
        <form-helper2>
            <div slot="form-header">
                <h3>Form Two - Log In</h3>
                <p>Enter your details to log in</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="username" required>
                <input type="password" placeholder="password" required>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Login</button>
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
        handleSumbit: function(){
            alert('thanks for logging in (form two)')
        }
    }
}
</script>

<style>
body {
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>

