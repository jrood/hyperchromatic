import { Colors } from '../types.ts';
import { hues, targets } from './hues.ts';
import { binarySearchMax, peakSearchMax } from './search.ts';
import { inGamut } from 'npm:culori';
const { floor, asin, sin, min, PI } = Math;

const inP3 = inGamut('p3');

const getMaxC = (l: number, h: number) =>
  binarySearchMax({
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

const _floor = (n: number, p: number) => floor(n * p) / p;

export function createColors() {
  const colors: Colors = {};

  for (const k in hues) {
    const h = hues[k];
    colors[k] = {};

    const adj = k === 'green' ? 0 : peakSearchMax({
      low: -1,
      high: 1,
      precisions: [0.01, .0001],
      fn: (adj: number) => getMaxC(getL(targets[k] / 1000, adj), h),
    });

    for (let i = 25; i < 1000; i += 25) {
      const x = i / 1000;
      const l = getL(x, adj);
      let c = getMaxC(l, h);
      if (k === 'green') {
        c = min(c, x ** 1.5);
      }
      colors[k][i] = { l: _floor(l, 100), c: _floor(c, 1000), h };
    }
  }

  colors.gray = {};
  for (let i = 25; i < 1000; i += 25) {
    const x = i / 1000;
    const l = getL(x, 0);
    colors.gray[i] = { l: _floor(l, 100), c: 0, h: 0 };
  }
  return colors;
}
