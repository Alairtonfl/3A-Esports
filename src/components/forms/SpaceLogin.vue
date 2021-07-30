<template>
    <div class="formstyle">
        <FormLogin/>
        <RegisterLink/>
    </div>
</template>

<script>
import FormLogin from './FormLogin.vue'
import RegisterLink from './RegisterLink.vue'
export default {
    name: "Spacelogin",
    components: {
        FormLogin,
        RegisterLink
    }
}
</script>

<style scoped>
.formstyle {
  position: relative;
  left: 500px;
  top: 190px;
  height: 350px;
  width: 400px;
  background-color: #fff;
  max-width: 500px;
}


</style>