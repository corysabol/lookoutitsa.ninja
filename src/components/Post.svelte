<script>
  export let content;
</script>

<h1>{content.title}</h1>
<h5>{content.date} - {content.author}</h5>

<div class='content'>
  {@html content.html}
</div>
