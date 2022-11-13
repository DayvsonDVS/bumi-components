<template>
  <div class="content">
    <Table :columns="['Name', 'Email', 'Id']" striped>
      <Row>
        <Column> Dayvson</Column>
        <Column> <a href="">dayvson_dvs@hotmail.com</a></Column>
        <Column> 1</Column>
      </Row>
      <Row>
        <Column> Fulano</Column>
        <Column> <a href="">fulano@hotmail.com</a></Column>
        <Column> 2</Column>
      </Row>
      <Row>
        <Column> Maria</Column>
        <Column> <a href="">maria@hotmail.com</a></Column>
        <Column> 3</Column>
      </Row>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { Table, Column, Row } from '../index'
</script>

<style scoped lang="scss">
.content {
  width: 459px;
}
</style>
