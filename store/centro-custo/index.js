export const state = () => ({
  centroCustos: [],
  pagination: {},
  mensagem: {}
})

// getters
export const getters = {
  centroCustos: state => state.centroCustos,
  pagination: state => state.pagination
}

// actions
export const actions = {
  async getCentroCustos ({ commit }, params = { with_paginate: 0 }) {
    const centroCustos = await this.$axios.$get('/centro-custo', { params })
    commit('SET_CENTRO_CUSTO', centroCustos.data)
  }
}

// mutations
export const mutations = {
  SET_CENTRO_CUSTO (state, payload) {
    state.centroCustos = payload
  },
  SET_PAGINATION (state, payload) {
    state.pagination = payload
  },
  SET_MENSAGEM (state, payload) {
    state.mensagem = payload
  }
}
