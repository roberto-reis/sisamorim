<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between nav_breadcrumb px-3">
          <h3>Clientes</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                <span aria-current="location">Clientes</span>
              </li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="mt-4 nav_bar">
      <b-row>
        <b-col md="7" sm="12">
          <nuxt-link to="cliente/create" class="btn btn-success">Adicionar Cliente</nuxt-link>
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
                <th>CPF/CNPJ</th>
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
                <td>
                  <button class="btn_status bg_status_ativo">Ativo</button>
                </td>
                <td>
                  <nuxt-link to="/cliente/edit" class="btn btn-warning btn-sm"><fa icon="pen" /></nuxt-link>
                  <nuxt-link to="/cliente/1" class="btn btn-danger btn-sm"><fa icon="trash-can" /></nuxt-link>
                </td>
              </tr>
              <tr>
                <td>Joseane Cabral Amorim</td>
                <td>Pessoa Jurídica</td>
                <td>00.000.000/0000-00</td>
                <td>Estrada Adhemar Bebiano, 3610 - Engenho da Rainha</td>
                <td>joseanetekinfor@gmail.com</td>
                <td>
                  <button class="btn_status bg_status_inativo">Inativo</button>
                </td>
                <td>
                  <nuxt-link to="/cliente/edit" class="btn btn-warning btn-sm"><fa icon="pen" /></nuxt-link>
                  <nuxt-link to="/cliente/1" class="btn btn-danger btn-sm"><fa icon="trash-can" /></nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </b-col>
    </b-row>

    <Pagination />
  </div>
</template>

<script>
export default {
  name: 'ClientePage',
  layout: 'default'
}
</script>

<style>

</style>
