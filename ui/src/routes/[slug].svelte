<script>
  import { getStores /*, page */ } from '$app/stores';
  import { onMount } from "svelte";

  let article = {}; // TODO: type this
  let error;
  let isLoaded = false;
  const { page } = getStores();

  onMount(async () => {
    try {
      console.log("page: ", page);
      console.log("$page: ", $page);
      const res = await fetch(`http://localhost:3001${$page.path}`); // TODO: extract this to an interface or something.
      article = await res.json();
      console.log("article: ", article);
    } catch (e) {
      console.error(e);
      error = e;
    }
    isLoaded = true;
  });
</script>

{#if !isLoaded}
  <p>loading...</p>
{:else if Boolean(error)}
  <p>error {error}</p>
{:else}
  <h1 class="title">{article.metadata.title}</h1>
  <!-- TODO: make this into another component maybe -->
  <h3 class="subtitle">{article.metadata.date} - 5 minute read</h3> <!-- TODO: calculate reading duration -->
  <img src={article.metadata.imgUrl} alt="Placeholder alt" />
  <div class="content">
    <h2 class="title is-2">The Gist</h2>
    <p>{article.gist}</p>
    <h2 class="title is-2">The Long Version</h2>
    <p>{article.body}</p>
  </div>
{/if}

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
