<template>
  <div class="tab">
    <button class="button" @click="openSlot(title)">
      {{ title }}
    </button>

    <div :id="title" class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref } from 'vue'
import '@/assets/scss/vars.scss'

const slot = ref<HTMLElement>()

interface props {
  title: string
}

withDefaults(defineProps<props>(), {})

function openSlot(id: string) {
  closeSlot()
  document.getElementById(id)?.classList.add('is-open')
}
function closeSlot() {
  const slots = [...document.getElementsByClassName('content')]
  slots.map((element) => {
    element.classList.replace('is-open', 'content')
  })
}
</script>

<style scoped lang="scss">
.tab {
  display: grid;
  position: static;
  .button {
    color: #babdc5;
    padding: 10px 2px 15px 2px;
    border: none;
    background: var(--outlined);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:focus {
      background: #232832;
    }
  }
  .content {
    transition: all 0.3s ease-in-out;
    padding: 18px 22px;
    background: #232832;
    border-radius: 10px;
    color: #babdc5;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    margin: 0px 8px;
    display: none;
    &.is-open {
      display: block;
    }
  }
}
</style>
