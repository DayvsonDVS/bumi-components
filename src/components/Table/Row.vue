<template>
  <tr class="drag" :uid="uid">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  uid?: number | string
}

defineProps<Props>()
</script>
