import Vue from "vue";
import Router from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import DataAndMethod from "@/views/1DataAndMethod.vue";
import CreateVueProject from "@/views/0CreatingVueProject.vue";

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: "/basic/creatingVueProject",
    name: "CreateVueProject",
    component: CreateVueProject
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