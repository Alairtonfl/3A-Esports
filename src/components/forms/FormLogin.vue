<template>
  <div class="formstyle">
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

      <ButtonLogin/>
      
      <div class="inline"></div>
      <div class="form-group">
        <div class="text-center">
          <h6>
            Não possui conta?
            <a href="http://localhost:8080/register"> Cadastre-se</a>
          </h6>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonLogin from '../forms/ButtoLogin.vue'
export default {
  name: "FormLogin",
  components: {
    ButtonLogin
  }
};

</script>

<style scoped>

h1, h6, a {
  color: black;
  text-align-last: center;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.formstyle {
  position: relative;
  left: 500px;
  top: 190px;
  padding: 2rem;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 350px;
  width: 400px;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 500px;
}

#email {
  position: relative;
  top: 20px;
  width: 333px;
}

#password {
  position: relative;
  top: 40px;
  width: 333px;
}
#iconUser {
  position: relative;
  bottom: 35px;
  right: 7px;
  display: inline;

  height: 25px;
}

#iconPass {
  position: relative;
  bottom: 35px;
  right: 7px;
  height: 28px;
}

.inline {
  align-items: center;
  border-bottom: 1px solid #889c93;
  display: flex;
  margin: 30px 20px;
  text-align: center;
}

#background {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #17a2b8;
}

h6 {
  position: relative;
  top: 40px;
}
</style>