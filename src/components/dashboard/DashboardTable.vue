<template>
  <div>
    <header class="header">
      <nav class="navbar navbar-expand">
        <div>
          <a href="http://localhost:8080/home"
            ><img src="/static/3AESports2-Semfundo.png" id="form-image-nav"
          /></a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
      </nav>
    </header>

    <div id="btn" class="btn-group" role="group" aria-label="Exemplo básico">
      <button class="btn btn-danger btn-sm">Deletar Produtos</button>
      <button class="btn btn-primary btn-sm">Editar Produtos</button>
      <button class="btn btn-success btn-sm">Ver Produtos</button>
    </div>

    <h1 id="alinha">DASHBOARD DE PRODUTOS</h1>

    <table
      class="table table-bordered table-hover"
    >
      <thead>
        <tr>
          <th scope="col">Produtos</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DashboardTable",
  data() {
    return {
      user: []
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("User"));
    if (!localStorage.getItem("User") || !this.user.admin) {
      this.$router.push({
        path: '/'
      })
    }
  },
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