<template>
  <section class="section">
    <postPreview v-for="post in posts" :key="post.slug" :post="post"></postPreview>
  </section>
</template>

<script>
export default {
  name: "blogs",
  props: ['filter'],
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async asyncData() {
      this.posts = this.$content('blog')
        .only(['title', 'image', 'tags', 'slug', 'createdAt', 'description', 'date', 'read', 'lazy']);

      if (this.filter != null) {
        this.posts = this.posts.where({tags: {$contains: this.filter}});
      }
      this.posts = await this.posts.fetch();
      this.posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    },
  },
  mounted() {
    this.asyncData()
  }
}
</script>

<style scoped lang="scss">
section {
  @include section;
  column-count: 2;
  column-gap: 60px;
  min-height: max(100vh, 705px);

  a {
    display: block;
    margin-bottom: 60px;
  }

}

@media only screen and (max-width: 600px) {

}
</style>
