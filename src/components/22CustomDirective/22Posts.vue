<template>
  <div v-view="viewport" id="wrapper">
    <button @click="updateViewPort" class='btn btn-sm btn-primary' id="viewport-btn">{{viewport}}</button>
    <SinglePost v-for="post in posts" :key="post.id" :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from "./22SinglePost";

export default {
  name: "Posts",
  props: ["posts"],
  components: {
    SinglePost
  },
  data() {
    return {
      viewport: 'mobile'
    }
  },
  methods: {
    updateViewPort: function() {
      this.viewport = this.viewport === 'mobile' ? 'desktop' : 'mobile';
    }
  }
};
</script>

<style scoped>
  #wrapper {
    margin:0 auto;
  }
  #viewport-btn {
    text-transform: capitalize;
  }
</style>