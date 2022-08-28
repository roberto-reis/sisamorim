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
    {{ data }}
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
      pages: 1,
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
  computed: {
    currentPage: {
      get () {
        return this.pages
      },
      set (value) {
        this.pages = value
        this.$emit('change-page', value)
      }
    },
    totalPagina () {
      return this.data.lastPage
    }
  },
  methods: {
    onSelect (value) {
      console.log('onSelect: ', value)
    }
  }
}
</script>

<style>

</style>
