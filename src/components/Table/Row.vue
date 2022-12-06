<template>
  <tr class="drag" :uid="uid">
    <slot />
  </tr>
</template>

<script setup lang="ts">
interface Props {
  uid?: number | string
}

defineProps<Props>()
</script>
