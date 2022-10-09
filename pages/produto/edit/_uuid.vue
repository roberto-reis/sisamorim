<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-between nav_breadcrumb px-3">
          <h3>Editar Produto</h3>
          <div>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <nuxt-link to="/" class="breadcrumb-item">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">
                <nuxt-link to="/produto" class="breadcrumb-item">Produto</nuxt-link>
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
        <b-form class="row" @submit.prevent="updateProduto(produto)">
          <b-form-group label="Código de Barra*:" label-for="codigo_barra" class="col-md-6">
            <b-form-input
              id="codigo_barra"
              v-model="produto.codigo"
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
              v-model="produto.nome"
              :class="hasError('nome') ? 'is-invalid' : ''"
              type="text"
              placeholder="Digite o Nome do Produto"
              required
            />
            <span v-if="hasError('nome')" class="invalid-feedback">
              {{ getError('nome') }}
            </span>
          </b-form-group>

          <b-form-group label="Centro de Custo*:" label-for="centro_custo" class="col-md-6">
            <select id="centro_custo" v-model="produto.centro_custo_uuid" :class="hasError('centro_custo_uuid') ? 'is-invalid' : ''" class="form-control custom-select" required>
              <option value="">Selecione um centro de Custo</option>
              <option v-for="centroCusto in centroCustos" :key="centroCusto.uuid" :value="centroCusto.uuid">
                {{ centroCusto.nome }}
              </option>
            </select>
            <span v-if="hasError('centro_custo_uuid')" class="invalid-feedback">
              {{ getError('centro_custo_uuid') }}
            </span>
          </b-form-group>

          <b-form-group label="Unidade:" label-for="unidade" class="col-md-6">
            <b-form-select
              id="unidade"
              v-model="produto.unidade_medida"
              :class="hasError('unidade_medida') ? 'is-invalid' : ''"
              :options="unidades"
              required
            />
            <span v-if="hasError('unidade_medida')" class="invalid-feedback">
              {{ getError('unidade_medida') }}
            </span>
          </b-form-group>

          <b-form-group label="Cor do Produto:" label-for="cor_produto" class="col-md-6">
            <b-form-input
              id="cor_produto"
              v-model="produto.cor"
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
              v-model="produto.estoque"
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
              v-model="produto.descricao"
              :class="hasError('descricao') ? 'is-invalid' : ''"
              type="text"
              placeholder="Qual a descrição do produto"
              required
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
                    v-model="precoCusto"
                    :class="hasError('preco_custo') ? 'is-invalid' : ''"
                    type="text"
                    placeholder="Digite o valor de custo"
                  />
                  <span v-if="hasError('preco_custo')" class="invalid-feedback">
                    {{ getError('preco_custo') }}
                  </span>
                </b-form-group>
                <b-form-group label="Percentual Lucro %:" label-for="lucro" class="col-md-4">
                  <b-form-input
                    id="lucro"
                    v-model="pecentualLucro"
                    :class="hasError('pecentual_lucro') ? 'is-invalid' : ''"
                    type="text"
                    placeholder="Digite o percentual de lucro"
                  />
                  <span v-if="hasError('pecentual_lucro')" class="invalid-feedback">
                    {{ getError('pecentual_lucro') }}
                  </span>
                </b-form-group>
                <b-form-group label="Valor da Venda:" label-for="valor_venda" class="col-md-4">
                  <b-form-input
                    id="valor_venda"
                    v-model="produto.preco_venda"
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
      unidades: [{ text: 'Selecione uma unidade', value: null }, 'UN', 'KG', 'LT', 'M2', 'M3', 'PC']
    }
  },
  computed: {
    produto () {
      return { ...this.$store.state.produto.produto }
    },
    precoCusto: {
      get () {
        return this.$store.state.produto.produto.preco_custo
      },
      set (precoCusto) {
        // TODO: Criar uma helper para tratar
        const lucroPercentual = this.pecentualLucro
        const valorVenda = parseFloat(precoCusto) + parseFloat((lucroPercentual / 100) * precoCusto)
        this.$store.commit('produto/SET_PRODUTO_PRECO_CUSTO', precoCusto)
        this.$store.commit('produto/SET_PRODUTO_PRECO_VENDA', valorVenda)
      }
    },
    pecentualLucro: {
      get () {
        return this.$store.state.produto.produto.pecentual_lucro
      },
      set (pecentualLucro) {
        // TODO: Criar uma helper para tratar
        const valorCusto = this.precoCusto
        const valorVenda = parseFloat(valorCusto) + parseFloat((pecentualLucro / 100) * valorCusto)
        this.$store.commit('produto/SET_PRODUTO_PERCENTUAL_LUCRO', pecentualLucro)
        this.$store.commit('produto/SET_PRODUTO_PRECO_VENDA', valorVenda)
      }
    },
    ...mapGetters({
      centroCustos: 'centro-custo/centroCustos',
      mensagemErrors: 'produto/mensagemErrors'
    })
  },
  mounted () {
    this.getProduto(this.$route.params.uuid)
    this.$store.dispatch('centro-custo/getCentroCustos')
  },
  methods: {
    ...mapActions('produto', ['getProduto', 'updateProduto']),
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
