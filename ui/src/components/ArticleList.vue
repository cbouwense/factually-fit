<template>
  <div>
    <Loading :loading="store.state.loading" />
    <ul class="article-list">
      <ArticleCard 
        v-for="a in articles" 
        :key=a.name
        :id=a.id
        :title=a.title
        :subtitle=a.subtitle
      />
    </ul>
  </div>
</template>

<script>
import store from "../store";
import ArticleCard from './ArticleCard.vue';
import Loading from './Loading.vue';

export default {
  name: "ArticleList",
  components: {
    ArticleCard,
    Loading,
  },
  data() {
    console.log("store: ", store)
    return {
      articles: [],
      store: store
    }
  },
  async created() {
    try {
      this.store.setLoading(true);
      this.articles = (await (await fetch("http://localhost:3001/")).json())
        .map(a => ({
          id: a.id,
          subtitle: a.data.subtitle,
          title: a.data.title
        }));
      this.store.setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
}
</script>
