<script>
	console.log("point 2.1");
	// Declare the page variable to use on the client
	export let page;
	$: ({ page } = data);

	console.log("point 2.2");
</script>

<!-- Here we'll load the component of the blog post page itself -->
<svelte:component this={page} />