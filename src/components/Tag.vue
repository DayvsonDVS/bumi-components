<template>
  <div
    :outlined="outlined"
    :class="['tag', { [color]: color, outlined: outlined }]"
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import '@/assets/scss/vars.scss'

interface Props {
  title: string
  color: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  outlined?: boolean
}

withDefaults(defineProps<Props>(), {
  color: 'default',
  outlined: false
})
</script>

<style scoped lang="scss">
$colors: default, primary, success, danger, warning;
.tag {
  width: auto;
  color: #fff;
  border-radius: 14px;
  font-weight: var(--font-regular);
  border: var(--border-size-none);
  padding: 8px;
  display: grid;
  justify-items: center;
  @each $color in $colors {
    &.#{$color} {
      background: var(--#{$color}-darker);
      color: var(--#{$color}-lightest);
      border: solid var(--border-size-md) var(--#{$color}-darker);
      &.outlined {
        background: var(--outlined);
        border: solid var(--border-size-md) var(--#{$color});
      }
    }
  }
}
</style>
