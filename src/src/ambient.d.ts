type Implements<T, U extends T> = U;

export type logoType = string | void;

//ICONS
type TArrowIconVariants = 'up' | 'down' | 'left' | 'right';
type TIconType = 'arrow' | 'arrow-double' | 'squares' | 'slash' | 'socials';
type TIconVariantsForType = {
	arrow: TArrowIconVariants;
	'arrow-double': TArrowIconVariants;
	slash: 'back' | 'for';
};
type TIconVariant<T extends TIconType> = TIconVariantsForType[T];

type TBaseIcon = {
	name: string;
	url: string | void;
	color: IColor;
};

export type Icon<T extends TIconType = IconType> = TBaseIcon & {
	type: T;
	variant: TIconVariant<T>;
};

// COLORS
type TColorVariants = 'default' | 'light' | 'dark';
type TColorNames = 'red' | 'gold' | 'white' | 'grey' | 'black';

interface IColor {
	name: TColorNames;
	variant: TColorVariants;
	value: string;
}
