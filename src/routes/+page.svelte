<script>
	import About from '$lib/components/About.svelte';
	import AboutDev from '../lib/components/AboutDev.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Hello" />
</svelte:head>

<!-- put this on top with "relative z-[-1]" -->
<body class="">
	<section>
		<div class="flex w-screen h-56 bg-gradient-to-t from-theme1 to-white"></div>
		<div class="flex flex-wrap px-10 pb-5 bg-theme1">
			<picture>
				<img src="/fin-brown-title-1.png" alt="Fin Brown" />
			</picture>
		</div>
	</section>

	<div><AboutDev /></div>

	<section>
		<div class="flex flex-wrap mx-20 mt-20 mb-60">
			<p class="text-3xl">
				<a href="#cv" class="text-theme2">Data scientist</a> working in renewable tech and 
				<a href="/content" class="text-theme2">crypto</a>.
			</p>
			<p class="text-3xl my-5">
				Interested in all things including <a href="/content" class="text-theme2">deep learning</a>, 
				<a href="/content" class="text-theme2">full-stack software development</a>, 
				<a href="/content" class="text-theme2">visual design</a>, start-ups and the world in general.
			</p>
		</div>
	</section>

	<div id="cv">
		<About />
	</div>

</body>