import { fetchLogoObject, fetchIconObject } from '$lib/server';
import { getLogoName } from '$lib/server';
import type { LayoutServerLoad } from './$types';
import type { Icon, TIconType } from '../../ambient';
import Color from '../../colors';

export const prerender = true;
const icons: Icon[] = [];
const iconPrefix = '--icon';
const createIcon = async <T extends TIconType>(icon: Omit<Icon<T>, 'url' & 'name'>) => {
	const { color, type, variant } = icon;
	const key = `${type}-${variant}${color.variant == 'default' ? `${color.name == 'black' ? '' : `-${color.name}`}` : `-${color.name}-${color.variant}`}`;
	return {
		...icon,
		name: `${iconPrefix}-${key}`,
		url: await fetchIconObject(key)
	};
};

const logo = await fetchLogoObject(getLogoName('logo_h', 'fullcolor'));
const mark = await fetchLogoObject(getLogoName('logomark', 'fullcolor'));
const colorWhite = await fetchLogoObject(getLogoName('logo_h', 'color_white'));
const iconTypes = ['squares', 'arrow-double', 'arrow', 'slash', 'socials'] as const;
const iconVariants = {
	squares: ['a1', 'a2', 'a3', 'a4', 'a5', 'full'],
	'arrow-double': ['up', 'down', 'left', 'right'],
	arrow: ['up', 'down', 'left', 'right'],
	slash: ['back', 'for'],
	socials: ['x', 'yt', 'github', 'linkedin', 'instagram']
} as const;
const colors = [Color.BlackColor];

const generateIcons = async () => {
	for (const color of colors) {
		for (const type of iconTypes) {
			for (const variant of iconVariants[type]) {
				icons.push(
					await createIcon({
						color,
						type,
						variant
					} as Icon<typeof type>)
				);
			}
		}
	}

	return icons;
};

export const load: LayoutServerLoad = async () => {
	return {
		logo: {
			logo: logo,
			logomark: mark,
			logoWhite: colorWhite
		},
		icons: await Promise.resolve(generateIcons())
	};
};
