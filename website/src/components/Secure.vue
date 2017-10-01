<template>
  <div>
    <h1>Welcome to the secure page</h1>
    <h2>You shouldn't be able to see this without logging in...</h2>
    <p>There should also be an authentication required API call here too to prove that this works.</p>
    <p><router-link :to="{name: 'Hello'}">Home</router-link></p>
  </div>
</template>

<script>
  import auth from '../lib/auth'
  const url = require('url')
  const TEST_URL = url.resolve(process.env.API_URL,'auth/test')

  export default{
    data () {
      return {
        polls: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData: async function () {
        try {
          console.log('getting data')
          if (!auth.isAuthorised()) {
            this.polls = []
            console.log('set empty data')
          } else {
            console.log('setting polls data')
            var polls = await this.$http.get(TEST_URL)
            console.log(polls.data)
            this.polls = polls.data
            console.log('set polls data')
          }
        } catch (e) {
          console.log(e)
        } finally {
        }
      }
    }
  }
</script>
<style scoped>

</style>
