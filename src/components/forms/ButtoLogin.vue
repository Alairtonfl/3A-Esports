<template>
  <div class="form-group">
    <button
      class="btn btn-primary"
      id="button_login"
      type="submit"
      v-on:click="LoginVerification"
    >
      ENTRE EM SUA CONTA
    </button>
  </div>
</template>

<script>

export default {
  name: "ButtonLogin",
  methods: {
    LoginVerification() {
      let password = document.getElementById("password").value;
      if (password.length > 6) {
        return true;
      } else {
        alert("A senha precisa ter pelo menos seis caracteres");
      }
    }
  }
}
</script>

<style scoped>
  #button_login {
  position: relative;
  top: 100px;
  left: 30px;
  width: 335px;
  border-radius: 0%;
}
</style>