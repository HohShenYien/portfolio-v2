<template>
  <div class="share" @click="activate" v-click-outside="deactivate" :class="{active: activated}">
    <div class="icon first">
      <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank">
        <v-icon color="#FFF">mdi-facebook</v-icon>
      </a>
    </div>
    <div class="icon">
      <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`" target="_blank">
        <v-icon color="#FFF">mdi-linkedin</v-icon>
      </a>
    </div>
    <div class="icon" v-if="isMobile">
      <a :href="`whatsapp://send?text=${url}`" target="_blank">
        <v-icon color="#FFF">mdi-whatsapp</v-icon>
      </a>
    </div>
    <div class="icon">
      <a :href="`https://www.reddit.com/submit?url=${url}`" target="_blank">
        <v-icon color="#FFF">mdi-reddit</v-icon>
      </a>
    </div>
    <div class="icon last">
      <a :href="`https://twitter.com/intent/tweet?text=${url}`" target="_blank">
        <v-icon color="#FFF">mdi-twitter</v-icon>
      </a>
    </div>
    <div class="label">Share</div>
  </div>
</template>

<script>
import NiceBtn from "./niceBtn";

export default {
  name: "socialShareBtn",
  components: {NiceBtn},
  props: ['url'],
  data() {
    return {
      activated: false,
      isMobile: false
    }
  },
  methods: {
    activate() {
      this.activated = true;
    },
    deactivate() {
      this.activated = false;
    },
  },
  mounted() {
    this.isMobile = this.$isMobile();
    console.log(this.$isMobile());
  }
}
</script>

<style scoped lang="scss">
.share {
  display: inline-block;
  cursor: default;
  padding: 0;
  position: relative;
  text-align: center;

  &:hover .label, &.active .label {
    opacity: 0;
    transition: opacity .4s ease-out;
  }

  .icon {
    opacity: 0;
  }

  .icon a {
    pointer-events: none;
  }

  &:hover .icon, &.active .icon {
    border-radius: 50%;
    margin: 0 0;
    opacity: 1;
  }

  &.active .icon a, &:hover .icon a {
    pointer-events: unset;
  }
}

.icon, .label {
  border: gold 2px solid;
  line-height: 2rem;
}

.label {
  border-radius: 2rem;
  position: absolute;
  font-size: 0.8rem;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  padding: 4px 0;
  pointer-events: none;
  text-transform: uppercase;
  transition: opacity .5s .125s ease-out;
}

.icon {
  border-radius: 0;
  cursor: pointer;
  display: inline-block;
  margin: 0 -.5em;
  transition: background-color .5s ease-out,
  border-radius .3s .125s ease-out,
  margin .7s .125s ease-out,
  opacity .3s .125s ease-in;
  width: 2.5em;
  height: 2.5em;

  &.first {
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    margin-left: 0;
  }

  &.last {
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    margin-right: 0;
  }

  &:hover, &:focus {
    background-color: goldenrod;
    color: white;
  }
}

</style>
