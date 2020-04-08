<template>
  <ul>
    <li v-for="(edu, index) in myEducation" add v-bind:key="index">
      <h4>{{edu.school}}</h4>
      <h2>{{edu.degree}}</h2>
      <h5>{{edu.year}}</h5>
    </li>
  </ul>
</template>


<script>
export default {
  name: "Timeline",
  props: {
    myEducation: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
li {
  margin: 10px auto;
  list-style: none;
  padding: 5px 25px;
  border: 1px solid #3a3a3a;
}
</style>