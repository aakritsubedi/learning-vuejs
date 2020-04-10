<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <p>Lifecycle hooks are the defined methods which get executed in a certain stage of the Vue object lifespan. Starting from the initialization, to when it gets destroyed, the object follows different phases of life. Here is a famous diagram indicating the hook sequence.</p>
    <img
      src="../../public/images/lifecycle-vuejs.png"
      alt="LifeCycle"
      class="img-responsive"
      width="100%"
    />
    <h4>Lifestyle Hooks:</h4>
    <ul>
      <li>beforeCreate</li>
      <li>created <span class="badge badge-secondary">Good for fetching data.</span></li>
      <li>beforeMount</li>
      <li>mounted <span class="badge badge-secondary">Good for manipulating DOM.</span></li>
      <li>beforeUpdate</li>
      <li>updated</li>
      <li>beforeDestroy</li>
      <li>destroyed</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LifeCycleHooks",
  data() {
    return {
      title: "VueJs: LifeCycle Hooks"
    };
  },
  beforeCreate: function() {
    alert("Before Create: Creating...");
  },
  created: function() {
    alert("Created.");
  },
  beforeMount: function() {
    alert("Before Mount: Mounting...");
  },
  mounted: function() {
    alert("Mounted.");
  },
  beforeUpdate: function() {
    alert("Before Update: Updating...");
  },
  updated: function() {
    alert("Updated.");
  },
  beforeDestroy: function() {
    alert("Before Destroy: Destroying...");
  },
  destroyed: function() {
    alert("Destroyed.");
  }
};
</script>
