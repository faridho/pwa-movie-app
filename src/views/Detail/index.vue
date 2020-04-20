<template>
  <section class="detail">
    <Card ref="showDetailInformation" />
    <Gallery ref="showGalleryInformation" />
  </section>
</template>
<script>
import Card from './components/Card'
import Gallery from './components/Gallery'

export default {
  data: () => ({
      galleries: []
  }),

  created() {
    this.displayData();
  },

  methods: {
    async displayData() {
      const movies = await this.$store.dispatch("getMovies");
      const movieDetail = movies.data.filter(
        data => data.id == this.$route.params.id
      );
      this.$refs.showDetailInformation.displayMovie(movieDetail[0])
      this.$refs.showGalleryInformation.displayGalleries(movieDetail[0].galleries)
    }
  },

  components: {
    Card,
    Gallery
  }
};
</script>