import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems:[]
  },
  mutations: {
    async loadMenu(){
      this.state.menuItems = await Api.getMenuItems()
    },
  },
  actions: {
    postOrder(){
      return Api.postOrder()
    },
  },
  modules: {
  },
  getters: {
    getMenuItems: state => {
      return state.menuItems
    }
  }
})
