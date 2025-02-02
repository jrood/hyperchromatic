import { Color } from './types.ts';

export const oklch = ({ l, c, h }: Color) => `oklch(${l}% ${c} ${h})`;
