<template>
  <div>
    <div class="bg_menu">
      <b-navbar toggleable="lg" type="dark" class="container xxl">

        <b-button v-b-toggle.sidebar-backdrop>
          <fa icon="bars" class="icon_menu" />
        </b-button>

        <!-- Right aligned nav items -->
        <div class="ml-auto">
          <b-dropdown variant="link" toggle-class="text-decoration-none dropdown_user" no-caret right>
            <template #button-content>
              <em>{{ user.first_name }}</em>
              <fa icon="circle-user" class="circle_user" />
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">Sair</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-navbar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MenuTopo',
  data () {
    return {
      user: [],
      errors: ''
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      await this.$axios.$get('/auth/user').then((response) => {
        this.user = response.data
      }).catch((error) => {
        console.error(error)
      })
    },
    logout () {
      this.$axios.$post('/auth/logout')
        .then((response) => {
          this.$cookiz.remove('_token_sisamorim')
          this.$router.push('/login')
        }).catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style>
  .bg_menu {
    background-color: #455A64;
  }
  .icon_menu {
    font-size: 1.5rem;
    vertical-align: middle;
  }
  .circle_user {
    font-size: 1.8rem;
    vertical-align: middle;
  }
  .dropdown_user {
    color: #fff;
  }
  .dropdown_user:hover {
    color: #d1d1d1;
  }

</style>
