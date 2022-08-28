<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between align-content-center nav_breadcrumb px-3">
          <h3>Produto</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                <span aria-current="location">Produto</span>
              </li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="mt-4 nav_bar">
      <b-row>
        <b-col md="7" sm="12">
          <nuxt-link to="produto/create" class="btn btn-success">Adicionar Produto</nuxt-link>
          <b-button>Exportar</b-button>
        </b-col>

        <b-col md="5" sm="12">
          <b-form inline>
            <b-input-group class="w-100">
              <b-form-input />
              <b-input-group-append>
                <b-button variant="secondary"><fa icon="magnifying-glass" /></b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>
    </div>

    <b-row class="row mt-4">
      <b-col md="12">
        <div class="table-responsive table-custom">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Vr. varejo</th>
                <th>Estoque</th>
                <th>Unidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="produto in produtos.data" :key="produto.uuid">
                <td>{{ produto.codigo }}</td>
                <td>{{ produto.nome }}</td>
                <td>{{ produto.preco_custo }}</td>
                <td>{{ produto.estoque }}</td>
                <td>{{ produto.unidade_medida }}</td>
                <td>
                  <nuxt-link to="/produto/edit" class="btn btn-warning btn-sm"><fa icon="pen" /></nuxt-link>
                  <nuxt-link to="/produto/1" class="btn btn-danger btn-sm"><fa icon="trash-can" /></nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </b-col>
    </b-row>

    <div>
      <Pagination :data="pagination" @change-page="loadPage($event)" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProdutoPage',
  layout: 'default',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      produtos: 'produto/produtos',
      pagination: 'produto/pagination'
    })
  },
  mounted () {
    this.getProdutos()
  },
  methods: {
    ...mapActions('produto', ['getProdutos']),
    loadPage (page) {
      this.getProdutos(this.$route.query)
    }
  }
}
</script>

<style>
</style>
