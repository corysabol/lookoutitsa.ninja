<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
    color: inherit;
    background-color: inherit;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
    color: inherit;
    background-color: inherit;
	}

	figure {
		margin: 0 0 1em 0;
    color: inherit;
    background-color: inherit;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
    color: inherit;
    background-color: inherit;
	}

	p {
		margin: 1em auto;
    color: inherit;
    background-color: inherit;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Don't move a muscle</title>
</svelte:head>

<h1>I am but a shadow.</h1>

<figure>
	<img alt='nayrudo shitpuddin' src='https://upload.wikimedia.org/wikipedia/commons/4/48/Ninja-japan-fighter-martial-arts-153355.svg'>
	<figcaption>I do stuff with computers. Hiyah!</figcaption>
</figure>

<p><strong>This site is under construction. Come back later for some ninja shit.</strong></p>

<!-- dirty hack to customize the github pages 404 page 
  with our own that is still able to be built with sapper and svetle -->
<a href='/404' style='visibility:hidden'></a>
