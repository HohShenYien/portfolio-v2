import Vue from 'vue';

function goTo(section) {
  document.getElementById(section).scrollIntoView({behavior: "smooth"});
}

const goToPlugin = {
  install () {
    Vue.goTo = goTo
    Vue.prototype.$goTo = goTo
  }
}

Vue.use(goToPlugin)
