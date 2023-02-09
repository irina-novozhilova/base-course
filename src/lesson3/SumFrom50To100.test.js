import { findSumFrom50To100 } from "./SumFrom50To100";

describe("findSumFrom50To100", () => {
  it("is a function", () => {
    expect(findSumFrom50To100).toBeInstanceOf(Function);
  });
  it("function returns 3825", () => {
    console.log = jest.fn();
    findSumFrom50To100();
    expect(console.log.mock.calls[0][0]).toBe(3825);
  });
});
