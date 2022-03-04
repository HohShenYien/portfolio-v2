<template>
  <nuxt-link class="analysis-wrapper" :to="'/analytics/' + analysis.slug" no-prefetch>
    <v-row>
      <v-col md="3" xs="12">
        <v-img :src="analysis.thumbnail"
               :lazy-src="analysis.lazy"
               max-width="100%"
               max-height="600px" contain></v-img>
      </v-col>
      <v-col md="9" xs="12" class="d-flex flex-column justify-center">
        <h2 class="mb-1 analysis-title">{{analysis.title}}</h2>
        <div class="mb-3 analysis-desc">{{analysis.description}}</div>
        <div class="mb-2">
          <div class="analysis-date">{{ analysis.date }}</div>
        </div>
        <div>
          <nuxt-link v-for="tag in analysis.tags" :key="tag" :to="`/tag/analysis/${tag}`">
            <v-chip outlined color="#daa520" class="mr-3 analysis-tags">{{ tag }}</v-chip>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </nuxt-link>
</template>

<script>
export default {
  name: "analysisPost",
  props: ["analysis"]
}
</script>

<style scoped lang="scss">
.analysis-wrapper {
  max-width: 80%;
  margin: 0 auto 2rem;
  display: block;
  padding: 18px;
  border-radius: 5px;
  .analysis-tags {
    cursor: pointer;
  }
  .analysis-date {
    color: gray;
  }
  .analysis-title {
    color: white;
    transition: color 300ms linear;
  }
  .analysis-desc {
    color: lightgray;
  }
  &:hover {
    background-color: #FFFFFF10;
    .analysis-title {
      color: $primary;
    }
  }
}

@media only screen and (max-width: 600px) {
  .analysis-wrapper {
    max-width: 95%;
  }
}


</style>
