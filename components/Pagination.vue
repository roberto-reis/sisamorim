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
        :number-of-pages="20"
        base-url="?page="
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'PadinationNav',
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
