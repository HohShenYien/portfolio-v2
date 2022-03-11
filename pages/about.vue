<template>
  <div>
    <div>
      <section class="section section1" id="section1">
        <div id="bottom-bar">
          <div class="img-wrapper">
            <img src="/about/home.png" alt="" height="22px" class="images">
          </div>
          <div class="img-wrapper" id="logo">
            <img src="/favicon.ico" height="22px" class="images">
          </div>
        </div>
        <div class="wrapper">
          <div class="cursor">
            <img src="/about/cursor.png" alt="" id="pointer-cursor" class="show" height="20px">
            <img src="/about/select.png" alt="" id="select-cursor" class="hidden" height="20px">
          </div>
        </div>
        <div id="window">
          <div class="window-title disappear">
            <h1 class="page-title">About Me</h1>
            <div class="underlines">
              <div id="underline1"></div>
              <div id="underline2"></div>
            </div>
            <h2 class="subtitle">An aspiring computer science student with a passion in</h2>
            <div class="interest">
              <div style="color: #ffae00">Web Development</div>
              <div style="color: #ffd940">Data Analysis</div>
              <div style="color: #ffee00">& Competitive Programming</div>
            </div>
          </div>
          <div class="me disappear">
            <img src="/about/me.png" alt="">
          </div>
          <h-link @click="goTo('section2')" class="point-down disappear">👇 Scroll down</h-link>
        </div>
      </section>
      <section class="section section2" id="section2">
        <h2 class="section-title" data-aos="fade-right">Who I am</h2>
        <div class="section2-content">
          <div class="myPic">
            <img src="/about/avatar.png" alt="" data-aos="flip-left" data-aos-duration="700">
          </div>
          <div class="right-part">
            <div class="top-part" data-aos="fade-left" data-aos-duration="700">
              Hey there, nice to meet you! <img src="/about/wave.svg" alt="" class="waving">
            </div>
            <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="200">
              I am Shen Yien, currently studying Computer Science (Data Analytics) in Asia Pacific University, Malaysia.
            </div>
            <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="400">
              I began my journey in computer science with Python to solve problems in
              <h-link href="https://projecteuler.net/">Project Euler</h-link> which slowly expanded into other areas.
            </div>
            <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="600">
              After inspiration from <h-link href="https://towardsdatascience.com/names-uniqueness-2a7cbd449447">
              Name uniqueness
            </h-link>, I began to delve into the world of Data Science so that I can achieve what has been done
              in the post.
            </div>
          </div>
        </div>
      </section>
      <section class="section section3" id="section3">
        <h2 class="section-title" data-aos="fade-right">Facts About Me</h2>
        <v-row class="section3-content">
          <v-col class="col-12 col-md-3 same-height" style="width: 25%">
            <v-card class="fact-part" data-aos="flip-left">
              <v-icon size="140" class="mb-3 text-center d-block">mdi-school</v-icon>
              <div class="wrapper-section3">
                <div class="mb-9">10A+ in SPM (high school final examination) and 3A* in A level.</div>
                <div>I had also obtained Top In the World Awards in Mathematics for AS Level Examination.</div>
              </div>
            </v-card>
          </v-col>
          <v-col class="col-12 col-md-3 same-height">
            <v-card class="fact-part" data-aos="flip-left" data-aos-delay="150">
              <v-icon size="140" class="mb-3 text-center d-block">mdi-human-male-board</v-icon>
              <div class="wrapper-section3">
                <div>I had experience teaching as a tutor for high school and primary school subjects
                  as well as coding.
                </div>
                <div>One to one and at tuition centre</div>
              </div>
            </v-card>
          </v-col>
          <v-col class="col-12 col-md-3 same-height">
            <v-card class="fact-part" data-aos="flip-left" data-aos-delay="300">
              <v-icon size="140" class="mb-3 text-center d-block">mdi-translate</v-icon>
              <div class="wrapper-section3">
                <div>As a Chinese living in Malaysia, I can speak, read and write English, Malay, Mandarin
                  and Cantonese well.
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col class="col-12 col-md-3 same-height">
            <v-card class="fact-part" data-aos="flip-left" data-aos-delay="450">
              <v-icon size="140" class="mb-3 text-center d-block">mdi-heart</v-icon>
              <div class="wrapper-section3">
                <div>I love to play chess and tetris.</div>
                <div>I love free and open source software (foss) and
                  even dual boot my laptop with Arch Linux.
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </section>
      <section class="section section4">
        <h2 class="section-title" data-aos="fade-right">My Skills</h2>
        <v-row class="section4-content">
          <v-col class="col-12 col-md-4 same-height" v-for="(group, idx) in skills" :key="idx">
            <v-card class="skill-card">
              <div>
                <h3 class="skill-title mb-3">{{ group.name }}</h3>
              </div>
              <div class="skill" v-for="skill in group.data" :key="skill.name">
                <img :src="'/about/' + skill.img" alt="" width="15%" class="skill-img">
                <div class="skill-progress-wrapper">
                  <div class="d-flex">
                    <h4>{{ skill.name }}</h4>
                    <v-spacer/>
                    <span>{{ skill.label }}</span>
                  </div>
                  <animate-progress-bar bar-height="10px" bar-width="100%" :progress="skill.progress"/>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="section4-note">
          Updated on 4th March 2022.<br>Based on what I think how much more to know.
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import 'aos/dist/aos.css'
import AOS from 'aos'
import 'animate.css'
import animateProgressBar from "@/components/animateProgressBar";

