<template>
  <div class="container">
      <h1 class="title">Login</h1>
    <label for="email"><b>Email</b></label>
    <form @submit.prevent="Login">
      <input type="text" placeholder="Enter Email" name="email" v-model="email" required />
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" v-model="password" required />
      <button type="submit" value="Login" >Login</button>
      <p>
        Need an account? <router-link to="/register">Register here</router-link>
      </p>
    </form>

    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>
</template>

<script>

import { ref } from 'vue';
import firebase from 'firebase';
export default {
    
    setup() {

        const email = ref("");
        const password = ref("");

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message));
        }
        return{
            Login,
            email,
            password
        }
    }

};

</script>

<style>
.title{
  font-size: 30px;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  display: inline-block;
  border: 2px solid black;
  box-sizing: border-box;
  font-size: 15px;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 25px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 8px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>