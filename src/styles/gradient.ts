import { Colors } from '../types.ts';
import { oklch } from '../oklch.ts';

const n = 6.5;

export function gradient(colors: Colors) {
  const gradientColors = [
    `#fff ${50 - n * 5.5}%`,
    oklch(colors.yellow[50]) + ` ${50 - n * 5}%`,
    oklch(colors.yellow[100]) + ` ${50 - n * 4.5}%`,
    oklch(colors.yellow[300]) + ` ${50 - n * 4}%`,
    oklch(colors.yellow[400]) + ` ${50 - n * 3.5}%`,
    oklch(colors.orange[500]) + ` ${50 - n * 2.5}%`,
    oklch(colors.red[500]) + ` ${50 - n * 1.5}%`,
    oklch(colors.fuschia[500]) + ` ${50 - n * .5}%`,
    oklch(colors.purple[600]) + ` ${50 + n * .5}%`,
    oklch(colors.indigo[600]) + ` ${50 + n * 1.5}%`,
    oklch(colors.blue[500]) + ` ${50 + n * 2.5}%`,
    oklch(colors.green[400]) + ` ${50 + n * 3.5}%`,
    oklch(colors.green[300]) + ` ${50 + n * 4}%`,
    oklch(colors.green[100]) + ` ${50 + n * 4.5}%`,
    oklch(colors.green[50]) + ` ${50 + n * 5}%`,
    `#fff ${50 + n * 5.5}%`,
  ];
  return `conic-gradient(from 180deg in oklab,${gradientColors.join(',')})`;
}
