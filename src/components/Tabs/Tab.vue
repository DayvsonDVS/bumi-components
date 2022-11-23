<template>
  <div :class="['tab', { active }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  active: false
})
</script>

<style scoped lang="scss">
.tab {
  display: none;
  padding: 1.4rem 2.2rem;
  color: #babdc5;
  background: #232832;
  border-radius: 20px;
  line-height: 1.5;
  font-weight: var(--font-regular);
  &.active {
    display: block;
  }
}
</style>
