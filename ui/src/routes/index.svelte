<script>
  import ArticleCard from "../components/ArticleCard.svelte";
  import Search from "../components/Search.svelte";
</script>

<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
      <h1 class="title is-1 has-text-centered my-6">Factually Fit</h1>
      <Search />
      <!-- Maybe make an ArticleList component-->
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </div>
</div>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
