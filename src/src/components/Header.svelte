<script lang="ts">
	export const prerender = true;
	import Nav from './Nav.svelte';
	import type { logoType } from '../ambient';

	let innerWidth = $state(0);

	let { logo }: { logo: logoType } = $props();
	const mobile = <string>logo.logomark;
	const desktop = <string>logo.logo;
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
	<h1>
		{#if innerWidth < 600}
			<a href="/">
				<img src={mobile} alt="codeperium" class="h-8" />
			</a>
		{:else}
			<a href="/">
				<img src={desktop} alt="codeperium" class="h-8" />
			</a>
		{/if}
	</h1>
	<Nav></Nav>
</header>

<style lang="postcss">
</style>
