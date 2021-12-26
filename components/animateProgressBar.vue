<template>
  <div style="display: inline-block" :style="{'width': barWidth}">
    <div class="progress" :style="{'height': barHeight}">
      <span class="progress-bar" :style="{width: progress}"
            data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="500"></span>
    </div>
  </div>
</template>

<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'animate.css';
export default {
  name: "animateProgressBar",
  props: ['progress', 'barHeight', 'barWidth'],
  mounted() {
    AOS.init();
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.progress {
  background: whitesmoke;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
}

.progress-bar {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #ffd33d, #ea4aaa 17%, #b34bff 34%, #01feff 51%, #ffd33d 68%, #ea4aaa 85%, #b34bff);
  background-size: 300% 100%;
  animation: progress-animation 10s linear infinite;
  border-radius: 10px;
}


@keyframes progress-animation {
  0% {
    background-position: 100%
  }
  100% {
    background-position: 0
  }

}

</style>
