<template>
  <div class="content">
    <div class="top-part">
      <h1>{{ post.title }}</h1>
      <div class="meta">
        Posted on {{ post.date }} · {{ post.read }} min read <br>
        Written by:
        <nuxt-link to="/about">
          <hLink>Hoh Shen Yien</hLink>
        </nuxt-link>
      </div>
    </div>
    <v-img :src="post.image"
           :lazy-src="post.lazy" width="80%" class="mx-auto post-img"
           gradient="to top right, rgba(255,255,255,.08), rgba(255,255,255,.08)"></v-img>
    <article>
      <nuxt-content :document="post"/>
    </article>


  </div>
</template>

<script>
export default {
  name: "_slug",
  async asyncData({$content, params}) {
    const post = await $content(`blog/${params.slug}`).fetch()
    return {post}
  },
}
</script>

<style scoped lang="scss">
article {
  @include smaller-section;
}

.content {
  padding-bottom: 80px;

  .top-part {
    padding-top: 164px;
    background-color: black;
    padding-bottom: 100px;
  }

  h1 {
    font-size: 5rem;
    text-align: center;
  }

  .meta {
    text-align: center;
    line-height: 1.7rem;
  }

  .post-img {
    margin-top: 60px;
    margin-bottom: 60px;
    background-color: hsla(0, 100%, 100%, 0.15);
    box-shadow: 0 0 10px 2px black;
  }
}


</style>
