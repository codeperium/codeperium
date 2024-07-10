import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sentrySvelteKit } from "@sentry/sveltekit";
import { loadEnv } from 'vite';

console.log(process.env)
export default ( mode: string) => {

	process.env = {...process.env, ...loadEnv(mode, process.cwd())};
	return defineConfig({
		build: {
			sourcemap: true
		},
		plugins: [sveltekit(), sentrySvelteKit({
			adapter: 'vercel',
			sourceMapsUploadOptions: {
				release: {
					inject: false
				}
			}
		  })],
});

};


	
	

