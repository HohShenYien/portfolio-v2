<template>
  <span class="highlighted"><slot></slot></span>
</template>

<script>
export default {
  name: "highlighter"
}
</script>

<style scoped>
.highlighted {
  color: lightgoldenrodyellow;
}
</style>
