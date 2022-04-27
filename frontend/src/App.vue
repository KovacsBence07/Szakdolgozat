<template>
  <div>
    <div class="wrapper">
      <div class="menu">
        <a href="#"> <i class="fa fa-home"> </i> </a>

        <!-- <div class="dropdown">
                <a href="#"> Categories </a>
                <div class="submenu">
                    <div class="submenu1">
                        <a href="#"> Decor </a>
                        <div class="decorsubmenu">
                            <a href="#"> Wall Decor </a>
                            <a href="#"> Home Decor </a>
                        </div>
                    </div>
                    <div class="submenu2">
                        <a href="#"> Accesorries </a>
                        <div class="accessoriessubmenu">
                            <a href="#"> Earring </a>     
                            <a href="#"> Bracelet </a>
                            <a href="#"> Neck Piece </a>
                            <a href="#"> Anklets </a>
                            <a href="#"> Rings </a>
                        </div>
                    </div>
                    <a href="#"> Bags </a>
                    <a href="#"> Baskets/Boxes </a>
                    <a href="#"> Notebooks </a>
                    <a href="#"> Gifts </a>
                </div>
            </div> -->
       
        <router-link to="/home" class="nav-link">Home</router-link>
        <span v-if="isLoggedIn">
          <router-link to="/products" class="nav-link"
            >Admin products</router-link>
        </span>
        <span v-if="isLoggedIn">
          <router-link to="/add" class="nav-link">Add Product</router-link>
        </span>
        <router-link to="/userProducts" class="nav-link"
          >User products</router-link>
        <router-link to="/about" class="nav-link">About</router-link>

         <div class="menu2">
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
          
        </div>
      </div>
      <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      
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