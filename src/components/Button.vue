<template>
  <button
    :type="type"
    :outline="outline"
    :disabled="disabled"
    :class="['button', color, { outline }]"
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
  outline?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  color: 'primary',
  outline: false
})
</script>

<style scoped lang="scss">
$colors: primary, success, danger, warning;

.button {
  width: max-content;
  height: 100%;
  padding: 9px 12px;
  color: #fff;
  border-radius: 12px;
  font-weight: var(--font-regular);
  font-size: var(--font-size-base);
  cursor: pointer;
  @each $color in $colors {
    &.#{$color} {
      border: solid var(--border-size-sm) var(--#{$color});
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
      &.outline {
        background: none;
        border: solid var(--border-size-sm) var(--#{$color});
        transition: all 0.3s ease-in-out;
        &:hover {
          background: var(--outline-light);
        }
        &:focus {
          border: solid var(--border-size-sm) var(--#{$color});
          box-shadow: 0 0 0 2px var(--#{$color}-darkest);
        }
        &:active {
          border: solid var(--border-size-sm) var(--#{$color}-darker);
          box-shadow: var(--shadow-none);
        }
        &:disabled {
          cursor: not-allowed;
          opacity: 0.2;
          &:hover {
            background: var(--outline);
          }
        }
      }
    }
  }
}
</style>
