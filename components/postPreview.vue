<template>
  <div class="post-preview-card">
    <div class="no-overflow">
      <img src="https://images.unsplash.com/photo-1641865264156-bbe3d9784ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80" alt="" class="post-preview-img">
    </div>
    <div class="post-preview-content">
      <div>
        <v-chip v-for="tag in tags" outlined color="#daa520" class="mr-3 post-preview-tags" :key="tag">{{ tag }}</v-chip>
      </div>
      <h2 class="post-preview-title">This is title</h2>
      <div class="post-preview-text">This is content</div>
      <v-row class="post-preview-bottom" no-gutters>
        <arrowLink text="View More"/>
        <v-spacer/>
        <div class="post-preview-date"><v-icon color="#808080" size="1rem" class="mr-1">mdi-calendar</v-icon>13 June 2021</div>
      </v-row>

    </div>
  </div>
</template>

<script>
export default {
  name: "postPreview",
  data() {
    return {
      tags: ['asd', 'asdf', 'asdfg', 'asdfasdf']
    }
  }
}
</script>

<style scoped lang="scss">
.post-preview-card {
  border: $secondary 2px solid;
  border-radius: 5px;
  overflow: hidden;
  &:hover .post-preview-img{
    transform: scale(1.1);
  }
}
.post-preview-bottom {
  padding-bottom: 20px;
}
.post-preview-tags {
  margin: 8px 0;
  font-size: 0.8rem;
}
.post-preview-title {
}
.post-preview-content {
  padding: 5px 20px;
}
.post-preview-date {
  color: gray;
  font-size: 0.9rem;
}
.post-preview-text {
  margin-left: 10px;
  margin-bottom: 25px;
  margin-top: 15px;
  color: $secondary-text;
}
.post-preview-img {
  width: 100%;
  transition: transform 0.2s ease-in;
  height: auto;
}
</style>
