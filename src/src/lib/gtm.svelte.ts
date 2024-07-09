import { onMount } from "svelte";

type Event = {
    event: string,
    [key: string]: string
}

export const dataLayer: any[] = $state([]); 

if (typeof window !== 'undefined' && !window.google_tag_manager) {
    dataLayer.push(window.dataLayer || []);

}

export const pushEvent = (eventObj: Event) => {
    dataLayer.push(eventObj);
}

export const initGTM = (gtag: string)  => {
    onMount(() => {
        window.dataLayer = window.dataLayer || [];
        const parentScript = document.getElementsByTagName('script')[0];
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtm.js?id=' + gtag;
        script.parentNode?.insertBefore(script, parentScript);

        window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    })
}