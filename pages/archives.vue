<template>
  <div class="page">
    <section class="top-part">
      <h1 class="page-title">
        Post Archives
      </h1>
      <div class="right-part">
        <img src="/archives/shelf1.svg" alt="book shelf 1" class="shelf1 shelf">
        <img src="/archives/shelf2.svg" alt="book shelf 2" class="shelf2 shelf">
        <img src="/archives/shelf3.svg" alt="book shelf 3" class="shelf3 shelf">
      </div>
    </section>
    <section class="section2">
      <div v-for="(item, idx) in items" :key="idx" class="date-section">
        <h2>{{item.date}}</h2>
        <archive-item v-for="(post, idx) in item.data" :item="post" :key="idx" class="archive-item"></archive-item>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "archive",
  head() {
    return {
      title: "Post Archives",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Post Archive Page"
        },
        {
          property: 'og:title',
          content: "Post Archives",
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: "Post Archives Page",
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: '/archives',
          hid: 'og:url'
        },
        {
          property: 'twitter:title',
          content: "Post Archives Page",
          hid: 'twitter:title'
        },
        {
          property: 'twitter:description',
          content: "Post Archives Page",
          hid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          hid: 'twitter:card'
        },
        {
          name: 'keywords',
          content: "Archives",
          hid: 'keywords'
        }
      ]
    }
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    async getAllPosts() {
      let posts = await this.$content('blog')
        .only(['title', 'slug', 'description', 'date'])
        .fetch();
      let projects = await this.$content('project')
        .only(['title', 'slug', 'description', 'date'])
        .fetch();
      let analysis = await this.$content('analysis')
        .only(['title', 'slug', 'description', 'date', 'link'])
        .fetch();
      let items = [];
      items.push(...posts.map(post => {
          post['type'] = 'blog';
          post['link'] = '';
          post['path'] = '/blog/' + post.slug;
          return post;
        }),
        ...projects.map(project => {
          project['type'] = 'project';
          project['link'] = '';
          project['path'] =  `/project/${project.slug}`;
          return project;
        }),
        ...analysis.map(analysis => {
          analysis['type'] = "analysis";
          return analysis;
        }))

      items.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      let groups = items.reduce(function (r, o) {
        let monthYear = o.date.slice(-4) + " — " + o.date.split(" ")[1];
        (r[monthYear])? r[monthYear].data.push(o) : r[monthYear] = {data: [o], date: monthYear};
        return r;
      }, {});
      this.items = Object.keys(groups).map(function(k){ return groups[k]; });
      console.log(this.items)
    },
  },
  mounted() {
    this.getAllPosts();
  }
}
</script>

<style scoped lang="scss">
.page {
  .top-part {
    @include section;
    background-color: black;
    position: relative;
    min-height: max(50vh, 600px);
    display: flex;
    flex-direction: row;
    padding-right: 0;
    align-items: center;
    flex-wrap: wrap;
    h1 {
      text-align: center;
      animation: fade-from-left 500ms ease-in 300ms both;
      flex-basis: 60%;
    }
    .right-part {
      flex-basis: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .shelf {
        margin-bottom: 20px;
        &.shelf1 {
          width: 90%;
          animation: fade-from-right 800ms ease-in 200ms both;
        }

        &.shelf2 {
          width: 100%;
          animation: fade-from-right 800ms ease-in 400ms both;
        }

        &.shelf3 {
          width: 80%;
          animation: fade-from-right 800ms ease-in 550ms both;
        }
      }
    }
  }
  .section2 {
    @include smaller-section;
    .date-section {
      max-width: 40%;
      margin-top: 1.5rem;
      padding-bottom: 2rem;
      position: relative;
      margin-left: auto;
      margin-right: auto;

      &:not(:last-of-type)::after {
        content: "";
        width: max(50%, 300px);
        height: 3px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        display: block;
        background-color: dimgray;
        position: absolute;
      }
      h2 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 0.8rem;
      }
    }
    .archive-item {
      margin-bottom: 5px;
    }

  }
}

@keyframes fade-from-left {
  0% {
    transform: translateX(-400px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-from-right {
  0% {
    transform: translateX(400px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 860px) {
  .page {
    .top-part {
      flex-direction: column;
      padding-right: 130px;
      h1 {
        flex-basis: 100%;
      }
      .right-part {
        margin-top: 40px;
        transform: translateX(130px);
        flex-basis: 100%;
        .shelf {
          &.shelf1 {
            width: 60%;
          }

          &.shelf2 {
            width: 70%;
          }

          &.shelf3 {
            width: 50%;
          }
        }
      }
    }
    .section2 {
      .date-section {
        max-width: 70%;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .page {
    .top-part {
      padding-right: 20px;
      .right-part {
        transform: translateX(20px);
      }
    }
    .section2 {
      .date-section {
        max-width: 90%;
        &:not(:last-of-type)::after {
          width: max(50%, 100px);
        }
      }
    }
  }
}
</style>
