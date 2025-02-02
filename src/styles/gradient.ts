import { Colors } from '../types.ts';
import { oklch } from '../oklch.ts';

const n = 8;

export function gradient(colors: Colors) {
  const gradientColors = [
    `#fff ${50 - n * 4.5}%`,
    oklch(colors.yellow[100]) + ` ${50 - n * 3.5}%`,
    oklch(colors.yellow[500]) + ` ${50 - n * 2.5}%`,
    oklch(colors.orange[500]) + ` ${50 - n * 1.5}%`,
    oklch(colors.red[500]) + ` ${50 - n * .5}%`,
    oklch(colors.purple[500]) + ` ${50 + n * .5}%`,
    oklch(colors.blue[500]) + ` ${50 + n * 1.5}%`,
    oklch(colors.green[500]) + ` ${50 + n * 2.5}%`,
    oklch(colors.green[100]) + ` ${50 + n * 3.5}%`,
    `#fff ${50 + n * 4.5}%`,
  ];
  return `conic-gradient(from 180deg in oklab,${gradientColors.join(',')})`;
}
