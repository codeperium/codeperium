import { fetchLogoObject, fetchIconObject } from '$lib/server';
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
const navSquare1 = await fetchIconObject('nav_square_a1');
const navSquare2 = await fetchIconObject('nav_square_a2');
const navSquare3 = await fetchIconObject('nav_square_a3');
const navSquare4 = await fetchIconObject('nav_square_a4');
const navSquare5 = await fetchIconObject('nav_square_a5');
const navSquareFull = await fetchIconObject('nav_square_full');



export const load: LayoutServerLoad = async () => {
    return {
        logo: {
            logo: logo,
            logomark: mark,
            logotype: type,
        },
        icons: {
            navSquares: {
                1: navSquare1,
                2: navSquare2,
                3: navSquare3,
                4: navSquare4,
                5: navSquare5,
                full: navSquareFull,

            }
        }
    }
}