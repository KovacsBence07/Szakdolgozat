<template>
  <div class="container">

      <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="text" placeholder="Enter Email" name="email" v-model="email" required />
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" v-model="password" required />
      <button type="submit" value="Register">Register</button>
      <p>
       Have an account? <router-link to="/login">Login Here</router-link>
      </p>
    </form>
  </div>
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
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 16px;
}

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