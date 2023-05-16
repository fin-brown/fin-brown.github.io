<script>
	export let post;
</script>


{#if post}
    <div class="relative group flex flex-col w-[30%] block border border-4 border-theme1 m-3 rounded-xl hover:border-theme3 shadow-t-xl">
        <a href="/{post.slug}">
            <h2 class="w-full bg-theme1 text-white text-lg group-hover:bg-theme3 p-2">
                {@html post.title}
            </h2>
            <div class="flex flex-col">
                <p class="text-black p-2 text-sm">
                    {@html post.excerpt}
                </p>
                <div class="relative z-[-1] flex w-full">
                    <ul class="flex flex-row top-0">
                        {#if post.tags}
                            {#each post.tags as tag}
                                <div class="block rounded-md bg-theme3 text-white px-1 m-1">
                                    {tag}
                                </div>
                            {/each}
                        {/if}
                    </ul>
                </div>
            </div>
        </a>
    </div>
{/if}