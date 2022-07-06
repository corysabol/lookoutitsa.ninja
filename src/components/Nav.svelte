<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    const switchTheme = (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);
    // Maybe do local storage of preference for theme...
    // does that require consent banner?
  });

	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

  .theme-switch-wrapper {
    display: flex;
    align-items: center;
  }

  em {
    font-size: 1rem;
    position: absolute;
    top: 15px;
    right: 75px;
  }
  
  .theme-switch {
    display: inline-block;
    height: 34px;
    /*position: relative;*/
    position: absolute;
    right: 10px;
    top: 10px;
    width: 60px;
  }
  
  @media (max-width: 490px) {
    em {
      font-size: 0.8rem;
      position: absolute;
      top: 35px;
      right: 15px;
    }
    .theme-switch {
      display: inline-block;
      height: 34px;
      position: absolute;
      right: 10px;
      top: 5px;
      width: 60px;
    }
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{segment === "games" ? "selected" : ""}' href='games'>games</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
    <li>
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div class="slider round"></div>
        </label>
        <em>Become one with the shadows.</em>
      </div>
    </li>
	</ul>
</nav>
