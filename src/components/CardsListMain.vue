<script>
import { store } from "../store.js"
import AppCardsMain from "./AppCardsMain.vue";
export default {
    name: 'CardsListMain',
    components:{
      AppCardsMain
    },
    data() {
      return {
        store
      }
    },
};
</script>
<template lang="">
  <section>
  <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="content">
                        <div class="title_section">
                            <div class="reccomanded">
                                <img src="./assets/reccomanded-icon.svg" alt=""> <!-- TODO: aggiungere alt -->
                            </div>
                            <h2>Resent New & Articles</h2>
                            <div class="subtitle">Be aware of the football world.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="my_card_section">
            <div class="container-fluid">
              <div class="row">
                      <AppCardsMain v-for="card, index in store.cards" :key="index" :card="card"/>
              </div>
            </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
body {
  background-color: rgb(255, 255, 255);
}

section {
  background-color: #fbfbfb;
  width: 100vw;
  height: 100vh;
  font-family: "Satoshi Black", sans-serif;

}
.reccomanded {
  background-color: black;
  width: 105px;
  height: 105px;
  border-radius: 100px;
  margin-bottom: -10px;
  display: flex;
  align-self: center;
  justify-content: center;
}

.title_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

h2 {
  font-size: 30px;
  margin-top: 30px;
  font-weight: 700;
}

.subtitle {
  font-size: 18px;
}

.my_card_section {
  max-width: 1420px;
  margin-top: 20px;
  margin: 0 auto;
}

.my_card {
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  background-color: white;
  -webkit-box-shadow: 5px 0px 15px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 0px 15px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 50px 10px;
  margin-top: 20px;
}

.card_info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo_container {
  width: 223px;
}

.button_more {
  width: 100px;
  background-color: black;
  color: white;
  border-radius: 100px;
  font-size: 18px;
  padding: 20px 70px;
  display: flex;
  justify-content: center;
  margin-bottom: -25px;
}

.card_img {
  width: 100%;
}

.date_title {
  font-size: 18px;
  font-weight: 600;
  font-family: "Satoshi Regular", sans-serif;
}

.card_title {
  font-size: 23px;
  font-family: "Satoshi Black", sans-serif;
  font-weight: 900;
}

.card_descr {
  padding: 0 20px;
  font-size: 18px;
  font-family: "Satoshi Regular", sans-serif;
  font-weight: 100;
  text-align: left;
  margin-bottom: 30px;
}

.reccomanded img {
  width: 90%;
  color: white;
}
</style>
