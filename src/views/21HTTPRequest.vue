<template>
  <div class="container">
    <h2 class="text-center">HTTP Requests</h2>
    <p>
      Using
      <code>axios</code> requesting dummy placeholder server:
      <a
        href="https://jsonplaceholder.typicode.com/"
        target="_blank"
      >https://jsonplaceholder.typicode.com/</a>
    </p>
    <div class="row">
      <div class="col-md-7">
        requesting
        <code>/post</code>
        <table class="table">
          <tbody>
            <tr>
              <td>GET</td>
              <td>/posts</td>
            </tr>
            <tr>
              <td>GET</td>
              <td>/posts/1</td>
            </tr>
            <tr>
              <td>POST</td>
              <td>/posts</td>
            </tr>
            <tr>
              <td>PUT</td>
              <td>/posts/1</td>
            </tr>
            <tr>
              <td>PATCH</td>
              <td>/posts/1</td>
            </tr>
            <tr>
              <td>DELETE</td>
              <td>/posts/1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 offset-1">
        <table class="table">
          <tr id="//dash_ref_API/Entry/Request method aliases/0">
            <td class="description" colspan="2">
              <div class="name">
                <p>Request method aliases</p>
              </div>
              <div class="notes">
                <h5>axios.request(config)</h5>

                <h5>axios.get(url[, config])</h5>

                <h5>axios.delete(url[, config])</h5>

                <h5>axios.head(url[, config])</h5>

                <h5>axios.options(url[, config])</h5>

                <h5>axios.post(url[, data[, config]])</h5>

                <h5>axios.put(url[, data[, config]])</h5>

                <h5>axios.patch(url[, data[, config]])</h5>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#home" @click="getPost">GET Request</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link active"
          data-toggle="tab"
          href="#menu0"
          @click="getPostById"
        >GETbyId Request</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu1" @click="addPost">POST Request</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu2" @click="updatePost_PUT">PUT Request</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu3" @click="updatePost_PATCH">PATCH Request</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu4" @click="deletePost">DELETE Request</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane container fade" id="home">{{ posts }}</div>
      <div class="tab-pane container active" id="menu0">{{ postId }}</div>
      <div class="tab-pane container fade" id="menu1">{{ addPostResponse }}</div>
      <div class="tab-pane container fade" id="menu2">{{ updatedPost }}</div>
      <div class="tab-pane container fade" id="menu3">{{ updatedPost }}</div>
      <div class="tab-pane container fade" id="menu4">{{ deletedPost }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HTTPRequest",
  data() {
    return {
      posts: "",
      postId: this.getPostById(),
      addPostResponse: "",
      updatedPost: "",
      deletedPost: ""
    };
  },
  methods: {
    getPost: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => (this.posts = response.data))
        .catch(error => console.log(error));
    },
    getPostById: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => (this.postId = response.data))
        .catch(error => console.log(error));
    },
    addPost: function() {
      const post = {
        userId: 1,
        title: "AAkrit Subedi",
        body: "aakrit subedi is creating this post..."
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", post)
        .then(response => (this.addPostResponse = response.data))
        .catch(error => console.log(error));
    },
    updatePost_PUT: function() {
      const post = {
        id: 1,
        userId: 1,
        title: "AAkrit Subedi",
        body: "aakrit subedi is updating this post..."
      };
      axios
        .put("https://jsonplaceholder.typicode.com/posts/1", post)
        .then(response => (this.updatedPost = response.data))
        .catch(error => console.log(error));
    },
    updatePost_PATCH: function() {
      const post = {
        title: "AAkrit Subedi"
      };
      axios
        .patch("https://jsonplaceholder.typicode.com/posts/1", post)
        .then(response => (this.updatedPost = response.data))
        .catch(error => console.log(error));
    },
    deletePost: function() {
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(() => (this.deletedPost = "Deleted."))
        .catch(error => console.log(error));
    }
  }
};
</script>