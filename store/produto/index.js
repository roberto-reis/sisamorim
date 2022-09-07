export const state = () => ({
  produtos: [],
  pagination: {},
  produto: {},
  mensagemSucesso: '',
  mensagemErrors: {},
  mensagemFalha: {}
})

// getters
export const getters = {
  produtos: state => state.produtos,
  pagination: state => state.pagination,
  mensagemSucesso: state => state.mensagemSucesso,
  mensagemErrors: state => state.mensagemErrors,
  mensagemFalha: state => state.mensagemFalha
}

// actions
export const actions = {
  async getProdutos ({ commit }, params = {}) {
    const produtos = await this.$axios.$get('/produtos', { params })
    commit('SET_PRODUTOS', produtos.data)
    commit('SET_PAGINATION', {
      total: produtos.data.total,
      perPage: produtos.data.per_page,
      lastPage: produtos.data.last_page,
      currentPage: produtos.data.current_page
    })
  },

  async getProduto ({ commit }, uuid) {
    const produto = await this.$axios.$get(`/produtos/${uuid}`)
    commit('SET_PRODUTO', produto)
  },

  async saveProduto ({ commit }, payload) {
    await this.$axios.$post('/produtos/store', payload)
      .then((response) => {
        commit('SET_SUCESSO', response.message)
        this.$router.push('/produto')
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 422) {
          commit('SET_ERRORS', error.response.data.errors)
        } else {
          // TODO: Tratar a falhar
          commit('SET_FAILURE', error.response.data.message)
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
  SET_SUCESSO (state, payload) {
    state.mensagemSucesso = payload
  },
  SET_ERRORS (state, payload) {
    state.mensagemErrors = payload
  },
  SET_FAILURE (state, payload) {
    state.mensagemFalha = payload
  }
}
