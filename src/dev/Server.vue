<template>
  <div class="content">
    <Sidebar minimize>
      <h1>Header</h1>
      <NavItem to="/profile"> Profile </NavItem>

      <NavGroup
        :items="[
          { to: '/general', title: 'General' },
          { to: '/password', title: 'Password' },
          { to: '/notifications', disabled: true, title: 'Notifications' }
        ]"
      >
        <img src="@/dev/assets/icons/gear.svg" alt="" />
        Settings
      </NavGroup>

      <h1>Footer</h1>
    </Sidebar>
  </div>
</template>

<script setup lang="ts">
import { Sidebar, NavItem, NavGroup } from '@/index'
</script>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-columns: min-content min-content;
  align-content: center;
}
</style>
