<script lang='ts'>
	import type { Snippet } from "svelte";

    // export const csr = true
    let {href, icon, children}: {href: string, icon: 'icon-x' | 'icon-ig' | 'icon-yt' | 'icon-gh', children: Snippet} = $props();
</script>

<div class="w-20 h-12  bg-grey-light md:w-12">
    <a target="_blank" {href} class={`text-transparent after:${icon} after:icon after:bg-white after:icon-md after:-translate-y-2/4 after:-translate-x-2/4 after:inset-1/2 relative w-full h-full block`}>
        {@render children()}
    </a>
</div>