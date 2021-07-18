export function curry<T>(
  func: (...args: T[]) => any
): (...args: T[]) => (...args2: T[]) => any {
  let { length } = func;
  let argValues: T[] = [];
  return function rec(...args: T[]): () => any {
    length -= args.length;
    argValues.push(...args);
    if (length === 0) {
      const argPassed = argValues;
      argValues = [];
      length = func.length;
      return func(...argPassed);
    }
    return function (...args2: T[]) {
      return rec(...args2);
    };
  };
}
