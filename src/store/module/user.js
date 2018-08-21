import axios from 'axios'
export default {
  state: {},
  mutations: {},
  actions: {
    handleLogin ({commit}, {username, password}) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {username: username, password}).then(res => {
          console.log(res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  getters: {}
}
