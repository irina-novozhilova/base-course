import { showMultiplySumNumber } from "./MultiplySumNumber";

describe("showMultiplySumNumber", () => {
  it("is a function", () => {
    expect(showMultiplySumNumber).toBeInstanceOf(Function);
  });
  it('return "6, 5" for showMultiplySumNumber(2, 3)', () => {
    console.log = jest.fn();
    showMultiplySumNumber(2, 3);
    expect(console.log.mock.calls[0][0]).toBe(6);
    expect(console.log.mock.calls[0][1]).toBe(5);
  });
});
