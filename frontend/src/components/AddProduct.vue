<template>
  <div class="submit-form">
      <div v-if="!submitted">
          <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control"
              id="title" required v-model="products.title" name="title"/>
          </div>
          <div class="form-group">
              <label for="title">Image url</label>
              <input type="text" class="form-control"
              id="img" required v-model="products.img" name="img"/>
          </div>
          <div class="form-group">
              <label for="description">Description</label>
              <input type="text" class="form-control" id="description" required v-model="products.description" name="description"/>
          </div>
          <div class="form-group">
              <label for="price">Price</label>
              <input type="number" name="price" id="price" class="form-control" required v-model="products.price">
          </div>
          <button @click="saveProduct" class="btn btn-success">Submit</button>
      </div>
      <div v-else>
          <h4>You submitted successfully!</h4>
          <button class="btn btn-success" @click="newProduct">Add</button>
      </div>
  </div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
export default {
    name:"add-product",
    data(){
        return{
            products:{
                id: null,
                title: "",
                description:"",
                price: "",
                published: false,
                img: ""
            },
            submitted: false
        };
    },
    methods: {
        saveProduct(){
            var data ={
                title: this.products.title,
                description: this.products.description,
                price: this.products.price,
                img: this.products.img,
            };
            ProductsDataService.create(data)
                .then(response=>{
                    this.products.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e =>{
                    console.log(e);
                });
        },
        newProduct(){
            this.submitted = false;
            this.products = {};
        }
    }
};
</script>

<style>
    .submit-form{
        max-width: 300px;
        margin: auto;
    }
</style>