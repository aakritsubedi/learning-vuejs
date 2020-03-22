<template>
  <div class="container">
    <h2>Conditionals</h2>
    <button v-on:click="error = !error">Toggle error</button>
    <button v-on:click="success = !success">Toggle success</button>
    <!-- v-if -->
    <p v-if="error" class="error">There has been an error</p>
    <p v-else-if="success" class="success">Whooo, success :)</p>
    <!-- v-show -->
    <p v-show="error" class="error">There has been an error</p>
    <p v-show="success" class="success">Whooo, success :)</p>
  </div>
</template>

<script>
export default {
  name: "Conditionals",
  data: function() {
    return {
      error: false,
      success: false
    };
  }
};
</script>

<style scoped>
button {
  margin: 2px 5px;
}
</style>