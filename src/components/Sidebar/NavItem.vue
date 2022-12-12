<template>
  <div :class="['nav-item', { active: route.path === to }]">
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
  height: 50px;
  border-radius: 15px;
  transition: all 0.3s ease-out;
  &:hover {
    background: #232832;
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
  &.active {
    background: #232832;
    border-radius: 15px;
    a {
      color: var(--primary);
    }
    ::before {
      content: '';
      position: absolute;
      top: 11px;
      left: 0;
      width: 4px;
      border-radius: 15px;
      background: var(--primary);
      height: calc(100% - 22px);
      transition: all 0.3s ease-out;
    }
  }
}
</style>
