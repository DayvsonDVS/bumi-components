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
import '@/assets/scss/vars.scss'
import { withDefaults } from 'vue'
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
    }
    &:focus {
      box-shadow: 0 0 0 2px var(--primary-darkest);
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
        opacity: 0.2;
        &:hover {
          background: var(--outlined);
        }
      }
    }
  }
  &.success {
    background: var(--success);
    &:hover {
      background: var(--success-light);
    }
    &:focus {
      box-shadow: 0 0 0 2px var(--success-dark);
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
    &.outlined {
      background: var(--outlined);
      border: solid var(--border-size-md) var(--success);
      &:hover {
        background: var(--outlined-light);
      }
      &:focus {
        border: solid var(--border-size-md) var(--success);
        box-shadow: 0 0 0 2px var(--primary-darkest);
      }
      &:active {
        border: solid var(--border-size-md) var(--success);
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
  &.danger {
    background: var(--danger);
    &:hover {
      background: var(--danger-light);
    }
    &:focus {
      box-shadow: 0 0 0 2px var(--danger-dark);
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
    &.outlined {
      background: var(--outlined);
      border: solid var(--border-size-md) var(--danger);
      &:hover {
        background: var(--outlined-light);
      }
      &:focus {
        border: solid var(--border-size-md) var(--danger);
        box-shadow: 0 0 0 2px var(--primary-darkest);
      }
      &:active {
        border: solid var(--border-size-md) var(--danger);
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
  &.warning {
    background: var(--warning);
    &:hover {
      background: var(--warning-light);
    }
    &:focus {
      box-shadow: 0 0 0 2px var(--warning-dark);
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
    &.outlined {
      background: var(--outlined);
      border: solid var(--border-size-md) var(--warning);
      &:hover {
        background: var(--outlined-light);
      }
      &:focus {
        border: solid var(--border-size-md) var(--warning);
        box-shadow: 0 0 0 2px var(--primary-darkest);
      }
      &:active {
        border: solid var(--border-size-md) var(--warning);
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
</style>
