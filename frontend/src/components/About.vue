<template>
<div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
<!-- For demo purpose -->
<div class="container py-5">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">About us</h1>
            <p class="lead mb-0"><b> We created this website with Vue.js, Node.js, MongoDB and Firebase.</b></p>
        </div>
    </div>
</div><!-- End -->


<div class="container">
    <div class="row text-center">
        <!-- Team item -->
        <div class="col-xl-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="@/assets/images/bence.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Kovács Bence Dominik</h5><span class="small text-uppercase text-muted">Tanuló</span>
                
            </div>
        </div><!-- End -->

        <!-- Team item -->
        <div class="col-xl-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="@/assets/images/tomi.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Szabó Tamás Martin</h5><span class="small text-uppercase text-muted">Tanuló</span>
                
            </div>
        </div><!-- End -->
    </div>
</div>
  <div class="footer-dark">
        
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
       
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
body {
  
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4); 
}
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