export default {
  components: {animateProgressBar},
  computed: {
    isMobile() {
      if (process.client) {
        return window.innerWidth < 600;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      pointer: null,
      select: null,
      logo: null,
      window: null,
      bottomBar: null,
      skills: {
        front: {
          name: "Front-end",
          data: [{name: "HTML & CSS", img: "html_css.svg", progress: "80%", label: "Many Projects"},
            {name: "Javascript", img: "javascript.svg", progress: "70%", label: "Many Projects"},
            {name: "Vue & Vuetify", img: "vue.svg", progress: "65%", label: "3 Projects"},
            {name: "React", img: "react.svg", progress: "60%", label: "1 Project"},
            {name: "Nuxt", img: "nuxt.svg", progress: "50%", label: "1 Project"},
            {name: "Next js", img: "next-js.svg", progress: "40%", label: "1 Project"}
          ]
        },
        back: {
          name: "Back-end",
          data: [ {name: "SQL", img: "mysql.svg", progress: "70%", label: "Many Projects"},
            {name: "Laravel", img: "laravel.svg", progress: "60%", label: "3 Projects"},
            {name: "Flask", img: "flask.svg", progress: "40%", label: "3 Projects"}]
        },
        data: {
          name: "Data Analysis",
          data: [{name: "R", img: "rstudio.svg", progress: "70%", label: "Many Projects"},
            {name: "Excel", img: "excel.svg", progress: "50%", label: "Some Projects"},
            {name: "SAS", img: "sas.svg", progress: "45%", label: "1 Project"},
            {name: "Machine Learning", img: "ml.svg", progress: "30%"}]
        },
        se: {
          name: "App Development",
          data: [{name: "Android Studio (Java)", img: "android.svg", progress: "70%", label: "4 Projects"},
            {name: "Electron", img: "electron.svg", progress: "55%", label: "1 Project"},
            {name: "QT", img: "qt.svg", progress: "45%", label: "1 Project"}
          ]
        },
        language: {
          name: "Other languages",
          data: [{name: "Python", img: "python.svg", progress: "80%", label: "Main language"},
            {name: "C++", img: "cpp.svg", progress: "55%"},
            {name: "C", img: "c.svg", progress: "50%"}]
        },
        misc: {
          name: "Others",
          data: [{name: "Git", img: "git.svg", progress: "75%", label: "Used often"},
            {name: "Wordpress", img: "wordpress.svg", progress: "60%", label: "2 Projects"},
            {name: "Command lines", img: "cmd.svg", progress: "45%"}]
        },
      }
    }
  },
  methods: {
    startAnim() {
      this.bottomBar.classList.add('start');
      setTimeout(() => {
        document.getElementsByClassName('cursor')[0].classList.add('start');
        document.getElementsByClassName('wrapper')[0].classList.add('start');
      }, 1000);

    },
    getItems() {
      this.pointer = document.getElementById('pointer-cursor');
      this.select = document.getElementById('select-cursor');
      this.logo = document.getElementById('logo');
      this.window = document.getElementById('window');
      this.bottomBar = document.getElementById('bottom-bar');
    },
    cursorAway() {
      this.select.classList.add('away');
    },
    showEverything() {
      this.window.classList.add('popup')
      this.bottomBar.classList.add('solid');
      this.bottomBar.classList.add('start')
      this.logo.classList.add("opened")
      setTimeout(this.cursorAway, 100);
      setTimeout(this.delayShow, 400);
    },
    checkTouch() {
      if (this.isCollide(this.pointer.getBoundingClientRect(), this.logo.getBoundingClientRect())) {
        this.pointer.classList.add('hidden');
        this.select.classList.add('show');
        this.select.classList.remove('hidden');
        this.pointer.classList.remove('show');
        this.logo.classList.add('show');
        setTimeout(this.showEverything, 200);

      } else {
        setTimeout(this.checkTouch, 10);
      }
    },
    isCollide(a, b) {
      return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
      );
    },
    delayShow() {
      Array.from(document.getElementsByClassName("disappear")).forEach(el => {
        el.classList.remove("disappear");
      })
    },
    goTo(section) {
      this.$goTo(section);
    }
  },
  mounted() {
    this.getItems();
    setTimeout(this.checkTouch, 500);
    AOS.init();
    this.startAnim();
  },
  head() {
    return {
      title: 'About Me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Curious about who I am? Check out my skills and learn more about me here!'
        },
        {
          property: 'og:title',
          content: 'About Me',
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: 'Curious about who I am? Check out my skills and learn more about me here!',
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: 'about',
          hid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: 'About Me',
          hid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: 'Curious about who I am? Check out my skills and learn more about me here!',
          hid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          hid: 'twitter:card'
        },
        {
          property: 'twitter:image',
          content: 'https://i.imgur.com/neGo44Cl.png',
          hid: 'twitter:image'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/neGo44Cl.png',
          hid: 'og:image'
        },
      ]
    }
  },
};
</script>
<style scoped>
/* Style for fourth section */
.section4-note {
  margin-top: 20px;
  margin-right: 130px;
  color: gray;
  font-size: 0.9rem;
  text-align: right;
}

