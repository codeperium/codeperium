<script lang="ts">
  import { HeroHeader } from "$components";
</script>

<svelte:head>
  <title> Codeperium - Contact Us </title>
  <meta name="description" content="Connect with Codeperium: Reach out to our team of passionate coders. Whether you're seeking collaboration, support, or just want to join our community, we're here to empower your coding journey.">
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
