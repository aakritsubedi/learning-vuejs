<template>
  <div class="container-fluid">
    <h2 class="text-primary">Data Binding</h2>
    <ul class="list">
      <li>
        <b>Data Binding</b>:
        <p>A data binding means an interaction between user interface and a model property.</p>
        <code>
          <pre>
            export default {
              data: function() {
                return {
                  title: "Vuejs",
                  author: "Aakrit Subedi",
                  website: "http://www.aakritsubedi.com.np"
                };
              }
            };
          </pre>
        </code>
        <code>
          <pre>
            full syntax:- <code>v-bind:href</code>
            shorthand:- <code>:href="url"</code>
            Eg: <span><b>in anchor tag: </b> v-bind:href="website" target="_blank"</span>
          </pre>
        </code>
        <span class="h5">
          Author:
          <br />
          Name: {{author}}
          <br />Website:
          <a v-bind:href="website" target="_blank">{{website}}</a>
          <br />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DataAndMethod",
  data: function() {
    return {
      author: "Aakrit Subedi",
      website: "http://www.aakritsubedi.com.np"
    };
  }
};
</script>

<style scoped>
.list li {
  border-bottom: 1px solid #f4f4f4;
  margin: 10px 0;
}
</style>