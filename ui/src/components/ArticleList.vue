<template>
  <ul class="article-list">
    <ArticleCard 
      v-for="a in articles" 
      :key=a.name
      :id=a.id
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
          id: a.id,
          subtitle: a.data.subtitle,
          title: a.data.title
        }));
    } catch (err) {
      console.error(err);
    }
  }
}
</script>
