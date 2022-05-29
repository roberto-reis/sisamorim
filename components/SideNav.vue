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
          <b-nav-item href="#">Clentes</b-nav-item>
          <b-nav-item href="#">Fornecedores</b-nav-item>
          <b-nav-item href="#">Produtos</b-nav-item>
          <b-nav-item href="#">Vendas</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Orçamentos</b-nav-item>
          <b-nav-item href="#">Finaceiro</b-nav-item>

          <b-nav-item v-b-toggle.collapse-admin href="#">
            <div class="d-flex justify-content-between">
              <span>Admin</span>
              <fa icon="angle-down" class="text-center" />
            </div>
          </b-nav-item>
          <b-collapse id="collapse-admin" class="mt-1 mx-1">
            <b-card>
              <a>Configuração</a>
            </b-card>
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

</style>
