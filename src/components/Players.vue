<script>
export default {
  name: "Players",
  props: {
    Player: Object,
  },
  data() {
    return {};
  },
};
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
<style lang="scss" scoped>
@use "../styles/generals.scss" as *;

.testo-all {
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &:hover .sfondo-nero {
    top: 89%;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.img-card {
  position: relative;

  .img-section {
    width: 300px;
    height: 350px;
    position: relative;
    background-color: black;
    border-radius: 50px 50px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 100%;
      border-radius: 2rem;
      position: absolute;
      top: 0;
      transition: 0.4s;
    }
  }
}

.sfondo-nero {
  background-color: black;
  border-radius: 2.5rem;
  height: 90px;
  width: 300px;
  top: 85%;
  left: 0;
  position: absolute;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 800;
  transition-duration: 0.4s;

  h5 {
    font-weight: 800;
    font-size: 22px;
    margin-bottom: 5px;
  }
}
</style>
