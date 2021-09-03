<template>
  <div>

<div class="container container-fluid border">
    <div class="container container-fluid border mt-4 mb-4 text-center">
      <h1>Listagem de Produtos</h1>
    </div>
    <div class="container container-fluid mt-4 mb-4 text-center">
      <a :href="'/admin/register'"><button
        type="button"
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#createFunc"
      >
        Add Produto
      </button></a>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Produto</th>
          <th scope="col">Categoria</th>
          <th scope="col">Preço</th>
          <th scope="col">Açoes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <th>{{ product.name }}</th>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="btn btn-danger btn-sm" v-on:click="delProduct(product.id)">
              DEL
            </button>
            <a >
              <button class="btn btn-primary btn-sm">EDIT</button>
            </a>
            <a :href="'/info/' + product.id">
              <button class="btn btn-success btn-sm">VER</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import api from "../../services/api";
export default {
  name: "DashboardTable",
  data() {
    return {
      user: [],
      products: []
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("User"));
    if (!localStorage.getItem("User") || !this.user.admin) {
      this.$router.push({
        path: '/'
      })
    }
    api.get("/products").then((Response) => {
      this.products = Response.data;
      console.log(this.products)
    });
  },
  methods:{
    delProduct(id) {
      api.delete("/products/" + id).then((Response) => {
        this.$router.go();
        console.log(Response);
      });
    },
  }
};
</script>

<style>
.header {
  background: #0988d1;
  box-shadow: none;
  color: #fff;
}
.navbar-wrapper-right {
  align-items: stretch;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}

.ajusts-btn-enter {
  margin-right: 5px;
}

.ajusts {
  margin-right: 20px;
}
.ajust {
  padding: 0.5%;
}
#form-image-nav {
  margin-left: 10%;
  width: 30%;
}

table {
  position: relative;
  top: 40px;
  background: rgba(255, 255, 255, 0.685);
}

#btn{
 margin-left: 500px;
 background: white;
}
button{
  border-radius: 0;
}

#alinha{
  text-align: center;
  margin-top: 150px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>