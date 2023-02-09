import { showArithmeticMeanOfOddFrom1ToN } from "./ArithmeticMeanOfOddFrom1ToN";

describe("showArithmeticMeanOfOddFrom1ToN", () => {
  it("is a function", () => {
    expect(showArithmeticMeanOfOddFrom1ToN).toBeInstanceOf(Function);
  });
  it('return "5" for prompt "10"', () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "10");
    console.log = jest.fn();
    showArithmeticMeanOfOddFrom1ToN();
    expect(console.log.mock.calls[0][0]).toBe(5);
  });
});
