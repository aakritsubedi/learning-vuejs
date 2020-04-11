<template>
  <div class="container mt-3">
    <div id="add-blog">
      <div class="row">
        <div class="col-md-5">
          <h4 class="text-primary">
            Blogger:
            <small>Add New Blog</small>
          </h4>
          <form action>
            <div class="form-group">
              <label for="title">Title:</label>
              <input
                type="text"
                placeholder="Please enter blog title"
                class="form-control"
                v-model.lazy="blog.title"
                required
              />
            </div>
            <div class="form-group">
              <label for="title">Blog Content:</label>
              <textarea
                placeholder="Please write something"
                class="form-control"
                v-model="blog.content"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <div class="col-md-7" id="preview">
          <h4 class="font-weight-bold">Preview Blog</h4>
          <h3>{{ blog.title }}</h3>
          <p id="blog-content">{{ blog.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
    };
  }
};
</script>

<style scoped>
#preview {
  border: 1px dotted #3a3a3a;
}
#blog-content {
  text-indent: 25px;
}
</style>