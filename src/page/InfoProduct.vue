<template>
     <div class="container mt-2">
        <Products :img="product.image" :name="product.name" :description="product.description" :price="product.price"/>
    </div>
</template>

<script>
import Products from "../components/Products/Product.vue";
import api from '../services/api';

export default {
    name: "InfoProduct",
    components: {
        Products,
    },
    data() {
    return {
      product: [],
    };
  },
  mounted() {
    api.get('products/' + this.$route.params.id).then((Response) => {
      this.product = Response.data;
      console.log(Response.data)
    });
  },
}
</script>