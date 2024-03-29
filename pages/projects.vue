<template>
  <div>
    <section class="section" id="section1">
      <canvas id="matrix"></canvas>
      <div class="page-header start" id="page-box">
        <h1 class="page-title">Projects</h1>
        <div class="page-subtitle">Some of my best / favourite projects<br> that I have done</div>
      </div>
      <div class="down-btn-wrapper start" id="down-btn">
        <div class="down-btn" @click="goTo('section2')">
          <span>Take a look <v-icon>mdi-arrow-down</v-icon></span>
        </div>
        <img src="/projects/finger.svg" alt="" class="after" id="finger" ref="finger">
      </div>
    </section>
    <project-list id="section2"></project-list>
  </div>
</template>
<script>
export default {
  name: "projects",
  head() {
    return {
      title: 'Project Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Some of my best / favourite projects that I have done before. You can also check out what I ' +
            'used to build them here!'
        },
        {
          property: 'og:title',
          content: 'Project Page',
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: 'Some of my best / favourite projects that I have done before. You can also check out what I ' +
            'used to build them here!',
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: 'projects',
          hid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: 'Project Page',
          hid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: 'Some of my best / favourite projects that I have done before. You can also check out what I ' +
            'used to build them here!',
          hid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          hid: 'twitter:card'
        },
        {
          property: 'twitter:image',
          content: 'https://i.imgur.com/UG9AtP0l.png',
          hid: 'twitter:image'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/UG9AtP0l.png',
          hid: 'og:image'
        },
        {
          name: 'keywords',
          content: `Personal Projects`,
          hid: 'keywords'
        }
      ]
    }
  },
  data() {
    return {
      ctx: null,
      canvas: null,
      drops: null,
      fontSize: 12,
    }
  },
  methods: {
    startAnim() {
      setTimeout(() => {
        document.getElementById('page-box').classList.add("start");
        document.getElementById('finger').classList.add('start');
      }, 100);
    },
    initMatrix() {
      this.canvas = document.querySelector('#matrix');
      this.canvas.height = this.canvas.offsetHeight;
      this.canvas.width = this.canvas.offsetWidth;
      this.ctx = this.canvas.getContext('2d');
      let columns = this.canvas.width / this.fontSize;
      this.drops = [];
      for (let i = 0; i < columns; i++) {
        this.drops[i] = 1;
      }
      setInterval(this.draw, 33);
    },
    draw() {
      this.ctx.fillStyle = 'rgba(0, 0, 0, .04)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
      letters = letters.split('');
      this.ctx.fillStyle = '#00AA0099';
      for (let i = 0; i < this.drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
        this.drops[i]++;
        if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > .95) {
          this.drops[i] = 0;
        }
      }
    },
    goTo(section) {
      this.$goTo(section);
    },
  },
  mounted() {
    this.initMatrix();
    this.startAnim();
  }
}
</script>

<style scoped>
#section2 {
  padding: 120px 130px;
}

.down-btn-wrapper {
  z-index: 1;
  position: absolute;
  bottom: 5%;
  opacity: 0;
}

.down-btn {
  position: relative;
  padding: 8px 20px;
  cursor: pointer;
  z-index: 1;
  border: 1px white solid;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(1, 0, 0.55, 1);
}

.down-btn span {
  z-index: 2;
  display: block;
  position: relative;
}

.down-btn::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: 100%;
  border-radius: 0 0 100% 100%/0 0 100% 100%;
  background-color: white;
  transition: all 0.4s cubic-bezier(1, 0, 0.55, 1);
  z-index: 1;
}

.down-btn:hover::after {
  content: "";
  bottom: -20px;
}

#finger.start {
  right: -40px;
  transform: translateX(0);
  animation: linear rotate-finger 3s;
  animation-iteration-count: infinite;
  animation-delay: 1.4s;
}

#finger {
  transform: rotateZ(-90deg);
  right: -999px;
  top: calc(50%);
  transform-origin: top center;
  height: 40px;
  width: 40px;
  position: absolute;
  display: block;
  transition: right 1.2s linear 1.4s;
}

.down-btn:hover {
  color: black !important;
}

.down-btn:hover .mdi {
  color: black !important;
}

.down-btn .mdi {
  transition: all 0.4s cubic-bezier(1, 0, 0.55, 1) !important;
}

.page-header {
  z-index: 1;
  color: white;
  background-color: #80808040;
  position: relative;
  text-align: center;
  min-width: 70%;
  padding: 100px 40px;
  opacity: 0;
  margin: 0 20px;
}

.page-header.start, .down-btn-wrapper.start {
  animation: linear fade-flip-up 0.5s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}

.page-title {
  margin-bottom: 40px;
}

#matrix {
  position: absolute;
  height: 100%;
  width: 100%;
}

#section1 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  perspective-origin: center;
  flex-direction: column;
  padding-bottom: 70px;
}

.section {
  min-height: max(100vh, 740px);
  padding-top: 70px;
  overflow: hidden;
}

@keyframes rotate-finger {
  0% {
    transform: rotateZ(-90deg) translateX(0);
  }
  25% {
    transform: rotateZ(-100deg) translateX(10px);
  }
  50% {
    transform: rotateZ(-90deg) translateX(0);
  }
  75% {
    transform: rotateZ(-80deg) translateX(-10px);
  }
  100% {
    transform: rotateZ(-90deg) translateX(0);
  }
}

@keyframes fade-flip-up {
  0% {
    transform: translateY(90px) rotateX(30deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0);
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) {
  .page-header {
    padding: 60px 20px;
  }

  .section {
    min-height: 50vh;
  }

  .page-header {
    margin-bottom: 100px;
  }

  #section2 {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>

