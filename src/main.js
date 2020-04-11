import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = true

// Custom Directive-Global
Vue.directive('rainbow',{
  bind(el) {
    el.style.color = '#'+ Math.random().toString().slice(2,8);
  }
});

Vue.directive('view', {
  update(el, binding) {
    if(binding.value === 'mobile'){ 
      el.style.maxWidth = '45%';
    }
    else if(binding.value === 'desktop'){
      el.style.maxWidth = '90%';
    }
  }
});

// Filters 
Vue.filter('to-uppercase', value => {
  return value.toUpperCase();
});

Vue.filter('snippet', value => {
  return value.slice(0,100) + '....';
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
