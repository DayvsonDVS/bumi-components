<template>
  <div :class="['nav-group', { 'on-route': onRoute, active: !activeArrow }]">
    <div ref="border" class="border"></div>

    <a class="title" @click="onCollapsible">
      <slot />

      <a :class="['arrow', activeArrow ? 'up' : 'down']" />
    </a>

    <div class="content" ref="collapse">
      <li
        v-for="{ title, to, disabled } in items"
        :class="{ disabled, active: currentPath === to }"
      >
        <span @click="router.push(to)">{{ title }}</span>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type Navitem = {
  to: string
  title: string
  disabled?: boolean
}

interface Props {
  items?: Array<Navitem>
}

const props = defineProps<Props>()
const onRoute = ref<Boolean>(true)
const activeArrow = ref<Boolean>(true)
const collapse = ref<HTMLElement>()
const border = ref<HTMLElement>()
const currentPath = ref(window.location.pathname)
const maxHeightCollapse = ref<number>(0)

if (props.items?.some(({ to }) => to === currentPath.value)) {
  activeArrow.value = false

  onRoute.value = true
} else {
  activeArrow.value = true

  onRoute.value = false
}

onMounted(() => {
  maxHeightCollapse.value = collapse.value?.scrollHeight!

  border.value?.setAttribute(
    'style',
    `max-height:${maxHeightCollapse.value + 26}px;`
  )
})

function onCollapsible() {
  activeArrow.value = !activeArrow.value

  border.value?.setAttribute(
    'style',
    `max-height:${maxHeightCollapse.value + 26}px;`
  )

  if (!onRoute.value && !collapse.value?.getAttribute('style')) {
    collapse.value?.setAttribute(
      'style',
      `max-height:${maxHeightCollapse.value + 26}px;`
    )
  } else if (!onRoute.value && collapse.value?.getAttribute('style')) {
    collapse.value?.removeAttribute('style')
  } else if (onRoute.value && activeArrow.value) {
    border.value?.setAttribute('style', `max-height:26px;`)

    collapse.value?.setAttribute('style', `max-height:0px;`)
  } else if (onRoute.value && !activeArrow.value) {
    collapse.value?.setAttribute(
      'style',
      `max-height:${maxHeightCollapse.value + 26}px;`
    )
  }
}
</script>

<style scoped lang="scss">
.nav-group {
  position: relative;
  border-radius: 15px;
  color: #fff;
  overflow: hidden;
  height: max-content;
  transition: all 0.3s ease-out;
  .border {
    position: absolute;
    top: 11px;
    height: 0;
    width: 4px;
    box-shadow: 0px 0 4px var(--primary);
    border-radius: 15px;
    transition: all 0.3s ease-out;
  }
  .title {
    padding: 1rem 6rem 1rem 2.2rem;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: 100;
    text-decoration: none;
    display: grid;
    grid-auto-flow: column;
    gap: 0.9rem;
    align-items: center;
    justify-items: left;
    width: max-content;
    .arrow {
      border: solid #fff;
      border-width: 0 2px 2px 0;
      padding: 3px;
      transition: all 0.3s ease-out;
      &.up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }
      &.down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }
  .content {
    padding: 0rem 4rem 0rem 4rem;
    display: grid;
    max-height: 0;
    gap: 0.4rem;
    transition: max-height 0.3s ease-out;
    &:last-child {
      &::after {
        content: '';
        height: 8px;
      }
    }
    li {
      width: max-content;
      color: #babdc5;
      transition: all 0.3s ease-out;
      &::marker {
        font-size: 28px;
      }
      &.active {
        &::marker {
          color: var(--primary);
        }
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
        font-size: 15px;
        font-weight: 100;
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
  &.on-route {
    background: #232832;
    .border {
      background: var(--primary);
      height: 100%;
      transition: all 0.3s ease-out;
    }
    .title {
      color: var(--primary);
      a {
        border: solid var(--primary);
        border-width: 0 2px 2px 0;
      }
    }
    .content {
      max-height: 100%;
      transition: all 0.3s ease-out;
    }
  }
  &.active {
    background: #232832;
    transition: all 0.3s ease-out;
  }
  &:hover {
    background: #232832;
    transition: all 0.3s ease-out;
  }
}
</style>
