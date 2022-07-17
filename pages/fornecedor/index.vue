<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between align-content-center nav_breadcrumb px-3">
          <h3>Fornecedor</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                <span aria-current="location">Fornecedor</span>
              </li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="mt-4 nav_bar">
      <b-row>
        <b-col md="7" sm="12">
          <nuxt-link to="fornecedor/create" class="btn btn-success">Adicionar Fornecedor</nuxt-link>
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
                <th>Nome</th>
                <th>Tipo</th>
                <th>CPF / CNPJ</th>
                <th>Endereço</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José Roberto Batista dos Reis</td>
                <td>Pessoa Fisica</td>
                <td>000.000.000-00</td>
                <td>Estrada Adhemar Bebiano, 3610 - Engenho da Rainha</td>
                <td>tekinforoberto@gmail.com</td>
                <td><button class="btn_status bg_status_ativo">Ativo</button></td>
                <td>
                  <nuxt-link to="/fornecedor/edit" class="btn btn-warning btn-sm"><fa icon="pen" /></nuxt-link>
                  <nuxt-link to="/fornecedor/1" class="btn btn-danger btn-sm"><fa icon="trash-can" /></nuxt-link>
                </td>
              </tr>
              <tr>
                <td>José Roberto Batista dos Reis</td>
                <td>Pessoa Jurídica</td>
                <td>00.000.000/0000-00</td>
                <td>Estrada Adhemar Bebiano, 3610 - Engenho da Rainha</td>
                <td>tekinforoberto@gmail.com</td>
                <td><button class="btn_status bg_status_inativo">Inativo</button></td>
                <td>
                  <nuxt-link to="/fornecedor/edit" class="btn btn-warning btn-sm"><fa icon="pen" /></nuxt-link>
                  <nuxt-link to="/fornecedor/1" class="btn btn-danger btn-sm"><fa icon="trash-can" /></nuxt-link>
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
