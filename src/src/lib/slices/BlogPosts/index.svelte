<script lang="ts">
	import { type Content } from '@prismicio/client';
	import {createClient } from "$lib/prismicio";
	import { onMount } from 'svelte';
	import { PrismicImage } from '@prismicio/svelte';

	const client = createClient();
	let blogPosts = $state({}) as Iterable<unknown>;
	onMount(async () => {
		blogPosts = await client.getAllByType('blog_post');
	});

	let {slice}: {slice: Content.BlogPostsSlice} = $props();
</script>
<section class="mt-[48px] px-4 md:px-6 lg:px-10 2xl:px-20 flex flex-wrap  gap-4">
{#each blogPosts as post}
	{console.log(post)}
	<a href={post.url} class=" block bg-grey-light/20 hover:bg-grey-dark hover:text-white py-4 px-16 max-w-[30%]">
		<p class="font-bold text-[24px] ">{post.data.title}</p>
	</a>
{/each}
</section>
