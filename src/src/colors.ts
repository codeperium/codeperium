import type { IColor } from "./ambient";

const createColor = <T extends IColor>(color: T): IColor => color;

export default {
    RedColor: createColor({
        name: 'red',
        variant: 'default',
        value: '#FF1F30',
    }),
    GoldColor: createColor({
        name: 'gold',
        variant: 'default',
        value: '#D0A45C'
    }),
    WhiteColor: createColor({
        name: 'white',
        variant: 'default',
        value: '#D0A45C'
    }),
    LightGreyColor: createColor({
        name: 'grey',
        variant: 'light',
        value: '#393C47'
    }),
    DarkGreyColor: createColor({
        name: 'grey',
        variant: 'dark',
        value: '#262932'
    }),
    BlackColor: createColor({
        name: 'black',
        variant: 'default',
        value: '#000000'
    })
} as const;