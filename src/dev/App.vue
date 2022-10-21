<template>
  <Button :disabled="false" state="primary">
    <img src="src/assets/icon/svg/plus.svg" />
    Enabled
  </Button>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue'
import '../assets/scss/vars.scss'
</script>

<style scoped lang="scss">
.button {
  width: 120px;
  height: 40px;
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 0.5rem;
  justify-content: center;
  align-content: center;
}
</style>
