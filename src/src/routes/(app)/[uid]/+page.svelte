<script lang="ts">
	import { HeroHeader } from '$components';
  import { components } from '$lib/slices';
	import { SliceZone } from '@prismicio/svelte';
	import type { SubpageDocument } from '../../../prismicio-types.js';
	let { data } = $props();
	let page = $state(data.page as SubpageDocument<string>);
	let slices = $state(page.data.slices);
	$effect(() => {
    page = data.page;
		slices = page.data.slices;
	});
</script>

<svelte:head>
	<title>{page.data.meta_title}</title>
	<meta name="description" content={page.data.meta_description} />
</svelte:head>
<SliceZone slices={slices} components={components}></SliceZone>

<style lang="postcss">
</style>
