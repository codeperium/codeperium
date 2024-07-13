<script lang="ts">
	export const prerender = true;
	import Nav from './Nav.svelte';
    type logoType = {
        logo: string | void;
        logomark: string | void;
        logotype: string | void;
    }
    let innerWidth = $state(0);

	let { logo }: { logo: logoType} = $props();
	const mobile = <string> logo.logomark;
    const desktop = <string> logo.logo;

</script>
<svelte:window bind:innerWidth/>
<header
	class=" 
    w-full
    flex justify-between items-center
    border-solid border-opacity-10 border-b border-grey-light
    py-5
    px-4
    md:px-6
    lg:px-10
    2xl:px-20 2xl:max-w-screen-2xl">

    {#if innerWidth < 600}
        <a href='/'>
	        <img src={mobile} alt="codeperium" class="h-8" />
        </a>
    {:else}
        <a href="/">
	        <img src={desktop} alt="codeperium" class="h-8" />
        </a>
    {/if}
	<Nav></Nav>
</header>

<style lang="postcss">
</style>
