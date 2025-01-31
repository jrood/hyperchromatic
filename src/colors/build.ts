import prettier from 'npm:prettier';

import { distDirInit } from '../distDirInit.ts';
distDirInit('colors');

import { hues } from './hues.ts';
import { maxC, maxL, peakSearchMax } from './utils.ts';

type Color = { l: number; c: number; h: number };
export const colors: Record<string, Record<number, Color>> = {};

const floor = (n: number, p: number) => Math.floor(n * p) / p;

let i = 0;

for (const k in hues) {
  colors[k] = {};
  i++;
  const h = hues[k];

  // const t = 1.2 - Math.round(maxL(h) / 10) / 10;
  const t = .5;

  const z = 1.25;

  const rnd = (x: number) => Math.round(x * 1000000) / 1000000;

  const safePow = (a: number, b: number) => {
    return a > 0 ? a ** b : -((-a) ** b);
  };

  let x = peakSearchMax({
    low: -.5,
    high: 1,
    precisions: [0.1, 0.01, 0.001],
    fn: (n: number) => {
      const adj = rnd(Math.asin(Math.sin(t * Math.PI)) * n / Math.PI);
      const l = ((1 - t) ** .5 + safePow(adj, z)) * 100;
      return maxC(l, h);
    },
  });

  if (k === 'green') {
    x = 0;
    // x = -.145; // same as red
  }

  // if (k === 'green') {
  //   x = .25;
  // }

  for (let i = 25; i < 1000; i += 25) {
    const j = i / 1000;
    const adj = rnd(Math.asin(Math.sin(j * Math.PI)) * x / Math.PI);
    const l = ((1 - j) ** .5 + safePow(adj, z)) * 100;
    // const l = (1 - _i)**(2/5) * 100;
    let c = maxC(l, h);
    if (k === 'green') {
      c = Math.min(c, (i / 1000) ** 1.5);
    }
    colors[k][i] = { l: floor(l, 100), c: floor(c, 1000), h };
  }
}

// for (let i = 25; i < 1000; i += 25) {
//   let minC = 1;
//   for (const k in colors) {
//     const v = colors[k]['V' + i];
//     minC = Math.min(minC, v.c);
//   }
//   for (const k in colors) {
//     const v = colors[k]['V' + i];
//     colors[k]['E' + i] = { l: v.l, c: minC, h: v.h };
//     colors[k]['M' + i] = { l: v.l, c: floor(minC / 2, 1000), h: v.h };
//   }
// }

const src = `export const colors = ${JSON.stringify(colors, null, 2)};`;

Deno.writeTextFileSync(
  'dist/colors/colors.ts',
  await prettier.format(src, { parser: 'babel', singleQuote: true }),
);
