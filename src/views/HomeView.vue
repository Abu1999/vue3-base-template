<template>
  <div class="bg-red-400" @click="$router.push('/test')">111</div>
</template>

<script setup lang="ts">
import { getData } from '@/api/home'

onMounted(() => {
  getData()
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})
</script>
