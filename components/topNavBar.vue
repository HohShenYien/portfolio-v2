<template>
  <div>
    <v-app-bar
      fixed
      :color="scrollChangeColor"
      v-if="!isMobile"
      style="transition: background-color 0.2s linear;"
    >
      <NuxtLink to="/" class="no-highlight">
        <v-btn text plain :ripple="false" class="no-highlight" color="white" style="opacity: 1 !important;">
          <img src="/favicon.ico" alt="" height="36px" class="mr-3">
          <v-toolbar-title class="bold-title navbar-title">
            Hoh Shen Yien</v-toolbar-title>
        </v-btn>
      </NuxtLink>
      <v-spacer></v-spacer>
      <NuxtLink to="/">
          CS Diary
      </NuxtLink>
      <NuxtLink to="/analysis">
          Analysis
      </NuxtLink>
      <NuxtLink to="/about">
          About Me
      </NuxtLink>
      <NuxtLink to="/projects">
          Projects
      </NuxtLink>
    </v-app-bar>
    <v-app-bar v-else
               fixed
               :color="scrollChangeColor"
               style="width: 100vw"
               >
      <NuxtLink to="/">
        <v-btn text plain :ripple="false" class="no-highlight">
          <v-toolbar-title class="bold-title navbar-title">
            Hoh Shen Yien</v-toolbar-title>
        </v-btn>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-btn text plain :ripple="false" @click="drawer = true">
        <v-icon>mdi-menu</v-icon>
        <div class="bold-title text-none" >
          Menu
        </div>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item>
          <img src="/favicon.ico" alt="" height="80px" class="mx-auto">
        </v-list-item>
        <v-list-item>
          <NuxtLink to="/">
            <v-btn text :ripple="false">
              CS Diary
            </v-btn>
          </NuxtLink>
        </v-list-item>

        <v-list-item>
          <NuxtLink to="/analysis">
            <v-btn text plain :ripple="false">
              Analysis
            </v-btn>
          </NuxtLink>
        </v-list-item>

        <v-list-item>
          <NuxtLink to="/about">
            <v-btn text plain :ripple="false">
              About Me
            </v-btn>
          </NuxtLink>
        </v-list-item>

        <v-list-item>
          <NuxtLink to="/projects">
            <v-btn text plain :ripple="false">
              Projects
            </v-btn>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "topNavBar",
  data() {
    return {
      drawer: false,
      scrollChangeColor: 'rgba(0,0,0,0.2)'
    }
  },
  computed: {
    isMobile: function() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 300) {
        this.scrollChangeColor = 'rgba(0,0,0,1)';
      } else if (window.scrollY <= 20) {
        this.scrollChangeColor = 'rgba(0,0,0,0.2)';
      } else {
        this.scrollChangeColor = 'rgba(0,0,0,' + window.scrollY / 300 + ')';
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped>
a {
  margin: 0 16px;
  text-transform: uppercase;
  font-size: 0.875rem;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
}
a:not(.no-highlight).nuxt-link-exact-active.nuxt-link-active {
  color: gold;
}
a:hover {
  color: goldenrod;
}
</style>
