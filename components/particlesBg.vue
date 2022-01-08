<template>
  <!-- particle component-->
  <div style="height: 100%; width: 100%;">
    <canvas id="particle-bg" style="height: 100%; width: 100%;" ref="background"/>
  </div>
</template>
<script>
import * as THREE from "three";

export default {
  name: "ParticlesBg",
  data() {
    return {
    }
  },
  methods: {
    startBackground() {
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
      camera.position.z = 1.5;
      camera.position.x = -0.8;

      let canvas = this.$refs.background;
      let renderer = new THREE.WebGLRenderer({canvas: canvas});

      let particleGeom = new THREE.BufferGeometry();
      let particleMaterial = new THREE.PointsMaterial({
        color: 'rgb(255, 255, 255)',
        size: 0.3,
        map: new THREE.TextureLoader().load('/frontpage/star.jpeg'),
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
      let particleCount = 5800;
      let vertices = [];
      let particleDistance = 53;
      for (var i=0; i<particleCount; i++) {
        let posX = (Math.random() - 0.5) * particleDistance;
        let posY = (Math.random() - 0.5) * particleDistance;
        let posZ = (Math.random() - 0.5) * particleDistance;
        vertices.push(posX, posY, posZ);
      }
      particleGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));

      let particleSys = new THREE.Points(particleGeom, particleMaterial);
      particleSys.name = 'particleSys';
      scene.add(particleSys);

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
        requestAnimationFrame(render);
        resize();
        let particleSys = scene.getObjectByName('particleSys');
        let position = particleSys.geometry.attributes.position.array;
        for (let i = 0; i < position.length; i++) {
          if ((i + 1) % 3 === 0) {
            position[i] += 0.1;
            if (position[i] > 30) {
              position[i] = -10;
            }
          }
        }
        particleSys.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      }
      render();
    },
  },
  mounted() {
    this.startBackground();
  }
};
</script>
<style scoped>

</style>
