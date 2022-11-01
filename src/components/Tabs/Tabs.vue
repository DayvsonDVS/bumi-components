<template>
  <div class="tabs" ref="tabContainer">
    <div class="tabs-headers">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="activeTabIndex === index ? 'active' : ''"
          @click="changeTab(index)"
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

const tabContainer = ref()
const tabHeaders = ref()
const tabs = ref()
const activeTabIndex = ref<number>()

onMounted(() => {
  tabs.value = [...tabContainer.value.querySelectorAll('.tab')]
  for (let x of tabs.value) {
    if (x.classList.contains('active')) {
      activeTabIndex.value = tabs.value.indexOf(x)
    }
  }
})

const changeTab = (index: number) => {
  activeTabIndex.value = index

  for (let x of [...tabs.value, ...tabHeaders.value]) {
    x.classList.remove('active')
  }
  tabs.value[activeTabIndex.value].classList.add('active')
  tabHeaders.value[activeTabIndex.value].classList.add('active')
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
    width: 100%;
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
