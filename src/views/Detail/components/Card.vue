<template>
  <div>
    <BannerDetailSkelton v-if="detailBanner <= 0"/>
    <template v-else>
      <div class="banner-detail-content">
        <div class="back-arrow">
          <span class="mdi mdi-arrow-left mdi-24px" @click="back"></span>
        </div>
        <img class="banner-img" :src=detailBanner />
      </div>

      <div class="detail-card">
        <div class="poster-detail-card">
          <img class="poster-img" :src=poster alt="" />
        </div>
        <div class="movie-card-content">
          <div class="movie-card-title">{{ title }}</div>
          <div class="movie-card-genres">{{ genres }}</div>
          <div class="movie-card-showup">
            <div class="detail-release">{{ release }}</div>
          </div>
          <div class="movie-card-components">
            <div class="detail-rated">{{ rate }}</div>
            <div class="detail-components">
              <span class="movie-chips-source">{{ source }}</span>
              <span class="movie-chips-pg">{{ role }}</span>
              <span class="movie-chips-show">{{ show }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-description">
        <div class="detail-description-production">
          <span class="movie-block">Director:</span> {{ director }}
        </div>
        <div class="detail-description-production">
          <span class="movie-block">Writen:</span> {{ writen }}
        </div>
        <div class="detail-description-production">
          <span class="movie-block">Cast:</span> {{ stared }}
        </div>
        <div class="detail-description-production">
          <span class="movie-block">Description:</span> {{ description }}
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import BannerDetailSkelton from '@/views/Skelton/BannerDetailSkelton'
export default {
    data:() => ({
        detailBanner: "",
        poster: "",
        title: "",
        genres: "",
        release: "",
        show: "",
        rate: "",
        source: "",
        role: "",
        director: "",
        writen: "",
        stared: "",
        description: ""
    }),

    methods: {
        displayMovie(detail) {
            this.detailBanner = detail.detailBanner
            this.poster = detail.poster
            this.title = detail.title
            this.genres = detail.genres
            this.release = detail.release
            this.show = detail.show
            this.rate = detail.rate 
            this.source = detail.source 
            this.role = detail.role 
            this.director = detail.director
            this.writen = detail.writen
            this.stared = detail.stared
            this.description = detail.description
        },

        back() {
          this.$router.go(-1)
        }
    },

    components: {
      BannerDetailSkelton
    }
};
</script>