import { pow } from "./pow";

describe("pow", () => {
  it("is a function", () => {
    expect(pow).toBeInstanceOf(Function);
  });
  it("return '9' for pow(3,2)", () => {
    expect(pow(3, 2)).toBe(9);
  });
  it("return '3' for pow(3,0)", () => {
    expect(pow(3, 0)).toBe(1);
  });
});
