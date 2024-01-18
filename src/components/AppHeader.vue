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
  <div>
    <img :src="slides[activeImage].image" class="sfondo"  alt="Spiderman" />      
        <div class="container-arrows">
            <div class="prev" @click="prevImg"></div>
            <div class="next" @click="nextImg"></div>         
        </div>
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
                <h1 >{{ slides[activeImage].title1 }}</h1>
                <h1 >{{ slides[activeImage].title2 }}</h1>
                <h4 >{{ slides[activeImage].text }}</h4>
                <button class="btn next" @click="nextImg">< </button>
                <button class="btn prev" @click="prevImg"> ></button>
                <button class="btn"><strong>Learn More →</strong></button>
            </div>
        </div>
    </div>
  </div>
</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss";

.sfondo {
    position: relative;
    width: 100%;
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
    justify-content: end;
    color: white;
    gap: 20px
}

.col-3 {
    margin-top: 40px
}

.logo {
    display: flex;
    justify-content: center;
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

    ul {
        text-transform: uppercase;

    }

    li {
        color: white;
        font-size: 20px;
        margin: 30px;
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
    top: 30%;
    left: 0%
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
    border-color: white;
    border-radius: 3rem;
    margin-top: 30px;

    &:hover {
        background-color: white;
        color: black
    }
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

}

.prev {
    right: 0%
}

.next {
    left: 0%
}
</style>