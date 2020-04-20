<template>
  <div>
    <Header :title="title" />
    <div class="banner-info">
      Nothing Information
    </div>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  export default {
    data: () => ({
      title: 'Schedule'
    }),

    components: {
      Header
    }
  }
</script>