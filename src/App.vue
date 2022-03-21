<script>
import MainBoard from "@/components/MainBoard.vue";
export default {
  components: { MainBoard },
};
</script>

<template>
  <div class="app-wrapper" @mouseup="$refs.mainBoard.setNotPressedForAll()">
    <main>
      <MainBoard ref="mainBoard" />
    </main>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  user-select: none;
}

header {
  line-height: 1.5;
  width: fit-content;
  margin: 0 auto;
}

.logo {
  display: block;
  margin: 0 auto;
}
main {
  margin: 1rem auto;
  width: fit-content;
}
</style>
