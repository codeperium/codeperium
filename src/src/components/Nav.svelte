<svelte:options customElement="nav-main" />
<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import NavItem from './NavItem.svelte';
	import type { GroupField } from '@prismicio/client';
	import type { Simplify, NavigationDocumentDataMainNavItem } from '../prismicio-types';
	import { PrismicLink } from '@prismicio/svelte';

	let data: { data: GroupField<Simplify<NavigationDocumentDataMainNavItem>>} = $props();
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
    font-bold text-sm
    md:flex md:w-64
    lg:w-72 lg:text-base
    xl:w-80
">
  <h2 class="hidden"> Navigation </h2>
	<button
		onclick={toggleMobileMenu}
		class="
      flex items-center
      font-semibold text-[12px] leading-[15px] align-middle tracking-tight
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
		class={`
      justify-evenly flex-col 
      absolute top-[73px] right-0 
      w-full 
      text-center 
      bg-white
      md:flex md:flex-row 
      md:max-w-none
      md:relative md:top-full
      ${isOpen ? 'flex' : 'hidden'} 
    `}
	>
	{#each data.data as item}
		<NavItem onclick={toggleMobileMenu} href={item.nav_item_link.url}>
			<PrismicLink field={item.nav_item_link}>
				<h3>{item.nav_item_label}</h3>
			</PrismicLink>
		</NavItem>
	{/each}
	</div>
</nav>

<style lang="postcss">
</style>
