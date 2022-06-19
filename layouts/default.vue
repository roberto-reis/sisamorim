<template>
  <div>
    <!-- MENU TOPO -->
    <MenuTopo />
    <!-- MENU LATERAL -->
    <SideNav />

    <!-- CONTEUDO -->
    <main class="container xxl vh-100">
      <Nuxt />
    </main>

    <!-- RODAPE -->
    <FooterCustom />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware: 'authenticated',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
