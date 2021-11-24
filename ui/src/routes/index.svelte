<script>
  import ArticleList from "../components/ArticleList.svelte";
  import Search from "../components/Search.svelte";
</script>

<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
      <h1 class="title is-1 has-text-centered my-6">Factually Fit</h1>
      <Search />
      <ArticleList />
    </div>
  </div>
</div>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
