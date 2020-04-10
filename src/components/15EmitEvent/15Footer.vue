<template>
  <div class="footer">
    <p>&copy; AAkrit Subedi <span class="float-right">{{brand}}</span></p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ['brand']
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #3a3a3a;
  color: white;
  text-align: center;
}
span {
  margin:0 5px;
}
</style>