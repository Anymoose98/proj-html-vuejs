<script>



export default {
  name: "AppHeader",


}
</script>
<template lang="">
  <footer class="sfondo-footer py-5 px-0">
    <div class="container d-flex container-width">
      <div class="col-3 ">
          <ul >
              <li class="mt-0">
                  <img src="/logo-footer-football.png" alt="">
              </li>
              <li class="text-allineato-img"> 
                  <i class="bi bi-geo-alt h2 pe-2"></i> New Jersey, USA
              </li>
              <li class="text-allineato-img">
                  <i class="bi bi-telephone h2 pe-2"> </i> +1(234)567 890 10
              </li>
              <li class="text-allineato-img">
                  <i class="bi bi-envelope h2 pe-2"></i>  example@emample.com
              </li>
          </ul>
          <img class="icon-img" src="/facebook.png" alt="">
         <img class="icon-img mx-3" src="/instagram.png" alt="">
          <img class="icon-img" src="/twitter.png" alt="">
      </div>
      <div class="col-4 text-white me-5">
          <h3 class="fw-bold pt-4"> Join Our Newsletter</h3>
          <p class="pt-2 text-start">Subscribe to be informed about important developments in our club and football world</p>
          <input type="text" class="form-control p-4 bordo-3 mt-4" placeholder="Insert your email">
          <button class="btn btn-light form-control mt-1 p-4 bordo-3">Subscribe →</button>
      </div>
      <div class="col-2 ms-5">
          <h3 class="fw-bold pt-4">Education</h3>
          <ul class="pt-2">
              <li> <span>- </span> FIXTURES & RESULTS</li>
              <li> <span>- </span> LEAGUE TABLE</li>
              <li> <span>- </span> PLAYERS</li>
              <li> <span>- </span> GALLERY</li>
          </ul>
      </div>
      <div class="col-2">
          <h3 class="fw-bold pt-4">Quick Links</h3>
          <ul class="pt-2">
              <li> <span>- </span> HOME</li>
              <li> <span>- </span> LEAGUE TABLE</li>
              <li> <span>- </span> PLAYERS</li>
              <li> <span>- </span> GALLERY</li>
          </ul>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center pt-5">
      <p class="mb-0 fs-6">© 2022 Football Club - All Rights Reserved.</p>
    </div>
  </footer>
</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss" as *;

.sfondo-footer {
  background-image: url("/footer-bg-football.jpg");
  background-color: black;
  color: white;

  .container-width {
    max-width: 1420px;
  }
}

ul {
  padding-left: 0;
}

.col-3 {

  li {
    list-style: none;
    line-height: 20px;
    margin-top: 10px;
  }

  img {
    width: 65px;
    padding-bottom: 15px;
  }

  .icon-img {
    border: 1px solid white;
    padding: 5px 20px;
    transition-duration: 0.5s;

    &:hover {
      border: 1px solid rgba($color: #000000, $alpha: 0);
    }
  }
}

.text-white {
  color: white
}

.btn {
  background-color: white;
  color: black
}

.bordo-3 {
  border-radius: 2rem;
  border: none;
}

.col-2 {
  li {
    list-style: none;

    span{
      font-weight: 900;
      font-size: 25px;
    }
  }
}

.text-allineato-img {
  display: flex;
  align-items: center;
}
</style>