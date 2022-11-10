<template>
  <div class="content">
    <Tag color="default" title="Tag 1" outlined />
    <Tag color="primary" title="Tag 1" outlined />
    <Tag color="success" title="Tag 1" outlined />
    <Tag color="warning" title="Tag 1" outlined />
    <Tag color="danger" title="Tag 1" outlined />
  </div>
</template>

<script setup lang="ts">
import { Tag } from '@/index'
</script>

<style scoped lang="scss">
.content {
  width: 80px;
}
</style>
