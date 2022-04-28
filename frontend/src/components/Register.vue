<template>
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Regisztráció</h2>
              <p class="text-white-50 mb-5">Kérjük adja meg a regisztrációhoz szükséges adatokat!</p>

              <form @submit.prevent="Register">
              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typeEmailX">Email</label>
                <input type="text" id="typeEmailX" class="form-control form-control-lg" v-model="email" required />
                
              </div>
              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX" >Jelszó</label>
                <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password" required />
                
              </div>
              <button class="btn btn-outline-light btn-lg px-5" type="submit">Regisztráció</button>
               </form>
              <div class="d-flex justify-content-center text-center mt-4 pt-1">
              </div>

            </div>

            <div>
              <p class="mb-0">Már van fiókod? <a class="text-white-50 fw-bold"> <router-link to="/login">Lépjen be itt</router-link></a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import firebase from 'firebase';
import { ref } from 'vue';

export default {
setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(user => {
                alert(user);
            })
            .catch(err => alert(err.message));
    }
    return{
        Register,
        email,
        password
    }

}
}
</script>

<style>
body {
  
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4); 
}
/* {box-sizing: border-box}

/* Add padding to containers */


/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>