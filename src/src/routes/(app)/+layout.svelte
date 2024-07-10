<script lang='ts'>
    import { initGTM } from "$lib";
    import type { Snippet } from "svelte";
    import {PUBLIC_GTM_ID} from '$env/static/public';

    let { children }: {children: Snippet} = $props();

    initGTM(PUBLIC_GTM_ID);
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