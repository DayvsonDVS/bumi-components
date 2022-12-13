<template>
  <div :class="['sidebar', { 'is-close': onClose && props.minimize }]">
    <div v-if="props.minimize" class="wrap" @click="resize"></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  minimize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  minimize: false
})

const onClose = ref<boolean>(false)

function resize() {
  onClose.value = !onClose.value
}
</script>

<style scoped lang="scss">
.sidebar {
  margin: -8px 0px 0px -8px;
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
    right: -12px;
    top: 80px;
    background: #313640;
    height: 25px;
    width: 25px;
    position: absolute;
    border-radius: 15px;
    cursor: pointer;
    &::before {
      content: '';
      top: 9px;
      right: 7px;
      position: absolute;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(135deg);
    }
  }
}
.is-close {
  position: absolute;
  transform: translate3d(-259px, 0, 0);
  transition: transform 0.3s ease-out;
  .wrap {
    &::before {
      right: 9px;
      transform: rotate(45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
}
</style>
