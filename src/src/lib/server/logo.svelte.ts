type LogoType = 'logo_v' | 'logo_h' | 'logotype' | 'logomark';
type LogoColorType = 'fullcolor' | 'greyscale' | 'white' | 'black';

export const getLogoName = (type: LogoType, color: LogoColorType) => {
    return  `${type}_${color}`;
}