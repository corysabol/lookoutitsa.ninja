<script context='module'>
  import Game from '../../components/Game.svelte';
  import { onMount } from 'svelte';

  export async function preload({params, query}) {
    const { slug } = params;
    const res = await this.fetch(`games/${slug}.json`);

    if (res.status === 200) {
      const content = await res.json();
      return { content };
    }

    this.error(404, 'No dice, Ace.');
  }
</script>

<script>
  export let content;
</script>

<style>
</style>

<svelte:head>
  <title>{content.name}</title>
</svelte:head>

<Game content={content}></Game>