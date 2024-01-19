<script>
import AppMatches from './AppMatches.vue';

export default {
    components: {
        AppMatches,
    }

}
</script>
<template lang="">
  <div class="container">
    <div class="row mt-5">
        <div class="col-5">
            <div class="contenainer-squad1">
                <h2>Instanbul Sports</h2>
                <img src="/club-1.png" alt="club1">

            </div>
        </div>
        <div class="col-2 flex-align">
           <div class="scritta-vs mx-4">VS</div>
        </div>
        <div class="col-5">
            <div class="container-squad2">
                <img src="/club-2.png" alt="club2">
                <h2>United Fs Club</h2>

            </div>
        </div>
        <div class="col-12 flex-align mt-3">
            <h5 class="partita"> <i class="bi bi-calendar3 mx-2"></i>May 21, 2022 18:05 pm </h5 >
            <h5 > <i class="bi bi-plus-circle mx-2"></i>Expert Stadium</h5 >
        </div>
        <div class="col-12 flex-align">
            <button class="btn"><strong>View Match Details</strong></button>
        </div>
    </div>
</div>

<div class="background-matches my-5 mb-0 pb-5">
    <AppMatches />
</div>


</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss" as *;



.contenainer-squad1 {
    display: flex;
    align-items: center;
    justify-content: end;
}

h2 {
    font-weight: 700;
}

.scritta-vs {
    font-size: 80px;
    font-weight: 700;
}

.container-squad2 {
    display: flex;
    align-items: center;
    justify-content: start;
}

h5 {
    font-weight: 600;
}

.flex-align {
    display: flex;
    justify-content: center;
    align-items: center;
}

.partita {
    margin-right: 20px;
}

.btn {
    color: white;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    border-color: white;
    border-radius: 1.5rem;
    margin-top: 30px;
    background-color: black;
}

.btn:hover {
    border-color: black;
}

.background-matches {
    background-image: url("/saha.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
}
</style>