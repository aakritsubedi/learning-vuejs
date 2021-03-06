import Vue from "vue";
import Router from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import DataAndMethod from "@/views/1DataAndMethod.vue";
import CreateVueProject from "@/views/0CreatingVueProject.vue";
import DataBinding from "@/views/2DataBinding.vue";
import EventsInVue from "@/views/3Events.vue";
import TwoWayDataBinding from "@/views/4TwoWayDataBindingDataBinding.vue";
import ComputedProperties from "@/views/5ComputedProperties.vue";
import DynamicCSS from "@/views/6DynamicCSS.vue";
import Conditional from "@/views/7Conditional.vue";
import BoxingGame from "@/views/8Game.vue";
import Components from "@/views/10Components.vue";
import Refs from "@/views/11Refs.vue";
import VueCLI from "@/views/12VueCLI.vue";
import NestingComponent from "@/views/13NestingComponent";
import PropTypes from "@/views/14PropTypes";
import Event_ChildToParent from "@/views/15EventChild2Parent";
import EventBus from "@/views/16EventBus";
import LifeCycleHooks from "@/views/17LifecycleHooks";
import Slots from "@/views/18Slots";
import DynamicComponent from "@/views/19DynamicComponent";
import InputBinding from "@/views/20InputBinding";
import HTTPRequest from "@/views/21HTTPRequest";
import CustomDirective from "@/views/22CustomDirective";
import Filters from "@/views/23Filters";
import CustomSearchFilter from "@/views/24CustomSearchFilter";
import Mixins from "@/views/25Mixins";

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
  },
  {
    path: "/basic/dynamicCSS",
    name: "DynamicCSS",
    component: DynamicCSS
  },
  {
    path: "/basic/conditionals",
    name: "Conditional",
    component: Conditional
  },
  {
    path: "/project/boxingGame",
    name: "BoxingGame",
    component: BoxingGame
  },
  {
    path: "/intermediate/components",
    name: "Components",
    component: Components
  },
  {
    path: "/intermediate/refs",
    name: "Refs",
    component: Refs
  },
  {
    path: "/vue-cli/intro",
    name: "VueCLI",
    component: VueCLI
  },
  {
    path: "/intermediate/nestingComponent",
    name: "NestingComponent",
    component: NestingComponent
  },
  {
    path: "/intermediate/propsType",
    name: "PropTypes",
    component: PropTypes
  },
  {
    path: "/event/childToParent",
    name: "Event_ChildToParent",
    component: Event_ChildToParent
  },
  {
    path: "/event/eventBus",
    name: "EventBus",
    component: EventBus
  },
  {
    path: "/advance/lifeCycleHooks",
    name: "LifeCycleHooks",
    component: LifeCycleHooks
  },
  {
    path: "/advance/slots",
    name: "Slots",
    component: Slots
  },
  {
    path: "/advance/dynamicComponent",
    name: "DynamicComponent",
    component: DynamicComponent
  },
  {
    path: "/advance/inputBinding",
    name: "InputBinding",
    component: InputBinding
  },
  {
    path: "/advance/httpRequest",
    name: "HTTPRequest",
    component: HTTPRequest
  },
  {
    path: "/advance/customDirective",
    name: "CustomDirective",
    component: CustomDirective
  },
  {
    path: "/advance/filters",
    name: "Filters",
    component: Filters
  },
  {
    path: "/advance/customSearchFilter",
    name: "CustomSearchFilter",
    component: CustomSearchFilter
  },
  {
    path: "/advance/mixins",
    name: "Mixins",
    component: Mixins
  }
  
];

export default new Router({
  mode: "history",
  base: __dirname,
  routes
});