<template>
  <div>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Bejelentkezés</h2>
              <p class="text-white-50 mb-5">Kérlek add meg bejelentkezési adataidat!</p>

              <form @submit.prevent="Login">
              <div class="form-outline form-white mb-4">
                 <label class="form-label" for="typeEmailX">Email</label> 
                <input type="text" id="typeEmailX" class="form-control form-control-lg" v-model="email" required />
               
              </div>
              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX" >Jelszó</label>
                <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password" required />
                
              </div>
              <button class="btn btn-outline-light btn-lg px-5" type="submit">Bejelentkezés</button>
               </form>
              <div class="d-flex justify-content-center text-center mt-4 pt-1">
              </div>

            </div>

            <div>
              <p class="mb-0">Nincs még fiókod? <a class="text-white-50 fw-bold"> <router-link to="/register">Hozz létre egy újat</router-link></a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4); 
}

</style>