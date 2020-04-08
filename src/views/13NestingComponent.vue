<template>
  <div class='mt-3'>
    <h2>{{ title }}</h2>
    <Navigation />
    <br>
    <h3 class="text-center">My Education</h3>
    <EducationList v-bind:myEducation="myEducation" />
  </div>
</template>

<script>
import Navigation from '@/components/13Navigation';
import EducationList from '@/components/13EducationList'

export default {
  name: "Nesting_Component",
  components: {
    Navigation,
    EducationList
  },
  data() {
    return {
      title: 'Nesting Components in VueJs',
      myEducation: [
        {school: 'Paragon Public School', degree: 'SLC', year: '2068 B.S'},
        {school: 'National School of Sciences (NIST)', degree: '+2 Science', year: '2071 B.S'},
        {school: 'Kantipur Engineering College', degree: 'B.E Computer', year: '2072 B.S'}
      ]
    }
  }
}
</script>