<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form One - Contact Us</h3>
                <p>Fill in this form to contact us</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required class="form-control"/>
                <label>Your Message:</label>
                <textarea class="form-control"></textarea>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Send</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formHelper from './19FormHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    data () {
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