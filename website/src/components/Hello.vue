<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 v-if='authenticated'>You are currently logged in</h3>
    <h3 v-if='!authenticated'>You are currently logged out</h3>
    <ul>
      <li v-if="!authenticated">Login to the application <router-link to="login">Login</router-link></li>
      <li v-if="authenticated"><a v-on:click.stop.prevent="logout()" href="#">Sign Out</a></li>
      <li>Access the secure page <router-link to="Secure">here</router-link></li>
    </ul>
  </div>
</template>

<script>
import auth from '../lib/auth'
export default {
  name: 'hello',
  props: {
    msg: {
      type: String,
      default: 'Welcome to Vue JWT Demo'
    }
  },
  data: function () {
    return {
      authenticated: false,
    }
  },
  // mounted: () => {
  //   this.authenticated = auth.isAuthorised()
  // },
  methods: {
    logout: function () {
      auth.logout()
      this.authenticated = false
    }
  }
}
</script>

