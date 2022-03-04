<template>
  <v-app dark>
    <section class="section" ref="content">
      <v-row>
        <v-col cols="12" md="7">
          <div class="error-wrapper">
            <img src="https://i.imgur.com/iMwuSH7.png" alt="a ufo" id="ufo"
                 class="animate__animated animate__fadeInDown animate-delay-6">
            <div id="error-code"><h1 v-for="(code, idx) in codes" :key="idx"
                                     :class="{[`animate-delay-${(idx + 1) * 3}`]: true}"
                                     class="animate__fadeInUp animate__animated">{{ code }}</h1></div>
            <div class="animate-delay-1 error-txt" v-if="error.statusCode === 404">
              <h2 class="animate__fadeInLeft animate__animated">Sorry, the aliens have kidnapped your content</h2>
              <div class="animate__fadeInLeft animate__animated animate-delay-3">We can't find this page anymore 😔
              </div>
              <div class="animate__fadeInLeft animate__animated animate-delay-5">Maybe you wanna head back to
                <nuxt-link to="/">
                  <arrowLink text="homepage" class="ml-2">homepage</arrowLink>
                </nuxt-link>
              </div>
            </div>
            <div class="animate-delay-1 error-txt" v-else>
              <h2 class="animate__fadeInLeft animate__animated">Sorry, the aliens have invaded our base</h2>
              <div class="animate__fadeInLeft animate__animated animate-delay-3">Something went wrong here 😔</div>
              <div class="animate__fadeInLeft animate__animated animate-delay-5">Maybe you wanna head back to
                <nuxt-link to="/">
                  <arrowLink class="ml-2">homepage</arrowLink>
                </nuxt-link>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="5" class="right">
          <img src="https://i.imgur.com/Oj89UKU.png" alt="An Alien" width="45%"
               class="alien mr-4 animate__animated animate__fadeInBottomRight animate-delay-6">
          <img src="https://i.imgur.com/Oj89UKU.png" alt="An Alien" width="45%"
               class="alien animate__animated animate__fadeInBottomRight animate-delay-9">
        </v-col>
      </v-row>
    </section>

  </v-app>
</template>

<script>
import 'animate.css'

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      codes: ['4', '0', '4'],
      otherError: 'An error occurred',
      start: false,
      images: 3,
    }
  },
  mounted() {

  },
  created() {
    if (this.error.statusCode !== 404) {
      this.codes = ["E", "R", "R", "O", "R"];
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? 'Page Not Found' : this.otherError
    return {
      title
    }
  },
}
</script>

<style scoped lang="scss">
#ufo {
  width: 300px;
  height: 351.75px;
  position: relative;
  z-index: 1;
}

#error-code {
  margin-top: -180px;
  margin-bottom: 20px;
  color: $primary;
  font-weight: bolder;
  z-index: 10;

  h1 {
    display: inline-block;
    font-size: 8rem;
  }
}

.error-txt {
  text-align: left;

  h2 {
    font-size: 3rem;
  }

  div {
    font-size: 1.5rem;
    color: $secondary-text;
    line-height: 1.5em;

    a.link--arrowed {
      font-size: 1.5rem;
    }

    a.link--arrowed:hover {
      font-size: 1.8rem;
    }
  }
}

.right {
  display: flex;
  flex-direction: row;
}

.section {
  @include section;
  padding-top: 100px;
}

.error-wrapper {
  height: 100%;
  position: relative;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  #error-code h1 {
    font-size: 6rem;
  }

  .error-txt {
    h2 {
      font-size: 2rem;
    }

    div {
      font-size: 1.2rem;
    }

    a.link--arrowed {
      font-size: 1.2rem;
    }
  }

}
</style>
