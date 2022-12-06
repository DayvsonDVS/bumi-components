<template>
  <div :class="['tab', { active: isActive }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { eventBus } from '@/utils/eventBus'
import { Tab } from '@/types'

interface Props {
  title: string
  active?: boolean
}

const { title, active } = withDefaults(defineProps<Props>(), {
  active: false
})

const tabs = inject('tabs') as Ref<Tab[]>

const uid = Math.floor(100000 + Math.random() * 900000)

const isActive = computed(() => {
  return tabs.value.some((tab) => tab.active && tab.uid === uid)
})

eventBus.emit('addTab', { title, active, uid })
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
