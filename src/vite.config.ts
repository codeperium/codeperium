import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			// these are the aliases and paths to them
			$styles: path.resolve('./src/styles')
		}
	},
	css: {
		transformer: 'postcss'
	},
	build: {
		sourcemap: false,
		cssMinify: 'lightningcss'
	},
	plugins: [
		sveltekit(),
  	],
	server: {
		fs: {
			allow: [
				"./slicemachine.config.json"
			]
		}
	}
});
