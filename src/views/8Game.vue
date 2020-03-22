<template>
  <div class="container">
    <h2>
      Boxing Game
      <small>Punchbag Game</small>
    </h2>
    
    <div id="bag" :class="{ burst: ended }" />

    <div id="bag-health">
      <div v-bind:style="{ width: health + '%' }">{{health}}%</div>
    </div>

    <!-- game control buttons -->
    <div id="controls">
      <button v-on:click="punch" v-show="!ended">Punch</button>
      <button v-on:click="restart">Restart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxingGame",
  data: function() {
    return {
      ended: false,
      health: 100
    };
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  }
};
</script>

<style scoped>
#bag {
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url("../assets/Punchbag Game/bag.png") center no-repeat;
  background-size: 80%;
}

#bag.burst {
  background-image: url("../assets/Punchbag Game/bag-burst.png");
}

#bag-health {
  width: 300px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #000;
  margin: 0 auto 20px auto;
}

#bag-health div {
  height: 20px;
  background: crimson;
}
#controls {
  text-align: center;
  width: 150px;
  margin: 0 auto;
}
#controls button {
  margin: 2px 5px;
  border: none;
}
</style>