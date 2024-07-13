<script lang="ts">
	import { initGTM } from '$lib';
	import { PUBLIC_GTM_ID } from '$env/static/public';
	import { Header, Main, Footer } from '$components';
	import { onMount, type Snippet } from 'svelte';
    import type {LayoutData} from './$types';
	import '$styles/app.css';

	let { data, children }: {data: LayoutData, children: Snippet } = $props();

    const logo = data.logo;
    onMount(() => {
        Object.entries(data.icons.navSquares).forEach(([name, url]) => {
            document.documentElement.style.setProperty(`--icon-${name}`, `url("${url}")`);
        })
    })
	initGTM(PUBLIC_GTM_ID);
</script>
<!-- Load Google metadata and fonts  -->
<svelte:head >
	<meta name="google-adsense-account" content="ca-pub-3698376316992697" />
	<link
		href="https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&display=swap"
		rel="stylesheet"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='' />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
		rel="stylesheet"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='' />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Red+Hat+Mono:ital,wght@0,300..700;1,300..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<Header {logo}/>
<Main>
	{@render children()}
</Main>
<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
        font-family: "Plus Jakarta Sans", sans;
        color: theme(colors.grey.dark);
	}
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
