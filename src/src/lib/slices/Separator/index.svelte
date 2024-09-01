<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	let {slice}: {slice: Content.SeparatorSlice} = $props();
</script>

<section
	class="
		flex justify-between
		h-[210px]
		overflow-hidden
		border-solid border-opacity-10 border-b border-grey-light
		border-solid border-opacity-10 border-t border-grey-light
		relative
">
	<h3 
		class="
			flex justify-center items-center
			text-[40px] text-center font-bold
			w-full
			mx-[16px]
			md:text-[48px] md:text-left md:mx-[24px] md:w-auto md:text-left
			lg:text-[56px] lg:mx-[40px]
			xl:text-[64px] xl:mx-[84px] xl:leading-210px
			
	">
		{slice.primary.label}
	</h3>
	<PrismicImage 
		field={slice.primary.icon}
		class="
			h-[280px]
			w-auto
			object-cover
			absolute -top-[35px] left-[50%] -translate-x-2/4 
			md:right-[24px] md:-translate-x-1 md:left-auto
			lg:right-[40px] 
			xl:right-[84px] 
	"/>
</section>
