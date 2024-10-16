<script lang="ts">
	import { components } from '$lib/slices';
	import { Date } from '$components';
	import { SliceZone } from '@prismicio/svelte';
	import type { SubpageDocument } from '../../../prismicio-types.js';
	import { PrismicImage } from '@prismicio/svelte';
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
<section class="py-[48px]">
	<header class="pb-[48px] border-solid border-opacity-10 border-b border-grey-light blog-header">
		<div class="flex md:justify-between md:flex-row flex-col w-100%">
			<div class="inline-flex gap-2">
				{#each page.data.tags as tag}
					<p
						class="py-1 px-4 inline-flex text-[13px] font-bold border-solid border-gold border hover:bg-gold hover:cursor-pointer"
					>
						{tag.tag.uid}
					</p>
				{/each}
			</div>
			<Date
				startDate={page.data.date}
				statusColor="default"
				fullDate={true}
				className="
				md:justify-end
				md:pt-0
				ml-0
				pt-[14px]
			"
			/>
		</div>
		<h2 class="md:text-[64px] text-[40px] font-bold max-w-[100vw]">
			{page.data.title}
		</h2>
	</header>
	<section class="slicezone lg:max-w-[70%] pt-[48px]">
		<PrismicImage field={page.data.header_image}/>
		<SliceZone {slices} {components}></SliceZone>
	</section>
</section>

<style lang="postcss">
	.blog-header,
	.slicezone {
		@apply px-4;
		@apply md:px-6;
		@apply lg:px-10;
		@apply 2xl:px-20;
	}
	.blog-header {
		background-image: url('https://cdn.codeperium.io/images/grid.webp');
		h2 {
			opacity: 1;
			transform: translateY(0);
			animation: label 0.7s ease-in;
		}
	}
	.slicezone {
		:global(img) {
			border: solid 5px;
			margin-top: 14px;
			margin-bottom: 14px;
		}
	}

	@keyframes label {
		from {
			opacity: 0;
			transform: translateY(-100px);
		}
	}
	
</style>
