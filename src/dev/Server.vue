<template>
  <div class="content">
    <Button color="success" outline @click="notification">Enabled</Button>
    <Button color="success" @click="notification">Enabled </Button>
  </div>

  <br />

  <Skeleton height="40px" width="80px" rounding="10px" />

  <br />

  <Tag title="Tag" color="success"></Tag>

  <br />

  <Table :columns="['ID', 'Name', 'E-mail']" :drag="updatePositions" striped>
    <Row uid="1">
      <Column>1 </Column>
      <Column>Dayvson </Column>
      <Column>Dayvson_dvs@hotmail.com </Column>
    </Row>
    <Row uid="2">
      <Column>2 </Column>
      <Column>Fulano </Column>
      <Column>Fulano@hotmail.com </Column>
    </Row>
  </Table>

  <br />

  <Tabs>
    <Tab title="Tab1" active>
      <h1>Tab1</h1>
      <p>teste</p>
    </Tab>
    <Tab title="Tab2">
      <h1>Tab2</h1>
      <p>teste</p>
    </Tab>
  </Tabs>
</template>

<script setup lang="ts">
import {
  Button,
  useNotifications,
  Skeleton,
  Tag,
  Table,
  Column,
  Row,
  TableRowPositions,
  Tabs,
  Tab
} from '@/index'
import { onMounted } from 'vue'

onMounted(() => {
  notification()
})
function notification() {
  useNotifications({
    title: 'An example text alert lorem ipsum. ',
    text: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.`,
    color: 'danger',
    position: 'bottom-right',
    speed: '1.3s',
    // duration: 3000,
    ignoreDuplicates: false,
    closeOnClick: true
  })
}
function updatePositions(positions: TableRowPositions) {
  console.log(positions)
}
</script>
