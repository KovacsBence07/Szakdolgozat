import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


 const firebaseConfig = {
    apiKey: "AIzaSyBic4YmGsfKl0bVKwvA9zfCDSeGw4KOM1I",
    authDomain: "frontend-75644.firebaseapp.com",
    projectId: "frontend-75644",
    storageBucket: "frontend-75644.appspot.com",
    messagingSenderId: "197108772078",
    appId: "1:197108772078:web:d251fb3d22bd55402257ff",
    measurementId: "G-1BP29RSHR1"
  };

 firebase.initializeApp(firebaseConfig);


 

  
createApp(App).use(router).mount('#app')
