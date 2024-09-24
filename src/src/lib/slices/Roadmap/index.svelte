<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { Date } from '$components';

	let { slice }: { slice: Content.RoadmapSlice } = $props();

	const fetchColorStatus = (status: String): String => {
		let res: String;
		switch (status) {
			case 'Finished':
				res = 'finished';
				break;
			case 'Work in Progress':
				res = 'in-progress';
				break;
			case 'Not Started':
				res = 'not-started';
				break;
			default:
				res = '';
				break;
		}
		return res;
	};
</script>

<!-- TOOD: generate date in external component -->
<section
	class="
		lg:flex
		xl:mx-[84px] xl:px-[84px]
">
	<div
		class="
			inline-flex
			left
			lg:mt-[72px]
			text-[16px]
			mt-[40px]
			px-6
	">
		<p>{slice.primary.label}</p>
		<Date
			startDate={slice.primary.start_date}
			statusColor={fetchColorStatus(slice.primary.status)}
		/>
	</div>
	<div
		class="
			md:border-solid md:border-opacity-10 md:border-l md:border-grey-light
			border-solid border-opacity-10 border-b border-grey-light
			right
			pt-8 px-4
			lg:pt-[48px] lg:px-[48px] lg:pb-[72px]
			lg:min-w-[650px]
			min-w-full
			inline-flex flex-col
			py-10
	">
		<div
			class="
				inline-flex
				items-center
				mb-[24px]
		">
			<span
				class="
					block
					w-[32px] h-[32px]
					lg:w-[48px] lg:h-[48px]
					lg:before:icon-xl
					before:icon before:icon-base before:icon-ar-d-r before:icon-red relative
					{fetchColorStatus(slice.primary.status)}
			"></span>
			<p
				class="
				inline-block
				text-[16px]
				text-white
				font-medium
				px-[24px] py-[6px]
				h-8 
				ml-6
				status
				{fetchColorStatus(slice.primary.status)}
			">
				{slice.primary.status}
			</p>
		</div>
		<p
			class="
				font-bold
				text-[36px]
				leading-[36px]
				lg:text-[48px]
				mb-[24px]
				inline-block
		">
			{slice.primary.phase_name}
		</p>
		<div >
			{#each slice.primary.phase_items as item}
			<div class="
					flex
					pb-3
					
			">
				<span class="
						block 
						w-[20px] h-[20px] 
						mr-3
						before:icon before:icon-sm before:icon-ar-r before:icon-red relative {fetchColorStatus(item.status as String)}
				"></span>
				<p class="max-w-[calc(100vw-64px)] text-black break-words leading-[20px] {fetchColorStatus(item.status as String)}">{item.label}</p>
			</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	.left,
	.status {
		font-family: 'Red Hat Mono';
		font-weight: 600;
	}
	.date {
		font-weight: 700;
	}
	.finished {
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
	.in-progress {
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
	.not-started {
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
