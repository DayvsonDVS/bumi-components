<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  background: gray;
  width: 80px;
  height: 40px;
  color: #fff;
  border-radius: 15px;
}
</style>
