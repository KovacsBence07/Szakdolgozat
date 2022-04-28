<template>
  <div v-if="currentProducts" class="edit-form">
    <h4>Termék</h4>
    <form>
      <div class="form-group">
        <label for="title">Termék megnevezése</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentProducts.title"
        />
      </div>
      <div class="form-group">
        <label for="img">Kép url</label>
        <input
          type="text"
          class="form-control"
          id="img"
          v-model="currentProducts.img"
        />
      </div>
      <div class="form-group">
        <label for="description">Termék leírása</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentProducts.description"
        />
      </div>
      <div class="form-group">
        <label for="price">Termék ára</label>
        <input type="text" class="form-control" id="price"
          v-model="currentProducts.price"
        />
      </div>
      <div class="form-group">
        <label><strong>Termék státusza:</strong></label>
        {{ currentProducts.published ? "Raktáron" : "A termék jelenleg nincs készleten" }}
      </div>
    </form>
    <button class="btn btn-primary mr-2"
      v-if="currentProducts.published"
      @click="updatePublished(false)">Nincs raktáron
    </button>
    <button v-else class="btn btn-primary mr-2"
      @click="updatePublished(true)"
    >
      Raktáron
    </button>
    <button class="btn btn-danger mr-2"
      @click="deleteProduct"
    >
      Törlés
    </button>
    <button type="submit" class="btn btn-success"
      @click="updateProduct"
    >
      Frissítés
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Válasszon ki egy terméket</p>
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
</style>