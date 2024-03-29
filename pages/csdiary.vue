<template>
  <div>
    <section class="section section1" id="section1">
      <particlesBg id="particle-bg"/>
      <div class="section1-content">
        <div class="terminal">
          <div class="terminal-top-bar">
            <img src="/csdiary/close-btn.svg" alt="" class="terminal-icons">
            <img src="/csdiary/enlarge-btn.svg" alt="" class="terminal-icons">
            <img src="/csdiary/minimize-btn.svg" alt="" class="terminal-icons">
          </div>
          <div class="terminal-content pt-8">
            <h1 class="text-center page-title">CS Diary</h1>
            <div class="subheader page-subtitle">
              <v-icon :size="isMobile? 30 : 70">mdi-chevron-right</v-icon>
              <span id="typing"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" v-if="!isMobile">
        <button @click="goTo('section2')" class="go-down">
          Scroll down<br>
          <v-icon class="bounce-7" size="50">mdi-chevron-down</v-icon>
        </button>
      </div>
      <div v-else class="text-center">
        <button @click="goTo('section2')" class="go-down">
          Read them here<br>
          <v-icon class="bounce-7" size="50">mdi-chevron-down</v-icon>
        </button>
      </div>

    </section>
    <blogs id="section2"></blogs>
  </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: "index",
  data() {
    return {
      jump: {
        classes: 'fadeIn',
        duration: 5000,
        iteration: 'infinite'
      },
      drawer: false,
      posts: []
    }
  },
  head() {
    return {
      title: 'CS Diary',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Here are where I write blogs about my journey in Computer Science. Read the stories / tips ' +
            'that I will post when I am free.'
        },
        {
          property: 'og:title',
          content: 'CS Diary',
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: 'Here are where I write blogs about my journey in Computer Science. Read the stories / tips ' +
            'that I will post when I am free.',
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: 'csdiary',
          hid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: 'CS Diary',
          hid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: 'Here are where I write blogs about my journey in Computer Science. Read the stories / tips ' +
            'that I will post when I am free.',
          hid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          hid: 'twitter:card'
        },
        {
          property: 'twitter:image',
          content: 'https://i.imgur.com/0wuU2uXl.png',
          hid: 'twitter:image'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/0wuU2uXl.png',
          hid: 'og:image'
        },
        {
          name: 'keywords',
          content: `Blog,CS Diary`,
          hid: 'keywords'
        }
      ]
    }
  },
  methods: {
    typing() {
      let position = document.getElementById('typing');

      let typewriter = new Typewriter(position, {
        loop: false,
        cursor: '█',
        delay: 30
      });
      typewriter
        .pauseFor(100)
        .typeString('Here is where I write blog about my journey in computer science! ')
        .start();
    },
    goTo(section) {
      this.$goTo(section);
    },
  },
  computed: {
    isMobile: function () {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  mounted() {
    this.typing();
  }
}
</script>

<style scoped lang="scss">
#particle-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}

.subheader {
  padding-left: 40px;
}

.section1-content {
  padding-top: 60px;
  height: 80%;
  position: relative;
  z-index: 1;
}

.terminal-content {
  width: 100%;
  height: calc(100% - 20px);
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 70vh;
  padding-bottom: 20px;
}

.terminal {
  width: 80%;
  background-color: rgba(25, 25, 112, 0.6);
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  height: 90%;
  padding: 5px;
}

.terminal-top-bar {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 5px;
}

.terminal-icons {
  width: 18px;
  margin-left: 5px;
}

.bounce-7 {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: bounce-7;
  animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
}

.go-down {
  margin-top: 15px;
  padding: 5px 20px;
  opacity: 0;
  transform: translateY(100px);
  animation: fade-from-bottom 0.4s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
}

#section1 {
  position: relative;
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
  h1 {
    font-size: 60px;
  }
  .terminal {
    margin-top: 15%;
    width: 95%;
    min-height: 0;
    height: 40vh;
  }
  .terminal-content {
    min-height: 0;
  }
  .subheader {
    font-size: 24px;
    padding-left: 10px;
  }
  .section1-content {
    padding-top: 40px;
    height: 50%;
  }
  .section {
    min-height: 50vh;
  }
  #section2 {
    column-count: 1;
  }
}
</style>
