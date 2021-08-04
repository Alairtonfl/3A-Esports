<template>
    <div>
        <SpaceLogin />
        <Logo/>  
    </div>
</template>

<script>
import SpaceLogin from '../components/forms/SpaceLogin.vue'
import Logo from '../components/logo/Logo.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    name: "Login",
    components: {
       SpaceLogin,
        Logo,   
    }
}
</script>
    