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
      <span v-if="isLoggedIn">
            <a href="#" class="btn btn-danger" @click="Logout">Log out</a>
          </span>
          <span v-else>
            <router-link to="/login" class="btn btn-primary" style="margin-right:10px">Login</router-link>
            <router-link to="/register" class="btn btn-primary">Register</router-link>
          </span>
          <a class="btn btn-dark" href="#" id="cart" style="margin-left:15px;" ><i></i> View Cart</a>
    
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



.footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}
</style>