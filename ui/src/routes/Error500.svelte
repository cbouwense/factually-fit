<script lang="ts">
  interface Error {
    status: number;
    statusText: string;
  };
  
  export let error: Error;
</script>

<div class="section">
  <div class="container">
    <div class="content is-medium">
      <h1>It's not you. It's us.</h1>
      <p>Something went wrong on the server. Try again later, or email me what happened christian@factually.fit</p>
      <button class="button is-link is-light" on:click={() => { location.href = "/" }}>Article List</button>
      <hr />
      <p>For nerds: here's the error.</p>
      <code>{error.status}</code>
      <code>{error.statusText}</code>
    </div>
  </div>
</div>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
