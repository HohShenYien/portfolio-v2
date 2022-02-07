<template>
  <v-app dark>
    <div id="overlay" :class="{'show': changing}"></div>
    <top-nav-bar :changing="changing"/>
    <main>
      <Nuxt/>
    </main>
    <bottom-bar :class="{hide: changing}"/>
  </v-app>
</template>

<script>
import bottomBar from "@/components/bottomBar";
import topNavBar from "@/components/topNavBar";

export default {
  component: {bottomBar, topNavBar},
  watch: {
    $route (to, from){
      if (from.path === to.path) {
        return;
      }
      this.changing = true;
      setTimeout(() => {
        this.changing = false;
      }, 1000);
    }
  },
  data() {
    return {
      changing: false
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
#overlay.show {
  animation: slide-left 0.9s ease-in;
  background-color: #6c4100;
  bottom: 0;
  position: absolute;
  animation-fill-mode: forwards;
  top: 0;
  z-index: 100;
}

.hide {
  opacity: 0;
  z-index: -1;
}

@keyframes slide-left {
  0% {
    right: -100%;
    width: 10vw;
  }
  50% {
    width: 50vw;
  }
  100% {
    right: 100%;
    width: 10vw;
  }
}
</style>
