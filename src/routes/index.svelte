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

	.logo {
		margin-left: 4em;
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

<h1>Look out it's a ninja</h1>
<!--<p>Tech, Information Security, and Game Design. Hiyah!</p>-->

<figure>
	<img class='logo' alt='nayrudo shitpuddin' src='logo.svg'>
	<figcaption>Tech, Game Design, and whatever else I'm feeling.</figcaption>
</figure>

<!-- dirty hack to customize the github pages 404 page 
  with our own that is still able to be built with sapper and svetle -->
<a href='/404' style='visibility:hidden'></a>
