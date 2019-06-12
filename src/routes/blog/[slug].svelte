<script context="module">
  import Post from '../../components/Post.svelte';
  import { onMount } from 'svelte';

  export async function preload({params, query}) {
    const { slug } = params;

    const res = await this.fetch(`blog/${slug}.json`);

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

<svelte:head>
  <title>{content.title}</title>
</svelte:head>

<Post content={content}></Post>

<!--<h1>{content.title}</h1>
<h2>{content.date} - {content.author}</h2>

<div class='content'>
  {@html content.html}
</div>
-->
