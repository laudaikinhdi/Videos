<template>
    <div>
      <button class="btn btn-primary" @click="goBack()">&laquo; Back</button>
        <h1>{{product.name}}</h1>
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p>
          <strong>Price: </strong>{{ product.price - discount | currency}}
          <span v-if="discount > 0">(save {{discount | currency}})</span>
        </p>
        <!-- <p>
            <strong>Price:</strong> {{ (product.price - discount) | currency }}
            <span v-if="discount > 0">(save {{ discount | currency }})</span>
        </p> -->
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>
        <!-- <div v-if="relatedProducts != null">
          <h2>Related Product</h2>
          <ul>
            <li v-for="(related, index) in relatedProducts" :key="'related' + index">
              <router-link :to="{name:'viewProduct', params:{productId: related.id}}">
                {{related.name}}
              </router-link>
            </li>
          </ul>
        </div> -->
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
                discount: 0
            };
        },
        created() {
          this.$watch('$route.query.discount',(newValue,oldValue) =>{
            this.discount = this.getDiscount(this.product.price, newValue);
          });
          // let productId = this.$route.params.productId;
          this.product = this.getProduct(this.productId);
          if(typeof this.$route.query.discount != 'undefined'){
            this.discount = this.getDiscount(this.product.price, this.$route.query.discount);
          }
          console.log(this.discount);
          // this.getProduct(this.productId)
          //     .then(
          //       product => this.product = product
          //     );
        },
        beforeRouteUpdate(to, from, next){
          console.log(1121);
          this.product = this.getProduct(this.product.price, to.query.discount);
          this.product = this.getProduct(to.params.productId);
          next();
          // this.getProduct(to.params.productId)
          //     .then(
          //       product => this.product = product
          //     );
          //     next();
        },
        watch:{
          productId(newValue, oldValue){
            this.product = this.getProduct(newValue);
            this.discount = this.getDiscount(this.product.price, this.$route.query.discount);
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
            // getProduct(productId){
            //   return this.$http.get('http://localhost:8080/products/{productId}',{
            //     params:{
            //       productId: productId
            //     }
            //   }).then(
            //     response => response.json(),
            //     response => alert('Could not retrieve product')
            //   );
            // },
            goBack(){
              // this.$router.push('/'); // redirect /
              this.$router.history.go(-1);
            },
            getDiscount(originalPrice, percentage){
              if(!percentage){
                return 0;
              }
              return ((originalPrice * percentage) / 100);
            }
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
