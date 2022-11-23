<template>
  <div :class="['tab', { active }]" ref="tab">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useEmitter } from '@/emitter'
import { ref } from 'vue'

const tab = ref<HTMLElement>()
const emitter = useEmitter()

interface Props {
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  active: false
})

emitter.emitter.on('active', () => props.active)
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
