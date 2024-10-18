<script lang="ts">
	import type { DateField } from '@prismicio/client';
	let { startDate, statusColor, fullDate = false, className  }: { startDate: DateField; statusColor: String, fullDate: boolean, className: String } = $props();

	const date = new Date(startDate as string);
	date.setDate(date.getDate() + 1);
	let formatted =  $state(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(
			date
		));	
	if (fullDate) {
		formatted = new Intl.DateTimeFormat('en-UK', { day: "2-digit", month: 'long', year: 'numeric'  }).format(
			date
		);	
	} 
	
</script>

<p
	class={"date-component-container xl:ml-[24px] ml-[12px] mr-[4px] flex after:w-[25px] lg:after:block lg:after:h-[1px] lg:after:bg-grey-light/10 lg:after:mt-[19px] relative lg:after:absolute lg:after:-right-[30px] lg:after:-top-[9px] " + className}
>
	<span
		class="block w-[20px] h-[20px] before:icon before:icon-ar-l before:icon-red before:icon-sm relative {statusColor}"
	></span>
	<span class="leading-[20px] text-red date {statusColor}">{formatted}</span>
	<span
		class="block w-[20px] h-[20px] -mr-[5px] before:icon before:icon-sl-f before:icon-red before:icon-sm relative {statusColor}"
	></span>
	<span
		class="block w-[20px] h-[20px] before:icon before:icon-ar-r before:icon-red before:icon-sm relative {statusColor}"
	></span>
</p>

<style>
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
	.not-started, .default {
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
