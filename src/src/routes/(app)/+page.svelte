<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { HomepageDocument } from '../../prismicio-types';
	import { components } from '$lib/slices';

	export let data;
	const page = data.page as HomepageDocument<string>;
	const slices = page.data.slices;
</script>

<svelte:head>
	<title>{page.data.meta_title}</title>
	<meta name="description" content={page.data.meta_description} />
</svelte:head>
<SliceZone slices={slices} components={components}></SliceZone>

<style lang="postcss">
</style> 
