import { createClient } from '$lib/prismicio';
import type { PageServerLoad } from '../$types';

export const prerender = true;

export const load: PageServerLoad =  async ({ params }) => {
	const client = createClient();

	const page = await client.getByUID('subpage', params.uid);
	return {
		page
	};
}
