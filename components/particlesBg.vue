<template>
  <!-- particle component-->
  <div>
    <Particles
      id="tsparticles"
      :height="myHeight"
      :options="{
                    background: {
                        color: {
                            value: '#000'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#fff'
                        },
                        links: {
                            color: '#aaa',
                            distance: 300,
                            enable: line,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: movementSpeed,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: particleNum
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
    />

  </div>

</template>
<script>
export default {
  name: "Particlescomponent",
  props: ['connected', 'num', 'speed'],
  data() {
    return {
      myHeight: '100vh',
    }
  },
  computed: {
    line() {
      return this.connected == null;
    },
    particleNum() {
      return this.num == null ? 80 : this.num;
    },
    movementSpeed() {
      return this.speed == null ? 3 : this.speed
    },
  },
  mounted() {
    this.myHeight = window.outerHeight;
  }
};
</script>
<style scoped>
#tsparticles {
  position: absolute;
  width: 100%;
  z-index: 0;
  height: 100vh;
}
</style>
