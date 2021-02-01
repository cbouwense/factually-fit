<template>
  <div>
    <Loading :loading="store.state.loading" />
    <ul class="article-list">
      <li v-for="a in articles" :key=a.name>
        <ArticleCard  
          :id=a.id
          :title=a.title
          :subtitle=a.subtitle
        />
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../../../store";
import ArticleCard from './ArticleCard.vue';
import Loading from '../../../components/Loading';

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

<style scoped>
/* Mobile Vertical */
li {
  margin: 5vh 0;
}

/* Mobile Horizontal */
@media screen and (min-width: 640px) {
  li {
    margin: 10vh 0;
  }

  ul {
    margin: 0 15vw;
  } 
}

/* Tablet */
@media screen and (min-width: 768px) {
  li {
    margin: 5vh 0;
  }

  ul {
    margin: 0 15vw;
  } 
}

/* Laptop */
@media screen and (min-width: 1366px) {
  ul {
    margin: 0 25vw;
  }
}

/* Desktop */
@media screen and (min-width: 1920px) {
  
}

</style>
