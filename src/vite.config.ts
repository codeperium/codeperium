import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sentrySvelteKit } from "@sentry/sveltekit";
import { loadEnv } from 'vite';

export default ( mode: string) => {

	process.env = {...process.env, ...loadEnv(mode, process.cwd())};
	return defineConfig({
		build: {
			sourcemap: true
		},
		plugins: [sveltekit(), sentrySvelteKit({
			adapter: 'vercel',
			sourceMapsUploadOptions:{
				org: process.env.PUBLIC_SENTRY_ORG ?? process.env.VITE_CODEPERIUM,
				project: process.env.PUBLIC_SENTRY_PROJECT ?? process.env.VITE_CODEPERIUM,
				authToken: process.env.SENTRY_AUTH_TOKEN ?? process.env.VITE_SENTRY_AUTH_TOKEN,
				release: {
					name: 'codeperium@' + process.env.npm_package_version
				}
			}
			
		  })],
});

};


	
	

