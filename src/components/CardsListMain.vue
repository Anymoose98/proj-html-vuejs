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
    <div class="my_card_section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 p-2">
                      <AppCardsMain v-for="card, index in store.cards" :key="index" :card="card"/>
                    </div>
                </div>
            </div>
    </div>
</template>
<style lang="scss" scoped>

</style>
