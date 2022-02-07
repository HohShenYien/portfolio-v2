<template>
  <nuxt-link :to="`/project/${project.slug}`">
    <v-row :class="{'inverted': position % 2 == 0}" class="project-row" @mouseenter="active = true" @mouseleave="active = false">
      <v-col cols="12" md="7" class="left">
        <project-frame :img="project.image" :alt="project.title" :type="project.type" :lazy="project.lazy"/>
      </v-col>
      <v-col cols="12" md="5" class="vertically-center">
        <h2 class="project-title">{{ project.title }}</h2>
        <div class="project-date">
          {{ project.date }}
        </div>
        <div class="project-description">{{ project.description }}</div>
        <div class="check-it">
          <arrow-link :active="active">Check it out</arrow-link>
        </div>
        <div>
          <nuxt-link v-for="tag in project.tags" :key="tag" :to="`/tag/projects/${tag}`">
            <v-chip outlined color="#daa520" class="mr-3 project-tags">{{ tag }}</v-chip>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </nuxt-link>

</template>

<script>
import ProjectFrame from "./projectFrame";

export default {
  name: "projectPreview",
  components: {ProjectFrame},
  props: ['project', "position"],
  data() {
    return {
      active: false
    }
  }
}
</script>

<style scoped lang="scss">
.project-row {
  margin-bottom: 30px;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #FFFFFF06;

    .project-title {
      color: gold;
    }
  }

  .project-tags {
    cursor: pointer;
  }
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
