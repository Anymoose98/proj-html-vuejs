<script>
export default{
    name: "Players",
    props: {
        Player: Object
    },
    data(){
        return{

        }
    }
}
</script>
<template lang="">
         <div class="col-3 py-5">
             <div class=" img-card testo-all">
                 <img :src="Player.image" alt="">
                 <div class="sfondo-nero">
                     <h5 class="text-white  ">{{ Player.number }}</h5>
                     <span>{{ Player.name }}</span> <span> - </span>
                     <span>{{ Player.role}}</span>
                 </div>
             </div>
         </div>
</template>
<style lang ="scss" scoped>
@use '../styles/generals.scss' as *;
.card{
    border-radius: 2rem;
    border: none
}
.testo-all{
   text-align: center;
}
.img-sfondo{
    background-image: url("/footer-bg-football.jpg");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: cover;
 
}
.sfondo-nero{
    background-color: black;
    border-radius: 1rem;
    width: 100%;
    top: 85%;
    left: 0;
    position: absolute;
    color: grey
}
img{
    width: 100%;
    border-radius: 2rem
}
.img-card{
    width: 300px;
    position: relative
   
}


</style>