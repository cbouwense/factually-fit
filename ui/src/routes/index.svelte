<script>
  import ArticleList from "../components/ArticleList.svelte";
  import Search from "../components/Search.svelte";
</script>

<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
      <figure class="image is-4by1">
        <img src="/logo-original-1000.png" alt="logo" />
      </figure>
      <Search />
      <ArticleList />
    </div>
  </div>
</div>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

  img {
    object-fit: cover;
    height: 250px;
    width: 100%;
  }
</style>
