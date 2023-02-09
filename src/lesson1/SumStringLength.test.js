import { showSumStringLength } from "./SumStringLength";

describe("showSumStringLength", () => {
  it("is a function", () => {
    expect(showSumStringLength).toBeInstanceOf(Function);
  });
  it('return "6" for showMultiplySumNumber("dog", "cat")', () => {
    console.log = jest.fn();
    showSumStringLength("dog", "cat");
    expect(console.log.mock.calls[0][0]).toBe(6);
  });
});
