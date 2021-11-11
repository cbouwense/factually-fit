<script>
  import { getStores /*, page */ } from '$app/stores';
  import { onMount } from "svelte";

  let article = {}; // TODO: type this
  let isLoaded = false;
  const { page } = getStores();

  onMount(async () => {
    try {
      console.log("page: ", page);
      console.log("$page: ", $page);
      const res = await fetch(`http://localhost:3001${$page.path}`); // TODO: extract this to an interface or something.
      article = await res.json();
    } catch (e) {
      console.error(e);
    }
    isLoaded = true;
  });
</script>

<h1 class="title">articleId</h1>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