.same-height {
  display: flex;
  flex-direction: column;
}

.skill {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.skill-img {
  aspect-ratio: 1;
  object-fit: contain;
}

.skill-progress-wrapper {
  width: 70%;
  display: inline-block;
  padding-left: 20px;
}

.skill-title {
  font-size: 1.8rem;
  display: inline-block;
  border-bottom: #FFFFFFF0 solid 4px;
  border-radius: 3px;
  margin-bottom: 8px;
}

.skill-card {
  text-align: center;
  padding: 10px;
  height: 100%;
  transition: transform 0.5s, box-shadow 0.5s;
}

.skill-card:hover {
  box-shadow: -4px 6px #444444 !important;
  transform: translateX(4px) translateY(-8px);
}

.section4-content {
  padding: 0 130px;
}

/*Style for third section */
.section3-content {
  padding: 0 130px;
}

.fact-part {
  padding: 20px 40px;
  position: relative;
  height: 100%;
  transition: transform 0.5s, box-shadow 0.5s;
}

.fact-part .wrapper-section3 div {
  position: relative;
  margin-bottom: 36px;
}

.fact-part .wrapper-section3 div::before {
  content: "⭐";
  position: absolute;
  top: 0;
  left: -30px;
}

.section3 .mdi {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 10%,
    #fdf497 15%,
    #fd5949 40%,
    #d6249f 50%,
    #285aeb 65%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/*Style for second section*/
.waving {
  transform-origin: bottom right;
  animation: wave-hand 1s linear;
  animation-iteration-count: infinite;
  width: 80px;
  height: auto;
  margin-bottom: -10px;
  display: inline-block;
}

.right-part .top-part {
  font-size: 34px;
  color: white;
  margin-left: -18px;
}

.right-part div {
  margin-bottom: 15px;
  font-size: 26px;
  color: gray;
}

.right-part {
  margin-top: 20px;
  width: 60%;
}

.myPic {
  margin-top: 50px;
  width: 40%;
  margin-right: 100px;
}

.myPic img {
  width: 80%;
  box-shadow: chocolate 15px 15px;
  transition: box-shadow 300ms;
}

.section3 {
  background-color: black;
}

.myPic img:hover {
  box-shadow: chocolate 35px 35px;
}

.section2-content {
  display: flex;
  flex-direction: row;
  padding: 0 130px;
}

.section-title {
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 10px;
  position: relative;
  padding-left: 4.8rem;
  color: whitesmoke;
  margin-bottom: 32px;
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

/*Style for first section*/
.section:not(:first-child) {
  padding-top: 70px;
}

.section1 {
  background-image: url("/about/windows11.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
}

.section {
  min-height: max(100vh, 705px);
  padding-bottom: 100px;
}

#bottom-bar {
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 40px;
  text-align: center;
  animation: bottom-bar-animation 1s linear;
  animation-delay: 1s;
  animation-fill-mode: both;
}

#bottom-bar .img-wrapper {
  padding: 4px;
  display: inline-block;
  margin-top: 5px;
  height: 30px;
  border-radius: 2px;
}

#logo {
  position: relative;
}

#logo.opened::after {
  width: 6px;
  content: '';
  height: 3px;
  background-color: white;
  position: absolute;
  left: calc(50% - 3px);
  bottom: 1px;
  border-radius: 100px;
}

