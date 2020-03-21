import Vue from "vue";
import Router from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import DataAndMethod from "@/views/1DataAndMethod.vue";
import CreateVueProject from "@/views/0CreatingVueProject.vue";
import DataBinding from "@/views/2DataBinding.vue";
import EventsInVue from "@/views/3Events.vue";
import TwoWayDataBinding from "@/views/4TwoWayDataBindingDataBinding.vue";
import ComputedProperties from "@/views/5ComputedProperties.vue";

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
  },
  {
    path: "/basic/dataBinding",
    name: "DataBinding",
    component: DataBinding
  },
  {
    path: "/basic/eventsInVue",
    name: "EventsInVue",
    component: EventsInVue
  },
  {
    path: "/basic/twoWayDataBinding",
    name: "TwoWayDataBinding",
    component: TwoWayDataBinding
  },
  {
    path: "/basic/computedProperties",
    name: "ComputedProperties",
    component: ComputedProperties
  }
];

export default new Router({
  mode: "history",
  base: __dirname,
  routes
});