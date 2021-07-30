<template>
<div>
    <div class="form-group">
        <div class="text-center">
          <h6>
            Não possui conta?
            <a href="http://localhost:8080/register"> Cadastre-se</a>
          </h6>
    </div>
</div>
</div>
 
</template>

<script>
export default {
    name: "RegisterLink"
}
</script>

<style scoped>
h6 {
  position: relative;
  top: 35px;
}
h1, h6, a {
  color: black;
  text-align-last: center;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>