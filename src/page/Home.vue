<template>
  <div>
    <Navbar />
    <div class="container mt-2">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="(product, index) in products" :key="index">
          <Products
            :img="product.image"
            :name="product.name"
            :price="product.price"
            :description="product.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar/Navbar.vue";
import Products from "../components/Products/Product.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../services/api.js";

export default {
  name: "Home",
  components: {
    Navbar,
    Products,
  },
  data() {
    return {
      products: [],
      user: []
    };
  },
  mounted() {
    if (!localStorage.getItem("User")) {
      this.$router.push({
        path: '/login'
      })
    }
    this.user = JSON.parse(localStorage.getItem("User"));
    api.get("/products").then((Response) => {
      this.products = Response.data;
    });
  },
};
</script>