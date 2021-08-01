<template>
        <fieldset>
            <div id="createAccount">
               <div id="login-row" class="row justify-content-center align-items-center">
                   <form @submit.prevent="register">
                        <div class="form-group">
                            <input id="name" type="text" class="form-control" placeholder="Nome" required>
                        </div>
                        <div class="form-group">
                            <input id="cpf" type="int" class="form-control" placeholder="CPF" required>
                         </div>
                        <div class="form-group">
                            <input id="email" type="email" class="form-control" placeholder="E-mail" required>
                         </div>
                        <div class="form-group">
                            <input id="password" type="password" class="form-control" placeholder="Senha" required>
                        </div>
                        <div class="form-group">
                            <button id="registerBtn" class="btn btn-success" type="submit" v-on:click.prevent="Verification">ABRIR MINHA CONTA</button>
                        </div>
                   </form>
               </div>  
            </div>
        </fieldset>
    
</template>

<script>
export default {
    name: "FormRegister",
    methods: {
       Verification() {
            let cpf = document.getElementById("cpf").value;
            let password = document.getElementById("password").value;
         
            if(password.length < 6){
                alert("A senha precisa pelo menos seis digitos")
            }
            if(cpf.length != 11){
                alert("CPF inválido")
            }
       }
    }
}
</script>

<style scoped>
fieldset{
    background-color: white;
    width: 400px;
    height: 380px;
    position: relative;
    left: 500px;
    top: 180px;
 
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
    border-radius: 0%;
}

</style>