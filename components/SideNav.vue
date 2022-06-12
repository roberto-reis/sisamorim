<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="SisAmorim"
      backdrop-variant="dark"
      backdrop
      shadow
    >

      <div class="logo_sidenav">
        [LOGO]
      </div>
      <nav class="mb-3 menu_sidenav">
        <b-nav vertical>
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">Dashboard</nuxt-link>
          </li>
          <b-nav-item href="#">Clentes</b-nav-item>
          <b-nav-item href="#">Fornecedores</b-nav-item>
          <li class="nav-item">
            <nuxt-link to="/produto" class="nav-link">Produtos</nuxt-link>
          </li>
          <b-nav-item href="#">Vendas</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Orçamentos</b-nav-item>

          <b-nav-item v-b-toggle.collapse-financeiro href="#">
            <div class="d-flex justify-content-between align-items-center">
              <span>Financeiro</span>
              <fa icon="angle-down" />
            </div>
          </b-nav-item>
          <b-collapse id="collapse-financeiro" class="collapse_financeiro py-2 px-2">
            <div class="sub_menu">
              <b-nav vertical>
                <li class="nav-item">
                  <nuxt-link to="/financeiro" class="nav-link">Gerenciar Financeiro</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/centro-custo" class="nav-link">Centro de Custo</nuxt-link>
                </li>
              </b-nav>
            </div>
          </b-collapse>

          <b-nav-item v-b-toggle.collapse-admin href="#">
            <div class="d-flex justify-content-between align-items-center">
              <span>Admin</span>
              <fa icon="angle-down" />
            </div>
          </b-nav-item>
          <b-collapse id="collapse-admin" class="collapse_financeiro py-2 px-2">
            <div class="sub_menu">
              <b-nav vertical>
                <li class="nav-item">
                  <nuxt-link to="/configuracao" class="nav-link">Configuração</nuxt-link>
                </li>
              </b-nav>
            </div>
          </b-collapse>

        </b-nav>
      </nav>

    </b-sidebar>
  </div>
</template>

<script>

</script>

<style>
  .menu_sidenav ul li {
    border-bottom: 1px solid #DEDEDE;
  }

  .menu_sidenav ul a {
    color: #444;
    font-weight: 700;
  }
  .menu_sidenav ul a:hover {
    color: #333;
    background-color: #E6EBEC;
  }
  .logo_sidenav {
    padding: 10px;
    text-align: center;
    border-top: 1px solid #DEDEDE;
    border-bottom: 2px solid #DEDEDE;
  }

  .b-sidebar-header .close {
    border-radius: 4px;
  }
  .b-sidebar-header .close svg {
    background-color: #fff;
    border: 1px solid #343a40;
    border-radius: 4px;
    font-size: 30px;
  }
  .b-sidebar-header .close svg:hover {
    background-color: #D11300;
    color: #fff;
    border-color: #D11300;
  }
  .collapse_financeiro {
    border-bottom: 1px solid #DEDEDE;
    background-color: #E6EBEC;
  }
  .sub_menu {
    background-color: #fff;
    border-radius: 0.25rem;
    border: 1px solid #DEDEDE;
  }
  .sub_menu ul a {
    color: #555;
    font-weight: 500;
  }

</style>
