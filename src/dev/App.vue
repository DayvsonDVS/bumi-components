<template>
  <Button :disabled="true" state="warning">
    <img src="src/assets/icon/svg/plus.svg" />
    Enabled
  </Button>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue'
import '../assets/scss/vars.scss'
import '../assets/scss/main.scss'
</script>

<style lang="scss">
html {
  background: #17191d;
  .button {
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 0.5rem;
    justify-content: center;
    align-content: center;
    padding: 2px 8px;
  }
}
</style>
