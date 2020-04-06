var first = new Vue({
  el: 'first',
  data: {
    title: 'This is first instance'
  },
  computed: {
    greet: function() {
      return 'Hello from first instance'
    }
  }
})

var second = new Vue({
  el: 'first',
  data: {
    title: 'This is second instance'
  },
  method: {
    changeTitle: function() {
      one.title = 'The new title for first instance'
    } 
  },
  computed: {
    greet: function() {
      return 'Hello from second instance'
    }
  }
})