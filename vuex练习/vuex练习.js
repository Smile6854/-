import { createStore } from 'vuex'
// import modulesA from './modules/modulesA'
// import modulesB from './modules/modulesB'
// A模块
const modulesA = {
  state: {
    usernmae: 'modeleA'
  },
  getters: {
    newName (state) {
      return state.usernmae + '!!!'
    }
  },
  mutations: {
    updated (state) {
      state.usernmae = 'modeleASSSS'
    }
  }
}
// B模块
const modulesB = {
  namespaced: true,
  state: {
    usernmae: 'modeleB'
  },
  getters: {
    newName (state) {
      return state.usernmae + '!!!'
    }
  },
  mutations: {
    updated (state) {
      state.usernmae = 'ls'
    }
  },
  actions: {
    updateNama (ctx) {
      setTimeout(() => {
        ctx.commit('updated')
      }, 2000)
    }
  }
}
export default createStore({
  modules: {
    modulesA,
    modulesB
  }
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
