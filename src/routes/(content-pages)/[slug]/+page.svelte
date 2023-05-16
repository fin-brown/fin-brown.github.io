<script>
    import { dataset_dev } from 'svelte/internal';

	// Declare the page variable to use on the client
	/** @type {import('./$types').PageData} */
	/*export let page;*/
	/*$: ({ page } = data);*/
	export let data;
	let { page } = data;
</script>

<!-- Here we'll load the component of the blog post page itself -->
<svelte:component this={page} /> 