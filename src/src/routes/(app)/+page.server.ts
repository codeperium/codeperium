import { fetchLogoObject } from '$lib/server';
import { getLogoName } from '$lib/server';

const logo = await fetchLogoObject(
    getLogoName (
        'logo_h',
        'white'
    )
);


export function load() {
    return {
        logo: logo
    }
}