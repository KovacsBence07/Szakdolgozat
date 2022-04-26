<template>
<div class="container">
  <div class="card-columns">
      <div class="divbody">
        <div class="columns" style="float: left">
          <div
            class="card"
            style="width: 30rem"
            v-for="product in products"
            :key="product._id"
          >
            <img :src="product.img" alt="Card image cap" style="width: 100%" />
            <h1>{{ product.title }}</h1>
            <p class="price">{{ product.price }} $</p>
            <p>Description: {{ product.description }}</p>
            <p>
              {{ product.published ? "In stock" : "Product is out of stock" }}
            </p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
      </div>
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
.popularProducts {
  float: left;
  margin-left: 85px;
}
.divbody {
  margin-left: 35px;
}
.welcomemess {
  color: pink;
  font-size: 2rem;
  text-align: center;
  padding-right: 30px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
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
</style>