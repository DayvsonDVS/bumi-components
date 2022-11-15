<template>
  <div class="content">
    <Table :drag="apiPosition" :columns="['Name', 'Email', 'Id']" striped>
      <Row uid="1">
        <Column> Dayvson</Column>
        <Column> <a href="">dayvson_dvs@hotmail.com</a></Column>
        <Column> 1</Column>
      </Row>
      <Row uid="2">
        <Column> Fulano</Column>
        <Column> <a href="">fulano@hotmail.com</a></Column>
        <Column> 2</Column>
      </Row>
      <Row uid="3">
        <Column> Maria</Column>
        <Column> <a href="">maria@hotmail.com</a></Column>
        <Column> 3</Column>
      </Row>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { Table, Column, Row, TableRowPositions } from '../index'

function apiPosition(positions: TableRowPositions) {
  console.log(positions)
}
</script>

<style scoped lang="scss">
.content {
  width: 459px;
}
</style>
