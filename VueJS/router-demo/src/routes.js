import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue';
import ProductReviews from './ProductReviews.vue';
import Product from './Product.vue';
import SpecialOffer from './SpecialOffer.vue';
import VueProfile from './ViewProfile.vue';
import {authService} from './main';

export const routes = [
  {
    path: '',
    components:{
      default: ProductList,
      discount: SpecialOffer
    }
  },
  {
    // path: '/products/:productId/view', redirect: '/products/:productId'
    path: '/products/:productId/view', redirect: {name: 'viewProduct'}
  },
  {
    path: '/cart',
    alias: '/shopping-cart',
    component: Cart
  },
  {
    path: '/products/:productId',
    component: Product,
    name: 'product',
    props: true,
    children:[
      {
        path: 'details',
        name: 'viewProduct',
        props: true,
        component: ViewProduct
      },
      {
        path: 'reviews',
        name: 'productReviews',
        props: true,
        component: ProductReviews
      },
    ]
  },
  {
    path: '/user/profile',
    component: VueProfile,
    name:'viewProfile',
    meta:{
      isAuthRequired: true
    }
    // beforeEnter: (to, from, next) => {
    //   if(!authService.isLoggedIn){
    //     alert('You must be logged in!');
    //     return next(false);
    //   }
    //   return next();
    // }
  },
  {
    path: '*',
    component: {
      template: "<h1>404 page not found</h1>"
    }
  }
];
