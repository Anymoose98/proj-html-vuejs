<script>
import { store } from "../store.js";
import Players from "./Players.vue";
export default {
  name: "PlayerList",
  components: {
    Players,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
  <div class="img-sfondo">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Players</h1>
        </div>
        <div class="container-cards">
          <Players
            v-for="(Player, index) in store.players"
            :key="index"
            :Player="Player"
          />
        </div>
        <div class="col-12">
          <button class="btn">View All Players</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/generals.scss" as *;

.container-cards {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 2rem;
}

.img-sfondo {
  background-image: url("/player.jpg");
  background-repeat: no-repeat;
  background-position: contain;
  background-size: cover;
}

.col-12 {
  text-align: center;

  h1 {
    color: white;
    margin-top: 50px;
    font-weight: 800;
    font-size: 35px;
  }
}

.btn {
  color: white;
  padding: 25px 40px;
  background-color: black;
  border-radius: 3rem;
  margin: 30px 0px;
  border-color: white;
  font-weight: 800;
}

.btn:hover {
  background-color: rgb(255, 255, 255);
  border-color: white;
  color: rgb(0, 0, 0);
}
</style>
