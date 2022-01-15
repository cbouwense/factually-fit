<script>
  import Loading from "../components/Loading.svelte";

  export let id = "";
  export let imgUrl = "https://bulma.io/images/placeholders/1280x960.png";
  export let isLoading = false;
</script>

<!--
  Maybe take all of these divs into a container component or something, 
  this is just so ugly.
-->
<div class="box block">
  {#if isLoading}
    <div class="loading-container">
      <Loading />
    </div>
  {:else}
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <a href={id}>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={imgUrl} alt="Placeholder image">
          </a>
        </figure>
      </div>
    </div>
  {/if}
</div>

<style>
  .box {
    transition: all .3s cubic-bezier(.68,-0.55,.27,1.55);
  }

  .box:hover {
    transform: scale(1.1);
  }

  .loading-container {
    display: flex;
    justify-content: center;
  }
</style>
