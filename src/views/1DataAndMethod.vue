<template>
  <div class="container-fluid">
    <h2 class="text-primary">Data And Method</h2>
    <ul class="list">
      <li>
        <b>data</b>:
        <p>The data property value is an anonymous function which is returning object.Every property inside that object is added to the Vue reactivity system so that if we change that property value then vuejs re-renders the dom with the updated data.</p>
        <code>
          <pre>
            export default {
              data: function() {
                return {
                  title: "Vuejs"
                };
              }
            };
          </pre>
        </code>
        <span class="h3">{{title}}</span>
        <span class="h5">
          Author:
          <a href="#">{{fbLink}}</a>
        </span>
      </li>
      <li>
        <b>method</b>:
        <p>The name denotes you can create methods by using it, let’s create our first method by using methods property.The methods property value is also an object.</p>
        <code>
          <pre>
            data: function() {
              name: "AAkrit Subedi"
            }
            methods:{
              welcomeMsg: function(){
                  return `Welcome ${this.name} !!`
              }
            }
          </pre>
        </code>
        <span>Call the function using template syntax: <code>welcomeMsg()</code> </span>
        <br>
        <span class="h3">{{welcomeMsg()}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DataAndMethod",
  data: function() {
    return {
      title: "Learning Data and Method",
      author: "Aakrit Subedi",
      fbLink: "https://facebook.com/aakritsubedi9",
      name: "AAkrit Subedi"
    };
  },
  methods: {
    welcomeMsg: function() {
      return `Welcome ${this.name}!!!`;
    }
  }
};
</script>

<style scoped>
.list li {
  border-bottom: 1px solid #f4f4f4;
  margin: 10px 0;
}
</style>