import { inGamut } from 'npm:culori';

type BinarySearchMaxProps = {
  low: number;
  high: number;
  precision: number;
  fn: (n: number) => boolean;
};

function binarySearchMax({ low, high, precision, fn }: BinarySearchMaxProps) {
  while (true) {
    const n = (high + low) / 2;
    fn(n) ? (low = n) : (high = n);
    if (high - low < precision) {
      return low;
    }
  }
}

type PeakSearchMaxProps = {
  low: number;
  high: number;
  precisions: number[];
  fn: (n: number) => number;
};

export function peakSearchMax({ low, high, precisions, fn }: PeakSearchMaxProps) {
  for (const p of precisions) {
    let prevR = 0;
    for (let n = low; n < high; n += p) {
      const r = fn(n);
      if (r > prevR) {
        prevR = r;
      } else {
        low = n - p * 2;
        high = n;
        break;
      }
    }
  }
  return low;
}

const inP3 = inGamut('p3');

export const maxC = (l: number, h: number) =>
  binarySearchMax({
    low: 0,
    high: 0.4,
    precision: 0.00001,
    fn: c => inP3(`oklch(${l}% ${c} ${h})`),
  });

export const maxL = (h: number) =>
  peakSearchMax({
    low: 40,
    high: 100,
    precisions: [1, 0.1, 0.01, 0.001],
    fn: l => maxC(l, h),
  });
