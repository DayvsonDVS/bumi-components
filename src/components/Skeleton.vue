<template>
  <div :class="['skeleton', { round }]"></div>
</template>

<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  round?: boolean
}

withDefaults(defineProps<Props>(), {
  width: '100px',
  height: '100px',
  round: false
})
</script>

<style scoped lang="scss">
.skeleton {
  &.round {
    border-radius: var(--border-radius-circle);
  }
  font-size: var(--font-size-base);
  width: v-bind(width);
  height: v-bind(height);

  background-color: #3c4457;
  background-image: linear-gradient(
    90deg,
    rgba(#45536a, 0),
    rgba(#45536a, 0.5),
    rgba(#45536a, 0)
  );
  background-size: 100px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: shine 1.3s ease infinite;
}
@keyframes shine {
  to {
    background-position: right -40px top 0;
  }
}
</style>
