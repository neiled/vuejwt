<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Welcome to Vue JWT Demo</h2>
    <ul>
      <li>Login to the application <router-link to="login">Login</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

