<template>
  <div class="formstyle">
    <FormLogin />
    <RegisterLink />
  </div>
</template>

<script>
import FormLogin from "./FormLogin.vue";
import RegisterLink from "./RegisterLink.vue";
export default {
  name: "Spacelogin",
  components: {
    FormLogin,
    RegisterLink,
  },
};
</script>

<style scoped>
.formstyle {
  box-shadow: 0 0 1em black;
  position: relative;
  left: 40%;
  top: 190px;
  height: 350px;
  width: 400px;
  background-color: #fff;
  max-width: 500px;
}
</style>