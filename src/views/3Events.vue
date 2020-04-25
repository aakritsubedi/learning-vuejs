<template>
  <div class="container">
    <h2>Events in VueJs</h2>
    <a href="https://vuejs.org/v2/guide/events.html" target="_blank">ReadMore...</a>
    <ul class="list">
      <li>
        <b>Mouse Event:</b>
        <ul>
          <li>click event</li>
          <b>Examples:</b>
          <ul>
            <li>
              <code>v-on:click='statement'</code>
              <br />
              <button v-on:click="on = !on">On/Off</button> &nbsp;(Click button to toggle status)
              <br />
              <span class="h4">
                The status is:
                <code>{{on}}</code>
              </span>
            </li>

            <li>
              <code>v-on:dbl/click='function'</code>
              <br />
              <span class="h3">My age is {{age}}</span>
              <br />
              <button @click="add(1)">Add 1</button>
              <button v-on:dblclick="sub(1)">Subtract 1</button>
              <button v-on:click="add(10)">Add 10</button>
              <button v-on:dblclick="sub(10)">Subtract 10</button>
              <br />
              <b>Note:</b> Single click to add function and double click to subtract function
            </li>
            <li>
              <code>v-on:mousemove</code>
              <br />
              <div id="my-canvas" v-on:mousemove="getXY">({{x}}, {{y}})</div>
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <b>Keyboard Event:</b>
        <br />
        <a href="https://www.w3schools.com/jsref/obj_keyboardevent.asp" target="_blank">Keyboard Events in DOM</a>
        <input type="text" class="form-control" placeholder="Enter your name" v-on:keyup.enter="displayName">
        <br/>
        <span class="h3">Your name is {{name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EventsInVue",
  data: function() {
    return {
      on: true,
      age: 23,
      x: 0,
      y: 0,
      name: ''
    };
  },
  methods: {
    add: function(inc) {
      this.age += inc;
    },
    sub: function(dec) {
      this.age -= dec;
    },
    getXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    displayName: function() {
      this.name = 'Aakrit Subedi'
    }
  }
};
</script>

<style scoped>
button {
  margin: 2px 5px;
  border-radius: 2px;
}

#my-canvas {
  width: 600px;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid #333;
  font-weight: bold;
}
li {
  margin: 10px 0;
}
</style>