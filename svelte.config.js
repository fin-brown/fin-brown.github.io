import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  extensions: [".svelte", ".md", ".svx"],

  preprocess: [
    mdsvex({
      extensions: [".md", ".svx"],
    }),
  ],

  kit: {
    adapter: adapter(),
  },

  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
};

export default config;
