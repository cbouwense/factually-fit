<script lang="ts">
  import Search from "./Search.svelte";
</script>

<nav class="navbar has-shadow is-light">
  <div class="navbar-brand">
    <img src="/F.png" alt="Factually Fit Placeholder Logo" />
  </div>
  <div class="navbar-menu" id="menu">
    <div class="navbar-start" id="end">
      <div class="navbar-item">
        <Search />
      </div>
    </div>
  </div>
</nav>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
