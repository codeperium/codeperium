import { fetchLogoObject } from '$lib/server';
import { getLogoName } from '$lib/server';
import type {LayoutServerLoad} from './$types';

export const prerender = true;

const logo = await fetchLogoObject(
    getLogoName (
        'logo_h',
        'fullcolor'
    )
);
const mark = await fetchLogoObject(
    getLogoName (
        'logomark',
        'fullcolor'
    )
);
const type = await fetchLogoObject(
    getLogoName (
        'logotype',
        'white'
    )
);



export const load: LayoutServerLoad = async () => {
    return {
        logo: {
            logo: logo,
            logomark: mark,
            logotype: type,
        }
    }
}