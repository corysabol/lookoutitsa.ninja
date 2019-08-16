<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`games.json`)
      .then(r => r.json())
      .then(games => {
        return { games };
      });
  }
</script>

<script>
  export let games;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Games</title>
</svelte:head>

<ul>
  {#each games as game}
  <li>
    <a rel="prefetch" href="games/{game.slug}">{game.name}</a>
  </li>
  {/each}
</ul>