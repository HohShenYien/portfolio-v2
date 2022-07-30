<template>
  <span class="code"><slot></slot></span>
</template>

<script>
export default {
  name: "SingleLineCode"
}
</script>

<style scoped>
.code {
  background-color: #30343d;
  color: hotpink;
  font-family: monospace, monospace;
  padding: 0 4px;
  font-size: 1rem;
}
</style>
