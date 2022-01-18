<template>
  <div>
    <div class="section" id="section1">
      <div class="enter-animation" v-if="start">
        <glitchText text="YOU FOUND ME"/>
        <button @click="goTo('section2')" class="go-down">
          Scroll down<br>
          <v-icon class="bounce-7" size="50">mdi-chevron-down</v-icon>
        </button>
      </div>
    </div>
    <div id="section2" class="section">
      <v-row>
        <v-col cols="12" md="8">
          <h2 class="somewhat-big" data-aos="fade-right" data-aos-duration="300">I am a...
            <span style="color: white" class="strike">Student</span><br>
            <span class="big" data-aos="fade-right" data-aos-duration="400" data-aos-delay="1000"><span
              style="color: darkgoldenrod">future</span> developer /<br> data analyst</span>
          </h2>
          <div class="description">
            <span data-aos="fade-right" data-aos-duration="500" data-aos-delay="1400">
              As I progressed in my programming journey since 2019, I started to discover more and more fields, some of
            which got my interest, i.e., Data Science & Web Development.<br><br>
            </span>
            <span data-aos="fade-right" data-aos-duration="500" data-aos-delay="1600">
              I look forward to using my skills to build programs or anything that can contribute to the world.
            </span>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
            <arrowLink text="Learn more about me" href="/about"
                       style="font-weight: bold; margin-top: 80px;"></arrowLink>
          </div>

        </v-col>
        <v-col cols="12" md="4">
          <div>
            <img src="/index/person.svg" alt="" width="100%" data-aos="zoom-in-left">
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="section" id="section3">
      <h2 class="section-title" data-aos="fade-right" data-aos-duration="500">What is this site?</h2>
      <div class="section-content">
        <div>
          <div class="center" data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">Beside programming, I
            enjoy writing too! <br></div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="600">
            In this website, I write stories of my life as well as
            sharing projects and analysis that I have done previously.
          </div>
        </div>
        <v-row class="mt-md-8 mt-2">
          <v-col cols="12" md="4" v-for="(card, idx) in cards" data-aos="flip-left" data-aos-duration="400"
                 :data-aos-delay="700 + 200 * idx" :key="idx">
            <nuxt-link :to="card.href">
              <v-card class="writing-cards" elevation="10px" outlined>
                <img :src="card.img" alt="" height="300px">
                <arrowLink :text="card.name"/>
              </v-card>
            </nuxt-link>

          </v-col>
        </v-row>
      </div>
    </div>
    <div class="section" id="section4">
      <h2 class="section-title" data-aos="fade-right" data-aos-duration="500">LifeStyle</h2>
      <div class="section-content">
        <v-row>
          <v-col cols="12" md="6">
            <img src="/index/reading.svg" alt="" width="100%" data-aos="zoom-in-right" data-aos-delay="200ms">
          </v-col>
          <v-col cols="12" md="6" class="right">
            <v-spacer></v-spacer>
            <div class="some-header" data-aos="fade-left">I like to read as well</div>
            <div data-aos="fade-left" data-aos-delay="400ms">Though not a big fan of fictions, I love reading
              tutorials and self-help books that can improve me mentally.
            </div>
            <v-spacer></v-spacer>
            <div data-aos="fade-left" data-aos-delay="800ms">
              <nuxt-link to="/goals">
                <arrowLink text="Check them out"/>
              </nuxt-link>
            </div>
            <div data-aos="fade-left" data-aos-delay="1200ms" class="sub-text">I have listed my annual resolutions and
              their progress there too!
            </div>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

export default {
  name: "index",
  head() {
    return {
      title: 'Home Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hi, I am Shen Yien, an enthusiastic programmer (Computer Science student). You can learn all about me here!'
        },
        {
          property: 'og:title',
          content: 'Home Page',
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content: 'Hi, I am Shen Yien, an enthusiastic programmer (Computer Science student). You can learn all about me here!',
          vmid: 'og:description'
        },
        {
          property: 'og:url',
          content: '',
          vmid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: 'Home Page',
          vmid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: 'Hi, I am Shen Yien, an enthusiastic programmer (Computer Science student). You can learn all about me here!',
          vmid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          vmid: 'twitter:card'
        }
      ]
    }
  },
  data() {
    return {
      start: false,
      cards: [
        {
          img: '/index/csdiary.svg',
          name: "CS Diary (Blog)",
          href: "/csdiary"
        },
        {
          img: '/index/analysis.svg',
          name: "Analysis",
          href: "/analysis"
        },
        {
          img: '/index/project.svg',
          name: "Projects",
          href: "/projects"
        }
      ]
    }
  },
  methods: {
    goTo(section) {
      this.$goTo(section);
    }
  },
  mounted() {
    AOS.init();
    this.start = true;
  }
}
</script>

