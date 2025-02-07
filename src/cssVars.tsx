import { oklch } from './oklch.ts';
import { Colors } from './types.ts';

export function cssVars(colors: Colors) {
  let s = ':root{';
  for (const h in colors) {
    for (let i = 25; i < 1000; i += 25) {
      const c = colors[h][i];
      s += `\n--${h}-${i}: ${oklch(c)};`;
    }
  }
  s += '\n}';
  return s;
}