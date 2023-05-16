<script>
	import { page } from '$app/stores';

	let previousY;
	let currentY;
	let clientHeight;
	const deriveDirection = ( y ) => {
		const direction = !previousY || previousY < y ? 'down' : 'up'
		previousY = y
		return direction
	};
	$: scrollDirection = deriveDirection(currentY)
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4
</script>

<svelte:window bind:scrollY={currentY} />

<header 
	class="flex sticky top-0 justify-center bg-white/80 backdrop-blur-sm transition-transform ease-in" 
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<nav class="flex justify-center">
		<ul class="relative p-0 m-0 h-10 flex list-none">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="relative flex h-full justify-center items-center">
				<a href="/" class="flex h-100 items-center px-3 text-theme2 font-semibold text-base uppercase tracking-widest transition-colors duration-200 ease-linear">
					About
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/content' ? 'page' : undefined} class="relative flex h-full justify-center items-center">
				<a href="/content" class="flex h-100 text-center px-3 text-theme2 font-semibold text-base uppercase tracking-widest transition-colors duration-200 ease-linear">
					Content
				</a>
			</li>
			<li class="relative flex h-full justify-center items-center">
				<a href="#contact" class="flex h-100 text-center px-3 text-theme2 font-semibold text-base uppercase tracking-widest transition-colors duration-200 ease-linear">
					Contact
				</a>
			</li>
		</ul>
	</nav>
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
