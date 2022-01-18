import Vue from 'vue';

function goTo(section) {
  document.getElementById(section).scrollIntoView({behavior: "smooth"});
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const goToPlugin = {
  install() {
    Vue.goTo = goTo
    Vue.prototype.$goTo = goTo
  }
}

const isMobilePlugin = {
  install() {
    Vue.isMobile = isMobile
    Vue.prototype.$isMobile = isMobile
  }
}

Vue.use(goToPlugin);
Vue.use(isMobilePlugin);

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});
