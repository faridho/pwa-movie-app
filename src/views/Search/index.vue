<template>
    <div>
    <Header :title="title" />
    <div class="search-form">
        <button class="icon-search">
          <span class="mdi mdi-movie-search-outline mdi-24px"></span>
        </button>
        <input type="text" ref="searchText" v-model="search" class="search-text" @input="searchMovie" autofocus/>
        <button class="icon-close">
          <span class="mdi mdi-close mdi-24px" v-if="close" @click="eraseSearchText"></span>
        </button>
        <div class="search-result" v-if="filter">
          <div v-for="(movie, index) in resultFilters" :key="index">
            <a @click="goToDetailMovie(movie.id)">{{ movie.title }}</a>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  export default {
    data: () => ({
      title: 'Search',
      search: '',
      close: false,
      filter: false,
      resultFilters: []
    }),

    methods: {
      async searchMovie() {
        this.search !== '' ? this.close = true : this.close = false
        this.filter = true
        const movies = await this.$store.dispatch("getMovies")
        const results = movies.data.filter(movie => movie.title.toLowerCase().startsWith(this.search.toLowerCase()))
        this.resultFilters = results
      },

      eraseSearchText() {
        this.search = ''
        this.$refs.searchText.focus()
        this.close = false
      },

      goToDetailMovie(id) {
        this.$router.push({ path: `/detail/${id}` })
      }
    },

    components: {
      Header
    }
  }
</script>