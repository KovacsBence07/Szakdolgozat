<template>
  <div>
    <span v-if="isLoggedIn">
      <h1 class="welcomemess">Welcome, {{ name }}</h1>
    </span>
    
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const name = ref("");
    const isLoggedIn = ref(false);
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        isLoggedIn.value = true; // if we have a user
      } else {
        isLoggedIn.value = false; // if we do not
      }
    });

    return {
      name,
      isLoggedIn,
    };
  },
};
</script>

<style>
.popularProducts{
  float: left;
  margin-left:85px;
  
}
.divbody{
  margin-left: 35px;
}
.welcomemess{
  color: pink;
  font-size: 2rem;
  text-align: center;
  padding-right: 30px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #04aa6d;
  text-align: center;
  cursor: pointer;
  width: 60%;
  font-size: 18px;
  border: black 1px  solid ;
  border-radius: 30px;
}

.card button:hover {
  opacity: 0.7;
}


</style>