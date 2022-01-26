<template>
  <div>
    <div class="top-section">
      <h1 class="page-title">
        <v-icon :size="isMobile ? '70px' : '150px'">mdi-chevron-left</v-icon>
        <span>{{ tag }}</span>
        <v-icon :size="isMobile ? '70px' : '150px'">mdi-chevron-right</v-icon>
      </h1>
    </div>
    <blogs :filter="tag" id="section2"></blogs>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Tag: " + this.tag,
    }
  },
  computed: {
    tag() {
      return this.$route.params.slug;
    },
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
  }
}
</script>

<style scoped lang="scss">
.top-section {
  @include section;
  background-color: black;
  text-align: center;

  h1 span {
    margin-left: -0.5em;
    margin-right: -0.6em;
  }
}

#section2 {
  @include smaller-section;
}
</style>
