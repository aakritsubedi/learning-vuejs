<template>
  <div class="container">
    <h2 class="text-center">Custom Directives in VueJs</h2>
    <Posts :posts="posts"></Posts>
  </div>
</template>

<script>
import axios from "axios";

import Posts from "../components/22CustomDirective/22Posts";

export default {
  name: "CustomDirective",
  components: { Posts },
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

