<template>
  <div class="app">
    <nav class="header-1">
      <a href="" class="logo">Vizsgaremek</a>

      <form action="" class="search-box-container">
        <input type="search" id="search-box" placeholder="Search here..." />
        <label for="search-box" class="fas fa-search"></label>
      </form>
    </nav>
    <nav class="header-2">
      <div id="menu-bar" class="fas fa-bars"></div>

      <nav class="navbar">
        <router-link to="/home" class="nav-link">Home</router-link>
        <span v-if="isLoggedIn">
        <router-link to="/products" class="nav-link">Admin products</router-link>
        </span>
        <span v-if="isLoggedIn">
        <router-link to="/add" class="nav-link">Add Product</router-link>
        </span>
        <router-link to="/userProducts" class="nav-link">User products</router-link>
        
        <router-link to="/about" class="nav-link">About</router-link>
        
      </nav>
   
      <span v-if="isLoggedIn" class="buttons">
        <button class="btn btn-light btn-lg ms-1 mr-2" @click="Logout">Logout</button>
      </span>
      <span v-else>
        
          <button class="btn btn-light ms-3 mr-2">
            <router-link to="/login" class="nav-link">Login</router-link>
          </button>

          <button class="btn btn-light ms-3 mr-2">
            <router-link to="/register" class="nav-link">Register</router-link>
          </button>
        
      </span>
     
      <div class="icons">
        <a href="#" class="fas fa-shopping-cart"></a>
        
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />
    </nav>
    <div class="container mt-3"></div>
    <router-view/>
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

.buttons{
  position: relative;

}
* {
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-decoration: none;
}

:root {
  --green: #008080;
  --black: #2c2c54;
}

::selection {
  background: var(--green);
  color: #fff;
}

html {
  font-size: 60%;
  overflow-x: hidden;
  scroll-padding-top: 5rem;
  scroll-behavior: smooth;
}

.header-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1%;
  background-color: #eee;
}

.header-1 .logo {
  font-size: 3rem;
  color: var(--black);
  font-weight: bolder;
}

.header-1 .logo i {
  color: var(--green);
  padding: 0.5rem;
}

.header-1 .search-box-container {
  display: flex;
  height: 5rem;
}

.header-1 .search-box-container #search-box {
  height: 100%;
  width: 100%;
  padding: 1rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  color: #333;
  font-size: 2rem;
  text-transform: none;
}

.header-1 .search-box-container label {
  width: 8rem;
  height: 100%;
  background-color: var(--green);
  font-size: 2.5rem;
  line-height: 5rem;
  color: #fff;
  cursor: pointer;
  text-align: center;
}

.header-1 .search-box-container label:hover {
  background-color: var(--black);
}

.header-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 9%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
  background-color: #fff;
  position: relative;
}

.header-2.active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.header-2 .navbar a {
  padding: 0.5rem 1.5rem;
  font-size: 2rem;
  color: var(--black);
  border-radius: 0.5rem;
}

.header-2 .navbar a:hover {
  color: #fff;
  background-color: var(--green);
}

.header-2 .icons a {
  font-size: 2.5rem;
  color: var(--black);
  padding-left: 1rem;
}

.header-2 .icons a:hover {
  color: var(--green);
}

#menu-bar {
  font-size: 3rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--black);
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  color: var(--black);
  display: none;
}

/* ----------------- media query start -----------------  */

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 991px) {
  .header-1,
  .header-2 {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  #menu-bar {
    display: initial;
  }
  .header-2 .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--green);
    padding: 1rem 2rem;
    display: none;
  }
  .header-2 .navbar.active {
    display: initial;
  }
  .header-2 .navbar a {
    font-size: 2.5rem;
    display: block;
    background: #fff;
    text-align: center;
    padding: 1rem;
    margin: 1.5rem 0;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
  .header-1 {
    flex-flow: column;
  }
  .header-1 .search-box-container {
    width: 100%;
    margin-top: 2rem;
  }
  .header-1 .logo {
    font-size: 4rem;
  }
}
</style>