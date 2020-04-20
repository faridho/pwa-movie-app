import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getMovies() {
      const data = fetch('https://apicollection.faridho.com/public/api/v1/movie/getmovies')
      .then((response) => {
        return response.json()
      }).then((result) => {
        return result
      })

      return data
    }
  },
  modules: {
  }
})
