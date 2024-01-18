<script>
export default{
    
}
</script>
<template lang="">
  <div class="container">
    <div class="row">
        <div class="col-5">
            <div class="contenainer-squad1">
                <h2>Instanbul Sports</h2>
                <img src="/club-1.png" alt="club1">

            </div>
        </div>
        <div class="col-1 flex-align">
           <h1>VS</h1>
        </div>
        <div class="col-5">
            <div class="container-squad2">
                <img src="/club-2.png" alt="club2">
                <h2>United Fs Club</h2>

            </div>
        </div>
        <div class="col-12 flex-align">
            <h5 class="partita"> <i class="bi bi-calendar3"></i>May 21, 2022 18:05 pm </h5 >
            <h5 > <i class="bi bi-plus-circle"></i>Expert Stadium</h5 >
        </div>
        <div class="col-12 flex-align">
            <button class="btn"><strong>View Match Details</strong></button>
        </div>
    </div>

  </div>
</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss" as *; 
.contenainer-squad1{
    display: flex;
    align-items: center;
    justify-content: end;
}
.container-squad2{
    display: flex;
    align-items: center;
    justify-content: start;
}
.flex-align{
    display: flex;
    justify-content: center;
    align-items: center;
}
.partita{
    margin-right: 20px;
}
.btn{
    color: white;
    padding: 20px;
    border-color: white;
    border-radius: 3rem;
    margin-top: 30px;
    background-color: black;
}

.btn:hover{
    border-color: black;
}
</style>