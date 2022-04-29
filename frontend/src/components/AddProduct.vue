<template>
  <div>
    <h1 class="addProdtitle">Termék hozzáadása</h1>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Termék neve</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="products.title"
            name="title"
          />
        </div>
        <div class="form-group">
          <label for="title">Kép url</label>
          <input
            type="text"
            class="form-control"
            id="img"
            required
            v-model="products.img"
            name="img"
          />
        </div>
        <div class="form-group">
          <label for="description">Termék leírás</label>
          <input
            type="text"
            class="form-control"
            id="description"
            required
            v-model="products.description"
            name="description"
          />
        </div>
        <div class="form-group">
          <label for="price">Termék ára</label>
          <input
            type="number"
            name="price"
            id="price"
            class="form-control"
            required
            v-model="products.price"
          />
        </div>
        <div class="d-flex justify-content-center">
          <button @click="saveProduct" class="btn btn-success" id="submitbtn">
            Hozzáadás
          </button>
        </div>
      </div>
      <div v-else>
        <h4>A termék sikeresen felkerült a weboldalra!</h4>
        <button class="btn btn-success" @click="newProduct">Tovább</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
export default {
  name: "add-product",
  data() {
    return {
      products: {
        id: null,
        title: "",
        description: "",
        price: "",
        published: false,
        img: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveProduct() {
      var data = {
        title: this.products.title,
        description: this.products.description,
        price: this.products.price,
        img: this.products.img,
      };
      ProductsDataService.create(data)
        .then((response) => {
          this.products.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newProduct() {
      this.submitted = false;
      this.products = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 400px;
  margin: auto;
  padding: 30px;
}
.form-group {
  font-size: 20px;
}
.form-control {
  font-size: 15px;
}
.addProdtitle {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}
#submitbtn {
  padding: 10px 30px;
  margin-top: 5px;
}
</style>