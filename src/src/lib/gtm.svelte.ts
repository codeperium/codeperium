import { onMount } from 'svelte';

type Event = {
	event: string;
	[key: string]: string;
};

if (typeof window !== 'undefined') {
	window.dataLayer = window.dataLayer || [];
}

export const dataLayer: any[] = $state(typeof window !== 'undefined' ? window.dataLayer : []);

export const pushEvent = (eventObj: Event) => {
	dataLayer.push(eventObj);
};

export const initGTM = (gtag: string) => {
	onMount(() => {
		const parentScript = document.getElementsByTagName('script')[0];
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://www.googletagmanager.com/gtm.js?id=' + gtag;
		script.parentNode?.insertBefore(script, parentScript);

		pushEvent({ 'gtm.start': new Date().getTime().toString(), event: 'gtm.js' });
	});
};
