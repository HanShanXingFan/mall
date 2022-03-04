import Vue from 'vue'
import Vuex from 'vuex'
import { createLogger } from 'vuex'
import Product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Product
  },
  strict: true, // 严格模式，禁止在actions中修改state中的数据
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
