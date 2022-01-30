<template>
  <header>
    <div id="desktop-nav" :style="{backgroundColor: scrollChangeColor}">
      <NuxtLink to="/" class="no-highlight">
        <v-btn text plain :ripple="false" class="no-highlight" color="white" style="opacity: 1 !important;">
          <img src="/favicon.ico" alt="" height="36px" class="mr-3">
          <v-toolbar-title class="bold-title navbar-title">
            Hoh Shen Yien
          </v-toolbar-title>
        </v-btn>
      </NuxtLink>
      <nav>
        <NuxtLink v-for="link in links" :to="link.link" :key="link.name" class="nav-bar-link">
          <hLink>{{ link.name }}</hLink>
        </NuxtLink>
        <search></search>
      </nav>
    </div>
    <div id="mobile-nav">
      <div class="top-nav" :style="{backgroundColor: drawer ? 'black' : scrollChangeColor}">
        <NuxtLink to="/">
          <v-btn text plain :ripple="false" class="no-highlight">
            <v-toolbar-title class="bold-title navbar-title">
              Hoh Shen Yien
            </v-toolbar-title>
          </v-btn>
        </NuxtLink>
        <div class="nav-btn-wrapper" @click="drawer=!drawer">
          <span class="nav-btn" :class="{open: drawer}"/>
        </div>
      </div>
      <div class="drawer" :class="{show: drawer}">
        <v-list
          nav
          dense
          class="side-nav-drawer-items"
          style="margin-top: 0;"
        >
          <div v-for="link in links" :key="link.name">
            <v-list-item>
              <NuxtLink :to="link.link">
                <v-btn text :ripple="false">
                  {{ link.name }}
                </v-btn>
              </NuxtLink>
            </v-list-item>
            <v-divider class="nav-border"></v-divider>
          </div>
          <search @click="drawer=false"></search>
          <v-divider class="nav-border"></v-divider>
        </v-list>
        <bottomBar :isDrawer="true"/>
      </div>
    </div>
  </header>
</template>

<script>
import HLink from "./hLink";

export default {
  name: "topNavBar",
  components: {HLink},
  props: ['changing'],
  watch: {
    changing: function () {
      if (this.changing == true) {
        this.drawer = false;
      }
    }
  },
  data() {
    return {
      drawer: false,
      scrollChangeColor: 'rgba(0,0,0,0.2)',
      links: [
        {name: "CS Diary", link: "/csdiary"},
        {name: "Analysis", link: "/analysis"},
        {name: "About Me", link: "/about"},
        {name: "Projects", link: "/projects"},
        {name: "Tags", link: "/tags"}
      ]
    }
  },
  computed: {
    isMobile: function () {
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
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped lang="scss">
#desktop-nav {
  height: 64px;
  width: 100%;
  position: fixed;
  transition: background-color 0.2s linear;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

#mobile-nav {
  z-index: 999;
  width: 100%;
  position: fixed;
  display: none;

  .top-nav {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.2s linear;
    padding: 0 20px;

    button {
      padding: 0;
    }

    .nav-btn-wrapper {
      display: flex;
      align-items: center;
      width: 30px;
      height: 30px;

      .nav-btn {
        display: inline-block;
        width: 25px;
        height: 3px;
        position: relative;
        background-color: white;
        transition: background-color 300ms linear;

        &::after {
          content: '';
          width: 25px;
          height: 3px;
          background-color: white;
          position: absolute;
          top: -7px;
          left: 0;
          transition: transform 200ms linear, top 150ms ease-in 200ms;
        }

        &::before {
          content: '';
          width: 25px;
          height: 3px;
          background-color: white;
          position: absolute;
          bottom: -7px;
          left: 0;
          transition: transform 200ms linear, bottom 150ms ease-in 200ms;
        }

        &.open {
          background-color: #00000000;

          &::after {
            top: 0;
            transform: rotate(-45deg);
            transition: top 150ms ease-in, transform 200ms linear 150ms;
          }

          &::before {
            bottom: 0;
            transform: rotate(45deg);
            transition: bottom 150ms ease-in, transform 200ms linear 150ms;
          }
        }
      }
    }

  }

  .drawer {
    background-color: black;
    width: 100%;
    height: 0;
    transition: height 300ms ease-in;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;

    &.show {
      height: calc(100vh - 64px);
    }
  }
}

.nav-bar-link {
  margin: 0 16px;
}

.navbar-title {
  text-transform: uppercase;
  color: white;
}

.nav-border {
  margin: 15px auto 40px;
  width: 60px;
  border-width: 7px 0 0;
}

@media only screen and (max-width: 960px) {
  #desktop-nav {
    display: none;
  }
  #mobile-nav {
    display: block;
  }
}
</style>

<style>

.drawer .nuxt-link-exact-active.nuxt-link-active button span {
  color: gold;
}

a:not(.no-highlight).nuxt-link-exact-active.nuxt-link-active:not(:hover).nav-bar-link span span span {
  color: gold !important;
}

.nav-bar-link span {
  text-transform: uppercase;
  font-size: 0.875rem;
  color: white !important;
  font-weight: bold;
  letter-spacing: 2px;
}

.nav-bar-link:hover span span {
  color: goldenrod !important;
}

.v-list--nav .v-list-item {
  justify-content: center;
  margin-top: 30px;
}

.drawer .v-list--nav {
  background-color: black;
}

.drawer .v-list--nav .v-btn__content {
  display: inline-block;
  transform: translateY(25px);
  transition: transform 0.2s ease-in;
  transition-delay: 0.2s;
  font-size: 30px;
}

.drawer.show .v-list--nav .v-btn__content {
  transform: translateY(0);
}

.drawer.show .v-list--nav a {
  overflow: hidden;
}

.side-nav-drawer-items {
  text-align: center;
}
</style>
