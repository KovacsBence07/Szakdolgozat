<template>
  <div>
    <section>
      <div class="auth">
        <h1>Login</h1>
        <form @submit.prevent="Login">
          <input type="text" placeholder="Email" name="email" v-model="email" required />
          <input type="password" placeholder="Password" name="psw" v-model="password" required/>
          <button type="submit">Login</button>
        </form>
        <p class="register">Not a member? <span>Register</span></p>
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
  background: #e8cbc0;
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4);
  font-family: "Poppins", sans-serif;
}

.auth {
  background-color: #ffffff;
  display: inline-block;
  padding: 2rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}

.auth h1 {
  font-size: 2.5rem;
  text-align: center;
  padding: 0 0 2rem 0;
  border-bottom: 0.1rem solid silver;
}

.auth form {
  margin: 1rem;
}

.auth input {
  width: 100%;
  margin-top: 2rem;
  padding: 0 0.5rem;
  height: 4rem;
  font-size: 1.4rem;
  border: none;
  background: none;
  outline: none;
  border-bottom: 1.5px solid rgb(163, 163, 163);
}

.auth input::placeholder {
  color: rgb(163, 163, 163);
}

.auth input:hover {
  border-bottom: 1.5px solid #0086da;
}

.auth form p {
  font-size: 1.3rem;
  padding: 3rem 0.5rem 0rem 0.5rem;
  color: rgb(163, 163, 163);
}

.auth form p:hover {
  color: rgb(80, 80, 80);
  cursor: pointer;
}

.auth button[type="submit"] {
  display: block;
  margin: 2rem auto;
  font-size: 1.6rem;
  padding: 0.9rem 2.2rem;
  border-radius: 1.7rem;
  border: none;
  width: 90%;
  background-color: #0086da;
  color: #ffffff;
  font-weight: 500;
}

.auth button[type="submit"]:hover {
  cursor: pointer;
}

.auth .register {
  text-align: center;
  font-size: 1.3rem;
}

.auth .register span {
  color: #007ecc;
  font-weight: 600;
}

.auth .register span:hover {
  color: #005b94;
  font-weight: 600;
  cursor: pointer;
}
</style>