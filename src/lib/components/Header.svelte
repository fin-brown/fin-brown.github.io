<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="flex justify-between bg-theme2">
	<div class="w-10 h-10">
		<a href="https://kit.svelte.dev" class="flex items-center justify-center w-full h-full">
			<img src={logo} alt="SvelteKit" class="w-8 h-8 object-contain"/>
		</a>
	</div>

	<nav class="flex justify-center">
		<ul class="relative p-0 m-0 h-10 flex list-none">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="relative flex h-full justify-center items-center">
				<a href="/" class="flex h-100 items-center px-3 text-theme1 font-semibold text-base uppercase tracking-widest transition-colors duration-200 ease-linear">
					About
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/content' ? 'page' : undefined} class="relative flex h-full justify-center items-center">
				<a href="/content" class="flex h-100 text-center px-3 text-theme1 font-semibold text-base uppercase tracking-widest transition-colors duration-200 ease-linear">
					Content
				</a>
			</li>
		</ul>
	</nav>

	<div class="w-10 h-10">
		<a href="https://github.com/sveltejs/kit" class="flex items-center justify-center w-full h-full">
			<img src={github} alt="GitHub" class="w-8 h-8 object-contain"/>
		</a>
	</div>
</header>

<style>
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-2);
	}
</style>
