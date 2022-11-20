<template>
  <div :class="['alert', color, { 'is-close': active }]" ref="elementAlert">
    <img :src="iconAlertUrl" />

    <div class="content">
      <h4>{{ props.title }}</h4>
      <p v-if="props.text">{{ props.text }}</p>
    </div>

    <a v-if="!props.closeOnClick" class="close" @click="close" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref, computed, onMounted } from 'vue'
import { onClick } from '@/composables/onClick'
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
const active = ref(false)
const transitionTime = ref<number>()

const iconAlertUrl = computed(() => {
  return new URL(`../assets/icon/alert/${props.color}.svg`, import.meta.url)
    .href
})

onMounted(() => {
  loadSpeed()

  if (props.duration > 0) {
    setTimeout(() => {
      close()
    }, props.duration)
  }

  if (props.closeOnClick) {
    onClick(elementAlert.value!, () => {
      close()
    })
  }
})

// Identified a bug when closing the notification, the speed value was not correct.

// Implemented new solution to solve the problem.

// The + value is a type conversion, something like parseint()

function loadSpeed() {
  if (props.speed.includes('.')) {
    transitionTime.value = +props.speed.replace(/\D+/g, '') * 100
  } else {
    transitionTime.value = +props.speed.replace(/\D+/g, '') * 1000
  }
}

function close() {
  active.value = true

  setTimeout(() => {
    elementAlert.value?.remove()
  }, transitionTime.value)
}
</script>

<style scoped lang="scss">
$colors: default, primary, success, danger, warning;

.alert {
  margin-bottom: 3px;
  @each $color in $colors {
    font-size: var(--font-size-base);
    width: max-content;
    display: grid;
    align-items: baseline;
    grid-template-columns: max-content 1fr max-content;
    gap: 1.2rem;
    padding: 1.2rem 1.2rem 0.8rem;
    border-radius: 16px;
    opacity: 1;
    transition: all v-bind(speed) ease-in-out;
    z-index: 999;
    inline-size: auto;
    line-height: 1.5;
    .content {
      h4 {
        position: relative;
        top: -3px;
        margin: 0;
        font-weight: var(--font-regular);
      }
      p {
        margin-bottom: 4px;
        margin-top: 6px;
        font-weight: 300;
        font-size: var(--font-size-sm);
      }
    }
    &.#{$color} {
      background: var(--#{$color}-darkest);
      color: var(--#{$color});
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
