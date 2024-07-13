<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import NavItem from './NavItem.svelte';

    let isOpen = $state(false);
    let innerWidth = $state(0);

	// Close menu when clicking outside
	const handleClickOutside: MouseEventHandler<Window> = (event) => {
		if ((isOpen && !(event.target as HTMLElement).closest('nav'))) {
			isOpen = false;
		}
	};
    const toggleMobileMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
        isOpen = !isOpen;
    }

    $effect(() => {
        if(innerWidth > 600 && isOpen){
            isOpen = false;
        }
    })


</script>

<svelte:window on:click={handleClickOutside} bind:innerWidth/>

<nav
	class="
        md:flex 
        font-bold
        text-sm
        xl:w-80
        lg:w-72 lg:text-base
        md:w-64"
>
    <button onclick={toggleMobileMenu} class="
                                            flex items-center
                                            font-semibold
                                            text-[12px]
                                            leading-[15px]
                                            align-middle
                                            tracking-tight
                                            md:hidden
                                            after:bg-nav-squares-full
                                            after:w-[24px]
                                            after:h-[7px]
                                            after:inline-block
                                            after:ml-[8px]"
    >
        MENU
    </button>
    <div class={`md:flex justify-between md:flex-row ${isOpen ? 'flex' : 'hidden'} flex-col absolute md:relative md:top-full top-[73px] right-0 max-w-[82px] mr-3 bg-white md:mr-0 md:max-w-none md:w-full`}>
        <NavItem href="/" onclick={toggleMobileMenu}>Home</NavItem>
        <NavItem href="/blog" onclick={toggleMobileMenu}>Blog</NavItem>
        <NavItem href="/portfolio" onclick={toggleMobileMenu}>Portfolio</NavItem>
        <NavItem href="/contact-us" onclick={toggleMobileMenu}>Contact us</NavItem>
    </div>
</nav>

<style lang="postcss">
</style>
