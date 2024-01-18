<script>
import AppCardsMain from './components/AppCardsMain.vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import PlayerList from './components/PlayerList.vue'
import AppTable from './components/AppTable.vue'
import AppLogo from './components/AppLogo.vue'
import CardsListMain from './components/CardsListMain.vue'

export default {

  components: {

    AppHeader,
    AppMain,
    AppCardsMain,
    AppTable,
    AppLogo,
    PlayerList,
    AppFooter,
    CardsListMain
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <PlayerList />
  <AppTable />
  <AppLogo />
  <CardsListMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

