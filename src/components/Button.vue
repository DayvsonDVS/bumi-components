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
  state = 'primary'
} = defineProps<Props>()
</script>

<style scoped lang="scss">
.button {
  width: 100%;
  height: 100%;
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
      border: var(--border-size-none);
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
    background: var(--outlined);
    border: solid var(--border-size-md) var(--primary);
    &:hover {
      background: var(--outlined-light);
    }
    &:focus {
      border: solid var(--border-size-md) var(--primary);
      box-shadow: 0 0 0 2px var(--primary-darkest);
    }
    &:active {
      border: solid var(--border-size-md) var(--primary-darker);
      box-shadow: var(--shadow-none);
    }
    &:disabled {
      cursor: not-allowed;
      border: solid var(--border-size-md) #fff;
      opacity: 0.2;
      &:hover {
        background: var(--outlined);
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
      border: var(--border-size-none);
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
      border: var(--border-size-none);
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
      border: var(--border-size-none);
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
