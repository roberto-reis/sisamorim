export const state = () => ({
  produtos: [],
  pagination: {},
  produto: {}
})

// getters
export const getters = {
  produtos: state => state.produtos,
  pagination: state => state.pagination
}

// actions
export const actions = {
  async getProdutos ({ commit }, params = {}) {
    console.log(params)
    const produtos = await this.$axios.$get('/produtos', { params })
    commit('SET_PRODUTOS', produtos.data)
    commit('SET_PAGINATION', {
      total: produtos.data.total,
      perPage: produtos.data.per_page,
      lastPage: produtos.data.last_page,
      currentPage: produtos.data.current_page,
      from: produtos.data.from,
      to: produtos.data.to,
      links: produtos.data.links
    })
  },
  async getProduto ({ commit }, uuid) {
    const produto = await this.$axios.$get(`/produtos/${uuid}`)
    commit('SET_PRODUTO', produto)
  }
}

// mutations
export const mutations = {
  SET_PRODUTOS (state, payload) {
    state.produtos = payload
  },
  SET_PAGINATION (state, payload) {
    state.pagination = payload
  },
  SET_PRODUTO (state, payload) {
    state.produto = payload
  }
}
