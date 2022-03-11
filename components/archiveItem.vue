<template>
  <div class="wrapper">
    <span class="day">{{ getDay() }}</span><span class="subscript">{{ getSubscript() }}</span>
    <span v-if="item.type != 'analysis'">
      <nuxt-link :to="item.path" >
        <h-link>{{item.title}}</h-link>
      </nuxt-link>
    </span>
    <span v-else>
      <a :href="item.link" target="_blank">
        <h-link>{{item.title}}</h-link>
      </a>
    </span>

  </div>
</template>

<script>
export default {
  name: "archiveItem",
  components: {},

  props: ['item'],
  methods: {
    getDay() {
      return this.item.date.split(" ")[0];
    },
    getSubscript() {
      let day = this.getDay();
      switch (day.slice(-1)) {
        case "1": return "st";
        case "2": return "nd";
        case "3": return "rd";
        default: return "th";
      }
    }
  },
  mounted() {
    console.log(this.item);
  }
}
</script>

<style scoped lang="scss">
.day {

}
</style>
