<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            numeroCasuale: "",
            numeroCasuale2: ""
        };
    },
    methods: {
        generaNumeroCasuale() {
            this.numeroCasuale = ""
            this.numeroCasuale = Math.floor(Math.random() * 9);
            return this.numeroCasuale



        },
        generaNumeroCasuale2() {
            this.numeroCasuale2 = ""
            this.numeroCasuale2 = Math.floor(Math.random() * 9);
            if (this.numeroCasuale == this.numeroCasuale2) {
                this.numeroCasuale2 = ""
                this.numeroCasuale2 = Math.floor(Math.random() * 9);
            }
            return this.numeroCasuale2

        }

    },
}
</script>


<template lang="">
<div class="container">
    <div class="row">
        <div class="col-12">

            <!-- Titolo -->
            <h1 class="my-5 white text-center">Upcoming Matchs</h1>

            <!-- card -->
            <div v-for="index in 5" :key="index">
                <div class="col-12 white d-flex align-items-center bg-nero mt-4" >
                    <div class="col-5 d-flex align-items-center justify-content-end">
                        <img :src=store.team[generaNumeroCasuale()].img :alt=store.team[this.numeroCasuale].name>
                        <h2>{{store.team[this.numeroCasuale].name}}</h2>
                    </div>
                    <div class="col-2 text-center">
                        <h1 class="scritta-vs">VS</h1>
                    </div>
                    <div class="col-5 d-flex align-items-center">
                        <h2>{{store.team[generaNumeroCasuale2()].name}}</h2>
                        <img :src=store.team[(this.numeroCasuale2)].img :alt=store.team[this.numeroCasuale2].name>
                    </div>
                </div>
                <div class="col-12 bg-nero-scuro white p-1 d-flex align-items-center ">
                    <div class="col-6 text-end ">
                        <i class="fa-regular fa-calendar mx-2"></i>
                        <span class="data-stadio" >October 20, 2022 17:00 pm </span>
                    </div>
                    <div class="col-6 mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                        <span class="mx-2 data-stadio">Expert Stadium</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@use "./../styles/generals.scss";

.white {
    color: white;
}

h2 {
    font-weight: 700;
}

.data-stadio {
    font-size: medium;
    font-weight: bold;
}

.scritta-vs {
    font-size: 50px;
    font-weight: 700;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2);
    }
}

.bg-nero {
    background: rgba(#000000, 0.2);
}

.bg-nero-scuro {
    background: rgba(#000000, 0.5);
}

.cerchio-plus {
    border: 1px solid white;
    border-radius: 50%;
    padding: 1px;
}

i {
    color: white;
}

img {
    padding: 1.5em;
    will-change: filter;
    transition: filter 400ms;
    transition: transform 0.5s ease;
}

img:hover {
    filter: drop-shadow(0 0 4em white);
    transform: scale(1.2);
}
</style>