<style scoped lang="scss">
.section-title {
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 10px;
  position: relative;
  padding-left: 4.8rem;
  color: whitesmoke;
  margin-bottom: 10px;
}

.section-title::before {
  content: '';
  width: 4rem;
  height: 4px;
  background-color: darkgoldenrod;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

#section4 {
  padding: 70px 0;

  .section-content {
    @include section;
    padding-top: 0;
    font-size: 1.5rem;
    color: $secondary-text;
  }

  .some-header {
    font-size: 2rem;
    color: goldenrod;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;

    a {
      display: inline-block;
      height: 50px;
      margin-top: 8px;

      .link--arrowed {
        font-size: 24px;

        &:hover {
          font-size: 28px;
        }
      }
    }
  }

  .sub-text {
    color: gray;
    font-size: 1.3rem;
  }
}

#section3 {
  background-color: black;
  padding-left: 0;
  padding-top: 70px;
  padding-right: 0;
  padding-bottom: 70px;

  .section-content {
    @include section;
    padding-top: 0;
    font-size: 1.5rem;
    color: $secondary-text;

    .center {
      display: block;
      text-align: center;
      margin-bottom: 5px;
      font-size: 2rem;
      color: $secondary;
    }
  }

  .writing-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-color: $primary;
    font-size: 24px;

    img {
      margin-bottom: 40px;
      filter: brightness(50%);
      transition: all 0.2s linear;
    }

    &:hover img {
      filter: brightness(100%);
      transform: scale(1.1);
    }

    & + a {
      display: none;
    }
  }
}

#section2 {
  .somewhat-big {
    font-size: 2rem;

    .strike {
      display: inline-block;
      position: relative;
    }

    .strike::after {
      content: ' ';
      position: absolute;
      top: calc(50% - 5px);
      left: 0;
      width: 100%;
      height: 10px;
      background: #8B4513;
    }

    &.aos-animate .strike::after {
      animation: strike 0.3s ease-in both 0.3s;
    }
  }

  .big {
    font-size: 3rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    color: gold;
    font-weight: bolder;
  }

  .description {
    color: $secondary-text;
    margin-left: 20px;
    margin-right: 150px;
    font-size: 1.2rem;

    span {
      display: block;
    }
  }
}

.section {
  min-height: 100vh;
  position: relative;
  @include section;
}

#section1 {
  background-color: black;

  .enter-animation {
    animation: ease-out enterAnim 0.8s;
    animation-delay: 0.8s;
    animation-fill-mode: both;
    text-align: center;
    margin-top: 40px;
  }

  .bounce-7 {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: bounce-7;
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
  }

  .go-down {
    margin-top: 80px;
    opacity: 0;
    transform: translateY(100px);
    animation: fade-from-bottom 0.4s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
  }
}

@keyframes strike {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes enterAnim {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  95% {
    opacity: 0.3;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce-7 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, .9) translateY(0);
  }
  30% {
    transform: scale(.9, 1.1) translateY(-10px);
  }
  50% {
    transform: scale(1.05, .95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-3px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}

@keyframes fade-from-bottom {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media only screen and (max-width: 600px) {
  #section2 {
    .description {
      margin-right: 0;
    }

    .big {
      font-size: 2.5rem;
    }
  }
  #section3 {
    .section-content {
      padding-top: 0;
      font-size: 1.2rem;

      .center {
        text-align: left;
        font-size: 1.5rem;
      }
    }

    .writing-cards img {
      filter: brightness(100%);
    }
  }
  .section-title {
    font-size: 30px;
  }
  #section4 {
    .section-content {
      padding-top: 20px;

      .right {
        padding-left: 20px;

        .some-header {
          font-size: 1.5rem;
        }

        div {
          font-size: 1.2rem;
        }

        .sub-text {
          font-size: 1rem;
        }

        .link--arrowed {
          font-size: 1.2rem;

          &:hover {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}

</style>
<style lang="scss">
.writing-cards {
  a.link {
    font-size: 24px;
  }

  &:hover {
    a.link {
      font-size: 27px;
      font-weight: bold;

      .arrow-icon {
        transform: translate3d(5px, 0, 0);
      }

      .arrow-icon--circle {
        stroke-dashoffset: 0;
      }
    }
  }
}
</style>
