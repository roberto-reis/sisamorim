export const state = () => ({
  produtos: [],
  pagination: {},
  produto: {},
  mensagemSucesso: '',
  mensagemErrors: {}
})

// getters
export const getters = {
  produtos: state => state.produtos,
  produto: state => state.produto,
  pagination: state => state.pagination,
  mensagemSucesso: state => state.mensagemSucesso,
  mensagemErrors: state => state.mensagemErrors
}

// actions
export const actions = {
  async getProdutos ({ commit }, params = {}) {
    const produtos = await this.$axios.$get('/produtos', { params })
    commit('SET_PRODUTOS', produtos.data.data)
    commit('SET_PAGINATION', {
      total: produtos.data.total,
      perPage: produtos.data.per_page,
      lastPage: produtos.data.last_page,
      currentPage: produtos.data.current_page
    })
  },

  async getProduto ({ commit }, uuid = '') {
    await this.$axios.$get(`/produtos/${uuid}/edit`)
      .then((response) => {
        commit('SET_PRODUTO', response.data)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.$router.push('/produto')
        } else {
          // TODO: Tratar a falhar
          console.error(error)
        }
      })
  },

  async saveProduto ({ commit }, payload) {
    await this.$axios.$post('/produtos/store', payload)
      .then((response) => {
        commit('SET_SUCESSO', response.message)
        this.$router.push('/produto')
      })
      .catch((error) => {
        if (error.response.status === 422) {
          commit('SET_ERRORS', error.response.data.errors)
        } else {
          // TODO: Tratar a falhar
          console.error(error)
        }
      })
  },

  async updateProduto ({ commit }, payload) {
    await this.$axios.$put(`/produtos/${payload.uuid}/update`, payload)
      .then((response) => {
        commit('SET_SUCESSO', response.message)
        this.$router.push('/produto')
      })
      .catch((error) => {
        if (error.response.status === 422) {
          commit('SET_ERRORS', error.response.data.errors)
        } else {
          // TODO: Tratar a falhar
          console.error(error)
        }
      })
  },

  async deleteProduto ({ commit }, uuid = '') {
    await this.$axios.$delete(`/produtos/${uuid}/delete`)
      .then((response) => {
        commit('DELETE_PRODUTO', uuid)
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 404) {
          this.$router.push('/produto')
        } else {
          // TODO: Tratar a falhar
          console.error(error)
        }
      })
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
  },
  DELETE_PRODUTO (state, produtoId) {
    const produtos = state.produtos.filter(produto => produto.uuid !== produtoId)
    state.produtos = produtos
  },
  SET_PRODUTO_PRECO_CUSTO (state, payload) {
    state.produto.preco_custo = payload
  },
  SET_PRODUTO_PERCENTUAL_LUCRO (state, payload) {
    state.produto.pecentual_lucro = payload
  },
  SET_PRODUTO_PRECO_VENDA (state, payload) {
    state.produto.preco_venda = payload
  },
  SET_SUCESSO (state, payload) {
    state.mensagemSucesso = payload
  },
  SET_ERRORS (state, payload) {
    state.mensagemErrors = payload
  }
}
