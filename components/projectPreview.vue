<template>
  <v-row :class="{'inverted': position % 2 == 0}" class="project-row">
    <v-col cols="12" md="7" class="left">
      <div class="phone-wrapper" v-if="project_type == 'phone'">
        <img :src="pic" alt="" height="550px">
        <img src="/projects/phone-frame.png" alt="" class="phone-frame">
      </div>
      <div class="desktop-wrapper" v-if="project_type == 'desktop'">
        <img :src="pic" alt="" class="desktop-img">
        <img src="/projects/desktop-frame.png" alt="" class="desktop-frame">
      </div>
    </v-col>
    <v-col cols="12" md="5" class="vertically-center">
      <h2 class="project-title">{{ title }}</h2>
      <div class="project-date">{{ date }}</div>
      <div class="project-description">{{ text }}</div>
      <div class="check-it">
        <arrowLink text="Check it out"></arrowLink>
      </div>
      <div>
        <v-chip v-for="tag in tags" outlined color="#daa520" class="mr-3">{{ tag }}</v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "projectPreview",
  props: ['project_type', 'title', 'pic', 'text', 'tags', 'date', "position"]
}
</script>

<style scoped>
.project-row {
  margin-bottom: 30px;
}

.inverted {
  flex-direction: row-reverse;
}

.left {
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 450px;
}

.phone-frame {
  height: 600px;
  position: absolute;
  left: 0;
  top: 0;
  width: 295px;
}

.desktop-frame {
  width: 650px;
  height: 415px;
  position: absolute;
  left: 0;
  top: 0;
}

.desktop-wrapper {
  padding: 25px 12px;
}

.desktop-img {
  width: 640px;
  position: absolute;
  left: 8px;
  top: 6px;
}

.phone-wrapper {
  padding: 25px 12px;
  height: 600px;
  position: relative;
}

.vertically-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
}

.project-title {
  font-size: 36px;
}

.project-date {
  margin-top: -5px;
  color: gray;
  margin-bottom: 15px;
}

.project-description {
  margin-bottom: 30px;
  padding-left: 10px;
}

.check-it {
  margin-bottom: 45px;
}

@media only screen and (max-width: 600px) {
  .desktop-frame {
    width: 100%;
    aspect-ratio: 14 / 9;
    height: auto;
  }
  .desktop-img {
    width: calc(100% - 10px);
  }
  .left {
    min-height: min-content;
  }
  .desktop-wrapper {
    width: 100%;
    aspect-ratio: 14 / 9;
    height: auto;
  }
}
</style>
