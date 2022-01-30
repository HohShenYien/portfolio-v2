<template>
  <div class="markdown-content">
    <client-only>
      <div class="top-part">
        <h1 class="page-title">{{ project.title }}</h1>
        <div class="meta">
          Completed on {{ project.date }}<br>
          <div class="techs">
            <span class="d-inline-block pr-1">Technologies:</span>
            <nuxt-link v-for="(tag, idx) in project.tags" :key="idx" :to="`/tag/projects/${tag}`">
              <v-btn text color="#daa520" small>
                {{ tag }}
              </v-btn>
            </nuxt-link>

          </div>
          Check it out
          <h-link :href="project.link" target="_blank">here</h-link>
        </div>
      </div>
    </client-only>
    <article>
      <div class="project-wrapper">
        <project-frame :img="project.image" :type="project.type" :alt="project.title"/>
      </div>
      <div class="inner-document">
        <nuxt-content :document="project"/>
      </div>
    </article>
    <div class="bottom-part" v-if="anotherProject != null">
      <h4>Another random project</h4>
      <nuxt-link :to="`/project/${anotherProject.slug}`">
        <div class="wrapper">
          <h3>{{ this.anotherProject.title }}</h3>
        </div>
        <arrow-link>Check it out</arrow-link>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ProjectFrame from "../../components/projectFrame";
import ArrowLink from "../../components/arrowLink";
import {VImg, VCol, VRow} from 'vuetify/lib/components'
import postImage from "../../components/postImage";
import Vue from 'vue' // needed to use Vue.component() function

Vue.component("VImg", VImg) // adding component globally
Vue.component("VCol", VCol)
Vue.component("VRow", VRow)
Vue.component("PostImage", postImage)

export default {
  components: {ArrowLink, ProjectFrame},
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description
        },
        {
          property: 'og:title',
          content: this.project.title,
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.project.description,
          vmid: 'og:description'
        },
        {
          property: 'og:url',
          content: this.url,
          vmid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: this.project.title,
          vmid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: this.project.description,
          vmid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          vmid: 'twitter:card'
        },
        {
          property: 'twitter:image',
          content: this.project.lazy,
          vmid: 'twitter:image'
        },
        {
          property: 'og:image',
          content: this.project.lazy,
          vmid: 'og:image'
        },
        {
          name: 'keywords',
          content: this.project.title + ',' + this.project.tags.join(","),
          vmid: 'keywords'
        }
      ]
    }
  },
  async asyncData({$content, params, error}) {
    const project = await $content(`project/${params.slug}`).fetch().catch(e => {
      return error({statusCode: 404, message: e.message})
    })
    return {project}
  },
  data() {
    return {
      url: "",
      anotherProject: null
    }
  },
  methods: {
    async getProjects() {
      let projects = await this.$content('project')
        .only(['title', 'image', 'tags', 'slug', 'createdAt', 'description', 'date', 'read', 'lazy'])
        .fetch();
      this.anotherProject = projects[Math.floor(Math.random() * projects.length)];
      while (this.anotherProject.slug == this.project.slug) {
        // continue to generate until a different project is obtained
        // prevents same project from being displayed
        this.anotherProject = projects[Math.floor(Math.random() * projects.length)];
      }
    },
  },
  mounted() {
    this.url = window.location.href;
  },
  created() {
    this.getProjects();
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
  padding-bottom: 0;

  .top-part {
    padding-top: 164px;
    background-color: black;
    padding-bottom: 100px;
  }

  .meta {
    text-align: center;
    line-height: 1.7rem;

    .techs {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .project-wrapper {
    width: 80%;
    position: relative;
    text-align: center;
    margin: 60px auto;
  }

  .inner-document {
    width: min(45rem, 100%);
    margin-left: auto;
    margin-right: auto;
  }
}

.bottom-part {
  margin-top: 60px;
  background-color: black;
  padding: 80px 0 120px;
  text-align: center;

  h4 {
    font-size: 1rem;
    color: darkgoldenrod;
    text-transform: capitalize;
    cursor: default;
  }

  &:hover h3 {
    color: gold;
  }

  h3 {
    font-size: 3rem;
    color: white;
    font-weight: bolder;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-top: 20px;
    transition: color 0.2s linear;
  }
}

@media only screen and (max-width: 600px) {
  article {
    padding-top: 0;
    padding-bottom: 40px;
  }
  .markdown-content .project-wrapper {
    width: 100%;
  }
  .markdown-content {
    .top-part {
      padding-left: 15px;
      padding-right: 15px;

      h1.page-title {
        font-size: 3rem;
      }
    }

    .role .role-table {
      text-align: center;
      border-spacing: 20px 5px;

      th {
        font-size: 1.2rem;
        color: goldenrod;
        text-transform: uppercase;
        letter-spacing: 3px;
      }

      td {
        font-size: 1rem;
      }
    }
  }
  .bottom-part {

    h3 {
      font-size: 2.4rem;
      color: white;
      font-weight: bolder;
      letter-spacing: 5px;
      text-transform: uppercase;
      margin-top: 20px;
      transition: color 0.2s linear;
    }
  }
}
</style>

<style lang="scss">
.wide {
  width: 80vw;
  margin-left: calc(calc(100vw - 100%) / -2 + 8px + 10vw);
}

.role {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  .role-table {
    text-align: center;
    border-spacing: 50px 5px;

    th {
      font-size: 1.5rem;
      color: goldenrod;
      text-transform: uppercase;
      letter-spacing: 4px;
    }

    td {
      font-size: 1.2rem;
    }
  }
}

@media only screen and (max-width: 600px) {
  .wide {
    width: 90vw;
    margin-left: calc(calc(100vw - 100%) / -2 + 5vw);
  }
}
</style>
