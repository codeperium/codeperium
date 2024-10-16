<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	let {slice}: {slice: Content.TextBlockSlice} = $props();
</script>

<section>
	<h2 class="font-semibold lg:text-[40px] text-[32px]">{slice.primary.subheading}</h2>
	<PrismicRichText field={slice.primary.body}/>
</section>


<style lang="postcss"> 
	section {
		@apply text-[18px] pb-2;
	}
</style>
