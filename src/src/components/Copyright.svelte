<svelte:options customElement="cdpr-copyright" />

<script lang="ts">
	import type { GroupField, KeyTextField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import type { Simplify, NavigationDocumentDataPoliciesItem } from '../prismicio-types';

	export const prerender = true;
	let {
		links,
		  text
	}: { 
        links: GroupField<Simplify<NavigationDocumentDataPoliciesItem>>, 
        text: KeyTextField 
    } = $props();
</script>

<div
	class="
    flex flex-col justify-between
    lg:flex-row
    text-white text-sm
"
>
	<p
		class="
      mb-4
      lg:mb-0
  "
	>
		{text}
	</p>
	<div
		class="
      flex justify-between
      text-[13px]
      leading-[16px]
      w-[330px]
      lg:mb-0
  "
	>
		{#each links as item}
			<PrismicLink field={item.policy_link}>{item.policy_label}</PrismicLink>
		{/each}
	</div>
</div>
