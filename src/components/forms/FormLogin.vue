<template>
  <form id="login-form" class="form" @submit.prevent="LoginVerification">
    <div class="input-group mb-3" id="input-Email">
      <span class="input-group-text" id="basic-addon1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
      </span>
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

    <div class="input-group mb-3" id="input-Password">
      <span class="input-group-text" id="basic-addon1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-lock-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
          />
        </svg>
      </span>
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
      Entrar
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
            window.location.href = "http://localhost:8080/home";
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

#input-Email {
  position: relative;
  top: 70px;
  left: 30px;
  width: 333px;
}

#input-Password {
  position: relative;
  top: 75px;
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h6 {
  position: relative;
  top: 40px;
}
</style>