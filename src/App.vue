<script>
import AppCardsMain from "./components/AppCardsMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import PlayerList from "./components/PlayerList.vue";
import AppTable from "./components/AppTable.vue";
import AppLogo from "./components/AppLogo.vue";
import CardsListMain from "./components/CardsListMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppCardsMain,
    AppTable,
    AppLogo,
    PlayerList,
    AppFooter,
    CardsListMain,
  },
  mounted() {
    const cursor = document.querySelector(".cursor");
    const fixCursor = document.querySelector(".fix-cursor");

    document.addEventListener("mousemove", (e) => {
      const rect = fixCursor.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cursor.setAttribute("style", "top: " + (y - 10) + "px; left: " + (x - 10) + "px;");
    });

    document.addEventListener("click", () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
  },
};
</script>

<template>
  <div class="fix-cursor"><div class="cursor"></div></div>
  
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

body {
    margin: 0;
    height: 100vh;
    background: rgb(27, 27, 27);
    cursor: none;
}

.fix-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
}

.cursor {
    width: 50px;
    height: 50px;
    border: 1px solid rgb(212, 212, 212);
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 1;
}

.cursor::after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    border: 8px solid gray;
    border-radius: 50%;
    opacity: .5;
    top: 9px;
    left: 9px;
    mix-blend-mode: difference;

}

@keyframes cursorAnim3 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}

.expand {
    animation: cursorAnim3 .5s forwards;
    border: 1px solid black;
}

p {
  color: white;
  font-family: 'arial';
  text-align: center;
  margin-top: 50px;
  font-size: 1.4em;
  
  a {
    color: teal;
  }
}
</style>
