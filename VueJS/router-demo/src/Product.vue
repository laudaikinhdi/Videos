<template>
    <div>
      <button class="btn btn-primary" @click="goBack()">&laquo; Back</button>
        <h1>{{product.name}}</h1>
        <ul class="nav nav-pills">
          <router-link
            class="presentation"
            :to="{name: 'viewProduct', params: {productId: product.id}}"
            tag="li"
            active-class="active"
          ><a>Details</a></router-link>
          <router-link
            class="presentation"
            :to="{name: 'productReviews', params: {productId: product.id}}"
            tag="li"
            active-class="active"
          ><a>Reviews</a></router-link>
        </ul>
        <br>
        <router-view></router-view>

        <div v-if="relatedProducts != null" id="related" style="margin: 500px 0 500px 0;">
          <h2>Related Product</h2>
          <ul>
            <li v-for="(related, index) in relatedProducts" :key="'related' + index">
              <router-link :to="{name:'viewProduct', params:{productId: related.id}}">
                {{related.name}}
              </router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
    import { products } from './data/products';

    export default {
      props:{
        productId:{
          required: true
        }
      },
        data() {
            return {
                products: products,
                product: null,
            };
        },
        created() {
          // let productId = this.$route.params.productId;
          this.product = this.getProduct(this.productId);
        },
        watch:{
          productId(newValue, oldVlue){
            this.product = this.getProduct(newValue);
          }
        },
        methods: {
            getProduct(productId) {
                let match = null;

                this.products.forEach(function(product) {
                    if (product.id == productId) {
                        match = product;
                    }
                });

                return match;
            },
        },
        computed:{
          relatedProducts(){
            if(this.product == null){
              return [];
            }else{
              let related = [];
              let count = 0;
              this.products.forEach((product) => {
                if(product.id !== this.product.id && count < 5){
                  related.push(product);
                  count++;
                }
              });
              return related;
            }
          }
        }
    }
</script>
