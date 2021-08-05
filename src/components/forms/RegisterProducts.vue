<template>
   <fieldset>
       <div id="CreateAccountAdm">
           <form @submit.prevent="cadProduct">
               <div class="form-group" >
                   <input id="img" type="text" class="form-control" placeholder="Imagem" v-model="product.image" required>
               </div>
               <div class="form-group">
                   <input id="name" type="text" class="form-control" placeholder="Nome" v-model="product.name" required>
               </div>
               <div class="form-group">
                   <input id="price" type="number" class="form-control" placeholder="Preço" v-model="product.price" required>
               </div>
               <div class="form-group">
                   <input id="category" type="text" class="form-control" placeholder="Categoria" v-model="product.category" required>
               </div>
               <div class="form-group">
                   <input id="description" type="text" class="form-control" placeholder="Descrição" v-model="product.description" required>
               </div>
               <div class="form-group">
                    <button id="registerProduct" class="btn btn-success" type="submit">CADASTRAR PRODUTOS</button>
                </div>
           </form> 
        </div>
   </fieldset>
</template>

<script>
import api from "../../services/api.js"
export default {
    name: "RegisterProducts",

    data() {
      return{
        product: {
          image: '',
          name: '',
          category: '',
          description: '',
          price: ''
        }
      }
    },

    methods: {
      cadProduct(){
        api.post('products', this.product).then((Response) => {
          if(Response) {
            alert('Produto cadastrado com sucesso...')
          } else {
            alert('Ocorreu um erro')
          }
        })
      }
    }
}
</script>

<style scoped>
fieldset{
    background-color: white;
    width: 400px;
    height: 450px;
    position: relative;
    left: 40%;
    top: 230px;
 
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
    top: 90px;
}

#name {
    position: relative;
    top: 102px;
}

#price {
    position: relative;
    top: 106px;
}

#category {
    position: relative;
    top: 113px;
}

#description {
    position: relative;
    top: 123px;
    height: 90px;
}

#registerProduct {
    position: relative;
    top: 130px;
    left: 25px;
    width: 350px;
    height: 42px;
    border-radius: 0%;
}


</style>