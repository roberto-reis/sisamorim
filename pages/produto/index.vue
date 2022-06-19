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
              <tr>
                <td>2081485881108</td>
                <td>Quadro Aro 29 Alumínio Bicicleta Mtb Cores Bike</td>
                <td>R$ 100.0000,00</td>
                <td>5000,00</td>
                <td>UN</td>
                <td>
                  <nuxt-link to="/produto/edit" class="btn btn-warning btn-sm"><fa icon="pen" /></nuxt-link>
                  <nuxt-link to="/produto/1" class="btn btn-danger btn-sm"><fa icon="trash-can" /></nuxt-link>
                </td>
              </tr>
              <tr>
                <td>2081485881108</td>
                <td>Quadro Aro 29 Alumínio Bicicleta Mtb Cores Bike</td>
                <td>R$ 100.0000,00</td>
                <td>5000,00</td>
                <td>UN</td>
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

    <b-row>
      <b-col cols="6">
        <div class="select_Per_page">
          <b-form-select v-model="perPageSelected" :options="options" @change="onSelect(perPageSelected)" />
        </div>
      </b-col>
      <b-col cols="6" class="d-flex justify-content-end">
        <b-pagination-nav
          v-model="currentPage"
          :number-of-pages="20"
          base-url="?page="
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ProdutoPage',
  layout: 'default',
  data () {
    return {
      currentPage: 1,
      perPageSelected: 10,
      options: [
        { value: 10, text: '10' },
        { value: 20, text: '20' },
        { value: 30, text: '30' },
        { value: 50, text: '50' },
        { value: 100, text: '100' }
      ]
    }
  },
  methods: {
    onSelect (value) {
      console.log(value)
    }
  }
}
</script>

<style>
</style>
