// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import VueResource from 'vue-resource';

export const authService = { isLoggedIn: false };
Vue.filter('currency', function(value) {
  let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
  });

  return formatter.format(value);
});
export const eventBus = new Vue();
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    if(to.hash){
        return {
            selector: to.hash
        };
    }
    if(savedPosition){
      return savedPosition;
    }
    // return false;
    return {x: 0, y: 0};
  }
});
router.beforeEach((to, from, next) => { // sau khi điều hướng
  if(to.matched.some(record => record.meta.isAuthRequired)){
    if(!authService.isLoggedIn){
      alert('You must be logged in!');
      return next(false);
    }
  }
      return next();
});

// router.afterEach((to,from)=>{ // trước khi điều hướng
//   alert('You just navigated somewhere');
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
