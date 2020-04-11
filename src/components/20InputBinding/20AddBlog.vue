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
            <div class="form-group" id="blog-categories">
              <input type="checkbox" value="Personal" v-model="blog.categories" />
              <label for="personal">Personal</label>

              <input type="checkbox" value="Travel" v-model="blog.categories" />
              <label for="personal">Travel</label>

              <input type="checkbox" value="Inspirational" v-model="blog.categories" />
              <label for="personal">Inspirational</label>

              <input type="checkbox" value="Educational" v-model="blog.categories" />
              <label for="personal">Educational</label>

              <input type="checkbox" value="Fun" v-model="blog.categories" />
              <label for="personal">Fun</label>
            </div>
            <div class="form-group" id="blog-author">
              <label for="author">Author</label>
              <select v-model="blog.author" class="form-control">
                <option v-for="author in authors" :key="author">{{ author }}</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col-md-7" id="preview">
          <h4 class="font-weight-bold">Preview Blog</h4>
          <h3>{{ blog.title }}</h3>
          <p id="blog-content">{{ blog.content }}</p>
          <ul id="preview-categories">
            <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
          </ul>
          <span class="float-right">{{blog.author}}</span>
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
        content: "",
        categories: [],
        author: ""
      },
      authors: ['AAkrit Subedi', 'The Net Ninja', 'Traversy Media', 'The newBostron']
    };
  }
};
</script>

<style scoped>
#preview {
  border: 1px dotted #3a3a3a;
}
#preview-categories {
  list-style: none;
}
#preview-categories li {
  float: left;
  width: auto;
  margin: 0 5px;
  padding: 2px 8px;
  border: 1px solid #2C3335;
}
#preview-categories li:hover {
  color: #ffffff;
  background-color: #2C3335;
  border: 1px dotted #DAE0E2;
}

#blog-content {
  text-indent: 25px;
}
#blog-categories input {
  text-align: center;
  display: inline-block;
  margin: 0 3px 0 10px;
}
#blog-categories label {
  font-weight: blod;
  display: inline-block;
}
</style>