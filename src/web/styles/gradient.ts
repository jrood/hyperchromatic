import { colors } from '../../../dist/colors/colors.ts';
import { oklch } from '../oklch.ts';

const gradientColors = [
  `#fff ${50 - 3 - 5.5 - 5 - 4.5 - 4 - 3.5 - 3 - 2.5}%`,
  oklch(colors.yellow.V50) + ` ${50 - 3 - 5.5 - 5 - 4.5 - 4 - 3.5 - 3}%`,
  oklch(colors.yellow.V300) + ` ${50 - 3 - 5.5 - 5 - 4.5 - 4 - 3.5}%`,
  oklch(colors.orange.V400) + ` ${50 - 3 - 5.5 - 5 - 4.5 - 4}%`,
  oklch(colors.red.V500) + ` ${50 - 3 - 5.5 - 5 - 4.5}%`,
  oklch(colors.magenta.V500) + ` ${50 - 3 - 5.5 - 5}%`,
  oklch(colors.pink.V525) + ` ${50 - 3 - 5.5}%`,
  oklch(colors.purple.V550) + ` ${50 - 3}%`,
  oklch(colors.indigo.V550) + ` ${50 + 3}%`,
  oklch(colors.blue.V525) + ` ${50 + 3 + 5.5}%`,
  oklch(colors.sky.V500) + ` ${50 + 3 + 5.5 + 5}%`,
  oklch(colors.aqua.V500) + ` ${50 + 3 + 5.5 + 5 + 4.5}%`,
  oklch(colors.green.V400) + ` ${50 + 3 + 5.5 + 5 + 4.5 + 4}%`,
  oklch(colors.lime.V300) + ` ${50 + 3 + 5.5 + 5 + 4.5 + 4 + 3.5}%`,
  oklch(colors.lime.V50) + ` ${50 + 3 + 5.5 + 5 + 4.5 + 4 + 3.5 + 3}%`,
  `#fff ${50 + 3 + 5.5 + 5 + 4.5 + 4 + 3.5 + 3 + 2.5}%`,
];

export const gradient = () =>
  `conic-gradient(from 180deg in oklch,${gradientColors.join(',')})`;
