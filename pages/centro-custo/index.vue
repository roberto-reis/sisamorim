<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between nav_breadcrumb px-3">
          <h3>Centro de Custo</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">home</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                <span aria-current="location">centro-custo</span>
              </li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="mt-4 nav_bar">
      <b-row>
        <b-col md="7" sm="12">
          <b-button ref="btnShow" variant="success" @click="showModalCreate()">Adicionar Centro de Custo</b-button>
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
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José Roberto Batista dos Reis</td>
                <td>
                  <b-button class="btn btn-warning btn-sm" @click="showModalEdit()"><fa icon="pen" /></b-button>
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

    <div>

      <b-modal id="modal-centro-custo" hide-footer>
        <template #modal-title>
          {{ titleModal }}
        </template>
        <div>
          <b-form @submit.prevent="onSubmit">

            <b-form-group id="nome" label="Nome:" label-for="nome">
              <b-form-input
                id="nome"
                v-model="form.nome"
                placeholder="Digite o nome do Centro de Custo"
                required
              />
            </b-form-group>

            <div class="d-flex justify-content-end">
              <b-button class="mr-2" variant="outline-danger" @click="hideModal()">Cancelar</b-button>
              <b-button type="submit" variant="success">Salvar</b-button>
            </div>
          </b-form>
        </div>
      </b-modal>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CentroCustoPage',
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
      ],
      titleModal: 'Cadastrar de Cliente',
      form: {
        nome: ''
      }
    }
  },
  methods: {
    onSelect (value) {
      console.log(value)
    },
    onSubmit () {
      console.log(this.form)
    },
    resetModal () {
      this.form.nome = ''
    },
    hideModal () {
      this.resetModal()
      this.$root.$emit('bv::hide::modal', 'modal-centro-custo')
    },
    showModalCreate () {
      this.titleModal = 'Cadastrar de Cliente'
      this.$root.$emit('bv::show::modal', 'modal-centro-custo')
    },
    showModalEdit (id) {
      this.titleModal = 'Editar de Cliente'
      this.$root.$emit('bv::show::modal', 'modal-centro-custo')
    }
  }
}
</script>

<style>
  .btn_status_cliente {
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    padding: 0.12rem 0.5rem;
  }
  .bg_status_cliente_ativo {
    background-color: #198754;
  }
  .bg_status_cliente_inativo {
    background-color: #f44336;
  }
</style>
