<script lang="ts">
  import { HeroHeader } from "$components";
</script>
<svelte:head> 
 <title> Codeperium </title>
  <meta name="description" content="Codeperium: Empowering coders to transform passion into innovation. Join our community focused on self-development, confidence, professionalism, and open-mindedness. Build your coding legacy and shape the digital future with us.">
</svelte:head>

<HeroHeader> 
  {#snippet subtext()}
    Empire of Coders
  {/snippet}
  {#snippet label()}
    The best space <br> to reach a new IT level!
  {/snippet}
</HeroHeader>

<style lang="postcss">
</style>
