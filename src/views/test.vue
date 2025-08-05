<template>
  <div></div>
</template>

<script setup lang="ts">
import { getData } from '@/api/test'

onMounted(() => {
  getData().then((res) => {
    console.log(res)
  })
})
</script>

<style scoped></style>
