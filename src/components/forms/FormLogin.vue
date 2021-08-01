<template>
  
    <form id="login-form" class="form">
      <div class="mb-2">
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div class="mb-2">
        <input
          type="password"
          name="senha"
          id="password"
          class="form-control"
          placeholder="Senha"
          required
        />
      </div>

      <button
      class="btn btn-primary"
      id="button_login"
      type="submit"
      v-on:click="LoginVerification"
    >
      ENTRE EM SUA CONTA
    </button>
      
      <div class="inline"></div>
     
    </form>
</template>

<script>

export default {
  name: "FormLogin",
  components: {
  },
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
};

</script>

<style scoped>


h1, h6, a {
  color: black;
  text-align-last: center;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#email {
  position: relative;
  top: 60px;
  left: 30px;
  width: 333px;
}

#password {
  position: relative;
  top: 80px;
  left: 30px;
  width: 333px;
}

.inline {
  margin: 100px 20px;
  text-align: center;
}

#background {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #17a2b8;
}
#button_login {
  position: relative;
  top: 100px;
  left: 30px;
  width: 335px;
  border-radius: 0%;
}

h6 {
  position: relative;
  top: 40px;
}
</style>