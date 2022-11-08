<template>
  <div :class="['alert', { [color]: color, 'is-close': active }]">
    <img :src="iconAlertUrl" />

    <div class="slot">
      <slot />
    </div>

    <a href="#" class="close" @click="close" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref, computed } from 'vue'
import '@/assets/scss/vars.scss'
import '@/assets/scss/main.scss'

interface Props {
  color: 'default' | 'primary' | 'success' | 'danger' | 'warning'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'default'
})

const active = ref(false)
const iconAlertUrl = computed(() => {
  return new URL(`../assets/icon/alert/${props.color}.svg`, import.meta.url)
    .href
})

function close() {
  active.value = !active.value
}
</script>

<style scoped lang="scss">
$colors: default, primary, success, danger, warning;
.alert {
  @each $color in $colors {
    width: auto;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    gap: 1.2rem;
    align-items: normal;
    padding: 1.2rem;
    border-radius: 16px;
    &.#{$color} {
      background: var(--#{$color}-darkest);
      color: var(--#{$color});
      img {
        fill: var(--#{$color});
      }
      &.is-close {
        display: none;
      }
      .close {
        position: absolute;
        right: 26px;
        top: 22px;
        opacity: 0.3;
        display: grid;
        align-items: center;
        padding: 10px;
        &:hover {
          opacity: 1;
        }
        &::before,
        &::after {
          position: absolute;
          content: ' ';
          left: 9px;
          height: 12px;
          width: 2px;
          background-color: var(--#{$color}-lightest);
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>