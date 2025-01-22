import { colors } from '../../../dist/colors/colors.ts';

const gradientColors = [
  `#fff ${50 - 3 - 5.5 - 5 - 4.5 - 4 - 3.5 - 3 - 2.5}%`,
  colors.yellow[50] + ` ${50 - 3 - 5.5 - 5 - 4.5 - 4 - 3.5 - 3}%`,
  colors.yellow[300] + ` ${50 - 3 - 5.5 - 5 - 4.5 - 4 - 3.5}%`,
  colors.orange[400] + ` ${50 - 3 - 5.5 - 5 - 4.5 - 4}%`,
  colors.red[500] + ` ${50 - 3 - 5.5 - 5 - 4.5}%`,
  colors.magenta[500] + ` ${50 - 3 - 5.5 - 5}%`,
  colors.pink[525] + ` ${50 - 3 - 5.5}%`,
  colors.purple[550] + ` ${50 - 3}%`,
  colors.indigo[550] + ` ${50 + 3}%`,
  colors.blue[525] + ` ${50 + 3 + 5.5}%`,
  colors.sky[500] + ` ${50 + 3 + 5.5 + 5}%`,
  colors.aqua[500] + ` ${50 + 3 + 5.5 + 5 + 4.5}%`,
  colors.green[400] + ` ${50 + 3 + 5.5 + 5 + 4.5 + 4}%`,
  colors.lime[300] + ` ${50 + 3 + 5.5 + 5 + 4.5 + 4 + 3.5}%`,
  colors.lime[50] + ` ${50 + 3 + 5.5 + 5 + 4.5 + 4 + 3.5 + 3}%`,
  `#fff ${50 + 3 + 5.5 + 5 + 4.5 + 4 + 3.5 + 3 + 2.5}%`,
];

export const gradient = () =>
  `conic-gradient(from 180deg in oklch,${gradientColors.join(',')})`;
