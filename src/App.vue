<template>
  <div id="app">
    <router-view />
    <footer class="nav-bottom" v-if="$route.meta.bottomNav">
      <div 
        class="menu-item" 
        v-bind:class="{'menu-item-active': homeActive}"
        @click="goToHome"
      >
        <div class="menu-content">
          <span class="mdi mdi-home mdi-24px"></span>
        </div>
      </div>
      <div 
        class="menu-item" 
        v-bind:class="{'menu-item-active': scheduleActive}"
        @click="goToShedule"
      >
        <div class="menu-content">
          <span class="mdi mdi-calendar-blank-multiple mdi-24px"></span>
        </div>
      </div>
      <div 
        class="menu-item" 
        v-bind:class="{'menu-item-active': infoActive}"
        @click="goToInfo"
      >
        <div class="menu-content">
          <span class="mdi mdi-information mdi-24px"></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/main.scss'
export default {
  data: () => ({
    homeActive: true,
    scheduleActive: false,
    infoActive: false
  }),

  methods: {
    goToHome() {
      this.homeActive = true
      this.scheduleActive = false
      this.infoActive = false
      this.$router.push({ path: '/'})
    },

    goToShedule() {
      this.homeActive = false
      this.scheduleActive = true
      this.infoActive = false
      this.$router.push({ path: '/schedule'})
    },

    goToInfo() {
      this.homeActive = false
      this.scheduleActive = false
      this.infoActive = true
      this.$router.push({ path: '/info'})
    }
  }
  
}
</script>