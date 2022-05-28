<template>
  <div>
    <!-- MENU TOPO -->
    <MenuTopo />
    <!-- MENU LATERAL -->
    <SideNav />

    <!-- CONTEUDO -->
    <main class="container xxl">
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
