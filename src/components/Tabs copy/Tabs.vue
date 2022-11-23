<template>
  <div class="tabs">
    <div class="tabs-headers">
      <ul ref="tabHeader">
        <li
          v-for="(title, index) in titles"
          :key="index"
          @click="changeTab(index)"
          :class="emitter.emitter.emit('active')! ? 'active' : ''"
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
import { useEmitter } from '@/emitter'

const emitter = useEmitter()

const tabHeader = ref<HTMLElement>()
const tabBody = ref<HTMLElement>()
const activeTabIndex = ref<number>()
const titles = ref<Array<string>>([])

onMounted(() => {
  const body = [...tabBody.value?.children!]

  loadTitles()

  body.map((element) => {
    if (
      !element.classList.contains('active') &&
      activeTabIndex.value === undefined
    ) {
      activeTabIndex.value = 0
      body[0].classList.add('active')
    }
  })
})

function loadTitles() {
  const body = [...tabBody.value?.children!]
  let countClass = 0

  body.map((element, index) => {
    titles.value?.push(element.getAttributeNode('title')?.value!)

    if (element.classList.contains('active')) {
      activeTabIndex.value = index
      ++countClass
    }

    if (countClass > 1) {
      element.classList.remove('active')
      console.log(`Tab component has ${countClass} activations`)
    }
  })
}

function changeTab(index: number) {
  const header = [...tabHeader.value?.children!]
  const body = [...tabBody.value?.children!]

  classReset()

  header[index].classList.add('active')
  body[index].classList.add('active')
}

function classReset() {
  for (let elements of [
    ...tabHeader.value?.children!,
    ...tabBody.value?.children!
  ]) {
    elements.classList.remove('active')
  }
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
