type Inner = {
  toString: () => string;
  (val: number): Inner;
};

export function sum(initVal = 0): Inner {
  let acc: number = initVal;

  function inner(val: number): Inner {
    acc += val;
    return inner;
  }

  inner.toString = function (): string {
    return String(acc);
  };

  return inner;
}
