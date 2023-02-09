import { diff } from "./diff";

describe("diff", () => {
  it("is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });
  it("return '2' for diff(9,7)", () => {
    expect(diff(9, 7)).toBe(2);
  });
});
