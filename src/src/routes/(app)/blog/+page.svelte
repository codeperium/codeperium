<script lang="ts">
  import { HeroHeader } from "$components";
</script>

<svelte:head>
  <title> Codeperium - Blog </title>
</svelte:head>
<HeroHeader> 
  {#snippet subtext()}
    A comfortable place for programmers on the web!
  {/snippet}
  {#snippet label()}
    Codeperium Blog
  {/snippet}
</HeroHeader>

<style lang="postcss">
</style>
