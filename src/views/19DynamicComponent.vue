<template>
  <div class="container">
    <button v-on:click="component='FormTwo'">Login</button>
    <button v-on:click="component='FormOne'">Contact Us</button>
    <keep-alive>
      <component v-bind:is="component"> </component>
    </keep-alive>
  </div>
</template>

<script>
import FormOne from "../components/19DynamicComponent/19FormOne";
import FormTwo from "../components/19DynamicComponent/19FormTwo";

export default {
  name: "DynamicComponent",
  components: {
    FormOne,
    FormTwo
  },
  data() {
    return {
      component: 'FormTwo'
    }
  }
};
</script>