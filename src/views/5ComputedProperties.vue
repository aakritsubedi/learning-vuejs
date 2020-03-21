<template>
  <div class="container">
    <h2>Computed Properties</h2>
    <p>A computed property is used to declaratively describe a value that depends on other values. When you data-bind to a computed property inside the template, Vue knows when to update the DOM when any of the values depended upon by the computed property has changed.</p>
    <b>Examples:</b>
    <br />
    <span class="h3">
      The value of
      <ul>
        <li>
          <b>Age:</b>
          {{age}}
        </li>
        <li>
          <b>A:</b>
          {{a}}
        </li>
        <li>
          <b>B:</b>
          {{b}}
        </li>
        <li>
          <b>Age + A:</b>
          {{ addToA }}
        </li>
        <li>
          <b>Age + B:</b>
          {{ addToB }}
        </li>
      </ul>
    </span>
    <button @click="a++">Add to A</button>
    <button @click="b++">Add to B</button>
  </div>
</template>

<script>
export default {
  name: "ComputedProperties",
  data: function() {
    return {
      age: 23,
      a: 0,
      b: 0
    };
  },
  computed: {
    addToA: function() {
      return this.age + this.a;
    },
    addToB: function() {
      return this.age + this.b;
    }
  }
};
</script>

<style scoped>
button {
  margin: 2px 5px;
}
</style>