<script>
import { store } from "../store.js"
export default{
    data(){
      return{
        store
      }
    }
}
</script>
<template lang="">
  <div class="sfondo">
    <div class="header-black">
        <div class="container">
            <div class="row">

                <div class="col-3 ">
                    <a href="/"><img src="/sponsor1.png" alt="sponsor"></a>
                    <a href="/"><img src="/sponsor2.png" alt="sponsor"></a>
                </div>
                <div class="col-5 p-3 logo">
                    <a href="/"><img src="/logo-football.png" alt=""></a>
                </div>
                <div class="col-3 icons-list">
                    <ul>
                        <li><a href="/"><i class="bi bi-facebook h1"></i></a></li>
                        <li><a href="/"><i class="bi bi-instagram h1"></i></a></li>
                        <li><a href="/"><i class="bi bi-twitter h1"></i></a></li>
                    </ul>     
                </div>
                <div class="col-12">

                    <ul class="mt-4">
                        <li class="list-nav" v-for="(lista, index) in store.navbar" :key="index"> <a href="/"> {{ lista.link }}</a></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 content">
                <h1>FOOTBALL CLUB</h1>
                <h1>SPORT CLUB</h1>
                <h5>Football is the poetry of movement</h5>
                <button class="btn"><strong>Learn More →</strong></button>
            </div>
        </div>
    </div>
  </div>
</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss";
.sfondo{
    background-image: url("/slider1-1.jpg");   
    background-repeat: no-repeat;
    background-position: contain;
    background-size: cover;
 
}
.header-black{
    background-color: rgba(0, 0, 0, 0.3);
 
}
i{
    color: white;
    width: 20px
}
.icons-list{
    display: flex;
    justify-content: end;
    color: white;
    gap: 20px
}
.col-3{
    margin-top: 40px
}
.logo{
    display: flex;
    justify-content: center;
}
ul{
    display: flex   ;
    flex-direction: row;
    gap: 20px
}
li{
    list-style-type: none;
}
.col-12{
    display: flex;
    justify-content: center;
    ul{
        text-transform: uppercase;
        
    }
    li{
        color: white;
        font-size: 20px;
        margin: 30px;
    }
}
.content{
    display: flex;
    justify-content: center;   
    align-items: center;
    flex-direction: column;
    color: white;
    height: calc(900px - 250px );
    
}
a{
        text-decoration: none;
            color: white;
    }
h1{
    margin: 20px;
    font-size: 70px;
}

.btn{
    color: white;
    padding: 20px;
    border-color: white;
    border-radius: 3rem;
    margin-top: 30px;
    &:hover{
        background-color: white;
        color: black
    }
}
.btn:hover{
    border-color: white;
}
.list-nav:after{
  position:absolute;
  width:0;
  display:block;
  content:'';
  transition: width 0.5s ease-in-out;
}

.list-nav:hover:after{
    position: relative;
    border-bottom: 2px solid white;
    width: 100%;
}


</style>