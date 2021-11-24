<script lang="ts">
  import { getStores } from '$app/stores';
  import { onMount } from "svelte";
  import articles from "../articles/index";

  import Navbar from "../components/Navbar.svelte";

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

<Navbar />
{#if !isLoaded}
  <p>loading...</p>
{:else if Boolean(error)}
  <p>error {error}</p>
{:else}
  <div class="section">
    <div class="container">
      <div class="content is-medium">
        <h1>{article.metadata.title}</h1>
        <!-- TODO: make this into another component maybe -->
        <p>{article.metadata.date} - 5 minute read</p> <!-- TODO: calculate reading duration -->
        <img src={article.metadata.imgUrl} alt="Placeholder alt" />
        <h2 class="title is-2">The Gist</h2>
        <svelte:component this={articles[article.metadata.id].gist} />
        <h2 class="title is-2">The Long Version</h2>
        <svelte:component this={articles[article.metadata.id].long} />
        <h2 class="title is-2">Citations</h2>
        <ol>
          {#each article.citations as citation}
            <li>
              <span><a href={citation.link}>{citation.title}</a>, {citation.author}</span>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
{/if}

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
