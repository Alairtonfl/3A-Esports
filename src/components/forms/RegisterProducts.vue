<template>
   <fieldset>
       <div id="CreateAccountAdm">
           <form>
               <div class="form-group">
                   <input id="img" type="text" class="form-control" placeholder="Imagem" required>
               </div>
               <div class="form-group">
                   <input id="name" type="text" class="form-control" placeholder="Nome" required>
               </div>
               <div class="form-group">
                   <input id="category" type="text" class="form-control" placeholder="Categoria" required>
               </div>
               <div class="form-group">
                   <input id="description" type="text" class="form-control" placeholder="Descrição" required>
               </div>
               <div class="form-group">
                    <button id="registerP" class="btn btn-success" type="submit">CADASTRAR PRODUTOS</button>
                </div>
           </form> 
        </div>
   </fieldset>
</template>

<script>
export default {
    name: "RegisterProducts"
}
</script>

<style scoped>
fieldset{
    background-color: white;
    width: 400px;
    height: 440px;
    position: relative;
    left: 500px;
    top: 200px;
 
}
input{
    position: relative;
    width: 350px;
    height: 42px;
    top: 100px;
    left: 25px;
}

#img {
    position: relative;
    top: 110px;
}

#name {
    position: relative;
    top: 122px;
}

#category {
    position: relative;
    top: 133px;
}

#description {
    position: relative;
    top: 143px;
    height: 90px;
}

#registerP {
    position: relative;
    top: 155px;
    left: 25px;
    width: 350px;
    height: 42px;
    border-radius: 0%;
}


</style>