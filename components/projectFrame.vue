<template>
  <div class="frame">
    <div class="phone-wrapper " v-if="type == 'phone'">
      <v-img :src="img" :alt="alt" height="550px" contain :lazy-src="lazy"/>
      <img src="/projects/phone-frame.png" alt="" class="phone-frame">
    </div>
    <div class="desktop-wrapper" v-if="type == 'desktop'">
      <v-img :src="img" :alt="alt" class="desktop-img" :lazy-src="lazy" :aspect-ratio="696 / 355"/>
      <img src="/projects/desktop-frame.png" alt="" class="desktop-frame">
    </div>
  </div>
</template>

<script>
export default {
  name: "project-frame",
  props: ['type', 'img', 'alt', 'lazy']
}
</script>

<style scoped>
.frame {
  position: relative;
  width: 100%;
  text-align: center;
}

.phone-frame {
  height: 600px;
  position: absolute;
  left: calc(50% - 149px);
  top: 0;
  width: 294px;
}

.desktop-frame {
  width: 100%;
  aspect-ratio: 726 / 460;
  position: relative;
}

.desktop-img {
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
}

.phone-wrapper {
  padding-top: 25px;
  height: 600px;
  position: relative;
}
</style>
