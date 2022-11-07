<template>
  <button
    :type="type"
    :outlined="outlined"
    :disabled="disabled"
    :class="['button', { [color]: color, outlined: outlined }]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import '@/assets/scss/vars.scss'

interface Props {
  type?: 'button' | 'submit'
  disabled?: boolean
  color: 'primary' | 'success' | 'danger' | 'warning'
  outlined?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  color: 'primary',
  outlined: false
})
</script>

<style scoped lang="scss">
$colors: primary, success, danger, warning;
.button {
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 12px;
  font-weight: var(--font-regular);
  border: var(--border-size-none);
  cursor: pointer;
  @each $color in $colors {
    &.#{$color} {
      background: var(--#{$color});
      transition: all 0.3s ease-in-out;
      &:hover {
        background: var(--#{$color}-light);
      }
      &:focus {
        box-shadow: 0 0 0 2px var(--#{$color}-darkest);
      }
      &:active {
        background: var(--#{$color}-darker);
        border: var(--border-size-none);
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background: var(--#{$color});
          box-shadow: var(--shadow-none);
        }
      }
      &.outlined {
        background: var(--outlined);
        border: solid var(--border-size-md) var(--#{$color});
        transition: all 0.3s ease-in-out;
        &:hover {
          background: var(--outlined-light);
        }
        &:focus {
          border: solid var(--border-size-md) var(--#{$color});
          box-shadow: 0 0 0 2px var(--#{$color}-darkest);
        }
        &:active {
          border: solid var(--border-size-md) var(--#{$color}-darker);
          box-shadow: var(--shadow-none);
        }
        &:disabled {
          cursor: not-allowed;
          opacity: 0.2;
          &:hover {
            background: var(--outlined);
          }
        }
      }
    }
  }
}
</style>
