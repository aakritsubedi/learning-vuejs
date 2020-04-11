<template>
  <div class="card mt-4">
    <div class="card-header" v-rainbow>{{ post.title }}</div>
    <div class="card-body">
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: ["post"]
};
</script>