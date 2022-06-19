<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between nav_breadcrumb px-3">
          <h3>Editar Cliente</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">
                <nuxt-link to="/cliente" class="breadcrumb-item">Cliente</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                <span aria-current="location">Editar</span>
              </li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4 section_custon">
      <b-col md="12">

        <b-form class="row" @submit.prevent="onSubmit()">
          <b-form-group label="Tipo Cliente:" label-for="tipo_cliente" class="col-md-4">
            <b-form-select
              id="tipo_cliente"
              v-model="form.tipo_cliente"
              :options="tipos_clientes"
              required
            />
          </b-form-group>

          <b-form-group label="Situação:" label-for="situacao" class="col-md-4">
            <b-form-select
              id="situacao"
              v-model="form.situacao"
              :options="situacoes"
              required
            />
          </b-form-group>

          <b-form-group label="Nome*:" label-for="nome" class="col-md-4">
            <b-form-input
              id="nome"
              v-model="form.nome"
              type="text"
              placeholder="Digite o nome do cliente"
              required
            />
          </b-form-group>

          <b-form-group label="E-mail*:" label-for="email" class="col-md-4">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Digite o e-mail do cliente"
              required
            />
          </b-form-group>

          <b-form-group label="CPF:" label-for="cpf" class="col-md-4">
            <b-form-input
              id="cpf"
              v-model="form.cpf"
              type="text"
              placeholder="Digite o CPF do cliente"
            />
          </b-form-group>

          <b-form-group label="RG:" label-for="rg" class="col-md-4">
            <b-form-input
              id="rg"
              v-model="form.rg"
              type="text"
              placeholder="Digite o RG do cliente"
            />
          </b-form-group>

          <b-form-group label="Data de Nascimento:" label-for="data_nascimento" class="col-md-4">
            <b-form-input
              id="data_nascimento"
              v-model="form.data_nascimento"
              type="date"
            />
          </b-form-group>

          <b-form-group label="Telefone:" label-for="telefone" class="col-md-4">
            <b-form-input
              id="telefone"
              v-model="form.telefone"
              type="text"
              placeholder="Digite o nº telefone"
            />
          </b-form-group>

          <b-form-group label="Celular:" label-for="celular" class="col-md-4">
            <b-form-input
              id="celular"
              v-model="form.celular"
              type="text"
              placeholder="Digite o nº celular"
            />
          </b-form-group>

          <b-form-group label="CEP:" label-for="cep" class="col-md-4">
            <b-form-input
              id="cep"
              v-model="form.cep"
              type="text"
              placeholder="Digite o cep"
            />
          </b-form-group>

          <b-form-group label="Endereço:" label-for="endereco" class="col-md-4">
            <b-form-input
              id="endereco"
              v-model="form.endereco"
              type="text"
              placeholder="Qual o endereço"
            />
          </b-form-group>

          <b-form-group label="Numero:" label-for="numero" class="col-md-4">
            <b-form-input
              id="numero"
              v-model="form.numero"
              type="text"
              placeholder="Digite o nº numero"
            />
          </b-form-group>

          <b-form-group label="Complemento:" label-for="complemento" class="col-md-4">
            <b-form-input
              id="complemento"
              v-model="form.complemento"
              type="text"
              placeholder="Digite complemento"
            />
          </b-form-group>

          <b-form-group label="Bairro:" label-for="bairro" class="col-md-4">
            <b-form-input
              id="bairro"
              v-model="form.bairro"
              type="text"
              placeholder="Qual o bairro"
            />
          </b-form-group>

          <b-form-group label="Cidade:" label-for="cidade" class="col-md-4">
            <b-form-input
              id="cidade"
              v-model="form.cidade"
              type="text"
              placeholder="Qual a cidade"
            />
          </b-form-group>

          <b-form-group label="UF:" label-for="uf" class="col-md-4">
            <b-form-input
              id="uf"
              v-model="form.uf"
              type="text"
              placeholder="Digite UF"
            />
          </b-form-group>

          <b-form-group label="Observação:" label-for="observacao" class="col-md-8">
            <b-form-input
              id="observacao"
              v-model="form.observacao"
              type="text"
              placeholder="Observação"
            />
          </b-form-group>

          <b-col cols="12" class="mt-4 d-flex justify-content-end">
            <nuxt-link to="/cliente" class="btn btn-outline-danger mr-2">Sair</nuxt-link>
            <b-button type="submit" variant="success">Salvar</b-button>
          </b-col>
        </b-form>

      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  name: 'CreateProduto',
  layout: 'default',
  data () {
    return {
      form: {
        tipo_cliente: null,
        situacao: null,
        nome: '',
        email: '',
        cpf: '',
        rg: '',
        data_nascimento: '',
        telefone: '',
        celular: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        observacao: ''
      },
      tipos_clientes: [{ text: 'Selecione o tipo', value: null }, 'Pessoa Física', 'Pessoa Jurídica'],
      situacoes: [{ text: 'Selecione a situação', value: null }, 'Ativo', 'Inativo']
    }
  },
  methods: {
    onSubmit (event) {
      alert(this.form)
    }
  }
}
</script>

<style>
  .section_custon {
    background-color: #fff;
    padding: 0.8rem 1rem;
    border-radius: 0.25rem;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .section_valores {
    padding: 1rem;
    background-color: #E6EBEC;
    border-radius: 0.25rem;
  }
</style>
