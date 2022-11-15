<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col" v-for="column in columns" :key="column">
          {{ column }}
        </th>
      </tr>
    </thead>

    <tbody :class="['tbody', { striped: striped }]" ref="tbody">
      <slot />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import Sortable from 'sortablejs'
import { ref, onMounted } from 'vue'
import { TableRowPositions } from '@/types'

interface Props {
  columns: Array<string>
  striped?: boolean
  drag?: boolean | ((positions: TableRowPositions) => void)
}

const props = defineProps<Props>()
const tbody = ref<HTMLElement>()

onMounted(() => {
  if (!props.drag) return

  Sortable.create(tbody.value!, {
    onEnd() {
      if (typeof props.drag === 'function') {
        let positions: TableRowPositions = []

        tbody.value!.querySelectorAll('tr').forEach((row, index) => {
          positions.push({
            uid: row.getAttribute('uid') || 'unknown',
            position: index + 1
          })
        })

        props.drag(positions)
      }
    }
  })
})
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  background: #2b2f39;
  color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  border-spacing: 0;
  thead {
    text-align: left;
    tr {
      th {
        background: #1c2029;
        padding: 1rem;
        &:first-child {
          border-bottom-left-radius: 12px;
          border-top-left-radius: 12px;
        }
        &:last-child {
          border-bottom-right-radius: 12px;
          border-top-right-radius: 12px;
        }
      }
    }
  }
  .tbody {
    text-align: left;
    &.striped {
      :deep(tr):nth-child(even) {
        background: #232832;
      }
    }
    :deep(tr) {
      th {
        padding: 1rem;
        &:first-child {
          border-bottom-left-radius: 12px;
          border-top-left-radius: 12px;
        }
        &:last-child {
          border-bottom-right-radius: 12px;
          border-top-right-radius: 12px;
        }
      }
    }
  }
}
</style>
