<template>
  <div>
    <p class="test-red">这段文字应为红色（纯 CSS 测试）</p>
    <p class="test-tailwind">这段文字应有蓝色背景（Tailwind 测试）</p>
    <p class="text-green-500 font-bold">这段文字应为绿色粗体（直接使用 Tailwind 类）</p>
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

<style scoped lang="scss"></style>
