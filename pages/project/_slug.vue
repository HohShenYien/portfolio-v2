<template>
  <div class="markdown-content">
    <client-only>
      <div class="top-part">
        <h1>{{ project.title }}</h1>
        <div class="meta">
          Created on {{ project.date }}<br>
          <div class="techs">
            <span class="d-inline-block px-1">Technologies:</span>
            <v-btn text v-for="(tag, idx) in project.tags" color="#daa520" class="ml-1 px-1"
                   :key="tag"
                   small>{{
                tag
              }}
            </v-btn>
          </div>
          Check it out
          <h-link :href="project.link" target="_blank">here</h-link>
        </div>
      </div>
    </client-only>
    <article>
      <div class="project-wrapper">
        <project-frame :img="project.image" :type="project.type"/>
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
import Vue from 'vue' // needed to use Vue.component() function

Vue.component("VImg", VImg) // adding component globally
Vue.component("VCol", VCol)
Vue.component("VRow", VRow)

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
  }

  h3 {
    font-size: 3rem;
    color: white;
    font-weight: bolder;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-top: 20px;
  }
}

@media only screen and (max-width: 600px) {
  article {
    padding-top: 0;
    padding-bottom: 40px;
  }
}
</style>

<style>
.wide {
  width: 80vw;
  margin-left: calc(calc(100vw - 100%) / -2 + 8px + 10vw);
}

@media only screen and (max-width: 600px) {
  .wide {
    width: 90vw;
    margin-left: calc(calc(100vw - 100%) / -2 + 5vw);
  }
}
</style>
