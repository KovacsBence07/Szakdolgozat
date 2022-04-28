<template>
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
<!-- For demo purpose -->
<div class="container py-5">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Team Page</h1>
            <p class="lead mb-0">Using Bootstrap 4 grid and utilities, create a nice team page.</p>
            <p class="lead">Snippet by<a href="https://bootstrapious.com/snippets" class="text-white">
                <u>Bootstrapious</u></a>
            </p>
        </div>
    </div>
</div><!-- End -->


<div class="container">
    <div class="row text-center">

        <!-- Team item -->
        

        <!-- Team item -->
        

        <!-- Team item -->
        <div class="col-xl-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="@/assets/images/bence.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Kovács Bence Dominik</h5><span class="small text-uppercase text-muted">Tanuló</span>
                
            </div>
        </div><!-- End -->

        <!-- Team item -->
        <div class="col-xl-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="@/assets/images/Tomi.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Szabó Tamás Martin</h5><span class="small text-uppercase text-muted">Tanuló</span>
                
            </div>
        </div><!-- End -->
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
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
body {
    background: #e8cbc0;
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4);
    min-height: 100vh;
}

.social-link {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
}

.social-link:hover, .social-link:focus {
    background: #ddd;
    text-decoration: none;
    color: #555;
}
</style>