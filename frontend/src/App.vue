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
        <router-link to="/userProducts" class="nav-link"
          >User products</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
      <li class="nav-item">
        
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <span v-if="isLoggedIn">
            <a href="#" @click="Logout">Log out</a>
          </span>
          <span v-else>
            <router-link to="/login" class="fa fa-sign-in"> Log in</router-link>

            <router-link to="/register" class="fa fa-user"> Register</router-link>
              <a href="#" id="cart">
              <i class="fa fa-shopping-cart"></i> View Cart
              </a>

          </span>
    </form>
  </div>
</nav>
    </div>
    <div class="container mt-3"></div>
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
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
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
* {
  margin: 0;
  padding: 0;
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
}
.menu2{
  float: right;
  display: flex;
  margin-left: 1300px;
}
.menu {
  background-color: #36486b;
  display: flex;
}
.menu a {
  display: inline-block;
  padding: 15px 10px 15px 10px;
  text-decoration: none;
  color: white;
  border: 1px solid #36486b;
}
.menu a:hover {
  background-color: white;
  color: #36486b;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.submenu {
  display: none;
  position: absolute;
  background-color: #36486b;
  color: white;
}
.submenu a {
  display: block;
  border: 1px solid #36486b;
}
.dropdown:hover .submenu {
  display: block;
}
/*Dropdown decor submenu*/
.submenu1 {
  position: relative;
  display: inline-block;
}
.decorsubmenu {
  display: none;
  position: absolute;
  background-color: #36486b;
  color: white;
  margin-left: 116px;
  margin-top: -50px;
}
.decorsubmenu a {
  display: block;
}
.submenu1:hover .decorsubmenu {
  display: block;
}
/*Dropdown Accessories submenu*/
.submenu2 {
  position: relative;
  display: inline-block;
}
.accessoriessubmenu {
  display: none;
  position: absolute;
  background-color: #36486b;
  color: white;
  margin-left: 116px;
  margin-top: -50px;
}
.accessoriessubmenu a {
  display: block;
}
.submenu2:hover .accessoriessubmenu {
  display: block;
}
/*Right NavBar*/
</style>