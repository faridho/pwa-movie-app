<template>
  <div>
    <Slide ref="showBanner" />
    <Movies ref="showMovies" />
  </div>
</template>
<script>
  import Slide from './components/Slide'
  import Movies from './components/Movies'
  
  export default {
    data: () => ({
      
    }),

    created() {
      this.displayData()
    },

    methods: {
      async displayData() {
        const movies = await this.$store.dispatch("getMovies")
        this.$refs.showBanner.displayBanner(movies.banner)
        this.$refs.showMovies.displayMovies(movies.data)
      }
    },

    components: {
      Slide,
      Movies
    }
  }
</script>