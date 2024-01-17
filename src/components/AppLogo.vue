<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store';

export default {
    name: "AppLogo",

    data() {
        return {
            store,
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div class="container-fluid back-dark mb-4">
    <div class="container">
        <div class="row">
            <div class="col-2 py-5">
                <img class="img-fluid p-2 my-border" src="../../public/client2.png" alt="">
            </div>
            <div class="col-2 py-5">
                <img class="img-fluid p-2 my-border" src="../../public/client3.png" alt="">
            </div>
            <div class="col-2 py-5">
                <img class="img-fluid p-2 my-border" src="../../public/client4.png" alt="">
            </div>
            <div class="col-2 py-5">
                <img class="img-fluid p-2 my-border" src="../../public/client7.png" alt="">
            </div>
            <div class="col-2 py-5">
                <img class="img-fluid p-2 my-border" src="../../public/client9.png" alt="">
            </div>
            <div class="col-2 py-5">
                <img class="img-fluid p-2 my-border" src="../../public/client10.png" alt="">
            </div>
        </div>
    </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.back-dark {
    background-color: black;
}

.my-border {
    border: 1px solid white;
    border-radius: 25px;

    &:hover {
        margin-top: -5px;
        transition-duration: 0.5s;
    }
}
</style>