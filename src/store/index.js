
// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'
// 使用Vuex
Vue.use(Vuex)

// 创建store,并导出store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
