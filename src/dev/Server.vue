<template>
  <!-- <div class="content">
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
  </div> -->

  <div class="content">
    <Table filter :columns="['ID', 'Status', 'Name', 'E-mail']" striped>
      <Row uid="3">
        <Column>3 </Column>
        <Column>inativo </Column>
        <Column>Maria </Column>
        <Column>Maria@hotmail.com </Column>
      </Row>

      <Row uid="2">
        <Column>2 </Column>
        <Column>ativo </Column>
        <Column>Fulano</Column>
        <Column>Fulano1@hotmail.com </Column>
      </Row>

      <Row uid="1">
        <Column>1 </Column>
        <Column>ativo </Column>
        <Column>Dayvson</Column>
        <Column>Dayvson_dvs@hotmail.com </Column>
      </Row>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { Table, Column, Row } from '@/index'
</script>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-columns: min-content min-content;
  align-content: center;
  justify-content: center;
}
</style>
