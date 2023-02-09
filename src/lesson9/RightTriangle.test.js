import { isTriangleRight } from "./RightTriangle";

describe("isTriangleRight", () => {
  it("is a function", () => {
    expect(isTriangleRight).toBeInstanceOf(Function);
  });
  it("return true for 3 ,4, 5", () => {
    expect(isTriangleRight(3, 4, 5)).toBeTruthy();
  });
  it("return false for 10 , 11, 12", () => {
    expect(isTriangleRight(10, 11, 12)).toBeFalsy();
  });
});
