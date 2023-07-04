<template>
  <div class="flex items-center justify-center w-full h-full">
    <button @click="startRun" class="bg-neutral-700 p-2" type="">START</button>

    <pre>{{ res }}</pre>
  </div>
</template>

<script setup>
import gql from 'graphql-tag'
definePageMeta({
  middleware: 'auth'
})


const { mutate: sendMessage } = useMutation(gql`
  mutation ($NAME: String, $PR: Float, $PU: Float, $OS: Float, $GR: ID) {
    createProduct(
      data: {
        Name: $NAME
        Price: $PR
        purchasePrice: $PU
        Ostatki: $OS
        group: $GR
        Active: true
        UnitValue: 1
      }
    ) {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`)

async function startRun () {
  const res = []
  for (const item of data.value) {
    const d = {
      NAME: item.name,
      PR: item.salePrices[0].value / 100,
      PU: item.buyPrice ? item.buyPrice.value / 100 : 0,
      OS: item.stock,
      GR: item.pathName
    }
    res.push(d)
  }
  startRun2(res)
}
async function startRun2 (data2) {
  for (const item of data2) {
    await sendMessage({
      NAME: item.NAME,
      PR: parseFloat(item.PR),
      PU: parseFloat(item.PU),
      OS: parseFloat(item.OS),
      GR: item.GR
    })
  }
  console.log('Done!')
}
</script>

<style lang="scss" scoped></style>
