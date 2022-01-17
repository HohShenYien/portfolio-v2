<template>
  <v-img :lazy-src="post.lazy" :src="post.image" alt="" class="post-preview-img">
    <template v-slot:placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
        style="min-height: 150px;"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: "imageLoader",
  props: ['img', 'lazy', 'width', 'alt']
}
</script>

<style scoped>

</style>
