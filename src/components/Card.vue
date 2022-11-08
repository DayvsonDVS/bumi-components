<template>
  <div class="card">
    <div class="view">
      <div class="icons">
        <img src="@/assets/icon/heart.svg" />

        <div class="notification">
          <img src="@/assets/icon/notification.svg" />{{ notification }}
        </div>
      </div>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  notification?: number
}

withDefaults(defineProps<Props>(), {})
</script>

<style scoped lang="scss">
.card {
  width: auto;
  border-radius: 22px;
  background: #313640;
  .view {
    height: auto;
    background: #3c4457;
    padding: 1rem;
    border-radius: 22px;
    display: grid;
    align-content: end;
    .icons {
      cursor: pointer;
      display: grid;
      grid-template-columns: max-content max-content 1fr;
      gap: 0.8rem;
      .notification {
        width: auto;
        padding: 5px;
        background: var(--primary);
        border-radius: 8px;
        color: #fff;
        display: grid;
        grid-template-columns: repeat(2, max-content);
        gap: 0.5rem;
      }
    }
  }
  .content {
    padding: 1.8rem;
    background: #313640;
    color: #fff;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
  }
}
</style>
