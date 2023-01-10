<template>
  <div>App</div>
  <p>123</p>
  <div>
    <!-- 1.使用根模块state的数据 -->
    <p>{{ $store.state.userName }}</p>
    <!-- 2.使用根模块的getters -->
    <p>{{ $store.getters.newName }}</p>
    <p>{{ $store.getters['newName'] }}</p>
    <button @click="updateName" >修改</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'APPa',
  setup () {
    // 使用vuex的仓库
    const store = useStore()
    // 1.使用根模块state的数据
    console.log(store.state.userName)
    // 2.使用根模块getters的数据
    console.log(store.getters.newName)
    // 3.提交根模块的mutations函数
    // store.commit('updated')
    // const updateName = () => {
    //   store.commit('updated')
    // }
    // 4.调用根模块actions函数
    const updateName = () => {
      store.dispatch('updateNama')
    }
    return {
      updateName
    }
  }
})
</script>
<style scoped lang="less"></style>
