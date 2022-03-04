<template>
  <div class="list-wrapper">
    <analysis-post v-for="(analysisOne, idx) in analysis" :key="idx" :analysis="analysisOne"/>
  </div>
</template>

<script>
export default {
  name: "analysisPostList",
  props: [""],
  data() {
    return {
      analysis: []
    }
  },
  methods: {
    async asyncData() {
      this.analysis = this.$content('analysis')
        .only(['title', 'thumbnail', 'tags', 'slug', 'createdAt', 'type', 'description', 'date', 'lazy']);
      if (this.filter != null) {
        this.analysis = this.analysis.where({tags: {$contains: this.filter}});
      }
      this.analysis = await this.analysis.fetch();
      this.analysis.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      console.log(this.analysis);
    },
  },
  created() {
    this.asyncData();
  }
}
</script>

<style scoped>
.list-wrapper {
  margin: 4rem 0;
}
</style>
