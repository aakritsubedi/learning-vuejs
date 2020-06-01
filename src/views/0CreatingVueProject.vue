<template>
  <div class="container">
    <h2>Creating Project in VueJS</h2>
    <p>Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him.</p>
    <a href="https://vuejs.org/" target="_blank">vuejs.org</a>
    <hr />
    <h2>Creating our project</h2>
    <ul>
      <li>
        <b>Setup VueCLI:</b>
        <code>npm install -g @vue/cli</code> ||
        <code>yarn global add @vue/cli</code>
      </li>
      <span>Follow the instruction in terminal.</span>
      <li>
        <b>Create VueProject:</b>
        <code>vue create myProject</code>
      </li>
      <span>This above command will download required files in myProject folder.</span>
      <li>
        Change your working directory by using
        <code>cd myProject</code> then open your project folder by using your favorite code editor.
      </li>
      <li>
        <b>Start development server:</b>
        <code>yarn serve</code>
      </li>
      <span>
        your App running at:
        <code>
          Local:
          <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a>
        </code>
      </span>
    </ul>
    <a href="https://cli.vuejs.org/guide/installation.html" target="_blank">ReadMore...</a>
  </div>
</template>

<script>
export default {
  name: "VueProject"
}
</script>