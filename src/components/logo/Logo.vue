<template>
    <div id="container">
        <a href="http://localhost:8080/home"><img src="/static/3AESports2.png" id="form-image"></a>
    </div> 
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style scoped>
#container{
    position: relative;
    left: 40%;
    bottom: 250px;
    height: 90px;
    width: 400px;
}

h1{
    font-family: 'Anton', sans-serif;
    color: white;
    font-weight: bolder;
    text-align: center;
    position: relative;
    top: 25px;
}

#form-image{
    width: 100%;
    height: 100%;
}

</style>