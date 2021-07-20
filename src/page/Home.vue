<template>
  <div>
    <Navbar />
    <Products />
  </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'
import Products from '../components/ViewProducts/ViewProducts.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: "Home",
  components: {
    Navbar,
    Products
  }
}
</script>