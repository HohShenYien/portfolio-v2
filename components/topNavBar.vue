<template>
  <div>
    <v-app-bar
      fixed
      :color="scrollChangeColor"
      v-if="!isMobile"
    >
      <NuxtLink to="/">
        <v-btn text plain :ripple="false">
          <img src="/favicon.ico" alt="" height="36px" class="mr-3">
          <v-toolbar-title class="bold-title navbar-title">
            Hoh Shen Yien</v-toolbar-title>
        </v-btn>
      </NuxtLink>
      <v-spacer></v-spacer>
      <NuxtLink to="/">
        <v-btn text :class="{'selected': cur == 0}" :ripple="false" plain>
          CS Diary
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/analysis">
        <v-btn text plain :class="{'selected': cur == 1}" :ripple="false">
          Analysis
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/about">
        <v-btn text plain :class="{'selected': cur == 2}" :ripple="false">
          About Me
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/projects">
        <v-btn text plain :class="{'selected': cur == 3}" :ripple="false">
          Projects
        </v-btn>
      </NuxtLink>
    </v-app-bar>
    <v-app-bar v-else
               fixed
               color="rgba(0,0,0,0.2)"
               style="width: 100vw"
               >
      <NuxtLink to="/">
        <v-btn text plain :ripple="false">
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
            <v-btn text :class="{'selected': cur == 0}" :ripple="false">
              CS Diary
            </v-btn>
          </NuxtLink>
        </v-list-item>

        <v-list-item>
          <NuxtLink to="/analysis">
            <v-btn text plain :class="{'selected': cur == 1}" :ripple="false">
              Analysis
            </v-btn>
          </NuxtLink>
        </v-list-item>

        <v-list-item>
          <NuxtLink to="/about">
            <v-btn text plain :class="{'selected': cur == 2}" :ripple="false">
              About Me
            </v-btn>
          </NuxtLink>
        </v-list-item>

        <v-list-item>
          <NuxtLink to="/projects">
            <v-btn text plain :class="{'selected': cur == 3}" :ripple="false">
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
  props: ['cur'],
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

</style>
