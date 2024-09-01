<svelte:options customElement="socials-main" />
<script lang="ts">
	export const prerender = true;
	import SocialItem from './SocialItem.svelte';
	import type { GroupField } from '@prismicio/client';
	import type { Simplify, NavigationDocumentDataSmItemsItem } from '../prismicio-types';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import type { logoType } from '../ambient';
	let { logo, links }: { logo: logoType, links: GroupField<Simplify<NavigationDocumentDataSmItemsItem>> } = $props();
</script>

<div
	class="
    flex flex-col justify-between items-center
    pb-8 mb-8 
    border-solid border-opacity-10 border-b border-white 
    md:flex-row 
">
	<a href="/" 
    class="
      pb-8 
      md:pb-0 
      md:max-w-[260px] 
      lg:max-w-[380px]
  ">
		<img src={logo as string} alt="codeperium" />
	</a>
	<div class="socials h-auto flex flex-wrap justify-center gap-2">
		{#each links as item}
			<PrismicLink field={item.sm_link}> 
				<SocialItem>	
					<PrismicImage field={item.sm_icon}></PrismicImage>
				</SocialItem>
			</PrismicLink>
		{/each}
	</div>
</div>
