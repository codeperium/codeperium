<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import NavItem from './NavItem.svelte';

	let isOpen = $state(false);
	let innerWidth = $state(0);

	// Close menu when clicking outside
	const handleClickOutside: MouseEventHandler<Window> = (event) => {
		if (isOpen && !(event.target as HTMLElement).closest('nav')) {
			isOpen = false;
		}
	};
	const toggleMobileMenu: MouseEventHandler<HTMLButtonElement> = () => {
		isOpen = !isOpen;
	};

	$effect(() => {
		if (innerWidth > 600 && isOpen) {
			isOpen = false;
		}
	});
</script>

<svelte:window on:click={handleClickOutside} bind:innerWidth />

<nav
	class="
        md:flex
        font-bold
        text-sm
        xl:w-80
        lg:w-72 lg:text-base
        md:w-64"
>
  <h1 class="hidden"> Navigation </h1>
	<button
		onclick={toggleMobileMenu}
		class="
                                            flex items-center
                                            font-semibold
                                            text-[12px]
                                            leading-[15px]
                                            align-middle
                                            tracking-tight
                                            md:hidden
                                            after:bg-sq-full
                                            after:w-[24px]
                                            after:h-[7px]
                                            after:inline-block
                                            after:ml-[8px]"
	>
		MENU
	</button>
	<div
		class={`md:flex justify-between md:flex-row ${isOpen ? 'flex' : 'hidden'} flex-col absolute md:relative md:top-full top-[73px] right-0 w-full text-center bg-white md:max-w-none `}
	>
		<NavItem href="/" onclick={toggleMobileMenu}><h2>Home</h2></NavItem>
		<NavItem href="/blog" onclick={toggleMobileMenu}><h2>Blog</h2></NavItem>
		<NavItem href="/portfolio" onclick={toggleMobileMenu}><h2>Portfolio</h2></NavItem>
		<NavItem href="/contact-us" onclick={toggleMobileMenu}><h2>Contact us</h2></NavItem>
	</div>
</nav>

<style lang="postcss">
</style>
