<template>
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="navbar-brand" href="#" v-on:click="changeTitle">{{brand}}</div>
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: ['brand'],
  methods: {
    changeTitle: function() {
      this.$emit('changeTitle','Learning VueJs');
    }
  }
};
</script>