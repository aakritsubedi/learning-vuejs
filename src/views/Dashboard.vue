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
        {sn: 1, title: 'Basic: Creating Vue Project', code: '#', link: '/basic/creatingVueProject'},
        {sn: 2, title: 'Basic: Data & Method', code: '#', link: '/basic/dataAndMethod'},
        {sn: 3, title: 'Basic: Data Binding', code: '#', link:'/basic/dataBinding'},
        {sn: 4, title: 'Basic: Events', code: '#', link:'/basic/eventsInVue'},
        {sn: 5, title: 'Basic: Two way data binding', code: '#', link:'/basic/twoWayDataBinding'},
        {sn: 6, title: 'Basic: Computed Properties', code: '#', link:'/basic/computedProperties'},
        {sn: 7, title: 'Basic: Dynamic CSS', code: '#', link:'/basic/dynamicCSS'},
        {sn: 8, title: 'Basic: Conditionals', code: '#', link:'/basic/conditionals'},
        {sn: 9, title: 'Project: Boxing Game', code: '#', link:'/project/boxingGame'},
        {sn: 10, title: 'Multiple Vue Instance', code: '#', link:'/intermediate/multipleInstance'},
        {sn: 11, title: 'Components in Vue.js', code: '#', link:'/intermediate/components'},
        {sn: 12, title: 'Refs in Vue.js ($refs)', code: '#', link:'/intermediate/refs'},
        {sn: 13, title: 'Vue CLI', code:'#', link:'vue-cli/intro'},
        {sn: 14, title: 'Nesting Component, Scoped CSS, Props', code:'#', link:'/intermediate/nestingComponent'},
        {sn: 15, title: 'Props: Premitive & Reference Types', code:'#', link:'/intermediate/propsType'},
        {sn: 16, title: 'Events: Emit event from Child to Parent', code:'#', link:'/event/childToParent'},
        {sn: 17, title: 'Event: Event Bus', code:'#', link:'/event/eventBus'},
        {sn: 18, title: 'Advance: LifeCycle Hooks', code:'#', link:'/advance/lifeCycleHooks'}
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
