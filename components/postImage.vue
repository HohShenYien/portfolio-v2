<template>
  <figure class="post-image">
    <v-img :lazy-src="lazy" :src="img" :alt="alt" class="mx-auto the-image" :width="computedWidth"
           gradient="to top right, rgba(255,255,255,.05), rgba(255,255,255,.05)">
    </v-img>
    <figcaption class="post-image-caption mx-auto" :style="{width: computedWidth}">
      <slot></slot>
    </figcaption>
  </figure>

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
  height: auto;
  background-color: #EAEAEA;
}

.post-image-caption {
  font-size: 0.975rem;
  color: gray;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 28px;
}
</style>
