<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-col p-0 m-0 w-full max-width-5xl box-border">
		<slot />
	</main>

	<Footer />
</div>

