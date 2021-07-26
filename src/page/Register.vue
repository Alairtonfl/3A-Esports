<template>
  <div>
    <FormRegister />
    <Logo />
  </div>
</template>

<script>
import FormRegister from '../components/forms/FormRegister.vue'
import Logo from '../components/logo/Logo.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    name: "Register", 
    components: {
        FormRegister,
        Logo
    }
}
</script>