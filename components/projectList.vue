<template>
  <section class="section">
    <div class="project-tabs" v-if="cats.length > 1">
      <v-tabs grow color="#FFD700" show-arrows :vertical="isPhone" v-model="tab" @change="filter">
        <v-tab>All</v-tab>
        <v-tab v-for="cat in cats" :key="cat"> {{ cat }}</v-tab>
      </v-tabs>
    </div>
    <div class="project-wrapper" :class="{fade: loading}">
      <div v-for="(project,idx) in projectShow" :key="project.slug">
        <project-preview
          :project="project"
          :position="idx"
        />
        <v-divider v-if="idx != projectShow.lastIndex" class="my-10"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "projectList",
  props: ['filterTag'],
  data() {
    return {
      projects: [],
      cats: new Set(),
      tab: null,
      projectShow: [],
      loading: false
    }
  },
  computed: {
    isPhone() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  methods: {
    async asyncData() {
      this.projects = this.$content('project')
        .only(['title', 'image', 'tags', 'slug', 'createdAt', 'type', 'description', 'date', 'lazy', 'cat'])
      if (this.filterTag != null) {
        this.projects = this.projects.where({tags: {$contains: this.filterTag}});
      }
      this.projects = await this.projects.fetch();
      this.projects.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      this.projects.forEach(project => {
        this.cats.add(project.cat);
      })
      this.cats = Array.from(this.cats);
      this.cats.sort();
      this.projectShow = this.projects;
    },
    filter() {
      this.loading = true;
      setTimeout(() => {
        this.projectShow = [];
        if (this.tab == 0) {
          this.projectShow = this.projects;
        } else {
          this.projects.forEach(project => {
            if (project.cat == this.cats[this.tab - 1]
            ) {
              this.projectShow.push(project);
            }
          })
        }
      }, 200)
      setTimeout(() => {
        this.loading = false
      }, 300);
    },
  },
  mounted() {
    this.asyncData();
  }
}
</script>

<style scoped>
.project-tabs {
  margin-bottom: 60px;
}

.project-wrapper {
  transition: opacity 0.2s linear;
  opacity: 1;
}

.project-wrapper.fade {
  opacity: 0;
}
</style>

<style>
.v-tabs {
  border-radius: 30px;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
  .v-tabs {
    border-radius: 0;
  }
}
</style>
