<template>
  <div
    :class="['alert', { [color]: color, 'is-close': active }]"
    ref="elementAlert"
  >
    <img :src="iconAlertUrl" />

    <div class="slot">
      <h3>{{ title }}</h3>

      <p>{{ text }}</p>
    </div>

    <a href="#" class="close" ref="elementClose" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref, computed, onMounted } from 'vue'
import '@/assets/scss/vars.scss'
import '@/assets/scss/main.scss'

interface Props {
  title: string
  text?: string
  color?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  duration?: number
  speed?: string
  closeOnClick?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'default',
  duration: 0,
  speed: '',
  closeOnClick: false
})

const elementAlert = ref<HTMLElement>()
const elementClose = ref<HTMLElement>()
const active = ref(false)

const iconAlertUrl = computed(() => {
  return new URL(`../assets/icon/alert/${props.color}.svg`, import.meta.url)
    .href
})

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(() => {
      close()
    }, props.duration)
  }
  if (props.closeOnClick) {
    elementAlert.value?.addEventListener('click', () => {
      close()
    })
  }
  if (!props.closeOnClick) {
    elementClose.value?.addEventListener('click', () => {
      close()
    })
  }
})

function close() {
  active.value = true

  setTimeout(() => {
    elementAlert.value?.remove()
  }, +props.speed.replace(/\D+/g, '000'))
}
</script>

<style scoped lang="scss">
$colors: default, primary, success, danger, warning;
.alert {
  margin-bottom: 3px;
  @each $color in $colors {
    width: max-content;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    gap: 1.2rem;
    padding: 1.2rem;
    border-radius: 16px;
    opacity: 1;
    transition: all v-bind(speed) ease-in-out;
    z-index: 999;
    &.#{$color} {
      background: var(--#{$color}-darkest);
      color: var(--#{$color});
      display: grid;
      align-items: baseline;
      &.is-close {
        pointer-events: none;
        opacity: 0;
      }
      .close {
        opacity: 0.3;
        padding: 4px 12px 14px 10px;

        &:hover {
          opacity: 1;
        }
        &::before,
        &::after {
          position: absolute;
          content: ' ';
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
