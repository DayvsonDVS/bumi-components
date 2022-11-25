<template>
  <div class="tabs">
    <div class="tabs-headers">
      <ul>
        <li
          v-for="{ title, active, uid } in tabs"
          :key="uid"
          :class="{ active }"
          @click="changeTab(uid)"
          v-text="title"
        />
      </ul>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, provide } from 'vue'
import { eventBus } from '@/utils/eventBus'
import { Tab } from '@/types'

const tabs = ref<Tab[]>([])
const slots = useSlots()
const hasOneTabActive = ref(false)
const hasManyTabActive = ref(false)

if (slots.default) {
  let count = 0
  slots.default().map(({ props }) => {
    if (props?.active === '') {
      count = ++count
    }
  })
  count > 1 ? (hasManyTabActive.value = true) : false

  hasOneTabActive.value = slots.default().some(({ props }) => {
    return props?.active !== undefined
  })
}

eventBus.on('addTab', (data) => {
  if (hasManyTabActive.value) {
    tabs.value.push({
      ...data,

      active:
        hasManyTabActive.value && tabs.value.length > 0
          ? false
          : (data.active = true)
    })
  } else {
    tabs.value.push({
      ...data,

      active: !hasOneTabActive.value && !tabs.value.length ? true : data.active
    })
  }
})

function changeTab(uid: number) {
  tabs.value = tabs.value.map((tab) => ({ ...tab, active: uid === tab.uid }))
}

provide('tabs', tabs)
</script>

<style scoped lang="scss">
.tabs {
  padding: 10px;
  .tabs-headers {
    overflow-x: auto;
    margin-left: 12px;
    margin-right: 12px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    ul {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      margin: auto;
      padding: 0;
      display: flex;
      background: var(--outlined);
      color: #babdc5;
      width: max-content;
      li {
        list-style: none;
        padding: 1.2rem 2.2rem;
        cursor: pointer;
        opacity: 0.5;
        &.active {
          opacity: 1;
          background: #232832;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
      }
    }
  }
}
</style>
