<template>
  <div class="container">
    <h2>Setting up Vue projects using VUE CLI</h2>
    <p>Vue CLI is a full system for rapid Vue.js development, providing:</p>
    <ul>
      <li>
        Interactive project scaffolding via
        <code>@vue/cli</code>.
      </li>
      <li>
        Zero config rapid prototyping via
        <code>@vue/cli</code> +
        <code>@vue/cli-service-global</code>.
      </li>
      <li>
        A runtime dependency (
        <code>@vue/cli-service</code>) that is:
        <ul>
          <li>Upgradeable;</li>
          <li>Built on top of webpack, with sensible defaults;</li>
          <li>Configurable via in-project config file;</li>
          <li>Extensible via plugins</li>
        </ul>
      </li>
      <li>A rich collection of official plugins integrating the best tools in the frontend ecosystem.</li>
      <li>A full graphical user interface to create and manage Vue.js projects.</li>
    </ul>
    <p>Vue CLI aims to be the standard tooling baseline for the Vue ecosystem. It ensures the various build tools work smoothly together with sensible defaults so you can focus on writing your app instead of spending days wrangling with configurations. At the same time, it still offers the flexibility to tweak the config of each tool without the need for ejecting.</p>
    <a href="https://cli.vuejs.org/" target="_blank">Read More...</a>
    <hr />
    <p>To install the new package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm).</p>
    <code>
      <pre>
          npm install -g @vue/cli
          # OR
          yarn global add @vue/cli
        </pre>
    </code>
    <p>
      After installation, you will have access to the vue binary in your command line. You can verify that it is properly installed by simply running vue, which should present you with a help message listing all available commands.
    </p>
    <code>
      vue --version
    </code>
    <hr>
    <h3>Create Project</h3>
    <ul>
      <li>After installing Vue CLI, navigate to the directory where you want to create Vue project</li>
      <li><code>vue create --project_name--</code></li>
      <li><code>$ cd --project_name--</code></li>
      <li><code>yarn serve</code></li>
      <span>Your local server is running at <a href="http://localhost:8080">http://localhost:8080</a></span>
    </ul>
    <h3>File System</h3>
    <ul>
      <li><code>node_modules</code> It contains all the dependency </li>
      <li><code>src</code> where all our source code </li>
      <ul>
        <li><code>assets</code></li>
        <li><code>main.js</code> kicks in when we run the app and creating the Vue instance which controls the entire section div#app in <code>index.html</code> in public folder. </li>
      </ul>
      <li><code>.gitignore</code> file</li>
      <li><code>public>index.html</code> which is main file</li>
      <li><code>package.json</code> which contains all the info about the projects and dependecies we have installed</li>
      <li><code>babel.config.js</code> all us to use ES6 features. Transpile ES6 to ES5.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueCLI"
};
</script>