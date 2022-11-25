<template>
  <div :class="['tab', { active }]" :uid="uid">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { eventBus } from '@/utils/eventBus'
import { watch } from 'vue'
// import { ref } from 'vue'

interface Props {
  title: string
  active?: boolean
}

// const isActive = ref(false)
const uid = Math.floor(100000 + Math.random() * 900000)

const props = withDefaults(defineProps<Props>(), {
  active: false
})

// isActive.value = props.active
eventBus.emit('addTab', { title: props.title, active: props.active, uid })

watch(props, () => {
  eventBus.emit('changeTab', {
    title: props.title,
    active: props.active,
    uid
  })
})

// eventBus.on('setActiveTab', (data) => {
//   isActive.value = data.uid === uid
// })
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
