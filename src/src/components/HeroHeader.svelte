<script lang="ts">
	import { page } from "$app/stores";

  export const prerender = true;

  let { title, subtitle }: {title: string, subtitle: string} = $props();
  let animatedTitle: HTMLElement = $state() as HTMLElement;
  let animatedSpan: HTMLElement = $state() as HTMLElement;

  let path = $state($page.url.pathname);
  $effect(() => {
    path = $page.url.pathname;
    restartAnimation(animatedTitle);
    restartAnimation(animatedSpan);
  })

  const restartAnimation = (element: HTMLElement) => {
    const animation = element.style.animation;
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = animation;
  }

</script>

<header 
  class="
    px-4 py-[72px]
    border-solid border-opacity-10 border-b border-grey-light
    md:px-6 
    lg:px-10 
    xl:px-[84px]
">
  <h2 id="label-hero"
    bind:this={animatedTitle}
    class="
      text-[56px] leading-[56px] font-bold 
      max-w-[1111px]
      md:text-[64px] md:leading-[64px] 
      lg:text-[80px] lg:leading-[80px] 
      xl:text-8xl xl:leading-[96px] 
  ">
      <p>{title}</p>
    </h2>
  {#if subtitle}
  <span 
    bind:this={animatedSpan}
    class="
      text-xl text-gold font-medium 
      mt-5 
      inline-block
  ">
    {subtitle}
  </span>
  {/if}
</header>

<style lang="postcss">
  span {
    font-family: "Red Hat Mono";
    display: inline-block;
    width: 100%;
		overflow: hidden;
		white-space: nowrap;
    animation: text-slide 2s ease-in;
  }
  #label-hero {
    opacity: 1;
    transform: translateY(0);
    animation: label .7s ease-in;
  }
  header {
    background-image: url("https://cdn.codeperium.io/images/grid.webp");
  }
  @keyframes text-slide {
    from {
      width: 0;
    }
  }
  @keyframes label {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
  }
</style>
