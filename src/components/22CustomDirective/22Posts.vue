<template>
  <div v-view="'mobile'" id="wrapper">
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
  }
};
</script>

<style scoped>
  #wrapper {
    margin:0 auto;
  }
</style>