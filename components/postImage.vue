<template>
  <div class="post-image">
    <v-img :lazy-src="lazy" :src="img" :alt="alt" class="mx-auto" :width="computedWidth">
    </v-img>
    <div class="caption mx-auto" :style="{width: computedWidth}">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "imageLoader",
  props: ['img', 'lazy', 'width', 'alt', 'caption'],
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

.caption {
  font-size: 1rem;
  color: gray;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 40px;
}
</style>
