<template>
  <div class="chocolate">
    <div class="cart">Cart({{ cart.length }})</div>
    <ProductDisplay :premium="premium" @add-to-cart="updateCart" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductDisplay from "@/components/ProductDisplay.vue";

export default {
  name: "Chocolate",
  components: {
    ProductDisplay
  },
  data(){
        return {
            cart:[],
            premium: true
        }
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        }
    }
};
</script>