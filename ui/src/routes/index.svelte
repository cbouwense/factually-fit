<script>
  import ArticleList from "../components/ArticleList.svelte";
  import Search from "../components/Search.svelte";
</script>

<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
      <figure class="image is-4by1">
        <img src="/logo.png" alt="logo" />
      </figure>
      <Search />
      <ArticleList />
    </div>
  </div>
</div>

<style>  
  img {
    object-fit: cover;
    height: 250px;
    width: 100%;
  }
</style>
