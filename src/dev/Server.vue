<template>
  <div class="profile">
    <Skeleton width="100px" height="100px" rounding="100%" />

    <Skeleton width="80px" height="15px" rounding="100px" />

    <Skeleton width="50px" height="15px" rounding="25px" />

    <Skeleton />
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@/index'
</script>

<style scoped lang="scss">
.profile {
  display: grid;
  gap: 0.5rem;
}
</style>
