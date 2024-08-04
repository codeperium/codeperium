<svelte:options customElement="cdpr-footer" />
<script lang="ts">
	export const prerender = true;
	import Newsletter from './Newsletter.svelte';
	import Socials from './Socials.svelte';
	import Copyright from './Copyright.svelte';
	import type { logoType } from '../ambient';
	let { logo }: { logo: logoType } = $props();
	const logoWhite = <string>logo.logoWhite;
</script>

<footer
	class="
    flex flex-col
    bg-grey-dark
    absolute top-full w-full
    px-5 py-8
    md:px-6 md:py-10
    lg:px-10 lg:py-16
    xl:px-20
    2xl:max-w-screen-2xl"
>
	<!--<Newsletter /> -->
	<Socials logo={logoWhite} />
	<Copyright />
</footer>
