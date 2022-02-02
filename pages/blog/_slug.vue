<template>
  <div class="markdown-content">
    <client-only>
      <div class="top-part">
        <h1 class="page-title">{{ post.title }}</h1>
        <div class="meta">
          Posted on {{ post.date }} · {{ post.read }} min read <br>
          Written by:
          <nuxt-link to="/about">
            <hLink>Hoh Shen Yien</hLink>
          </nuxt-link>
        </div>
      </div>
    </client-only>
    <article>
      <v-img :src="post.image"
             :lazy-src="post.lazy" max-width="100%" class="mx-auto post-img"
             gradient="to top right, rgba(255,255,255,.08), rgba(255,255,255,.08)"></v-img>
      <div class="inner-document">
        <nuxt-content :document="post"/>
        <div class="bottom-part">
          <div class="tags">
            <span class="tag-label">Tags:</span>
            <nuxt-link v-for="(tag, idx) in post.tags" :key="tag" :to="`/tag/blogs/${tag}`">
              <v-btn text color="#daa520" class="mr-1 post-preview-tags px-1"
                     small>
                {{ tag }}
              </v-btn>
            </nuxt-link>

          </div>
          <social-share-btn :url="url"></social-share-btn>
        </div>
      </div>
    </article>


  </div>
</template>

<script>
import SocialShareBtn from "../../components/socialShareBtn";

export default {
  components: {SocialShareBtn},
  async asyncData({$content, params, error}) {
    const post = await $content(`blog/${params.slug}`).fetch().catch(e => {
      return error({statusCode: 404, message: e.message})
    })
    return {post}
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          property: 'og:title',
          content: this.post.title,
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.post.description,
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: 'blog/' + this.post.slug,
          hid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: this.post.title,
          hid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: this.post.description,
          hid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          hid: 'twitter:card'
        },
        {
          property: 'twitter:image',
          content: this.post.thumbnail,
          hid: 'twitter:image'
        },
        {
          property: 'og:image',
          content: this.post.thumbnail,
          hid: 'og:image'
        },
        {
          name: 'keywords',
          content: this.post.title + ',' + this.post.tags.join(","),
          hid: 'keywords'
        }
      ]
    }
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts() {
      this.posts = await this.$content('blog')
        .only(['title', 'image', 'tags', 'slug', 'createdAt', 'description', 'date', 'read', 'lazy'])
        .fetch();
    },
  },
  mounted() {
  },
  created() {
    this.getPosts();
  }
}
</script>

<style scoped lang="scss">
article {
  @include smaller-section;
  padding-top: 0;
  padding-bottom: 40px;
}

.markdown-content {
  padding-bottom: 80px;

  .top-part {
    padding-top: 164px;
    background-color: black;
    padding-bottom: 100px;
  }

  .meta {
    text-align: center;
    line-height: 1.7rem;
  }

  .post-img {
    margin-top: 60px;
    margin-bottom: 60px;
    background-color: hsla(0, 100%, 100%, 0.15);
    box-shadow: 0 0 10px 4px black;
  }

  .inner-document {
    width: min(45rem, 100%);
    margin-left: auto;
    margin-right: auto;

    .tags {
      margin-top: 20px;
      margin-bottom: 5px;
      font-size: 0.9rem;

      .tag-label {
        color: gray;
      }
    }

    .bottom-part {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

@media only screen and (max-width: 600px) {
  .markdown-content h1.page-title {
    font-size: 3rem;
  }
  .inner-document {
    .bottom-part {
      flex-direction: column;
      align-items: flex-start !important;
    }

    .tags {
      margin-bottom: 20px !important;
    }
  }
  article {
    padding-top: 0;
    padding-bottom: 40px;
  }
}
</style>
