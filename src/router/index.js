import Vue from "vue";
import Router from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import DataAndMethod from "@/views/1DataAndMethod.vue";

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: "/basic/dataAndMethod",
    name: "DataAndMethod",
    component: DataAndMethod
  }
];

export default new Router({
  mode: "history",
  base: __dirname,
  routes
});