<template>
  <div>
    <RegisterProducts />
    <Logo />
  </div>
</template>

<script>
import RegisterProducts from '../components/forms/RegisterProducts.vue'
import Logo from '../components/logo/Logo.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    name: "Register", 
    components: {
        RegisterProducts,
        Logo
    }
}
</script>