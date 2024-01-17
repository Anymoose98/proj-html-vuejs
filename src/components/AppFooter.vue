<script>

export default{
    name: "AppHeader",
  
}
</script>
<template lang="">
  <div class="sfondo-footer p-3 ">
    <div class="col-3 ">
        <ul >
            <li>
                <img src="/logo-footer-football.png" alt="">
            </li>
            <li class="text-allineato-img"> 
                <i class="bi bi-geo-alt h2 "></i> New Jersey, USA
            </li>
            <li class="text-allineato-img">
                <i class="bi bi-telephone h2"> </i> +1(234)567 890 10
            </li>
            <li class="text-allineato-img">
                <i class="bi bi-envelope h2"></i>  example@emample.com
            </li>
        </ul>
    </div>
    <div class="col-4 text-white">
        <h1> Join Our Newsletter</h1>
        <h6>Subscribe to be informed about important developments in our club and football world</h6>
        <input type="text" class="form-control p-3 bordo-3" placeholder="Insert your email">
        <button class="btn form-control mt-1 p-3 bordo-3">Subscribe →</button>
    </div>
    <div class="col-2 mx-3">
        <h1>Education</h1>
        <ul>
            <li> FIXTURES & RESULTS</li>
            <Li> LEAGUE TABLE</Li>
            <Li> PLAYERS</Li>
            <Li> GALLERY</Li>
        </ul>
    </div>
    <div class="col-2">
        <h1>Quick Links</h1>
        <ul>
            <li> HOME</li>
            <Li> LEAGUE TABLE</Li>
            <Li> PLAYERS</Li>
            <Li> GALLERY</Li>
        </ul>
    </div>
  </div>
  <div class="col-12">

  </div>
</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss" as *;
.sfondo-footer{
    background-image: url("/footer-bg-football.jpg");
    height: 300px;
    background-color: black;
    color: white;
    display: flex
}
.col-3{

    li{
        list-style: none;
        line-height: 20px;
        margin-top: 10px
    }
    img{
        width: 80px
    }
}
.text-white{
    color:white
}
.btn{
    background-color: white;
    color: black
}
.bordo-3{
    border-radius: 3rem
}
.col-2{
    li{
        list-style: '- ';
    }
}
.text-allineato-img{
    display: flex;
    align-items: center;
}
</style>