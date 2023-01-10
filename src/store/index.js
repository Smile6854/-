import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

export default createStore({
  modules: {
    cart,
    category,
    user
  },
  plugins: [createPersistedState({
    key: 'erabbit-client-pc-store',
    paths: ['user', 'cart']
  })]
})

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
// export default createStore({
//   state: {
//     userName: 'zs'
//   },
//   getters: {
//     newName (state) {
//       return state.userName + '!!!'
//     }
//   },
//   mutations: {
//     updated (state) {
//       state.userName = 'ls'
//     }
//   },
//   actions: {
//     updateNama (ctx) {
//       setTimeout(() => {
//         ctx.commit('updated')
//       }, 2000)
//     }
//   },
//   modules: {}
// })
