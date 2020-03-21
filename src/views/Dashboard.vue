<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>SN</th>
          <th>Title</th>
          <th>Code</th>
          <th>Illustrative Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in contents" :key="item.sn">
          <td>{{item.sn}}</td>
          <td>{{item.title}}</td>
          <td><a :href="item.code">Github</a></td>
          <td><router-link :to="item.link">Demo</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: function() {
    return {
      contents: [
        {sn: 1, title: 'Basic: Data & Method', code: '#', link: '/basic/dataAndMethod'},
        {sn: 2, title: 'Basic: Creating Vue Project', code: '#', link: '/basic/creatingVueProject'},
        {sn: 3, title: 'Basic: Data Binding', code: '#', link:'/basic/dataBinding'},
        {sn: 4, title: 'Basic: Events', code: '#', link:'/basic/eventsInVue'},
        {sn: 5, title: 'Basic: Two way data binding', code: '#', link:'/basic/twoWayDataBinding'}

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
