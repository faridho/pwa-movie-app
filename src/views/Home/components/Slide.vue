<template>
  <section class="banner-container">
    <BannerSkelton v-if="banner <= 0" />
    <img :src="banner" class="img-banner" v-else />
    <div class="burger-menu">
      <span class="mdi mdi-menu mdi-36px" @click="showNav"></span>
    </div>
    <div class="search-icon">
      <span class="mdi mdi-feature-search-outline mdi-36px" @click="goToSearch"></span>
    </div>
    <div class="side-nav" ref="slideNav" v-click-outside="onClickOutside">
      <a class="closebtn" @click="closeNav"><span class="mdi mdi-close-thick"></span></a>
      <div v-for="(genre, index) in genres" :key="index">
        <a @click="goToGenreSelected(genre)">{{ genre }}</a>
      </div>
    </div> 
  </section>
</template>
<script>
import BannerSkelton from "@/views/Skelton/BannerSkelton"
import vClickOutside from "v-click-outside"
export default {
  data: () => ({
    banner: "",
    genres: []
  }),

  created() {
    this.getGenres()
  },

  methods: {
    getGenres() {
      this.genres = ["Comedy", "Action", "Thriler", "Adventure", "Drama"]
    },

    async displayBanner(banner) {
      this.banner = banner;
    },

    goToSearch() {
      this.$router.push({ path: '/search' })
    },

    showNav() {
      this.$refs.slideNav.style.width = "250px";
    },

    closeNav() {
      this.$refs.slideNav.style.width = "0px";
    },

    onClickOutside() {
      this.$refs.slideNav.style.width = "0px";
    },

    goToGenreSelected(genre) {
      this.$router.push({ path: `/genre/${genre}` })
    }
    
  },

  directives: {
    clickOutside: vClickOutside.directive
  },

  components: {
    BannerSkelton
  }
};
</script>