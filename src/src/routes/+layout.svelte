
    <script lang='ts'>
        import { initGTM, dataLayer } from "$lib";
	    import type { Snippet } from "svelte";
        let { children }: {children: Snippet} = $props();

        initGTM('GTM-5SJPKPC6');
    </script>
<svelte:head>
	<meta name="google-adsense-account" content="ca-pub-3698376316992697" />
	<link href="https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&display=swap" rel="stylesheet" />
    <!-- <script></script> -->
</svelte:head>

{@render children()}

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>