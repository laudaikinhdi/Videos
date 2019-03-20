<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <nuxt-link to="/" class="navbar-brand">Jwt-Auth</nuxt-link>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <li class="nav-item" v-if="authenticated">
            <nuxt-link to="/dashboard" class="nav-link">Dashboard</nuxt-link>
          </li>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">

          <template v-if="authenticated">
            <b-nav-item-dropdown right>
              <template slot="button-content">
                {{user.name}}
              </template>
              <b-dropdown-item @click.prevent="signOut">
                Signout
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </template>

          <template v-else>
            <li class="nav-item">
              <nuxt-link to="/auth/login" class="nav-link">Login</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/auth/register" class="nav-link">Register</nuxt-link>
            </li>
          </template>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$auth.logout();
    }
  }
};
</script>

<style>
</style>