#bottom-bar.solid {
  background-color: black;
}

.cursor {
  width: 20px;
  z-index: 1;
}

.cursor.start {
  animation: x-axis 1s linear;
  animation-fill-mode: forwards;
  position: relative;
}

.cursor img {
  position: absolute;
  top: 0;
}

#select-cursor.away {
  animation-delay: 1s;
  animation: away 2s linear;
  animation-fill-mode: forwards;
}

.wrapper {
  position: absolute;
  right: -40px;
  top: -40px;
}

.wrapper.start {
  animation: y-axis 1s cubic-bezier(.69, .22, .73, .49);
  animation-fill-mode: forwards;
}

.wrapper .show {
  visibility: visible;
}

.wrapper .hidden {
  display: none;
}

#window {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding-top: 70px;
  padding-left: 130px;
  display: flex;
  flex-direction: row;
  visibility: hidden;
}

.window-title {
  transform: translateX(-900px);
}

.window-title h1 {
  animation: fade-from-left-for-title 0.4s ease-in forwards;
  margin-top: 50px;
}

.window-title .subtitle {
  margin-top: 30px;
  font-size: 44px;
  font-weight: normal;
  width: 800px;
  animation: fade-from-left-for-title 0.4s ease-in;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
}

.underlines {
  margin-top: -20px;
  animation: fade-from-left-for-title 0.4s ease-in;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

#underline1 {
  width: 144px;
  height: 5px;
  border-radius: 6px;
  background-color: darkgoldenrod;
}

#underline2 {
  width: 144px;
  height: 5px;
  border-radius: 6px;
  background-color: darkgoldenrod;
  margin-left: 70px;
  margin-top: 15px;
}

