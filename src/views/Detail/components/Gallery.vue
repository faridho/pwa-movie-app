<template>
  <div>
    <div class="gallery-title" v-if="count > 0">All Galeries</div>
    <div class="detail-gallery">
      <div class="gallery-item" v-for="(gallery, index) in galleries" :key="index">
        <img
          class="gallery-img"
          :src=gallery
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    galleries: [],
    count: 0
  }),

  methods: {
    displayGalleries(galleries) {
      this.galleries = galleries;
      this.count = galleries.count
    }
  }
};
</script>