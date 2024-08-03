<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
  import { gsap } from 'gsap';
  
  let { label, subtext }: {label: Snippet<[string]>, subtext: Snippet<[string]>} = $props();
  onMount( () => {
    const label = document.querySelector('#label-hero');
    console.log(label?.textContent?.split(''));

  })

</script>

<header class="
    px-4 py-[72px]
    border-solid border-opacity-10 border-b border-grey-light
    md:px-6 
    lg:px-10 
    xl:px-[84px]
    ">
  <h2 id="label-hero"
    class="
    text-[56px] leading-[56px] 
    font-bold max-w-[1111px]
    md:text-[64px] md:leading-[64px] 
    lg:text-[80px] lg:leading-[80px] 
    xl:text-8xl xl:leading-[96px] 
    ">
      {@render label()}
    </h2>
  {#if subtext}
  <span class="
    text-xl text-gold font-medium 
    mt-5 
    inline-block
    ">
    {@render subtext()}
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
