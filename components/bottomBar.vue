<template>
  <div id="bottom-bar">
    <v-icon size="90" id="up-btn" @click="goTop">mdi-chevron-up</v-icon>
    <div id="social-icons">
      <v-btn fab class="social-btn" large color="#141314" :href="social.url"
             v-for="social in socials" :key="social.url">
        <v-icon size="36" dark>{{social.icon}}</v-icon>
      </v-btn>
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
.social-btn {
  margin: 0 10px;
}
#social-icons {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
#up-btn::after {
  all: unset;
}
#bottom-bar {
  position: relative;
  height: 300px;
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
</style>
