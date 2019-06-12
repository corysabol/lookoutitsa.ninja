<script>
  export let content;
</script>

<h1>{content.title}</h1>
<h2>{content.date} - {content.author}</h2>

<div class='content'>
  {@html content.html}
</div>
