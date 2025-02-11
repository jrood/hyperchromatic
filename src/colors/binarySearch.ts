type BinarySearchProps<T> = {
  low: number;
  high: number;
  precision: number;
  fn: (n: number) => T;
};

export function findMax(
  { low, high, precision, fn }: BinarySearchProps<boolean>,
) {
  while (true) {
    const n = (high + low) / 2;
    fn(n) ? (low = n) : (high = n);
    if (high - low < precision) {
      return low;
    }
  }
}

export function findPeak(
  { low, high, precision, fn }: BinarySearchProps<number>,
) {
  while (true) {
    const n = (high + low) / 2;
    const a = fn(n - precision / 2);
    const b = fn(n + precision / 2);
    a < b ? (low = n) : (high = n);
    if (high - low < precision) {
      return n;
    }
  }
}
