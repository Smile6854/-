<template>
  <!-- 顶部通栏 -->
  <nav>nav</nav>
  <!-- 头部组件 -->
  <header>header</header>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <RouterView/>
  </div>
  <!-- 底部组件 -->
  <footer>footer</footer>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LaYout'
})
</script>
<style scoped lang="less"></style>
