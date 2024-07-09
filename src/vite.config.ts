import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sentrySvelteKit } from "@sentry/sveltekit";

export default defineConfig({
	plugins: [sentrySvelteKit({
		adapter: 'vercel',
		sourceMapsUploadOptions: {
		  org: process.env.SENTRY_ORG,
		  project: process.env.SENTRY_PROJECT,
		  authToken: process.env.SENTRY_AUTH_TOKEN,
		},
	  }), sveltekit()]
});

