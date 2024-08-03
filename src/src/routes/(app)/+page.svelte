<script lang="ts">
  import { HeroHeader } from "$components";
</script>

<svelte:head> 
  <title> Codeperium </title>
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
