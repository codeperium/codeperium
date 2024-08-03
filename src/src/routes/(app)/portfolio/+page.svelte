<script lang="ts">
  import { HeroHeader } from "$components";
</script>
<svelte:head>
  <title> Codeperium - Portfolio </title>
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
