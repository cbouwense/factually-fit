<script lang="ts">
  import { getStores } from '$app/stores';
  import { onMount } from "svelte";

  import Search from "../components/Search.svelte";

  type Article = {
    body: string,
    citations: Citation[],
    gist: string,
    metadata: {
      id: string,
      date: string,
      imgUrl: string,
      subtitle: string,
      tags: string[],
      title: string,
    }
  };

  type Citation = {
    author: string,
    link: string,
    publication: string,
    ref: number,
    title: string,
  };

  let article: Article | undefined;
  let error;
  let isLoaded = false;
  const { page } = getStores();

  onMount(async () => {
    try {
      const res = await fetch(`http://localhost:3001${$page.path}`); // TODO: extract this to an interface or something.
      article = await res.json();
    } catch (e) {
      console.error(e);
      error = e;
    }
    isLoaded = true;
  });
</script>

<div class="columns">
  <div class="column">
    <div class="box">
      F
    </div>
  </div>
  <div class="column is-11">
    <Search />
  </div>
</div>

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
    <h2 class="title is-2">Citations</h2>
    <ol>
      {#each article.citations as citation}
        <li>
          <span><a href={citation.link}>{citation.title}</a>, {citation.author}</span>
        </li>
      {/each}
    </ol>
  </div>
{/if}

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
