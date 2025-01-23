import prettier from 'npm:prettier';

import { distDirInit } from '../distDirInit.ts';
distDirInit('colors');

import { hues } from './hues.ts';
import { maxC, maxL, peakSearchMax } from './utils.ts';

type Color = { l: number; c: number; h: number };
export const colors: Record<string, Record<string, Color>> = {};

const floor = (n: number, p: number) => Math.floor(n * p) / p;

let i = 0;

for (const k in hues) {
  colors[k] = {};
  i++;
  const h = hues[k];

  // const t = 1.2 - Math.round(maxL(h) / 10) / 10;

  // const l_adj = peakSearchMax({
  //   low: 0,
  //   high: 3,
  //   precisions: [1, 0.1, 0.01, 0.001],
  //   fn: (n: number) => {
  //     const l = (1 - t + Math.asin(Math.sin(t * Math.PI) * n) / Math.PI) * 75 +
  //       25;
  //     return maxC(l, h);
  //   },
  // });

  for (let i = 25; i < 1000; i += 25) {
    const _i = i / 1000;
    // const l =
    //   (1 - _i + Math.asin(Math.sin(_i * Math.PI) * l_adj) / Math.PI) * 75 + 25;
    const l = (1 - _i)**(2/5) * 100;
    const c = maxC(l, h);
    colors[k]['V' + i] = { l: floor(l, 100), c: floor(c, 1000), h };
  }
}

for (let i = 25; i < 1000; i += 25) {
  let minC = 1;
  for (const k in colors) {
    const v = colors[k]['V' + i];
    minC = Math.min(minC, v.c);
  }
  for (const k in colors) {
    const v = colors[k]['V' + i];
    colors[k]['E' + i] = { l: v.l, c: minC, h: v.h };
    colors[k]['M' + i] = { l: v.l, c: floor(minC / 2, 1000), h: v.h };
  }
}

const src = `export const colors = ${JSON.stringify(colors, null, 2)};`;

Deno.writeTextFileSync(
  'dist/colors/colors.ts',
  await prettier.format(src, { parser: 'babel', singleQuote: true }),
);
