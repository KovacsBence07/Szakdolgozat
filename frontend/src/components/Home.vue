<template>
  <div>
    
    
    
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

</style>