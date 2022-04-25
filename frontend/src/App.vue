<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container">
        <a class="navbar-brand" href="#">Vizsgaremek</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <span v-if="isLoggedIn">
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Admin products</router-link>
            </li>
            </span>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Add</router-link>
            </li>
            <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        View More
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Web Development</a></li>
                        <li><a class="dropdown-item" href="#">Web Designing</a></li>
                        <li><a class="dropdown-item" href="#">Android Development</a></li>
                    </ul>
                </li> -->
            <li class="nav-item">
              <router-link to="/userproducts" class="nav-link"
                >User Products</router-link>
            </li>
          </ul>
          <span v-if="isLoggedIn">
          <button class="logout" @click="Logout">Logout</button>
          </span>
          <span v-else>

          
            <div class="d-flex">
            <button class="btn btn-light ms-3 mr-2">
              <router-link to="/login" class="nav-link">Login</router-link>
            </button>

            <button class="btn btn-light ms-3 mr-2">
              <router-link to="/register" class="nav-link"
                >Register</router-link>
            </button>
            
            
          </div>
      </span>
        
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>

import { onBeforeMount, ref,  } from "vue";
import firebase from "firebase";
import { useRouter, useRoute } from "vue-router";


export default {
  name: "app",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isLoggedIn = ref(false);
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
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
    }
     
    
//A login és a reg mukszik.
return{
    Logout,
    isLoggedIn
  }
  },
  
  
};
</script>