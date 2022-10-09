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
          <b-input-group class="w-100">
            <b-form-input v-model="search" contenteditable="true" placeholder="Pesquisar..." />
            <b-input-group-append>
              <b-button variant="secondary" tag="button"><fa icon="magnifying-glass" /></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>

    <b-toast
      title="Sucesso"
      solid
      variant="success"
      :visible="hasSucesso"
      :auto-hide-delay="5000"
    >
      {{ mensagemSucesso }}
    </b-toast>

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
              <tr v-for="produto in produtos" :key="produto.uuid">
                <td>{{ produto.codigo }}</td>
                <td>{{ produto.nome }}</td>
                <!-- TODO: Criar um helper para tratar casas decimais -->
                <td>{{ produto.preco_venda }}</td>
                <td>{{ produto.estoque }}</td>
                <td>{{ produto.unidade_medida }}</td>
                <td>
                  <nuxt-link :to="'/produto/edit/' + produto.uuid" class="btn btn-warning btn-sm"><fa icon="pen" /></nuxt-link>
                  <b-button size="sm" variant="danger" @click="deleteProduto(produto)"><fa icon="trash-can" /></b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </b-col>
    </b-row>

    <div>
      <Pagination :data="pagination" @change-pagination="loadPagination($event)" />
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
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      produtos: 'produto/produtos',
      pagination: 'produto/pagination',
      mensagemSucesso: 'produto/mensagemSucesso'
    }),
    hasSucesso () {
      return Object.keys(this.mensagemSucesso).length > 0
    }
  },
  watch: {
    search () {
      this.getProdutos({ search: this.search })
    }
  },
  mounted () {
    this.getProdutos(this.$route.query)
  },
  methods: {
    ...mapActions('produto', ['getProdutos']),
    loadPagination (parametros) {
      this.getProdutos(parametros)
    },
    deleteProduto (produto) {
      if (confirm('Deseja excluir o produto: ' + produto.nome)) {
        this.$store.dispatch('produto/deleteProduto', produto.uuid)
      }
    }
  }
}
</script>

<style>
</style>
