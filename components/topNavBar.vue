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
      <nav>
        <NuxtLink to="/csdiary">
          <hLink text="CS Diary" class="nav-bar-link"></hLink>
        </NuxtLink>
        <NuxtLink to="/analysis">
          <hLink text="Analysis" class="nav-bar-link"></hLink>
        </NuxtLink>
        <NuxtLink to="/about">
          <hLink text="About Me" class="nav-bar-link"></hLink>
        </NuxtLink>
        <NuxtLink to="/projects">
          <hLink text="Projects" class="nav-bar-link"></hLink>
        </NuxtLink>
      </nav>
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
      temporary
      fixed
      app
      width="100%"
      color="#000"
    >
      <div class="drawer-bar">
        <nuxt-link to="/">
          <div class="bold-title navbar-title">Hoh Shen Yien</div>
        </nuxt-link>
        <v-btn text plain :ripple="false" @click="drawer = false">
          <v-icon>mdi-close</v-icon>
          <div class="bold-title text-none" style="font-size: 0.875rem">
            Close
          </div>
        </v-btn>
      </div>
      <v-list
        nav
        dense
        class="side-nav-drawer-items"
        style="margin-top: 0;"
      >
        <v-list-item>
          <NuxtLink to="/csdiary">
            <v-btn text :ripple="false">
              CS Diary
            </v-btn>
          </NuxtLink>
        </v-list-item>
        <v-divider class="nav-border"></v-divider>
        <v-list-item>
          <NuxtLink to="/analysis">
            <v-btn text plain :ripple="false">
              Analysis
            </v-btn>
          </NuxtLink>
        </v-list-item>
        <v-divider  class="nav-border"></v-divider>
        <v-list-item>
          <NuxtLink to="/about">
            <v-btn text plain :ripple="false">
              About Me
            </v-btn>
          </NuxtLink>
        </v-list-item>
        <v-divider  class="nav-border"></v-divider>
        <v-list-item>
          <NuxtLink to="/projects">
            <v-btn text plain :ripple="false">
              Projects
            </v-btn>
          </NuxtLink>
        </v-list-item>
        <v-divider  class="nav-border"></v-divider>
      </v-list>
      <bottomBar :isDrawer="true"/>
    </v-navigation-drawer>
  </div>
</template>

<script>
import HLink from "./hLink";
export default {
  name: "topNavBar",
  components: {HLink},
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
.nav-bar-link {
  margin: 0 16px;
}
.drawer-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
  padding: 10px 29px;
}
.navbar-title {
  text-transform: uppercase;
  color: white;
}
.nav-border {
  margin: 20px 160px;
  border-width: 4px 0 0;
}
</style>

<style>
a:not(.no-highlight).nuxt-link-exact-active.nuxt-link-active:not(:hover) .nav-bar-link span{
  color: gold !important;
}
.nav-bar-link span{
  text-transform: uppercase;
  font-size: 0.875rem;
  color: white !important;
  font-weight: bold;
  letter-spacing: 2px;
}
.nav-bar-link:hover span{
  color: goldenrod !important;
}
.side-nav-drawer-items .nuxt-link-exact-active.nuxt-link-active .v-btn span {
  color: gold;
}
.v-list--nav .v-list-item {
  justify-content: center;
}
.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.v-navigation-drawer .v-list--nav a span{
  display: inline-block;
  transform: translateY(25px);
  transition: transform 0.2s ease-in;
  transition-delay: 0.2s;
}

.v-navigation-drawer--open .v-list--nav a span{
  transform: translateY(0);
}
.v-navigation-drawer--open .v-list--nav a{
  overflow: hidden;
}
</style>
