
const state = {
    product_list: [],
}

const mutations = {
    'FILL_PRODUCTLIST' (state, productlist) {
        state.product_list = productlist
    }
}

const actions = {
    fill_productlist: ({ commit }, productlist) => {
        commit('FILL_PRODUCTLIST', productlist)  
    }
}

const getters = {
    product_list(state) {
        return state.product_list
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
