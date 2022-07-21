import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex)

const state = {
  // 登录用户信息
  userInfo: null,
  // 菜单
  menuData: {
    list: [
      {
        index: 'workbench',
        label: '工作台',
        url: '/workbench',
        icon: 'el-icon-s-data'
      }
    ],
    collapse: false
  }
}

const mutations = {
  // 切换菜单状态
  switchCollapseMenu (state, value) {
    if (value != null) {
      state.menuData.collapse = value
    } else {
      state.menuData.collapse = !state.menuData.collapse
    }
    window.localStorage.setItem('MENU_STATUS', state.menuData.collapse)
  },
  // 设置已登录的用户信息
  setUserInfo: (state, data) => {
    state.userInfo = data
  }
}
const actions = {}
const getters = {}
export default new Vuex.Store({
  modules,
  state,
  mutations,
  actions,
  getters
})
