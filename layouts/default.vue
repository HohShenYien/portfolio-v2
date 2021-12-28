<template>
  <v-app dark>
    <top-nav-bar/>
    <Nuxt/>
    <bottom-bar/>
  </v-app>
</template>

<script>
import bottomBar from "@/components/bottomBar";
import topNavBar from "@/components/topNavBar";
export default {
  component: {bottomBar},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>

</style>
