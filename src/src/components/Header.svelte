<!-- <svelte:options customElement="cdpr-header" /> -->
<script lang="ts">
	export const prerender = true;
	import Nav from './Nav.svelte';
	import type { GroupField } from '@prismicio/client';
	import type { Simplify, NavigationDocumentDataMainNavItem } from '../prismicio-types';
	import type { logoType } from '../ambient';

	let innerWidth = $state(0);

	let {
		mobile,
		desktop,
		nav
	}: {
		mobile: logoType;
		desktop: logoType;
		nav: GroupField<Simplify<NavigationDocumentDataMainNavItem>>;
	} = $props();
</script>

<svelte:window bind:innerWidth />
<header
	class=" 
    w-full
    flex justify-between items-center
    border-solid border-opacity-10 border-b border-grey-light
    py-5
    px-4
    md:px-6
    lg:px-10
    2xl:px-20 2xl:max-w-screen-2xl"
>
	<h1 class="hidden">Codeperium</h1>
	{#if innerWidth < 600}
		<a href="/">
			<img src={mobile as string} alt="codeperium" class="h-8" />
		</a>
	{:else}
		<a href="/">
			<img src={desktop as string} alt="codeperium" class="h-8" />
		</a>
	{/if}
	<Nav data={nav}></Nav>
</header>

<style lang="postcss">
</style>
