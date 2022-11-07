<template>
  <div :class="['tab', { active: active }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  active?: boolean
}

withDefaults(defineProps<Props>(), {})
</script>

<style scoped lang="scss">
.tab {
  display: none;
  padding: 1rem;
  color: #babdc5;
  background: #232832;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  &.active {
    display: block;
  }
}
</style>
