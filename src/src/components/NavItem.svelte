<svelte:options customElement="nav-item" />
<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	let { href, onclick, children }: { href: string, onclick: any; children: Snippet } = $props();
	const active = $derived($page.url.pathname === href);
</script>

<button
	{onclick}
	class:active
	class="
    text-grey-dark/60 tracking-tight leading-[23px] align-bottom
    h-[23px]
    pt-1
    relative
    md:nav-before
    lg:h-[25px] 
    lg:leading-[25px]
    before:animate-nav-squares
    hover:text-grey-dark
">
	{@render children()}
</button>

<style lang="postcss">
	.active {
		&::before {
			visibility: visible;
			opacity: 1;
		}
		color: theme(colors.grey.dark);
	}
	button {
		&:focus{
			color: theme(colors.gold);
		}
	}
</style>
