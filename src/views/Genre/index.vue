<template>
  <div>
    <Header :title="$route.params.id" />
    <section class="content">
    <div class="list-title">Movies genre</div>
    <ListMoviesSkelton v-if="count <= 0" />
    <div v-for="(movie, index) in movies" :key="index" v-else>
      <div class="card">
        <router-link
          :to="{ 
                name: 'Detail',
                params: {
                id: movie.id
                }              
            }"
        >
          <div class="poster-card">
            <img class="poster-img" :src="movie.poster" alt />
          </div>
        </router-link>
        <div class="movie-content">
          <div class="movie-title">{{ movie.title }}</div>
          <div class="movie-genres">{{ movie.genres }}</div>
          <div class="movie-duration">{{ movie.show }}</div>
          <div class="movie-description">{{ movie.description }}</div>
          <div class="movie-thriler">
            <span class="mdi mdi-play-circle"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import ListMoviesSkelton from '@/views/Skelton/ListMoviesSkelton'
  export default {
    data: () => ({
        movies: [],
        count: 0
    }),

    created() {
        this.displaymovies()
    },

    methods: {
        async displaymovies() {
            const movies = await this.$store.dispatch("getMovies")
            this.movies = movies.data
            this.count = movies.count
        }
    },

    components: {
      Header,
      ListMoviesSkelton
    }
  }
</script>