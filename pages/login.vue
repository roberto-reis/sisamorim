<template>
  <div>

    <b-row class="mt-5 justify-content-center">
      <b-col md="5">
        <b-card class="section_login">
          <div class="d-flex flex-column align-content-center justify-content-center">
            <div class="text-center mt-2 logo_login">
              <!-- TODO: Criar Logo -->
              <b-img src="https://picsum.photos/1024/400/?image=41" alt="Responsive image" />
            </div>
            <h4 class="text-center title_login my-4">
              Faça login para iniciar sua sessão
            </h4>
          </div>
          <b-alert v-if="errors" show variant="danger">
            {{ errors }}
          </b-alert>
          <b-form class="form_login mt-4" @submit.prevent="onSubmit">
            <b-form-group
              label="E-mail:"
              label-for="email"
              label-class="mb-0"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                size="lg"
                placeholder="Digite o e-mail"
                required
              />
            </b-form-group>

            <b-form-group
              label="Senha:"
              label-for="password"
              label-class="mb-0"
              description="Nunca compartilharemos sua senha com mais ninguém."
            >
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                size="lg"
                placeholder="Digite a senha"
                required
              />
            </b-form-group>

            <b-button type="submit" variant="info" size="lg">Entrar</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: ''
    }
  },
  methods: {
    async onSubmit () {
      await this.$axios.$post('/auth/login', this.form)
        .then((response) => {
          console.log(response)
          this.$cookiz.set('_token_sisamorim', response.token.access_token, {
            path: '/',
            maxAge: response.token.expires_in
          })
          this.$router.push('/')
        }).catch((error) => {
          if (error.response.data.success === false && error.response.data.message) {
            this.errors = error.response.data.message
          }
        })
    }
  }
}
</script>

<style>
  .form_login label {
    color: #555;
    font-size: 1.2rem;
  }
  #email, #password {
    border: 2px solid #17A2B8;
  }

  .title_login {
    color: #555;
  }

  .logo_login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo_login img {
    max-width: 200px;
    width: 100%;
    height: auto;
    border-radius: 0.25rem;
  }

</style>
