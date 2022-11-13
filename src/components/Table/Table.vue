<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col" v-for="column in columns" :key="column">
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody :class="['tbody', { striped: striped }]" ref="row">
      <slot />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import Sortable from 'sortablejs'
import { ref, onMounted } from 'vue'

interface Props {
  columns: Array<string>
  striped?: boolean
}

withDefaults(defineProps<Props>(), {})

const row = ref<HTMLElement>()

onMounted(() => {
  Sortable.create(row.value!, {})
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
