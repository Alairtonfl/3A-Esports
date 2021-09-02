<template>
<div class="card mb-3" id="product">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="img" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Nome</h5>
        <p class="card-text">Descrição: </p>
        <p class="card-text"><small class="text-muted">Preço: R$</small></p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'InfoProduct',
  props: {
    img: String,
    name: String,
    description: String,
    price: Number
  }
}
</script>

<style scoped>
  #product{
    max-width: 40%;
    left: 30%;
    top: 170px;
    height: 30%;
  }
</style>