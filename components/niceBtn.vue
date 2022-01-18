<template>
  <button
    class="nice-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "niceBtn"
}
</script>

<style scoped lang="scss">

.nice-btn {
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  padding: 4px 12px;
  color: goldenrod;
  border: 2px solid goldenrod;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: all 0.5s ease;
  overflow: hidden;

  &:before {
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: goldenrod;
    z-index: -1;
  }

  &:hover {
    font-weight: bold;
    color: white;

    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }

  &:focus {
    font-weight: bold;
    color: white;

    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
}
</style>
