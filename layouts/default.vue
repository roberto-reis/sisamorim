<template>
  <div>
    <!-- MENU TOPO -->
    <MenuTopo />

    <!-- CONTEUDO -->
    <main>
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
