<template>
  <div :class="['tag', color, { outline: outline }]">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import '@/assets/scss/vars.scss'

interface Props {
  title: string
  color: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  outline?: boolean
}

withDefaults(defineProps<Props>(), {
  color: 'default',
  outline: false
})
</script>

<style scoped lang="scss">
$colors: default, primary, success, danger, warning;

.tag {
  font-size: var(--font-size-base);
  width: max-content;
  color: #fff;
  border-radius: 14px;
  font-weight: var(--font-regular);
  border: var(--border-size-none);
  padding: 8px 18px;
  display: grid;
  justify-items: center;
  @each $color in $colors {
    &.#{$color} {
      background: var(--#{$color});
      color: #fff;
      border: solid var(--border-size-sm) var(--#{$color});
      &.outline {
        background: var(--outline);
        border: solid var(--border-size-sm) var(--#{$color});
      }
    }
  }
}
</style>
