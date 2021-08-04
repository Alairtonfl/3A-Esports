<template>
        <fieldset>
            <div id="createAccount">
               <div id="login-row" class="row justify-content-center align-items-center">
                   <form @submit.prevent="register">
                        <div class="form-group">
                            <input id="name" type="text" class="form-control" placeholder="Nome" v-model="user.name" required>
                        </div>
                        <div class="form-group">
                            <input id="cpf" type="int" class="form-control" placeholder="CPF" v-model="user.cpf" required>
                         </div>
                        <div class="form-group">
                            <input id="email" type="email" class="form-control" placeholder="E-mail" v-model="user.email" required>
                         </div>
                        <div class="form-group">
                            <input id="password" type="password" class="form-control" placeholder="Senha" v-model="user.password" required>
                        </div>
                        <div class="form-group">
                            <button id="registerBtn" class="btn btn-success" type="submit">ABRIR MINHA CONTA</button>
                        </div>
                   </form>
               </div>  
            </div>
        </fieldset>
    
</template>

<script>
import api from "../../services/api.js";
export default {
    name: "FormRegister",
    data(){
      return {
        user: {
          name: '',
          email: '',
          cpf: '',
          password: ''
        }
      }
    },
    methods: {
       register() {
            if(this.user.password.length < 6){
                alert("A senha precisa pelo menos seis digitos")
            }
            if(this.user.cpf.length != 11){
                alert("CPF inválido")
            }

            if(this.user.password.length > 6 && this.user.cpf.length == 11){
              api.post('users/register', this.user).then((Response) => {
                if(Response.data){
                  alert('Usuario cadastrado com sucesso, redirecionando para a tela inicial')
                  window.location.href = "http://localhost:8080/home"
                } else {
                  alert('Ocorreu algum erro')
                }
              })
            }
       }
    }
}
</script>

<style scoped>
fieldset{
    box-shadow: 0 0 1em black;
    background-color: white;
    width: 400px;
    height: 400px;
    position: relative;
    left: 40%;
    top: 190px;
 
}
input{
    position: relative;
    width: 350px;
    height: 42px;
    top: 100px;
    left: 25px;
}

#name {
    position: relative;
    top: 70px;
}
#cpf {
    position: relative;
    top: 87px;
}

#email {
    position: relative;
    top: 100px;
}

#password {
    position: relative;
    top: 113px;
}

#registerBtn {
    position: relative;
    top: 140px;
    left: 25px;
    width: 350px;
    height: 42px;
}

</style>