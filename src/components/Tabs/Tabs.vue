<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.tabs {
  display: grid;
  grid-auto-flow: column;
}
</style>
