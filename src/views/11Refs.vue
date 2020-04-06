<template>
  <div class="container">
    <h2>Refs in Vue.js</h2>
    <label>Your Fav Food</label>
    <input type="text" class="form-control" ref="favFood">
    <button v-on:click="submitFood">Submit</button>
    <p>Your fav food is: <b>{{ favFood }}</b></p>
    <hr>
    <div ref="division">
      Hello Aakrit Subedi
    </div>
  </div>
</template>

<script>
export default {
  name: "Refs",
  data: function() {
    return {
      favFood: "Food"
    }
  },
  methods: {
    submitFood: function() {
      console.log(this.$refs);
      this.favFood = this.$refs.favFood.value;

      this.$refs.division.innerHTML= "Your fav food is "+ this.favFood;
    }
  }
}
</script>