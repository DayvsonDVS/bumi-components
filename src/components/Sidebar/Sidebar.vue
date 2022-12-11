<template>
  <div :class="['sidebar', { 'is-close': close && props.adjustable }]">
    <div v-if="props.adjustable" class="wrap" @click="resize">
      <span class="arrow" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  adjustable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  adjustable: false
})

const close = ref<boolean>(false)

function resize() {
  close.value = !close.value
}
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-auto-rows: auto;
  gap: 1rem;
  padding: 1rem;
  background: #313640;
  width: max-content;
  min-height: 100vh;
  align-content: baseline;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s ease-out;
  .wrap {
    right: -15px;
    top: 60px;
    background: #424753;
    height: 30px;
    width: 30px;
    position: absolute;
    border-radius: 15px;
    cursor: pointer;
    .arrow {
      top: 9px;
      right: 6px;
      position: absolute;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      padding: 5px;
      transform: rotate(45deg);
      -webkit-transform: rotate(135deg);
    }
  }
}
.is-close {
  transform: translate3d(-259px, 0, 0);
  transition: transform 0.3s ease-out;
  .wrap {
    .arrow {
      right: 11px;
      transform: rotate(45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
}
</style>
