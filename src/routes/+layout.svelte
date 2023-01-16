<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-col p-0 m-0 w-full max-width-5xl box-border">
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
