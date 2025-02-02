type BinarySearchMaxProps = {
  low: number;
  high: number;
  precision: number;
  fn: (n: number) => boolean;
};

export function binarySearchMax(
  { low, high, precision, fn }: BinarySearchMaxProps,
) {
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

export function peakSearchMax(
  { low, high, precisions, fn }: PeakSearchMaxProps,
) {
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
