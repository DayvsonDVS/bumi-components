<template>
  <Button color="primary"> Enabled </Button>
</template>

<script setup lang="ts">
import { Button } from '@/index'
</script>

<style scoped lang="scss">
.button {
  width: 120px;
  height: 40px;
  display: grid;
  grid-template-columns: max-content;
  gap: 0.5rem;
  justify-content: center;
  align-content: center;
}
</style>
