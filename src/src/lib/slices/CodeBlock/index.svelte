<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import {HighlightAuto} from "svelte-highlight";
	import github from "svelte-highlight/styles/github";

	let {slice}: {slice: Content.CodeBlockSlice} = $props();
</script>

<svelte:head>
  {@html github}
</svelte:head>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<!-- <HighlightAuto /> -->
	<PrismicRichText field={slice.primary.body}/>
</section>
