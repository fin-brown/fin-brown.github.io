<script>
	import StickyHeader from '../lib/components/StickyHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
	<StickyHeader class="relative z-20"/>

	<main class="relative z-0 flex flex-col p-0 m-0 w-full max-width-5xl box-border">
		<slot />
	</main>

	<Footer class="relative z-10"/>
</div>