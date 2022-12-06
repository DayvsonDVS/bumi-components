<template>
  <div :class="['nav-item', { 'on-route': onRoute }]">
    <div ref="border" class="border"></div>

    <a :class="['content', { active: currentPath === to }]" :href="to">
      <slot />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  to?: string
  active?: boolean
}

const props = defineProps<Props>()

const currentPath = ref(window.location.pathname)
const onRoute = ref<Boolean>(false)

if (props.to === currentPath.value) {
  onRoute.value = true
} else {
  onRoute.value = false
}
</script>

<style scoped lang="scss">
.nav-item {
  position: relative;
  overflow: hidden;
  height: max-content;
  border-radius: 15px;
  transition: all 0.3s ease-out;
  &:hover {
    background: #232832;
    border-radius: 15px;
    transition: all 0.3s ease-out;
  }
  .border {
    position: absolute;
    top: 11px;
    height: 26px;
    width: 4px;
    border-radius: 15px;
    transition: all 0.3s ease-out;
  }
  .content {
    padding: 1rem 6rem 1rem 2.2rem;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: 100;
    text-decoration: none;
    display: grid;
    grid-auto-flow: column;
    gap: 0.9rem;
    justify-content: left;
  }
  &.on-route {
    .border {
      background: var(--primary);
      height: 26px;
      box-shadow: 0px 0 4px var(--primary);
      transition: all 0.3s ease-out;
    }
  }
  .active {
    background: #232832;
    border-radius: 15px;
    color: var(--primary);
  }
}
</style>
