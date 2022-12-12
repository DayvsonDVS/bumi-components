<template>
  <div :class="['nav-group', { active: onRoute, expanded: expanded }]">
    <a class="title" @click="onCollapsible">
      <slot />
      <span class="arrow" />
    </a>

    <div class="content">
      <li
        v-for="{ title, to, disabled } in items"
        :class="{ disabled, active: route.path === to }"
      >
        <RouterLink :to="to"> {{ title }} </RouterLink>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

type NavItem = {
  to: string
  title: string
  disabled?: boolean
}

interface Props {
  items?: Array<NavItem>
}

const props = defineProps<Props>()

const expanded = ref<Boolean>(false)
const route = useRoute()

const onRoute = computed(() => {
  if (props.items?.some(({ to }) => to === route.path)) {
    expanded.value = true
  }
  return props.items?.some(({ to }) => to === route.path) as boolean
})

watch(
  () => onRoute.value,
  (active) => {
    if (!active) {
      expanded.value = false
    }
  }
)

function onCollapsible() {
  expanded.value = !expanded.value
}
</script>

<style scoped lang="scss">
.nav-group {
  position: relative;
  border-radius: 15px;
  color: #fff;
  overflow: hidden;
  height: 50px;
  transition: all 0.3s ease-out;
  .title {
    padding: 1rem 6rem 1rem 2.2rem;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: var(--font-regular);
    text-decoration: none;
    display: grid;
    grid-auto-flow: column;
    gap: 0.9rem;
    align-items: center;
    justify-items: left;
    width: max-content;
    transition: all 0.3s ease-out;
    .arrow {
      border: solid #fff;
      border-width: 0 2px 2px 0;
      padding: 3px;
      transition: all 0.3s ease-out;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
  .content {
    padding: 0rem 4rem;
    display: grid;
    gap: 0.5rem;
    &:last-child {
      &::after {
        content: '';
        height: 10px;
        position: initial;
      }
    }
    li {
      width: max-content;
      color: #babdc5;
      &::marker {
        font-size: 28px;
      }
      &.active {
        &::marker,
        a {
          color: var(--primary);
        }
        &:hover {
          color: var(--primary);
          a {
            color: var(--primary);
          }
        }
      }
      &.disabled {
        opacity: 0.2;
        pointer-events: none;
      }
      a {
        text-decoration: none;
        color: #babdc5;
        font-size: 16px;
        font-weight: var(--font-regular);
        position: relative;
        top: -3px;
        margin-left: -10px;
      }
      &:hover {
        color: #fff;
        transition: all 0.3s ease-out;
        a {
          color: #fff;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
  &.active {
    background: #232832;
    transition: all 0.3s ease-out;
    &::before {
      content: '';
      position: absolute;
      height: calc(100% - 22px);
      top: 11px;
      width: 4px;
      border-radius: 15px;
      background: var(--primary);
      transition: all 0.3s ease-out;
    }
    .title {
      color: var(--primary);
      .arrow {
        border: solid var(--primary);
        border-width: 0 2px 2px 0;
      }
    }
  }
  &.expanded {
    background: #232832;
    transition: all 0.3s ease-out;
    height: 100%;
    .title {
      .arrow {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        position: relative;
        bottom: -2px;
      }
    }
  }
  &:hover {
    background: #232832;
    transition: all 0.3s ease-out;
  }
}
</style>
