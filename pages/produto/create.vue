<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between nav_breadcrumb px-3">
          <h3>Adicionar Produto</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">
                <nuxt-link to="/produto" class="breadcrumb-item">Produto</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                <span aria-current="location">Adicionar</span>
              </li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4 section_custon">
      <b-col md="12">

        <b-form class="row" @submit.prevent="saveProduto(form)">
          <b-form-group label="Código de Barra*:" label-for="codigo_barra" class="col-md-6">
            <b-form-input
              id="codigo_barra"
              v-model="form.codigo"
              :class="hasError('codigo') ? 'is-invalid' : ''"
              type="text"
              placeholder="Digite o Código de Barra"
              required
            />
            <span v-if="hasError('codigo')" class="invalid-feedback">
              {{ getError('codigo') }}
            </span>
          </b-form-group>

          <b-form-group label="Nome do Produto*:" label-for="produto" class="col-md-6">
            <b-form-input
              id="produto"
              v-model="form.nome"
              :class="hasError('nome') ? 'is-invalid' : ''"
              type="text"
              placeholder="Digite o Nome do Produto"
              required
            />
            <span v-if="hasError('codigo')" class="invalid-feedback">
              {{ getError('nome') }}
            </span>
          </b-form-group>

          <b-form-group label="Centro de Custo*:" label-for="centro_custo" class="col-md-6">
            <select id="centro_custo" v-model="form.centro_custo_uuid" class="form-control custom-select" :class="hasError('centro_custo_uuid') ? 'is-invalid' : ''" required>
              <option value="">Selecione um centro de Custo</option>
              <option v-for="centroCusto in centroCustos" :key="centroCusto.uuid" :value="centroCusto.uuid">
                {{ centroCusto.nome }}
              </option>
            </select>
            <span v-if="hasError('centro_custo_uuid')" class="invalid-feedback">
              {{ getError('centro_custo_uuid') }}
            </span>
          </b-form-group>

          <b-form-group label="Unidade:*" label-for="unidade" class="col-md-6">
            <b-form-select
              id="unidade"
              v-model="form.unidade_medida"
              :class="hasError('unidade_medida') ? 'is-invalid' : ''"
              :options="unidades"
            />
            <span v-if="hasError('unidade_medida')" class="invalid-feedback">
              {{ getError('unidade_medida') }}
            </span>
          </b-form-group>

          <b-form-group label="Cor do Produto:" label-for="cor_produto" class="col-md-6">
            <b-form-input
              id="cor_produto"
              v-model="form.cor"
              :class="hasError('cor') ? 'is-invalid' : ''"
              type="text"
              placeholder="Qual a cor do produto"
            />
            <span v-if="hasError('cor')" class="invalid-feedback">
              {{ getError('cor') }}
            </span>
          </b-form-group>

          <b-form-group label="Estoque:" label-for="estoque" class="col-md-6">
            <b-form-input
              id="estoque"
              v-model="form.estoque"
              :class="hasError('estoque') ? 'is-invalid' : ''"
              type="text"
              placeholder="Qunatidade em estoque"
            />
            <span v-if="hasError('estoque')" class="invalid-feedback">
              {{ getError('estoque') }}
            </span>
          </b-form-group>

          <b-form-group label="Descrição do Produto*:" label-for="descricao_produto" class="col-md-12">
            <b-form-input
              id="descricao_produto"
              v-model="form.descricao"
              :class="hasError('descricao') ? 'is-invalid' : ''"
              type="text"
              placeholder="Qual a descrição do produto"
            />
            <span v-if="hasError('descricao')" class="invalid-feedback">
              {{ getError('descricao') }}
            </span>
          </b-form-group>

          <b-col md="12" class="mt-1">
            <div class="section_valores">
              <b-row>
                <b-form-group label="Valor de custo:" label-for="valor_custo" class="col-md-4">
                  <b-form-input
                    id="valor_custo"
                    v-model="form.valor_custo"
                    :class="hasError('valor_custo') ? 'is-invalid' : ''"
                    type="text"
                    placeholder="Digite o valor de custo"
                  />
                  <span v-if="hasError('valor_custo')" class="invalid-feedback">
                    {{ getError('valor_custo') }}
                  </span>
                </b-form-group>
                <b-form-group label="Percentual Lucro %:" label-for="lucro_percentual" class="col-md-4">
                  <b-form-input
                    id="lucro_percentual"
                    v-model="form.lucro_percentual"
                    :class="hasError('lucro_percentual') ? 'is-invalid' : ''"
                    type="text"
                    placeholder="Digite o percentual de lucro"
                  />
                  <span v-if="hasError('lucro_percentual')" class="invalid-feedback">
                    {{ getError('lucro_percentual') }}
                  </span>
                </b-form-group>
                <b-form-group label="Valor da Venda:" label-for="valor_venda" class="col-md-4">
                  <b-form-input
                    id="valor_venda"
                    v-model="valorVenda"
                    type="text"
                    disabled
                  />
                </b-form-group>
              </b-row>
            </div>
          </b-col>

          <b-col cols="12" class="mt-4 d-flex justify-content-end">
            <nuxt-link to="/produto" class="btn btn-outline-danger mr-2">Sair</nuxt-link>
            <b-button type="submit" variant="success">Salvar</b-button>
          </b-col>
        </b-form>

      </b-col>
    </b-row>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CreateProduto',
  layout: 'default',
  data () {
    return {
      form: {
        codigo: '',
        nome: '',
        centro_custo_uuid: '',
        unidade_medida: null,
        cor: '',
        estoque: '',
        descricao: '',
        valor_custo: '',
        lucro_percentual: ''
      },
      unidades: [{ text: 'Selecione uma unidade', value: null }, 'UN', 'KG', 'LT', 'M2', 'M3']
    }
  },
  computed: {
    ...mapGetters({
      centroCustos: 'centro-custo/centroCustos',
      mensagemErrors: 'produto/mensagemErrors'
    }),
    valorVenda () {
      // TODO: Criar uma helper para tratar
      const valorCusto = this.form.valor_custo.replace(/[^0-9]/g, '.')
      const lucroPercentual = this.form.lucro_percentual.replace(/[^0-9]/g, '.')
      const valorVenda = parseFloat(valorCusto) + parseFloat((lucroPercentual / 100) * valorCusto)
      return valorVenda || ''
    }
  },
  mounted () {
    this.$store.dispatch('centro-custo/getCentroCustos')
  },
  methods: {
    ...mapActions('produto', ['saveProduto']),
    hasError (fieldName) {
      return (fieldName in this.mensagemErrors)
    },
    getError (fieldName) {
      if (this.mensagemErrors[fieldName]) { return this.mensagemErrors[fieldName][0] }
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
