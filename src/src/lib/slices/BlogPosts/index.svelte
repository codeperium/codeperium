<script lang="ts">
	import { type Content } from '@prismicio/client';
	import {createClient } from "$lib/prismicio";
	import { onMount } from 'svelte';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import Date from '$components/Date.svelte';

	const client = createClient();
	let blogPosts = $state({}) as Iterable<unknown>;
	onMount(async () => {
		blogPosts = await client.getAllByType('blog_post');
	});

	let {slice}: {slice: Content.BlogPostsSlice} = $props();
</script>
<section class="mt-[48px] px-4 md:px-6 lg:px-10 2xl:px-20 md:flex md:flex-wrap gap-4">
{#each blogPosts as post}
	<a href={post.url} class="post-thumbnail inline-block bg-grey-light/20 hover:bg-grey-dark text-white md:w-[50%] relative w-full min-h-[320px]">
		<PrismicImage field={post.data.header_image} />
		<div class="gradient"></div>
		<div class="absolute-container">
			<Date
				startDate={post.data.date}
				statusColor="in-progress"
				fullDate={true}
				className="
					ml-0
				"
			/>
			<p class="font-bold md:text-[24px] text-[18px] mb-2 ">{post.data.title}</p>
			<div class="hidden lg:block text-[14px]">
				<PrismicRichText field={post.data.short_description} />
			</div>
		</div>
	</a>
{/each}
</section>


<style lang="postcss">
	.post-thumbnail {
		:global(.date-component-container) {
			margin-left: 0 !important;
		}
		&:hover {
			.gradient {
				@apply from-grey-light via-grey-light/70 to-transparent;
			}
		}
		.gradient {
			@apply absolute inset-0;
			@apply m-0;
			@apply bg-gradient-to-t from-black via-black/70 to-transparent;
			@apply transition-all ease-in-out;
		}
		.absolute-container {
			@apply absolute z-10 bottom-0 left-0 mx-8 my-8;
		}
	}
</style>
