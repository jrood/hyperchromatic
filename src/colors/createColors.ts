import { Colors } from '../types.ts';
import { hues } from './hues.ts';
import { findMax, findPeak } from './binarySearch.ts';
import { inGamut } from 'npm:culori';
const { floor, asin, sin, min, PI } = Math;

const inP3 = inGamut('p3');

const maxC = (l: number, h: number) =>
  findMax({
    low: 0,
    high: 0.4,
    precision: 0.00001,
    fn: (c) => inP3(`oklch(${l}% ${c} ${h})`),
  });

function getL(x: number, adj: number) {
  const a = 1 - asin(x) * 2 / PI;
  const b = adj * asin(sin(x * PI)) / PI;
  return (a + b) * 100;
}

const trunc = (n: number, p: number) => floor(n * p) / p;

export function createColors() {
  const colors: Colors = {};

  for (const k in hues) {
    const h = hues[k];
    colors[k] = {};

    const targetL = findPeak({
      low: 0,
      high: 100,
      precision: 1,
      fn: (n: number) => maxC(n, h),
    });
    let target = 1000 - Math.round(targetL / 10 - 1.75) * 100;
    if (k === 'green') {
      target = target * 13 / 16;
    }

    const adj = findPeak({
      low: -1,
      high: 1,
      precision: .0001,
      fn: (adj: number) => maxC(getL(target / 1000, adj), h),
    });

    for (let i = 25; i < 1000; i += 25) {
      const x = i / 1000;
      const l = getL(x, adj);
      let c = maxC(l, h);
      if (k === 'green') {
        c = min(c, x ** .75 / 2);
      }
      colors[k][i] = { l: trunc(l, 100), c: trunc(c, 1000), h };
    }
  }

  colors.gray = {};
  for (let i = 25; i < 1000; i += 25) {
    const x = i / 1000;
    const l = getL(x, 1/16);
    colors.gray[i] = { l: trunc(l, 100), c: 0, h: 0 };
  }
  return colors;
}
