<svelte:head>
	<title>Projects</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
    import ImageCard from '$lib/components/ImageCard.svelte';
    import TextOnlyCard from '../../lib/components/TextOnlyCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<body>
	<div class="flex flex-wrap items-start m-2">
		{#each data.posts as post}
			{#if post.image}
				<ImageCard {post} />
			{:else}
				<TextOnlyCard {post} />
			{/if}
		{/each}
	</div>
</body>