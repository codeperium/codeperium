<script lang="ts">
  import { HeroHeader } from "$components";
</script>
<svelte:head>
  <title> Codeperium - Portfolio </title>
  <meta name="description" content="Explore Codeperium's portfolio: Showcasing our innovative projects, open-source contributions, and coding triumphs. Witness the power of confidence and creativity in action."> 
</svelte:head>
<HeroHeader> 
  {#snippet subtext()}
    Empire of Coders
  {/snippet}
  {#snippet label()}
    Portfolio
  {/snippet}
</HeroHeader>

<style lang="postcss">
</style>
