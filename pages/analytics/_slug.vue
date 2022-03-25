<template>
  <div class="markdown-content">
    <client-only>
      <div class="top-part">
        <h1 class="page-title">{{ analysis.title }}</h1>
        <div class="meta">
          Published on {{ analysis.date }}<br>
          <div class="techs">
            <span class="d-inline-block pr-1">Technologies:</span>
            <nuxt-link v-for="(tag, idx) in analysis.tags" :key="idx" :to="`/tag/analysis/${tag}`">
              <v-btn text color="#daa520" small>
                {{ tag }}
              </v-btn>
            </nuxt-link>

          </div>
          Source code:
          <h-link :href="analysis.link" target="_blank">here</h-link>
        </div>
      </div>
    </client-only>
    <article>
      <div class="text-center">Note: You may need to refresh to see the tables.</div>
      <v-row no-gutter justitfy="center">
        <v-img :src="analysis.image"
               :lazy-src="analysis.lazy" max-width="100%" class="mx-auto post-img my-8"
               max-height="600px" contain></v-img>
      </v-row>
      <div class="inner-document">
        <div class="text-center">
          <h4>Table of Contents</h4>
        </div>
        <nuxt-content :document="analysis"/>
        <div class="main-container container-fluid">
          <social-share-btn :url="url"></social-share-btn>
        </div>

      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const analysis = await $content(`analysis/${params.slug}`).fetch().catch(e => {
      return error({statusCode: 404, message: e.message})
    })
    return {analysis}
  },
  data() {
    return {
      url: "",
    }
  },
  mounted() {
    this.url = window.location.href;
  },
  head() {
    return {
      title: this.analysis.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.analysis.description
        },
        {
          property: 'og:title',
          content: this.analysis.title,
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.analysis.description,
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: 'analytics/' + this.analysis.slug,
          hid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: this.analysis.title,
          hid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: this.analysis.description,
          hid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          hid: 'twitter:card'
        },
        {
          property: 'twitter:image',
          content: this.analysis.thumbnail,
          hid: 'twitter:image'
        },
        {
          property: 'og:image',
          content: this.analysis.thumbnail,
          hid: 'og:image'
        },
        {
          name: 'keywords',
          content: this.analysis.title + ',' + this.analysis.tags.join(","),
          hid: 'keywords'
        }
      ]
    }
  },
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
  h1, h2, h3, h4, h5, h6, p {
    font-family: Roboto, sans-serif !important;
  }

  .top-part {
    padding-top: 164px;
    background-color: $black;
    padding-bottom: 100px;
    h1.page-title {
      font-size: 80px;
    }
  }

  .meta {
    text-align: center;
    line-height: 1.7rem;
    font-size: 15px;

    .techs {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .analysis-wrapper {
    width: 80%;
    position: relative;
    text-align: center;
    margin: 60px auto;
  }

  .inner-document {
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 600px) {
  article {
    padding-top: 0;
    padding-bottom: 40px;
  }
  .markdown-content .analysis-wrapper {
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

<style>
.theme--dark.v-application code {
  background-color: unset !important;
  padding: 0;
}

main pre {
  background-color: unset;
}

main code.sourceCode > span {
  color: white;
}

#TOC {
  margin-bottom: 2rem;
}
</style>
