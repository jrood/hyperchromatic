import prettier from 'npm:prettier';

import { distDirInit } from '../distDirInit.ts';
distDirInit('colors');

import { hues } from './hues.ts';
import { maxC, peakSearchMax } from './utils.ts';

type Color = { l: number; c: number; h: number };
export const colors: Record<string, Record<number, Color>> = {};

const floor = (n: number, p: number) => Math.floor(n * p) / p;

for (const k in hues) {
  colors[k] = {};

  const h = hues[k];

  const t = .5;

  let x = peakSearchMax({
    low: -.5,
    high: 1,
    precisions: [0.1, 0.01, 0.001],
    fn: (n: number) => {
      const adj = Math.asin(Math.sin(t * Math.PI)) / Math.PI;
      const l = ((1 - t) ** .5 + adj * n) * 100 - n * 4;
      return maxC(l, h);
    },
  });

  if (k === 'green') {
    x = 0;
  }

  for (let i = 25; i < 1000; i += 25) {
    const j = i / 1000;
    const adj = Math.asin(Math.sin(j * Math.PI)) / Math.PI;
    const l = ((1 - j) ** .5 + adj * x) * 100 - x * 4;

    let c = maxC(l, h);
    if (k === 'green') {
      c = Math.min(c, (i / 1000) ** 1.5);
    }
    colors[k][i] = { l: floor(l, 100), c: floor(c, 1000), h };
  }
}

colors.gray = {};
for (let i = 25; i < 1000; i += 25) {
  const j = i / 1000;
  const l = ((1 - j) ** .5) * 100;
  colors.gray[i] = { l: floor(l, 100), c: 0, h: 0 };
}

const src = `export const colors = ${JSON.stringify(colors, null, 2)};`;

Deno.writeTextFileSync(
  'dist/colors/colors.ts',
  await prettier.format(src, { parser: 'babel', singleQuote: true }),
);
