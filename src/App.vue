<template>
  <div>
    <!-- 修改数据，测试是否持久化 -->
    APP {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: 'wqy' })">
      设置用户信息
    </button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'APP'
})
</script>
<style scoped lang="less"></style>
