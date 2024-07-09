
    <script>
        import { initGTM, dataLayer } from "$lib";
        initGTM('GTM-5SJPKPC6');
        $inspect(dataLayer);
    </script>
<svelte:head>
	<meta name="google-adsense-account" content="ca-pub-3698376316992697" />
	<link href="https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&display=swap" rel="stylesheet" />
    <script></script>
</svelte:head>

<slot />

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>