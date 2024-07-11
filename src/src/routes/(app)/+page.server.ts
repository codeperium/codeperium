import { fetchLogoObject } from '$lib/server';
import { getLogoName } from '$lib/server';
import type {PageServerLoad} from './$types'

export const prerender = true;

const logo = await fetchLogoObject(
    getLogoName (
        'logo_h',
        'white'
    )
);


export const load: PageServerLoad = async ({params}) => {
    return {
        logo: logo
    }
}