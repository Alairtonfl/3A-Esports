<template>
  <form id="login-form" class="form" @submit.prevent="LoginVerification">
    <div class="mb-2">
      <input
        type="email"
        name="email"
        id="email"
        v-model="user.email"
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
        v-model="user.password"
        class="form-control"
        placeholder="Senha"
        required
      />
    </div>

    <button class="btn btn-primary" id="button_login" type="submit">
      ENTRE EM SUA CONTA
    </button>

    <div class="inline"></div>
  </form>
</template>

<script>
import api from "../../services/api.js";

export default {
  name: "FormLogin",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    LoginVerification() {
      if (this.user.password.length > 6) {
        api.post("users/login", this.user).then((Response) => {
          if (Response.data) {
            window.location.href = "http://localhost:8080/home"
          } else {
            alert("Usuario nao cadastrado, registre-se primeiro...");
          }
        });
      } else {
        alert("A senha precisa ter mais de 6 caracteres");
      }
    },
  },
};
</script>

<style scoped>
h1,
h6,
a {
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