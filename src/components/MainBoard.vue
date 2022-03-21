<script>
import BoardItem from "@/components/BoardItem.vue";
import { STATUS } from "@/constants";
import { ref } from "vue";
import useGameInit from "@/components/compositions/useGameInit";
import useGamePreview from "@/components/compositions/useGamePreview";
import useGamePlay from "@/components/compositions/useGamePlay";

export default {
  name: "MainBoard",
  components: {
    BoardItem,
  },
  setup() {
    const gameStatus = ref(STATUS.NONE);

    const { tiles, fillTiles, difficulty } = useGameInit();
    const {
      gameMessage,
      btnHandler,
      canStartGame,
      start,
      queue,
      delay,
      playSound,
    } = useGamePreview(fillTiles, gameStatus, difficulty, tiles);

    const { setNotPressedForAll, setActive } = useGamePlay(
      queue,
      gameStatus,
      delay,
      tiles,
      difficulty,
      playSound
    );

    return {
      tiles,
      fillTiles,
      difficulty,
      gameStatus,

      canStartGame,
      start,
      btnHandler,
      gameMessage,
      queue,

      setNotPressedForAll,
      setActive,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <h3>Сложность: {{ difficulty }}</h3>
    <h5>{{ gameMessage }}</h5>
    <div class="board">
      <BoardItem
        v-for="tile in tiles"
        :key="tile.id"
        :tile="tile"
        @setActive="setActive($event)"
      >
      </BoardItem>
    </div>
    <div class="buttons">
      <button class="btn" @click="btnHandler">
        {{ canStartGame ? "Старт" : "Закончить игру" }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.board {
  padding: 1rem;
  // background-color: var(--board-bg-color);
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
}
.buttons {
  display: flex;
}
.btn {
  margin: 0 1rem;
  border: none;
  padding: 1rem 2rem;
  background-color: var(--success);
}
.clickable {
  cursor: pointer;
}
.not-clickable {
  cursor: auto;
}
</style>
