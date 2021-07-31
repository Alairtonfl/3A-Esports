<template>
  <div>
    <Navbar />
    <div class="container mt-2">
    <div class="row row-cols-1 row-cols-md-3 g-4"> 
      <Products 
      img="https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.6435-9/140935207_1754460868067464_2126379933350370926_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=v5MKwgUb-EEAX9IszBf&_nc_ht=scontent.fjdo1-2.fna&oh=6e84efd4ad9db9a8ab3380745274f57c&oe=61296C71"
      name="Ageu lixoso"
      price="0"
      description="Apenas um sao paulino de merda"
      />
      <Products 
      img="https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.6435-9/122599629_854805818589983_4231072655595013679_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=y0h2eE4nffMAX_9mOpi&tn=kwvumh6YsJVFLPGR&_nc_ht=scontent.fjdo1-2.fna&oh=acb19ea2d927c89fc4cadf2d18b0d404&oe=6129B7E5" 
      name="Edicleiton RASTA"
      price="-10"
      description="O CARA QUE SO FODE OS COMMITS DO AGEU"
      />
      <Products 
      img="https://lh3.googleusercontent.com/-IbdaIXCsItw/Vt3iFAQRvSI/AAAAAAAA6H8/fOi5tZT2omo/foto-perfil-facebook-programar-reasonwhy.es__thumb%25255B9%25255D.png?imgmax=800"
      name="Ultimo integrante do time"
      price="-1"
      description="PROCURASE"
      />
      <Products 
      img="https://lh3.googleusercontent.com/-IbdaIXCsItw/Vt3iFAQRvSI/AAAAAAAA6H8/fOi5tZT2omo/foto-perfil-facebook-programar-reasonwhy.es__thumb%25255B9%25255D.png?imgmax=800"
      name="Ultimo integrante do time"
      price="-1"
      description="PROCURASE"
      />
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'
import Products from '../components/Product/Product.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: "Home",
  components: {
    Navbar,
    Products
  }
}
</script>