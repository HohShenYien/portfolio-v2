<template>
  <span>
    <component :is="href != null ? 'a' : 'span'"
               :href="href" class="nice-link" @click="$emit('click')"
               :target="target != null ? target : '_blank'">
      <span class="link-txt">
        <slot></slot>
      </span>
    </component>
  </span>
</template>

<script>
export default {
  name: "hLink",
  props: ['href', 'target'],
}
</script>

<style scoped lang="scss">
.link-txt {
  color: $link;
  display: inline-block;
  transition: transform 0.3s;
}

.nice-link:hover .link-txt {
  transform: translateY(-3px);
  color: $secondary;
}

.nice-link {
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: color 0.3s;
  cursor: pointer;
}

.nice-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: $secondary;
  top: 100%;
  left: 0;
  pointer-events: none;
  transform-origin: 50% 100%;
  transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
}

.nice-link:hover::after {
  transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
  clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
}

.nice-link:hover {
  color: goldenrod !important;
}
</style>
