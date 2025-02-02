export type Color = { l: number; c: number; h: number };

export type Colors = { [hue: string]: Record<number, Color> };
