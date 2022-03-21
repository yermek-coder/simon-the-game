<script>
import gsap, { Elastic } from "gsap";
export default {
  props: {
    tile: {
      type: Object,
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { tweened: 1 };
  },
  computed: {
    color() {
      return this.colors[this.tile.id];
    },
    number() {
      if (this.tile.active) return 0.95;
      return 1;
    },
  },
  watch: {
    number(n) {
      gsap.to(this, {
        ease: Elastic.easeOut.config(1, 0.3),
        duration: 0.2,
        tweened: Number(n) || 0,
      });
    },
  },
};
</script>

<template>
  <button
    class="tile"
    :style="`background-color: var(--tile_color_${tile.id}); transform: scale(${tweened})`"
    :class="tile.error ? 'shake' : ''"
    @mousedown.left="$emit('setActive', tile.id)"
  ></button>
</template>

<style lang="scss" scoped>
.tile {
  padding: 5rem;
  background-color: var(--board-bg-color);
  width: fit-content;
  height: fit-content;
  border: none;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  :hover {
    box-shadow: 0px 5px 10px 2px red;
  }
  :active {
    box-shadow: 0px 5px 2px -1px rgba(34, 60, 80, 0.2);
  }
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
