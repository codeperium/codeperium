import { createClient } from '$lib/prismicio';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const client = createClient();

	const page = await client.getSingle('homepage');
	return {
		page
	};
}
