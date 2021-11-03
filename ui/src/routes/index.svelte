<script>
  import ArticleCard from "../components/ArticleCard.svelte";
  import Search from "../components/Search.svelte";
</script>

<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
      <h1 class="title is-1 has-text-centered my-6">Factually Fit</h1>
      <div class="block">
        <Search />
      </div>
      <div class="block box">
        <ArticleCard />
      </div>
      <div class="block box">
        <ArticleCard />
      </div>
      <div class="block box">
        <ArticleCard />
      </div>
    </div>
  </div>
</div>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
  .box {
    transition: all .3s cubic-bezier(.68,-0.55,.27,1.55);
  }

  .box:hover {
    transform: scale(1.1);
  }
</style>
