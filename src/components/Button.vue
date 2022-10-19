<template>
  <button :disabled="disabled" :class="['button', { [state]: state }]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit'
  disabled?: boolean
  state: 'primary' | 'success' | 'danger' | 'warning' | 'outlined'
}

const {
  type = 'button',
  disabled = false,
  state = 'success'
} = defineProps<Props>()
</script>

<style scoped lang="scss">
.button {
  &.primary {
    background: var(--primary);
    font-weight: var(--font-regular);
    width: 110px;
    height: 40px;
    color: #fff;
    border-radius: 12px;
    border: var(--border-size-none);
    cursor: pointer;
    &:hover {
      background: var(--primary-light);
      box-shadow: var(--primary-shadow-box);
    }
    &:focus {
      border: solid var(--border-size-md) var(--primary-darkest);
    }
    &:active {
      background: var(--primary-darker);
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: var(--primary);
        box-shadow: var(--shadow-none);
      }
    }
  }
  &.success {
    background: var(--success);
    font-weight: var(--font-regular);
    width: 110px;
    height: 40px;
    color: #fff;
    border-radius: 12px;
    border: var(--border-size-none);
    cursor: pointer;
    &:hover {
      background: var(--success-light);
      box-shadow: var(--success-shadow-box);
    }
    &:focus {
      border: solid var(--border-size-md) var(--success-darkest);
    }
    &:active {
      background: var(--success-darker);
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: var(--success);
        box-shadow: var(--shadow-none);
      }
    }
  }
}
</style>
