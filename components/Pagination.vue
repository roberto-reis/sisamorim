<template>
  <b-row>
    <b-col cols="6">
      <div class="select_Per_page">
        <b-form-select v-model="perPageSelected" :options="options" @change="onSelect(perPageSelected)" />
      </div>
    </b-col>
    <b-col cols="6" class="d-flex justify-content-end">
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="totalPagina"
        base-url="?page="
        use-router
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'PadinationNav',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      perPageSelected: this.$route.query.perPage || 10,
      options: [
        { value: 10, text: '10' },
        { value: 20, text: '20' },
        { value: 30, text: '30' },
        { value: 50, text: '50' },
        { value: 100, text: '100' }
      ]
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.$route.query.page || 1
      },
      set (page) {
        const parametros = { page, perPage: this.perPageSelected }
        this.$router.push({ query: parametros })
        this.$emit('change-pagination', parametros)
      }
    },
    totalPagina () {
      return this.data.lastPage
    }
  },
  methods: {
    onSelect (value) {
      const parametros = { perPage: value, page: 1 }
      this.$router.push({ query: parametros })
      this.$emit('change-pagination', parametros)
    }
  }
}
</script>

<style>

</style>
