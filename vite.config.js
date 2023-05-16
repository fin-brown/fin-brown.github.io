import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	assetsInclude: ['**/*.md']
};

export default config;