#window.popup {
  visibility: visible;
  animation: openWindow 0.4s ease-in;
  animation-fill-mode: forwards;
}

.interest {
  font-size: 32px;
  margin-top: 20px;
  animation: fade-from-left-for-title 0.2s ease-in;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
}

.me {
  position: relative;
  animation: fade-in-picture 0.8s linear;
  animation-fill-mode: forwards;
}

.me img {
  height: 100%;
  mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.6) 100%);
  filter: grayscale(60%);
}

.disappear {
  display: none;
}

.point-down {
  position: absolute;
  left: 40px;
  bottom: -80px;
  font-size: 20px;
  cursor: pointer;
  animation: fade-from-bottom 0.4s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
}

@keyframes x-axis {
  100% {
    transform: translateX(calc(-50vw - 4px));
  }
}

@keyframes y-axis {
  100% {
    transform: translateY(calc(max(100vh, 705px) + 20px));
  }
}

@keyframes openWindow {
  0% {
    bottom: 0;
    width: 0;
    height: 0;
    top: 100vh;
    left: calc(50vw + 20px);
  }
  100% {
    bottom: 40px;
    width: 100vw;
    height: calc(max(100vh, 705px) - 40px);
    top: 0;
    left: 0;
  }
}

@keyframes away {
  100% {
    transform: translateY(50px);
  }
}

@keyframes bottom-bar-animation {
  0% {
    bottom: -50px;
  }
  100% {
    bottom: 0;
  }
}

@keyframes fade-from-left-for-title {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(900px);
  }
}

@keyframes fade-in-picture {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-from-bottom {
  0% {
    opacity: 0;
    bottom: -50px;
  }
  100% {
    opacity: 1;
    bottom: 5px;
  }
}

@keyframes wave-hand {
  0% {
    transform: rotate(40deg);
  }
  40% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(35deg);
  }
  100% {
    transform: rotate(40deg);
  }
}

@media only screen and (max-width: 600px) {
  .section1 {
    background-image: url("/about/windows11-phone.jpg");
  }

  #window {
    padding-left: 20px;
  }

  .window-title {
    z-index: 1;
    position: absolute;
    bottom: 80px;
  }

  .window-title .subtitle {
    font-size: 26px;
    width: 80%;
  }

  .underlines {
    margin-top: 0;
  }

  #underline1 {
    width: 100px;
  }

  #underline2 {
    width: 100px;
    margin-left: 60px;
  }

  .me {
    position: absolute;
    height: auto;
    left: -120px;
    top: 60px;
    bottom: 0;
  }

  .me img {
    z-index: 0;
    height: 100%;
  }

  .interest {
    font-size: 20px;
  }

  .point-down {
    left: 5px;
  }

  .section2-content {
    flex-direction: column;
    padding: 0 20px;
  }

  .section-title {
    font-size: 30px;
    letter-spacing: normal;
  }

  .myPic {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 10px;
    text-align: center;
  }

  .myPic img {
    width: 70%;
  }

  .waving {
    width: 50px;
    height: auto;
    margin-bottom: -10px;
  }

  .right-part .top-part {
    font-size: 27px;
    padding-left: 20px;
    margin-left: 0;
  }

  .right-part div {
    margin-bottom: 15px;
    font-size: 16px;
    color: gray;
    padding-left: 20px;
    padding-right: 20px;
  }

  .right-part {
    margin-top: 20px;
    width: 100%;
  }

  .section3-content {
    padding: 0 20px;
  }

  .section3 .row {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }

  .mdi {
    font-size: 60px !important;
  }

  .fact-part .wrapper-section3 {
    margin-left: 30px;
  }

  .fact-part {
    height: auto;
  }

  .section4-content {
    padding: 0 20px;
  }

  .section4-note {
    margin-right: 20px;
  }
}

@media only screen and (max-height: 660px) {
  .window-title .page-title {
    margin-top: 0;
  }
}
</style>
