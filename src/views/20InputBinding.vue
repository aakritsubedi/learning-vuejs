<template>
  <div class="container mt-3">
    <h2 class="text-center">Blogger <small>Let Write Something</small></h2>
    <hr>
    <AddBlog />
  </div>
</template>

<script>
import AddBlog from "../components/20InputBinding/20AddBlog";

export default {
  name: "InputBinding",
  components: {
    AddBlog
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>

</style>