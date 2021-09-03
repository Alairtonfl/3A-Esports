<template>
  <header class="header">
    <nav
      class="
        navbar navbar-expand 
      "
    >
    <div>
      <a href="http://localhost:8080/home"><img src="/static/3AESports2-Semfundo.png" id="form-image-nav"></a>
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
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
        <div class="navbar-wrapper-right">
          <a class="nav-link btn btn-outline-info text-white ajusts-btn-enter" ><button v-on:click="logout()">Sair</button></a>
        </div>
      </div>
    </nav>
  </header>
</template>
 
<script>
export default {
  name: "Navbar",
  methods:{
    logout(){
      localStorage.clear();
    }
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

.ajusts-btn-enter{
  margin-right: 5px;
}

.ajusts{
  margin-right: 20px;
}
.ajust {
  padding: 0.5%;
}
#form-image-nav{
    margin-left: 10%;
    width: 30%;
}
</style>