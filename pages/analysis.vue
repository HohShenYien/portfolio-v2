<template>
  <div>
    <div class="section" id="section1">
      <div class="background" data-aos="zoom-in-left"><canvas id="canvas"/></div>
      <div class="content">
        <h1 class="page-title" data-aos="fade-right" data-aos-delay="250">Analysis</h1>
        <div class="underlines" data-aos="fade-right" data-aos-delay="350">
          <div id="underline1"></div>
          <div id="underline2"></div>
        </div>
        <div class="page-subtitle" data-aos="fade-right" data-aos-delay="550">My data analysis projects on various topics</div>
        <div id="hand">
          <img src="/analysis/holding_magnifying.png" height="240px" alt="">
        </div>
      </div>
      <hLink id="check-btn" text="👇 Check them out"></hLink>
    </div>
  </div>

</template>

<script>
import * as THREE from 'three'
import AOS from 'aos'
import 'animate.css'
export default {
  name: "analysis",
  methods: {
    startBackground() {
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
      camera.position.z = 1.5;
      camera.position.x = -0.8;

      let canvas = document.querySelector("#canvas");
      let renderer = new THREE.WebGLRenderer({canvas: canvas});

      let geometry = new THREE.IcosahedronGeometry(1, 5);
      let material = new THREE.MeshBasicMaterial({
        color: '#444',
        wireframe: true,
      });
      let cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      function resize() {
        let width = canvas.clientWidth;
        let height = canvas.clientHeight;
        if (width != canvas.width || height != canvas.height) {
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
      }
      function render(time) {
        time *= 0.0002;
        resize();
        cube.rotation.x = time;
        cube.rotation.y = time * 0.31;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      }
      render();
    },
    startComponents() {
      document.getElementById('hand').classList.add('start');
      document.getElementById('check-btn').classList.add('start');
    }
  },
  mounted() {
    this.startBackground();
    AOS.init();
    this.startComponents();
  }
}
</script>
<style scoped>
#check-btn {
  position: absolute;
  bottom: -50px;
  left: 40px;
  font-size: 20px;
}
#check-btn.start {
  animation: fade-from-bottom 1s linear forwards;
  animation-delay: 1s;
}
#hand {
  position: relative;
  margin-top: 60px;
  margin-left: -130px;
  visibility: hidden;
}
#hand.start {
  visibility: visible !important;
}
#hand.start img {
  position: absolute;
  transform-origin: left bottom;
  transform: rotate(-90deg);
  animation: swingMag 1s cubic-bezier(.55,1.02,.72,.65) forwards;
  animation-delay: 600ms;
}
.underlines {
  margin-top: -20px;
  margin-bottom: 30px;
}

.page-subtitle {
  margin-left: 20px;
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
#section1 {
  background-color: black;
}
#section1 .content {
  z-index: 1;
  padding-top: 100px;
  padding-left: 50px;
  position: relative;
}
.section {
  min-height: 100vh;
  position: relative;
}
.background {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 0;
}
#canvas {
  height: 100%;
  width: 100%;
}

@keyframes swingMag {
  0% {
    transform: rotate(-90deg);
  }
  65% {
    transform: rotate(-5deg);
  }
  80% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(-5deg);
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
@media only screen and (max-width: 600px) {
  h1 {
    text-align: center;
  }
  .page-subtitle {
    text-align: center;
    margin-left: 0;
    margin-top: 20px;
  }
  #section1 .content {
    padding-left: 10px;
    padding-right: 10px;
  }
  .underlines {
    display: none;
  }
  #hand {
    margin-top: 120px;
  }
  #check-btn {
    left: 0;
  }
}
</style>
