import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sentrySvelteKit } from "@sentry/sveltekit";
import { loadEnv } from 'vite';

console.log(import.meta.env)


export default ( mode: string) => {

	process.env = {...process.env, ...loadEnv(mode, process.cwd())};
	console.log(process.env);
	return defineConfig({
		plugins: [sentrySvelteKit({
			adapter: 'vercel',
			sourceMapsUploadOptions: {
			  org: process.env.VITE_CODEPERIUM,
			  project: process.env.VITE_CODEPERIUM,
			  authToken: process.env.VITE_SENTRY_AUTH_TOKEN
			},
		  }), sveltekit()],
});

};


	
	

