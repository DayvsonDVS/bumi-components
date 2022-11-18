<template>
  <div class="content">
    <button @click="notification">ok</button>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/onNotifications'
import { onMounted } from 'vue'

onMounted(() => {
  notification()
})
function notification() {
  useNotifications({
    title: 'Title',
    text: 'Sample text',
    color: 'success',
    position: 'bottom-right',
    speed: '0.3s',
    // duration: 3000,
    ignoreDuplicates: false
  })
}
</script>

<style scoped lang="scss"></style>
