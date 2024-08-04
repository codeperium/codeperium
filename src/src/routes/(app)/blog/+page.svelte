<script lang="ts">
  import { HeroHeader } from "$components";
</script>

<svelte:head>
  <title> Codeperium - Blog </title>
  <meta name="description" content="Dive into Codeperium's blog: Insightful articles on coding, innovation, and personal growth. Stay updated with the latest tech trends and learn from our community of passionate developers.">
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
