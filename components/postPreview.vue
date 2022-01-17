<template>
  <nuxt-link :to="'/blog/' + post.slug">
    <div class="post-preview-card">
      <div class="no-overflow">
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
      </div>
      <div class="post-preview-content">
        <div class="tags">
          <span class="tag-label">Tags:</span>
          <v-btn text v-for="tag in post.tags" color="#daa520" class="mr-3 post-preview-tags" :key="tag" x-small>{{
              tag
            }}
          </v-btn>
        </div>
        <h2 class="post-preview-title">{{ post.title }}</h2>
        <div class="post-preview-text">{{ post.description }}</div>
        <div class="post-preview-date">{{ post.date }} · {{ post.read }} min read</div>
        <v-row class="post-preview-bottom" no-gutters>
          <v-spacer/>
          <arrowLink text="Read More"/>
        </v-row>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "postPreview",
  props: ['post'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.post-preview-card {
  border: $secondary 2px solid;
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

.post-preview-tags {
  margin: 8px 0;
  font-size: 0.7rem;
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
  width: 100%;
  height: auto;
}
</style>
