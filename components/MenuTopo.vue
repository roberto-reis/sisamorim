<template>
  <div>
    <div class="bg_menu">
      <b-navbar toggleable="lg" type="dark" class="container xxl">
        <b-button v-b-toggle.sidebar-backdrop>[icon]</b-button>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User [avatar]</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-navbar>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style>
  .bg_menu {
    background-color: #455A64;
  }

</style>
