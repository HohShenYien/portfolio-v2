<template>
  <div class="markdown-content">
    <client-only>
      <div class="top-part">
        <h1>{{ post.title }}</h1>
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
            <v-btn text v-for="(tag, idx) in post.tags" color="#daa520" class="mr-1 post-preview-tags px-1" :key="tag"
                   small>{{
                tag
              }}
            </v-btn>
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
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.post.description,
          vmid: 'og:description'
        },
        {
          property: 'og:url',
          content: this.url,
          vmid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: this.post.title,
          vmid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: this.post.description,
          vmid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          vmid: 'twitter:card'
        },
        {
          property: 'twitter:image',
          content: this.post.lazy,
          vmid: 'twitter:image'
        },
        {
          property: 'og:image',
          content: this.post.lazy,
          vmid: 'og:image'
        },
        {
          name: 'keywords',
          content: this.post.title + ',' + this.post.tags.join(","),
          vmid: 'keywords'
        }
      ]
    }
  },
  data() {
    return {
      url: "",
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
    this.url = window.location.href;
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
