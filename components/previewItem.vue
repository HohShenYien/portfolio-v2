<template>
<!--  This is search preview item-->
  <div @click="travel">
    <div class="preview-item">
      <div class="item-meta">
        <div class="item-type">
          {{ item.type }}
        </div>
        <div>
          {{ item.date }}
        </div>
      </div>
      <h2>
        {{ item.title }}
      </h2>
      <div>
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "previewItem",
  props: ['item'],
  methods: {
    travel() {
      this.$router.push(this.item.path);
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="scss">
.preview-item {
  padding: 20px;
  border-radius: 6px;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #FFFFFF09;

    h2 {
      color: $primary;
    }
  }

  h2 {
    color: white;
    transition: color 0.2s linear;
  }

  div {
    color: gray;
  }

  .item-meta {
    display: flex;
    justify-content: space-between;

    .item-type {
      text-transform: capitalize;
      color: goldenrod;
    }
  }
}
</style>
