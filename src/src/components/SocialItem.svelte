<svelte:options customElement="socials-item" />
<script lang="ts">
	import type { Snippet } from 'svelte';

	export const prerender = true
	let {
		children
	}: { children: Snippet } =
		$props();
</script>
<div 
  class="
	flex justify-center items-center
    w-20 h-12 
    bg-grey-light 
    md:w-12
">
	{@render children()}
</div>
