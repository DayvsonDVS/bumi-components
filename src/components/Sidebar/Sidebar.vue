<template>
  <div class="sidebar">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-auto-rows: auto;
  gap: 1rem;
  padding: 1rem;
  background: #313640;
  width: max-content;
  min-height: 100vh;
  align-content: baseline;
}
</style>
