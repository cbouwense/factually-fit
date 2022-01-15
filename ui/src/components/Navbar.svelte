<script lang="ts">
  import Search from "./Search.svelte";
</script>

<nav class="navbar has-shadow is-light">
  <div class="navbar-brand">
    <a href="/" target="_self"><img src="/F.png" alt="Factually Fit Placeholder Logo" /></a>
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
  a {color: white;}         /* Unvisited link  */
  a:visited {color: white;} /* Visited link    */
  a:hover {color: white;}   /* Mouse over link */
  a:active {color: white;}  /* Selected link   */

</style>
