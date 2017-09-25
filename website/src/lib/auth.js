import axios from 'axios'

export default {
  login () {
    console.log('auth.login - NEEDS CODE')
    axios.defaults.headers.common['Authorization'] = auth.getAuthHeader()
  },
  logout () {
    console.log('auth.logout')
    localStorage.removeItem('id_token')
    this.authenticated = false
    axios.defaults.headers.common['Authorization'] = auth.getAuthHeader()
  },
  checkAuth () {
    console.log('auth.checkAuth')
    return !!localStorage.getItem('id_token')
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
