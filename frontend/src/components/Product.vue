<template>
  <div v-if="currentProducts" class="edit-form">
    <h4>Product</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentProducts.title"
        />
      </div>
      <div class="form-group">
        <label for="img">Image url</label>
        <input
          type="text"
          class="form-control"
          id="img"
          v-model="currentProducts.img"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentProducts.description"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price"
          v-model="currentProducts.price"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProducts.published ? "In stock" : "Product is out of stock" }}
      </div>
    </form>
    <button class="badge badge-primary mr-2"
      v-if="currentProducts.published"
      @click="updatePublished(false)"
    >
      OutOfStock
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      InStock
    </button>
    <button class="badge badge-danger mr-2"
      @click="deleteProduct"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateProduct"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Product...</p>
  </div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
export default {
  name: "product",
  data() {
    return {
      currentProducts: null,
      message: "",
    };
  },
  methods: {
    getProduct(id) {
      ProductsDataService.get(id)
        .then((response) => {
          this.currentProducts = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePublished(status){
      var data = {
        id: this.currentProducts._id,
        title: this.currentProducts.title,
        description: this.currentProducts.description,
        price: this.currentProducts.price,
        img: this.currentProducts.img,
        published: status,
      };
      ProductsDataService.update(this.currentProducts._id,data)
        .then(response => {
          console.log(response.data);
          this.currentProducts.published = status;
          this.message = "The status is updated successfully!";
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateProduct() {
      ProductsDataService.update(this.currentProducts._id, this.currentProducts)
        .then((response) => {
          console.log(response.data);
          this.message = "The product was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteProduct() {
      ProductsDataService.delete(this.currentProducts._id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
button{
    border: 2px solid black;
    font: 300 15px;
    line-height: 16px;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 22px;
    text-decoration: none;
    -moz-transition: 0.2s all;
    -o-transition: 0.2s all;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
}
</style>