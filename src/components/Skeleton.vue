<template>
  <div class="skeleton"></div>
</template>

<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  rounding?: string
}

withDefaults(defineProps<Props>(), {
  width: '100px',
  height: '100px',
  rounding: '4px'
})
</script>

<style scoped lang="scss">
.skeleton {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(rounding);
  background-color: #3c4457;
  // The shine that's going to move across the skeleton:
  background-image: linear-gradient(
    90deg,
    rgba(#45536a, 0),
    rgba(#45536a, 0.5),
    rgba(#45536a, 0)
  );
  background-size: 100px 100%; // width of the shine
  background-repeat: no-repeat; // No need to repeat the shine effect
  background-position: left -40px top 0; // Place shine on the left side, with offset on the left based on the width of the shine - see background-size
  animation: shine 1.3s ease infinite; // increase animation time to see effect in 'slow-mo'
}

@keyframes shine {
  to {
    // Move shine from left to right, with offset on the right based on the width of the shine - see background-size
    background-position: right -40px top 0;
  }
}
</style>
