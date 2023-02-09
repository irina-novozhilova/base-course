import { diff } from "./diff";

describe("diff", () => {
  it("is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });
  it("return '2' for diff(9,7)", () => {
    expect(diff(9, 7)).toBe(2);
  });
  it("return '2' for diff(7,9)", () => {
    expect(diff(7, 9)).toBe(2);
  });
});
