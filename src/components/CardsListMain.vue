<script>
import { store } from "../store.js";
import AppCardsMain from "./AppCardsMain.vue";
export default {
  name: "CardsListMain",
  components: {
    AppCardsMain,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title_section">
            <div class="reccomanded">
              <img src="../../public/reccomanded-icon.svg" alt="" />
              <!-- TODO: aggiungere alt -->
            </div>
            <h2>Resent New & Articles</h2>
            <div class="subtitle">Be aware of the football world.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="my_card_section">
      <div class="container-fluid">
        <div class="row">
          <div class="content">
            <AppCardsMain
              v-for="(card, index) in store.cards"
              :key="index"
              :card="card"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="slider-btn-container">
      <div class="slider-btn"></div>
      <div class="slider-btn"></div>
      <div class="slider-btn"></div>
      <div class="slider-btn"></div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  background-color: #fbfbfb;
  width: 100%;
  height: 120vh;
  font-family: "Satoshi Black", sans-serif;
  overflow-x: hidden;

  .slider-btn-container{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    .slider-btn {
      border-radius: 100px;
    width: 60px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.635);
    margin-right: 10px;

    &:hover{
      cursor: pointer;
    }
  }
  }

  .content {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
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

    .reccomanded img {
      width: 90%;
      color: white;
    }
  }
  .title_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    h2 {
      font-size: 30px;
      margin-top: 30px;
      font-weight: 700;

      .subtitle {
        font-size: 18px;
      }
    }
  }
}

.my_card_section {
  max-width: 1420px;
  margin-top: 20px;
  margin: 0 auto;
}
</style>
