<!-- <svelte:options customElement="cdpr-footer" /> -->

<script lang="ts">
	export const prerender = true;
	import Newsletter from './Newsletter.svelte';
	import Socials from './Socials.svelte';
	import Copyright from './Copyright.svelte';
	import type { logoType } from '../ambient';
	import type { GroupField, KeyTextField } from '@prismicio/client';
	import type {
		Simplify,
		NavigationDocumentDataPoliciesItem,
		NavigationDocumentDataSmItemsItem
	} from '../prismicio-types';
	let {
		logo,
		socials,
		copyright,
		policies
	}: {
		logo: logoType;
		socials: GroupField<Simplify<NavigationDocumentDataSmItemsItem>>;
		copyright: KeyTextField;
		policies: GroupField<Simplify<NavigationDocumentDataPoliciesItem>>;
	} = $props();
</script>

<footer
	class="
    flex flex-col
    bg-grey-dark
	w-full
    px-5 py-8
    md:px-6 md:py-10
    lg:px-10 lg:py-16
    xl:px-20
    2xl:max-w-screen-2xl"
>
	<!--<Newsletter /> -->
	<Socials {logo} links={socials} />
	<Copyright links={policies} text={copyright} />
</footer>
