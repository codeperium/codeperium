<svelte:options customElement="socials-main" />
<script lang="ts">
	export const prerender = true;
	import SocialItem from './SocialItem.svelte';
	let { logo }: { logo: string } = $props();
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
		<img src={logo} alt="codeperium" />
	</a>
	<div class="socials h-auto flex flex-wrap justify-center gap-2">
		<SocialItem href="https://x.com/codeperium" icon="icon-x">X</SocialItem>
		<SocialItem href="https://www.instagram.com/Codeperium/" icon="icon-ig">Youtube</SocialItem>
		<SocialItem href="https://www.youtube.com/@codeperium/" icon="icon-yt">Instagram</SocialItem>
		<SocialItem href="https://www.github.com/Codeperium/" icon="icon-gh">Github</SocialItem>
	</div>
</div>
