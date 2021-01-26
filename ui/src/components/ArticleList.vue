<template>
  <ul class="article-list">
    <ArticleCard 
      v-for="a in articles" 
      :key="a.title" 
      :title=a.title
      :subtitle=a.subtitle
    />
  </ul>
</template>

<script>
import ArticleCard from './ArticleCard.vue'

export default {
  name: "ArticleList",
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: []
    }
  },
  async created() {
    try {
      this.articles = (await (await fetch("http://localhost:3001/")).json())
        .map(a => ({
          subtitle: a.subtitle,
          title: a.title
        }));
    } catch (err) {
      console.error(err);
    }
  }
}
</script>

<style scoped>

</style>