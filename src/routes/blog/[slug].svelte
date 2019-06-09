<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params;

    const res = await this.fetch(`blog/${slug}.json`);
    const content = await res.body;

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
