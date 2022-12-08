<template>
  <div :class="['nav-item', { 'on-route': route.path === to }]">
    <div ref="border" class="border"></div>

    <RouterLink
      :class="['content', { active: route.path === to }]"
      :to="props.to!"
    >
      <slot />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

interface Props {
  to?: string
  active?: boolean
}

const props = defineProps<Props>()

const route = useRoute()
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
    font-size: 16px;
    font-weight: var(--font-regular);
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
