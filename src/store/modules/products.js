
const state = {
    product_list: [],
    product: { },
}

const mutations = {
    'FILL_PRODUCTLIST' (state, productlist) {
        state.product_list = productlist
    },
    'FILL_PRODUCT' (state, product) {
        state.product = product
    }
}

const actions = {
    fill_productlist: ({ commit }, productlist) => {
        commit('FILL_PRODUCTLIST', productlist)
    },
    fill_product({ commit }, product) {
        commit('FILL_PRODUCT', product)
    },
}

const getters = {
    product_list(state) {
        return state.product_list
    },
    product(state) {
        return state.product
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
