<template>
  <div class="box flex justify-center items-center h-10" @click="$router.push('/test')">
    点击跳转
  </div>
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

<style scoped lang="scss">
/* 定义变量与值 */
$bgcolor: lightblue;

/* 使用变量 */
.box {
  background-color: $bgcolor;
}
</style>
