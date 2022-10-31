<template>
  <div class="tabs">
    <slot />
  </div>
</template>
<script setup lang="ts">
import '@/assets/scss/vars.scss'
</script>

<style scoped lang="scss">
.tabs {
  display: grid;
  grid-auto-flow: column;
}
</style>
