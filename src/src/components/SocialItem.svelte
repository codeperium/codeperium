<svelte:options customElement="socials-item" />
<script lang="ts">
	import type { Snippet } from 'svelte';

	export const prerender = true
	let {
		href,
		icon,
		children
	}: { href: string; icon: 'icon-x' | 'icon-ig' | 'icon-yt' | 'icon-gh'; children: Snippet } =
		$props();
</script>

<div 
  class="
    w-20 h-12 
    bg-grey-light 
    md:w-12
">
	<a
		target="_blank"
		{href}
		class={`
      text-transparent 
      icon icon-md icon-white ${icon} 
      -translate-y-2/4 -translate-x-2/4 
      inset-1/2 relative 
      w-full h-full 
      block
  `}>
		{@render children()}
	</a>
</div>
