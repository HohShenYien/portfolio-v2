<template>
  <div class="d-inline-block">
    <h-link
      @click="openDialog"
      v-if="!$vuetify.breakpoint.smAndDown"
    >
      <v-icon class="hover-icon">mdi-magnify</v-icon>
    </h-link>
    <v-btn text v-else class="overflow-hidden" @click="openDialog">
      Search
    </v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="scale-transition"
    >
      <v-card>
        <div class="card">
          <v-icon size="48px" @click="reset" :ripple="false" class="close-btn">mdi-close-circle-outline</v-icon>
          <v-row justify="center">
            <v-col cols="11" md="7">
              <v-text-field
                label="Search for keyword"
                dark
                color="#B8860B"
                hide-details
                class="search-bar"
                v-model="keywords"
                @change="search"
                clearable
                ref="searchField"
              >
                <template v-slot:append-outer>
                  <v-icon size="30px" class="card-search" @click="search">mdi-magnify</v-icon>
                </template>
              </v-text-field>
            </v-col>
            <br>
            <v-col cols="11" md="7">
              <div v-for="(item, idx) in items" :key="item.link" :class="{isSearching: searching}" class="items">
                <preview-item :item="item" @click="reset"></preview-item>
                <v-divider v-if="idx != items.lastIndex" class="my-3"></v-divider>
              </div>
            </v-col>
            <v-col cols="11" md="7" v-if="items.length == 0">
              <div v-if="noresult">
                <p class="text-center hint-text">Can't find anything...</p>
                <v-img src="/search/empty.svg" width="80%" class="mx-auto"></v-img>
              </div>
              <div v-else>
                <p class="text-center hint-text">Search for something...</p>
                <v-img src="/search/no-search.svg" width="80%" class="mx-auto"></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PreviewItem from "./previewItem";

export default {
  name: "search",
  components: {PreviewItem},
  data() {
    return {
      dialog: false,
      keywords: '',
      items: [],
      searching: false,
      noresult: false
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
      setTimeout(() => {
        this.$refs.searchField.$refs.input.focus();
      }, 150);

    },
    reset() {
      this.keywords = '';
      this.dialog = false;
      this.items = [];
      this.noresult = false;
    },
    async search() {
      this.searching = true;
      let posts = await this.$content('blog')
        .only(['title', 'slug', 'description', 'date'])
        .search(this.keywords).fetch();
      let projects = await this.$content('project')
        .only(['title', 'slug', 'description', 'date'])
        .search(this.keywords).fetch();
      let analysis = await this.$content('analysis')
        .only(['title', 'slug', 'description', 'date', 'link'])
        .search(this.keywords).fetch();
      this.items = [];
      setTimeout(() => {
        this.searching = false;
      }, 250);
      this.items.push(...posts.map(post => {
          post['type'] = 'blog';
          return post;
        }),
        ...projects.map(project => {
          project['type'] = 'project';
          return project;
        }),
        ...analysis.map(analysis => {
          analysis['type'] = "analysis";
          return analysis;
        }))

      this.noresult = this.items.length == 0;
      this.items.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    },
  }
}
</script>

<style scoped lang="scss">
.hover-icon:hover {
  color: $secondary;
}
.card {
  padding: 60px 15px 15px;

  .close-btn {
    position: fixed;
    right: 15px;
    top: 15px;
  }
}

.card-search {
  margin-left: 15px;

  &:hover {
    color: goldenrod;
  }
}
</style>

<style lang="scss">
.mdi-close-circle-outline:hover {
  color: goldenrod !important;
}

.card .search-bar .v-input__control .v-input__slot .v-text-field__slot {
  padding-bottom: 8px;

  label, input {
    font-size: 1.5rem;
    overflow: visible;
  }

  .v-label--active {
    transform: translateY(-24px);
    font-size: 0.9rem;
  }
}

.items {
  transition: opacity 150ms linear;
}

.items.isSearching {
  opacity: 0;
}

.hint-text {
  font-size: 2rem;
  margin-bottom: 30px !important;
}
</style>
