<template>
  <component :is="href != null ? 'a' : 'span'" class="link link--arrowed" :href="href" @click="$emit('click')">
    <slot></slot>
    <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g fill="none" class="arrow-stroke" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
        <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
        <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
      </g>
    </svg>
  </component>
</template>

<script>
export default {
  name: "arrowLink",
  props: ['href']
}
</script>

<style scoped lang="scss">
.link {
  color: $link;
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
  font-size: 1rem;
}

.link:hover {
  color: $primary;
}

.link--arrowed {
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  transition: all 0.3s linear;
  cursor: pointer;

  .arrow-icon {
    position: relative;
    top: -1px;
    -webkit-transition: -webkit-transform 0.3s ease;
    transition: -webkit-transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
    vertical-align: middle;

    .arrow-stroke {
      stroke: $link;
    }
  }

  .arrow-icon--circle {
    transition: stroke-dashoffset .3s ease;
    stroke-dasharray: 95;
    stroke-dashoffset: 95;
  }

  &:hover {
    font-size: 1.1rem;

    .arrow-icon {
      transform: translate3d(5px, 0, 0);

      .arrow-stroke {
        stroke: gold;
      }
    }

    .arrow-icon--circle {
      stroke-dashoffset: 0;
    }
  }
}
</style>
