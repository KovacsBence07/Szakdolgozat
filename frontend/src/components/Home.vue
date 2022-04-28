<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <div class="container px-4 px-lg-5">
    <!-- Heading Row-->
    <div class="row gx-4 gx-lg-5 align-items-center my-5">
        <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://cdn.prohardver.hu/dl/cnt/2022-01/173210/tclb.jpg" alt="..." /></div>
        <div class="col-lg-5">
            <h1 class="font-weight-light">Electrical shop </h1>
            <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p><a class="btn btn-primary" href="/UserProducts">Products</a>
        </div>
    </div><!-- Call to Action-->
    <div class="card text-white bg-secondary my-5 py-4 text-center">
        <div class="card-body">
            <p class="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
        </div>
    </div><!-- Content Row-->
    <div class="row gx-4 gx-lg-5">
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Card One</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Card Two</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Card Three</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
        
    </div>
</div>
<div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Kovács Bence Dominik és Szabó Tamás Martin Szakdolgozata © 2022</p>
            </div>
        </footer>
    </div>
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
button{
    border: 2px solid black;
    font: 300 15px;
    line-height: 16px;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 22px;
    text-decoration: none;
    -moz-transition: 0.2s all;
    -o-transition: 0.2s all;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
}
body {
  
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4); 
}
.card {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    max-width: 100%;
    margin: auto;
    text-align: center;
    font-family: arial;
}
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