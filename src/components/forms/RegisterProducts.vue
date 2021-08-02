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
        api.post('products/add', this.product).then((Response) => {
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

#price {
    position: relative;
    top: 126px;
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

#registerProduct {
    position: relative;
    top: 155px;
    left: 25px;
    width: 350px;
    height: 42px;
    border-radius: 0%;
}


</style>