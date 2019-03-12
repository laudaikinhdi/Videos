
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueResource from "vue-resource"
import store from './vuex/store';
import App from './components/App';
import io from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueResource);
Vue.use(new VueSocketio({
    debug: true,
    connection: 'http://localhost:6001',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
    })
);

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('vue-socket', require('./components/Vue-socket'));
// Vue.component('app-articles', require('./components/Articles.vue'));
import Articles from './components/Articles.vue';
import Navbar from './components/Navbar.vue';
import VueSocket from './components/Vue-socket';
const app = new Vue({
    el: '#app',
    components:{
        appArticles: Articles,
        navbar: Navbar,
        App,
        VueSocket
    },
    store,
});


// import Vue from 'vue';



// new Vue({
// 	store,
// 	el: 'body',
// 	components: { App }
// }).$mount()
