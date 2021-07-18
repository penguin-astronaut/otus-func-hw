import { curry } from "./curry";

describe("curry", () => {
  it("test func", () => {
    const myFunc = jest.fn((a: any, b: any, c: any) => a + b + c);
    const curried = curry(myFunc);
    expect(typeof curried).toBe("function");
    expect(myFunc).toHaveBeenCalledTimes(0);
    expect(curried(1)(2)(3)).toBe(6);
    expect(myFunc).toHaveBeenCalledTimes(1);
    expect(curried(30, -2)(4)).toBe(32);
    expect(myFunc).toHaveBeenCalledTimes(2);
    expect(curried(-22, -2, 4)).toBe(-20);
    expect(myFunc).toHaveBeenCalledTimes(3);
  });
});
