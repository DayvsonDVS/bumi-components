<template>
  <div :class="['tab', { active: active }]" ref="tabs">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps(['active'])
</script>

<style scoped lang="scss">
.tab {
  display: none;
  padding: 0.75rem;
  color: #babdc5;
  background: #232832;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  &.active {
    display: block;
  }
}
</style>
