<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
            activeImage: 0,
            isAutoPlayActive: false,
            autoplay: null,
            slides: [
                {
                    image: '/slider1-1.jpg',
                    title1: 'Welcome To ',
                    title2: 'Football Club',
                    text: 'Live match fix type and result',
                }, {
                    image: '/slider2-1.jpg',
                    title1: 'Football Club',
                    title2: ' Sport Club',
                    text: 'Private football matches',
                }, {
                    image: '/slider3.jpg',
                    title1: 'Professional Football ',
                    title2: ' Football Club',
                    text: "Football is the poetry of movement",
                },
                {
                    image: '/slider4.jpg',
                    title1: 'Football Club',
                    title2: ' Sport Club',
                    text: "Football is a head game",
                },
            ]
        }
    },
    methods: {
        nextImg() {
            if (this.activeImage == this.slides.length - 1) {
                this.activeImage = 0;
            } else {
                this.activeImage++;
            }
        },
        prevImg() {
            if (this.activeImage == 0) {
                this.activeImage = this.slides.length - 1
            } else {
                this.activeImage--;
            }
        },
        setImg(index) {
            this.activeImage = index
        },
        startAutoPlay() {
            this.isAutoPlayActive = true;
            this.autoplay = setInterval(() => {
                this.nextImg()
            }, 3000)

        }
    },
    created() {
        this.startAutoPlay()
    }
}


</script>
<template lang="">

    <img :src="slides[activeImage].image" class="sfondo"  alt="Spiderman" />      
        <div class="container-arrows">
            <div class="prev" @click="prevImg"></div>
            <div class="next" @click="nextImg"></div>         
        </div>
        <div class="font-700">

            <div class="header-black">
                <div class="container">
                    <div class="row">
                        <div class="col-4 mar-top icons-list">
                            <a href="/"><img src="/sponsor1.png" alt="sponsor"></a>
                            <a href="/"><img src="/sponsor2.png" alt="sponsor"></a>
                        </div>
                        <div class="col-4 p-3 logo">
                            <a href="/"><img src="/logo-football.png" alt=""></a>
                        </div>
                        <div class="col-4 mar-top icons-list">
                            <ul>
                                <li><a href="/"><img src="/facebook.png" alt=""> </a></li>
                                <li><a href="/"><img src="/instagram.png" alt=""></a></li>
                                <li><a href="/"><img src="/twitter.png" alt=""></a></li>
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
                        <h1 class="font-700" >{{ slides[activeImage].title1 }}</h1>
                        <h1 class="font-700 marg-top">{{ slides[activeImage].title2 }}</h1>
                        <h4 class="font-700">{{ slides[activeImage].text }}</h4>
                        <button class="btn next" @click="nextImg"><i class="bi bi-chevron-left"></i> </button>
                        <button class="btn prev" @click="prevImg"> <i class="bi bi-chevron-right"></i></button>
                        <button class="btn largo font-700">Learn More →</button>
                    </div>
                </div>
        </div>
    </div>

</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss";
.font-700{
    font-weight: 700;
}
ul{
    img{
        width: 40px;
    }
}
.marg-top{
    margin-top: -15px
}
.sfondo {
    position: relative;
    width: 100%;
    height: 900px;
}
.largo{
    padding: 20px 50px !important

}

.header-black {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
}

i {
    color: white;
    width: 20px
}

.icons-list {
    display: flex;
    justify-content: center;
    color: white;
    gap: 10px
}

.mar-top{
    margin-top: 40px

}
.logo {
    display: flex;
    justify-content: center;
}
.largo:hover {
        background-color: white;
        color: black
    }

ul {
    display: flex;
    flex-direction: row;
    gap: 20px
}

li {
    list-style-type: none;
}

.col-12 {
    display: flex;
    justify-content: center;
    margin-bottom: -25px;
    margin-top: 20px;

    ul {
        text-transform: uppercase;

    }

    li {
        color: white;
        font-size: 20px;
        margin: 25px;
    }
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    height: calc(900px - 250px);
    position: absolute;
    top: 20%;
    right: 0%
}

a {
    text-decoration: none;
    color: white;
}

h1 {
    margin: 20px;
    font-size: 70px;
}

.btn {
    color: white;
    padding: 20px;
    border: 2px solid white;
    border-radius: 3rem;
    margin-top: 30px;

   
}

.btn:hover {
    border-color: white;
}

.list-nav:after {
    position: absolute;
    width: 0;
    display: block;
    content: '';
    transition: width 0.5s ease-in-out;
}

.list-nav:hover:after {
    position: relative;
    border-bottom: 2px solid white;
    width: 100%;
    
}

.text {
    position: absolute;
    top: 30%;
    left: 0%
}

.item {
    float: left;
    width: 700px;
    height: 300px;
    position: relative;
}


.prev,
.next {

    position: absolute;
    border: 2px solid white;
    border-radius: 3rem;
    font-size: 23px;
    padding: 15px 20px

}

.prev {
    right: 0%
}

.next {
    left: 0%
}
</style>