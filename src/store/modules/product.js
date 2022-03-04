const state = {
    productList: [],// 产品列表
}

const getter = {

}

const mutations = {
    setProductList (state, payload) {
        state.productList = payload
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getter,
    mutations,
    actions
}