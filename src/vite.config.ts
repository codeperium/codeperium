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
			adapter: 'vercel'
		  })],
});

};


	
	

