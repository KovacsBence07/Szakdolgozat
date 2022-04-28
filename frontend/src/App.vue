<template>
   <div>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Electrical shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/home" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <span v-if="isLoggedIn">
          <router-link to="/products" class="nav-link"
            >Admin products</router-link>
        </span> 
      </li>
      <span v-if="isLoggedIn">
          <router-link to="/add" class="nav-link">Add Product</router-link>
        </span>
        <router-link to="/userProducts" class="nav-link">User products</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <span v-if="isLoggedIn">
            <a href="#" @click="Logout">Log out</a>
          </span>
          <span v-else>
            <button><router-link to="/login">Log in</router-link></button>

            <button><router-link to="/register">Register</router-link></button>
          </span>
          <a class="" href="#" id="cart">
              <i class="fa fa-shopping-cart"></i> View Cart
              </a>
    </form>
    
  </div>
</nav>
    </div>
    <router-view />
  </div>
</template>
<script>
//static js

//stat js
import { onBeforeMount, ref } from "vue";
import firebase from "firebase";
import { useRouter, useRoute } from "vue-router";



export default {
  name: "app",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isLoggedIn = ref(false);

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        isLoggedIn.value = true; // Ha be van jelentkezve
      } else {
        isLoggedIn.value = false; // Ha nincs bejelentkezve
      }
    });
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          // router.replace("/home");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/home");
        }
      });
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed out"))
        .catch((err) => alert(err.message));
    };

    //A login és a reg mukszik.
    return {
      Logout,
      isLoggedIn,
    };
  },
 };
</script>

<style>
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