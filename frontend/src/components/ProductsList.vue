<template>
<div class="container mt-5">
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Keresés név szerint"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Keresés
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Termék lista</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(products, index) in products"
          :key="index"
          @click="setActiveProducts(products, index)"
        >
          {{ products.title }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
        Összes törlése
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct">
        <h4>Termék</h4>
        <div>
          <label><strong>Termék neve:</strong></label> {{ currentProduct.title }}
        </div>
        <div class="img">
           <img :src="currentProduct.img" alt="Card image cap" style="width: 100%" />
        </div>
        <div>
          <label><strong>Termék leírás:</strong></label>
          {{ currentProduct.description }}
        </div>
        <div>
          <label><strong>Termék ár:</strong></label> {{ currentProduct.price }}
        </div>
        <div>
          <label><strong>Termék státusza:</strong></label>
          {{
            currentProduct.published ? "Raktáron" : "A termék jelenleg nincs raktáron"
          }}
        </div>
        <router-link
          :to="'/products/' + currentProduct._id"
          class="btn btn-warning" style="font-size:100%"
          >Szerkesztés</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Kérem válasszon ki egy terméket</p>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
export default {
  name: "products-list",
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
    setActiveProducts(products, index) {
      this.currentProduct = products;
      this.currentIndex = products ? index : -1;
    },
    removeAllProducts() {
      ProductsDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchTitle() {
      ProductsDataService.findByTitle(this.title)
        .then((response) => {
          this.products = response.data;
          this.setActiveProduct(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveProducts();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
body {
  
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4); 
}



</style>