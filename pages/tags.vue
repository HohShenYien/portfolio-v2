<template>
  <div class="page">
    <div class="top-part">
      <h1>
        <span id="title">
          <v-icon :size="isMobile() ? '70px' : '150px'" class="before">mdi-chevron-left</v-icon>
          <span class="page-title">Tags</span>
          <v-icon :size="isMobile() ? '70px' : '150px'" class="after">mdi-chevron-right</v-icon>
        </span>
      </h1>
    </div>
    <client-only>
      <div v-for="(cat, idx) in tagCats" :key="cat" class="tag-cat">
        <h2 class="section-title">{{ cat }}</h2>
        <section :id="cat">
          <v-row>
            <v-col cols="12" md="4" v-for="tag in tags[cat]" :key="tag.name">
              <nuxt-link :to="`/tag/${cat}/${tag.name}`">
                <v-card class="blog-cards cards">
                  <div class="card-inner">
                    <h3 class="card-header">
                      <h-link>
                        {{ tag.name }}
                      </h-link>
                    </h3>
                    <div>
                      {{ tag.val }} {{ tag.val > 1 ? 'projects' : 'project' }}
                    </div>
                  </div>
                </v-card>
              </nuxt-link>
            </v-col>
          </v-row>
        </section>
        <v-divider v-if="idx != tagCats.lastIndex" class="section-div"></v-divider>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "tags",
  head() {
    return {
      title: "Tags",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Tag Index Page"
        },
        {
          property: 'og:title',
          content: "Tags",
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: "Tag Index Page",
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: '/tags',
          hid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: "Tag Index Page",
          hid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: "Tag Index Page",
          hid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          hid: 'twitter:card'
        },
        {
          name: 'keywords',
          content: "Tags",
          hid: 'keywords'
        }
      ]
    }
  },
  data() {
    return {
      tags: {},
      tagCats: [
        'blogs', 'projects'
      ],
    }
  }
  ,
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
    ,
    compareStr(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    ,
    async getPosts() {
      let blogTags = {}
      let blogs = await this.$content('blog')
        .only(['tags'])
        .fetch();
      for (let blog of blogs) {
        for (let tag of blog.tags) {
          if (tag in blogTags) {
            this.$set(blogTags, tag, blogTags[tag] + 1);
          } else {
            this.$set(blogTags, tag, 1);
          }
        }
      }
      let res = [];
      for (let key in blogTags) {
        res.push({
          name: key,
          val: blogTags[key]
        })
      }
      res.sort((a, b) => {
        return b.val - a.val || this.compareStr(a.name, b.name);
      })
      this.$set(this.tags, 'blogs', res);
    }
    ,
    async getProjects() {
      let projectTags = {}
      let projects = await this.$content('project')
        .only(['tags'])
        .fetch();
      for (let project of projects) {
        for (let tag of project.tags) {
          if (tag in projectTags) {
            this.$set(projectTags, tag, projectTags[tag] + 1);
          } else {
            this.$set(projectTags, tag, 1);
          }
        }
      }
      let res = [];
      for (let key in projectTags) {
        res.push({
          name: key,
          val: projectTags[key]
        })
      }
      res.sort((a, b) => {
        return b.val - a.val || this.compareStr(a.name, b.name);
      })
      this.$set(this.tags, 'projects', res);
    }
    ,
  }
  ,
  mounted() {
    this.getPosts();
    this.getProjects();
    setTimeout(() => {
      document.getElementById('title').classList.add('start');
    }, 200);
  }
  ,
  created() {

  }
}
</script>

<style scoped lang="scss">

.top-part {
  background-color: black;
  @include section;
  text-align: center;
  margin-bottom: 120px;

  h1 {
    #title {
      visibility: hidden;
      display: inline-block;
      position: relative;
      width: 8em;
      text-align: center;
      transition: width 0.7s 0.5s ease-out, visibility 0.1s 0.9s linear;

      span {
        opacity: 0;
        transition: opacity 0.3s 1s ease-in;
      }

      &.start {
        width: 16em;
        visibility: visible;

        span {
          opacity: 1;
        }

        .before, .after {
          opacity: 1;
        }
      }

      .before {
        visibility: visible;
        position: absolute;
        opacity: 0;
        left: 0;
        transition: opacity 0.2s linear;
      }

      .after {
        visibility: visible;
        position: absolute;
        opacity: 0;
        right: 0;
        transition: opacity 0.2s linear;
      }
    }
  }
}

.page {
  padding-bottom: 120px;
}

.section-title {
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 10px;
  position: relative;
  padding-left: 4.8rem;
  color: whitesmoke;
  margin-bottom: 32px;
}

.section-title::before {
  content: '';
  width: 4rem;
  height: 4px;
  background-color: darkgoldenrod;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

section {
  padding: 20px 60px;

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 2;

    .card-inner {
      text-align: center;

      .card-header {
        font-size: 2rem;
        margin-bottom: 15px;
      }
    }
  }
}

.section-div {
  margin: 100px 160px;
}

@media only screen and (max-width: 600px) {
  .top-part {
    h1 {
      #title {
        width: 5em;

        &.start {
          width: 7em;
        }
      }
    }
  }
}
</style>

<style>
.cards:hover .nice-link::after {
  transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
  clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
}

.cards:hover .nice-link .link-txt {
  transform: translateY(-3px);
  color: goldenrod;
}
</style>
