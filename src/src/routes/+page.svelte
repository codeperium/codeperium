<script lang="ts">
	import {pushEvent} from '$lib';
	import type { MouseEventHandler } from 'svelte/elements';
	import * as Sentry from "@sentry/sveltekit"
	const clickEvn: MouseEventHandler<HTMLAnchorElement> = () => {
		Sentry.metrics.increment("button_click", 1, {
			tags: { browser: "chrome", region: "EU" },
			timestamp: new Date().getTime()
		});
		pushEvent({
			event: 'click',
			'gtm.elementUrl': 'linktree'
		})
	};

</script>


<section>
	<div>
		<img
			src="https://codeperium.s3.eu-west-1.amazonaws.com/assets/images/Logo/RGB/pozioma/SVG/codeperium_logo_white_rgb.svg"
			alt="logo"
		/>
		<h3>Work in progress...</h3>
		<a href="#" on:click={(e) => { clickEvn(e) }}> Check important links!</a>
	</div>
</section>

<style>
	section {
		width: 100vw;
		height: 100vh;
		padding: 0px 50px;
		background-color: #393c47;
		color: #f2f6f9;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	section div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 1500px;
	}
	section div h3 {
		display: inline-block;
		font-size: 32px;
		margin-bottom: 30px;
	}
	section div a {
		display: block;
		text-decoration: none;
		color: #f2f6f9;
		font-weight: bold;
		font-size: 24px;
		padding: 15px 60px;
		border-radius: 30px;
		background-color: #d0a45c;
	}

	section div a:hover {
		color: #393c47;
		background-color: #ff1f30;
	}

	section div img {
		display: block;
		width: 100%;
		margin-bottom: 70px;
	}
</style>
