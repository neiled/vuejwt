import axios from 'axios'
const url = require('url')
const LOGIN_URL = url.resolve(process.env.API_URL || 'http://localhost:8080','auth/login')


export default {
  async login (creds) {
    console.log('auth.login: '+ LOGIN_URL)
    let data = await axios.post(LOGIN_URL, creds)
    console.log(data)
    localStorage.setItem('id_token', data.data.accessToken)
    axios.defaults.headers.common['Authorization'] = this.getAuthHeader()
    console.log('auth.login - done')
  },
  logout () {
    console.log('auth.logout')
    localStorage.removeItem('id_token')
    this.authenticated = false
    axios.defaults.headers.common['Authorization'] = this.getAuthHeader()
  },
  isAuthorised () {
    console.log('auth.checkAuth')
    let authorised = !!localStorage.getItem('id_token')
    console.log(authorised)
    return authorised
  },
  getAuthHeader () {
    console.log('auth.getAuthHeader')
    var token = localStorage.getItem('id_token')
    if (token != null) {
      console.log('auth.getAuthHeader - adding token')
      return 'Bearer ' + token
    } else {
      console.log('auth.getAuthHeader - no token to add to header')
      return ''
    }
  }
}
