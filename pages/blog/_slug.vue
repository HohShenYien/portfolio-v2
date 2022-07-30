<template>
  <div class="markdown-content">
    <client-only>
      <div class="top-part">
        <div class="wrapper">
          <h1 class="page-title">{{ post.title }}</h1>
          <div class="meta">
            Posted on {{ post.date }} · {{ post.read }} min{{post.read > 1 ? 's' : ''}} read <br>
            Written by:
            <nuxt-link to="/about">
              <hLink>Hoh Shen Yien</hLink>
            </nuxt-link>
          </div>
        </div>
      </div>
    </client-only>
    <article>
      <v-row no-gutter justitfy="center">
        <v-img :src="post.image"
                 :lazy-src="post.lazy" max-width="100%" class="mx-auto post-img"
                 max-height="600px" contain></v-img>
      </v-row>
      <v-row class="reverse-phone">
        <v-col md="8" cols="12" class="d-flex justify-center">
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
        </v-col>
        <v-col md="4" cols="12" class="toc-wrapper">
          <aside class="toc">
            <h3>Table of Contents</h3>
            <nav>
              <ul>
                <li
                  :class="{
                'pl-4': link.depth === 3,
                current: link.id === currentlyActiveToc
              }"
                  class="toc-list"
                  v-for="link of post.toc"
                  :key="link.id"
                >
                  <a
                    @click="goTo(link.id)"
                  >{{ link.text }}</a
                  >
                </li>
              </ul>
            </nav>
          </aside>
        </v-col>
      </v-row>
    </article>
    <v-snackbar
      v-model="copyToast"
      color="success"
    >
      <span class="font-weight-black text--plain-white">Link copied to clipboard</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          icon
          v-bind="attrs"
          @click="copyToast = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>

import SocialShareBtn from "../../components/socialShareBtn";
import {VDivider, VRating, VColorPicker} from 'vuetify/lib/components';
import Vue from "vue";
import HeaderLink from "@/components/HeaderLink";

Vue.component("VDivider", VDivider);
Vue.component("VRating", VRating);
Vue.component("VColorPicker", VColorPicker);

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
      posts: [],
      url: "",
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0.3
      },
      copyToast: false,
    }
  },
  methods: {
    async getPosts() {
      this.posts = await this.$content('blog')
        .only(['title', 'image', 'tags', 'slug', 'createdAt', 'description', 'date', 'read', 'lazy'])
        .fetch();
    },
    goTo(id) {
      let element = document.getElementById(id);
      let headerOffset = 70;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.url = window.location.href;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);
    document
      .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
      .forEach(section => {
        this.observer.observe(section);
      });

    const LinkClass = Vue.extend(HeaderLink);
    document.querySelectorAll(".nuxt-content h2")
      .forEach(h2 => {
        const buttonInstance = new LinkClass({
          propsData: {
            id: h2.id,
            onSuccess: () => this.copyToast = true
          }
        });
        buttonInstance.$mount();
        h2.appendChild(buttonInstance.$el)
      })
  },
  beforeDestroy() {
    this.observer.disconnect();
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
  position: relative;
}

.markdown-content {
  padding-bottom: 80px;

  .top-part {
    padding-top: 164px;
    background-color: $black;
    padding-bottom: 100px;
    .wrapper {
      width: 100ch;
      margin: 0 auto;
      line-height: 4.8rem;
      h1 {
        margin-bottom: 1rem;
      }
    }
  }

  .meta {
    text-align: center;
    line-height: 1.7rem;
  }

  .post-img {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .inner-document {
    max-width: min(60ch, 100%);

    .tags {
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
      margin-top: 20px;
    }
  }
}

.toc-wrapper {
  .toc  {
    position: sticky;
    top: 4rem;
    .toc-list {
      list-style: none;
    }
    .current a {
      color: $secondary !important;
    }
  }
}

.reverse-phone {
  flex-direction: row;
}

@media only screen and (max-width: 600px) {
  .markdown-content .top-part .wrapper {
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
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
  .post-img {
    padding-left: 20px;
    padding-right: 20px;
  }
  .reverse-phone {
    flex-direction: column-reverse;
  }
}
</style>

<style>
.v-divider {
  margin: 0 30% 40px;
  border-top-width: 5px;
}
</style>
