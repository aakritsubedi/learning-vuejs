<template>
  <div class="container">
    <h2 class="text-center">Filters Directives in VueJs</h2>
    <div v-view="'mobile'" id="post-container">
      <input type="text" v-model="search" placeholder="Search Post" class="form-control">
      <div class="card mt-4" v-for="post in filterPosts" :key="post.id">
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
      posts: [],
      search: ""
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  },
  computed: {
    filterPosts: function() {
      return this.posts.filter((post) => {
        return post.title.match(this.search); 
      })
    }
  }
};
</script>

<style scoped>
#post-container {
  margin: 0 auto;
}
</style>