<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      Components are reusable Vue instances. They help you extend basic HTML elements to encapsulate reusable code. At a high level, Components are custom elements that Vue.js’ compiler would attach specified behavior to.
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'Component',
  methods: {

  },
  data: function() {
    return {
      title: 'Components in Vue.js'
    }
  }
}
</script>