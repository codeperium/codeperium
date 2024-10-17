import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.md', '.svx'],
	layout: {
		// fancy: path.join(dirname, './src/lib/components/layouts/fancy-layout.svelte'),
		// components: p,ath.join(dirname, './src/lib/components/layouts/components-layout.svelte')
	}
});

export default config;