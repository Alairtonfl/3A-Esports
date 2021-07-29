<template>
    <div>
        <FormLogin />
        <Logo/>  
        
    </div>
</template>

<script>
import FormLogin from '../components/forms/FormLogin.vue'
import Logo from '../components/logo/Logo.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    name: "Login",
    components: {
        FormLogin,
        Logo,   
    }
}
</script>
    