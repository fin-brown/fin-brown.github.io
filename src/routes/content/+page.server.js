console.log("routes > content > page.server.js 1");

import { error } from '@sveltejs/kit';
import posts from '$lib/posts';

console.log("routes > content > page.server.js 2");

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const result = Object.keys(posts).map((index) => {
		const { slug, title, date, excerpt, tags, owner, image } = posts[index];
		return {
			slug,
			title,
			date,
			excerpt,
			tags,
			owner,
			image
		};
	});

	if (result) {
		return {
			posts: result
		}
	}

	throw error(500, `Could not load blog posts`);
}

console.log("routes > content > page.server.js 3");