<template>
  <table class="table">
    <thead>
      <tr ref="hasFilter">
        <th
          :class="['filter', { active: filter }]"
          scope="col"
          v-for="column in columns"
          :key="column"
        >
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
  filter?: boolean
  striped?: boolean
  drag?: boolean | ((positions: TableRowPositions) => void)
}

const props = defineProps<Props>()
const tbody = ref<HTMLElement>()
const hasFilter = ref<HTMLElement>()

onMounted(() => {
  const listColumn = [...hasFilter.value?.children!]
  const listRow = [...tbody.value?.children!]

  listColumn.map((el, index) => {
    if (listColumn) {
      el.addEventListener('click', () => {
        listRow.map(() => {
          if (props.filter) {
            sortTable(index)
            clearFilter(listColumn)
            isFiltered(el)
          }
        })
      })
    }
  })

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

function isFiltered(element: Element) {
  element.classList.add('filtered')
}

function clearFilter(listColumn: Element[]) {
  listColumn.map((el) => {
    if (el.classList.contains('filtered')) {
      el.classList.remove('filtered')
    }
  })
}

function sortTable(columnIndex: number) {
  const table = document.querySelector('table')
  const rows = Array.from(table?.querySelectorAll('tbody tr') || [])

  rows.sort((a, b) => {
    const cellA = a.querySelectorAll('th')[columnIndex].textContent || ''
    const cellB = b.querySelectorAll('th')[columnIndex].textContent || ''
    return cellA.localeCompare(cellB)
  })

  for (let i = 0; i < rows.length; i++) {
    table?.querySelector('tbody')?.appendChild(rows[i])
  }
}
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  background: #2b2f39;
  color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  border-spacing: 0;
  @include for-size('phone') {
    padding: 1rem;
  }
  thead {
    text-align: left;
    tr {
      position: relative;
      th {
        gap: 0.4rem;
        font-weight: var(--font-regular);
        background: #1c2029;
        padding: 0.75rem;
        &:first-child {
          border-bottom-left-radius: 12px;
          border-top-left-radius: 12px;
        }
        &:last-child {
          border-bottom-right-radius: 12px;
          border-top-right-radius: 12px;
        }
        &.filter {
          &.active {
            cursor: pointer;
            &::after {
              content: '';
              position: absolute;
              top: 50%;
              margin-left: 0.6rem;
              transform: translate(-50%, -50%);
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-bottom: 5px solid #fff;
            }
            &.filtered {
              &::after {
                content: '';
                position: absolute;
                top: 50%;
                margin-left: 0.6rem;
                transform: translate(-50%, -50%) rotate(180deg);
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid #fff;
              }
            }
          }
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
        font-weight: var(--font-regular);
        padding: 0.75rem;
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
