<template>
  <v-row :class="{'inverted': position % 2 == 0}" class="project-row">
    <v-col cols="12" md="7" class="left">
      <project-frame :img="project.image" :alt="project.title" :type="project.type" :lazy="project.lazy"/>
    </v-col>
    <v-col cols="12" md="5" class="vertically-center">
      <nuxt-link :to="`/project/${project.slug}`">
        <h2 class="project-title">{{ project.title }}</h2>
      </nuxt-link>
      <div class="project-date">
        <v-icon color="#808080" size="1rem" class="mr-1">mdi-calendar</v-icon>
        {{ project.date }}
      </div>
      <div class="project-description">{{ project.description }}</div>
      <div class="check-it">
        <nuxt-link :to="`/project/${project.slug}`">
          <arrowLink>Check it out</arrowLink>
        </nuxt-link>
      </div>
      <div>
        <v-chip v-for="tag in project.tags" outlined color="#daa520" class="mr-3" :key="tag">{{ tag }}</v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import ProjectFrame from "./projectFrame";

export default {
  name: "projectPreview",
  components: {ProjectFrame},
  props: ['project', "position"]
}
</script>

<style scoped lang="scss">
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

.vertically-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
}

.project-title {
  font-size: 36px;
  color: white;
  transition: color 0.2s linear;

  &:hover {
    color: gold;
  }
}

.project-date {
  margin-top: -5px;
  color: gray;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.project-description {
  margin-bottom: 30px;
  padding-left: 10px;
  color: $secondary-text;
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
