import { error } from 'console';
import { PUBLIC_CDN_URI } from '$env/static/public';

const EXT_TYPE: {
	png: '.png';
	apng: '.apng';
	jpg: jpg;
	webp: '.webp';
	gif: '.gif';
	svg: '.svg';
	avif: '.avif';
} = {
	png: '.png',
	apng: '.apng',
	jpg: '.jpg',
	webp: '.webp',
	gif: '.gif',
	svg: '.svg',
	avif: '.avif'
};

type jpg = '.jpg' | '.jpeg' | '.jfif' | '.pjpeg' | '.pjp';

const mimeTypes: ReadonlyMap<Values<typeof EXT_TYPE>, string> = new Map([
	['.png', 'image/png'],
	['.apng', 'image/apng'],
	['.jpg', 'image/jpg'],
	['.jpeg', 'image/jpg'],
	['.jfif', 'image/jpg'],
	['.pjpeg', 'image/jpg'],
	['.pjp', 'image/jpg'],
	['.webp', 'image/webp'],
	['.gif', 'image/gif'],
	['.svg', 'image/svg+xml'],
	['.avif', 'image/avif']
]);

const ASSET_TYPE = {
	images: 'images/',
	icons: 'icons/',
	logo: 'logo/'
} as const;

type Values<Object> = Object[keyof Object];

const fetchObject = async (key: string, ext: Values<typeof EXT_TYPE>) => {
	try {
		const object = await fetch(
			`${PUBLIC_CDN_URI.endsWith('/') ? PUBLIC_CDN_URI : `${PUBLIC_CDN_URI}/`}${key}${ext}`,
			{
				headers: {
					'content-type': <string>mimeTypes.get(ext)
				}
			}
		)
			.then((res) => res.text())
			.then(async (data) => {
				return data;
			});
		return `data:${<string>mimeTypes.get(ext)};utf-8,${encodeURIComponent(object)}`;
	} catch (e: any) {
		return error(500, { message: e?.message });
	}
};

export const fetchImageObject = (
	name: string,
	type: Values<typeof ASSET_TYPE> = ASSET_TYPE.images,
	extension: Values<typeof EXT_TYPE> = '.jpeg'
) => {
	if (name.endsWith(extension)) {
		name = name.replace(extension, '');
	} else if (name.charAt(0) === '/') {
		name = name.replace(name.charAt(0), '');
	}
	return fetchObject(`${type}${name}`, extension);
};

export const fetchIconObject = (name: string) => {
	return fetchImageObject(name, ASSET_TYPE.icons, EXT_TYPE.svg);
};

export const fetchLogoObject = (name: string) => {
	return fetchImageObject(name, ASSET_TYPE.logo, EXT_TYPE.svg);
};
