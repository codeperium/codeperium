import {fetchLogoObject, getLogoName} from '$lib/server'
import type { PageServerLoad } from '../routes/(app)/$types';
// import { Load } from '@sveltejs/kit';
const logo = fetchLogoObject(
    getLogoName('logo_h', 'fullcolor')
);
console.log(logo);

export const load: PageServerLoad = async ({params}) => {
    return {
        logo: logo
    }
}