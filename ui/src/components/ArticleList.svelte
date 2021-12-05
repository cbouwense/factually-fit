<script>
  import { onMount } from "svelte";
  import ArticleCard from "./ArticleCard.svelte";

  let articles = []; // TODO: type this
  let isLoaded = false;

  onMount(async () => {
    try {
      const res = await fetch('http://localhost:3001/'); // TODO: extract this to an interface or something.
      articles = await res.json();
    } catch (e) {
      console.error(e);
    }
    isLoaded = true;
  });
</script>

{#if isLoaded}
  {#each articles as a}
    <ArticleCard imgUrl={a.metadata.imgUrl} id={a.id} />
  {/each}
{:else}
  <ArticleCard isLoading={true} />
  <ArticleCard isLoading={true} />
  <ArticleCard isLoading={true} />
  <ArticleCard isLoading={true} />
  <ArticleCard isLoading={true} />
{/if}

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
