import { createClient } from '$lib/prismicio';
import type { PageServerLoad } from '../$types';

export const prerender = false;

export const load: PageServerLoad =  async ({ params }) => {
	const client = createClient();

	const page = await client.getByUID('blog_post', params.uid);
	return {
		page
	};
}
