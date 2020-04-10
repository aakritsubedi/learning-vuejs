<template>
  <div class="mt-3">
    <h2>{{ title }}</h2>
    <Navigation :brand="brand" v-on:changeTitle="updateTitle($event)" />
    <br />
    <Footer :brand="brand" />
  </div>
</template>

<script>
import Navigation from "@/components/15EmitEvent/15Navigation";
import Footer from "@/components/15EmitEvent/15Footer";

export default {
  name: "Nesting_Component",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      title: "Emit event from Child to Parent",
      brand: "VueJs"
    };
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.brand = updatedTitle;
    }
  }
};
</script>