<script lang="ts">
	import type { Content } from '@prismicio/client';

	let {slice}: {slice: Content.RoadmapSlice} = $props();
	const date = new Date(slice.primary.start_date as string);
	date.setDate(date.getDate() + 1);
	const formatted = new Intl.DateTimeFormat("en-US", {year: "numeric", month: "short"}).format(date);

	const fetchColorStatus = (status: String): String => {
		let res: String;
		switch (status) {
			case "Finished":
				res = "finished";
				break;
			case "Work in Progress": 
				res = "in-progress";
				break;
			case "Not Started": 
				res = "not-started";
				break;
			default:
				res = "";
				break;
		}
		return res;
	}
</script>
<!-- TOOD: generate date in external component -->
<section class="flex justify-center mx-[84px] px-[84px] ">
	<div 
		class="
			flex
			left
			mt-[72px]
			pr-[25px]
			min-w-[235px]
	">
		<p>{slice.primary.label}</p>
		<p class="ml-[24px] mr-[4px] flex after:w-[25px] after:block after:h-[1px] after:bg-grey-light/10 after:mt-[19px] relative after:absolute after:-right-[30px] after:-top-[9px]">
			<span class="block w-[20px] h-[20px] before:icon before:icon-ar-l before:icon-red before:icon-sm relative {fetchColorStatus(slice.primary.status)}"></span>
			<span class="leading-[20px] text-red date {fetchColorStatus(slice.primary.status)}">{formatted}</span>
			<span class="block w-[20px] h-[20px] -mr-[5px] before:icon before:icon-sl-f before:icon-red before:icon-sm relative {fetchColorStatus(slice.primary.status)}"></span>
			<span class="block w-[20px] h-[20px] before:icon before:icon-ar-r before:icon-red before:icon-sm relative {fetchColorStatus(slice.primary.status)}"></span>
		</p>
	</div>
	<div
		class="
			border-solid border-opacity-10 border-l border-grey-light
			border-solid border-opacity-10 border-b border-grey-light
			right
			pt-[48px]
			px-[48px]
			pb-[72px]
			min-w-[840px]
	">
		<div class="flex items-center mb-[24px]">
			<span class="block w-[48px] h-[48px] before:icon 
          before:icon-ar-d-r  before:icon-red relative {fetchColorStatus(slice.primary.status)}"></span>
			<p class="inline text-[16px] text-white font-medium px-[24px] py-[6px] h-[32px] ml-[24px] status {fetchColorStatus(slice.primary.status)}">{slice.primary.status}</p>
		</div>
		<p class="font-bold text-[48px] mb-[24px]">{slice.primary.phase_name}</p>
		<div >
			{#each slice.primary.phase_items as item}
			<div class="flex items-center max-h-[20px] text-[16px] mb-[12px] ">
				<span class="block w-[20px] h-[20px] before:icon before:icon-sm
          before:icon-ar-r before:icon-red relative mr-[12px] {fetchColorStatus(item.status as String)}"></span>
				<p class="text-black {fetchColorStatus(item.status as String)}">{item.label}({item.status})</p>
			</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	.left, .status {
		font-family: 'Red Hat Mono';
		font-weight: 600;
	}
	.date {
		font-weight: 700;
	}
	.finished{
		&.date {
			@apply text-red;
		}
		&.status {
			@apply bg-red;
		}
		&::after {
			@apply icon-red;
		}
		&::before {
			@apply icon-red;
		}
	}
	.in-progress{
		&.date {
			@apply text-gold;
		}
		&.status {
			@apply bg-gold;
		}
		&::after {
			@apply icon-gold;
		}
		&::before {
			@apply icon-gold;
		}
	}
	.not-started{
		@apply text-grey-light;
		&.date {
			@apply text-grey-light;
		}
		&.status {
			@apply bg-grey-light;
		}
		&::after {
			@apply icon-grey-light;
		}
		&::before {
			@apply icon-grey-light;
		}
	}
</style>
