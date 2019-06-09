<script context="module">
  export async function preload({params, query}) {
    const { slug } = params;

    const res = await this.fetch(`blog/${slug}.json`);
    const content = await res.json();

    return { content };
  }
</script>

<script>
  export let content;
</script>

<svelte:head>
  <title>{content.slug}</title>
</svelte:head>

<h1>{content.slug}</h1>

<div class='content'>
  {@html content.html}
</div>
