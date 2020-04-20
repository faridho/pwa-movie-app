<template>
  <section class="content">
    <div class="list-title">Recommended movies</div>
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
</template>
<script>
import ListMoviesSkelton from '@/views/Skelton/ListMoviesSkelton'
export default {
  data: () => ({
    movies: [],
    count: 0
  }),

  methods: {
    displayMovies(movies) {
      this.movies = movies;
      this.count = movies.count
    }
  },

  components: {
    ListMoviesSkelton
  }
};
</script>