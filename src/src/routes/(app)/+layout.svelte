<script lang="ts">
	import { initGTM } from '$lib';
	import { PUBLIC_GTM_ID } from '$env/static/public';
	import { Header, Main, Footer } from '$components';
	import { onMount, type Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import '$styles/app.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	const logo = data.logo;
	onMount(() => {
		let cssVariables = ':root {';
		Object.entries(data.icons).forEach(([i, icon]) => {
			cssVariables += `\n  ${icon.name}: url('${icon.url}');`;
		});
		cssVariables += '\n}';
		const style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = cssVariables;
		document.head.appendChild(style);
	});
	initGTM(PUBLIC_GTM_ID);
</script>

<!-- Load Google metadata and fonts  -->
<svelte:head>
	<title>Codeperium</title>
	<meta name="google-adsense-account" content="ca-pub-3698376316992697" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Red+Hat+Mono:ital,wght@0,300..700;1,300..700&display=swap"
		rel="stylesheet"
	/>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#dae1e5">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="Codeperium: Empowering coders to transform passion into innovation. Join our community focused on self-development, confidence, professionalism, and open-mindedness. Build your coding legacy and shape the digital future with us.">
</svelte:head>
<Header {logo} />
<Main>
	{@render children()}
</Main>
<Footer {logo} />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
		font-family: 'Plus Jakarta Sans', sans;
		color: theme(colors.grey.dark);
	}
	:global(body) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
