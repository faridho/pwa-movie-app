<template>
  <div>
    <div class="header">
      <div class="header-arrow">
        <span class="mdi mdi-arrow-left" @click="back"></span>
      </div>
      <div class="header-title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },

  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
