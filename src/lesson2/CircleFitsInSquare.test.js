import { determineCircleFitsInSquare } from "./CircleFitsInSquare";

describe("determineCircleFitsInSquare", () => {
  it("is a function", () => {
    expect(determineCircleFitsInSquare).toBeInstanceOf(Function);
  });
  it('return "Круг поместится в квадрат" for determineCircleFitsInSquare(5,10)', () => {
    expect(determineCircleFitsInSquare(5, 10)).toBe(
      "Круг поместится в квадрат"
    );
  });
  it('return "Круг поместится в квадрат" for determineCircleFitsInSquare(5,10)', () => {
    expect(determineCircleFitsInSquare(15, 10)).toBe(
      "Круг не поместится в квадрат"
    );
  });
});
