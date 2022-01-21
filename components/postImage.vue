<template>
  <div class="post-image">
    <v-img :lazy-src="lazy" :src="img" :alt="alt" class="mx-auto the-image" :width="computedWidth"
           gradient="to top right, rgba(255,255,255,.05), rgba(255,255,255,.05)">
    </v-img>
    <div class="caption mx-auto" :style="{width: computedWidth}">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "imageLoader",
  props: ['img', 'lazy', 'width', 'alt'],
  computed: {
    computedWidth() {
      return this.width != null ? this.width : '85%'
    },
  },

}
</script>

<style scoped>
.post-image {
  margin-top: 20px;
}

.the-image {
  box-shadow: 0 0 6px 5px black;
}

.caption {
  font-size: 1rem;
  color: gray;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 40px;
}
</style>
