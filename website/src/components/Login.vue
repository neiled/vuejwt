<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="credentials.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="credentials.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  import auth from '../lib/auth'

  export default{
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      submit: async function () {
        console.log('submitting form')
        await auth.login(this.credentials)
        this.$router.push({name: 'Secure'})
      }
    }
  }
</script>
<style scoped>

</style>
