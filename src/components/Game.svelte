<script>
  import { onMount } from 'svelte';
  
  export let content;
</script>
<style>
</style>

<h1>{content.name}</h1>

<div class='game'>
  <iframe width=600 height=600 src={content.name + '.html'} title={content.name}></iframe>
  <!--html JSON.parse(content.htmlContent)}-->
</div>