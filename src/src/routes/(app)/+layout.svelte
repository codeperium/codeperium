<script lang='ts'>
    import { initGTM } from "$lib";
    import {PUBLIC_GTM_ID} from '$env/static/public';
    import {Header, Main, Footer} from '$components';
	import type { Snippet } from "svelte";
    import '$styles/app.css';

    let { children }: {children: Snippet} = $props();

    initGTM(PUBLIC_GTM_ID);
</script>

<svelte:head>
	<meta name="google-adsense-account" content="ca-pub-3698376316992697" />
	<link href="https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&display=swap" rel="stylesheet" />
</svelte:head>
<Header />
<Main>
    {@render children()}
</Main>
<Footer />
<style lang="postcss">
    :global(html) {
    background-color: theme(colors.danger.100);
  }
</style>