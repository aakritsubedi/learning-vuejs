<template>
  <div class="container">
    <h2 class="text-center">Filters Directives in VueJs</h2>
    <div v-view="'mobile'" id="post-container">
      <div class="card mt-4" v-for="post in posts" :key="post.id">
        <div class="card-header" v-rainbow>{{ post.title | to-uppercase }}</div>
        <div class="card-body">
          <p>{{ post.body | snippet }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CustomDirective",
  data() {
    return {
      posts: ""
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
#post-container {
  margin: 0 auto;
}
</style>