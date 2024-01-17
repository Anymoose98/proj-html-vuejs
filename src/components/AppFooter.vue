<script>
import { store } from "../store.js"
export default {
  data() {
    return {
      store
    }
  }
}
</script>
<template lang="">
  <div class="sfondo-footer">

  </div>
</template>
<style lang ="scss" scoped>
@use "./../styles/generals.scss" as *;

.sfondo-footer {
  background-image: url("/footer-bg-football.jpg");
  height: 300px;
  background-color: black;
}
</style>