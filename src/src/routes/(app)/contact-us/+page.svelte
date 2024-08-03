<script lang="ts">
  import { HeroHeader } from "$components";
</script>

<svelte:head>
  <title> Codeperium - Contact Us </title>
</svelte:head>
<HeroHeader> 
  {#snippet subtext()}
    We would be more than happy to hear from you!
  {/snippet}
  {#snippet label()}
    Contact
  {/snippet}
</HeroHeader>

<style lang="postcss">
</style>
