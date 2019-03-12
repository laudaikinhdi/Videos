import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import { ADD_PRODUCT_TO_CART, CHECKOUT, INCREASE_PRODUCT_QUANTITY,UPDATE_COUPON_CODE } from './mutations-type';


Vue.filter('currency', function(value) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    
    return formatter.format(value);
});

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);

const store = new Vuex.Store({
    state:{ // chứa object dữ liệu
        cart:{
            items:[]
        },
        couponCode: ''
    },
    getters:{ // bộ lọc cho phép truy cập và sàng lọc dữ liệu
        cartTotal: (state)=>{
            let total = 0;
            console.log('cartTotal',state.cart);
            state.cart.items.forEach((item)=>{
                total += item.product.price * item.quantity;
            });
            return total;
        },
        // taxAmount:(state, getters)=>{cách 1 
        //     // return function(percentage){ 
        //     //     return ((getters.cartTotal * percentage) / 100);
        //     // }
        taxAmount:(state, getters)=>(percentage)=>{ //cách 2
            console.log('taxAmount');
            return ((getters.cartTotal * percentage) / 100);
        },
        //     // return ((getters.cartTotal * 10) / 100);
        // }
        // taxAmount:(state, getters)=>{
        //     return function(percentage){
        //         return ((getters.cartTotal * percentage) / 100);
        //     }
        //     // return ((getters.cartTotal * 10) / 100);
        // }
        // getCartItem: (state) => (product) => {
        //     console.log(this.cart.items);
        //     for (let i = 0; i < state.cart.items.length; i++) {
        //         if (state.cart.items[i].product.id === product.id) {
        //             return state.cart.items[i];
        //         }
        //     }
            
        //     return null;
        // },
        getCratItem:(state, getters) => (product) =>{
            console.log('getCartItem');
            // let cartItem = state.getCartItem(payload.product);
            for (let i = 0; i < state.cart.items.length; i++) {
                if (state.cart.items[i].product.id === product.id) {
                    return state.cart.items[i];
                }
            }
            return null
        }
    },
    mutations:{ // nơi chúng ta thực hiện các thay đổi state
        [CHECKOUT] (state){
            if(confirm('Are you sure that you want to purchase these awesome products?')){
                state.cart.items.forEach(function(item){
                    item.product.inStock += item.quantity;
                });
                state.cart.items = [];
            }
        },
        [ADD_PRODUCT_TO_CART] (state, payload) { 
            console.log('111',payload);     
            // TODO: Verify that there is "quantity" of the product in stock before adding it.
            
            // if (payload.cartItem != null) {
            //     payload.cartItem.quantity += payload.quantity;
            // } else {
            // state.cart.items.push({
            //     product: payload.product,
            //     quantity: payload.quantity
            // });
            // }
            payload.product.inStock -= payload.quantity;
            // payload.product.inStock -= payload.quantity;
            // this.cartTotal += product.price * quantity;
        },
        [INCREASE_PRODUCT_QUANTITY] (state, payload){
            console.log('555',payload); 
            payload.cartItem.quantity += payload.quantity;
            payload.product.inStock -= payload.quantity;
        },
        [UPDATE_COUPON_CODE] (state, payload){
            console.log('couponcode');
            state.couponCode = payload;
        }
    },
    //dispatch call actions
    // commit call muatations
    actions:{
                                // context //
        [ADD_PRODUCT_TO_CART] ({ commit, getters }, payload){
            console.log('222',payload); 
            return new Promise((resolve, reject)=>{
                let cartItem = getters.getCratItem(payload.product);
                payload.cartItem = cartItem;
                if(payload.cartItem == null){
                    console.log('333',payload); 
                    let requestUrl = 'http://localhost:3000/cart/add/{productId}/{quantity}';
                    Vue.http.post(requestUrl,{},{
                        params:{
                            productId: payload.product.id,
                            quantity: payload.quantity
                        }
                    }).then(
                            // response => context.commit(ADD_PRODUCT_TO_CART, payload),
                            // response => commit(ADD_PRODUCT_TO_CART, payload),
                            response =>{
                                commit(ADD_PRODUCT_TO_CART, payload),
                                console.log('commit ADD_PRODUCT_TO_CART',payload)
                                resolve();
                            },
                            response => {
                                alert('Could not add product to cart');
                                reject();
                            }
                        );
                }else{
                    console.log('444',payload); 
                    let requestUrl = 'http://localhost:3000/cart/increase-quantity/{productId}';
                    Vue.http.post(requestUrl,{},{
                        params:{
                            productId: payload.product.id,
                        }
                    }).then(
                            // response => context.commit(ADD_PRODUCT_TO_CART, payload),
                            // response => commit(INCREASE_PRODUCT_QUANTITY, payload),
                            // response => alert('Could not increase product quantity')
                            response =>{
                                commit(INCREASE_PRODUCT_QUANTITY, payload),
                                console.log('commit INCREASE_PRODUCT_QUANTITY',payload)
                                resolve();
                            },
                            response => {
                                alert('Could not increase product quantity')
                                reject();
                            }
                        );
                }
            })
        },
    }
});

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            };
        }
        
        if (savedPosition) {
            return savedPosition;
        }
        
        return { x: 0, y: 0 };
    }
});

Vue.http.options.root = 'http://localhost:3000';

new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
    store: store
});