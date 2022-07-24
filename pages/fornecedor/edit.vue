<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between nav_breadcrumb px-3">
          <h3>Editar Fornecedor</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">home</nuxt-link>
              </li>
              <li class="breadcrumb-item">
                <nuxt-link to="/fornecedor" class="breadcrumb-item">fornecedor</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                <span aria-current="location">editar</span>
              </li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4 section_custon">
      <b-col md="12">

        <b-form class="row" @submit.prevent="onSubmit()">
          <b-form-group label="Tipo Fornecedor:" label-for="tipo_fornecedor" class="col-md-4">
            <b-form-select
              id="tipo_fornecedor"
              v-model="form.tipo_fornecedor"
              :options="tipo_fornecedor"
              required
              @change="onChangeTipoFornecedo"
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

          <b-form-group label="Nome ou Razão social*:" label-for="nome" class="col-md-4">
            <b-form-input
              id="nome"
              v-model="form.nome"
              type="text"
              placeholder="Digite o nome do fornecedor"
              required
            />
          </b-form-group>

          <b-form-group label="E-mail*:" label-for="email" class="col-md-4">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Digite o e-mail do fornecedor"
              required
            />
          </b-form-group>

          <b-form-group v-if="isPessoaJuridica" label="CNPJ:" label-for="cnpj" class="col-md-4">
            <b-form-input
              id="cnpj"
              v-model="form.cnpj"
              type="text"
              placeholder="Digite o cnpj do fornecedor"
            />
          </b-form-group>

          <b-form-group v-if="isPessoaFisica" label="CPF:" label-for="cpf" class="col-md-4">
            <b-form-input
              id="cpf"
              v-model="form.cpf"
              type="text"
              placeholder="Digite o CPF do fornecedor"
            />
          </b-form-group>

          <b-form-group v-if="isPessoaJuridica" label="Inscarição Estadual:" label-for="inscricao_estadual" class="col-md-4">
            <b-form-input
              id="inscricao_estadual"
              v-model="form.inscricao_estadual"
              type="text"
              placeholder="Digite a Inscarição Estadual"
            />
          </b-form-group>

          <b-form-group v-if="isPessoaFisica" label="RG:" label-for="rg" class="col-md-4">
            <b-form-input
              id="rg"
              v-model="form.rg"
              type="text"
              placeholder="Digite o RG do fornecedor"
            />
          </b-form-group>

          <b-form-group v-if="isPessoaJuridica" label="Inscrição Municipal:" label-for="inscricao_municipal" class="col-md-4">
            <b-form-input
              id="inscricao_municipal"
              v-model="form.inscricao_municipal"
              type="text"
              placeholder="Digite a Inscarição Municipal"
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

          <b-col md="8" sm="12" class="mt-4">
            <div class="section_dados_bancarios">
              <h5>Dados Bancário</h5>
              <b-row>
                <b-form-group label="Banco:" label-for="banco" class="col-md-8">
                  <b-form-input
                    id="banco"
                    v-model="form.banco"
                    type="text"
                    placeholder="Ex.: Banco do Brasil"
                  />
                </b-form-group>
                <b-form-group label="Tipo da Conta:" label-for="tipo_conta" class="col-md-4">
                  <b-form-input
                    id="tipo_conta"
                    v-model="form.tipo_conta"
                    type="text"
                    placeholder="Ex.: Conta Corrente"
                  />
                </b-form-group>
                <b-form-group label="Agencia Nº:" label-for="agencia_numero" class="col-md-3">
                  <b-form-input
                    id="agencia"
                    v-model="form.agencia"
                    type="text"
                    placeholder="Nº Agencia"
                  />
                </b-form-group>
                <b-form-group label="Digito:" label-for="digito_agencia" class="col-md-3">
                  <b-form-input
                    id="digito_agencia"
                    v-model="form.digito_agencia"
                    type="text"
                    placeholder="digito"
                  />
                </b-form-group>
                <b-form-group label="Conta Nº:" label-for="conta" class="col-md-3">
                  <b-form-input
                    id="conta"
                    v-model="form.conta"
                    type="text"
                    placeholder="Nº Conta"
                  />
                </b-form-group>
                <b-form-group label="Digito:" label-for="digito_conta" class="col-md-3">
                  <b-form-input
                    id="digito_conta"
                    v-model="form.digito_conta"
                    type="text"
                    placeholder="digito"
                  />
                </b-form-group>
              </b-row>
            </div>
          </b-col>

          <b-col cols="12" class="mt-4 d-flex justify-content-end">
            <nuxt-link to="/fornecedor" class="btn btn-outline-danger mr-2">Sair</nuxt-link>
            <b-button type="submit" variant="success">Salvar</b-button>
          </b-col>
        </b-form>

      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  name: 'EditFornecedor',
  layout: 'default',
  data () {
    return {
      form: {
        tipo_fornecedor: null,
        situacao: null,
        nome: '',
        email: '',
        cpf: '',
        cnpj: '',
        inscricao_estadual: '',
        inscricao_municipal: '',
        rg: '',
        telefone: '',
        celular: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        observacao: '',
        banco: '',
        tipo_conta: '',
        agencia: '',
        digito_agencia: '',
        conta: '',
        digito_conta: ''
      },
      tipo_fornecedor: [{ text: 'Selecione o tipo', value: null }, 'Pessoa Física', 'Pessoa Jurídica'],
      situacoes: [{ text: 'Selecione a situação', value: null }, 'Ativo', 'Inativo'],
      isPessoaFisica: true,
      isPessoaJuridica: false
    }
  },
  methods: {
    onSubmit (event) {
      alert(this.form)
    },
    onChangeTipoFornecedo (event) {
      if (this.form.tipo_fornecedor === 'Pessoa Física') {
        this.isPessoaFisica = true
        this.isPessoaJuridica = false
      } else if (this.form.tipo_fornecedor === 'Pessoa Jurídica') {
        this.isPessoaFisica = false
        this.isPessoaJuridica = true
      }
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

  .section_dados_bancarios {
    padding: 0.80rem;
    background-color: #E6EBEC;
    border-radius: 0.25rem;
  }
  .section_dados_bancarios .row {
    margin-right: -5px;
    margin-left: -5px;
  }
  .section_dados_bancarios .form-group {
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
