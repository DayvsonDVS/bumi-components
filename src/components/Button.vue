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
  width: 110px;
  height: 40px;
  color: #fff;
  border-radius: 12px;
  font-weight: var(--font-regular);
  border: var(--border-size-none);
  cursor: pointer;
  &.primary {
    background: var(--primary);
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
  &.outlined {
    background: none;
    border: solid var(--border-size-md) var(--primary);
    &:hover {
      background: #1d2f44;
    }
    &:focus {
      border: solid var(--border-size-md) var(--primary-darkest);
    }
    &:active {
      background: none;
      border: solid var(--border-size-md) var(--primary-darker);
    }
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
      &:hover {
        background: none;
      }
    }
  }
  &.success {
    background: var(--success);
    &:hover {
      background: var(--success-light);
      box-shadow: var(--success-shadow-box);
    }
    &:focus {
      border: solid var(--border-size-md) var(--success-dark);
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
  &.danger {
    background: var(--danger);
    &:hover {
      background: var(--danger-light);
      box-shadow: var(--danger-shadow-box);
    }
    &:focus {
      border: solid var(--border-size-md) var(--danger-dark);
    }
    &:active {
      background: var(--danger-darker);
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: var(--danger);
        box-shadow: var(--shadow-none);
      }
    }
  }
  &.warning {
    background: var(--warning);
    &:hover {
      background: var(--warning-light);
      box-shadow: var(--warning-shadow-box);
    }
    &:focus {
      border: solid var(--border-size-md) var(--warning-dark);
    }
    &:active {
      background: var(--warning-darker);
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: var(--warning);
        box-shadow: var(--shadow-none);
      }
    }
  }
}
</style>
