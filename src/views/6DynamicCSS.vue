<template>
  <div class="container">
    <h2>Dynamic CSS</h2>
    <b>Examples:</b>
    <br />
    <span class="h3">ChatBox</span>
    <button @click="changeStatus" class="float-right" :class="{red: online, green:offline}">{{title}}</button>
    <ul class="chatbox">
      <li>Sitaram Subedi <div :class="{online: online, offline: offline}"></div></li>
      <li>Binamrata Adhikari <div :class="{online: online, offline: offline}"></div></li>
      <li>Sadikshya Subedi <div :class="{online: online, offline: offline}"></div></li>
      <li>Aakrit Subedi <div :class="{online: online, offline: offline}"></div></li>
      <li>Yukti Bhatt <div :class="{online: online, offline: offline}"></div></li>
    </ul>
    <b>Note: </b> <span>Click Online/Offline button to toggle status</span>
  </div>
</template>

<script>
export default {
  name: "DynamicCSS",
  data: function() {
    return {
      title: 'Offline',
      online: true,
      offline: false
    }
  },
  methods: {
    changeStatus: function() {
      if(this.online) {
        this.title= 'Online';
        this.online = false;
        this.offline = true;
      }
      else{
        this.title = 'Offline'
        this.online = true;
        this.offline = false;
      }
    }
  }
};
</script>

<style scoped>
 .chatbox {
   border: 1px solid #f4f4f4;
   list-style: none;
 }
 .chatbox li {
   padding: 5px;
   border-bottom: 1px solid #f6f6f6;
 }
 .chatbox li:hover {
   background-color: #f4f4f4;
 }
 .online {
   display: inline-block;
   background-color: green;
   height: 15px;
   width: 15px;
   border-radius: 50%;
   margin: 3px 0;
   float: right;
 }
  .offline {
   display: inline-block;
   background-color: red;
   height: 15px;
   width: 15px;
   border-radius: 50%;
   margin: 3px 0;
   float: right;
 }
 button {
   padding: 2px 5px;
   border: none;
   color: honeydew;
 }
 .red {
   background-color: red;
 }
 .green { 
   background-color: green;
 }
</style>