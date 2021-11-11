<script lang="ts">
  import Search from "./Search.svelte";
</script>

<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/F.png" width="128" height="128" alt="Factually Fit small logo">
    </a>
  </div>

  <div id="navbar-search">
    <!-- <div class="navbar-start"?> -->
      <Search />
    <!-- </div> -->
  </div>
</nav>