<template>
  <div class="tabs">
    <div class="tabs-headers">
      <ul ref="tabHeader">
        <li
          v-for="({ title, active, uid }, index) in tabs"
          :key="index"
          :uid="uid"
          :class="{ active }"
          @click="changeTab(uid)"
        >
          {{ title }}
        </li>
      </ul>
    </div>

    <div ref="tabBody">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { eventBus } from '@/utils/eventBus'
import { Tab } from '@/types'

const tabs = ref<Tab[]>([])
const tabHeader = ref<HTMLElement>()
const tabBody = ref<HTMLElement>()

eventBus.on('addTab', (data) => {
  tabs.value.push(data)
})

onMounted(() => {
  const body = [...tabBody.value?.children!]

  if (!tabs.value.some(({ active }) => active === true)) {
    tabs.value[0].active = true
    body[0]?.classList.add('active')
  }

  eventBus.on('changeTab', (data) => {
    const listHead = [...tabHeader.value?.children!]

    listHead.map((element) => {
      if (
        +element.getAttribute('uid')! === data.uid &&
        !element.classList.contains('active')
      ) {
        element.classList.add('active')
      } else if (
        +element.getAttribute('uid')! === data.uid &&
        element.classList.contains('active')
      ) {
        element.classList.remove('active')
      }
    })
  })
})

function changeTab(uid: number) {
  tabs.value = tabs.value.map((tab) => {
    return { ...tab, active: uid === tab.uid }
  })

  document.querySelectorAll(`.tab[uid]`).forEach((tabEl) => {
    if (+tabEl.getAttribute('uid')! === uid) {
      tabEl.classList.add('active')
    } else {
      tabEl.classList.remove('active')
    }
  })
}
</script>

<style scoped lang="scss">
.tabs {
  padding: 10px;
  .tabs-headers {
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
