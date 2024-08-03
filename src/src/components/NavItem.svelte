<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	let { href, onclick, children }: { href: string; onclick: any; children: Snippet } = $props();
	const active = $derived($page.url.pathname === href);
</script>

<a
	{href}
	class="
    text-grey-dark/60
    h-[23px]
    tracking-tight
    leading-[23px]
    align-bottom
    pt-1
    lg:h-[25px] lg:leading-[25px]
    hover:text-grey-dark
    relative
    md:nav-before
    before:animate-nav-squares
    focus:text-gold"
	class:active
	{onclick}
>
	{@render children()}
</a>

<style lang="postcss">
	.active {
		&::before {
			visibility: visible;
			opacity: 1;
		}
		color: theme(colors.grey.dark);
	}
</style>
