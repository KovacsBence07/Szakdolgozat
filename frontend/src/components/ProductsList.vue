<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Products List</h4>
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
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct">
        <h4>Product</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentProduct.title }}
        </div>
        <div class="img">
           <img :src="currentProduct.img" alt="Card image cap" style="width: 100%" />
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentProduct.description }}
        </div>
        <div>
          <label><strong>Price:</strong></label> {{ currentProduct.price }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{
            currentProduct.published ? "In stock" : "Product is out of stock"
          }}
        </div>
        <router-link
          :to="'/products/' + currentProduct._id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Product</p>
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
.img{
    height: 400px;
}
</style>