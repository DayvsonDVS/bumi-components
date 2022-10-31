<template>
  <div class="tab">
    <button class="button" ref="buttonTitle" @click="openSlot(buttonTitle!)">
      {{ title }}
    </button>

    <div class="slot-content">
      <div class="shadow-button"></div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref } from 'vue'
import '@/assets/scss/vars.scss'

const buttonTitle = ref<HTMLElement>()

interface props {
  title: string
}

withDefaults(defineProps<props>(), {})

function openSlot(element: HTMLElement) {
  classRemove()
  element.classList.add('is-active')
  element.nextElementSibling?.classList.add('is-open')
}

function classRemove() {
  const buttons = [...document.getElementsByClassName('button')]

  buttons.map((element) => {
    element.classList.replace('is-active', 'button')
    element.nextElementSibling?.classList.replace('is-open', 'slot-content')
  })
}
</script>

<style scoped lang="scss">
.tab {
  display: grid;
  .button {
    z-index: 2;
    color: #babdc5;
    padding: 10px 2px 15px 2px;
    border: none;
    background: var(--outlined);
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &.is-active {
      background: #232832;
    }
  }
  .slot-content {
    padding: 20px 22px 18px;
    background: #232832;
    border-radius: 16px;
    color: #babdc5;
    left: 0;
    right: 0;
    margin: 0px 8px;
    display: none;
    position: absolute;
    transition: all 0.3s ease-in-out;
    .shadow-button {
      background: var(--outlined);
      height: 40px;
      position: relative;
      top: -20px;
    }
    &.is-open {
      display: block;
    }
  }
}
</style>
