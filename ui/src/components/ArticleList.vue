<template>
  <div class="article-list">
    <ArticleCard title="What is Carbohydrate?" subtitle="And Why You Should Eat Less of It" />
    <ArticleCard title="What is Protein?" subtitle="And Why You Should Eat More of It" />
    <ArticleCard title="What is Fat?" subtitle="And Why You Shouldn't Be Afraid of It" />
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'

export default {
  name: "ArticleList",
  components: {
    ArticleCard
  }
}
</script>

<style scoped>

</style>