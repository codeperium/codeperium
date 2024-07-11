import { GetObjectCommand, S3Client, type S3ClientConfigType } from "@aws-sdk/client-s3";
import {AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} from '$env/static/private';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { error } from "console";

const ASSET_TYPE = {
    images: 'assets/images/',
    icons: 'assets/icons/',
    logo: 'assets/logo/'
} as const;

const EXT_TYPE = {
    png: '.png',
    apng: '.apng',
    jpg: <jpg>'.jpg',
    webp: '.webp',
    gif: '.gif',
    svg: '.svg',
    avif: '.avif'
} as const;

type Values<Object> = Object[keyof Object];
type jpg = '.jpg' | '.jpeg' | '.jfif' | '.pjpeg' | '.pjp';

export const client = new S3Client(
    <S3ClientConfigType> {
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
        }
    }
);

const fetchObject = async (key: string) => {
    try {
        const command = new GetObjectCommand({
            Bucket: 'codeperium',
            Key: key
        });
        const object = await client.send(command);
        const url =  await getSignedUrl(client, command);
        return url;
    } catch (e: any) {
        return error(500, {message: e?.message})
    }
}

export const fetchImageObject = (name: string, type: Values<typeof ASSET_TYPE> = ASSET_TYPE.images, extension: Values<typeof EXT_TYPE> = '.jpeg') => {
    if(name.endsWith(extension)) {
        name = name.replace(extension, '');
    } else if (name.charAt(0) === '/') {
        name = name.replace(name.charAt(0), '');
    }
    return fetchObject(`${type}${name}${extension}`);
}

export const fetchIconObject = (name: string) => {
    return fetchImageObject(name, ASSET_TYPE.icons, EXT_TYPE.svg);
}

export const fetchLogoObject = (name: string) => {
    return fetchImageObject(name, ASSET_TYPE.logo, EXT_TYPE.svg);
}
