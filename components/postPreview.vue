<template>
  <nuxt-link :to="'/blog/' + post.slug">
    <div class="post-preview-card" @mouseenter="active = true" @mouseleave="active = false">
      <div class="no-overflow">
        <v-img :lazy-src="post.lazy" :src="post.image" alt="" class="post-preview-img">
        </v-img>
      </div>
      <div class="post-preview-content">
        <div class="tags">
          <span class="tag-label">Tags:</span>
          <nuxt-link :to="`/tag/blogs/${tag}`" v-for="tag in post.tags" :key="tag">
            <v-btn text color="#daa520"
                   class="mr-1 post-preview-tags px-1" x-small>
              {{ tag }}
            </v-btn>
          </nuxt-link>

        </div>
        <h2 class="post-preview-title">{{ post.title }}</h2>
        <div class="post-preview-text">{{ post.description }}</div>
        <div class="post-preview-date">{{ post.date }} · {{ post.read }} min read</div>
        <v-row class="post-preview-bottom" no-gutters>
          <v-spacer/>
          <arrow-link :active="active">Read More</arrow-link>
        </v-row>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import ArrowLink from "./arrowLink";
export default {
  name: "postPreview",
  components: {ArrowLink},
  props: ['post'],
  data() {
    return {
      active: false
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.post-preview-card {
  border: $secondary 3px solid;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s linear;

  &:hover {
    border-color: $primary;
    box-shadow: 0 0 10px 3px darkgoldenrod;
    transform: scale(1.02);

    .post-preview-title {
      color: $primary;
    }
  }

  .post-preview-title {
    transition: all 0.2s linear;
  }

  .tags {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 0.7rem;

    .tag-label {
      color: gray;
    }
  }

}

.post-preview-bottom {
  padding-bottom: 20px;
}

.post-preview-content {
  padding: 0 20px 5px;
}

.post-preview-date {
  color: gray;
  font-size: 0.9rem;
}

.post-preview-text {
  margin-left: 10px;
  margin-bottom: 25px;
  margin-top: 15px;
  color: $secondary-text;
}

.post-preview-img {
  height: auto;
}
</style>
