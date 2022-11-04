<template>
  <div class="tabs" ref="tabContainer">
    <div class="tabs-headers">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeTab(index)"
          :class="activeTabIndex === index ? 'active' : ''"
          ref="tabHeaders"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>

    <div class="active-tabs">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const tabContainer = ref<HTMLElement>()
const tabHeaders = ref()
const tabs = ref()
const activeTabIndex = ref<number>()

onMounted(() => {
  tabs.value = [...tabContainer.value!.querySelectorAll('.tab')]
  let countClass = 0

  for (let x of tabs.value) {
    if (x.classList.contains('active')) {
      activeTabIndex.value = tabs.value.indexOf(x)
      countClass++
    }
    if (countClass > 1) {
      x.classList.remove('active')
      console.log(`You declared active ${countClass} times in tab component`)
    }
  }
})

const changeTab = (index: number) => {
  for (let x of [...tabs.value, ...tabHeaders.value]) {
    x.classList.remove('active')
  }

  tabHeaders.value[index].classList.add('active')
  tabs.value[index].classList.add('active')
}
</script>

<style scoped lang="scss">
.tabs-headers {
  ul {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: 0;
    padding: 0;
    display: flex;
    background: var(--outlined);
    color: #babdc5;
    li {
      list-style: none;
      padding: 1rem 1.25rem;
      cursor: pointer;
      opacity: 0.5;
      &.active {
        opacity: 1;
        background: #232832;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
    }
  }
}
</style>
