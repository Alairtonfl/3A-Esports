<template>
  <div class="col" id="product">
    <div class="card">
      <img :src="img" class="card-img-top mx-auto d-block" id="image">
      <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <strong><span>{{price}} R$</span></strong>
        <p class="card-text">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    img: String,
    name: String,
    description: String,
    price: Number
  }

}
</script>

<style scoped>
  #image{
    width: 300px;
    height: 300px;
  }
</style>