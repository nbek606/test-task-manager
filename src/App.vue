<template>
  <DefaultHeader />
  <router-view/>
</template>
<script>
import DefaultHeader from '@/components/layouts/DefaultHeader.vue'

export default {
    components: {
    DefaultHeader
  },

  name: "App"
}
</script>
