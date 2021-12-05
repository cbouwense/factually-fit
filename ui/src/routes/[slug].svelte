<script lang="ts">
  import { getStores } from '$app/stores';
  import { onMount } from "svelte";
  import articles from "../articles/index";

  import Error404 from "./Error404.svelte";
  import Error500 from "./Error500.svelte";
  import Navbar from "../components/Navbar.svelte";

  // TODO: separate these from this file.
  type Article = {
    body: string,
    citations: Citation[],
    gist: string,
    metadata: {
      id: string,
      date: string,
      imgUrl: string,
      readingTime: number,
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
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      article = await res.json();
      document.title = article.metadata.title;
    } catch (e) {
      console.log(e);
      error = e;
    }
    isLoaded = true;
  });
</script>

<Navbar />
{#if !isLoaded}
  <p>loading...</p>
{:else if Boolean(error)}
  {#if error.status === 404}
    <Error404 />
  {:else if error.status === 500}
    <Error500 error={error} />
  {/if}
{:else}
  <div class="section">
    <div class="container">
      <div class="content is-medium">
        <h1>{article.metadata.title}</h1>
        <!-- TODO: make this into another component maybe -->
        <p>{article.metadata.date} - {article.metadata.readingTime} minute read</p>
        <img src={article.metadata.imgUrl} alt="Placeholder alt" />
        <h2 class="title is-2">The Gist</h2>
        <svelte:component this={articles[article.metadata.id].gist} />
        <h2 class="title is-2">The Long Version</h2>
        <svelte:component this={articles[article.metadata.id].long} />
        <h2 class="title is-2">Citations</h2>
        <ol>
          {#each article.citations as citation}
            <li>
              <span id={`${citation.ref}`}><a href={citation.link}>{citation.title}</a>, {citation.author}</span>
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
