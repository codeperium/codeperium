import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sentrySvelteKit } from '@sentry/sveltekit';
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
		sourcemap: true,
		cssMinify: 'lightningcss'
	},
	plugins: [
		sveltekit(),
		sentrySvelteKit({
			adapter: 'vercel',
			sourceMapsUploadOptions: {
				release: {
					inject: false
				}
			}
		})
	]
});
