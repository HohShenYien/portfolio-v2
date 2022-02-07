<template>
  <blockquote class="quote">
    <p class="text"><slot></slot></p>
    <div class="author-wrapper" v-if="hasAuthor()">
      <span class="author"><slot name="author"></slot></span>
    </div>
  </blockquote>
</template>

<script>
export default {
  name: "quote",
  methods: {
    hasAuthor() {
      return this.$slots.author != null;
    }
  }
}
</script>

<style scoped lang="scss">
$my-gray: #ffffffA0;
.quote {
  border-left: $secondary solid 6px;
  background-color: #FFFFFF0D;
  padding: 20px 45px;
  margin: 1.5rem 20px;
  position: relative;
  &::before {
    content: '“';
    position: absolute;
    left: 10px;
    top: 2px;
    line-height: 3rem;
    color: $my-gray;
    font-weight: bold;
    font-family: "Times New Roman" !important;
    font-size: 3rem;
  }
  .text {
    margin-bottom: 0 !important;
  }
  .author-wrapper {
    text-align: right;
    color: $my-gray;
    .author {
      margin-top: 5px;
      margin-right: 15px;
      position: relative;
      display: inline-block;
      font-style: italic;
      &::before {
        content: "";
        width: 24px;
        height: 2px;
        background-color: $my-gray;
        left: -28px;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .quote {
    padding: 20px 5px 20px 45px;
  }
}
</style>
