<svelte:head>
	<title>Projects</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	export let data;
	let { posts } = data;
</script>

{#each posts as post}
  <BlogPostCard {post} />
{/each}