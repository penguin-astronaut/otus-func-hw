import { curry } from "./curry";

describe("curry", () => {
  it("test func", () => {
    const myFunc = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;
    const curried = curry(myFunc);
    expect(typeof curried).toBe("function");
    expect(curried(1)(2)(3)(3)(3)).toBe(12);
    expect(curried(1)(2)(3)(3)(3)).toBe(12);
    expect(curried(30, -2)(4)(-12)(4)).toBe(24);
    expect(curried(-22, -2, 4, 22, -2)).toBe(0);
  });
});
