<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export function load({ page }) {
    return {
			props: { 
        articleId: page.params.slug 
      }
		};
	}
</script>

<script>
  export let articleId = "";
</script>

<h1 class="title">{articleId}</h1>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
