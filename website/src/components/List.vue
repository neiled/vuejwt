<template>
    <ul>
        <li v-for="item in items">
            {{ item }}
        </li>
    </ul>
</template>

<script>
import auth from '../lib/auth'
export default {
  name: 'hello',
  props: ['items', 'msg'],
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
