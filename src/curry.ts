interface CurriedFunction1 {
  (t1: number): number;
}

interface CurriedFunction2 {
  (t1: number, t2: number): number;
  (t1: number): CurriedFunction1;
}

interface CurriedFunction3 {
  (t1: number, t2: number, t3: number): number;
  (t1: number, t2: number): CurriedFunction1;
  (t1: number): CurriedFunction2;
}

interface CurriedFunction4 {
  (t1: number, t2: number, t3: number, t4: number): number;
  (t1: number, t2: number, t3: number): CurriedFunction1;
  (t1: number, t2: number): CurriedFunction2;
  (t1: number): CurriedFunction3;
}

interface CurriedFunction5 {
  (t1: number, t2: number, t3: number, t4: number, t5: number): number;
  (t1: number, t2: number, t3: number, t4: number): CurriedFunction1;
  (t1: number, t2: number, t3: number): CurriedFunction2;
  (t1: number, t2: number): CurriedFunction3;
  (t1: number): CurriedFunction4;
}

export type CurriedFunction<T> = T extends [
  number,
  number,
  number,
  number,
  number
]
  ? CurriedFunction5
  : T extends [number, number, number, number]
  ? CurriedFunction4
  : T extends [number, number, number]
  ? CurriedFunction3
  : T extends [number, number]
  ? CurriedFunction2
  : T extends [number]
  ? CurriedFunction1
  : never;
export function curry<T extends number[]>(
  fn: (...args: T) => number
): CurriedFunction<T>;
export function curry(func: (...args: number[]) => any): any {
  let { length } = func;
  let argValues: number[] = [];
  return function rec(...args: number[]): () => any {
    length -= args.length;
    argValues.push(...args);
    if (length === 0) {
      const argPassed = argValues;
      argValues = [];
      length = func.length;
      return func(...argPassed);
    }
    return function inner(...args2: number[]) {
      return rec(...args2);
    };
  };
}
