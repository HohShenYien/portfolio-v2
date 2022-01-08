<template>
  <div id="bottom-bar">
    <v-icon size="90" id="up-btn" @click="goTop">mdi-chevron-up</v-icon>
    <div class="quote">Stay Hungry, Stay Foolish</div>
    <div id="social-icons">
      <v-btn fab class="social-btn" large color="#141314" :href="social.url"
             v-for="social in socials" :key="social.url">
        <v-icon size="36" dark>{{social.icon}}</v-icon>
      </v-btn>
    </div>
    <div id="footnote">
      <div>
        © 2021 Hoh Shen Yien | No rights reserved.
      </div>
      <div>
        We live in a free world! <div id="peace-wrapper"><img src="/public/peace.svg" id="peace" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomBar",
  data() {
    return {
      socials: [{icon: "mdi-facebook", url: "https://www.facebook.com/wenwen.hoh"},
        {icon: "mdi-linkedin", url: "https://www.linkedin.com/in/shen-yien-hoh-849988166/"},
        {icon: 'mdi-github', url: "https://github.com/HohShenYien"},
        {icon: "mdi-email", url: "mailto:hohshenyien@gmail.com"}]
    }
  },
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
#peace-wrapper {
  display: inline-block;
  width: 60px;
}
#peace {
  display: inline-block;
  height: 50px;
  animation: swing-peace 1.2s linear;
  animation-iteration-count: infinite;
  transform-origin: bottom right;
}
#footnote {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: flex-end;
}
.quote {
  text-align: center;
  font-size: 1.5rem;
}
.social-btn {
  margin: 0 10px;
}
.social-btn:hover i{
  color: goldenrod;
}
#social-icons {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
#up-btn::after {
  all: unset;
}
#bottom-bar {
  position: relative;
  padding: 50px 130px;
  background-color: #222;
}
#up-btn {
  position: absolute;
  left: calc(50% - 55px);
  background-color: #222;
  border-radius: 50%;
  top: -55px;
  width: 110px;
  height: 110px;
  text-align: center;
  right: 50%;
  transition: transform 200ms ease-in;
}

#up-btn:hover {
  transform: translateY(-10px);
}

@keyframes swing-peace {
  0% {
    transform: rotate(-30deg) scale(0.5);
  }
  35% {
    transform: rotate(10deg) scale(1.1);
  }
  45% {
    transform: rotate(-5deg) scale(0.96);
  }
  85% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(-30deg) scale(0.5);
  }
}

@media only screen and (max-width: 600px) {
  #bottom-bar {
    padding: 30px 20px;
  }
  .quote {
    margin-top: 50px;
  }
  #footnote {
    flex-direction: column;
    align-items: center;
  }
  #peace {
    margin-top: 15px;
  }
}
</style>
