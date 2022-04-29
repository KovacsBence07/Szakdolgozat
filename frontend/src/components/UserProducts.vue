<template>
<div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
<div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4" id="carddesign">
    <div class="col" v-for="product in products"
            :key="product._id">
      <div class="card">
            <img :src="product.img" alt="Card image cap"/>
            <h1>{{ product.title }}</h1>
            <p class="price">{{ product.price }} Ft</p>
            <p>{{ product.description }}</p>
            <p>
              {{ product.published ? "Raktáron" : "A termék jelenleg nincs raktáron!" }}
            </p>
            <p><button>Hozzáadás kosárhoz</button></p>
          </div>
    </div>
  </div>
</div>

  <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Szolgáltatásaink</h3>
                        <ul>
                            <li><a> <router-link to="/home">Főoldal</router-link></a></li>
                            <li><a> <router-link to="/UserProducts">Termékeink</router-link></a></li>
                            <li><a> <router-link to="/About">Rólunk</router-link></a></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-6 item text">
                        <h3>Electric shop</h3>
                        <p>A webáruházunkban sokféle periféria található meg, mintpéldául egér, monitor és billentyűzetek. Kizárólag olyan termékeket forgalmazunk amelyek a profi esportolóknak és vérbeli gamereknek készültek.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Kovács Bence Dominik és Szabó Tamás Martin Szakdolgozata © 2022</p>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
export default {
  name: "products",
  data() {
    return {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveProducts() {
      ProductsDataService.getAll()
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    },
  },
  mounted() {
    this.retrieveProducts();
  },
};
</script>

<style>

body {
  
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4); 
}
.col{
  padding-bottom: 25px;
  padding-top: 25px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: arial;
  
}
.card img{
   max-height: 450px;
    max-width: 350px;
    height: 250px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #04aa6d;
  text-align: center;
  cursor: pointer;
  width: 60%;
  font-size: 18px;
  border: black 1px solid;
  border-radius: 30px;
}

.card button:hover {
  opacity: 0.7;
}
.footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:8px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}

</style>