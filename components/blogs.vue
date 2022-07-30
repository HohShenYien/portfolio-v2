<template>
  <section class="section">
    <v-row v-if="$vuetify.breakpoint.mdAndUp">
      <v-col cols="12" md="6" class="px-md-6">
        <post-preview v-for="(post, idx) in posts" :key="post.slug" :post="post" v-if="idx % 2 === 0"/>
      </v-col>
      <v-col cols="12" md="6" class="px-md-6">
        <post-preview v-for="(post, idx) in posts" :key="post.slug" :post="post" v-if="idx % 2 !== 0"/>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" >
        <post-preview v-for="(post, idx) in posts" :key="post.slug" :post="post"/>
      </v-col>
    </v-row>

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
  min-height: max(100vh, 705px);

  a {
    display: block;
    margin-bottom: 60px;
  }

}

@media only screen and (max-width: 600px) {

}
</style>
